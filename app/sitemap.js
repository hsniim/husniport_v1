// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://www.husnimubarok.site';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, 
    },
    // Tidak perlu menambahkan entri /en atau /id, karena URL Anda tidak berubah karena bahasa
  ];
}