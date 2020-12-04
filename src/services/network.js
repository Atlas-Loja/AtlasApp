export const isReachable = async () => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, "Request timed out");
  });
  const request = fetch("https://api.atlasloja.com/");
  try {
    await Promise.race([timeout, request]);
    return true;
  } catch (error) {
    return false;
  }
};
