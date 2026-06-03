// ==============================
// CONFIGURAÇÕES PRINCIPAIS
// ==============================

const CONFIG = {
  businessName: "EightDesign Web",

  // WhatsApp sem espaços e sem o sinal +
  whatsappNumber: "351969247246",

  // Link completo do Instagram
  instagramUrl: "https://www.instagram.com/eliakim_dev?igsh=ZmoyeHl2cTRseGQx",

  // Email colocado exatamente como você enviou
  email: "rafaelsantos2244@outlook.com"
};


// ==============================
// SELETORES DO SITE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const whatsappBtn = document.getElementById("whatsappBtn");
const year = document.getElementById("year");

const contactWhatsapp = document.getElementById("contactWhatsapp");
const contactInstagram = document.getElementById("contactInstagram");
const scheduleDateInput = document.getElementById("scheduleDate");


// ==============================
// ANO AUTOMÁTICO NO RODAPÉ
// ==============================

if (year) {
  year.textContent = new Date().getFullYear();
}


// ==============================
// DATA MÍNIMA DO AGENDAMENTO
// ==============================

if (scheduleDateInput) {
  const today = new Date().toISOString().split("T")[0];
  scheduleDateInput.setAttribute("min", today);
}


// ==============================
// MENU RESPONSIVO
// ==============================

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
      menuBtn.textContent = "×";
      menuBtn.setAttribute("aria-label", "Fechar menu");
    } else {
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-label", "Abrir menu");
    }
  });

  const menuLinks = document.querySelectorAll(".nav-links a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-label", "Abrir menu");
    });
  });
}


// ==============================
// FUNÇÃO PARA CRIAR LINK DO WHATSAPP
// ==============================

function createWhatsappLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}


// ==============================
// LINKS DE CONTACTO
// ==============================

const defaultWhatsappMessage =
  `Olá, vim pelo site da ${CONFIG.businessName}. Quero pedir um orçamento.`;

if (whatsappBtn) {
  whatsappBtn.href = createWhatsappLink(defaultWhatsappMessage);
}

if (contactWhatsapp) {
  contactWhatsapp.href = createWhatsappLink(defaultWhatsappMessage);
}

if (contactInstagram) {
  contactInstagram.href = CONFIG.instagramUrl;
}


// ==============================
// MENSAGENS DO FORMULÁRIO
// ==============================

function showMessage(type, text) {
  if (!formMessage) return;

  formMessage.className = `form-message ${type}`;
  formMessage.textContent = text;
}

function clearMessage() {
  if (!formMessage) return;

  formMessage.className = "form-message";
  formMessage.textContent = "";
}


// ==============================
// FORMATAR DATA
// ==============================

function formatDate(dateValue) {
  if (!dateValue) {
    return "Não informada";
  }

  const [year, month, day] = dateValue.split("-");
  return `${day}/${month}/${year}`;
}


// ==============================
// VALIDAR TELEMÓVEL
// ==============================

function isValidPhone(phone) {
  const onlyNumbers = phone.replace(/\D/g, "");

  return onlyNumbers.length >= 8;
}


// ==============================
// VALIDAÇÃO DO FORMULÁRIO
// ==============================

function validateForm(data) {
  if (data.name.trim().length < 2) {
    return "Por favor, escreva o seu nome.";
  }

  if (!isValidPhone(data.phone)) {
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

  if (!data.phoneConsent) {
    return "Para continuar, é necessário autorizar o contacto por chamada, SMS ou WhatsApp.";
  }

  return null;
}


// ==============================
// ENVIO DO FORMULÁRIO PELO WHATSAPP
// ==============================

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearMessage();

    const data = {
      name: document.getElementById("name")?.value || "",
      phone: document.getElementById("phone")?.value || "",
      business: document.getElementById("business")?.value || "",
      service: document.getElementById("service")?.value || "",
      scheduleDate: document.getElementById("scheduleDate")?.value || "",
      scheduleTime: document.getElementById("scheduleTime")?.value || "",
      message: document.getElementById("message")?.value || "",
      phoneConsent: document.getElementById("phoneConsent")?.checked || false
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
      `Telemóvel / WhatsApp: ${data.phone}\n` +
      `Data preferida: ${formattedDate}\n` +
      `Horário preferido: ${data.scheduleTime}\n\n` +
      `Mensagem:\n${data.message}\n\n` +
      `Autorização:\n` +
      `O cliente autorizou a ${CONFIG.businessName} a entrar em contacto por chamada, SMS ou WhatsApp para tratar deste pedido.`;

    showMessage(
      "success",
      "Agendamento preparado com sucesso. O WhatsApp será aberto para enviar a mensagem."
    );

    setTimeout(() => {
      window.open(createWhatsappLink(whatsappMessage), "_blank");
      contactForm.reset();
    }, 800);
  });
}


// ==============================
// ANIMAÇÃO AO APARECER NA TELA
// ==============================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
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
} else {
  revealElements.forEach((element) => {
    element.classList.add("active");
  });
}