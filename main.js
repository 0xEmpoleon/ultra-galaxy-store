// Real-time updates for Toshinori Ishibashi's Neo-Classical Site

function updateClocks() {
    const options = {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
    };

    const nyTime = new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'America/New_York' });
    const parisTime = new Date().toLocaleTimeString('en-GB', { ...options, timeZone: 'Europe/Paris' });

    // Note: Clocks were removed in the 3-panel layout to favor BPM and ETH
}

// Smooth Scroll for Trigger
document.querySelectorAll('.scroll-trigger').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialization
initReveal();

// Spline Fallback
const splineViewer = document.querySelector('spline-viewer');
if (splineViewer) {
    splineViewer.addEventListener('error', () => {
        const visualContainer = document.querySelector('.spline-bg');
        if (visualContainer) {
            visualContainer.style.background = 'radial-gradient(circle at 50% 50%, #111 0%, #000 100%)';
        }
    });
}
