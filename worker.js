export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.hostname = "103.83.86.246";
    url.protocol = "https:";

    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
  }
}
