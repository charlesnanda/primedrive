import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Environment, Stage } from "@react-three/drei";

//  model import
import { Bugatti_Sport } from "./models/2026_bugatti_tourbillon";

const ModelViewer = () => {
    const [webglSupported, setWebglSupported] = useState(true)
    const [contextLost, setContextLost] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Device support Check
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        try {
            const canvas = document.createElement("canvas");
            const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (!gl) {
                setWebglSupported(false);
            }
        } catch (error) {
            setWebglSupported(false);
        }

        return () => window.removeEventListener("resize", handleResize);
    },[])

    if (!webglSupported) {
        return (
            <div className="flex items-center justify-center w-full h-full text-white bg-zinc-900">
                WebGL is not supported on this device
            </div>
        )
    }

    if (contextLost) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full text-white bg-zinc-900 gap-4">
                <p>Graphics context lost</p>
                <button 
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors pointer-events-auto"
                >
                    Reload Page
                </button>
            </div>
        )
    }




  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
    <Canvas camera={{ position: [0.1, 0.1, 0.2], fov: isMobile ? 50 : 20 }} gl={{
        antialias: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
    }} style={{width: "100%", height: "100%"}}
       onCreated={({gl}) => {
        const canvas = gl.domElement;
        const handleContextLost = (e) => {
            e.preventDefault();
            console.warn("WebGL context lost");
            setContextLost(true);
        };
        canvas.addEventListener("webglcontextlost", handleContextLost);
    }}
    >


        <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
                {/** PUT ANY MODEL ON STAGE */}

                <Bugatti_Sport />
            </Stage>

            {/** Lighting */}
            <Environment preset="city"/>

            {/** CONTROLS: Scene UX */}
            <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate={true} 
                autoRotateSpeed={1}
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 1.75}
            />
        </Suspense>
    </Canvas>
    </div>
  )
}

export default ModelViewer