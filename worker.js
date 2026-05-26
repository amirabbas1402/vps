export default {
  async fetch(request, env) {
    const upgradeHeader = request.headers.get("Upgrade");
    
    if (upgradeHeader === "websocket") {
      const [client, server] = new WebSocketPair();
      
      const url = new URL(request.url);
      url.hostname = "103.83.86.246";
      url.protocol = "wss:";
      
      const originWs = new WebSocket(url.toString());
      
      server.accept();
      
      originWs.addEventListener("message", (event) => {
        server.send(event.data);
      });
      
      server.addEventListener("message", (event) => {
        originWs.send(event.data);
      });
      
      originWs.addEventListener("close", () => server.close());
      server.addEventListener("close", () => originWs.close());
      
      return new Response(null, {
        status: 101,
        webSocket: client
      });
    }
    
    return new Response("OK", { status: 200 });
  }
}
