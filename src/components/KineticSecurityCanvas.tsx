"use client";

import React, { useEffect, useRef } from "react";

interface Props {
  darkMode: boolean;
}

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isAnchor: boolean;
  pulsePhase: number;
}

interface Packet {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
}

export default function KineticSecurityCanvas({ darkMode }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse interaction state
    const mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Create security topology nodes
    const nodeCount = Math.min(38, Math.max(20, Math.floor((width * height) / 22000)));
    const nodes: NodePoint[] = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      radius: i % 5 === 0 ? 3.2 : 1.8,
      isAnchor: i % 5 === 0,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Active encrypted data packets traveling along edges
    const packets: Packet[] = [];
    const maxDistance = 165;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const nodeColor = darkMode ? "rgba(244, 244, 245, 0.45)" : "rgba(24, 24, 27, 0.32)";
      const anchorColor = darkMode ? "rgba(16, 185, 129, 0.8)" : "rgba(5, 150, 105, 0.75)";
      const lineBase = darkMode ? "228, 228, 231" : "39, 39, 42";
      const packetColor = darkMode ? "#10b981" : "#059669";

      // Update node positions
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulsePhase += 0.03;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Subtle interactive attraction/repulsion to cursor
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && dist > 5) {
            n.x += (dx / dist) * 0.25;
            n.y += (dy / dist) * 0.25;
          }
        }
      }

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (darkMode ? 0.16 : 0.11);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${lineBase}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Occasionally spawn a data packet along connected nodes
            if (packets.length < 10 && Math.random() < 0.0012) {
              packets.push({
                fromIdx: i,
                toIdx: j,
                progress: 0,
                speed: 0.012 + Math.random() * 0.012,
              });
            }
          }
        }

        // Connect node to mouse cursor if nearby
        if (mouse.active) {
          const mdx = mouse.x - nodes[i].x;
          const mdy = mouse.y - nodes[i].y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 170) {
            const mAlpha = (1 - mdist / 170) * (darkMode ? 0.35 : 0.22);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = darkMode
              ? `rgba(16, 185, 129, ${mAlpha})`
              : `rgba(5, 150, 105, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update & draw traveling data packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        const a = nodes[pkt.fromIdx];
        const b = nodes[pkt.toIdx];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > maxDistance * 1.15) {
          packets.splice(k, 1);
          continue;
        }

        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const px = a.x + dx * pkt.progress;
        const py = a.y + dy * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = packetColor;
        ctx.fill();
      }

      // Draw nodes and anchor pulse rings
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (n.isAnchor) {
          const pulseRadius = n.radius + 4 + Math.sin(n.pulsePhase) * 2.5;
          ctx.beginPath();
          ctx.arc(n.x, n.y, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = darkMode
            ? "rgba(16, 185, 129, 0.22)"
            : "rgba(5, 150, 105, 0.18)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.isAnchor ? anchorColor : nodeColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full opacity-90"
      aria-hidden="true"
    />
  );
}
