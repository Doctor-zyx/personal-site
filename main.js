/* ============================================
   Personal Academic Website — Zhou Yunxiang
   i18n | Particles | Animations | Publications
   ============================================ */

// ─── I18N Data ──────────────────────────────
const i18n = {
  zh: {
    'hero.title': '神经外科研究员',
    'hero.sub': '脑血管病 & 神经重症 | 8篇SCI · 累计IF≈102',
    'hero.scroll': '了解更多',

    'about.title': '关于我',
    'about.p1': '神经外科硕士研究生，研究方向为脑血管病与神经重症。目前以第一/共同第一作者身份发表SCI论文8篇，累计影响因子约102分，包括JAMA (IF=55)、JAMA Neurology (IF=21.4)、Annals of Neurology (IF=7.7) 等国际顶级期刊。',
    'about.p2': '具备扎实的临床科研能力，熟练掌握Python、EEG信号分析、SPSS等数据分析工具，以及免疫组化、Western blot、PCR等分子生物学实验技术。致力于通过循证医学和转化研究推动脑血管病诊疗进步。',
    'about.stats.grants': '科研项目',

    'edu.title': '教育背景',
    'edu.ms.title': '医学硕士 — 神经外科',
    'edu.ms.school': '桂林医学院',
    'edu.ms.advisor': '导师：王文波 教授',
    'edu.bs.title': '医学学士',
    'edu.bs.school': '南华大学',

    'pub.title': '代表性论文',
    'pub.desc': '累计8篇SCI，总IF≈102',

    'honors.title': '荣誉与奖项',
    'honors.national': '国家奖学金',
    'honors.first': '一等奖学金',
    'honors.top10': '十佳研究生',
    'honors.outstanding': '优秀研究生',

    'skills.title': '专业技能',
    'skills.lang': '语言能力',
    'skills.programming': '编程与数据分析',
    'skills.lab': '实验室技术',

    'projects.title': '科研项目',
    'projects.chain.title': 'CHAIN 脑出血临床研究',
    'projects.chain.desc': '中药 FYTF-919（中风醒脑口服液）治疗急性脑出血的多中心、随机、安慰剂对照临床试验 — GCP 项目参与者，成果发表于 <em>The Lancet</em> (2024)',
    'projects.nsfc.title': 'miR-155 与缺血再灌注研究',
    'projects.nsfc.desc': 'miR-155 通过 p38MAPK 信号通路在缺血再灌注中的作用及大蒜素 A 的干预 — 国家自然科学基金项目',

    'contact.title': '联系方式',
    'contact.email': '📧 发送邮件',
  },
  en: {
    'hero.title': 'Neurosurgery Researcher',
    'hero.sub': 'Cerebrovascular Disease & Neurocritical Care | 8 SCI Papers · Cumulative IF≈102',
    'hero.scroll': 'Learn More',

    'about.title': 'About Me',
    'about.p1': 'Master of Neurosurgery with a focus on cerebrovascular disease and neurocritical care. Published 8 SCI papers (first/co-first author) with a cumulative impact factor of ~102, appearing in top-tier journals such as JAMA (IF=55), JAMA Neurology (IF=21.4), and Annals of Neurology (IF=7.7).',
    'about.p2': 'Proficient in Python, EEG signal analysis, SPSS, and molecular biology techniques (immunohistochemistry, Western blot, PCR). Dedicated to advancing cerebrovascular disease treatment through evidence-based medicine and translational research.',
    'about.stats.grants': 'Research Grants',

    'edu.title': 'Education',
    'edu.ms.title': 'Master of Medicine — Neurosurgery',
    'edu.ms.school': 'Guilin Medical University',
    'edu.ms.advisor': 'Advisor: Prof. Wang Wenbo',
    'edu.bs.title': 'Bachelor of Medicine',
    'edu.bs.school': 'University of South China',

    'pub.title': 'Selected Publications',
    'pub.desc': '8 SCI Papers · Cumulative IF≈102',

    'honors.title': 'Honors & Awards',
    'honors.national': 'National Scholarship',
    'honors.first': 'First-Class Scholarship',
    'honors.top10': 'Top Ten Graduate Students',
    'honors.outstanding': 'Outstanding Graduate Student',

    'skills.title': 'Skills',
    'skills.lang': 'Languages',
    'skills.programming': 'Programming & Data Analysis',
    'skills.lab': 'Laboratory Techniques',

    'projects.title': 'Research Projects',
    'projects.chain.title': 'CHAIN ICH Clinical Trial',
    'projects.chain.desc': 'Traditional Chinese medicine FYTF-919 for acute intracerebral haemorrhage — multicentre, randomised, placebo-controlled trial; GCP participant, results published in <em>The Lancet</em> (2024)',
    'projects.nsfc.title': 'miR-155 & Ischemia-Reperfusion',
    'projects.nsfc.desc': 'Role of miR-155 via p38MAPK pathway in ischemia-reperfusion and the intervention of allicin A — National Natural Science Foundation of China',

    'contact.title': 'Contact',
    'contact.email': '📧 Get in Touch',
  }
};

