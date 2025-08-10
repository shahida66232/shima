// Reveal animations
function revealAll(){
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    setTimeout(()=>el.classList.add('show'), 120 + i*80)
  })
}
revealAll();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  })
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim() || 'Hello';
  const message = document.getElementById('message').value.trim();
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href = mailto;
  document.getElementById('formStatus').textContent = 'Opening email client...';
});

document.getElementById('year').textContent = new Date().getFullYear();

function setName(name){
  document.getElementById('yourName').textContent = name;
  document.getElementById('heroName').textContent = name.split(' ')[0];
  document.getElementById('sideName').textContent = name.split(' ')[0];
}
setName('Shahida Shahab Shima');
