import React, { useState, useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { IcosahedronGeometry } from 'three';
import vertexShader from "./vertexShader";
import { MathUtils } from "three";

function importFragmentShader(color) {
  switch (color) {
      case 'blue':
          return import ('./fragmentShaders/blueShader.js');
      case 'green':
          return import('./fragmentShaders/greenShader.js');
      case 'purple':
        return import('./fragmentShaders/purpleShader.js');
      case 'orange':
        return import('./fragmentShaders/orangeShader.js');
      case 'yellow':
        return import('./fragmentShaders/yellowShader.js');
      case 'pink':
        return import('./fragmentShaders/pinkShader.js');
      case 'red':
        return import('./fragmentShaders/redShader.js');
        default:
        return import('./fragmentShaders/blueShader.js');
  }
}

const Blob = ({ color }) => {
    const mesh = useRef();
    const hover = useRef(false);


    const [fragmentShaderModule, setFragmentShaderModule] = useState(null);

    useEffect(() => {
      let isMounted = true;

      importFragmentShader(color).then(module => {
          if (isMounted) {
              setFragmentShaderModule(module.default);
          }
      });

      return () => {
          isMounted = false;
      };
  }, [color]);


    useMemo(() => {
      importFragmentShader(color).then(module => {
        setFragmentShaderModule(module.default);
      });
    }, [color]);

    // console.log("Fragment Shade Module:", fragmentShaderModule);

    useFrame((state) => {
        const { clock } = state;
        if (mesh.current) {
          mesh.current.material.uniforms.u_time.value =
            0.4 * clock.getElapsedTime();
    
          mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 1 : 0.15,
            0.02
          );
        }
      });

      return fragmentShaderModule ? (
        <mesh 
          ref={mesh} 
          scale={3.5} 
          position={[0, 0, 0]} 
          geometry={new IcosahedronGeometry(2, 40)}>
            <shaderMaterial 
              vertexShader={vertexShader} 
              fragmentShader={fragmentShaderModule}
              uniforms={{
                u_time: { value: 0 },
                u_intensity: { value: 0.3 }
              }}
            />
        </mesh>
      ) : null;
      
}

export default Blob;

