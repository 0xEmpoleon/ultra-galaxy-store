// Three.js Interactive Obsidian Dodecahedron
let scene, camera, renderer, object, edges;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let isLightMode = false;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function init() {
    // Scene Setup
    scene = new THREE.Scene();

    // Camera Setup
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer Setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.2;
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Lighting
    setupLighting();

    // Geometry - Sharp Dodecahedron
    const geometry = new THREE.DodecahedronGeometry(1.6, 0);

    // Initial Material State (Dark Mode)
    const materialParams = getMaterialParams(false);
    const material = new THREE.MeshPhysicalMaterial(materialParams);

    object = new THREE.Mesh(geometry, material);

    // Edge Highlights
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = LineMaterial(false);
    edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    object.add(edges);

    // Initial Position
    // The hero uses a 1.5fr (left) 1fr (right) split. 
    // We want the object around the center of the left side.
    object.position.set(-1.0, 0, 0);
    scene.add(object);

    // Event Listeners
    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('resize', onWindowResize);

    // Theme Toggle Handler
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isLightMode = !isLightMode;
            document.body.classList.toggle('light-mode', isLightMode);
            updateThemeAssets();
        });
    }

    animate();
}

function setupLighting() {
    // Clear existing lights if any
    scene.children = scene.children.filter(child => !child.isLight);

    const intensityScale = isLightMode ? 0.5 : 1.0;

    const ambientLight = new THREE.AmbientLight(0xffffff, isLightMode ? 0.4 : 0.1);
    scene.add(ambientLight);

    const rimLight1 = new THREE.DirectionalLight(0xffffff, isLightMode ? 1.0 : 2.0);
    rimLight1.position.set(5, 5, -5);
    scene.add(rimLight1);

    const rimLight2 = new THREE.PointLight(0xffffff, isLightMode ? 0.8 : 1.5);
    rimLight2.position.set(-5, 5, -2);
    scene.add(rimLight2);

    // Fill Light for internal depth (only in dark mode for obsidian tint)
    if (!isLightMode) {
        const fillLight = new THREE.PointLight(0x4444ff, 0.5); // Subtle blue for obsidian tint
        fillLight.position.set(0, -2, 2);
        scene.add(fillLight);
    }
}

function getMaterialParams(light) {
    if (light) {
        return {
            color: 0xffffff, // White surface
            metalness: 0,
            roughness: 0.1,
            transmission: 0.2, // Less transparent
            thickness: 1.0,
            ior: 1.5,
            reflectivity: 0.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.05,
            transparent: true,
            opacity: 0.9
        };
    }
    return {
        color: 0x050505, // Obsidian
        metalness: 0,
        roughness: 0.0,
        transmission: 0.9,
        thickness: 4.0,
        ior: 2.1,
        reflectivity: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        transparent: true,
        opacity: 1.0
    };
}

function LineMaterial(light) {
    return new THREE.LineBasicMaterial({
        color: light ? 0x121212 : 0xffffff, // Dark edges in light mode
        transparent: true,
        opacity: light ? 0.4 : 0.2,
        blending: light ? THREE.NormalBlending : THREE.AdditiveBlending
    });
}

function updateThemeAssets() {
    setupLighting();

    const params = getMaterialParams(isLightMode);
    object.material.setValues(params);
    object.material.needsUpdate = true;

    // Update Edges
    edges.material.color.setHex(isLightMode ? 0x121212 : 0xffffff);
    edges.material.opacity = isLightMode ? 0.4 : 0.2;
    edges.material.blending = isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
}

function onDocumentMouseMove(event) {
    // Relative mouse movement
    mouseX = (event.clientX - windowHalfX) / 100;
    mouseY = (event.clientY - windowHalfY) / 100;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Smooth Interaction Logic
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    if (object) {
        // High-end floating motion
        object.rotation.x += 0.003;
        object.rotation.y += 0.003;
        object.rotation.z += 0.001;

        // Adaptive positioning: Center on mobile/portrait, offset on desktop
        const isMobile = window.innerWidth < 850;
        const baseOffsetX = isMobile ? 0 : -1.0;
        const swingMultiplier = isMobile ? 0.05 : 0.1;

        object.position.x = baseOffsetX + (targetX * swingMultiplier);
        object.position.y = -targetY * swingMultiplier;
    }

    renderer.render(scene, camera);
}

// Scroll Reveal Logic
function initReveal() {
    const observerOptions = {
        threshold: 0.01,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Initializing scene and reveal
init();
initReveal();
