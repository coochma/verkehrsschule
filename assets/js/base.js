// Mobile menu toggle (scoped)
const headerEl = document.querySelector('header.header');
const toggle   = document.querySelector('header.header .mobile-toggle');
const links    = document.querySelector('header.header .nav__links');
if (toggle && links && headerEl) {
  toggle.addEventListener('click', () => { links.classList.toggle('nav-open'); });
  document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && !toggle.contains(e.target)) { links.classList.remove('nav-open'); }
  });
}
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
// WhatsApp CTA
function waMessage(){
  const text = encodeURIComponent('Hallo! Ich möchte mich für Fahrstunden anmelden.');
  window.open('https://wa.me/493012345678?text='+text, '_blank');
}

document.querySelectorAll('header.header .nav__links a[href]').forEach(a=>{
  const u = new URL(a.href, location.origin);
  if (u.pathname === location.pathname) a.classList.add('is-active');
});
