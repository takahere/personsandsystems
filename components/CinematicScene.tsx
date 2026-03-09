"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

// Massive P&S Sculpture with overwhelming scale - Now reactive to section changes
function MassivePSStructure({ currentSection }: { currentSection: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const vineParticlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Section-specific animations
      switch (currentSection) {
        case 0:
          // Section 0: Slow rotating monolith
          groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.03;
          break;
        case 1:
          // Section 1: Faster rotation with pulsing
          groupRef.current.rotation.y = t * 0.1;
          const scale = 1 + Math.sin(t * 0.5) * 0.05;
          groupRef.current.scale.setScalar(scale);
          break;
        case 2:
          // Section 2: Chaotic movement for particle dissolution
          groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
          groupRef.current.rotation.x = Math.cos(t * 0.2) * 0.05;
          break;
      }
    }

    // Animate bioluminescent vines
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(t * 0.5 + i * 0.05) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Floating particles - more intense in section 2
    if (vineParticlesRef.current) {
      const speed = currentSection === 2 ? 0.1 : 0.02;
      vineParticlesRef.current.rotation.y = -t * speed;
    }
  });

  // Create massive bioluminescent particle field
  const particleGeometry = useMemo(() => {
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Vine particles
  const vineGeometry = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 8;
      const radius = 5 + Math.random() * 8;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  return (
    <group ref={groupRef}>
      {/* MASSIVE "P" STRUCTURE - Left side */}
      <group position={[-6, 0, 0]}>
        {/* P vertical stem - Polished Chrome */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 12, 2]} />
          <meshStandardMaterial
            color="#c0c0c0"
            metalness={1.0}
            roughness={0.05}
            envMapIntensity={2.5}
          />
        </mesh>

        {/* P top curve - Chrome with glass */}
        <mesh position={[2, 4, 0]} castShadow receiveShadow>
          <torusGeometry args={[2.5, 0.75, 32, 100, Math.PI]} />
          <meshStandardMaterial
            color="#c0c0c0"
            metalness={1.0}
            roughness={0.05}
            envMapIntensity={2.5}
          />
        </mesh>

        {/* P horizontal bar - Translucent Bio-Glass */}
        <mesh position={[2, 1.5, 0]} castShadow>
          <boxGeometry args={[3, 0.8, 1.5]} />
          <MeshTransmissionMaterial
            color="#e8f4f8"
            transmission={0.98}
            roughness={0.05}
            thickness={1.5}
            ior={1.6}
            chromaticAberration={0.08}
            anisotropy={0.5}
          />
        </mesh>

        {/* Moss growing on P */}
        <mesh position={[0, -1, 0.8]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial
            color="#1a3a1a"
            roughness={1.0}
            metalness={0}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Bioluminescent glow on P */}
        <mesh position={[0, 3, 1]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#66ff99"
            emissive="#66ff99"
            emissiveIntensity={1.2}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>

      {/* MASSIVE "&" OR "S" STRUCTURE - Right side */}
      <group position={[6, 0, 0]}>
        {/* S top curve - Polished Chrome */}
        <mesh position={[0, 4, 0]} rotation={[0, 0, Math.PI]} castShadow>
          <torusGeometry args={[2.2, 0.8, 32, 100, Math.PI]} />
          <meshStandardMaterial
            color="#b8b8b8"
            metalness={1.0}
            roughness={0.08}
            envMapIntensity={2.5}
          />
        </mesh>

        {/* S bottom curve - Translucent Glass */}
        <mesh position={[0, -4, 0]} castShadow>
          <torusGeometry args={[2.2, 0.8, 32, 100, Math.PI]} />
          <MeshTransmissionMaterial
            color="#e8f4f8"
            transmission={0.95}
            roughness={0.05}
            thickness={1.2}
            ior={1.5}
            chromaticAberration={0.1}
          />
        </mesh>

        {/* S middle connector - Chrome */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, -0.3]} castShadow>
          <boxGeometry args={[1.2, 4, 1.5]} />
          <meshStandardMaterial
            color="#c0c0c0"
            metalness={1.0}
            roughness={0.05}
            envMapIntensity={2.5}
          />
        </mesh>

        {/* Thick moss on S */}
        <mesh position={[0, -2, 0.9]}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial
            color="#1a3a1a"
            roughness={1.0}
            metalness={0}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Bio glow */}
        <mesh position={[0, 2, 1.2]}>
          <sphereGeometry args={[1.8, 32, 32]} />
          <meshStandardMaterial
            color="#66ff99"
            emissive="#66ff99"
            emissiveIntensity={1.5}
            transparent
            opacity={0.25}
          />
        </mesh>
      </group>

      {/* Bioluminescent vine particles */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.08}
          color="#66ff99"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Floating vine strands */}
      <points ref={vineParticlesRef} geometry={vineGeometry}>
        <pointsMaterial
          size={0.12}
          color="#66ff99"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Additional atmospheric glow */}
      <mesh position={[0, 0, -5]}>
        <sphereGeometry args={[15, 64, 64]} />
        <meshStandardMaterial
          color="#66ff99"
          emissive="#66ff99"
          emissiveIntensity={0.3}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

