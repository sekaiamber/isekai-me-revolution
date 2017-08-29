Array.prototype.unique2 = function (getKey = val => val) {
  const n = {};
  const r = [];
  for (let i = 0; i < this.length; i += 1) {
    const key = getKey(this[i]);
    if (!n[key]) {
      n[key] = true;
      r.push(this[i]);
    }
  }
  return r;
};
