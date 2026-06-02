const CONFIG = {
  businessName: "EightDesign Web",

  // WhatsApp sem espaços e sem o sinal +
  whatsappNumber: "351969247246",

  // Link completo do Instagram
  instagramUrl: "https://www.instagram.com/eliakim_dev?igsh=ZmoyeHl2cTRseGQx",

  // Email colocado exatamente como você enviou
  email: "rafaelsantos2244@outlool.com"
};

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const whatsappBtn = document.getElementById("whatsappBtn");
const year = document.getElementById("year");

const contactWhatsapp = document.getElementById("contactWhatsapp");
const contactInstagram = document.getElementById("contactInstagram");
const scheduleDateInput = document.getElementById("scheduleDate");

year.textContent = new Date().getFullYear();

const today = new Date().toISOString().split("T")[0];
scheduleDateInput.setAttribute("min", today);

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }
});

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

function createWhatsappLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

const defaultWhatsappMessage =
  `Olá, vim pelo site da ${CONFIG.businessName}. Quero pedir um orçamento.`;

whatsappBtn.href = createWhatsappLink(defaultWhatsappMessage);
contactWhatsapp.href = createWhatsappLink(defaultWhatsappMessage);
contactInstagram.href = CONFIG.instagramUrl;

function showMessage(type, text) {
  formMessage.className = `form-message ${type}`;
  formMessage.textContent = text;
}

function formatDate(dateValue) {
  const [year, month, day] = dateValue.split("-");
  return `${day}/${month}/${year}`;
}

function validateForm(data) {
  if (data.name.trim().length < 2) {
    return "Por favor, escreva o seu nome.";
  }

  if (data.phone.trim().length < 8) {
    return "Por favor, escreva um telemóvel válido.";
  }

  if (data.business.trim().length < 2) {
    return "Por favor, informe o tipo de negócio.";
  }

  if (data.service === "") {
    return "Por favor, escolha o serviço desejado.";
  }

  if (data.scheduleDate === "") {
    return "Por favor, escolha uma data para o agendamento.";
  }

  if (data.scheduleTime === "") {
    return "Por favor, escolha um horário para o agendamento.";
  }

  if (data.message.trim().length < 10) {
    return "Por favor, escreva uma mensagem com pelo menos 10 caracteres.";
  }

  return null;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    business: document.getElementById("business").value,
    service: document.getElementById("service").value,
    scheduleDate: document.getElementById("scheduleDate").value,
    scheduleTime: document.getElementById("scheduleTime").value,
    message: document.getElementById("message").value
  };

  const error = validateForm(data);

  if (error) {
    showMessage("error", error);
    return;
  }

  const formattedDate = formatDate(data.scheduleDate);

  const whatsappMessage =
    `Olá, sou ${data.name}.\n\n` +
    `Vim pelo site da ${CONFIG.businessName}.\n\n` +
    `Quero agendar um serviço.\n\n` +
    `Serviço desejado: ${data.service}\n` +
    `Tipo de negócio: ${data.business}\n` +
    `Telemóvel: ${data.phone}\n` +
    `Data preferida: ${formattedDate}\n` +
    `Horário preferido: ${data.scheduleTime}\n\n` +
    `Mensagem: ${data.message}`;

  showMessage(
    "success",
    "Agendamento preparado com sucesso. O WhatsApp será aberto para enviar a mensagem."
  );

  setTimeout(() => {
    window.open(createWhatsappLink(whatsappMessage), "_blank");
    contactForm.reset();
  }, 800);
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});