export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Forward to your origin server
    const originURL = new URL(request.url);
    originURL.hostname = "103.83.86.246";
    
    // Handle WebSocket upgrade
    const upgradeHeader = request.headers.get("Upgrade");
    if (upgradeHeader === "websocket") {
      return fetch(originURL.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
    }
    
    // Regular HTTP requests go to nginx cover page
    return fetch(originURL.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
  }
}
