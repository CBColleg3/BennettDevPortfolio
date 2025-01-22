import {React, useRef, useState, useMemo} from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useHelper, VideoTexture, View} from '@react-three/drei'
import CameraControls from 'camera-controls'

import * as THREE from 'three';

import EFTSVideo from '/EFTSGameplay.mp4';
import Portfolio from "./components/Portfolio_animated"
import { useZoomStore } from './stores/zoomStore';

CameraControls.install({ THREE })

const CameraHelper = ({cameraRef}) => {
  useHelper(cameraRef, THREE.CameraHelper);

  return null;
};

function Controls({ zoom, focus, pos = new THREE.Vector3(), look = new THREE.Vector3() }) {
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  console.log("x:" + focus.x + " y:" + focus.y + "z: " + focus.z);

  return useFrame((state, delta) => {
    //console.log(focus);
    zoom ? pos.set(focus.x, focus.y, focus.z + 10.2) : pos.set(-5, 14, 29)
    zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 0)

    state.camera.position.lerp(pos, 0.5)
    state.camera.updateProjectionMatrix()

    controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, look.x, look.y, look.z, true)
    return controls.update(delta)
  })
}


const Scene = ({ camera, zoomToView }) => {

  const cameraCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(12.842780299819225,27.64306707811378,-10.959181707986152)
  ])

  //console.log(camera);
  //console.log(zoomToView);

  //const vid = document.createElement("video");
  //vid.src = EFTSVideo;
  //vid.muted = true;
  //vid.autoPlay = true;
  //vid.loop = true;

  useFrame(()=>{
    if(camera) {
      // console.log("position");
      // console.log(camera.current.position);
      // console.log("rotation");
      // console.log(camera.current.rotation);
    }
  })
  return (
    <>
    {/*<VideoTexture video={vid}></VideoTexture> */}
       <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      
      <Portfolio camera={camera} zoomToView={zoomToView}/>
    </>
  )

}


const Experience = () => {
  const controls1 = useRef();
  const controls2 = useRef();
  const camera1 = useRef();
  const camera2 = useRef();

  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState({});

  //const {zoom, setZoom, focus, setFocus} = useZoomStore();
  //console.log("zoom: " + zoom + "focus: " + focus);


  return ( 
    <>
      <Canvas
        linear
        eventSource={document.getElementById("root")}
        camera={{position:[ -5.771857535826236,
        14.433176216957264,29.611426604433753], 
        fov: 87, rotation: [-0.20527731316780248,0.04016154504691107,0.008359598256382718],}}
        style={{ backgroundColor: "#a5aaa6"}}
        >

        <Scene camera={camera1} zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))} />    
        <View.Port />
        <Controls zoom={zoom} focus={focus} />
      </Canvas>
    
    </>

  
  )
}

export default Experience