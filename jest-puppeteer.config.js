const isDebugging = () => {
  let debugLaunch = {
    headless: false,
    devtools: false,
    slowMo: 20,
    args: ['--start-fullscreen', '--disable-dev-shm-usage'],
    defaultViewport: null
  };
  let regularLaunch = {
    args: [
      '--disabled-dev-shm-usage',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  };
  return process.env.NODE_ENV === 'debug' ? debugLaunch : regularLaunch;
};

module.exports = {
  launch: isDebugging()
};
