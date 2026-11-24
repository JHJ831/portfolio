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

const projectDetails = {
  "apple": {
    "title": "애플 공식 웹사이트 운영",
    "company": "애플코리아",
    "groups": [
      {
        "heading": "1. apple.com/kr 운영",
        "rows": [
          {
            "text": "웹사이트 및 플랫폼 관리",
            "bullet": true
          },
          {
            "text": "운영 일정 관리 및 현지화 프로세스 관리",
            "bullet": true
          },
          {
            "text": "서비스 품질 및 콘텐츠 정확성 관리",
            "bullet": true
          },
          {
            "text": "Cross-functional 협업을 통한 운영 안정성 유지",
            "bullet": true
          }
        ]
      },
      {
        "heading": "2. Localization & Optimization",
        "rows": [
          {
            "text": "KR Market 요구사항 분석 및 반영",
            "bullet": true
          },
          {
            "text": "콘텐츠 Localization",
            "bullet": true
          },
          {
            "text": "신제품 런칭 및 프로모션 지원",
            "bullet": true
          },
          {
            "text": "현지화 프로세스 AI 자동화",
            "bullet": true
          },
          {
            "text": "디지털 에이전시 및 협력사 관리",
            "bullet": true
          }
        ]
      },
      {
        "heading": "담당 Scope",
        "rows": [
          {
            "text": ": iPhone, iPad, Vision Pro, OS, Apple Intelligence, Retail Project, Seasonal Event, Admin, .Com Analytics",
            "bullet": false
          }
        ]
      }
    ],
    "logoWidth": 59
  },
  "lexus": {
    "title": "렉서스 공식 웹사이트 운영",
    "company": "디자인피버",
    "groups": [
      {
        "heading": "1. 웹사이트 Cell PM",
        "rows": [
          {
            "text": "렉서스 공식 웹사이트, 렉서스 공식인증중고차 운영",
            "bullet": true
          },
          {
            "text": "상시 운영 및 신규 제작 건 일정 관리, 서비스 계약 및 견적 관리",
            "bullet": true
          },
          {
            "text": "클라이언트, 관계사, 딜러사, 내부 커뮤니케이션",
            "bullet": true
          },
          {
            "text": "주간/월간/연간 데이터 리포트 작성",
            "bullet": true
          }
        ]
      },
      {
        "heading": "2. UI/UX 기획",
        "rows": [
          {
            "text": "프론트/백오피스 화면 설계 및 상세 기획 (신규 페이지, 기능 추가, 화면 개선)",
            "bullet": true
          },
          {
            "text": "신규 모델 런칭 프로세스 기획 (티징 - 사전 서베이 - 사전 계약 - 런칭 - 런칭 이벤트)",
            "bullet": true
          },
          {
            "text": "신규 모델 상세 페이지 기획, 카피라이팅",
            "bullet": true
          },
          {
            "text": "브랜드 캠페인 및 콘텐츠 페이지 기획 및 화면 설계",
            "bullet": true
          },
          {
            "text": "고객 디지털 리드 확보안 제안 및 실행",
            "bullet": true
          }
        ]
      },
      {
        "heading": "3. 서비스 개선 및 고도화",
        "rows": [
          {
            "text": "시승신청 프로세스 UX 개선",
            "bullet": true
          },
          {
            "text": "주요 광고 랜딩 페이지 개선 (금융 프로그램, 내 차 만들기)",
            "bullet": true
          },
          {
            "text": "고객 온라인 여정 단계별 신규 기능 추가",
            "bullet": true
          }
        ]
      },
      {
        "heading": "[주요 개선 성과]",
        "rows": [
          {
            "text": "고객 세분화 및 웹사이트 로드맵 제안 및 실행",
            "bullet": true
          },
          {
            "text": "화면 개선을 통한 주요 광고 랜딩 페이지 이탈률 37%p 감소",
            "bullet": true
          },
          {
            "text": "내 차 만들기 개선을 통한 페이지 재방문율 24%p 증가",
            "bullet": true
          },
          {
            "text": "SEO 개선을 통한 오가닉 유입 고객 이탈률 27% 감소, 체류시간 31% 상승",
            "bullet": true
          },
          {
            "text": "시승신청 이탈률 13% 감소",
            "bullet": true
          },
          {
            "text": "모델 상세 페이지 ‘하이라이트' 섹션 구축",
            "bullet": true
          }
        ]
      },
      {
        "heading": "[데이터 확보 성과]",
        "rows": [
          {
            "text": "모델 런칭 프로세스 설계(사전 서베이-사전 계약-런칭 프로모션)를 통한 고객 리드 확보",
            "bullet": true
          },
          {
            "text": "전시장 워크인 고객 이벤트 페이지 구축을 통한 고객 데이터 확보 (잠재고객 - 가망 고객 - 시승 완료 고객)",
            "bullet": true
          }
        ]
      }
    ],
    "logoWidth": 149
  },
  "toyota": {
    "title": "토요타 공식 웹사이트 운영",
    "company": "디자인피버",
    "groups": [
      {
        "heading": "1. 웹사이트 Cell PM",
        "rows": [
          {
            "text": "토요타 공식 웹사이트, 토요타 공식인증중고차 운영",
            "bullet": true
          },
          {
            "text": "상시 운영 및 신규 제작 건 일정 관리, 서비스 계약 및 견적 관리",
            "bullet": true
          },
          {
            "text": "클라이언트, 관계사, 딜러사, 내부 커뮤니케이션",
            "bullet": true
          },
          {
            "text": "주간/월간/연간 데이터 리포트 작성",
            "bullet": true
          }
        ]
      },
      {
        "heading": "2. UI/UX 기획",
        "rows": [
          {
            "text": "프론트/백오피스 화면 설계 및 상세 기획 (신규 페이지, 기능 추가, 화면 개선)",
            "bullet": true
          },
          {
            "text": "신규 모델 상세 페이지 기획, 카피라이팅",
            "bullet": true
          },
          {
            "text": "브랜드 캠페인 및 콘텐츠 페이지 기획 및 화면 설계",
            "bullet": true
          },
          {
            "text": "고객 디지털 리드 확보안 제안 및 실행",
            "bullet": true
          }
        ]
      },
      {
        "heading": "3. 서비스 개선 및 고도화",
        "rows": [
          {
            "text": "시승신청 프로세스 UX 개선",
            "bullet": true
          },
          {
            "text": "주요 광고 랜딩 페이지 개선",
            "bullet": true
          },
          {
            "text": "고객 온라인 여정 단계별 신규 기능 추가",
            "bullet": true
          }
        ]
      },
      {
        "heading": "[주요 운영 성과]",
        "rows": [
          {
            "text": "신규 모델 런칭 6회, 년형 업데이트 12회, 브랜드 캠페인 페이지 기획",
            "bullet": true
          },
          {
            "text": "전년도 대비 MAU 18% 증가",
            "bullet": true
          },
          {
            "text": "캠페인 페이지 로그인/회원가입 기능 신규 추가",
            "bullet": true
          },
          {
            "text": "오프라인 캠페인을 위한 별도 시승신청 페이지 구축",
            "bullet": true
          }
        ]
      },
      {
        "heading": "[주요 개선 성과]",
        "rows": [
          {
            "text": "모바일 메인 페이지 화면 개선을 통한 게시글 클릭율 44% 증가",
            "bullet": true
          },
          {
            "text": "주요 광고 랜딩 페이지 화면 개선을 통한 이탈률 21% 감소",
            "bullet": true
          },
          {
            "text": "모델 데이터 관리 백오피스 설계를 통한 운영 효율성 개선(가격, 개별소비세 설정, 제원, 스펙 등)",
            "bullet": true
          }
        ]
      }
    ],
    "logoWidth": 136
  },
  "toyota-renewal": {
    "title": "토요타 웹사이트 리뉴얼 구축",
    "company": "디자인피버",
    "groups": [
      {
        "rows": [
          {
            "text": "수행 역할 : PM, UI/UX 기획",
            "bullet": false
          }
        ]
      },
      {
        "heading": "1. 리뉴얼 제안서 작성",
        "rows": [
          {
            "text": "'구매 고려' 고객을 타겟으로 한 모델 중심 웹사이트 I.A, 여정, 주요 기능 제안",
            "bullet": true
          }
        ]
      },
      {
        "heading": "2. 프론트/어드민 상세 화면 설계",
        "rows": [
          {
            "text": "시승신청 프로세스 기획",
            "bullet": true
          },
          {
            "text": "내 차 만들기 상세 화면 설계",
            "bullet": true
          },
          {
            "text": "모델 관심 지표 확보를 고려한 모델 페이지 설계",
            "bullet": true
          },
          {
            "text": "SEO 최적화를 위한 페이지 구조 설계, 메타 데이터 작성, 사이트맵 관리",
            "bullet": true
          },
          {
            "text": "지표 수집을 위한 GTM 태그, GA 이벤트, 버튼 ID 값 설정",
            "bullet": true
          }
        ]
      },
      {
        "heading": "3. 콘텐츠 기획 및 카피라이팅",
        "rows": [
          {
            "text": "모델 촬영 PPM 작성",
            "bullet": true
          },
          {
            "text": "브랜드 가이드 기반 주요 페이지 카피라이팅",
            "bullet": true
          }
        ]
      },
      {
        "heading": "[수상]",
        "rows": [
          {
            "text": "A.N.D Award Grand Prix 수상",
            "bullet": false
          }
        ]
      }
    ],
    "logoWidth": 136
  },
  "toyota-certified": {
    "title": "토요타 공식인증중고차 웹사이트 구축",
    "company": "디자인피버",
    "groups": [
      {
        "rows": [
          {
            "text": "수행 역할 : PM, UI/UX 기획",
            "bullet": false
          }
        ]
      },
      {
        "heading": "1. 프론트/백오피스 UI/UX 설계",
        "rows": [
          {
            "text": "매물 노출 중심의 화면 설계",
            "bullet": true
          },
          {
            "text": "간편한 매물 등록, 판매 현황, 고객 데이터 관리를 위한 백오피스 설계",
            "bullet": true
          },
          {
            "text": "딜러사 별 데이터 시각화 대시보드 구성",
            "bullet": true
          }
        ]
      },
      {
        "heading": "2. 딜러사 어드민 사용 가이드 제작 및 배포",
        "rows": []
      }
    ],
    "logoWidth": 136
  },
  "sopsyety": {
    "title": "싸이 NFT 웹사이트 ‘soPSYety’ 신규 구축",
    "company": "디자인피버",
    "groups": [
      {
        "rows": [
          {
            "text": "수행 역할 : PM, UI/UX 기획",
            "bullet": false
          }
        ]
      },
      {
        "heading": "1. 프론트/백 오피스 설계",
        "rows": [
          {
            "text": "플랫폼 간 로그인/연동 프로세스 UX 설계(업비트, 인터파크, soPSYety)",
            "bullet": true
          },
          {
            "text": "회원 정보 연동 관리 어드민 설계",
            "bullet": true
          },
          {
            "text": "NFT 데이터 관리 기능",
            "bullet": true
          },
          {
            "text": "이벤트 화이트리스트 관리 어드민 화면 설계",
            "bullet": true
          }
        ]
      },
      {
        "heading": "2. NFT 기획",
        "rows": [
          {
            "text": "NFT 기획(8개 테마, 81개 의상 패턴, 10개 표정 등)",
            "bullet": false
          },
          {
            "text": "NFT QA, 메타 데이터 작성 및 검수",
            "bullet": false
          }
        ]
      },
      {
        "heading": "[성과]",
        "rows": [
          {
            "text": "iF 디자인 어워드 수상",
            "bullet": false
          },
          {
            "text": "A.N.D Award Grand Prix 수상",
            "bullet": false
          },
          {
            "text": "NFT 5,200개 중 5,116개 판매",
            "bullet": false
          }
        ]
      }
    ],
    "logoWidth": 70
  },
  "designfever": {
    "title": "디자인피버 채용 웹사이트 신규 구축",
    "company": "디자인피버",
    "groups": [
      {
        "rows": [
          {
            "text": "수행 역할 : UI/UX 기획",
            "bullet": false
          }
        ]
      },
      {
        "heading": "1. 프론트 화면 설계 및 카피라이팅",
        "rows": [
          {
            "text": "프론트 화면 설계",
            "bullet": true
          },
          {
            "text": "일관된 톤 앤 매너의 카피라이팅, 슬로건 작성",
            "bullet": true
          }
        ]
      },
      {
        "heading": "2. 백오피스 설계",
        "rows": [
          {
            "text": "인사담당자 인터뷰 기반 공고 등록 화면 설계",
            "bullet": true
          },
          {
            "text": "인재풀 공고 관리를 위한 기간별 알림 설정(지원서 자동 삭제 알림)",
            "bullet": true
          },
          {
            "text": "지원서 제출 시 알림톡 발송을 통한 정보 제공 및 재방문 유도",
            "bullet": true
          }
        ]
      },
      {
        "heading": "3. 유지 및 보수",
        "rows": [
          {
            "text": "조직 변경 반영 및 기능 개선",
            "bullet": true
          },
          {
            "text": "공고 복사 / 미리보기 기능 추가",
            "bullet": true
          }
        ]
      },
      {
        "heading": "[주요성과]",
        "rows": [
          {
            "text": "- 잡 포털 의존도 감소",
            "bullet": false
          },
          {
            "text": "- 인재풀 신규 추가로 인한 상시 채용 증가",
            "bullet": false
          }
        ]
      }
    ],
    "logoWidth": 69
  },
  "zigbang": {
    "title": "직방 브랜드 · 채용 사이트 신규 구축",
    "company": "디자인피버",
    "groups": [
      {
        "rows": [
          {
            "text": "수행 역할 : UI/UX 기획",
            "bullet": false
          }
        ]
      },
      {
        "heading": "1. 백오피스 상세 화면 설계",
        "rows": [
          {
            "text": "고객 데이터 시각화 대시보드 구성",
            "bullet": true
          },
          {
            "text": "권한에 따른 데이터 조회 퍼널 구성",
            "bullet": true
          },
          {
            "text": "관리 최소화를 위한 페이지별 배너 교체 자동화 기능 설계",
            "bullet": true
          }
        ]
      },
      {
        "heading": "[수상]",
        "rows": [
          {
            "text": "A.N.D Award Grand Prix 수상",
            "bullet": false
          }
        ]
      }
    ],
    "logoWidth": 200
  }
};

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
  const details = projectDetails[id];
  if (details) {
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'project-detail-trigger';
    trigger.setAttribute('aria-label', `${title} 상세 보기`);
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.addEventListener('click', () => openProjectDetails(project, details));
    article.prepend(trigger);
    article.classList.add('has-project-details');
  }
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


