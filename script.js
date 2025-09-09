// Navegación móvil
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp prellenado + envío de pre-orden
const preorderForm = document.getElementById('preorderForm');
const waBtn = document.getElementById('whatsappBtn');

// Cambia este número por el de Dee (formato internacional, sin espacios ni guiones)
const WHATSAPP_NUMBER = '17875551234';

function buildOrderMessage(data){
  return `¡Hola Dee! Quiero hacer una pre-orden:
• Nombre: ${data.nombre}
• Contacto: ${data.contacto}
• Pedido: ${data.pedido}
• Fecha: ${data.fecha}
• Zona/Meet-up: ${data.zona}

¿Disponibilidad y precio? Gracias 🙏`;
}

function openWhatsApp(message){
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, '_blank', 'noopener');
}

if (preorderForm){
  preorderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(preorderForm).entries());
    const msg = buildOrderMessage(data);
    openWhatsApp(msg);
  });
}

if (waBtn){
  waBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = `¡Hola Dee! Vengo del website y quiero preguntar por el menú/fechas de meet-up.`;
    openWhatsApp(msg);
  });
}

// Cierre del menú al hacer clic en un enlace (mejor UX)
document.querySelectorAll('.nav__menu a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
