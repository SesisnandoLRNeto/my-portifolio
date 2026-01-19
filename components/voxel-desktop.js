import { useState, useEffect, useRef, useCallback } from "react"
import { Box, Spinner } from "@chakra-ui/react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { loadGLTFModel } from "../libs/model"

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDesktop = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
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

      const renderer = new THREE.WebGL1Renderer({
        antialias: true,
        alpha: true
      })

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.physicallyCorrectLights = true
      container.appendChild(renderer.domElement)

      setRenderer(renderer)

      const scale = scH * 0.0005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      // Bright ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      // Brighter directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 10, 5)
      directionalLight.castShadow = true
      scene.add(directionalLight)

      // Extra point light for additional brightness
      const pointLight1 = new THREE.PointLight(0xffffff, 7)
      pointLight1.position.set(-5, 10, 5)
      scene.add(pointLight1)

      // Another point light for balanced lighting
      const pointLight2 = new THREE.PointLight(0xffffff, 6)
      pointLight2.position.set(5, -10, -5)
      scene.add(pointLight2)

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 6)
      hemiLight.position.set(0, 20, 0)
      scene.add(hemiLight)

      const extraDirectionalLight = new THREE.DirectionalLight(0xffffff, 7)
      extraDirectionalLight.position.set(-5, 5, -5)
      scene.add(extraDirectionalLight)
      ;("")
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

  return (
    <Box
      ref={refContainer}
      className="voxel-desktop"
      m="auto"
      at={["-20px", "-60px", "-120px"]}
      mb={["-40px", "-140px", "-200px"]}
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
