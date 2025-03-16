import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Dil kaynakları
const resources = {
  en: {
    translation: {
      "Details": "Details",
      hero: {
        title: "Hi, I'm",
        name: "Kürşat Kaan Akbulak",
      },
      about: {
        title: "About Me",
        description: "I am a 4th-year Computer Engineering student at Namık Kemal University with a current GPA of 3.02. Throughout my studies, I have had the opportunity to put the theoretical knowledge I have gained into practice in various projects and work experiences. I am developing myself in different areas such as web development, database management, and mobile game development, and I am progressing towards becoming a versatile engineer. In the ever-changing world of technology, I am always eager to learn new things and improve myself."
      },
      experience: {
        title: "My Experiences",
        experiences: [
          {
            title: "Long Term Intern - Eclit Information Services",
            date: "February 2025 - Present",
            description: ""
          },
          {
            title: "Software Developer - TamVeri Yazılım",
            date: "October 2024 - February 2025",
            description: "I developed projects in PHP, PostgreSQL, Ext.js, and IoT fields and gained experience in these technologies. I particularly worked on web applications and database management, gaining experience in hardware and software integration."
          },
          {
            title: "Intern - Eclit Information Services",
            date: "July 2024 - September 2024",
            description: "I contributed to the development of a dealership system project using Laravel for backend and React for frontend. During the project, I worked with Next.js, Proxmox virtualization platform, and Wazuh, enhancing my technical expertise."
          },
          {
            title: "Instructor - Yazılım Kids Academy",
            date: "December 2023 - July 2024",
            description: "I provided education on web development using HTML, CSS, JS, PHP, and React, as well as game development with Unity, to three student groups aged 7-17. The training aimed to improve students' skills in web and game development with a comprehensive curriculum."
          },
        ],
      },
      Skills: {
        title: "Skills",
      },
      footer: {
        rights: "All rights reserved.",
      },
      projects: {
        title: "Personal Projects",
        list: [
          {
            title: "Pool Lift",
            description: "A website project made for a company that manufactures pool lifts.",
            image: "1work_poollift.jpg",
            url: "https://www.poollift.org"
          },
          {
            title: "LiftArt",
            description: "A website project for a company that produces elevators.",
            image: "liftartorg.png",
            url: "https://www.liftart.org"
          },
          {
            title: "Muhasebem",
            description: "A website project for a company that provides services in accounting and finance.",
            image: "mhs.png",
            url: "https://www.muhasebem.net"
          },
          {
            title: "Moon Dental Depot",
            description: "An E-Commerce website project for dentists, dental technicians and dental laboratories.",
            image: "moon_1.png",
            url: "https://www.moondisdeposu.com"
          },
          {
            title: "Find Your Role",
            description: "A website project that collects job postings from job advertisement sites in a single platform for job seekers.",
            image: "sbb.png",
            url: "https://www.findyourrole.com"
          },
          {
            title: "Space Miners",
            description: "A mobile game project developed using Unity game engine.",
            image: "space.jpg",
            url: "https://play.google.com/store/apps/details?id=air.sufaka.spaceminers"
          },
          {
            title: "Crazy Bus Driver",
            description: "A mobile game project developed using Unity game engine.",
            image: "cbd.jpg",
            url: "https://play.google.com/store/apps/details?id=com.sufakasoftware.crazybusdriver"
          },
          {
            title: "Run Zombie Run",
            description: "A mobile game project developed using Unity game engine.",
            image: "zombie.jpg",
            url: "https://play.google.com/store/apps/details?id=com.sufakasoftware.runzombierun"
          }
        ]
      },
      navbar: {  // Navbar section in the correct location
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        quiz: "Quiz System"
      }
    },
  },
  tr: {
    translation: {
      "Details": "Detaylar",
      hero: {
        title: "Merhaba, Ben",
        name: "Kürşat Kaan Akbulak",
      },
      about: {
        title: "Hakkımda",
        description: "Namık Kemal Üniversitesi'nde Bilgisayar Mühendisliği 4. sınıf öğrencisiyim ve şu anki not ortalamam 3.02. Öğrenim hayatım boyunca edindiğim teorik bilgileri, çeşitli projelerde ve iş deneyimlerimde pratiğe dökme fırsatı buldum. Web geliştirme, veritabanı yönetimi, mobil oyun geliştirme gibi farklı alanlarda kendimi geliştirerek çok yönlü bir mühendis olma yolunda ilerliyorum. Teknolojinin sürekli değişen dünyasında, yeni şeyler öğrenmeye ve kendimi geliştirmeye her zaman istekliyim."
      },
      experience: {
        title: "İş Tecrübelerim",
        experiences: [
          {
            title: "Uzun Dönem Stajyer - Eclit Bilişim Hizmetleri",
            date: "Şubat 2025 - Devam Ediyor",
            description: ""
          },
          {
            title: "Yazılım Geliştirici - TamVeri Yazılım",
            date: "Ekim 2024 - Şubat 2025",
            description: "PHP, PostgreSQL, Ext.js ve IoT alanlarında projeler geliştirdim ve bu teknolojilerde tecrübe kazandım. Özellikle web uygulamaları ve veritabanı yönetimi üzerine çalışarak, donanım ve yazılım entegrasyonu konusunda deneyim elde ettim."
          },
          {
            title: "Staj - Eclit Bilişim Hizmetleri",
            date: "Temmuz 2024 - Eylül 2024",
            description: "Laravel'i backend, React'ı frontend olarak kullanan bir bayi sistemi projesinin geliştirilmesine katkıda bulundum. Proje süresince Next.js, Proxmox sanallaştırma platformu ve Wazuh ile çalışarak teknik uzmanlığımı geliştirdim."
          },
          {
            title: "Eğitmen - Yazılım Kids Akademi",
            date: "Aralık 2023 - Temmuz 2024",
            description: "7-17 yaş aralığındaki üç öğrenci grubuna HTML, CSS, JS, PHP, React ile web geliştirme ve Unity ile oyun geliştirme konularında eğitim verdim."
          },
        ],
      },
      Skills: {
        title: "Yetenekler",
      },
      footer: {
        rights: "Tüm hakları saklıdır.",
      },
      projects: {
        title: "Bireysel Projeler",
        list: [
          {
            title: "Pool Lift",
            description: "Havuz asansörü imalatı yapan bir firmaya özel olarak yapılmış bir web sitesi projesi.",
            image: "1work_poollift.jpg",
            url: "https://www.poollift.org"
          },
          {
            title: "LiftArt",
            description: "Asansör üretimi yapan bir firmanın web sitesi projesi.",
            image: "liftartorg.png",
            url: "https://www.liftart.org"
          },
          {
            title: "Muhasebem",
            description: "Muhasebe ve finans alanında hizmet veren bir firmanın web sitesi projesi.",
            image: "mhs.png",
            url: "https://www.muhasebem.net"
          },
          {
            title: "Moon Diş Deposu",
            description: "Diş hekimlerine, diş teknisyenlerine ve diş laboratuvarlarına yönelik bir E-Ticaret web sitesi projesi.",
            image: "moon_1.png",
            url: "https://www.moondisdeposu.com"
          },
          {
            title: "Find Your Role",
            description: "İş arayanlara özel, İş ilanı sitelerindeki ilanları tek bir platformda toplayan bir web sitesi projesi.",
            image: "sbb.png",
            url: "https://www.findyourrole.com"
          },
          {
            title: "Space Miners",
            description: "Unity oyun motoru kullanılarak geliştirilmiş bir mobil oyun projesi.",
            image: "space.jpg",
            url: "https://play.google.com/store/apps/details?id=air.sufaka.spaceminers"
          },
          {
            title: "Crazy Bus Driver",
            description: "Unity oyun motoru kullanılarak geliştirilmiş bir mobil oyun projesi.",
            image: "cbd.jpg",
            url: "https://play.google.com/store/apps/details?id=com.sufakasoftware.crazybusdriver"
          },
          {
            title: "Run Zombie Run",
            description: "Unity oyun motoru kullanılarak geliştirilmiş bir mobil oyun projesi.",
            image: "zombie.jpg",
            url: "https://play.google.com/store/apps/details?id=com.sufakasoftware.runzombierun"
          }
        ]
      },
      navbar: {  // Fixed navbar section placement
        about: "Hakkımda",
        experience: "Tecrübelerim",
        skills: "Yetkinlikler",
        projects: "Projelerim",
        contact: "İletişim",
        quiz: "Quiz Sistemi"
      }
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Varsayılan dil İngilizce olarak ayarlandı
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;