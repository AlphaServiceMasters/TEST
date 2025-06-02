// Subscription categories with images
const categories = [
  { key: "all", name: "الكل", img: "https://th.bing.com/th/id/OIP.6JO-DS0G8-iUeQ4JXZs8LQAAAA?w=209&h=209&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3" },
  { key: "netflix", name: "نتفليكس", img: "https://th.bing.com/th/id/OIP.YxJ2xI6kOBSLrIbVoZtPTgHaHa?w=160&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3" },
  { key: "youtube", name: "يوتيوب", img: "https://static.vecteezy.com/system/resources/previews/023/986/480/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" },
  { key: "iptv", name: "IPTV", img: "https://static.vecteezy.com/system/resources/previews/029/898/458/original/iptv-badge-icon-logo-stock-illustration-vector.jpg" },
  { key: "spotify", name: "سبوتيفاي", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { key: "canva", name: "كانفا", img: "https://static.canva.com/static/images/favicon.ico" },
  { key: "gemini", name: "Gemini Pro", img: "images/gemini.jpeg" }, // Use local Gemini image
  { key: "perplexity", name: "Perplexity AI", img: "images/perplexity.jpeg" }, // Use local Perplexity image
  { key: "tinder", name: "تيندر", img: "https://th.bing.com/th/id/R.adb9e77504727f2ac14a3a859ed38cbd?rik=zDTb2zG%2bzaaCzQ&pid=ImgRaw&r=0" },
  { key: "microsoft", name: "مايكروسوفت", img: "images/microsoft office.webp" }, // Use correct local .webp image for Microsoft
  { key: "mcafee", name: "McAfee", img: "images/McAfee.webp" },
  { key: "ccleaner", name: "CCleaner", img: "images/ccleaner.webp" },
  { key: "duolingo", name: "Duolingo", img: "images/duolingo.webp" } // Add Duolingo category
];

// Subscription products
const products = [
  // Spotify
  { title: "سبوتيفاي شهر", desc: "استمع لأغانيك المفضلة بدون إعلانات لمدة شهر.", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", category: "spotify", price: 10 },
  { title: "سبوتيفاي 3 أشهر", desc: "اشتراك سبوتيفاي لمدة 3 أشهر بسعر خاص.", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", category: "spotify", price: 25 },
  { title: "سبوتيفاي 6 أشهر", desc: "اشتراك سبوتيفاي لمدة 6 أشهر.", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", category: "spotify", price: 45 },
  { title: "سبوتيفاي 12 شهر", desc: "اشتراك سبوتيفاي لمدة سنة كاملة.", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", category: "spotify", price: 90 },
  // Canva
  { title: "Canva Pro سنة", desc: "اشترك في كانفا برو لسنة كاملة بسعر 10 د.ت فقط.", img: "https://static.canva.com/static/images/favicon.ico", category: "canva", price: 10 },
  { title: "Canva Pro 3 سنوات", desc: "اشترك في كانفا برو لمدة 3 سنوات بسعر 15 د.ت فقط.", img: "https://static.canva.com/static/images/favicon.ico", category: "canva", price: 15 },
  // Gemini Pro
  { title: "Gemini Pro شهر", desc: "اشترك في Google Gemini Pro لمدة شهر واحد وتمتع بإمكانيات الذكاء الاصطناعي المتقدمة.", img: "images/gemini.jpeg", category: "gemini", price: 20 },
  { title: "Gemini Pro 3 أشهر", desc: "اشترك في Google Gemini Pro لمدة 3 أشهر بسعر خاص.", img: "images/gemini.jpeg", category: "gemini", price: 35 },
  { title: "Gemini Pro 6 أشهر", desc: "اشترك في Google Gemini Pro لمدة 6 أشهر.", img: "images/gemini.jpeg", category: "gemini", price: 48 },
  { title: "Gemini Pro 12 شهر", desc: "اشترك في Google Gemini Pro لمدة سنة كاملة.", img: "images/gemini.jpeg", category: "gemini", price: 69 },
  // Perplexity AI
  { title: "Perplexity AI Pro 12 شهر", desc: "اشترك في Perplexity Pro وتمتع بإمكانيات الذكاء الاصطناعي المتقدمة لمدة سنة كاملة: بحث متطور، نماذج GPT-4 وClaude، رفع ملفات، دعم خاص، وأكثر.", img: "images/perplexity.jpeg", category: "perplexity", price: 69 },
  // IPTV
  { title: "IPTV 1 شهر", desc: "اشتراك IPTV لمدة شهر واحد مع قنوات عالمية ورياضية بجودة عالية.", img: "https://static.vecteezy.com/system/resources/previews/029/898/458/original/iptv-badge-icon-logo-stock-illustration-vector.jpg", category: "iptv", price: 15 },
  { title: "IPTV 6 أشهر", desc: "اشتراك IPTV لمدة 6 أشهر مع قنوات عالمية ورياضية بجودة عالية.", img: "https://static.vecteezy.com/system/resources/previews/029/898/458/original/iptv-badge-icon-logo-stock-illustration-vector.jpg", category: "iptv", price: 65 },
  { title: "IPTV 12 شهر", desc: "اشتراك IPTV لمدة سنة كاملة مع قنوات عالمية ورياضية بجودة عالية.", img: "https://static.vecteezy.com/system/resources/previews/029/898/458/original/iptv-badge-icon-logo-stock-illustration-vector.jpg", category: "iptv", price: 100 },
  // Tinder
  { title: "Tinder Plus 12 شهر", desc: "عرض محدود: اشتراك Tinder Plus لمدة 12 شهرًا بسعر مخفض من 100 د.ت إلى 65 د.ت فقط.", img: "https://th.bing.com/th/id/R.adb9e77504727f2ac14a3a859ed38cbd?rik=zDTb2zG%2bzaaCzQ&pid=ImgRaw&r=0", category: "tinder", price: 65, badge: "Hot" },
  // YouTube Promo
  { title: "يوتيوب شهر", desc: "عرض خاص: اشتراك يوتيوب بريميوم لمدة شهر.", img: "https://static.vecteezy.com/system/resources/previews/023/986/480/original/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png", category: "youtube", price: 5, badge: "Promo" },
  // Microsoft Office 365 Personal Special Offer
  { title: "Office 365 Personal 12 شهر", desc: "عرض خاص: اشتراك Office 365 Personal لمدة سنة كاملة بسعر 10 د.ت فقط.", img: "images/microsoft office.webp", category: "microsoft", price: 10, badge: "Hot" },
  // McAfee AntiVirus Special Offer
  { title: "McAfee AntiVirus 12 شهر", desc: "عرض خاص: اشتراك مكافي AntiVirus لمدة سنة كاملة بسعر 25 د.ت فقط.", img: "images/McAfee.webp", category: "mcafee", price: 25, badge: "Hot" },
  // CCleaner Pro Special Promo
  { title: "CCleaner Pro 12 شهر", desc: "عرض خاص: اشتراك CCleaner Pro لمدة سنة كاملة بسعر 15 د.ت فقط.", img: "images/ccleaner.webp", category: "ccleaner", price: 15, badge: "Promo" },
  // Duolingo Plus Special Offer
  { title: "Duolingo Plus شهر", desc: "عرض خاص: اشتراك Duolingo Plus لمدة شهر بسعر 13 د.ت فقط.", img: "images/duolingo.webp", category: "duolingo", price: 13, badge: "Promo" }
];

let currentCategory = 'all';
let currentSearch = '';

// Render categories
const categoriesGrid = document.getElementById('categoriesGrid');
categories.forEach((cat, idx) => {
  categoriesGrid.innerHTML += `
    <div class="category-card${idx === 0 ? ' active' : ''}" data-cat="${cat.key}">
      <img src="${cat.img}" alt="${cat.name}">
      <div class="category-title">${cat.name}</div>
    </div>
  `;
});

// Render products
function renderProducts(catKey, searchTerm = '') {
  const productsList = document.getElementById('productsList');
  productsList.innerHTML = '';
  // Netflix: show coming soon, no products
  if (catKey === 'netflix') {
    productsList.innerHTML = `<div class="coming-soon">قريباً: عروض اشتراكات نتفليكس المميزة</div>`;
    return;
  }
  let filtered = catKey === 'all' ? products : products.filter(p => p.category === catKey);
  if (searchTerm) {
    filtered = filtered.filter(prod =>
      prod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (filtered.length === 0) {
    productsList.innerHTML = '<p style="text-align:center;color:#888">لا توجد منتجات في هذا التصنيف.</p>';
    return;
  }
  filtered.forEach(prod => {
    const msg = encodeURIComponent(`مرحبًا، أود طلب اشتراك: ${prod.title}`);
    const waLink = `https://wa.me/21654337890?text=${msg}`;
    // Special case for Tinder: show old price as strikethrough
    let priceHtml = '';
    if (prod.category === 'tinder' && prod.price === 65) {
      priceHtml = `<span style="color:#888;text-decoration:line-through;font-size:0.95em;margin-left:8px;">100 د.ت</span><span class="product-price">${prod.price} د.ت</span>`;
    } else {
      priceHtml = `<span class="product-price">${prod.price} د.ت</span>`;
    }
    productsList.innerHTML += `
      <div class="product-row">
        <img class="product-img" src="${prod.img}" alt="${prod.title}">
        <div class="product-info">
          <div class="product-title">
            ${prod.badge ? `<span class="badge ${prod.badge.toLowerCase()}">${prod.badge}</span>` : ''}
            ${prod.title}
          </div>
          <div class="product-desc">${prod.desc}</div>
        </div>
        ${priceHtml}
        <a class="product-btn" href="${waLink}" target="_blank" rel="noopener">اطلب الآن</a>
      </div>
    `;
  });
}

// Handle category click
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    currentCategory = this.getAttribute('data-cat');
    renderProducts(currentCategory, currentSearch);
  });
});

// Handle search
document.getElementById('searchInput').addEventListener('input', function() {
  currentSearch = this.value;
  renderProducts(currentCategory, currentSearch);
});

// Initial render
renderProducts('all');
