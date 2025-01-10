import React from 'react'
import { useBounds } from '@react-three/drei'

export default function BoundFit() 
{
    console.log("BoundFit");
    const api = useBounds();

    api.refresh().fit();

    // Add orthographic-specific logic
    if (isOrthographicCamera(camera)) {
        direction.x = 0;
        direction.z = 0;
    }
}