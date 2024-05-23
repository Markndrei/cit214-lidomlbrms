module.exports = () => ({
  async rewrites() {
    return [
      {
        source: '/api/hello',
        destination: 'http://localhost:5000/api/hello',
      },
    ];
  },
});
