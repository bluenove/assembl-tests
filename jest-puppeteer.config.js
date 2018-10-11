const isDebugging = () => {
  let launch = {
    headless: false,
    slowMo: 50,
    devtools: true
  };
  return process.env.NODE_ENV === 'debug' ? launch : {};
};

module.exports = {
  launch: isDebugging()
};
