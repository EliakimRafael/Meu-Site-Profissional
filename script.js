// ==============================
// CONFIGURAÇÕES PRINCIPAIS
// ==============================

const CONFIG = {
  businessName: "EightDesign Web",

  // WhatsApp sem espaços e sem o sinal +
  whatsappNumber: "351969247246",

  // Link completo do GitHub
  githubUrl: "https://github.com/EliakimRafael",

  // Email profissional
  email: "rafaelsantos2244@outlook.com",

  // Responsável pelo site
  ownerName: "Eliakim Rafael dos Santos"
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
const contactGithub = document.getElementById("contactGithub");
const scheduleDateInput = document.getElementById("scheduleDate");

const legalModal = document.getElementById("legalModal");
const legalTitle = document.getElementById("legalTitle");
const legalTag = document.getElementById("legalTag");
const legalContent = document.getElementById("legalContent");
const legalClose = document.getElementById("legalClose");
const legalLinks = document.querySelectorAll("[data-legal]");
const legalCloseElements = document.querySelectorAll("[data-close-legal]");


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

    const isOpen = navLinks.classList.contains("open");

    if (isOpen) {
      menuBtn.textContent = "×";
      menuBtn.setAttribute("aria-label", "Fechar menu");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-label", "Abrir menu");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  const menuLinks = document.querySelectorAll(".nav-links a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-label", "Abrir menu");
      menuBtn.setAttribute("aria-expanded", "false");
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

if (contactGithub) {
  contactGithub.href = CONFIG.githubUrl;
}


// ==============================
// CONTEÚDOS LEGAIS
// ==============================

const LEGAL_PAGES = {
  privacidade: {
    tag: "Política de Privacidade",
    title: "Política de Privacidade",
    content: `
      <p>
        A presente Política de Privacidade explica como a <strong>${CONFIG.businessName}</strong>,
        representada por <strong>${CONFIG.ownerName}</strong>, recolhe, utiliza e protege os dados
        fornecidos através deste site.
      </p>

      <h3>1. Dados recolhidos</h3>
      <p>
        Podemos recolher dados enviados voluntariamente pelo utilizador através do formulário
        de contacto ou através do WhatsApp.
      </p>

      <ul>
        <li>Nome;</li>
        <li>Telemóvel ou WhatsApp;</li>
        <li>Email, quando fornecido;</li>
        <li>Tipo de negócio;</li>
        <li>Serviço pretendido;</li>
        <li>Mensagem enviada pelo utilizador.</li>
      </ul>

      <h3>2. Finalidade da recolha</h3>
      <p>
        Os dados são usados apenas para responder a pedidos de orçamento, agendamento,
        contacto comercial, suporte, esclarecimento de dúvidas e acompanhamento do serviço solicitado.
      </p>

      <h3>3. Contacto por WhatsApp, chamada ou SMS</h3>
      <p>
        Ao preencher o formulário e aceitar o consentimento, o utilizador autoriza a
        <strong>${CONFIG.businessName}</strong> a entrar em contacto por chamada, SMS ou WhatsApp
        para tratar do pedido enviado.
      </p>

      <h3>4. Partilha de dados</h3>
      <p>
        A <strong>${CONFIG.businessName}</strong> não vende, aluga ou partilha os dados pessoais
        dos utilizadores com terceiros para fins comerciais não autorizados.
      </p>

      <h3>5. Conservação dos dados</h3>
      <p>
        Os dados poderão ser conservados pelo tempo necessário para responder ao pedido,
        prestar suporte, manter histórico de atendimento ou cumprir obrigações legais aplicáveis.
      </p>

      <h3>6. Direitos do utilizador</h3>
      <p>
        O utilizador pode solicitar acesso, correção ou eliminação dos seus dados pessoais
        através do email <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>.
      </p>

      <h3>7. Segurança</h3>
      <p>
        São adotadas medidas razoáveis para proteger os dados enviados pelo utilizador,
        evitando acesso, alteração ou divulgação não autorizada.
      </p>

      <h3>8. Contacto</h3>
      <p>
        Para questões relacionadas com privacidade, contacte:
        <br />
        <strong>Email:</strong> <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>
        <br />
        <strong>WhatsApp:</strong> +351 969 247 246
      </p>

      <p class="legal-note">
        Última atualização: 2026. Esta política pode ser atualizada sempre que necessário.
      </p>
    `
  },

  cookies: {
    tag: "Política de Cookies",
    title: "Política de Cookies",
    content: `
      <p>
        Esta Política de Cookies explica como a <strong>${CONFIG.businessName}</strong>
        pode utilizar cookies e tecnologias semelhantes para melhorar a experiência do utilizador.
      </p>

      <h3>1. O que são cookies?</h3>
      <p>
        Cookies são pequenos ficheiros armazenados no navegador do utilizador que ajudam
        um site a funcionar corretamente, recordar preferências ou compreender a forma como
        o site é utilizado.
      </p>

      <h3>2. Cookies usados neste site</h3>
      <p>
        Este site pode utilizar cookies técnicos e funcionais necessários para garantir
        uma navegação correta e uma boa experiência.
      </p>

      <ul>
        <li>Cookies essenciais para funcionamento do site;</li>
        <li>Cookies de preferências, quando aplicável;</li>
        <li>Cookies de análise, caso ferramentas externas sejam adicionadas futuramente.</li>
      </ul>

      <h3>3. Serviços externos</h3>
      <p>
        O site pode conter links para serviços externos, como WhatsApp, GitHub ou email.
        Esses serviços possuem as suas próprias políticas de privacidade e cookies.
      </p>

      <h3>4. Gestão de cookies</h3>
      <p>
        O utilizador pode bloquear, apagar ou configurar cookies diretamente no navegador.
        No entanto, ao bloquear alguns cookies, certas funcionalidades do site podem não funcionar corretamente.
      </p>

      <h3>5. Alterações a esta política</h3>
      <p>
        A <strong>${CONFIG.businessName}</strong> pode atualizar esta Política de Cookies
        sempre que forem adicionadas novas ferramentas ou funcionalidades ao site.
      </p>

      <h3>6. Contacto</h3>
      <p>
        Para dúvidas sobre cookies, contacte:
        <br />
        <strong>Email:</strong> <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>
      </p>

      <p class="legal-note">
        Última atualização: 2026.
      </p>
    `
  },

  termos: {
    tag: "Termos e Condições",
    title: "Termos e Condições",
    content: `
      <p>
        Estes Termos e Condições regulam a utilização deste site e dos serviços apresentados
        pela <strong>${CONFIG.businessName}</strong>, representada por
        <strong>${CONFIG.ownerName}</strong>.
      </p>

      <h3>1. Serviços apresentados</h3>
      <p>
        A <strong>${CONFIG.businessName}</strong> presta serviços relacionados com criação
        de sites, landing pages, design responsivo, manutenção, suporte, publicação online
        e presença digital para pequenos negócios e profissionais.
      </p>

      <h3>2. Orçamentos</h3>
      <p>
        Os valores apresentados no site são referências iniciais. O preço final pode variar
        conforme o número de páginas, funcionalidades, prazo, nível de personalização,
        domínio, hospedagem e manutenção contratada.
      </p>

      <h3>3. Agendamento e contacto</h3>
      <p>
        Ao enviar um pedido pelo formulário, o utilizador declara que as informações fornecidas
        são verdadeiras e autoriza o contacto para tratar do pedido.
      </p>

      <h3>4. Responsabilidade do cliente</h3>
      <p>
        O cliente é responsável por fornecer textos, imagens, dados da empresa, informações
        dos serviços e qualquer conteúdo necessário para o desenvolvimento do projeto.
      </p>

      <h3>5. Prazos</h3>
      <p>
        Os prazos de entrega podem variar de acordo com a complexidade do projeto,
        disponibilidade de conteúdos e número de revisões solicitadas.
      </p>

      <h3>6. Manutenção</h3>
      <p>
        Serviços de manutenção mensal podem incluir pequenas alterações, atualizações de conteúdo,
        suporte técnico e acompanhamento básico, conforme combinado no orçamento.
      </p>

      <h3>7. Direitos autorais</h3>
      <p>
        O layout, código e elementos desenvolvidos para o projeto pertencem ao cliente após
        a conclusão e pagamento do serviço, salvo ferramentas, bibliotecas, imagens ou recursos
        de terceiros que tenham licenças próprias.
      </p>

      <h3>8. Alterações aos termos</h3>
      <p>
        A <strong>${CONFIG.businessName}</strong> pode atualizar estes Termos e Condições
        sempre que necessário.
      </p>

      <h3>9. Contacto</h3>
      <p>
        Para dúvidas sobre estes termos, contacte:
        <br />
        <strong>Email:</strong> <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>
        <br />
        <strong>WhatsApp:</strong> +351 969 247 246
      </p>

      <p class="legal-note">
        Última atualização: 2026.
      </p>
    `
  }
};


// ==============================
// ABRIR E FECHAR MODAL LEGAL
// ==============================

function openLegalModal(pageKey) {
  if (!legalModal || !legalTitle || !legalTag || !legalContent) return;

  const page = LEGAL_PAGES[pageKey];

  if (!page) return;

  legalTag.textContent = page.tag;
  legalTitle.textContent = page.title;
  legalContent.innerHTML = page.content;

  legalModal.classList.add("open");
  legalModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (legalClose) {
    legalClose.focus();
  }
}

function closeLegalModal() {
  if (!legalModal) return;

  legalModal.classList.remove("open");
  legalModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

legalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const pageKey = link.dataset.legal;
    openLegalModal(pageKey);
  });
});

legalCloseElements.forEach((element) => {
  element.addEventListener("click", closeLegalModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLegalModal();
  }
});


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