function initDrawingTool(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");

  ctx.strokeStyle = "#6E2C7E"; // Medium to dark purple
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
      // For mouse events, adjust for canvas position
      var rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }
}
