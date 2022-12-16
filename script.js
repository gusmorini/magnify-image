let coverEl = document.querySelector("#cover");
let magnifyEl = document.querySelector("#magnify");

const url =
  "https://i.annihil.us/u/prod/marvel/i/mg/3/60/5e00d8e099800/clean.jpg";
const coverSize = 400;
const magnifySize = coverSize / 1.2;
const magnifyZoom = coverSize / 1.2;
const magnifyHalf = magnifySize / 2;

coverEl.src = url;

coverEl.width = coverSize;
magnifyEl.style.width = magnifySize + "px";
magnifyEl.style.height = magnifySize + "px";

coverEl.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY, target } = e;
  const { offsetWidth, offsetHeight } = target;

  magnifyEl.style.top = offsetY - magnifyHalf + "px";
  magnifyEl.style.left = offsetX - magnifyHalf + "px";

  const xPercentage = (offsetX / offsetWidth) * 100;
  const yPercentage = (offsetY / offsetHeight) * 100;

  magnifyEl.style.backgroundPosition = `${xPercentage}% ${yPercentage}%`;
});

coverEl.addEventListener("mouseover", (e) => {
  magnifyEl.style.display = "block";
  magnifyEl.style.backgroundSize = `${magnifyZoom}%`;
  magnifyEl.style.backgroundImage = `url('${url}')`;
});

coverEl.addEventListener("mouseleave", (e) => {
  magnifyEl.style.display = "none";
});
