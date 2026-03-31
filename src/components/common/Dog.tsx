'use client';

import { catConfig } from '@/config/Cat';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Simple pixel-art dog SVGs for each state
const DOG_SPRITES: Record<string, string[]> = {
  idle: [
    // sitting dog facing right
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <!-- body -->
      <rect x="10" y="14" width="14" height="10" rx="3" fill="#C8A96E"/>
      <!-- head -->
      <rect x="18" y="8" width="10" height="9" rx="3" fill="#C8A96E"/>
      <!-- ear left -->
      <rect x="18" y="6" width="4" height="5" rx="1" fill="#A0784A"/>
      <!-- ear right -->
      <rect x="24" y="6" width="4" height="5" rx="1" fill="#A0784A"/>
      <!-- eye -->
      <rect x="25" y="10" width="2" height="2" rx="1" fill="#222"/>
      <!-- nose -->
      <rect x="27" y="13" width="2" height="1" rx="1" fill="#222"/>
      <!-- tail up -->
      <rect x="8" y="10" width="4" height="8" rx="2" fill="#A0784A"/>
      <!-- legs -->
      <rect x="11" y="22" width="3" height="4" rx="1" fill="#A0784A"/>
      <rect x="18" y="22" width="3" height="4" rx="1" fill="#A0784A"/>
    </svg>`,
  ],
  run_right: [
    // frame 1 — legs spread
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <!-- body -->
      <rect x="8" y="13" width="16" height="9" rx="3" fill="#C8A96E"/>
      <!-- head -->
      <rect x="20" y="8" width="10" height="8" rx="3" fill="#C8A96E"/>
      <!-- ear -->
      <rect x="20" y="6" width="4" height="5" rx="1" fill="#A0784A"/>
      <rect x="26" y="5" width="4" height="5" rx="1" fill="#A0784A"/>
      <!-- eye -->
      <rect x="27" y="10" width="2" height="2" rx="1" fill="#222"/>
      <!-- nose -->
      <rect x="29" y="13" width="2" height="1" rx="1" fill="#222"/>
      <!-- tail -->
      <rect x="5" y="9" width="5" height="3" rx="1" fill="#A0784A" transform="rotate(-20 5 9)"/>
      <!-- front legs -->
      <rect x="20" y="20" width="3" height="5" rx="1" fill="#A0784A" transform="rotate(15 20 20)"/>
      <rect x="16" y="20" width="3" height="5" rx="1" fill="#A0784A" transform="rotate(-15 16 20)"/>
      <!-- back legs -->
      <rect x="10" y="20" width="3" height="5" rx="1" fill="#A0784A" transform="rotate(-20 10 20)"/>
      <rect x="6" y="20" width="3" height="5" rx="1" fill="#A0784A" transform="rotate(20 6 20)"/>
    </svg>`,
    // frame 2 — legs together
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <!-- body -->
      <rect x="8" y="15" width="16" height="8" rx="3" fill="#C8A96E"/>
      <!-- head -->
      <rect x="20" y="10" width="10" height="8" rx="3" fill="#C8A96E"/>
      <!-- ear -->
      <rect x="20" y="8" width="4" height="5" rx="1" fill="#A0784A"/>
      <rect x="26" y="7" width="4" height="5" rx="1" fill="#A0784A"/>
      <!-- eye -->
      <rect x="27" y="12" width="2" height="2" rx="1" fill="#222"/>
      <!-- nose -->
      <rect x="29" y="15" width="2" height="1" rx="1" fill="#222"/>
      <!-- tail -->
      <rect x="4" y="12" width="5" height="3" rx="1" fill="#A0784A"/>
      <!-- legs bunched -->
      <rect x="18" y="21" width="3" height="4" rx="1" fill="#A0784A"/>
      <rect x="14" y="21" width="3" height="4" rx="1" fill="#A0784A"/>
      <rect x="10" y="21" width="3" height="4" rx="1" fill="#A0784A"/>
      <rect x="6" y="21" width="3" height="4" rx="1" fill="#A0784A"/>
    </svg>`,
  ],
  alert: [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <!-- body -->
      <rect x="10" y="15" width="14" height="9" rx="3" fill="#C8A96E"/>
      <!-- head up -->
      <rect x="18" y="7" width="10" height="9" rx="3" fill="#C8A96E"/>
      <!-- ear perked -->
      <rect x="18" y="4" width="4" height="6" rx="1" fill="#A0784A"/>
      <rect x="24" y="4" width="4" height="6" rx="1" fill="#A0784A"/>
      <!-- eye wide -->
      <rect x="25" y="9" width="2" height="2" rx="1" fill="#222"/>
      <rect x="24" y="9" width="1" height="1" fill="white"/>
      <!-- nose -->
      <rect x="27" y="13" width="2" height="1" rx="1" fill="#222"/>
      <!-- tail up high -->
      <rect x="7" y="8" width="4" height="10" rx="2" fill="#A0784A" transform="rotate(-15 7 8)"/>
      <!-- legs -->
      <rect x="11" y="22" width="3" height="4" rx="1" fill="#A0784A"/>
      <rect x="18" y="22" width="3" height="4" rx="1" fill="#A0784A"/>
    </svg>`,
  ],
  sleep: [
    // frame 1
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <!-- body curled -->
      <ellipse cx="16" cy="22" rx="10" ry="5" fill="#C8A96E"/>
      <!-- head down -->
      <rect x="19" y="16" width="8" height="7" rx="3" fill="#C8A96E"/>
      <!-- ear flat -->
      <rect x="19" y="15" width="4" height="4" rx="1" fill="#A0784A"/>
      <rect x="24" y="15" width="4" height="4" rx="1" fill="#A0784A"/>
      <!-- eye closed -->
      <rect x="25" y="19" width="3" height="1" rx="1" fill="#222"/>
      <!-- tail curled -->
      <rect x="7" y="20" width="4" height="6" rx="2" fill="#A0784A" transform="rotate(30 7 20)"/>
      <!-- z -->
      <text x="23" y="14" font-size="6" fill="#888" font-family="Arial">z</text>
    </svg>`,
    // frame 2
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <!-- body curled -->
      <ellipse cx="16" cy="22" rx="10" ry="5" fill="#C8A96E"/>
      <!-- head down -->
      <rect x="19" y="16" width="8" height="7" rx="3" fill="#C8A96E"/>
      <!-- ear flat -->
      <rect x="19" y="15" width="4" height="4" rx="1" fill="#A0784A"/>
      <rect x="24" y="15" width="4" height="4" rx="1" fill="#A0784A"/>
      <!-- eye closed -->
      <rect x="25" y="19" width="3" height="1" rx="1" fill="#222"/>
      <!-- tail curled -->
      <rect x="7" y="20" width="4" height="6" rx="2" fill="#A0784A" transform="rotate(30 7 20)"/>
      <!-- ZZ -->
      <text x="21" y="13" font-size="6" fill="#888" font-family="Arial">zZ</text>
    </svg>`,
  ],
};

