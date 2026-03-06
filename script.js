// =========================
// ELEMENTOS BASE
// =========================
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__menu a");
const yearEl = document.getElementById("year");
const preorderForm = document.getElementById("preorderForm");
const whatsappBtn = document.getElementById("whatsappBtn");

// Cambia este número por el de Dee
// Formato internacional, sin espacios ni símbolos
const WHATSAPP_NUMBER = "17875551234";

// =========================
// NAV MÓVIL
// =========================
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================
// AÑO DINÁMICO
// =========================
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// =========================
// WHATSAPP
// =========================
function buildOrderMessage(data) {
  return `¡Hola Dee! Quiero hacer una pre-orden:
• Nombre: ${data.nombre}
• Contacto: ${data.contacto}
• Pedido: ${data.pedido}
• Fecha: ${data.fecha}
• Zona/Meet-up: ${data.zona}

¿Disponibilidad y precio? Gracias 🙏`;
}

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener");
}

// =========================
// FORMULARIO DE PRE-ORDEN
// =========================
if (preorderForm) {
  preorderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(preorderForm);
    const data = Object.fromEntries(formData.entries());
    const message = buildOrderMessage(data);

    openWhatsApp(message);
  });
}

// =========================
// BOTÓN DE WHATSAPP GENERAL
// =========================
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const message =
      "¡Hola Dee! Vengo del website y quiero preguntar por el menú, disponibilidad o fechas de meet-up.";

    openWhatsApp(message);
  });
}