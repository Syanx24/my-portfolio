/* ---------- clock ---------- */
const clockEl = document.getElementById('clock');
function updateClock() {
  const now = new Date();
  const opts = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', opts);
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  clockEl.textContent = `${dateStr}, ${timeStr}`;
}
updateClock();
setInterval(updateClock, 1000 * 30);

/* ---------- theme toggle ---------- */
const root = document.documentElement;
const themeIcon = document.getElementById('themeIcon');
const sun = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
const moon = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';

function setTheme(mode) {
  if (mode === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeIcon.innerHTML = moon;
  } else {
    root.removeAttribute('data-theme');
    themeIcon.innerHTML = sun;
  }
  localStorage.setItem('portfolio-theme', mode);
}

const saved = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(saved || (prefersDark ? 'dark' : 'light'));

document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  setTheme(isDark ? 'light' : 'dark');
});

/* ---------- tab content ---------- */
const content = {
  about: `
    <h2>Hey, I'm Sayan 👋</h2>
    <p class="lead">Final-year CS student building full-stack products end to end — from interface to API.</p>

    <div class="stats-row">
      <div class="stat-item">
        <span class="stat-num">4</span>
        <span class="stat-label">Projects shipped</span>
      </div>
<a href="https://lnkd.in/p/dF2fUXix" target="_blank" rel="noopener" class="stat-item" style="text-decoration:none; display:block;">
  <span class="stat-num">1</span>
  <span class="stat-label">Hackathon win</span>
</a>
    </div>

    <p>I enjoy working on the backend — designing APIs, structuring databases, and writing the logic that holds an application together backed by a strong foundation in problem solving and debugging.</p>

    <div class="chip-row">
      <span class="chip">🎓 Final-year B.Tech CSE</span>
      <a href="https://drive.google.com/file/d/1TDrP_tOQtIl83KMNzvvO7f4cUD68YzfO/view" target="_blank" rel="noopener" class="chip" style="text-decoration:none;">🏆 MLH Hackathon Winner</a>
  <span class="chip"><span class="status-dot"></span> Open to opportunities</span>
    </div>

    <div class="cta-row">
      <button class="btn-primary" onclick="showTab('projects')">See my projects</button>
      <a href="./media/Sayan Bhattacharjee_full stack developer_cv.pdf" download class="btn-secondary">Download CV</a>
    </div>
  `,
  experience: `
    <h2>Education</h2>
    <div class="timeline-item">
      <div class="timeline-head">
        <span class="timeline-role">B.Tech in Computer Science &amp; Engineering</span>
        <span class="timeline-date">2023 — 2027</span>
      </div>
<div class="timeline-company"><a href="https://www.mckvie.edu.in/" target="_blank" rel="noopener" style="color:inherit; text-decoration:none;">MCKV Institute of Engineering · MAKAUT</a></div>      <p>Currently pursuing my degree with a CGPA of 7.57 through the 6th semester.</p>
    </div>
    <div class="timeline-item">
      <div class="timeline-head">
        <span class="timeline-role">Higher Secondary (Class XII)</span>
        <span class="timeline-date">2020 — 2022</span>
      </div>
      <div class="timeline-company">Burikhali Kshetra Mohan Institution · WBCHSE</div>
      <p>Completed with 76.2%.</p>
    </div>
    <div class="timeline-item">
      <div class="timeline-head">
        <span class="timeline-role">Secondary (Class X)</span>
        <span class="timeline-date">2014 — 2020</span>
      </div>
      <div class="timeline-company">Burikhali Kshetra Mohan Institution · WBBSE</div>
      <p>Completed with 80.85%.</p>
    </div>
  `,
  skills: `
    <h2>Skills</h2>
    <div class="skills-grid">
    
      <div class="skill-card">
        <h3>Technical</h3>
        <div class="chip-row"><span class="chip">HTML</span><span class="chip">CSS</span><span class="chip">JavaScript</span><span class="chip">C</span><span class="chip">Java</span><span class="chip">SQL</span><span class="chip">MongoDB</span></div>
      </div>
      <div class="skill-card">
        <h3>Libraries &amp; Frameworks</h3>
        <div class="chip-row"><span class="chip">React.js</span><span class="chip">Node.js</span><span class="chip">Express.js</span><span class="chip">Tailwind CSS</span></div>
      </div>
      <div class="skill-card">
        <h3>Tools</h3>
        <div class="chip-row"><span class="chip">Git</span><span class="chip">GitHub</span><span class="chip">Chrome DevTools</span><span class="chip">AWS</span></div>
      </div>
      <div class="skill-card">
        <h3>Core CS</h3>
        <div class="chip-row"><span class="chip">DSA</span><span class="chip">OOP</span><span class="chip">DBMS</span><span class="chip">OS</span></div>
      </div>
    </div>

    <h2 style="margin-top:32px; font-size:20px;">Training &amp; Certifications</h2>
    <div class="timeline-item" style="padding-top:0;">
      <div class="timeline-head">
        <span class="timeline-role">Full Stack Web Development — MERN Stack</span>
        <span class="timeline-date">May 2026 — Jun 2026</span>
      </div>
<div class="timeline-company"><a href="https://certificate.ardentsoftware.co.in/generate/212655" target="_blank" rel="noopener" style="color:inherit; text-decoration:none;">Ardent Computech Pvt. Ltd.</a> ● 40-hour training program</div>      <p>Completed 40 hours of hands-on training in MERN stack web development, capped off by building and shipping a full-stack project as part of the course.</p>
    </div>
    
  `,
  projects: `
    <h2>Projects</h2>
    <div class="project-card">
      <div class="project-title">WordShift <span style="font-weight:400; color:var(--ink-soft); font-size:13px;">— Nov 2026 · Full-stack MERN · Solo project</span></div>
      <div class="project-desc">Real-time multiplayer word game where two players compete to transform one four-letter word into another, changing one letter per turn. Built with React, Node.js, Express, MongoDB, and Socket.IO, featuring shareable room links, turn-based gameplay, word validation, and a responsive Tailwind CSS interface.</div>
      <a class="project-link" href="https://client-ten-kappa-69.vercel.app/" target="_blank" rel="noopener">Live Demo →</a> <span style="color:var(--ink-soft); font-size:13px; margin:0 4px;">·</span> <a class="project-link" href="https://github.com/Syanx24/wordshift" target="_blank" rel="noopener">GitHub Link →</a>
    </div>
    <div class="project-card">
      <div class="project-title">CodeWise <span style="font-weight:400; color:var(--ink-soft); font-size:13px;">— Jul 2026 · Full-stack MERN · Solo project</span></div>
      <div class="project-desc">AI-powered code review platform built with React, Node.js, Express, and Monaco Editor, offering real-time code analysis with syntax highlighting and markdown-based feedback powered by the Gemini API.</div>
      <a class="project-link" href="https://github.com/Syanx24/Codewise" target="_blank" rel="noopener">View project →</a>
    </div>
    <div class="project-card">
      <div class="project-title">Kitchen Compass <span style="font-weight:400; color:var(--ink-soft); font-size:13px;">— Mar 2026 · Frontend · Solo project</span></div>
      <div class="project-desc">A responsive web app using TheMealDB API to deliver global recipes, with asynchronous JavaScript and CSS animations for instant search results, detailed instructions, and ingredient lists.</div>
      <a class="project-link" href="https://syanx24.github.io/Kitchen-Compass/" target="_blank" rel="noopener">View project →</a>
    </div>
    <div class="project-card">
      <div class="project-title">Touch Map <span style="font-weight:400; color:var(--ink-soft); font-size:13px;">— Feb 2024 · Hackathon · MLH Winner, Diversion 2k24</span></div>
      <div class="project-desc">An interactive geography learning tool built to make learning engaging, overcoming challenges like touch accuracy, country detection, web integration, and hardware limits through testing and iteration.</div>
      <a class="project-link" href="https://devfolio.co/projects/touch-map-interactive-map-visualization-92d4" target="_blank" rel="noopener">View project →</a>
    </div>
    
  `
};

const panel = document.getElementById('panel');
const tabs = document.querySelectorAll('.tab');

function showTab(name) {
  panel.style.opacity = 0;
  setTimeout(() => {
    panel.innerHTML = content[name];
    panel.style.animation = 'none';
    void panel.offsetWidth;
    panel.style.animation = 'fadeIn .5s ease';
    panel.style.opacity = 1;
  }, 120);

  tabs.forEach(t => {
    const active = t.dataset.tab === name;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active);
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => showTab(tab.dataset.tab));
});

showTab('about');