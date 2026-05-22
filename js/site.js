const articles = [
  {
    title: 'Emerging Approaches in Digital Education',
    authors: 'Aisha Rahman, Farid Islomov',
    summary: 'A cross-disciplinary study of digital learning, AI-enabled pedagogies, and education innovation.',
    doi: '10.1234/imsj.2026.101',
    date: '15 January 2026',
    pdf: 'pdf/2026/v1i1p1.pdf',
    page: 'articles/paper1.html',
    keywords: ['digital education', 'AI', 'learning analytics', 'education policy']
  },
  {
    title: 'Cybersecurity and AI Governance',
    authors: 'Murod Karimov, Leyla Safarova',
    summary: 'A structured approach to secure AI deployment in research and industry environments.',
    doi: '10.1234/imsj.2026.201',
    date: '10 April 2026',
    pdf: 'pdf/2026/v1i2p1.pdf',
    page: 'articles/paper2.html',
    keywords: ['cybersecurity', 'AI governance', 'policy', 'digital risk']
  }
];

const articleList = document.getElementById('article-list');
const searchInput = document.getElementById('article-search');

function createCard(article) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <h3>${article.title}</h3>
    <p class="meta">${article.authors} • ${article.date}</p>
    <p>${article.summary}</p>
    <p class="meta">DOI: <a href="https://doi.org/${article.doi}" target="_blank">${article.doi}</a></p>
    <div class="article-cta">
      <a class="button button-secondary" href="${article.page}">View Article</a>
      <a class="button button-outline" href="${article.pdf}">PDF</a>
    </div>
  `;
  return card;
}

function renderArticles(filter = '') {
  articleList.innerHTML = '';
  const normalizedFilter = filter.trim().toLowerCase();

  const filtered = articles.filter(article => {
    const values = [article.title, article.authors, article.summary, article.doi, ...article.keywords].join(' ').toLowerCase();
    return values.includes(normalizedFilter);
  });

  if (filtered.length === 0) {
    articleList.innerHTML = '<p>No matching articles found. Try another search term.</p>';
    return;
  }

  filtered.forEach(article => articleList.appendChild(createCard(article)));
}

if (articleList) {
  renderArticles();
}

if (searchInput) {
  searchInput.addEventListener('input', event => {
    renderArticles(event.target.value);
  });
}

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });
}
