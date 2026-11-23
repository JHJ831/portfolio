const ux = 'UI/UX 기획';
const management = '프로젝트 관리';
const operations = '운영 · 고도화';
const build = '구축';
const backOffice = '백오피스 시스템 기획';
const localization = '콘텐츠 현지화';
const operationTags = [management, operations, ux, backOffice];
const buildTags = [management, build, ux, backOffice];
const planner = 'PM, UI/UX Planner';
const toyota = 'https://www.toyota.co.kr/';

const projects = [
  ['jeep', 'Jeep 디지털 플랫폼 운영', '06. 2026 -', 'PM', '공식 웹사이트, 네이버 브랜드 스토어', 'https://www.jeep.co.kr/', operationTags],
  ['peugeot', 'Peugeot 디지털 플랫폼 운영', '06. 2026 -', 'PM', '공식 웹사이트, 네이버 브랜드 스토어', 'https://www.epeugeot.co.kr/', operationTags],
  ['apple', '애플 공식 웹사이트 운영', '06. 2025 - 06. 2026', 'Interactive Producer', 'iPhone, iPad, Apple Vision Pro, Apple Intelligence, Seasonal Event', 'https://www.apple.com/kr/', [operations, management, localization]],
  ['lexus', '렉서스 공식 웹사이트 운영', '01. 2024 - 06. 2025', planner, '', 'https://www.lexus.co.kr/', operationTags],
  ['toyota', '토요타 공식 웹사이트 운영', '01. 2024 - 06. 2025', planner, '', toyota, operationTags],
  ['toyota-renewal', '토요타 공식 웹사이트 리뉴얼 구축', '11. 2022 - 10. 2023', planner, '기여도 80% (기획 2.5인)', toyota, buildTags],
  ['toyota-certified', '토요타 공식인증중고차 웹사이트 구축', '05. 2023 - 06. 2023', planner, '기여도 100% (기획 1인)', 'https://certified.toyota.co.kr/', buildTags],
  ['sopsyety', '싸이 NFT 웹사이트 ‘soPSYety’ 신규 구축', '05. 2022 - 10. 2022', planner, '기여도 80% (기획 1인)', 'https://sopsyety.io/', buildTags],
  ['soak', '과학 지식 영상 플랫폼 SOAK 신규 구축', '10. 2023 - 01. 2024', planner, '기여도 33% (기획 3인)', 'https://www.soak.so/ko/main', [build, ux, backOffice]],
  ['designfever', '디자인피버 채용 웹사이트 신규 구축', '05. 2022 - 10. 2022', planner, '기여도 50% (기획 2인)', 'https://careers.designfever.com/', [build, ux, backOffice, operations]],
  ['zigbang', '직방 브랜드 · 채용 사이트 신규 구축', '03. 2022 - 05. 2022', 'UI/UX Planner', '기여도 30% (기획 2인)', 'https://company.zigbang.com/', [ux, backOffice]],
];

const filters = document.querySelector('#filters');
const projectList = document.querySelector('#project-list');
const more = document.querySelector('#more');
let activeFilter = '전체';
let expanded = false;

function createCard(project) {
  const [id, title, date, role, description, url, tags] = project;
  const article = document.createElement('article');
  article.className = `project-card project-${id}`;
  article.tabIndex = -1;
  article.innerHTML = `
    <img class="project-image" src="assets/${id}.webp" alt="" loading="lazy">
    <div class="project-copy">
      <p class="project-date">${date}</p>
      <h3>${title}</h3>
      <p class="project-role">${role}</p>
      ${description ? `<p class="project-description">${description}</p>` : ''}
      <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${title} 웹사이트 (새 탭)">웹사이트 ↗</a>
      <ul class="tags">${tags.map(tag => `<li>#${tag}</li>`).join('')}</ul>
    </div>`;
  return article;
}

const cards = new Map(projects.map(project => [project[0], createCard(project)]));

function renderProjects() {
  projectList.replaceChildren();
  projectList.classList.toggle('filtered', activeFilter !== '전체');
  if (activeFilter !== '전체') {
    for (const [id, , , , , , tags] of projects) {
      if (tags.includes(activeFilter)) projectList.append(cards.get(id));
    }
  } else {
    const groups = [
      ['jeep', 'peugeot'],
      ['apple'],
      ['lexus', 'toyota'],
    ];
    for (const group of groups) {
      const row = document.createElement('div');
      row.className = group.length === 1 ? 'project-wide' : 'project-pair';
      row.append(...group.map(id => cards.get(id)));
      projectList.append(row);
    }
    if (expanded) {
      const columns = document.createElement('div');
      columns.className = 'project-pair project-columns';
      for (const group of [['toyota-renewal', 'sopsyety', 'designfever'], ['toyota-certified', 'soak', 'zigbang']]) {
        const column = document.createElement('div');
        column.className = 'project-column';
        column.append(...group.map(id => cards.get(id)));
        columns.append(column);
      }
      projectList.append(columns);
    }
  }
  more.hidden = activeFilter !== '전체' || expanded;
  more.setAttribute('aria-expanded', String(expanded));
}

for (const category of ['전체', ux, management, operations, build, backOffice, localization]) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'pill';
  button.textContent = category;
  button.setAttribute('aria-pressed', String(category === activeFilter));
  button.addEventListener('click', () => {
    if (category === activeFilter) return;
    activeFilter = category;
    expanded = false;
    for (const filter of filters.children) {
      filter.setAttribute('aria-pressed', String(filter === button));
    }
    renderProjects();
  });
  filters.append(button);
}

more.addEventListener('click', () => {
  expanded = true;
  renderProjects();
  cards.get('toyota-renewal').focus({ preventScroll: true });
});
renderProjects();

const track = document.querySelector('#featured-track');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

function updateArrows() {
  previous.disabled = track.scrollLeft <= 2;
  next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
}

function moveSlide(direction) {
  const start = track.firstElementChild.offsetLeft;
  const positions = [...track.children].map(slide => slide.offsetLeft - start);
  const current = track.scrollLeft;
  const position = direction > 0
    ? positions.find(offset => offset > current + 3)
    : positions.findLast(offset => offset < current - 3);
  track.scrollTo({
    left: position ?? (direction > 0 ? track.scrollWidth : 0),
    behavior: reducedMotion.matches ? 'instant' : 'smooth',
  });
}

previous.addEventListener('click', () => moveSlide(-1));
next.addEventListener('click', () => moveSlide(1));
track.addEventListener('scroll', updateArrows, { passive: true });
new ResizeObserver(updateArrows).observe(track);
