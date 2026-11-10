import { useState, useEffect, useRef, useCallback } from "react"
import { Box, Spinner } from "@chakra-ui/react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { loadGLTFModel } from "../libs/model"

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

// Clean keyboard drawn above the melted one baked into the model.
// Coordinates are in model space (the model is about 1 unit tall).
function createKeyboard() {
  const kb = new THREE.Group()
  const plateMat = new THREE.MeshStandardMaterial({
    color: 0x23262b,
    roughness: 0.6
  })
  const keyMat = new THREE.MeshStandardMaterial({
    color: 0x3a3e45,
    roughness: 0.55
  })
  kb.add(new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.008, 0.32), plateMat))

  const rows = 5
  const cols = 12
  const size = 0.0165
  const gap = 0.0045
  const step = size + gap
  const keyGeo = new THREE.BoxGeometry(size, 0.006, size)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = new THREE.Mesh(keyGeo, keyMat)
      key.position.set(-0.1 + r * step, 0.007, (c - (cols - 1) / 2) * step)
      kb.add(key)
    }
  }
  kb.position.set(0.155, -0.183, 0.1)
  return kb
}

// Fit the orthographic frustum to the model for every auto-rotate angle,
// so the figure fills the canvas without being cut.
function frameModel(camera, model, cameraPosition) {
  const box = new THREE.Box3().setFromObject(model)
  const center = box.getCenter(new THREE.Vector3())
  const dir = cameraPosition.clone().normalize()
  const up = new THREE.Vector3(0, 1, 0)
  let half = 0
  const corner = new THREE.Vector3()
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 36) {
    const d = dir.clone().applyAxisAngle(up, a)
    const right = new THREE.Vector3().crossVectors(up, d).normalize()
    const camUp = new THREE.Vector3().crossVectors(d, right).normalize()
    for (let i = 0; i < 8; i++) {
      corner
        .set(
          i & 1 ? box.max.x : box.min.x,
          i & 2 ? box.max.y : box.min.y,
          i & 4 ? box.max.z : box.min.z
        )
        .sub(center)
      half = Math.max(
        half,
        Math.abs(corner.dot(right)),
        Math.abs(corner.dot(camUp))
      )
    }
  }
  half *= 1.04
  camera.left = -half
  camera.right = half
  camera.top = half
  camera.bottom = -half
  camera.updateProjectionMatrix()
}

const VoxelDesktop = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0, 0, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )

  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      let renderer
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        })
      } catch (error) {
        // No WebGL: hide the model instead of crashing the page
        setFailed(true)
        setLoading(false)
        return
      }

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputColorSpace = THREE.SRGBColorSpace
      container.appendChild(renderer.domElement)

      setRenderer(renderer)

      const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.01, 50000)
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      // Soft sky light, one key light and one fill light
      scene.add(new THREE.HemisphereLight(0xffffff, 0xc9beb3, 2.8))
      const keyLight = new THREE.DirectionalLight(0xfff6ec, 2.4)
      keyLight.position.set(5, 8, 6)
      scene.add(keyLight)
      const fillLight = new THREE.DirectionalLight(0xdfe9ff, 0.9)
      fillLight.position.set(-6, 3, -2)
      scene.add(fillLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      // Load the GLTF model
      loadGLTFModel(scene, "/desktop.glb", {
        receiveShadow: false,
        castShadow: false
      }).then(model => {
        model.scale.set(4.2, 4.2, 4.2)
        model.add(createKeyboard())
        frameModel(camera, model, initialCameraPosition)
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0

      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false)
    return () => {
      window.removeEventListener("resize", handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  if (failed) return null

  return (
    <Box
      ref={refContainer}
      className="voxel-desktop"
      m="auto"
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size)/2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  )
}
export default VoxelDesktop
