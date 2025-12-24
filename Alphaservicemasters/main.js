/* =========================================
   1. GLOBAL UI LOGIC
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // WA Button Logic
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.wa-order-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.wa-order-btn');
      const product = btn.getAttribute('data-product');
      const phone = '21654337890'; 
      const msg = encodeURIComponent(`مرحبًا، أود طلب: ${product}`);
      window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    }
  });

  // Load Data
  const pageId = document.body.id;
  if (typeof database !== 'undefined') {
    if (pageId === 'gaming-page') initZone(database.gaming);
    else if (pageId === 'subscription-page') initZone(database.subscription);
    else if (pageId === 'product-page') initZone(database.products);
  }
});

/* =========================================
   2. HELPER: SMART SEARCH NORMALIZER
   ========================================= */
function normalizeText(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[أإآا]/g, "ا")  // وحد الألف
    .replace(/ة/g, "ه")       // التاء المربوطة
    .replace(/ى/g, "ي")       // الياء
    .replace(/[\u064B-\u065F]/g, "") // نحي التشكيل
    .trim();
}

/* =========================================
   3. POPUP LOGIC
   ========================================= */
function showPopup(imgSrc, title) {
  const existing = document.getElementById('activePopup');
  if (existing) existing.remove();

  const popupHtml = `
    <div class="popup-overlay" id="activePopup" onclick="closePopup(event)" style="display:flex">
      <div class="popup-content" onclick="event.stopPropagation()">
        <button class="close-popup" onclick="closePopup()">&times;</button>
        <img src="${imgSrc}" alt="${title}">
        <h3 style="color:#fff; margin-top:10px">${title}</h3>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', popupHtml);
}

function closePopup() {
  const popup = document.getElementById('activePopup');
  if (popup) popup.remove();
}

/* =========================================
   4. RENDERING ENGINE (SMART SEARCH UPDATED)
   ========================================= */
function initZone(data) {
  let currentCat = 'all';
  const catGrid = document.getElementById('categoriesGrid');
  const prodList = document.getElementById('productsList');
  const searchInput = document.getElementById('searchInput');

  // A. Render Categories
  if (catGrid) {
    catGrid.innerHTML = data.categories.map((cat, idx) => `
      <div class="category-card ${idx === 0 ? 'active' : ''}" data-key="${cat.key}">
        <img src="${cat.img}" alt="${cat.name}">
        <div>${cat.name}</div>
      </div>
    `).join('');

    catGrid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', function() {
        catGrid.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        currentCat = this.dataset.key;
        renderProducts();
      });
    });
  }

  // B. Render Products
  function renderProducts() {
    // Clean user input
    const rawSearch = searchInput ? searchInput.value : '';
    const normSearch = normalizeText(rawSearch);

    let filtered = currentCat === 'all' ? data.products : data.products.filter(p => p.category === currentCat);
    
    if (normSearch) {
      filtered = filtered.filter(p => {
        // Combine all searchable text
        const content = `${p.title} ${p.desc} ${p.keywords || ''}`;
        const normContent = normalizeText(content);
        return normContent.includes(normSearch);
      });
    }

    if (filtered.length === 0) {
      prodList.innerHTML = '<div style="text-align:center; padding:40px; color:#aaa;"><i class="fas fa-search" style="font-size:2em; margin-bottom:10px;"></i><p>لا توجد منتجات مطابقة...</p></div>';
      return;
    }

    prodList.innerHTML = filtered.map(p => {
      if (p.price === null) {
        return `
          <div class="product-row" style="opacity:0.6; filter:grayscale(0.8);">
            <div class="product-thumb-wrapper" style="cursor:default">
              <img src="${p.img}" alt="${p.title}">
              <div class="thumb-overlay"><i class="fas fa-lock"></i></div>
            </div>
            <div class="product-info">
              <div class="product-title">${p.title}</div>
              <div class="product-desc">قريباً...</div>
            </div>
            <div class="product-actions">
               <button class="btn-order" style="background:#444; box-shadow:none; cursor:not-allowed">غير متوفر</button>
            </div>
          </div>
        `;
      }

      const priceDisplay = p.oldPrice 
        ? `<span style="text-decoration:line-through; color:#64748b; font-size:0.7em; margin-left:5px">${p.oldPrice}</span>${p.price} د.ت`
        : `${p.price} <span style="font-size:0.6em; font-weight:400">د.ت</span>`;

      const waMsg = encodeURIComponent(`مرحبًا، أود طلب: ${p.title}`);
      const waLink = `https://wa.me/21654337890?text=${waMsg}`;

      return `
        <div class="product-row reveal">
          <div class="product-thumb-wrapper" onclick="showPopup('${p.img}', '${p.title}')">
            <img src="${p.img}" alt="${p.title}">
            <div class="thumb-overlay"><i class="fas fa-eye"></i></div>
          </div>
          <div class="product-info">
            <div class="product-title">
              ${p.title}
              ${p.badge ? `<span class="badge ${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
            </div>
            <div class="product-desc">${p.desc}</div>
          </div>
          <div class="product-actions">
            <div class="product-price">${priceDisplay}</div>
            <div style="display:flex; gap:10px; align-items:center;">
              <button class="btn-icon-only" onclick="showPopup('${p.img}', '${p.title}')" title="عرض الصورة">
                <i class="fas fa-expand"></i>
              </button>
              <a href="${waLink}" target="_blank" class="btn-order wa-order-btn" data-product="${p.title}">
                <span>اطلب الآن</span>
                <i class="fas fa-shopping-cart" style="font-size:0.9em"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    setTimeout(reveal, 100); 
  }

  if (searchInput) {
    searchInput.addEventListener('input', renderProducts);
  }

  renderProducts();
}

/* =========================================
   5. SCROLL REVEAL ANIMATION
   ========================================= */
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.deal-card, .zone-item, .product-row, .welcome-section');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
      if (!reveals[i].classList.contains('reveal')) reveals[i].classList.add('reveal');
    }
  }
}
reveal();