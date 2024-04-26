"use client"

import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';


const GlobeComponent = () => {
  const globeEl = useRef(null);
  const router = useRouter(); // Directly use useRouter here

  useEffect(() => {

    const globe = globeEl.current;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;

    // Add clouds sphere
    const CLOUDS_IMG_URL = '/clouds.png';
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, []);

  return <Globe
    ref={globeEl}
    animateIn={false}
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    backgroundColor={"#ff004800"}
    height={600}
    width={500}
    onGlobeClick={({lat, lng}) => {
      {
        console.log('Clicked at latitude:', lat, 'longitude:', lng);
        router.push(`/start?latitude=${lat}&longitude=${lng}`);
    }}}
  />;
};

export default GlobeComponent;
