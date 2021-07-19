exports.checkStatus = function (res) {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res;
  } else {
    throw console.error(res.statusText);
  }
};
