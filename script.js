document.querySelectorAll(".circle").forEach(canvas => {
    const ctx = canvas.getContext("2d");
    const percent = canvas.dataset.percent;
    const radius = canvas.width / 2 - 10;
    const center = canvas.width / 2;
    const startAngle = -0.5 * Math.PI;
    const endAngle = (percent / 100) * 2 * Math.PI + startAngle;
  
    // Background circle
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#ffe6f0";
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.stroke();
  
    // Progress circle
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.arc(center, center, radius, startAngle, endAngle);
    ctx.stroke();
  });
  