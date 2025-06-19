const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const target = 'https://api.pablorluna.com';

  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
      secure: true,
      onProxyReq: (proxyReq) => {
        proxyReq.setHeader('Origin', target);
      }
    })
  );

  // Proxy para Twitch
  app.use(
    '/twitch',
    createProxyMiddleware({
      target: 'https://api.twitch.tv',
      changeOrigin: true,
      secure: true,
      onProxyReq: (proxyReq) => {
        proxyReq.setHeader('Client-ID', process.env.REACT_APP_TWITCH_CLIENT_ID);
      },
    })
  );
  app.use(
    '/api/youtube',
    createProxyMiddleware({
      target: 'http://localhost:5000',
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
