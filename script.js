// Inizializzazione quando il DOM è caricato
document.addEventListener('DOMContentLoaded', () => {
    // Cookie Banner Management
    function showCookieBanner() {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            const banner = document.createElement('div');
            banner.className = 'cookie-banner';
            banner.innerHTML = `
                <div class="cookie-content">
                    <div class="cookie-text">
                        <h3>🍪 Informativa sui Cookie</h3>
                        <p>Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Questi ci aiutano a capire come interagisci con i nostri servizi e ci permettono di migliorarli costantemente. Accetti l'utilizzo dei cookie secondo la nostra <a href="privacy-policy.html" style="color: var(--color-gold); text-decoration: underline;">Privacy Policy</a> e i nostri <a href="terms.html" style="color: var(--color-gold); text-decoration: underline;">Termini e Condizioni</a>?</p>
                    </div>
                    <div class="cookie-buttons">
                        <button class="cookie-btn accept-cookies">Accetta tutti</button>
                        <button class="cookie-btn reject-cookies">Rifiuta</button>
                    </div>
                </div>
            `;
            document.body.appendChild(banner);
            
            // Show banner with animation
            setTimeout(() => {
                banner.classList.add('show');
            }, 100);

            // Handle button clicks
            banner.querySelector('.accept-cookies').addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'accepted');
                banner.classList.remove('show');
                setTimeout(() => {
                    banner.remove();
                }, 500);
            });

            banner.querySelector('.reject-cookies').addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'rejected');
                banner.classList.remove('show');
                setTimeout(() => {
                    banner.remove();
                }, 500);
            });
        }
    }

    // Show cookie banner
    showCookieBanner();
});
