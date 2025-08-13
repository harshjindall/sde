import React, { useEffect, useRef } from "react";
import "./styles/BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width, height;

    // Dots array and mouse position
    const dots = [];
    const mouse = {
      x: 0,
      y: 0,
      radius: 100,
    };

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Recreate the dots
      dots.length = 0;
      initDots();
    };

    // Mouse movement handler
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Create a dot
    class Dot {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow horizontal velocity
        this.vy = (Math.random() - 0.5) * 0.5; // Slow vertical velocity
        this.radius = Math.random() * 1.5 + 0.5;
      }

      // Draw the dot
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fill();
      }

      // Update dot position
      update() {
        // Check boundary collision
        if (this.x > width || this.x < 0) {
          this.vx = -this.vx;
        }
        if (this.y > height || this.y < 0) {
          this.vy = -this.vy;
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        this.draw();
      }
    }

    // Initialize dots
    const initDots = () => {
      const dotsCount = Math.min(Math.floor(width * height / 10000), 150); // Cap at 150 dots
      for (let i = 0; i < dotsCount; i++) {
        dots.push(new Dot());
      }
    };

    // Connect dots with lines
    const connectDots = () => {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw a line if they're close enough
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.2 * (1 - distance / 100)})`; // Fade out with distance
            ctx.lineWidth = 0.15;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw each dot
      for (let i = 0; i < dots.length; i++) {
        dots[i].update();
      }

      connectDots();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="container-stars" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <div id="stars"></div>
        <canvas 
          ref={canvasRef} 
          className="network-lines"
          style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        />
      </div>
      <div id="glow" style={{ position: 'fixed', zIndex: -1 }}>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </>
  );
};

export default BackgroundAnimation; 