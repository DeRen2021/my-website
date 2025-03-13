import React, { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-bg');
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const matrix = "01";
    const matrixArray = matrix.split("");
    const fontSize = 12;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 255, 0, 0.7)";
      ctx.font = fontSize + "px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 30);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      id="matrix-bg" 
      className="fixed top-0 left-0 w-full h-full" 
      style={{ 
        zIndex: -10, 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }} 
    />
  );
};

export default AnimatedBackground; 