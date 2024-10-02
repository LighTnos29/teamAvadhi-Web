import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import marsTexture from '../assets/images/marsTexture.webp';
import { FaAnglesDown } from "react-icons/fa6";


const HeroSection = () => {
  useEffect(() => {
    // Creating a scene
    const scene = new THREE.Scene();

    const loader = new THREE.TextureLoader();
    const texture = loader.load(marsTexture);

    // Creating a sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 1,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Lights
    const lights = new THREE.PointLight(0xffa07a, 100, 100);
    lights.position.set(10, 10, 10);
    scene.add(lights);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
    camera.position.z = 10;
    scene.add(camera);

    // Render
    const canvas = document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);

    // Resize
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    // Controls
    const control = new OrbitControls(camera, canvas);
    control.enableDamping = true;
    control.enablePan = false;
    control.enableZoom = false;
    control.autoRotateSpeed = 5;

    const loop = () => {
      control.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    // Mouse movement for light
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const canvasBounds = canvas.getBoundingClientRect();

      // Calculate normalized mouse position (range from -1 to 1)
      const x = ((clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
      const y = -((clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

      // Update light position based on the mouse movement
      lights.position.x = x * 10;
      lights.position.y = y * 10;
      lights.position.z = 10;
    };

    // Add event listener for mouse movement
    canvas.addEventListener('mousemove', onMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', () => { });
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className='relative w-full h-full'>
      <canvas className='webgl'></canvas>
        <div className='absolute top-10 left-1/2 transform -translate-x-1/2 text-white lg:mt-96 mt-80 text-5xl md:text-8xl lg:text-8xl ml-1 lg:ml-3 font-semibold tracking-tighter h-44'>
          लोकसीमातिवर्तिन्
          <h1 className='lg:hidden text-sm tracking-tighter text-center mt-4 font-[Montserrat]'>Swipe here</h1>
          <div className=' lg:hidden flex justify-center'>
          <FaAnglesDown className='text-sm'/>  
          </div>
          
        </div>
        
    </div>
  );
};

export default HeroSection;
