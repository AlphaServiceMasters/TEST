// Categories for this zone
const categories = [
  { key: "all", name: "الكل", img: "https://th.bing.com/th/id/OIP.6JO-DS0G8-iUeQ4JXZs8LQAAAA?w=209&h=209&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3" },
  { key: "necklaces", name: "سلاسل وإكسسوارات", img: "images/44.jpg" },
  { key: "instagram", name: "انستجرام (متابعين/لايكات)", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
  { key: "tiktok", name: "تيك توك (مشاهدات/لايكات/متابعين)", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png" }
];

// Products for this zone
const products = [
  // 20 DT necklaces
  { title: "سلسلة ستانلس ستيل رقم 1", desc: "سلسلة عصرية بسعر 20 د.ت", img: "images/1.jpg", category: "necklaces", price: 20 },
  { title: "سلسلة ستانلس ستيل رقم 2", desc: "سلسلة عصرية بسعر 20 د.ت", img: "images/2.jpg", category: "necklaces", price: 20 },
  { title: "سلسلة ستانلس ستيل رقم 3", desc: "سلسلة عصرية بسعر 20 د.ت", img: "images/3.jpg", category: "necklaces", price: 20 },
  { title: "سلسلة ستانلس ستيل رقم 4", desc: "سلسلة عصرية بسعر 20 د.ت", img: "images/4.jpg", category: "necklaces", price: 20 },
  { title: "سلسلة ستانلس ستيل رقم 5", desc: "سلسلة عصرية بسعر 20 د.ت", img: "images/5.jpg", category: "necklaces", price: 20 },
  { title: "سلسلة ستانلس ستيل رقم 6", desc: "سلسلة عصرية بسعر 20 د.ت", img: "images/6.jpg", category: "necklaces", price: 20 },
  { title: "سلسلة ستانلس ستيل رقم 7", desc: "سلسلة عصرية بسعر 20 د.ت", img: "images/7.jpg", category: "necklaces", price: 20 },
  // 30 DT necklaces
  { title: "سلسلة ستانلس ستيل رقم 8", desc: "سلسلة فاخرة بسعر 30 د.ت", img: "images/33.jpg", category: "necklaces", price: 30 },
  { title: "سلسلة ستانلس ستيل رقم 9", desc: "سلسلة فاخرة بسعر 30 د.ت", img: "images/44.jpg", category: "necklaces", price: 30 },
  { title: "10", desc: "سلسلة فاخرة بسعر 30 د.ت", img: "images/55.jpg", category: "necklaces", price: 30 },
  // Instagram Followers
  { title: "متابعين إنستجرام (1K)", desc: "1000 متابع حقيقي لحسابك على إنستجرام بسرعة وأمان.", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 13, badge: "Hot" },
  { title: "متابعين إنستجرام (5K)", desc: "5000 متابع حقيقي لحسابك على إنستجرام بسرعة وأمان.", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 55 },
  { title: "متابعين إنستجرام (10K)", desc: "10000 متابع حقيقي لحسابك على إنستجرام بسرعة وأمان.", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 90 },
  // Instagram Likes
  { title: "لايكات إنستجرام (1K)", desc: "1000 لايك حقيقي لمنشوراتك على إنستجرام.", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 3 },
  { title: "لايكات إنستجرام (2K)", desc: "2000 لايك حقيقي لمنشوراتك على إنستجرام.", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 5 },
  { title: "لايكات إنستجرام (5K)", desc: "5000 لايك حقيقي لمنشوراتك على إنستجرام.", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 10 },
  { title: "لايكات إنستجرام (10K)", desc: "10000 لايك حقيقي لمنشوراتك على إنستجرام.", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", category: "instagram", price: 15 },
  // TikTok Followers
  { title: "متابعين تيك توك (1K)", desc: "1000 متابع حقيقي وآمن لحسابك على تيك توك.", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 12, badge: "Hot" },
  // TikTok Likes
  { title: "لايكات تيك توك (1K)", desc: "1000 إعجاب حقيقي وسريع لفيديوهاتك على تيك توك.", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 5 },
  // TikTok Views
  { title: "مشاهدات تيك توك (1K)", desc: "1000 مشاهدة حقيقية لفيديوهاتك على تيك توك.", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 0.5, badge: "New" },
  { title: "مشاهدات تيك توك (10K)", desc: "10000 مشاهدة حقيقية لفيديوهاتك على تيك توك.", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 4.5 },
  { title: "مشاهدات تيك توك (100K)", desc: "100000 مشاهدة حقيقية لفيديوهاتك على تيك توك.", img: "https://cdn-icons-png.flaticon.com/512/3046/3046125.png", category: "tiktok", price: 15 }
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
  filtered.forEach((prod, i) => {
    const msg = encodeURIComponent(`مرحبًا، أود طلب منتج: ${prod.title}`);
    const waLink = `https://wa.me/21654337890?text=${msg}`;
    productsList.innerHTML += `
      <div class="product-row">
        <img class="product-img" src="${prod.img}" alt="${prod.title}">
        <div class="product-info">
          <div class="product-title">
            ${prod.badge ? `<span class="badge ${prod.badge.toLowerCase()}">${prod.badge}</span>` : ''}
            ${prod.title}
          </div>
          <div class="product-desc">${prod.desc}</div>
          <button class="product-img-btn" onclick="showImgPopup('${encodeURIComponent(prod.img)}','${encodeURIComponent(prod.title)}')">عرض الصورة</button>
        </div>
        <div class="product-price">${prod.price} د.ت</div>
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

// Popup logic
function showImgPopup(imgUrl, title) {
  imgUrl = decodeURIComponent(imgUrl);
  title = decodeURIComponent(title);
  closeImgPopup(); // Ensure any previous popup is closed
  document.getElementById('imgPopup').innerHTML = `
    <div class="img-popup-bg" onclick="closeImgPopup(event)">
      <div class="img-popup-content" onclick="event.stopPropagation()">
        <button class="close-btn" onclick="closeImgPopup(event)" title="إغلاق">&times;</button>
        <img src="${imgUrl}" alt="${title}">
        <div style="color:#fff;font-weight:700;font-size:1.1em">${title}</div>
      </div>
    </div>
  `;
  document.getElementById('imgPopup').style.display = 'block';
  document.addEventListener('keydown', escListener);
}
function closeImgPopup(e) {
  document.getElementById('imgPopup').style.display = 'none';
  document.getElementById('imgPopup').innerHTML = '';
  document.removeEventListener('keydown', escListener);
}
function escListener(e) {
  if (e.key === "Escape") closeImgPopup();
}

// Initial render
renderProducts('all');
