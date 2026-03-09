"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { SectionData } from "./types";

interface AnimatedObjectProps {
  config: SectionData["sceneConfig"];
}

function AnimatedObject({ config }: AnimatedObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // Smooth animation using useFrame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous subtle rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Lerp to target rotation
      const targetRotation = new THREE.Euler(
        config.objectRotation[0],
        config.objectRotation[1],
        config.objectRotation[2]
      );

      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotation.x + state.clock.elapsedTime * 0.2,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation.y + state.clock.elapsedTime * 0.3,
        0.05
      );
    }

    // Camera animation - smooth lerp to target position
    if (cameraRef.current) {
      cameraRef.current.position.lerp(
        new THREE.Vector3(...config.cameraPosition),
        0.05
      );
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  // Render appropriate geometry based on type
  const renderGeometry = () => {
    switch (config.objectType) {
      case "sphere":
        return <sphereGeometry args={[1, 32, 32]} />;
      case "box":
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 100]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  };

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={config.cameraPosition}
        fov={50}
      />

      <mesh ref={meshRef} position={[0, 0, 0]}>
        {renderGeometry()}
        <meshStandardMaterial
          color={config.objectColor}
          metalness={0.6}
          roughness={0.2}
          emissive={config.objectColor}
          emissiveIntensity={0.2}
        />
      </mesh>
    </>
  );
}

interface SceneProps {
  activeIndex: number;
  sections: SectionData[];
}

export default function Scene({ activeIndex, sections }: SceneProps) {
  const currentConfig = sections[activeIndex].sceneConfig;

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas>
        <ambientLight intensity={currentConfig.ambientIntensity} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <AnimatedObject config={currentConfig} />
      </Canvas>
    </motion.div>
  );
}
