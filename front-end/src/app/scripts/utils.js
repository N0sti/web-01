
export function parseUrl(url = window.location.href) {
  var query = url.split("?")[1] || "";
  const result = query.split("&")
    .map(item => item.split("="))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  return result;
}
