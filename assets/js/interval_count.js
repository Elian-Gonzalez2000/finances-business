const d = document;

export default function intervalCount(countArea, countNumber) {
  const $areaObserve = d.querySelector(countArea),
    $counts = d.querySelectorAll(countNumber),
    speed = 200;

  const cb = (entry) => {
    //console.log(entry);
    if (entry[0].isIntersecting) {
      $counts.forEach((el) => {
        //console.log(Number(el.textContent));
        let count = Number(el.textContent),
          inc = count / speed,
          result = 0;
        const interval = setInterval(() => {
          if (!el.classList.contains("ready")) {
            el.textContent = "";
          }
          el.classList.add("ready");
          if (el.textContent >= count) {
            el.textContent = count;
            clearInterval(interval);
          } else {
            result = Number(result) + inc;
            el.textContent = Math.ceil(result);
          }
        }, 20);
      });
    }
  };
  const observer = new IntersectionObserver(cb, {
    //root
    //rootMargin
    threshold: [0.3, 0.75],
  });
  observer.observe($areaObserve);
}