function toDataUrl(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
}

export default function Dog() {
  const dogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!catConfig.enabled) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    // Create dog element
    const el = document.createElement('div');
    el.id = 'doggo-cursor';
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText =
      'position:fixed;width:32px;height:32px;pointer-events:none;z-index:2147483647;image-rendering:pixelated;';
    document.body.appendChild(el);
    dogRef.current = el;

    let dogX = 32, dogY = 32;
    let mouseX = 0, mouseY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnim: string | null = null;
    let idleFrame = 0;
    let lastTimestamp = 0;
    let facingRight = true;

    const SPEED = 10;

    function setSprite(key: keyof typeof DOG_SPRITES, frame: number, flipX = false) {
      const frames = DOG_SPRITES[key];
      const svg = frames[frame % frames.length];
      el.style.backgroundImage = `url("${toDataUrl(svg)}")`;
      el.style.backgroundSize = '32px 32px';
      el.style.transform = flipX ? 'scaleX(-1)' : 'scaleX(1)';
    }

    function idle() {
      idleTime++;

      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && !idleAnim) {
        idleAnim = 'sleep';
      }

      if (idleAnim === 'sleep') {
        setSprite('sleep', Math.floor(idleFrame / 8), !facingRight);
        idleFrame++;
        if (idleFrame > 80) {
          idleAnim = null;
          idleFrame = 0;
        }
        return;
      }

      setSprite('idle', 0, !facingRight);
    }

    function frame() {
      frameCount++;
      const dx = dogX - mouseX;
      const dy = dogY - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < SPEED || dist < 40) {
        idle();
        return;
      }

      // Moving — reset idle
      idleAnim = null;
      idleFrame = 0;
      idleTime = 0;

      if (idleTime > 1) {
        setSprite('alert', 0, !facingRight);
        idleTime = Math.min(idleTime, 7);
        idleTime--;
        return;
      }

      // Determine direction for flip
      facingRight = dx < 0; // moving right = mouse is to the right (dx negative)
      setSprite('run_right', Math.floor(frameCount / 2), !facingRight);

      dogX -= (dx / dist) * SPEED;
      dogY -= (dy / dist) * SPEED;
      dogX = Math.min(Math.max(16, dogX), window.innerWidth - 16);
      dogY = Math.min(Math.max(16, dogY), window.innerHeight - 16);

      el.style.left = `${dogX - 16}px`;
      el.style.top = `${dogY - 16}px`;
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function loop(timestamp: number) {
      if (!el.isConnected) return;
      if (timestamp - lastTimestamp > 100) {
        lastTimestamp = timestamp;
        frame();
      }
      requestAnimationFrame(loop);
    }

    el.style.left = `${dogX - 16}px`;
    el.style.top = `${dogY - 16}px`;
    setSprite('idle', 0);

    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      el.remove();
      dogRef.current = null;
    };
  }, []);

  return null;
}
