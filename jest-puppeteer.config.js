const isDebugging = () => {
  let launch = {
    headless: false,
    devtools: false,
    timeout: 0,
    slowMo: 20,
    args: ['--start-fullscreen', '--disable-dev-shm-usage'],
    defaultViewport: null
  };
  return process.env.NODE_ENV === 'debug'
    ? launch
    : { args: ['--disabled-dev-shm-usage'] };
};

module.exports = {
  launch: isDebugging()
};
