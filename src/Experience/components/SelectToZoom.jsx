import React from 'react'
import { useBounds } from '@react-three/drei'
import BoundFit from '../Utils/BoundFit'

const SelectToZoom = ({children, cameraHolder}) => {
    const api = useBounds()

    return (
    <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) =>  console.log(cameraHolder.current)}>
        {console.log("children: ")}
        {console.log(children)}
        {children}
    </group>
    )
}

export default SelectToZoom