const dialog = document.createElement('dialog');
dialog.className = 'project-dialog';
dialog.setAttribute('aria-labelledby', 'project-dialog-title');
dialog.innerHTML = `
  <div class="project-dialog-body">
    <button type="button" class="project-dialog-close" aria-label="상세 닫기" autofocus>×</button>
    <header class="project-dialog-header">
      <h2 id="project-dialog-title"></h2>
      <a class="project-dialog-website" target="_blank" rel="noopener noreferrer">웹사이트 ↗</a>
      <div class="project-dialog-meta"><p></p><p></p></div>
    </header>
    <section class="project-dialog-section" aria-labelledby="project-dialog-role">
      <h3 id="project-dialog-role">주요 역할 및 담당</h3>
      <div class="project-dialog-groups"></div>
    </section>
    <img class="project-dialog-logo" alt="">
  </div>`;
document.body.append(dialog);

const closeDetails = dialog.querySelector('.project-dialog-close');
closeDetails.addEventListener('click', () => dialog.close());
let backdropPress = false;
dialog.addEventListener('pointerdown', event => { backdropPress = event.target === dialog; });
dialog.addEventListener('click', event => {
  if (backdropPress && event.target === dialog) dialog.close();
  backdropPress = false;
});

function openProjectDetails(project, detail) {
  const [id, , period, , description, url] = project;
  dialog.querySelector('h2').textContent = detail.title;
  dialog.querySelector('.project-dialog-website').href = url;
  const [company, date] = dialog.querySelectorAll('.project-dialog-meta p');
  company.textContent = detail.company;
  date.textContent = period;
  const groups = dialog.querySelector('.project-dialog-groups');
  groups.replaceChildren();
  for (const group of detail.groups) {
    const block = document.createElement('div');
    if (group.heading) {
      const heading = document.createElement(group.heading === '담당 Scope' ? 'p' : 'h4');
      heading.textContent = group.heading;
      block.append(heading);
    }
    let list = null;
    for (const row of group.rows) {
      const line = document.createElement(row.bullet ? 'li' : 'p');
      line.textContent = row.text;
      if (row.bullet) {
        if (list === null) {
          list = document.createElement('ul');
          block.append(list);
        }
        list.append(line);
      } else {
        list = null;
        block.append(line);
      }
    }
    if (!group.heading && description.startsWith('기여도 ')) {
      const contribution = document.createElement('p');
      contribution.textContent = description;
      block.append(contribution);
    }
    groups.append(block);
  }
  const logo = dialog.querySelector('img');
  logo.src = `assets/project-details/${id}.webp`;
  logo.style.width = `${detail.logoWidth}rem`;
  dialog.showModal();
  dialog.scrollTop = 0;
  closeDetails.focus({ preventScroll: true });
}

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
