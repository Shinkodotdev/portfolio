import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room.jsx';

const AboutExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const canvasHeight = isMobile ? '300px' : isTablet ? '400px' : '600px';

  return (
    <div style={{ width: '100%', height: canvasHeight, background: '#0d0d1a', borderRadius: '2rem', overflow: 'hidden', }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }} gl={{ preserveDrawingBuffer: true }}>
        {/* Lights */}
          <hemisphereLight intensity={0.4} groundColor="black" />
          <ambientLight intensity={0.5} />
          <directionalLight castShadowposition={[10, 20, 15]} intensity={3} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <spotLight position={[15, 20, 15]} angle={0.5} intensity={1} penumbra={1} castShadow />
        {/* Controls */}
          <OrbitControls enablePan={false} enableZoom={false} minDistance={1} maxDistance={1.5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} autoRotate={true} autoRotateSpeed={1} />
        {/* Environment */}
          <Environment preset="night" />
        {/* 3D Model Group */}
          <Suspense fallback={null}>  
              <Room />
          </Suspense>
        {/* Contact Shadows */}
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5}
        />
      </Canvas>
    </div>
  );
};
export default AboutExperience;
