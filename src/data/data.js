

export const profile = {
  name:      'Queentana Allea Hasanah',
  nickname:  'Queentana',
  role:      'Frontend Developer',
  roles:     ['Frontend Developer', 'UI/UX Designer', 'Graphic Designer', 'Web Programmer'],
  tagline:   'Lulusan SMK Wikrama Bogor yang passionate di dunia web & digital.',
  about1:    'Halo! Saya Queentana — programmer lulusan SMK Wikrama Bogor jurusan PPLG (Pengembangan Perangkat Lunak dan Gim). Saya sedang aktif mencari pengalaman di dunia industri, khususnya di bidang Web Developer / Frontend.',
  about2:    'Saya suka mengutak-atik tampilan website supaya rapi, menarik, dan enak dipakai. Selain coding, saya juga tertarik di UI/UX Design dan Graphic Design. Masih terus belajar, tapi setiap hari ada progress baru!',
  location:  'Bogor, Jawa Barat',
  email:     'queentana@email.com',
  whatsapp:  'https://api.whatsapp.com/send/?phone=%2B62895321835733',
  instagram: 'https://www.instagram.com/queentana_/',
  tiktok:    'https://www.tiktok.com/@queentana00',
  linkedin:  'https://www.linkedin.com/in/queentana-allea-hasanah-6b12bb341/',
  spotify:   'https://open.spotify.com/user/31fadwg2s2s7udgzhhu3fr6blbba',
  available: true,
  school:    'SMK Wikrama Bogor',
  jurusan:   'PPLG (Pengembangan Perangkat Lunak dan Gim)',
}