// Fallback while 3D loads
function Loader() {
  return (
    <mesh>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#1a1a1a" wireframe />
    </mesh>
  );
}

// Reactive Camera Controller - smoothly transitions between section views
function CameraController({ currentSection }: { currentSection: number }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (!cameraRef.current) return;

    // Define target camera positions for each section
    const cameraPositions = [
      { pos: new THREE.Vector3(0, 0, 20), fov: 60 },      // Section 0: Front view
      { pos: new THREE.Vector3(8, -5, 15), fov: 70 },     // Section 1: Low-angle zoom
      { pos: new THREE.Vector3(-5, 10, 18), fov: 80 },    // Section 2: High-angle wide
    ];

    const target = cameraPositions[currentSection];

    // Smooth lerp to target position
    cameraRef.current.position.lerp(target.pos, 0.05);
    cameraRef.current.lookAt(0, 0, 0);

    // Smooth FOV transition
    cameraRef.current.fov = THREE.MathUtils.lerp(cameraRef.current.fov, target.fov, 0.05);
    cameraRef.current.updateProjectionMatrix();
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 20]} fov={60} />;
}

export default function CinematicScene({ currentSection }: { currentSection: number }) {
  return (
    <motion.div
      className="w-full h-full bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Canvas shadows gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping }}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 15, 40]} />

        <Suspense fallback={<Loader />}>
          {/* Reactive Camera - transitions based on currentSection */}
          <CameraController currentSection={currentSection} />

          {/* Ultra-dramatic cinematic lighting */}
          <ambientLight intensity={0.05} />

          {/* Main dramatic rim lights - creates silhouette */}
          <spotLight
            position={[-15, 8, 10]}
            angle={0.3}
            penumbra={1}
            intensity={currentSection === 1 ? 12 : 8}
            color="#4d9fff"
            castShadow
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-bias={-0.0001}
          />
          <spotLight
            position={[15, -8, 10]}
            angle={0.3}
            penumbra={1}
            intensity={currentSection === 1 ? 10 : 6}
            color="#66ff99"
            castShadow
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
          />

          {/* Key light from above - main illumination */}
          <directionalLight
            position={[0, 20, 8]}
            intensity={currentSection === 2 ? 1 : 2}
            color="#ffffff"
            castShadow
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
          />

          {/* Deep background light - creates depth */}
          <pointLight position={[0, 0, -15]} intensity={1.5} color="#1a3a1a" />

          {/* Accent lights for chrome reflections */}
          <pointLight position={[-10, 5, 5]} intensity={currentSection === 1 ? 4 : 2} color="#66ff99" />
          <pointLight position={[10, -5, 5]} intensity={currentSection === 1 ? 4 : 2} color="#4d9fff" />
          <pointLight position={[0, 10, -5]} intensity={1} color="#c0c0c0" />

          {/* Environment for photorealistic reflections */}
          <Environment preset="night" />

          {/* MASSIVE P&S Structure - Reactive to currentSection */}
          <MassivePSStructure currentSection={currentSection} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
