const contactForm = document.querySelector('#contact-form');
if (contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    alert('Danke! Wir melden uns bald.\n'+JSON.stringify(data, null, 2));
    contactForm.reset();
  })
}