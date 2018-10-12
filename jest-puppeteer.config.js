const isDebugging = () => {
  let launch = {
    headless: false,
    devtools: true,
    timeout: 0
  };
  return process.env.NODE_ENV === "debug" ? launch : {};
};

module.exports = {
  launch: isDebugging()
};
