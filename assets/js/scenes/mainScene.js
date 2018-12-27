import * as THREE from 'three'
import OrbitControls from '~/assets/js/utils/OrbitControls'


if (process.browser) {
  var dat = require('dat.gui')
}

export default class AMainScene {
  constructor () {
    this.dom = {
      container: document.getElementById('main'),
      guiContainer: document.getElementById('gui-container')
    }
    if(process.browser) {
      this.width = window.innerWidth
      this.height = window.innerHeight

      this.init()
    }

  }

  addControls = () => {
    this.controls = new OrbitControls(this.camera)
  }

  addGUI = () => {
    this.gui = new dat.GUI({
      autoPlace: false
    })
    this.options = {
      speed: 0.02
    }

    const box = this.gui.addFolder('Box')
    box.add( this.options, "speed", 0.01, 0.5 )

    this.dom.guiContainer.appendChild(this.gui.domElement)
  }

  addBox = () => {
    var geometry = new THREE.BoxGeometry(10, 10, 10)
    var material = new THREE.MeshNormalMaterial()
    this.mesh = new THREE.Mesh( geometry, material )
    this.scene.add( this.mesh )
  }

  createScene = () => {
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setClearColor(0xffffff)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.width, this.height)

    this.dom.container.appendChild(this.renderer.domElement)
  }

  createCamera = () => {
    const aspectRatio = 30
    const fieldOfView = this.width / this.height
    const nearPlane = 1
    const farPlane = 10000

    this.camera = new THREE.PerspectiveCamera(
      aspectRatio,
      fieldOfView,
      nearPlane,
      farPlane
    )

    this.camera.position.z = 100
    this.camera.lookAt(this.scene.position)

    this.scene.add(this.camera)
  }

  init = () => {
    this.addListeners()
    this.addGUI()
    this.createScene()
    this.createCamera()
    this.addBox()
    this.addControls()
    this.animate()
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    this.controls.update()

    this.mesh.rotation.x += this.options.speed
    this.mesh.rotation.y += this.options.speed

    this.render()
  }

  render = () => {
    this.renderer.render(this.scene, this.camera)
  }

  addListeners = () => {
    window.addEventListener('resize', this.onWindowResize)
  }

  removeListeners = () => {
    window.removeEventListener('resize', this.onWindowResize)
  }

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
