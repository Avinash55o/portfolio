"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Define a proper type for the props with ThreeJS types
type BitCoinModelProps = {
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  onLoad?: () => void;
};

export default function BitCoinModel({ 
  scale = 0.12, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  onLoad,
  ...props 
}: BitCoinModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Use the correct path to the GLTF model
  const { scene } = useGLTF("/models/bit_coin/scene.gltf");
  
  // Clone the scene to avoid material sharing issues
  const clonedScene = useMemo(() => {
    return scene.clone();
  }, [scene]);
  
  // Apply proper materials
  useEffect(() => {
    if (clonedScene) {
      clonedScene.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          // Ensure materials are properly configured
          if (node.material) {
            node.material.transparent = false;
            node.material.metalness = 0.8;
            node.material.roughness = 0.2;
            // Gold color for Bitcoin
            node.material.color = new THREE.Color(0xFFD700);
            node.castShadow = true;
            node.receiveShadow = true;
          }
        }
      });
      
      // Center the model properly
      const box = new THREE.Box3().setFromObject(clonedScene);
      const center = box.getCenter(new THREE.Vector3());
      clonedScene.position.x = -center.x;
      clonedScene.position.y = -center.y;
      clonedScene.position.z = -center.z;
      
      // Notify parent component that model is loaded
      if (onLoad) onLoad();
    }
  }, [clonedScene, onLoad]);
  
  // Add rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group 
      ref={groupRef} 
      {...props} 
      position={position as unknown as THREE.Vector3} 
      rotation={rotation as unknown as THREE.Euler}
    >
      <primitive object={clonedScene} scale={scale} />
    </group>
  );
} 