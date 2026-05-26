export default {
  async fetch(request, env) {
    const upgradeHeader = request.headers.get("Upgrade");
    
    if (upgradeHeader === "websocket") {
      const url = new URL(request.url);
      url.hostname = "103.83.86.246";
      url.protocol = "https:";
      
      const response = await fetch(url.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
      return response;
    }
    
    // Non-websocket requests
    return new Response("OK", { status: 200 });
  }
}
