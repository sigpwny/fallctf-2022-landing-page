function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

// start typewriter animation
async function startTyping() {
  const words = ['Hacking.', 'Food.', 'Companies.', 'Prizes.'];

  let index = 0;
  while (true) {
    await typeWord(words[index]);
    await wait(300);
    index = (index + 1) % words.length;
  }
}

// type one word of animation at a time
async function typeWord(word) {
  const tagline = document.getElementById('tagline');

  for (const char of word) {
    tagline.textContent += char;
    await wait(150);
  }

  await wait(1000);

  for (const char of word) {
    tagline.textContent = tagline.textContent.slice(0, -1);
    await wait(80);
  }
}

// start the animation
startTyping().then();

// hide the scroll arrow when the page is scrolled
window.addEventListener('scroll', function () {
  const arrow = document.getElementById('arrow-container');
  if (window.scrollY > 0) {
    arrow.style.display = 'none';
  } else {
    arrow.style.display = 'block';
  }
});
