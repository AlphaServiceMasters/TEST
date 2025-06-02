// Only these categories
const categories = [
  { key: "all", name: "الكل", img: "https://th.bing.com/th/id/OIP.6JO-DS0G8-iUeQ4JXZs8LQAAAA?w=209&h=209&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3" },
  { key: "ml", name: "Mobile Legends", img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain" },
  { key: "efootball", name: "eFootball", img: "https://th.bing.com/th/id/OIP.BkchYmD7qXXzS-4QeHy7nwHaHa?cb=iwp2&rs=1&pid=ImgDetMain" },
  { key: "freefire", name: "Free Fire", img: "https://img.icons8.com/color/96/000000/free-fire.png" }
];

// Example products for these categories
const products = [
  // Mobile Legends Weekly Pass & Diamonds
  {
    title: "Mobile Legends Weekly Diamond Pass",
    desc: "بطاقة أسبوعية (Weekly Pass) للعبة موبايل ليجندز.",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 8,
    badge: "Hot"
  },
  {
    title: "Mobile Legends 5 Diamonds",
    desc: "5 دايموندز (شحن سريع).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 2
  },
  {
    title: "Mobile Legends 55 Diamonds",
    desc: "55 دايموندز (شحن سريع).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 5
  },
  {
    title: "Mobile Legends 300 Diamonds (مرة واحدة فقط)",
    desc: "300 دايموندز (عرض لمرة واحدة فقط لكل حساب).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 21
  },
  {
    title: "Mobile Legends 500 Diamonds (مرة واحدة فقط)",
    desc: "500 دايموندز (عرض لمرة واحدة فقط لكل حساب).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 35
  },
  {
    title: "Mobile Legends 1000 Diamonds (مرة واحدة فقط)",
    desc: "1000 دايموندز (عرض لمرة واحدة فقط لكل حساب).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 69
  },
  {
    title: "Mobile Legends 2195 Diamonds",
    desc: "2195 دايموندز (شحن سريع).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 135
  },
  {
    title: "Mobile Legends 3688 Diamonds",
    desc: "3688 دايموندز (شحن سريع).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 205
  },
  {
    title: "Mobile Legends 5532 Diamonds",
    desc: "5532 دايموندز (شحن سريع).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 260
  },
  {
    title: "Mobile Legends 9288 Diamonds",
    desc: "9288 دايموندز (شحن سريع).",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: 450
  },
  // Coming soon for all other categories
  {
    title: "منتجات Mobile Legends أخرى",
    desc: "قريباً...",
    img: "https://th.bing.com/th/id/OIP.6f5Jko1awYpQWKByXjVEZgHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "ml",
    price: null
  },
  {
    title: "منتجات eFootball",
    desc: "قريباً...",
    img: "https://th.bing.com/th/id/OIP.BkchYmD7qXXzS-4QeHy7nwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    category: "efootball",
    price: null
  },
  {
    title: "منتجات Free Fire",
    desc: "قريباً...",
    img: "https://img.icons8.com/color/96/000000/free-fire.png",
    category: "freefire",
    price: null
  }
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
  filtered.forEach(prod => {
    // WhatsApp order link
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
        </div>
        <div class="product-price">${prod.price !== null ? prod.price + " د.ت" : ""}</div>
        ${prod.price !== null ? `<a class="product-btn" href="${waLink}" target="_blank" rel="noopener">اطلب الآن</a>` : `<span class="product-btn" style="background:#888;cursor:not-allowed;">قريباً</span>`}
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
