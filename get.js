function get(src, path) {
  let keys = path.split(".");
  let res = "";
  for (const key of keys) {
    if (!src[key]) {
      return undefined;
    }
    src = src[key];
  }
  return src;
}

