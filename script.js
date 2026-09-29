
document.getElementById('year').textContent = new Date().getFullYear();
const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
btn?.addEventListener('click',()=>nav.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
