// Three.js Interactive Obsidian Dodecahedron
let scene, camera, renderer, object, edges;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let isLightMode = false; // Default: dark mode (dark bg, white text)

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
            document.body.classList.toggle('dark-mode', !isLightMode);
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
    const sysColor = document.documentElement.style.getPropertyValue('--sys-3d-color');
    if (sysColor) {
        params.color = new THREE.Color(sysColor.trim());
    }
    object.material.setValues(params);
    object.material.needsUpdate = true;

    // Update Edges
    const sysEdge = document.documentElement.style.getPropertyValue('--sys-3d-edge');
    if (sysEdge) {
        edges.material.color = new THREE.Color(sysEdge.trim());
    } else {
        edges.material.color.setHex(isLightMode ? 0x121212 : 0xffffff);
    }

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

// Remove old Design System Theme Logic and replace with Token-Based Listener
const DESIGN_SYSTEMS = {
    cipher: {
        '--sys-bg-main': '#000000',
        '--sys-text-primary': '#ffffff',
        '--sys-text-secondary': '#999999',
        '--sys-border': 'rgba(255, 255, 255, 0.1)',
        '--bi-divider': 'rgba(255, 255, 255, 0.1)',
        '--bi-bg': '#0a0a0a',
        '--bi-text': '#ffffff',
        '--bi-header-bg': '#111111',
        '--sys-font-primary': "'articulat-cf', 'Inter', sans-serif",
        '--sys-font-display': "'articulat-cf', sans-serif",
        '--sys-accent-shadow': '0 0 40px rgba(15, 135, 255, 0.3)',
        '--bi-blue': '#0f87ff',
        '--sys-button-bg-hover': '#ffffff',
        '--sys-button-text-hover': '#000000',
        '--sys-3d-color': '#0f87ff',
        '--sys-3d-edge': '#ffffff'
    },
    joy: {
        '--sys-bg-main': '#111111',
        '--sys-text-primary': '#ffffff',
        '--sys-text-secondary': '#999999',
        '--sys-border': 'rgba(255, 255, 255, 0.1)',
        '--bi-divider': 'rgba(255, 255, 255, 0.1)',
        '--bi-bg': '#111111',
        '--bi-text': '#ffffff',
        '--bi-header-bg': '#111111',
        '--sys-font-primary': "'Source Code Pro', monospace",
        '--sys-font-display': "'Press Start 2P', cursive",
        '--sys-accent-shadow': '6px 6px 0 rgba(255, 255, 255, 0.1)',
        '--sys-button-radius': '0px',
        '--sys-button-bg-hover': '#39FF14',
        '--sys-button-text-hover': '#111111',
        '--sys-3d-color': '#39FF14',
        '--sys-3d-edge': '#ffffff'
    },
    'telekom-ot': {
        '--sys-bg-main': '#F2F2F2',
        '--sys-text-primary': '#1A1A1A',
        '--sys-text-secondary': '#666666',
        '--sys-border': 'rgba(0, 0, 0, 0.15)',
        '--bi-divider': 'rgba(0, 0, 0, 0.15)',
        '--bi-bg': '#F2F2F2',
        '--bi-text': '#1A1A1A',
        '--bi-header-bg': '#E8E8E8',
        '--sys-font-primary': "'Inter', sans-serif",
        '--sys-font-display': "'Inter', sans-serif",
        '--sys-accent-shadow': '0 0 30px rgba(255, 79, 51, 0.3)',
        '--sys-button-radius': '0px',
        '--sys-button-bg-hover': '#FF4F33',
        '--sys-button-text-hover': '#FFFFFF',
        '--sys-3d-color': '#FF4F33',
        '--sys-3d-edge': '#1A1A1A'
    },
    steakhouse: {
        '--sys-bg-main': 'oklch(0.12 0 0)',
        '--sys-text-primary': 'oklch(0.98 0.01 90)',
        '--sys-text-secondary': 'oklch(0.70 0.01 90)',
        '--sys-border': 'oklch(0.25 0 0)',
        '--bi-divider': 'oklch(0.25 0 0)',
        '--bi-bg': 'oklch(0.12 0 0)',
        '--bi-text': 'oklch(0.98 0.01 90)',
        '--bi-header-bg': 'oklch(0.12 0 0)',
        '--sys-font-primary': "'Geist Sans', 'Inter', sans-serif",
        '--sys-font-display': "'Geist Sans', 'Inter', sans-serif",
        '--sys-accent-shadow': '0 0 40px oklch(0.60 0.16 158 / 0.3)',
        '--sys-button-radius': '8px',
        '--sys-button-bg-hover': 'oklch(0.60 0.16 158)',
        '--sys-button-text-hover': '#000000',
        '--sys-3d-color': 'oklch(0.60 0.16 158)',
        '--sys-3d-edge': '#00A36C',
        '--strategy-prime': 'oklch(0.25 0.04 158)',
        '--strategy-high-yield': 'oklch(0.28 0.06 40)',
        '--strategy-term': 'oklch(0.32 0.06 85)',
        '--strategy-turbo': 'oklch(0.24 0.08 300)'
    }
};

// Listen for the custom event emitted by the <system-card> web component
document.addEventListener('theme-applied', (e) => {
    const systemId = e.detail.systemId;
    const tokens = DESIGN_SYSTEMS[systemId];

    if (tokens) {
        // Apply all design tokens to the root element
        Object.entries(tokens).forEach(([customProperty, value]) => {
            document.documentElement.style.setProperty(customProperty, value);
        });

        // Force Dark Mode for dark-themed systems, light for light
        const isDarkSystem = systemId !== 'telekom-ot';
        isLightMode = !isDarkSystem;
        document.body.classList.toggle('dark-mode', isDarkSystem);
        updateThemeAssets();

        const revertBtn = document.getElementById('revert-btn');
        if (revertBtn) revertBtn.style.display = 'inline-block';
    }
});

const revertBtn = document.getElementById('revert-btn');
if (revertBtn) {
    revertBtn.addEventListener('click', () => {
        // Clear all injected properties
        Object.keys(DESIGN_SYSTEMS.cipher).forEach(key => {
            document.documentElement.style.removeProperty(key);
        });

        // Reset to default light mode
        isLightMode = true;
        document.body.classList.remove('dark-mode');
        updateThemeAssets();

        revertBtn.style.display = 'none';
    });
}
