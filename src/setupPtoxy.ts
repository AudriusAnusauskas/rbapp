// src/setupProxy.ts
import { createProxyMiddleware } from "http-proxy-middleware";

const proxyConfig = {
  target: "http://localhost:8080", // Replace this with your API server's URL
  changeOrigin: true,
};

export default function setupProxy(app: any) {
  app.use("/api", createProxyMiddleware(proxyConfig));
}
