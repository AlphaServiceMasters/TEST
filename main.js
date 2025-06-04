// WhatsApp order button handler
document.querySelectorAll('.deal-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    var product = btn.getAttribute('data-product');
    var msg = encodeURIComponent('مرحبًا، أود طلب عرض: ' + product);
    var phone = '21654337890';
    var url = 'https://wa.me/' + phone + '?text=' + msg;
    window.open(url, '_blank');
  });
});