// ─── Publications Data ──────────────────────
const publications = [
  {
    journal: 'JAMA',
    title: 'Levodopa Added to Stroke Rehabilitation',
    authors: 'Zhou YX, Tian S',
    if: 55,
    jcr: 'Q1',
    status: 'Accepted, in production',
    statusLabel: 'Accepted'
  },
  {
    journal: 'JAMA Neurology',
    title: 'Timing and Location in Minimally Invasive ICH Surgery',
    authors: 'Zhou YX, Zhang GB',
    if: 21.4,
    jcr: 'Q1',
    status: 'Accepted, in production',
    statusLabel: 'Accepted'
  },
  {
    journal: 'Annals of Neurology',
    title: 'Clarifying the Moderating Role of Socioeconomic Status on Amyloid-Related Gray Matter Atrophy',
    authors: 'Zhou YX, Peng ZY, Wang WB',
    if: 7.7,
    jcr: 'Q1',
    status: 'Published',
    statusLabel: 'Published'
  },
  {
    journal: 'Journal of Thrombosis and Haemostasis',
    title: 'Intracranial Atherosclerotic Stenosis Burden, Dual Antiplatelet Therapy and Stroke Recurrence in Minor Stroke',
    authors: 'Zhou YX, Peng ZZ, Wang WB',
    if: 5.0,
    jcr: 'Q1',
    status: 'Accepted, in production',
    statusLabel: 'Accepted'
  },
  {
    journal: 'Frontiers in Neurology',
    title: 'Predictive Value of the Systemic Immune Inflammation Index for Adverse Outcomes in Acute Ischemic Stroke',
    authors: 'Zhou Y-X, Li W-C, Xia S-H, et al.',
    if: 4.08,
    jcr: 'Q2',
    status: 'Published (2022)',
    statusLabel: 'Published'
  },
  {
    journal: 'Frontiers in Neurology',
    title: 'Systemic Immune Inflammatory Index: Independent Predictor for Decompressive Craniectomy in Large Artery Occlusion Stroke',
    authors: 'Zhou Y-X, Li W-C, Zhu G, et al.',
    if: 4.08,
    jcr: 'Q2',
    status: 'Published (2022) · Co-First Author',
    statusLabel: 'Co-First'
  },
  {
    journal: 'World Journal of Surgical Oncology',
    title: 'Predictive Value of Suprasellar Extension for Intracranial Infection After Endoscopic Transsphenoidal Pituitary Adenoma Resection',
    authors: 'Lin M, Wang W, Tang L, Zhou Y, et al.',
    if: 3.2,
    jcr: 'Q1',
    status: 'Published (2023)',
    statusLabel: 'Published'
  },
  {
    journal: 'World Neurosurgery',
    title: 'Nomogram Prediction Model for Prognosis in Large Artery Occlusion-Acute Ischemic Stroke',
    authors: 'Haiyong Z, Wencai L, Yunxiang Z, et al.',
    if: 2.21,
    jcr: 'Q2',
    status: 'Published (2022)',
    statusLabel: 'Published'
  }
];

