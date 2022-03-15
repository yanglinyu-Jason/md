export function getcw(px) {
  const scale = px / 3840;
  const htmlWidth = document.body.clientWidth;
  return htmlWidth * scale;
}

export function getch(px) {
  const scale = px / 1088;
  const size = document.body.clientHeight;
  return size * scale;
}

export function fitChartSize(size, defalteWidth = 4864) {
  const { clientWidth } = document.body;
  if (!clientWidth) return size;
  const scale = (clientWidth / defalteWidth);
  return Number((size * scale).toFixed(3));
}