export const navLinks = [
  { href: '#home',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#skills',       label: 'Skills' },
  { href: '#education',    label: 'Education' },
  { href: '#projects',     label: 'Projects' },
  { href: '#certificates', label: 'Sertifikat' },
  { href: '#contact',      label: 'Contact' },
]


export const skills = [
  {
    name: 'HTML',
    level: 90,
    desc: 'Menguasai struktur semantic HTML5, form validation, dan accessibility standards untuk membuat website yang clean dan accessible.',
    emoji: '🌐',
  },
  {
    name: 'CSS',
    level: 85,
    desc: 'Expert dalam CSS3, Flexbox, Grid, animations, dan responsive design. Juga menguasai preprocessor seperti SASS.',
    emoji: '🎨',
  },
  {
    name: 'JavaScript',
    level: 70,
    desc: 'Menguasai ES6+, DOM manipulation, async programming, dan basic framework concepts. Terus belajar dan berkembang.',
    emoji: '⚡',
  },
  {
    name: 'Design Grafis',
    level: 80,
    desc: 'Kemampuan dalam UI/UX design, graphic design principles, dan tools seperti Figma, Adobe Photoshop, dan Illustrator.',
    emoji: '✏️',
  },
  {
    name: 'PHP & MySQL',
    level: 60,
    desc: 'Dasar-dasar backend web dengan PHP dan pengelolaan database relasional menggunakan MySQL.',
    emoji: '🗄️',
  },
  {
    name: 'Figma / UI-UX',
    level: 75,
    desc: 'Membuat wireframe, prototype, dan desain antarmuka menggunakan Figma dengan memperhatikan user experience.',
    emoji: '🖌️',
  },
]

export const tools = [
  'VS Code', 'Figma',  'GitHub', 'Canva',
  'Google Chrome DevTools', 'Bostrap',
  'Tailwind', 
]

export const softSkills = [
  { emoji: '🎯', label: 'Detail-oriented' },
  { emoji: '💡', label: 'Kreatif' },
  { emoji: '📚', label: 'Semangat belajar' },
  { emoji: '🤝', label: 'Kolaboratif' },
  { emoji: '💬', label: 'Komunikatif' },
  { emoji: '⏰', label: 'Disiplin waktu' },
]


export const education = [
  {
    id: 1,
    school: 'SMK Wikrama Bogor',
    major: 'PPLG — Pengembangan Perangkat Lunak dan Gim',
    year: '2022 – 2025',
    desc: 'Belajar pemrograman web, desain UI/UX, dan pengembangan aplikasi. Aktif mengerjakan berbagai proyek web selama masa sekolah.',
    mapUrl: 'https://maps.app.goo.gl/3jS3LYig2iR3mCS57',
    highlight: 'Jurusan PPLG',
    icon: '🏫',
  },
  {
    id: 2,
    school: 'SMP Negeri 1 Megamendung',
    major: 'SMP',
    year: '2016 – 2019',
    desc: 'Melanjutkan pendidikan di SMP Negeri 1 Megamendung. Mulai mengenal dunia komputer dan teknologi informasi.',
    mapUrl: 'https://maps.app.goo.gl/bNnWqM39eEBdFagY7',
    highlight: null,
    icon: '🏫',
  },
  {
    id: 3,
    school: 'SDN Cipayung 02',
    major: 'Sekolah Dasar',
    year: '2010 – 2016',
    desc: 'Menyelesaikan pendidikan dasar di SDN Cipayung 02.',
    mapUrl: 'https://maps.app.goo.gl/VVR4uCzF7LLmfQzi7',
    highlight: null,
    icon: '🏫',
  },
  {
    id: 4,
    school: 'TK RA-ARAFAT',
    major: 'Taman Kanak-Kanak',
    year: '2009 – 2010',
    desc: 'Awal perjalanan pendidikan di TK RA-ARAFAT.',
    mapUrl: 'https://maps.app.goo.gl/YKmZn3XApP1A87pr5',
    highlight: null,
    icon: '🌱',
  },
]

export const experience = [
  {
    id: 1,
    role: 'Internship',
    company: 'Green Earth Indonesia',
    year: '2023',
    desc: 'Magang di Green Earth Indonesia, terlibat dalam pengerjaan proyek digital dan pengembangan konten web.',
    emoji: '🌿',
  },
  {
    id: 2,
    role: 'Freelance Digital Marketing',
    company: 'Arowid Industries',
    year: '2023',
    desc: 'Mengerjakan proyek digital marketing secara freelance, termasuk pembuatan konten dan optimasi media sosial.',
    emoji: '📱',
  },
]


export const projects = [
  {
    id: 1,
    title: 'Website Project Sidata',
    desc: 'Website Project Sidata ini dikembangkan untuk membantu dalam pengisian data siswa secara digital dan menyimpannya dengan rapi secara digital.',
    tech: ['HTML', 'CSS', 'Laravel', 'Font Awesome'],
    github: 'https://github.com/quentana/Project-Sidata',
    demo: 'https://github.com/quentana/Project-Sidata',
    emoji: '👩‍💻',
    bg: '#fff1f5',
  },
  {
    id: 2,
    title: 'Kalkulator Multi-Fungsi',
    desc: 'Kalkulator web yang punya berbagai mode: kalkulator biasa, aritmatika, geometri hingga geometri tak hingga. Dibuat saat belajar JavaScript DOM manipulation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/quentana/calcul-m',
    demo: 'https://quentana.github.io/calcul-m/',
    emoji: '🧮',
    bg: '#fff8f0',
  },
  {
    id: 3,
    title: 'Website Fashion Batik',
    desc: 'Website company profile untuk produk fashion batik. Menampilkan katalog produk, profil perusahaan, dan halaman kontak yang informatif.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/quentana/Fashion_batik',
    demo: 'https://github.com/quentana/Fashion_batik',
    emoji: '👗',
    bg: '#f0fff4',
  },
  {
    id: 4,
    title: 'TixID — Tiket Konser',
    desc: 'Aplikasi pemesanan tiket konser online. Fitur pemilihan kursi, kategori tiket, dan sistem checkout pemesanan.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Laravel'],
    github: 'https://github.com/quentana/tixid',
    demo: 'https://github.com/quentana/tixid',
    emoji: '🎫',
    bg: '#f5f0ff',
  },
  {
    id: 6,
    title: 'Website Sunda',
    desc: 'Website edukasi tentang budaya Sunda dan Kampung Salapan. Berisi informasi sejarah dan galeri foto. Proyek tugas sekolah yang dikerjakan dengan serius.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/quentana/website-sunda',
    demo: 'https://github.com/quentana/website-sunda',
    emoji: '🎋',
    bg: '#fff8ee',
  },
  {
    id: 7,
    title: 'Web Sejarah Teknologi',
    desc: 'Halaman informasi sejarah perkembangan teknologi dengan tampilan yang informatif dan dilengkapi gambar ilustrasi.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/quentana/web-sejarah',
    demo: 'https://github.com/quentana/web-sejarah',
    emoji: '🖥️',
    bg: '#eef5ff',
  },
 
]




