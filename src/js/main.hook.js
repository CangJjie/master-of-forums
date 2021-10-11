(() => {
  const V = document.getElementById('v');

  const CHANNEL = V.dataset.channel;
  const HANDLER = V.dataset.handler;
  const VERSION = parseInt(V.dataset.version, 10);

  // eslint-disable-next-line no-console
  console.log('\u{1F50A}Channel is', CHANNEL);
  // eslint-disable-next-line no-console
  console.log('\u{1F50A}Handler is', HANDLER);
  // eslint-disable-next-line no-console
  console.log('\u{1F50A}Version is', VERSION);

  if (Math.random() < 0.001 && typeof CHANNEL === 'undefined') {
    let can = true;
    setTimeout(() => {
      if (can) {
        can = false;
        window.location.href = 'https://gitlab.com/master-of-forums/master-of-forums/raw/main/src/js/main.user.js';
      }
    }, 3 * 1000);
    fetch('https://www.facebook.com/security/hsts-pixel.gif')
      .then(() => {
        if (can) {
          can = false;
          window.location.href = 'https://github.com/master-of-forums/master-of-forums/raw/main/src/js/main.user.js';
        }
      })
      .catch(() => {
        if (can) {
          can = false;
          window.location.href = 'https://gitlab.com/master-of-forums/master-of-forums/raw/main/src/js/main.user.js';
        }
      });
  }
})();
