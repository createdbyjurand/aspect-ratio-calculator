export const pureRatio = () => {
  const w = 15881;
  const h = 7495.13;

  if (w > h) {
    let wr = 16290;
    let hr;
    while (wr > 0) {
      hr = Math.round(((h * wr) / w) * 1000) / 1000;
      if (hr % 1 === 0) {
        console.log(wr + ' x ' + hr);
      }
      wr--;
    }
  } else {
    let wr;
    let hr = 16290;
    while (hr > 0) {
      wr = Math.round(((w * hr) / h) * 1000) / 1000;
      if (wr % 1 === 0) {
        console.log(wr + ' x ' + hr);
      }
      hr--;
    }
  }
  return null;
};
