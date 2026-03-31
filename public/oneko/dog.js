// dog.js — emoji dog cursor follower (based on oneko.js concept)

(function doggo() {
  const isReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches === true;
  if (isReducedMotion) return;

  const dogEl = document.createElement('div');
  dogEl.id = 'doggo';
  dogEl.ariaHidden = true;
  dogEl.style.cssText = [
    'position:fixed',
    'width:32px',
    'height:32px',
    'font-size:26px',
    'line-height:32px',
    'text-align:center',
    'pointer-events:none',
    'z-index:2147483647',
    'user-select:none',
    'transition:transform 0.1s ease',
  ].join(';');
  dogEl.textContent = '🐕';
  document.body.appendChild(dogEl);

  let dogX = 32, dogY = 32;
  let mouseX = 0, mouseY = 0;
  let frameCount = 0;
  let idleTime = 0;
  let isIdle = false;
  let lastTimestamp = null;
  const SPEED = 10;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function update(timestamp) {
    if (!dogEl.isConnected) return;
    if (!lastTimestamp) lastTimestamp = timestamp;
    if (timestamp - lastTimestamp > 100) {
      lastTimestamp = timestamp;
      frame();
    }
    requestAnimationFrame(update);
  }

  function frame() {
    frameCount++;
    const dx = dogX - mouseX;
    const dy = dogY - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < SPEED || dist < 40) {
      // Idle — sit and wag
      idleTime++;
      isIdle = true;
      if (idleTime > 20 && frameCount % 6 < 3) {
        dogEl.textContent = '🐶';
      } else {
        dogEl.textContent = '🐕';
      }
      dogEl.style.transform = 'scaleX(1)';
      return;
    }

    isIdle = false;
    idleTime = 0;

    // Running — bounce and flip based on direction
    const bounce = frameCount % 4 < 2 ? 'translateY(-3px)' : 'translateY(2px)';
    const flip = dx > 0 ? 'scaleX(-1)' : 'scaleX(1)';
    dogEl.style.transform = `${flip} ${bounce}`;
    dogEl.textContent = '🐕';

    dogX -= (dx / dist) * SPEED;
    dogY -= (dy / dist) * SPEED;

    dogX = Math.min(Math.max(16, dogX), window.innerWidth - 16);
    dogY = Math.min(Math.max(16, dogY), window.innerHeight - 16);

    dogEl.style.left = (dogX - 16) + 'px';
    dogEl.style.top = (dogY - 16) + 'px';
  }

  dogEl.style.left = (dogX - 16) + 'px';
  dogEl.style.top = (dogY - 16) + 'px';
  requestAnimationFrame(update);
})();