export const certificates = [
  {
    id: 1,
    title: 'Belajar Menganalisi data Analasty ',
    issuer: 'Revou',
    year: '2026',
    image: '/certificates/cert1.png',
    color: '#fff1f5',
    borderColor: '#fce7f3',
    desc: 'Menyelesaikan kelas data analasty dengan menggunakan banyak tools baru  yang di kenal.',
  },
  {
    id: 2,
    title: 'Belajar terkait dengan AI',
    issuer: 'Dicoding Indonesia ',
    year: '2026',
    image:'/certificates/cert2.png',
    color: '#f0f9ff',
    borderColor: '#bfdbfe',
    desc: 'Tidak hanya menggunakan saja, saya juga Memperlajari Algoritma yang AI lakukan.',
  },
  {
    id: 3,
    title: 'Laravel We Develope',
    issuer: 'Digi Up',
    year: '2025',
    image: '/certificates/cert3.png',
    color: '#fff8f0',
    borderColor: '#fed7aa',
    desc: 'Mempelajari Lebih dalam tentang Femrwork laravel secara luas dengan mengikuti course ini.',
  },
  {
    id: 4,
    title: 'Reacjt Js',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    image: '/certificates/cert4.png',
    color: '#f0fff4',
    borderColor: '#bbf7d0',
    desc: 'Mengikuti course Pembelajaran Tentang Javascript secara luas tentang Fundamentalnya dengan banyak Project yang saya buat.',
  },
  {
    id: 5,
    title: 'Sofware Engineering',
    issuer: 'Revou',
    year: '2026',
    image: '/certificates/cert5.png',
    color: '#fff0fb',
    borderColor: '#f9b2d7',
    desc: 'Mempelajari lebih dalam lagi tentang pendekatan sistemats, terstruktur dan untuk menganalisis kebutuhan, desain arsitektur, pengujian, dan manajemen proyek. ',
  },
  {
    id: 6,
    title: 'Data visualization',
    issuer: 'MySkill',
    year: '2026',
    image: '/certificates/cert6.png',
    color: '#f5f0ff',
    borderColor: '#ddd6fe',
    desc: 'Mempelajari  penyajian informasi dan data numerik secara grafis—menggunakan elemen visual seperti bagan, grafik, peta, dan infografis—untuk memudahkan pemahaman, analisis, serta komunikasi pola, tren, dan hubungan yang kompleks',
  },
]


export const services = [
  {
    emoji: '🎨',
    title: 'Graphic Design',
    desc: 'Membuat desain visual yang menarik dan komunikatif menggunakan prinsip-prinsip desain grafis modern.',
  },
  {
    emoji: '✏️',
    title: 'UI/UX Design',
    desc: 'Merancang antarmuka yang intuitif dan pengalaman pengguna yang nyaman dengan pendekatan user-centered design.',
  },
  {
    emoji: '💻',
    title: 'Frontend Developer',
    desc: 'Membangun tampilan website yang responsif, rapi, dan fungsional menggunakan HTML, CSS, dan JavaScript.',
  },
]
