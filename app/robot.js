export default function robot() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: []
    },
    sitemap: 'https://www.9teensupply.vercel.app/sitemap.xml'
  }
}