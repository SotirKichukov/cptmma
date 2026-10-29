/**
 * CPT AI COMBAT & CANINE CONCIERGE ENGINE
 * Sovereign Autonomous Assistant & Knowledge Bridge
 * Version: 2.1 (Dual-Division Ingestion: Combat + Canine + Dynamic Subpath Resolution)
 */

(function () {
  'use strict';

  if (window.__cptConciergeInitialized) return;
  window.__cptConciergeInitialized = true;

  var WHATSAPP_PHONE = '61423269586';

  // Determine relative root prefix ('./', '../', or '../../') based on script or link tags
  function getBasePath() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].getAttribute('src') || '';
      if (src.indexOf('assets/') !== -1) {
        return src.substring(0, src.indexOf('assets/'));
      }
    }
    var links = document.getElementsByTagName('link');
    for (var j = 0; j < links.length; j++) {
      var href = links[j].getAttribute('href') || '';
      if (href.indexOf('assets/') !== -1) {
        return href.substring(0, href.indexOf('assets/'));
      }
    }
    return './';
  }

  var BASE = getBasePath();

  // Knowledge Matrix & Intent Engine
  var KNOWLEDGE_BASE = [
    {
      id: 'private_coaching',
      keywords: ['private', 'coaching', '1-on-1', '1 on 1', 'session', 'train', 'coach', 'лични', 'тренировк', 'индивидуалн', 'цена', 'час', 'запис', 'колко струва', 'price', 'cost', 'rates', 'pricing'],
      reply: 'Coach Sotir Kichukov offers high-intensity **1-on-1 Private Coaching** in Melbourne for **$120 AUD** per 60-minute session. We cover striking (K1 / Boxing), MMA transitions, wrestling takedowns & defense, and elite conditioning. Complete beginners to active fighters welcome.',
      actions: [
        { label: '💳 Book / Reserve ($120 AUD)', type: 'checkout', item: 'Private Coaching - 1 Hour', price: 120, itemType: 'session' },
        { label: '📲 WhatsApp Coach Sotir', type: 'whatsapp', text: 'Hi Sotir, I am interested in booking a 1-on-1 Private Coaching session in Melbourne.' },
        { label: 'View All Training Plans', type: 'link', url: BASE + 'programs.html' }
      ]
    },
    {
      id: 'speed_punching',
      keywords: ['speed', 'punching', 'course', 'video', 'maximizer', 'скорост', 'видео', 'курс', 'програма', 'удар', 'бързина', 'онлайн'],
      reply: 'The **Speed Punching Maximizer** ($79 AUD) is Coach Sotir\'s 13-part masterclass breaking down explosive kinetic chain mechanics, micro-timing, hand speed, and counter-punching reflexes. Includes instant lifetime streaming access on all devices.',
      actions: [
        { label: '⚡ Buy Speed Course ($79 AUD)', type: 'checkout', item: 'Speed Punching Maximizer', price: 79, itemType: 'course' },
        { label: 'Watch Free Preview', type: 'link', url: BASE + 'index.html#speed-punching' },
        { label: '📲 Ask Sotir on WhatsApp', type: 'whatsapp', text: 'Hi Sotir, I have a question about the Speed Punching Maximizer video course.' }
      ]
    },
    {
      id: 'canine_training',
      keywords: ['canine', 'dog', 'k9', 'malinois', 'cpt', 'obedience', 'working dog', 'куче', 'кучета', 'обучение', 'малиноа', 'дресура', 'кучешк'],
      reply: '🐾 **CPT Canine Personal Training** is Coach Sotir\'s specialized working dog division in Melbourne. Certified in the CPT system, Sotir provides 1-on-1 training for Belgian Malinois, German Shepherds, and family dogs. Foundations include drive building, off-lead recall, loose-lead walking, and high-engagement obedience.',
      actions: [
        { label: '🐕 Open Canine Portal', type: 'link', url: BASE + 'canine.html' },
        { label: '📋 Interactive Training Tracker', type: 'link', url: BASE + 'canine-record.html' },
        { label: '📥 Download 10-Wk PDF Guide', type: 'link', url: BASE + 'assets/docs/cpt-canine-10-week-system.pdf', target: '_blank' },
        { label: '📲 Inquire for Dog Training', type: 'whatsapp', text: 'Hi Sotir, I would like to enquire about CPT Canine dog training in Melbourne.' }
      ]
    },
    {
      id: 'location_schedule',
      keywords: ['location', 'where', 'address', 'melbourne', 'ringwood', 'gym', 'schedule', 'hours', 'time', 'къде', 'адрес', 'мелбърн', 'зала', 'график', 'часове'],
      reply: '📍 CPT MMA is located in **Melbourne, Victoria**. Private indoor combat sessions are coached at our partner fight training facility in Ringwood / Melbourne, while CPT Canine outdoor field work takes place at designated Melbourne parks. Sessions are arranged 7 days a week by appointment to fit your schedule.',
      actions: [
        { label: '📍 Schedule Session Time', type: 'whatsapp', text: 'Hi Sotir, I would like to check available training times in Melbourne.' },
        { label: 'Register Your Interest', type: 'link', url: BASE + 'index.html#apply' }
      ]
    },
    {
      id: 'sotir_bio',
      keywords: ['sotir', 'kichukov', 'who', 'bio', 'trouble', 'record', 'one championship', 'pomorie', 'bulgaria', 'fighter', 'сотир', 'кичуков', 'кой е', 'биография', 'рекорд', 'поморие'],
      reply: '🥊 **Sotir "The Trouble" Kichukov** was born in Pomorie, Bulgaria, and became the first Bulgarian fighter to compete in **ONE Championship**. With a 15-2 Pro MMA record, Max Fight Bantamweight Title, and 31 international professional bouts across Europe and Asia, he now coaches fighters and everyday athletes in Melbourne.',
      actions: [
        { label: '📖 Read: Pomorie to the Cage', type: 'link', url: BASE + 'blog/pomorie-to-the-cage.html' },
        { label: 'View Fight Programs', type: 'link', url: BASE + 'programs.html' }
      ]
    },
    {
      id: 'fight_gear',
      keywords: ['rashguard', 'gear', 'shirt', 'shorts', 'wear', 'merch', 'рашгард', 'екипировка', 'тениска', 'дрехи'],
      reply: '🛡️ The official **CPT Combat Compression Rashguard** ($75 AUD) features 4-way stretch moisture-wicking polymer, reinforced flatlock seams, and official CPT Combat lizard insignia. Available in S, M, L, XL with direct Australian shipping.',
      actions: [
        { label: 'View CPT Rashguard ($75)', type: 'link', url: BASE + 'rashguard.html' },
        { label: '📲 Order via WhatsApp', type: 'whatsapp', text: 'Hi Sotir, I would like to order the official CPT Combat Rashguard.' }
      ]
    },
    {
      id: 'recovery_magnesium',
      keywords: ['magnesium', 'recovery', 'scalus', 'minerals', 'cramps', 'магнезий', 'възстановяване', 'мускули', 'крампи'],
      reply: '⚡ The CPT Athletic Recovery Protocol utilizes pharmaceutical-grade transdermal magnesium chloride (Scalus) to eliminate muscle spasms, replenish cellular ATP, and calm the central nervous system after intense combat sessions.',
      actions: [
        { label: 'Read Recovery Guide', type: 'link', url: BASE + 'magnesium.html' }
      ]
    },
    {
      id: 'contact_info',
      keywords: ['contact', 'phone', 'call', 'email', 'message', 'whatsapp', 'контакт', 'телефон', 'номер', 'връзка', 'пиши'],
      reply: '📲 You can contact Coach Sotir Kichukov directly:\n• **WhatsApp / Mobile:** [+61 423 269 586](https://wa.me/61423269586)\n• **Email:** [sotirkichukov@cptmma.com](mailto:sotirkichukov@cptmma.com)\n• **Location:** Melbourne, VIC, Australia',
      actions: [
        { label: '📲 Open WhatsApp with Sotir', type: 'whatsapp', text: 'Hi Sotir, contacting you from cptmma.com' }
      ]
    }
  ];

  var QUICK_CHIPS = [
    { label: '🥊 1-on-1 Coaching ($120 AUD)', query: 'Tell me about 1-on-1 private coaching and pricing' },
    { label: '⚡ Speed Punching Program ($79)', query: 'What is the Speed Punching Maximizer course?' },
    { label: '🐕 CPT Canine (K9) Training', query: 'Tell me about dog training with Sotir in Melbourne' },
    { label: '📍 Gym Location & Hours', query: 'Where do you train in Melbourne?' },
    { label: '📲 Message Coach Sotir Direct', query: 'How can I contact Sotir directly?' }
  ];

  var elements = {};

  function initConciergeDOM() {
    if (document.getElementById('cptChatbotLauncher')) return;

    // 1. Inject Stylesheet if not already present
    if (!document.querySelector('link[href*="cpt-concierge.css"]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = BASE + 'assets/cpt-concierge.css?v=2';
      document.head.appendChild(link);
    }

    // 2. Build Launcher Button
    var launcher = document.createElement('button');
    launcher.type = 'button';
    launcher.id = 'cptChatbotLauncher';
    launcher.className = 'cpt-concierge-launcher';
    launcher.setAttribute('aria-label', 'Open CPT AI Concierge');
    launcher.innerHTML = [
      '<span class="cpt-concierge-badge" title="Concierge Online"></span>',
      '<div class="launcher-icon-chat">',
      '  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2">',
      '    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
      '    <path d="M8 10h.01M12 10h.01M16 10h.01" stroke-width="3" stroke-linecap="round"/>',
      '  </svg>',
      '</div>',
      '<div class="launcher-icon-close">',
      '  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.4">',
      '    <path d="M18 6 6 18M6 6l12 12"/>',
      '  </svg>',
      '</div>',
      '<div class="cpt-concierge-pill-callout" id="cptLauncherCallout">Ask Coach Sotir & CPT AI</div>'
    ].join('');

    // 3. Build Chat Window
    var win = document.createElement('div');
    win.id = 'cptChatbotWindow';
    win.className = 'cpt-concierge-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'CPT AI Combat & Canine Concierge');
    win.innerHTML = [
      '<div class="cpt-concierge-header">',
      '  <div class="cpt-concierge-header-left">',
      '    <div class="cpt-concierge-avatar">',
      '      <img src="' + BASE + 'assets/img/cpt-mark-dock.png" alt="CPT Sovereign Mark">',
      '    </div>',
      '    <div class="cpt-concierge-header-info">',
      '      <h4 class="cpt-concierge-title">CPT AI CONCIERGE</h4>',
      '      <div class="cpt-concierge-sub"><span class="live-dot"></span> Coach Sotir Kichukov · Online</div>',
      '    </div>',
      '  </div>',
      '  <div class="cpt-concierge-header-actions">',
      '    <button type="button" class="cpt-concierge-hdr-btn" id="cptResetChat" title="Reset Conversation" aria-label="Reset chat">',
      '      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
      '    </button>',
      '    <button type="button" class="cpt-concierge-hdr-btn" id="cptCloseChat" title="Minimize Window" aria-label="Close chat">',
      '      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18M6 6l12 12"/></svg>',
      '    </button>',
      '  </div>',
      '</div>',
      '<div class="cpt-concierge-body" id="cptChatMessages"></div>',
      '<div class="cpt-concierge-footer">',
      '  <form class="cpt-concierge-input-row" id="cptChatForm">',
      '    <input type="text" class="cpt-concierge-input" id="cptChatInput" placeholder="Ask about coaching, canine, pricing..." autocomplete="off">',
      '    <button type="submit" class="cpt-concierge-send" id="cptChatSend" aria-label="Send message">',
      '      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
      '    </button>',
      '  </form>',
      '  <div class="cpt-concierge-disclaimer">',
      '    <span>CPT Sovereign Concierge</span>',
      '    <a href="https://wa.me/' + WHATSAPP_PHONE + '" target="_blank" rel="noopener">WhatsApp Direct: +61 423 269 586</a>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.appendChild(launcher);
    document.body.appendChild(win);

    elements.launcher = launcher;
    elements.window = win;
    elements.body = document.getElementById('cptChatMessages');
    elements.form = document.getElementById('cptChatForm');
    elements.input = document.getElementById('cptChatInput');
    elements.closeBtn = document.getElementById('cptCloseChat');
    elements.resetBtn = document.getElementById('cptResetChat');
    elements.callout = document.getElementById('cptLauncherCallout');

    bindEvents();
    renderInitialState();
  }

  function bindEvents() {
    elements.launcher.addEventListener('click', toggleConcierge);
    elements.closeBtn.addEventListener('click', function () { toggleConcierge(false); });
    elements.resetBtn.addEventListener('click', resetChat);

    elements.form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = elements.input.value.trim();
      if (!q) return;
      handleUserQuery(q);
      elements.input.value = '';
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && elements.window.classList.contains('open')) {
        toggleConcierge(false);
      }
    });

    setTimeout(function () {
      if (elements.callout && !elements.window.classList.contains('open')) {
        elements.callout.classList.add('show-init');
        setTimeout(function () {
          elements.callout.classList.remove('show-init');
        }, 5000);
      }
    }, 3500);
  }

  function toggleConcierge(forceState) {
    var isOpen = elements.window.classList.contains('open');
    var target = (typeof forceState === 'boolean') ? forceState : !isOpen;

    if (target) {
      elements.window.classList.add('open');
      elements.launcher.classList.add('open');
      if (elements.callout) elements.callout.classList.remove('show-init');
      setTimeout(function () {
        if (elements.input) elements.input.focus();
        scrollToBottom();
      }, 200);
    } else {
      elements.window.classList.remove('open');
      elements.launcher.classList.remove('open');
    }
  }

  function scrollToBottom() {
    if (elements.body) {
      elements.body.scrollTop = elements.body.scrollHeight;
    }
  }

  function getTimestamp() {
    var d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function renderInitialState() {
    elements.body.innerHTML = '';

    var welcomeHtml = [
      '<div class="cpt-chat-msg bot">',
      '  <div class="cpt-msg-bubble">',
      '    <strong>G\'day! I\'m the CPT AI Combat &amp; Canine Concierge.</strong><br>',
      '    Trained on Coach Sotir Kichukov\'s fight career, 1-on-1 private coaching in Melbourne, video masterclasses, and working dog (K9) training.<br><br>',
      '    <em>Select a popular question below or ask me anything:</em>',
      '  </div>',
      '  <span class="cpt-msg-time">' + getTimestamp() + '</span>',
      '</div>',
      '<div class="cpt-faq-chips-container" id="cptQuickChipsBox">',
      '  <div class="cpt-faq-chips-label">',
      '    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      '    Quick Answers (1-Tap):',
      '  </div>',
      '  <div class="cpt-faq-chips-grid">'
    ];

    QUICK_CHIPS.forEach(function (chip) {
      welcomeHtml.push(
        '<button type="button" class="cpt-faq-chip" data-query="' + escapeHtml(chip.query) + '">',
        '  <span>' + escapeHtml(chip.label) + '</span>',
        '  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
        '</button>'
      );
    });

    welcomeHtml.push('  </div>', '</div>');
    elements.body.innerHTML = welcomeHtml.join('');

    var chips = elements.body.querySelectorAll('.cpt-faq-chip');
    chips.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var q = this.getAttribute('data-query');
        if (q) handleUserQuery(q);
      });
    });

    scrollToBottom();
  }

  function resetChat() {
    renderInitialState();
  }

  function handleUserQuery(text) {
    appendMessage('user', text);
    showTypingIndicator();

    setTimeout(function () {
      hideTypingIndicator();
      var response = resolveQuery(text);
      appendMessage('bot', response.reply, response.actions);
    }, 380);
  }

  function resolveQuery(rawText) {
    var lower = rawText.toLowerCase().trim();
    var bestMatch = null;
    var maxHits = 0;

    for (var i = 0; i < KNOWLEDGE_BASE.length; i++) {
      var item = KNOWLEDGE_BASE[i];
      var hits = 0;
      for (var k = 0; k < item.keywords.length; k++) {
        var kw = item.keywords[k];
        if (lower.indexOf(kw) !== -1) {
          hits += (kw.length > 3 ? 2 : 1);
        }
      }
      if (hits > maxHits) {
        maxHits = hits;
        bestMatch = item;
      }
    }

    if (bestMatch && maxHits > 0) {
      return bestMatch;
    }

    var waUrl = 'https://wa.me/' + WHATSAPP_PHONE + '?text=' + encodeURIComponent('Hi Sotir, I have a question about CPT MMA / Canine: ' + rawText);
    return {
      reply: 'Thanks for reaching out! While I continue learning all fight and canine details, Coach Sotir Kichukov can answer your question directly right now via WhatsApp or phone.',
      actions: [
        { label: '📲 Message Sotir on WhatsApp', type: 'external', url: waUrl, className: 'whatsapp' },
        { label: '🥊 View Coaching Plans ($120 AUD)', type: 'link', url: BASE + 'programs.html' },
        { label: '🐕 View Canine Division', type: 'link', url: BASE + 'canine.html' }
      ]
    };
  }

  function appendMessage(sender, text, actions) {
    var row = document.createElement('div');
    row.className = 'cpt-chat-msg ' + sender;

    var formattedText = formatMarkdown(text);
    var bubbleHtml = '<div class="cpt-msg-bubble">' + formattedText;

    if (actions && actions.length > 0) {
      bubbleHtml += '<div class="cpt-bot-actions">';
      actions.forEach(function (act) {
        var cls = 'cpt-bot-action-btn' + (act.className ? (' ' + act.className) : '');
        if (act.type === 'checkout') {
          bubbleHtml += '<button type="button" class="' + cls + '" data-checkout-title="' + escapeHtml(act.item) + '" data-checkout-price="' + act.price + '" data-checkout-type="' + (act.itemType || 'session') + '">' +
            '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' +
            escapeHtml(act.label) +
          '</button>';
        } else if (act.type === 'whatsapp') {
          var url = 'https://wa.me/' + WHATSAPP_PHONE + '?text=' + encodeURIComponent(act.text || 'Hi Sotir, contacting you from cptmma.com');
          bubbleHtml += '<a href="' + url + '" target="_blank" rel="noopener" class="' + cls + ' whatsapp">' +
            '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>' +
            escapeHtml(act.label) +
          '</a>';
        } else {
          var targetAttr = act.target ? (' target="' + act.target + '" rel="noopener"') : '';
          bubbleHtml += '<a href="' + act.url + '" class="' + cls + '"' + targetAttr + '>' +
            escapeHtml(act.label) + ' →' +
          '</a>';
        }
      });
      bubbleHtml += '</div>';
    }

    bubbleHtml += '</div><span class="cpt-msg-time">' + getTimestamp() + '</span>';
    row.innerHTML = bubbleHtml;

    var checkoutBtns = row.querySelectorAll('button[data-checkout-title]');
    checkoutBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var title = this.getAttribute('data-checkout-title');
        var price = Number(this.getAttribute('data-checkout-price'));
        var type = this.getAttribute('data-checkout-type');
        if (typeof window.openCheckout === 'function') {
          window.openCheckout(title, price, type);
          toggleConcierge(false);
        } else {
          window.location.href = BASE + 'programs.html';
        }
      });
    });

    elements.body.appendChild(row);
    scrollToBottom();
  }

  function showTypingIndicator() {
    var existing = document.getElementById('cptTypingInd');
    if (existing) return;
    var ind = document.createElement('div');
    ind.id = 'cptTypingInd';
    ind.className = 'cpt-chat-msg bot';
    ind.innerHTML = '<div class="cpt-typing-indicator"><span class="cpt-typing-dot"></span><span class="cpt-typing-dot"></span><span class="cpt-typing-dot"></span></div>';
    elements.body.appendChild(ind);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    var existing = document.getElementById('cptTypingInd');
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }
  }

  function formatMarkdown(str) {
    if (!str) return '';
    var out = escapeHtml(str);
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');
    out = out.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color:var(--cpt-concierge-green);text-decoration:underline">$1</a>');
    out = out.replace(/\n/g, '<br>');
    return out;
  }

  function escapeHtml(s) {
    if (!s) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConciergeDOM);
  } else {
    initConciergeDOM();
  }

})();