// ─── IF Badge Class ─────────────────────────
function getIfClass(ifScore) {
  if (ifScore >= 50) return 'if-gold';
  if (ifScore >= 20) return 'if-purple';
  if (ifScore >= 5) return 'if-blue';
  return 'if-green';
}

// ─── Populate Publications ──────────────────
function buildPubCards() {
  const grid = document.getElementById('pubGrid');
  publications.forEach(pub => {
    const card = document.createElement('div');
    card.className = 'pub-card';
    card.innerHTML = `
      <div class="pub-header">
        <span class="pub-journal">${pub.journal}</span>
        <span class="pub-if ${getIfClass(pub.if)}">IF ${pub.if}</span>
      </div>
      <p class="pub-title">${pub.title}</p>
      <p class="pub-authors">${pub.authors}</p>
      <div class="pub-meta">
        <span class="pub-status ${pub.statusLabel === 'Co-First' ? 'cofirst' : ''}">${pub.status}</span>
        <span class="pub-status jcr">JCR ${pub.jcr}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}
buildPubCards();

// ─── Language Switch ────────────────────────
let currentLang = 'zh';

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Update buttons
  document.getElementById('langZh').classList.toggle('active', lang === 'zh');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');

  // Update HTML lang attr
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Fade-out then update then fade-in
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.25s ease';

  setTimeout(() => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.innerHTML = i18n[lang][key];
      }
    });
    document.body.style.opacity = '1';
  }, 250);
}

// ─── Email Obfuscation ──────────────────────
(function () {
  const user = 'Doctor_zyx_cwq';
  const domain = '163.com';
  const email = user + '@' + domain;
  const link = document.getElementById('emailLink');
  const display = document.getElementById('emailDisplay');
  if (link) link.href = 'mailto:' + email;
  if (display) display.textContent = email;
})();

// ─── Canvas Particles ───────────────────────
(function () {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w, h;
  const particles = [];
  const count = 80;
  const maxDist = 130;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(init) {
      this.x = init ? Math.random() * w : Math.random() * w;
      this.y = init ? Math.random() * h : h + 10;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.5 + 0.3;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10) this.reset(false);
      if (this.x < -10) this.x = w + 10;
      if (this.x > w + 10) this.x = -10;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${this.opacity * 0.7})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  let mouseX = -200, mouseY = -200;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.12;
          ctx.strokeStyle = `rgba(99,102,241,${alpha * 0.8})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
      // Mouse interaction
      const md = Math.sqrt(
        (particles[i].x - mouseX) ** 2 + (particles[i].y - mouseY) ** 2
      );
      if (md < maxDist) {
        const alpha = (1 - md / maxDist) * 0.4;
        ctx.strokeStyle = `rgba(8,145,178,${alpha * 0.9})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
})();

// ─── Scroll Animations ──────────────────────
// Reveal on scroll
const revealEls = document.querySelectorAll(
  '.section-title, .pub-card, .honor-card, .project-card, .stat-card, .timeline-item'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// Stats counting animation
const statNums = document.querySelectorAll('.stat-num[data-target]');
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1500;
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObserver.observe(el));

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-bar .fill');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.setProperty('--w', width);
      bar.classList.add('in-view');
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.6 });
skillBars.forEach(bar => skillObserver.observe(bar));

// ─── Navigation Dots Update ─────────────────
const sections = document.querySelectorAll('section[id]');
const dots = document.querySelectorAll('.nav-dots .dot');

const dotObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      dots.forEach(d => {
        d.classList.toggle('active', d.getAttribute('data-section') === id);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => dotObserver.observe(s));

// ─── Smooth Scroll for Hero Arrow ──────────
document.querySelector('.hero-scroll')?.addEventListener('click', () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});
