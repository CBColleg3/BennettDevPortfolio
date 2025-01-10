import { useVideoTexture } from '@react-three/drei'
import React from 'react'

import * as THREE from 'three'

const VideoMaterial = ({src}) => {
    const texture = useVideoTexture(src);
    //texture.minFilter = THREE.NearestFilter;
   // texture.magFilter = THREE.LinearFilter;
    //texture.format = THREE.RGBFormat;
    //texture.mapping = THREE.UVMapping;
   // texture.generateMipmaps = false;
    //texture.repeat.set(0.5, 0.5);

  return (
    <meshStandardMaterial  map={texture}  toneMapped={false} />
  )
};

export default VideoMaterial