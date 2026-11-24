// app/robots.js
export default function robots() {
  // Ganti dengan domain resmi situs Anda
  const baseUrl = 'https://www.husnimubarok.site';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/api/', '/_next/', '/admin/'],
    },
    // Sangat penting: beri tahu mesin pencari lokasi sitemap
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}