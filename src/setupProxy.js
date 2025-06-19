const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy para Twitch
  app.use(
    '/twitch',
    createProxyMiddleware({
      target: 'https://www.twitch.tv',
      changeOrigin: true,
      secure: false,
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type';
      }
    })
  );

  // Proxy para YouTube
  app.use(
    '/api/youtube',
    createProxyMiddleware({
      target: 'https://api.pablorluna.com',
      changeOrigin: true,
      secure: false,
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type';
      }
    })
  );
};
