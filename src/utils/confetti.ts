import confetti from 'canvas-confetti';

export function fireGoldenConfetti() {
  // Gold, warm amber, cream and rose gold colors
  const colors = ['#D4AF37', '#F5DEB3', '#C5A059', '#FFE4B5', '#E6C280', '#FFF8DC'];

  // Left burst
  confetti({
    particleCount: 45,
    angle: 60,
    spread: 55,
    origin: { x: 0.1, y: 0.7 },
    colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });

  // Right burst
  confetti({
    particleCount: 45,
    angle: 120,
    spread: 55,
    origin: { x: 0.9, y: 0.7 },
    colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });

  // Center star burst
  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#FFD700', '#F0E68C', '#DAA520', '#FFFFFF'],
      ticks: 200,
      gravity: 0.7,
      scalar: 1.2,
    });
  }, 250);
}

export function fireCandleWishConfetti() {
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#D4AF37', '#FFDF78', '#FFF3CD', '#B8860B'],
    ticks: 180,
  });
}
