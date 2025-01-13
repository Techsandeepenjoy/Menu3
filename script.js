demo.onclick = event => {
  let target = event.target.closest('.item');

  if (target) {
    demo.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth' });

  }
};