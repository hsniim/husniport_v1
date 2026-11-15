// Penanda **teks** akan dirender tebal/putih oleh <Rich /> (sesuai style highlight di bagian Tentang)
const id = {
  meta: {
    title: "Husni Mubarok — Full-stack Web Developer",
    description:
      "Portofolio Husni Mubarok, Full-stack Web Developer yang membuat aplikasi web stabil, scalable, dan user-friendly.",
  },
  nav: {
    about: "Tentang",
    experience: "Pengalaman",
    projects: "Proyek",
    contact: "Kontak",
  },
  hero: {
    name: "Husni Mubarok",
    role: "Full-stack Web Developer",
    tagline: "Saya membuat aplikasi web yang stabil, scalable, dan user-friendly.",
  },
  about: {
    paragraphs: [
      "Saya memulai perjalanan sebagai developer sejak masa SMK, saat pertama kali mengenal bagaimana sebuah tampilan web bisa dibentuk dari baris-baris kode sederhana. Dari pengalaman itu, rasa ingin tahu saya terus berkembang, dan saya semakin menikmati proses membuat produk digital yang rapi, fungsional, serta nyaman digunakan oleh pengguna. Sejak saat itu, saya fokus mengasah kemampuan di bidang web development, mulai dari fondasi seperti **HTML**, **CSS**, dan **JavaScript**, hingga framework modern seperti **Next.js**, **Node.js/Express**, serta **Laravel**. Saya juga bisa membangun website menggunakan **WordPress** ketika dibutuhkan. Sifat saya yang detail-oriented dan sedikit perfeksionis mendorong saya untuk selalu memastikan setiap elemen dalam proyek konsisten dan berfungsi dengan optimal.",
      "Saat ini, saya terus berfokus untuk berkembang sebagai **Full-stack Web Developer**, dengan tujuan membangun aplikasi web yang stabil, scalable, dan memberikan pengalaman pengguna yang baik.",
      "Saya sangat terbuka terhadap peluang kerja full-time, proyek freelance, maupun kolaborasi lain yang dapat menantang kemampuan saya sekaligus memberikan ruang untuk terus belajar dan berkembang.",
    ],
  },
  experience: {
    items: [
      {
        period: "Juli — Okt 2025",
        role: "Full-stack Developer",
        company: "SKSG - Universitas Indonesia",
        description:
          "Bertanggung jawab mengembangkan website manajemen ruangan dan informasi real-time untuk lingkungan Kampus UI Salemba. Proyek bernama RACSI (Room and Control Schedule Interface) ini memungkinkan pengguna untuk memantau ketersediaan ruangan secara real-time, melakukan pemesanan ruang, serta mengakses informasi kampus terkini.",
      },
      {
        period: "Agust — Nov 2024",
        role: "Front-end Developer",
        company: "PT. Hexagon Karyatama Indonesia",
        description:
          "Berpartisipasi mengembangkan sistem manajemen keuangan untuk UMKM berbasis website dalam Program Teaching Factory di SMKN 46 Jakarta",
      },
    ],
  },
  projects: {
    // Kunci (racsi, oltpay) dipakai untuk mencocokkan dengan data proyek di komponen Anda
    racsi:
      "RACSI adalah solusi aplikasi web andal yang dikembangkan khusus untuk mengoptimalkan pengelolaan ruangan dan jadwal di institusi pendidikan, kantor, atau gedung serbaguna, membantu Anda menghemat waktu berharga sekaligus menghindari konflik jadwal yang sering terjadi dengan teknologi real-time.",
    oltpay:
      "Oltpay adalah sebuah website layanan digital serba bisa yang dirancang untuk memudahkan kebutuhan sehari-hari. Lewat satu platform ini, pengguna bisa dengan mudah membeli pulsa, paket data internet, mengisi saldo dompet digital (seperti GoPay, OVO, DANA), membeli voucher game favorit, hingga membayar berbagai tagihan bulanan seperti listrik (PLN), air (PDAM), dan BPJS. Oltpay dibuat dengan tampilan yang ringan dan responsif, sehingga proses transaksi menjadi lebih cepat, praktis, dan nyaman digunakan siapa saja.",
  },
  contact: {
    heading: "Hubungi Saya",
    body: "Saya lagi open project baru. Kalau butuh website yang cepat, rapi, dan sesuai budget, langsung saja kirim pesan. Nanti bakal saya balas secepatnya!",
    form: {
      name: "Nama",
      namePlaceholder: "Ketik nama",
      email: "Email",
      emailPlaceholder: "contoh@email.com",
      message: "Pesan",
      messagePlaceholder: "Ketik pesan...",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Terima kasih! Pesan terkirim. Saya akan balas secepatnya.",
      error: "Terjadi kesalahan. Silakan coba lagi.",
    },
  },
  toggle: {
    label: "Ganti bahasa",
    id: "Bahasa Indonesia",
    en: "English",
  },
};

export default id;