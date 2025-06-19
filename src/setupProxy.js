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
<<<<<<< HEAD
      target: 'https://api.pablorluna.com',
=======
      target: 'http://localhost:5000',
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
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
