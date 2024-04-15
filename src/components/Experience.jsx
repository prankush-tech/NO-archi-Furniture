import { OrbitControls, MeshReflectorMaterial } from "@react-three/drei";
import { Table } from './Table.jsx'
export const Experience = () => {


  return (
    <>
      {/* <axesHelper args={[5]} /> */}
      <directionalLight
       position={[3, 1.0, 1]}
          castShadow
          intensity={2}
        />
    
      <ambientLight intensity={1.2} />
      {/* <color attach="background" args={['grey']} /> */}
      <Table />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} scale={1}>
      <planeGeometry args={[10,10]} />
        <MeshReflectorMaterial
         blur={[300, 100]}
         resolution={2048}
         mixBlur={0.5}
         mixStrength={10}
         roughness={1}
         depthScale={1.2}
         minDepthThreshold={0.4}
         maxDepthThreshold={1.4}
         color="greenyellow"
         metalness={0.5}
          mirror={0.5}
        />
      </mesh>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};


//7001408479