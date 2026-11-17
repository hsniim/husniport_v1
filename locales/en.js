// Struktur HARUS sama persis dengan id.js
const en = {
  meta: {
    title: "Husni Mubarok — Full-stack Web Developer",
    description:
      "Portfolio of Husni Mubarok, a Full-stack Web Developer who builds stable, scalable, and user-friendly web applications.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    name: "Husni Mubarok",
    role: "Web Developer & IT Support",
    tagline: "I build web applications that are stable, scalable, and user-friendly.",
  },
  about: {
    paragraphs: [
      "I started my journey as a developer back in vocational high school, when I first learned how a web page can be built from simple lines of code. That experience sparked a curiosity that keeps growing, and I increasingly enjoy building digital products that are clean, functional, and pleasant to use. Since then, I've focused on sharpening my web development skills, from fundamentals like **HTML**, **CSS**, and **JavaScript** to modern frameworks such as **Next.js**, **Node.js/Express**, and **Laravel**. I can also build websites with **WordPress** when needed. My detail-oriented, slightly perfectionist nature pushes me to make sure every element in a project is consistent and works as well as it can.",
      "Right now, I'm continuing to grow as a **Full-stack Web Developer**, with the goal of building web applications that are stable, scalable, and deliver a good user experience.",
      "I'm very open to full-time opportunities, freelance projects, and other collaborations that challenge my abilities while leaving room to keep learning and growing.",
    ],
  },
  experience: {
    items: [
      {
        period: "Jul — Oct 2025",
        role: "Full-stack Web Developer",
        company: "SPPB - Universitas Indonesia",
        description:
          "Responsible for developing a real-time room and information management website for the UI Salemba Campus. The project, named RACSI (Room and Control Schedule Interface), lets users monitor room availability in real time, book rooms, and access the latest campus information.",
      },
      {
        period: "Aug — Nov 2024",
        role: "Front-end Web Developer",
        company: "PT. Hexagon Karyatama Indonesia",
        description:
          "Took part in developing a web-based financial management system for MSMEs as part of the Teaching Factory Program at SMKN 46 Jakarta.",
      },
    ],
  },
  projects: {
    racsi:
      "RACSI is a reliable web application built specifically to optimize room and schedule management in educational institutions, offices, or multipurpose buildings. It helps you save valuable time while avoiding the scheduling conflicts that often happen, using real-time technology.",
    oltpay:
      "Oltpay is an all-in-one digital services website designed to make everyday needs easier. On a single platform, users can easily buy airtime and data packages, top up digital wallets (such as GoPay, OVO, and DANA), buy their favorite game vouchers, and pay monthly bills like electricity (PLN), water (PDAM), and BPJS. Oltpay is built with a light, responsive interface, so transactions are faster, more practical, and comfortable for anyone.",
  },
  contact: {
    heading: "Get in Touch",
    body: "I'm open to new projects. If you need a website that is fast, clean, and fits your budget, just send a message. I'll get back to you as soon as I can!",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "example@email.com",
      message: "Message",
      messagePlaceholder: "Write your message...",
      send: "Send Message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent. I'll reply as soon as possible.",
      error: "Something went wrong. Please try again.",
    },
  },
  toggle: {
    label: "Switch language",
    id: "Bahasa Indonesia",
    en: "English",
  },
};

export default en;