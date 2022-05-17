const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://react.php.com/connect.php",
      changeOrigin: true,
    })
  );
};
