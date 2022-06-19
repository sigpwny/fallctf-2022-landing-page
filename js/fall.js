function type() {
  let target = '> Hacking. Food. Companies. Prizes.';
  let text = document.getElementById('tagline').textContent;

  if (text.length < target.length) {
    document.getElementById('tagline').textContent = text + target[text.length];
    setTimeout(type, 100);
  }
}

window.onload = type;
