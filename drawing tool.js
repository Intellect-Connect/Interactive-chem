function initDrawingTool(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  
  ctx.strokeStyle = "#6E2C7E";
  ctx.lineWidth = 3;
  
  var isDrawing = false;
  
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("touchstart", startDrawing);
  canvas.addEventListener("touchmove", draw);
  canvas.addEventListener("touchend", stopDrawing);
  
  function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(getEventPos(e).x, getEventPos(e).y);
  }
  
  function draw(e) {
    if (!isDrawing) return;
    ctx.lineTo(getEventPos(e).x, getEventPos(e).y);
    ctx.stroke();
  }
  
  function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
  }
  
  function getEventPos(e) {
    if (e.type.startsWith("touch")) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else {
      return { x: e.clientX, y: e.clientY };
    }
  }
}
