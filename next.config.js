module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/uKMzYnbrnX',
        permanent: false,
      },
    ]
  },
}
