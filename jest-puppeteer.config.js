const isDebugging = () => {
  let launch = {
    headless: false,
    devtools: false,
    timeout: 0,
    slowMo: 20,
    args: ['--start-fullscreen'],
    defaultViewport: null
  };
  return process.env.NODE_ENV === 'debug' ? launch : {};
};

module.exports = {
  launch: isDebugging()
};
