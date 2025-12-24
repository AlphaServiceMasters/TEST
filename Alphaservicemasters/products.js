/* =========================================
   DATABASE: ALL YOUR PRODUCTS HERE
   ========================================= */
const database = {
  // --- GAMING DATA ---
  gaming: {
    categories: [
      { key: "all", name: "الكل", img: "https://cdn-icons-png.flaticon.com/512/7273/7273139.png" },
      { key: "ml", name: "Mobile Legends", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain" },
      { key: "efootball", name: "eFootball", img: "https://th.bing.com/th/id/OIP.BkchYmD7qXXzS-4QeHy7nwHaHa?cb=iwp2&rs=1&pid=ImgDetMain" },
      { key: "freefire", name: "Free Fire", img: "https://img.icons8.com/color/96/000000/free-fire.png" }
    ],
    products: [
      { title: "Mobile Legends Weekly Diamond Pass", desc: "بطاقة أسبوعية MLBB", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 8, badge: "Hot", keywords: "mlbb pass recharge شحن موبايل ليجند" },
      { title: "Mobile Legends 5 Diamonds", desc: "شحن سريع", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 2, keywords: "mlbb gems diamonds جواهر" },
      { title: "Mobile Legends 55 Diamonds", desc: "شحن سريع", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 5, keywords: "mlbb gems diamonds جواهر" },
      { title: "Mobile Legends 300 Diamonds", desc: "عرض مرة واحدة للحساب", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 21, keywords: "mlbb gems diamonds جواهر promo" },
      { title: "Mobile Legends 500 Diamonds", desc: "عرض مرة واحدة للحساب", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 35, keywords: "mlbb gems diamonds جواهر" },
      { title: "Mobile Legends 1000 Diamonds", desc: "عرض مرة واحدة للحساب", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 69, keywords: "mlbb gems diamonds جواهر" },
      { title: "Mobile Legends 2195 Diamonds", desc: "شحن سريع", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 135, keywords: "mlbb gems diamonds جواهر" },
      { title: "Mobile Legends 3688 Diamonds", desc: "شحن سريع", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 205, keywords: "mlbb gems diamonds جواهر" },
      { title: "Mobile Legends 5532 Diamonds", desc: "شحن سريع", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 260, keywords: "mlbb gems diamonds جواهر" },
      { title: "Mobile Legends 9288 Diamonds", desc: "شحن سريع", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "ml", price: 450, keywords: "mlbb gems diamonds جواهر" },
      // Coming Soon
      { title: "منتجات eFootball", desc: "قريباً...", img: "https://th.bing.com/th/id/OIP.BkchYmD7qXXzS-4QeHy7nwHaHa?cb=iwp2&rs=1&pid=ImgDetMain", category: "efootball", price: null, keywords: "pes بيس coins كوينز" },
      { title: "منتجات Free Fire", desc: "قريباً...", img: "https://img.icons8.com/color/96/000000/free-fire.png", category: "freefire", price: null, keywords: "ff diamants فري فاير" }
    ]
  },

  // --- SUBSCRIPTION DATA ---
  subscription: {
    categories: [
      { key: "all", name: "الكل", img: "https://cdn-icons-png.flaticon.com/512/2989/2989993.png" },
      { key: "netflix", name: "نتفليكس", img: "https://th.bing.com/th/id/OIP.YxJ2xI6kOBSLrIbVoZtPTgHaHa?w=160&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3" },
      { key: "youtube", name: "يوتيوب", img: "https://static.vecteezy.com/system/resources/previews/023/986/480/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" },
      { key: "iptv", name: "IPTV", img: "https://static.vecteezy.com/system/resources/previews/029/898/458/original/iptv-badge-icon-logo-stock-illustration-vector.jpg" },
      { key: "spotify", name: "سبوتيفاي", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
      { key: "canva", name: "كانفا", img: "https://static.canva.com/static/images/favicon.ico" },
      { key: "gemini", name: "Gemini Pro", img: "images/gemini.jpeg" },
      { key: "perplexity", name: "Perplexity AI", img: "images/perplexity.jpeg" },
      { key: "tinder", name: "تيندر", img: "https://th.bing.com/th/id/R.adb9e77504727f2ac14a3a859ed38cbd?rik=zDTb2zG%2bzaaCzQ&pid=ImgRaw&r=0" },
      { key: "microsoft", name: "مايكروسوفت", img: "images/microsoft office.webp" },
      { key: "mcafee", name: "McAfee", img: "images/McAfee.webp" },
      { key: "ccleaner", name: "CCleaner", img: "images/ccleaner.webp" },
      { key: "duolingo", name: "Duolingo", img: "images/duolingo.webp" }
    ],
    products: [
      // Netflix
      { title: "اشتراكات نتفليكس", desc: "قريباً: عروض مميزة", img: "https://th.bing.com/th/id/OIP.YxJ2xI6kOBSLrIbVoZtPTgHaHa?w=160&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3", category: "netflix", price: null, keywords: "netflix movie film افلام" },
      // Spotify
      { title: "سبوتيفاي شهر", desc: "بدون إعلانات - حساب خاص", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", category: "spotify", price: 10, keywords: "music musique اغاني" },
      { title: "سبوتيفاي 3 أشهر", desc: "سعر خاص", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", category: "spotify", price: 25, keywords: "music musique اغاني" },
      { title: "سبوتيفاي 6 أشهر", desc: "نصف سنوي", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", category: "spotify", price: 45, keywords: "music musique اغاني" },
      { title: "سبوتيفاي 12 شهر", desc: "سنة كاملة", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", category: "spotify", price: 90, keywords: "music musique اغاني" },
      // Canva
      { title: "Canva Pro سنة", desc: "تصميم احترافي مفتوح المصدر", img: "https://static.canva.com/static/images/favicon.ico", category: "canva", price: 10, keywords: "design conception تصميم" },
      { title: "Canva Pro 3 سنوات", desc: "عرض التوفير", img: "https://static.canva.com/static/images/favicon.ico", category: "canva", price: 15, keywords: "design conception تصميم" },
      // Gemini
      { title: "Gemini Pro شهر", desc: "ذكاء اصطناعي متقدم", img: "images/gemini.jpeg", category: "gemini", price: 20, keywords: "ai google bot chatgpt" },
      { title: "Gemini Pro 3 أشهر", desc: "عرض ربع سنوي", img: "images/gemini.jpeg", category: "gemini", price: 35, keywords: "ai google bot chatgpt" },
      { title: "Gemini Pro 6 أشهر", desc: "عرض نصف سنوي", img: "images/gemini.jpeg", category: "gemini", price: 48, keywords: "ai google bot chatgpt" },
      { title: "Gemini Pro 12 شهر", desc: "أفضل قيمة", img: "images/gemini.jpeg", category: "gemini", price: 69, keywords: "ai google bot chatgpt" },
      // Perplexity
      { title: "Perplexity AI Pro 12 شهر", desc: "بحث متطور + GPT-4 & Claude", img: "images/perplexity.jpeg", category: "perplexity", price: 69, keywords: "ai research chatgpt gpt4" },
      // IPTV
      { title: "IPTV 1 شهر", desc: "قنوات عالمية ورياضية", img: "https://static.vecteezy.com/system/resources/previews/029/898/458/original/iptv-badge-icon-logo-stock-illustration-vector.jpg", category: "iptv", price: 15, keywords: "tv match sport كورة تلفزة" },
      { title: "IPTV 6 أشهر", desc: "قنوات عالمية ورياضية", img: "https://static.vecteezy.com/system/resources/previews/029/898/458/original/iptv-badge-icon-logo-stock-illustration-vector.jpg", category: "iptv", price: 65, keywords: "tv match sport كورة تلفزة" },
      { title: "IPTV 12 شهر", desc: "قنوات عالمية ورياضية", img: "https://static.vecteezy.com/system/resources/previews/029/898/458/original/iptv-badge-icon-logo-stock-illustration-vector.jpg", category: "iptv", price: 100, keywords: "tv match sport كورة تلفزة" },
      // Tinder
      { title: "Tinder Plus 12 شهر", desc: "عرض محدود", img: "https://th.bing.com/th/id/R.adb9e77504727f2ac14a3a859ed38cbd?rik=zDTb2zG%2bzaaCzQ&pid=ImgRaw&r=0", category: "tinder", price: 65, oldPrice: 100, badge: "Hot", keywords: "gold dating dating" },
      // YouTube
      { title: "يوتيوب شهر", desc: "بريميوم بدون إعلانات", img: "https://static.vecteezy.com/system/resources/previews/023/986/480/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png", category: "youtube", price: 5, badge: "Promo", keywords: "premium video video" },
      // Microsoft & Others
      { title: "Office 365 Personal 12 شهر", desc: "سنة كاملة", img: "images/microsoft office.webp", category: "microsoft", price: 10, badge: "Hot", keywords: "word excel powerpoint windows" },
      { title: "McAfee AntiVirus 12 شهر", desc: "حماية شاملة", img: "images/McAfee.webp", category: "mcafee", price: 25, badge: "Hot", keywords: "security protection virus" },
      { title: "CCleaner Pro 12 شهر", desc: "تنظيف وتسريع الجهاز", img: "images/CCLEANER.webp", category: "ccleaner", price: 15, badge: "Promo", keywords: "cleaner speed pc" },
      { title: "Duolingo Plus شهر", desc: "تعلم اللغات", img: "images/duolingo.webp", category: "duolingo", price: 13, badge: "Promo", keywords: "language english french learning" }
    ]
  },

  // --- PRODUCTS DATA ---
  products: {
    categories: [
      { key: "all", name: "الكل", img: "https://cdn-icons-png.flaticon.com/512/869/869636.png" },
      { key: "necklaces", name: "سلاسل وإكسسوارات", img: "images/44.jpg" },
      { key: "instagram", name: "انستجرام", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
      { key: "tiktok", name: "تيك توك", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png" }
    ],
    products: [
      // Necklaces
      { title: "سلسلة ستانلس ستيل 1", desc: "موديل عصري", img: "images/1.jpg", category: "necklaces", price: 20, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 2", desc: "موديل عصري", img: "images/2.jpg", category: "necklaces", price: 20, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 3", desc: "موديل عصري", img: "images/3.jpg", category: "necklaces", price: 20, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 4", desc: "موديل عصري", img: "images/4.jpg", category: "necklaces", price: 20, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 5", desc: "موديل عصري", img: "images/5.jpg", category: "necklaces", price: 20, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 6", desc: "موديل عصري", img: "images/6.jpg", category: "necklaces", price: 20, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 7", desc: "موديل عصري", img: "images/7.jpg", category: "necklaces", price: 20, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 8", desc: "موديل فاخر", img: "images/33.jpg", category: "necklaces", price: 30, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 9", desc: "موديل فاخر", img: "images/44.jpg", category: "necklaces", price: 30, keywords: "accessory jewelry silver اكسسوارات" },
      { title: "سلسلة ستانلس ستيل 10", desc: "موديل فاخر", img: "images/55.jpg", category: "necklaces", price: 30, keywords: "accessory jewelry silver اكسسوارات" },
      // Instagram
      { title: "متابعين إنستجرام (1K)", desc: "متابعين حقيقيين", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 13, badge: "Hot", keywords: "insta followers abonné انستا" },
      { title: "متابعين إنستجرام (5K)", desc: "متابعين حقيقيين", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 55, keywords: "insta followers abonné انستا" },
      { title: "متابعين إنستجرام (10K)", desc: "متابعين حقيقيين", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 90, keywords: "insta followers abonné انستا" },
      { title: "لايكات إنستجرام (1K)", desc: "لايكات سريعة", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 3, keywords: "insta likes j'aime انستا" },
      { title: "لايكات إنستجرام (2K)", desc: "لايكات سريعة", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 5, keywords: "insta likes j'aime انستا" },
      { title: "لايكات إنستجرام (5K)", desc: "لايكات سريعة", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 10, keywords: "insta likes j'aime انستا" },
      { title: "لايكات إنستجرام (10K)", desc: "لايكات سريعة", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 15, keywords: "insta likes j'aime انستا" },
      // TikTok
      { title: "متابعين تيك توك (1K)", desc: "حقيقي وآمن", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 12, badge: "Hot", keywords: "followers abonné tik tok" },
      { title: "لايكات تيك توك (1K)", desc: "وصول سريع", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 5, keywords: "likes j'aime tik tok" },
      { title: "مشاهدات تيك توك (1K)", desc: "مشاهدات فورية", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 0.5, badge: "New", keywords: "views vues tik tok" },
      { title: "مشاهدات تيك توك (10K)", desc: "مشاهدات فورية", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 4.5, keywords: "views vues tik tok" },
      { title: "مشاهدات تيك توك (100K)", desc: "دعم قوي للحساب", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 15, keywords: "views vues tik tok" }
    ]
  }
};