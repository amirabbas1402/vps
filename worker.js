export default {
  async fetch(request, env) {
    const originURL = new URL(request.url);
    originURL.hostname = "103.83.86.246";
    
    const upgradeHeader = request.headers.get("Upgrade");
    if (upgradeHeader === "websocket") {
      return fetch(originURL.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
    }
    return fetch(originURL.toString(), {
      method: request.method,
      headers: request.headers
    });
  }
}
