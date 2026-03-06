class SystemCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Read attributes from the HTML tag
        const systemId = this.getAttribute('system-id') || 'unknown';
        const title = this.getAttribute('title') || 'SYSTEM';
        const accent = this.getAttribute('accent') || '#ffffff';
        const fontFamily = this.getAttribute('font') || 'Inter, sans-serif';
        const typeScale = this.getAttribute('scale') || 'clamp(32px, 6vw, 80px)';
        const link = this.getAttribute('link') || '#';
        const reconstructLink = this.getAttribute('reconstruct-link') || '#';
        const isOffline = systemId === 'offline';

        // Render the component's HTML and scoped CSS
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-width: 28.125rem; /* ~450px to prevent excessive stretching */
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                    --transition-standard: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .reveal {
                    opacity: 0;
                    transform: translateY(1.875rem);
                    transition: var(--transition-standard);
                }

                .reveal.active {
                    opacity: 1;
                    transform: translateY(0);
                }

                .product-media {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 3 / 2;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.05);
                    /* Dynamic Background based on accent color */
                    background: ${isOffline ? '#111' : `radial-gradient(circle, ${this.hexToRgba(accent, 0.2)} 0%, #000000 80%)`};
                    ${isOffline ? 'border: 1px dashed rgba(255,255,255,0.1);' : ''}
                }

                .branding-text {
                    font-family: ${fontFamily};
                    font-size: ${typeScale};
                    color: ${accent};
                    letter-spacing: 0.125rem;
                    font-weight: 600;
                    text-align: center;
                    /* Joy-specific text shadow logic could abstract here, but keeping clean for universal use */
                    ${systemId === 'joy' ? 'text-shadow: 4px 4px 0px rgba(255,255,255,0.1);' : ''}
                }

                /* OFFLINE NODE specific styling overrides */
                .offline-text {
                    font-family: 'Inter', sans-serif;
                    font-size: 0.875rem;
                    color: #444;
                    text-transform: uppercase;
                    letter-spacing: 0.125rem;
                }

                .card-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.75);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.625rem;
                    opacity: 0;
                    transition: var(--transition-standard);
                    z-index: 10;
                }

                :host(:hover) .card-overlay {
                    opacity: 1;
                }

                .overlay-btn {
                    padding: 0.5rem 1rem;
                    background: transparent;
                    border: 1px solid #fff;
                    color: #fff;
                    font-family: 'Inter', sans-serif;
                    font-size: clamp(0.625rem, 0.55rem + 0.15vw, 0.75rem);
                    font-weight: 500;
                    text-transform: uppercase;
                    text-decoration: none;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border-radius: 3.125rem;
                    width: 11.25rem;
                    text-align: center;
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                    box-sizing: border-box; 
                }

                .overlay-btn:hover {
                    background: #fff;
                    color: #000;
                    transform: scale(1.05);
                }

                /* Hide overlay functionality for offline nodes entirely */
                .offline-node .card-overlay {
                    display: none;
                }

                .card-title {
                    font-family: 'Inter', sans-serif;
                    font-size: clamp(0.7rem, 0.6rem + 0.15vw, 0.875rem);
                    font-weight: 400;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: var(--sys-text-secondary, #999999);
                    padding: 0.875rem 0 0;
                    text-align: left;
                }
            </style>

            <div class="product-media ${isOffline ? 'offline-node' : ''}">
                <div class="${isOffline ? 'offline-text' : 'branding-text'}">${title}</div>
                
                ${!isOffline ? `
                <div class="card-overlay">
                    <a href="${link}" class="overlay-btn view-btn">View System</a>
                    <a href="${reconstructLink}" class="overlay-btn reconstruct-btn">Reconstruct</a>
                    <button class="overlay-btn apply-btn" data-apply="${systemId}">Apply System</button>
                </div>
                ` : ''}
            </div>
            ${!isOffline ? `<div class="card-title">${this.getAttribute('subtitle') || title}</div>` : ''}
        `;

        // We re-bind the apply theme functionality since it's now living inside a ShadowDOM 
        // and global document.querySelectorAll won't penetrate the shadow root naturally.
        if (!isOffline) {
            const applyBtn = this.shadowRoot.querySelector('.apply-btn');
            applyBtn.addEventListener('click', () => {
                // Dispatch a custom event that the main document can listen for
                this.dispatchEvent(new CustomEvent('theme-applied', {
                    detail: { systemId: systemId },
                    bubbles: true,
                    composed: true // Allows event to bubble out of shadow DOM
                }));
            });
        }
    }

    // Helper to convert hex to rgba for the dynamic background gradients
    hexToRgba(hex, alpha) {
        if (!hex || !hex.startsWith('#')) return `rgba(255,255,255,${alpha})`;
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
}

// Register the custom element
customElements.define('system-card', SystemCard);
