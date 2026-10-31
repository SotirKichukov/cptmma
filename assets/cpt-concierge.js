/**
 * CPT AI COMBAT & CANINE CONCIERGE ENGINE
 * Sovereign Autonomous Assistant & Knowledge Bridge
 * Version: 3.0 (Professional High-Tech Vector Iconography, Zero-Emoji Architecture)
 */

(function () {
  'use strict';

  if (window.__cptConciergeInitialized) return;
  window.__cptConciergeInitialized = true;

  var WHATSAPP_PHONE = '61423269586';

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

  // Precision Vector Icons (Modern Tactical Combat Aesthetic)
  var SVG_ICONS = {
    combat: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.3"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>',
    speed: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    canine: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/><path d="m10 15 2 2 2-2"/></svg>',
    location: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
    card: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
    doc: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    gear: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    send: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6"><polyline points="9 18 15 12 9 6"/><line x1="4" y1="12" x2="15" y2="12"/></svg>'
  };

  // Clean Knowledge Base (Zero AI Emojis)
  var KNOWLEDGE_BASE = [
    {
      id: 'program_match',
      keywords: ['which', 'choose', 'compare', 'best for me', 'right for me', 'difference', 'подходящ', 'коя програма', 'избор', 'разлика', 'за мен', 'какво да избера'],
      reply: 'Here is how to choose the right CPT program for your exact goals and lifestyle:\n\n' +
        '1. **1-on-1 Private Coaching ($120 AUD):** Best if you are in Melbourne and want hands-on technique coaching, custom padwork, and real-time biomechanics corrections from ONE Championship veteran Sotir Kichukov.\n\n' +
        '2. **Speed Punching Maximizer ($79 AUD):** Best if you want to dramatically increase hand speed, reaction time, and explosive counter-punching from anywhere in the world at your own schedule (includes instant free demo video on Lesson 1).\n\n' +
        '3. **CPT Canine Division:** Best if you own a working breed or family dog in Melbourne and need bulletproof off-lead recall and stress-free obedience.',
      actions: [
        { label: 'Watch Free Speed Demo', type: 'link', icon: 'speed', url: BASE + 'index.html#speed-punching' },
        { label: 'Book 1-on-1 ($120 AUD)', type: 'checkout', icon: 'card', item: 'Private Coaching - 1 Hour', price: 120, itemType: 'session' },
        { label: 'Open Canine Portal', type: 'link', icon: 'canine', url: BASE + 'canine.html' },
        { label: 'Ask Sotir on WhatsApp', type: 'whatsapp', icon: 'whatsapp', text: 'Hi Sotir, help me choose the best CPT program for my goals.' }
      ]
    },
    {
      id: 'private_coaching',
      keywords: ['private', 'coaching', '1-on-1', '1 on 1', 'session', 'train', 'coach', 'лични', 'тренировк', 'индивидуалн', 'цена', 'час', 'запис', 'колко струва', 'price', 'cost', 'rates', 'pricing'],
      reply: 'Coach Sotir Kichukov offers high-intensity **1-on-1 Private Coaching** in Melbourne for **$120 AUD** per 60-minute session.\n\n' +
        '• **KEY BENEFITS:**\n' +
        '  - 100% focused biomechanics correction in real time — zero wasted hours on bad habits\n' +
        '  - Professional combat conditioning (K1, Boxing, Wrestling & MMA) with zero injury risk\n' +
        '  - Tailored padwork, defense footwork & counter-striking angles\n\n' +
        '• **IDEAL FOR:**\n' +
        '  - Complete beginners wanting safe, rapid foundations without group gym intimidation\n' +
        '  - Active competitors seeking an elite edge in cage tactics & timing\n' +
        '  - Busy Melbourne professionals needing high-efficiency, 60-minute maximum results.',
      actions: [
        { label: 'Book / Reserve ($120 AUD)', type: 'checkout', icon: 'card', item: 'Private Coaching - 1 Hour', price: 120, itemType: 'session' },
        { label: 'WhatsApp Coach Sotir', type: 'whatsapp', icon: 'whatsapp', text: 'Hi Sotir, I am interested in booking a 1-on-1 Private Coaching session in Melbourne.' },
        { label: 'View All Training Plans', type: 'link', icon: 'arrow', url: BASE + 'programs.html' }
      ]
    },
    {
      id: 'speed_punching',
      keywords: ['speed', 'punching', 'course', 'video', 'maximizer', 'demo', 'sample', 'скорост', 'видео', 'курс', 'програма', 'удар', 'бързина', 'онлайн', 'демо', 'сампъл'],
      reply: 'The **Speed Punching Maximizer** ($79 AUD) is Coach Sotir\'s comprehensive 6-Week digital masterclass (40 HD video modules + official training PDFs).\n\n' +
        '• **KEY BENEFITS:**\n' +
        '  - Develop the \'Kinetic Snap\' — explosive hand speed and whip mechanics with relaxed shoulders\n' +
        '  - 40 HD step-by-step videos + downloadable PDF drill sheets for gym or home training\n' +
        '  - Instant free demo video available directly in the player on Lesson 1\n' +
        '  - Lifetime streaming on phone, tablet & TV — one-time payment, zero recurring subscriptions\n\n' +
        '• **IDEAL FOR:**\n' +
        '  - Boxers, kickboxers & MMA athletes looking to double hand speed and counter reflexes\n' +
        '  - Fighters and fitness enthusiasts outside Melbourne who want Sotir\'s proven system worldwide.',
      actions: [
        { label: 'Watch Free Demo Video', type: 'link', icon: 'speed', url: BASE + 'index.html#speed-punching' },
        { label: 'Buy Speed Course ($79 AUD)', type: 'checkout', icon: 'speed', item: 'Speed Punching Maximizer', price: 79, itemType: 'course' },
        { label: 'Ask Sotir on WhatsApp', type: 'whatsapp', icon: 'whatsapp', text: 'Hi Sotir, I have a question about the Speed Punching Maximizer video course.' }
      ]
    },
    {
      id: 'canine_match',
      keywords: ['suitable', 'suitability', 'dog suitable', 'is my dog', 'puppy', 'breed', 'подходящо ли е кучето', 'порода', 'кученце'],
      reply: '**Is your dog suitable for CPT Canine?**\n\n' +
        '• **Breeds Welcomed:** Working breeds (Belgian Malinois, German Shepherd, Dutch Shepherd, Doberman, Rottweiler) as well as medium/large family breeds.\n' +
        '• **Core Issues Solved:** Leash pulling, selective hearing, bolting at the dog park, lack of focus, over-excitement, and weak engagement.\n' +
        '• **Sotir\'s Approach:** No harsh intimidation — we use drive-based positive engagement, structured reward timing, and clear handler boundaries.\n\n' +
        'You can download our official 10-Week PDF manual or message Sotir with your dog\'s breed and age.',
      actions: [
        { label: 'Download 10-Wk PDF Guide', type: 'link', icon: 'doc', url: BASE + 'assets/docs/cpt-canine-10-week-system.pdf', target: '_blank' },
        { label: 'Chat with Sotir about your Dog', type: 'whatsapp', icon: 'whatsapp', text: 'Hi Sotir, I have a question about whether my dog is suitable for CPT Canine training.' },
        { label: 'Open Canine Portal', type: 'link', icon: 'canine', url: BASE + 'canine.html' }
      ]
    },
    {
      id: 'canine_training',
      keywords: ['canine', 'dog', 'k9', 'malinois', 'CPT', 'obedience', 'working dog', 'куче', 'кучета', 'обучение', 'малиноа', 'дресура', 'кучешк'],
      reply: 'CPT Canine Personal Training is Coach Sotir\'s specialized working dog division in Melbourne, certified under the world-renowned **CPT system**.\n\n' +
        '• **KEY BENEFITS:**\n' +
        '  - Bulletproof Off-Lead Recall: Your dog returns instantly, even with dogs, wildlife, or joggers nearby\n' +
        '  - Stress-Free Loose-Lead Walking: Eliminates pulling, lunging, and chaotic walks\n' +
        '  - Handler Direct Coaching: Sotir coaches *you* how to lead, channel drive, and create clear communication\n\n' +
        '• **IDEAL FOR:**\n' +
        '  - High-drive working breeds (Belgian Malinois, German Shepherds, Dutch Shepherds, Rottweilers)\n' +
        '  - Family dog owners struggling with recall anxiety, lack of focus, or reactivity in public parks.',
      actions: [
        { label: 'Open Canine Portal', type: 'link', icon: 'canine', url: BASE + 'canine.html' },
        { label: 'Interactive Training Tracker', type: 'link', icon: 'doc', url: BASE + 'canine-record.html' },
        { label: 'Download 10-Wk PDF Guide', type: 'link', icon: 'doc', url: BASE + 'assets/docs/cpt-canine-10-week-system.pdf', target: '_blank' },
        { label: 'Inquire for Dog Training', type: 'whatsapp', icon: 'whatsapp', text: 'Hi Sotir, I would like to enquire about CPT Canine dog training in Melbourne.' }
      ]
    },
    {
      id: 'location_schedule',
      keywords: ['location', 'where', 'address', 'melbourne', 'ringwood', 'gym', 'schedule', 'hours', 'time', 'къде', 'адрес', 'мелбърн', 'зала', 'график', 'часове'],
      reply: 'CPT MMA is located in **Melbourne, Victoria**.\n\n' +
        '• **Private Combat Sessions:** Coached at our partner fight training facility in Ringwood / Melbourne (60 Charter Street, Ringwood VIC 3134).\n' +
        '• **Canine K9 Sessions:** Conducted outdoors at designated Melbourne parklands for real-world distraction proofing.\n' +
        '• **Schedule:** Available 7 days a week by appointment to fit your working hours.',
      actions: [
        { label: 'Get Directions (Google Maps)', type: 'external', icon: 'location', url: 'https://maps.google.com/?q=60+Charter+Street,+Ringwood+VIC+3134' },
        { label: 'Schedule Session Time', type: 'whatsapp', icon: 'whatsapp', text: 'Hi Sotir, I would like to check available training times in Melbourne.' },
        { label: 'Register Your Interest', type: 'link', icon: 'arrow', url: BASE + 'index.html#apply' }
      ]
    },
    {
      id: 'sotir_bio',
      keywords: ['sotir', 'kichukov', 'who', 'bio', 'trouble', 'record', 'one championship', 'pomorie', 'bulgaria', 'fighter', 'сотир', 'кичуков', 'кой е', 'биография', 'рекорд', 'поморие'],
      reply: 'Sotir \'The Trouble\' Kichukov was born in Pomorie, Bulgaria, and became the first Bulgarian fighter to compete in **ONE Championship**. With a 15-2 Pro MMA record, Max Fight Bantamweight Title, and 31 international professional bouts across Europe and Asia, he now coaches fighters and everyday athletes in Melbourne.',
      actions: [
        { label: 'Read: Pomorie to the Cage', type: 'link', icon: 'arrow', url: BASE + 'blog/pomorie-to-the-cage.html' },
        { label: 'View Fight Programs', type: 'link', icon: 'arrow', url: BASE + 'programs.html' }
      ]
    },
    {
      id: 'fight_gear',
      keywords: ['rashguard', 'gear', 'shirt', 'shorts', 'wear', 'merch', 'рашгард', 'екипировка', 'тениска', 'дрехи'],
      reply: 'The official **CPT Combat Compression Rashguard** ($75 AUD) features 4-way stretch moisture-wicking polymer, reinforced flatlock seams, and official CPT Combat lizard insignia. Available in S, M, L, XL with direct Australian shipping.',
      actions: [
        { label: 'View CPT Rashguard ($75)', type: 'link', icon: 'arrow', url: BASE + 'rashguard.html' },
        { label: 'Order via WhatsApp', type: 'whatsapp', icon: 'whatsapp', text: 'Hi Sotir, I would like to order the official CPT Combat Rashguard.' }
      ]
    },
    {
      id: 'recovery_magnesium',
      keywords: ['magnesium', 'recovery', 'scalus', 'minerals', 'cramps', 'магнезий', 'възстановяване', 'мускули', 'крампи'],
      reply: 'The CPT Athletic Recovery Protocol utilizes pharmaceutical-grade transdermal magnesium chloride (Scalus) to eliminate muscle spasms, replenish cellular ATP, and calm the central nervous system after intense combat sessions.',
      actions: [
        { label: 'Read Recovery Guide', type: 'link', icon: 'arrow', url: BASE + 'magnesium.html' }
      ]
    },
    {
      id: 'contact_info',
      keywords: ['contact', 'phone', 'call', 'email', 'message', 'whatsapp', 'контакт', 'телефон', 'номер', 'връзка', 'пиши'],
      reply: 'You can contact Coach Sotir Kichukov directly:\n• **WhatsApp / Mobile:** [+61 423 269 586](https://wa.me/61423269586)\n• **Email:** [sotirkichukov@cptmma.com](mailto:sotirkichukov@cptmma.com)\n• **Location:** Melbourne, VIC, Australia',
      actions: [
        { label: 'Open WhatsApp with Sotir', type: 'whatsapp', icon: 'whatsapp', text: 'Hi Sotir, contacting you from cptmma.com' }
      ]
    }
  ];

  var QUICK_CHIPS = [
    { icon: 'combat', label: 'Which Fight Program is Right for Me?', query: 'Which fight training program is best for me?' },
    { icon: 'speed', label: 'Speed Course: Benefits & Free Demo', query: 'What are the benefits of the Speed Punching course and how can I see a demo?' },
    { icon: 'combat', label: '1-on-1 Coaching ($120 AUD)', query: 'Tell me about 1-on-1 private coaching and pricing' },
    { icon: 'canine', label: 'Is CPT Canine Right for My Dog?', query: 'Is my dog suitable for CPT Canine training?' },
    { icon: 'location', label: 'Gym Location & Melbourne Schedule', query: 'Where do you train in Melbourne?' },
    { icon: 'whatsapp', label: 'Direct WhatsApp to Coach Sotir', query: 'How can I contact Sotir directly?' }
  ];

  var elements = {};

  function initConciergeDOM() {
    if (document.getElementById('cptChatbotLauncher')) return;

    if (!document.querySelector('link[href*="cpt-concierge.css"]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = BASE + 'assets/cpt-concierge.css?v=3';
      document.head.appendChild(link);
    }

    // 1. Build Launcher Button with CPT Combat Insignia (No ordinary speech bubble)
    var launcher = document.createElement('button');
    launcher.type = 'button';
    launcher.id = 'cptChatbotLauncher';
    launcher.className = 'cpt-concierge-launcher';
    launcher.setAttribute('aria-label', 'Open CPT AI Concierge');
    launcher.innerHTML = [
      '<span class="cpt-concierge-badge" title="Concierge Online"></span>',
      '<div class="launcher-icon-chat">',
      '  <img src="' + BASE + 'assets/img/cpt-mark-dock.png" alt="CPT Sovereign Mark" width="28" height="34" class="cpt-launcher-crest">',
      '</div>',
      '<div class="launcher-icon-close">',
      '  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5">',
      '    <path d="M18 6 6 18M6 6l12 12"/>',
      '  </svg>',
      '</div>',
      '<div class="cpt-concierge-pill-callout" id="cptLauncherCallout">Ask Coach Sotir &amp; CPT AI</div>'
    ].join('');

    // 2. Build Chat Window
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
      '      ' + SVG_ICONS.send,
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
      var iconSvg = SVG_ICONS[chip.icon] || SVG_ICONS.combat;
      welcomeHtml.push(
        '<button type="button" class="cpt-faq-chip" data-query="' + escapeHtml(chip.query) + '">',
        '  <span class="chip-content">',
        '    <span class="chip-icon">' + iconSvg + '</span>',
        '    <span class="chip-text">' + escapeHtml(chip.label) + '</span>',
        '  </span>',
        '  <span class="chip-arrow">' + SVG_ICONS.arrow + '</span>',
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
    }, 350);
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
        { label: 'Message Sotir on WhatsApp', type: 'external', icon: 'whatsapp', url: waUrl, className: 'whatsapp' },
        { label: 'View Coaching Plans ($120 AUD)', type: 'link', icon: 'arrow', url: BASE + 'programs.html' },
        { label: 'View Canine Division', type: 'link', icon: 'canine', url: BASE + 'canine.html' }
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
        var iconHtml = (act.icon && SVG_ICONS[act.icon]) ? SVG_ICONS[act.icon] : SVG_ICONS.arrow;

        if (act.type === 'checkout') {
          bubbleHtml += '<button type="button" class="' + cls + '" data-checkout-title="' + escapeHtml(act.item) + '" data-checkout-price="' + act.price + '" data-checkout-type="' + (act.itemType || 'session') + '">' +
            iconHtml +
            '<span>' + escapeHtml(act.label) + '</span>' +
          '</button>';
        } else if (act.type === 'whatsapp') {
          var url = 'https://wa.me/' + WHATSAPP_PHONE + '?text=' + encodeURIComponent(act.text || 'Hi Sotir, contacting you from cptmma.com');
          bubbleHtml += '<a href="' + url + '" target="_blank" rel="noopener" class="' + cls + ' whatsapp">' +
            iconHtml +
            '<span>' + escapeHtml(act.label) + '</span>' +
          '</a>';
        } else {
          var targetAttr = act.target ? (' target="' + act.target + '" rel="noopener"') : '';
          bubbleHtml += '<a href="' + act.url + '" class="' + cls + '"' + targetAttr + '>' +
            iconHtml +
            '<span>' + escapeHtml(act.label) + '</span>' +
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
