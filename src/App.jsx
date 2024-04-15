import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {  AccumulativeShadows, RandomizedLight } from '@react-three/drei'

import {Interface} from './components/Interface'

function App() {


  return (
    <>
      <h1 className="HeadingFont" >NO ARCHI <br/> FURNITURE TABLES</h1>
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
        <Experience />
      </Canvas>
      <a className="ButtonBuyNow" href="https://pages.razorpay.com/pl_NyoIXrqPadiDMg/view" target="_blank" >BUY-NOW</a>
      <Interface/>
    </>
  );
}

export default App;
