import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SENSOR_NODES } from '../../data/mockData';
import { SensorNodeInfo } from '../../types';
import { Info, RotateCw, ZoomIn, Eye, Layers } from 'lucide-react';

interface RobotCanvasProps {
  selectedNodeId: string | null;
  onSelectNode: (node: SensorNodeInfo) => void;
}

export const RobotCanvas: React.FC<RobotCanvasProps> = ({ selectedNodeId, onSelectNode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<SensorNodeInfo | null>(null);
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const robotGroupRef = useRef<THREE.Group | null>(null);
  const markersRef = useRef<{ mesh: THREE.Mesh; node: SensorNodeInfo }[]>([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup with abyssal underwater fog
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x040d1a);
    scene.fog = new THREE.FogExp2(0x040d1a, 0.045);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(4.5, 2.2, 5.0);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting (Simulating deep ocean with artificial robot spotlights)
    const ambientLight = new THREE.AmbientLight(0x0f2a4a, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    keyLight.position.set(5, 8, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00f0b5, 1.2);
    fillLight.position.set(-5, -2, -3);
    scene.add(fillLight);

    // Seafloor grid plane
    const gridHelper = new THREE.GridHelper(16, 24, 0x00e5ff, 0x092244);
    gridHelper.position.y = -1.8;
    scene.add(gridHelper);

    // Bathymetric seafloor terrain contour lines
    const seafloorGeo = new THREE.PlaneGeometry(16, 16, 20, 20);
    const seafloorMat = new THREE.MeshStandardMaterial({
      color: 0x031024,
      roughness: 0.9,
      metalness: 0.1,
      wireframe: false
    });
    const seafloor = new THREE.Mesh(seafloorGeo, seafloorMat);
    seafloor.rotation.x = -Math.PI / 2;
    seafloor.position.y = -1.82;
    scene.add(seafloor);

    // Marine snow particles (subtle particulate matter in ocean)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.04,
      transparent: true,
      opacity: 0.4
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Construct the VARUNA06 Prototype Robot Geometry
    const robot = new THREE.Group();
    robotGroupRef.current = robot;
    scene.add(robot);

    // Materials
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x111c2e,
      roughness: 0.4,
      metalness: 0.8
    });
    const yellowRollBarMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.3,
      metalness: 0.5
    });
    const acrylicMat = new THREE.MeshPhysicalMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.6,
      roughness: 0.1,
      transmission: 0.8,
      thickness: 0.5
    });
    const copperCoilMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.3,
      metalness: 0.9
    });
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.2,
      metalness: 0.95
    });

    // Main Cylindrical Pressure Vessel (N5 inside)
    const hullGeo = new THREE.CylinderGeometry(0.45, 0.45, 1.8, 24);
    const hull = new THREE.Mesh(hullGeo, chassisMat);
    hull.rotation.z = Math.PI / 2;
    robot.add(hull);

    // Acrylic End Dome (Front Optical Viewport)
    const frontDomeGeo = new THREE.SphereGeometry(0.45, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const frontDome = new THREE.Mesh(frontDomeGeo, acrylicMat);
    frontDome.position.x = 0.9;
    frontDome.rotation.z = -Math.PI / 2;
    robot.add(frontDome);

    // Camera Lens & LEDs inside dome
    const lensGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.15, 16);
    const lensMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.set(1.0, 0, 0);
    lens.rotation.z = Math.PI / 2;
    robot.add(lens);

    // Strobe Headlights
    const ledLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.1, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    ledLeft.position.set(0.95, 0.22, 0.22);
    ledLeft.rotation.z = Math.PI / 2;
    robot.add(ledLeft);

    const ledRight = ledLeft.clone();
    ledRight.position.set(0.95, -0.22, 0.22);
    robot.add(ledRight);

    // Spotlights shining forward-down
    const spotLight = new THREE.SpotLight(0xa5f3fc, 4, 8, Math.PI / 5, 0.4);
    spotLight.position.set(1.2, 0, 0);
    spotLight.target.position.set(3, -1.8, 0);
    robot.add(spotLight);
    robot.add(spotLight.target);

    // Rear End Cap
    const rearCapGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.08, 24);
    const rearCap = new THREE.Mesh(rearCapGeo, titaniumMat);
    rearCap.position.x = -0.92;
    rearCap.rotation.z = Math.PI / 2;
    robot.add(rearCap);

    // Protective Roll Cage Frame (Tubular exoskeleton)
    const cageRadius = 0.55;
    const cageRingGeo = new THREE.TorusGeometry(cageRadius, 0.035, 12, 32);
    const ring1 = new THREE.Mesh(cageRingGeo, yellowRollBarMat);
    ring1.rotation.y = Math.PI / 2;
    ring1.position.x = -0.6;
    robot.add(ring1);

    const ring2 = ring1.clone();
    ring2.position.x = 0.6;
    robot.add(ring2);

    // Longitudinal Rails
    const railGeo = new THREE.CylinderGeometry(0.035, 0.035, 1.8, 12);
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      const rail = new THREE.Mesh(railGeo, yellowRollBarMat);
      rail.position.set(0, Math.sin(angle) * cageRadius, Math.cos(angle) * cageRadius);
      rail.rotation.z = Math.PI / 2;
      robot.add(rail);
    }

    // N1 — Forward Magnetometer Boom (Forward extended pole)
    const boomGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.0, 12);
    const boom = new THREE.Mesh(boomGeo, titaniumMat);
    boom.position.set(1.4, 0.35, 0);
    boom.rotation.z = Math.PI / 2;
    robot.add(boom);

    const magNodeGeo = new THREE.BoxGeometry(0.2, 0.16, 0.16);
    const magNodeMat = new THREE.MeshStandardMaterial({ color: 0x00e5ff, metalness: 0.8 });
    const magNode = new THREE.Mesh(magNodeGeo, magNodeMat);
    magNode.position.set(1.95, 0.35, 0);
    robot.add(magNode);

    // N2 — Ventral EM Transmitter Coil (Lower ventral ring)
    const txCoilGeo = new THREE.TorusGeometry(0.42, 0.06, 16, 32);
    const txCoil = new THREE.Mesh(txCoilGeo, copperCoilMat);
    txCoil.position.set(0.3, -0.65, 0);
    txCoil.rotation.x = Math.PI / 2;
    robot.add(txCoil);

    // N3 — Ventral EM Receiver Pod (Rear ventral calibrated offset)
    const rxCoilGeo = new THREE.TorusGeometry(0.35, 0.05, 16, 32);
    const rxCoil = new THREE.Mesh(rxCoilGeo, copperCoilMat);
    rxCoil.position.set(-0.55, -0.65, 0);
    rxCoil.rotation.x = Math.PI / 2;
    robot.add(rxCoil);

    // N4 — Electrical & Environmental Sensor Bay (Galvanic Electrodes & Conductivity Probe)
    const elecBayGeo = new THREE.BoxGeometry(0.3, 0.18, 0.3);
    const elecBayMat = new THREE.MeshStandardMaterial({ color: 0x00f0b5, roughness: 0.3 });
    const elecBay = new THREE.Mesh(elecBayGeo, elecBayMat);
    elecBay.position.set(0, -0.48, 0.42);
    robot.add(elecBay);

    // Galvanic Probe pins
    for (let p = -1; p <= 1; p += 2) {
      const probeGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.2, 8);
      const probe = new THREE.Mesh(probeGeo, titaniumMat);
      probe.position.set(p * 0.09, -0.58, 0.45);
      robot.add(probe);
    }

    // N6 — Acoustic Altimeter (Downward nadir face)
    const altimeterGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.15, 16);
    const altimeterMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e });
    const altimeter = new THREE.Mesh(altimeterGeo, altimeterMat);
    altimeter.position.set(0, -0.52, -0.35);
    robot.add(altimeter);

    // Acoustic Sonar Ping Cone (Translucent downward beam)
    const pingConeGeo = new THREE.ConeGeometry(0.65, 1.3, 24, 1, true);
    const pingConeMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
      side: THREE.DoubleSide
    });
    const pingCone = new THREE.Mesh(pingConeGeo, pingConeMat);
    pingCone.position.set(0, -1.18, -0.35);
    robot.add(pingCone);

    // Micro Vector Thrusters (Port & Starboard for rescan repositioning)
    const thrusterGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.32, 16);
    const thrusterMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7 });
    const thrusterPort = new THREE.Mesh(thrusterGeo, thrusterMat);
    thrusterPort.position.set(-0.35, 0.1, 0.72);
    thrusterPort.rotation.z = Math.PI / 2;
    robot.add(thrusterPort);

    const thrusterStbd = thrusterPort.clone();
    thrusterStbd.position.set(-0.35, 0.1, -0.72);
    robot.add(thrusterStbd);

    // Tether & Bridle (Extending upward toward surface vessel)
    const bridleGeo = new THREE.TorusGeometry(0.14, 0.03, 8, 24, Math.PI);
    const bridle = new THREE.Mesh(bridleGeo, titaniumMat);
    bridle.position.set(0, 0.62, 0);
    bridle.rotation.x = Math.PI / 2;
    robot.add(bridle);

    // Tether line going up
    const tetherCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.75, 0),
      new THREE.Vector3(-0.1, 1.6, 0.1),
      new THREE.Vector3(-0.3, 2.8, -0.1),
      new THREE.Vector3(-0.6, 4.2, 0.2)
    ]);
    const tetherGeo = new THREE.TubeGeometry(tetherCurve, 32, 0.025, 8, false);
    const tetherMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.5 });
    const tether = new THREE.Mesh(tetherGeo, tetherMat);
    robot.add(tether);

    // 6. Interactive 3D Node Hotspots / Markers
    markersRef.current = [];
    const markerGeometry = new THREE.SphereGeometry(0.09, 16, 16);

    const nodePositions: Record<string, [number, number, number]> = {
      N1: [1.95, 0.35, 0],
      N2: [0.3, -0.65, 0],
      N3: [-0.55, -0.65, 0],
      N4: [0, -0.5, 0.42],
      N5: [0, 0.1, 0],
      N6: [0, -0.55, -0.35],
      OPTICAL: [1.05, 0, 0],
      TETHER: [0, 0.8, 0]
    };

    SENSOR_NODES.forEach((node) => {
      const pos = nodePositions[node.id] || [0, 0, 0];
      const markerMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        wireframe: false
      });
      const marker = new THREE.Mesh(markerGeometry, markerMat);
      marker.position.set(pos[0], pos[1], pos[2]);

      // Outer glowing pulse ring
      const ringG = new THREE.RingGeometry(0.12, 0.16, 24);
      const ringM = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
      });
      const pulseRing = new THREE.Mesh(ringG, ringM);
      pulseRing.rotation.y = Math.PI / 2;
      marker.add(pulseRing);

      robot.add(marker);
      markersRef.current.push({ mesh: marker, node });
    });

    // 7. Raycasting for mouse click/hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const markerMeshes = markersRef.current.map((m) => m.mesh);
      const intersects = raycaster.intersectObjects(markerMeshes, true);

      if (intersects.length > 0) {
        let hitMesh: THREE.Object3D | null = intersects[0].object;
        while (hitMesh && !markersRef.current.some((m) => m.mesh === hitMesh)) {
          hitMesh = hitMesh.parent;
        }
        const found = markersRef.current.find((m) => m.mesh === hitMesh);
        if (found) {
          setHoveredNode(found.node);
          container.style.cursor = 'pointer';
          return;
        }
      }
      setHoveredNode(null);
      container.style.cursor = 'grab';
    };

    const handlePointerDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const markerMeshes = markersRef.current.map((m) => m.mesh);
      const intersects = raycaster.intersectObjects(markerMeshes, true);

      if (intersects.length > 0) {
        let hitMesh: THREE.Object3D | null = intersects[0].object;
        while (hitMesh && !markersRef.current.some((m) => m.mesh === hitMesh)) {
          hitMesh = hitMesh.parent;
        }
        const found = markersRef.current.find((m) => m.mesh === hitMesh);
        if (found) {
          onSelectNode(found.node);
        }
      }
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('click', handlePointerDown);

    // Mouse drag rotation controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      container.style.cursor = 'grabbing';
    };

    const onMouseMoveDrag = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      robot.rotation.y += deltaX * 0.008;
      robot.rotation.z += deltaY * 0.005;
      robot.rotation.z = Math.max(-0.4, Math.min(0.4, robot.rotation.z));
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMoveDrag);
    window.addEventListener('mouseup', onMouseUp);

    // 8. Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating heave & sway (underwater physics)
      robot.position.y = Math.sin(elapsedTime * 1.2) * 0.06;
      robot.rotation.x = Math.cos(elapsedTime * 0.9) * 0.025;

      if (autoRotate && !isDragging) {
        robot.rotation.y += 0.004;
      }

      // Pulse markers
      markersRef.current.forEach(({ mesh }) => {
        const pulse = 1 + Math.sin(elapsedTime * 4) * 0.15;
        mesh.scale.set(pulse, pulse, pulse);
      });

      // Slowly float marine snow
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < particlePositions.length; i += 3) {
        positions[i] -= 0.003;
        if (positions[i] < -4) positions[i] = 4;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('click', handlePointerDown);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMoveDrag);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [autoRotate]);

  // Wireframe toggle effect
  useEffect(() => {
    if (!robotGroupRef.current) return;
    robotGroupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => (m.wireframe = wireframeMode));
        } else {
          child.material.wireframe = wireframeMode;
        }
      }
    });
  }, [wireframeMode]);

  return (
    <div className="relative w-full h-[540px] md:h-[620px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#040d1a] shadow-2xl">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab select-none" />

      {/* Underwater HUD Overlay Header */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-none">
        <div className="px-3 py-1 rounded-md bg-[#07152d]/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>INTERACTIVE DIGITAL TWIN: VARUNA06</span>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/50 text-[11px] font-mono text-slate-300">
          ROTATION: DRAG TO ORBIT
        </div>
      </div>

      {/* Floating Toolbar Controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 backdrop-blur-md ${
            autoRotate
              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
              : 'bg-slate-900/70 border-slate-700 text-slate-400 hover:text-white'
          }`}
          title="Toggle Auto Rotation"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Orbit</span>
        </button>

        <button
          onClick={() => setWireframeMode(!wireframeMode)}
          className={`p-2 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 backdrop-blur-md ${
            wireframeMode
              ? 'bg-amber-500/20 border-amber-400 text-amber-300'
              : 'bg-slate-900/70 border-slate-700 text-slate-400 hover:text-white'
          }`}
          title="Toggle CAD Structural Wireframe"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Wireframe</span>
        </button>
      </div>

      {/* Hover Info Tooltip */}
      {hoveredNode && (
        <div className="absolute bottom-16 left-4 right-4 sm:right-auto sm:max-w-md z-10 p-3.5 rounded-xl bg-[#071733]/95 border border-cyan-400/50 text-white shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-1.5 border-b border-cyan-500/20 mb-2">
            <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hoveredNode.color }} />
              {hoveredNode.name}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
              CLICK TO INSPECT
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{hoveredNode.whyItMatters}</p>
        </div>
      )}

      {/* Bottom Node Quick Selector Bar */}
      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {SENSOR_NODES.map((node) => {
          const isSelected = selectedNodeId === node.id;
          return (
            <button
              key={node.id}
              onClick={() => onSelectNode(node)}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all flex items-center gap-1.5 backdrop-blur-md border ${
                isSelected
                  ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} />
              <span>{node.id}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
