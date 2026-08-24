(() => {
  const products = window.INSPIRATION_PRODUCTS || [];
  const escape = (value) => String(value).replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]);
  const heroEyebrow = document.querySelector('.hero .eyebrow');
  const heroSummary = document.querySelector('.hero-summary');
  const description = document.querySelector('meta[name="description"]');
  if (heroEyebrow) heroEyebrow.textContent = '为创作者打造的工具生态。';
  if (heroSummary) heroSummary.textContent = '软件、插件与工作流扩展，帮助你减少重复操作，把更多时间留给想法本身。';
  if (description) description.content = 'lnspiration：为创作者打造的软件、插件与工作流扩展生态。';
  document.querySelectorAll('.nav-links a').forEach((link) => { if (link.textContent.trim() === '关于 lnspiration') link.href = 'about.html'; });
  const nav = document.querySelector('.nav'); if (nav && !nav.querySelector('.nav-explore')) { const actions = document.createElement('div'); actions.className = 'nav-actions'; actions.innerHTML = '<a class="nav-download" href="#downloads">获取工具</a><a class="nav-explore" href="https://homer79980.github.io/ps-slicer.html" target="_blank" rel="noopener noreferrer">探索更多</a>'; const old = nav.querySelector('.nav-download'); old?.remove(); nav.appendChild(actions); }

  const style = document.createElement('style');
  style.textContent = `.site-header{position:sticky;top:0;background:#000d;backdrop-filter:blur(18px);z-index:5}.nav-links a{transition:color .2s ease}.nav-links a.is-active{color:#fff}.product-card{cursor:pointer;transition:transform .35s ease,box-shadow .35s ease}.product-card:hover{transform:translateY(-5px);box-shadow:0 30px 80px #000b}.product-card .text-link:focus-visible{outline:2px solid var(--blue);outline-offset:5px}.product-card:hover .product-visual>div{transform:scale(1.025)}.product-visual>div{transition:transform .45s ease}.download-card{transition:transform .25s ease,border-color .25s ease}.download-card:hover{transform:translateY(-3px);border-color:#526f9d}.download-toast{position:fixed;left:50%;bottom:26px;z-index:20;transform:translate(-50%,20px);opacity:0;background:#f5f5f7;color:#111;padding:11px 16px;border-radius:999px;font-size:13px;transition:opacity .2s,transform .2s}.download-toast.show{opacity:1;transform:translate(-50%,0)}`;
  style.textContent += '.nav-actions{display:flex;align-items:center;gap:18px}.nav-explore{display:inline-flex;align-items:center;border:1px solid #3b6fa7;border-radius:7px;padding:7px 13px;color:#f5f5f7;background:#132a43;transition:background .2s,border-color .2s}.nav-explore:hover{background:#1d4b78;border-color:#5b9cdd}@media(max-width:720px){.nav-actions .nav-download{display:none}.nav-actions{gap:0}}';
  document.head.appendChild(style);

  const productsSection = document.querySelector('#products');
  const plugin = products.find((product) => product.id === 'animationpathprotector');
  if (productsSection && plugin && !productsSection.querySelector('[data-plugin-card]')) {
    productsSection.insertAdjacentHTML('beforeend', `<article class="product-card plugin-card" data-plugin-card><div class="product-copy"><p class="eyebrow">UNITY EDITOR PLUGIN</p><h2>让动画路径，<br>保持可靠。</h2><p class="product-name">${escape(plugin.name)}</p><p class="description">${escape(plugin.description)}</p><ul>${plugin.features.slice(0,4).map((item) => `<li>${escape(item)}</li>`).join('')}</ul><a class="text-link" href="product.html?product=animationpathprotector">进一步了解</a></div><div class="product-visual plugin-visual"><div class="plugin-screen"><span>Animation Path Protector</span><strong>动画路径实时守护中</strong><small>当前监视的子节点数量　12</small><button type="button" tabindex="-1">刷新节点快照</button></div></div></article>`);
  }
  const dependency = products.find((product) => product.id === 'dependencyfinder');
  if (productsSection && dependency && !productsSection.querySelector('[data-dependency-card]')) {
    productsSection.insertAdjacentHTML('beforeend', `<article class="product-card reverse dependency-card" data-dependency-card><div class="product-copy"><p class="eyebrow">UNITY EDITOR PLUGIN</p><h2>理清依赖，<br>再安全清理。</h2><p class="product-name">${escape(dependency.name)}</p><p class="description">${escape(dependency.description)}</p><ul>${dependency.features.slice(0,4).map((item) => `<li>${escape(item)}</li>`).join('')}</ul><a class="text-link" href="product.html?product=dependencyfinder">进一步了解</a></div><div class="product-visual dependency-visual"><div class="dependency-screen"><div class="dependency-toolbar"><span>依赖检索器</span><b>正向依赖</b><i>反向引用</i></div><div class="dependency-columns"><div><small>来源资产</small><strong>Player.prefab</strong><span>Materials</span><span>Scripts</span></div><div><small>依赖结果</small><strong>Player.mat</strong><span>PlayerController.cs</span><span>Character.png</span></div></div><div class="dependency-status">已保护共享依赖　3</div></div></div></article>`);
  }
  const pluginStyle = document.createElement('style');
  pluginStyle.textContent = '.plugin-visual{background:linear-gradient(145deg,#3d2b69,#151b3d)}.plugin-screen{width:68%;display:grid;gap:14px;padding:24px;border:1px solid #ffffff22;border-radius:16px;background:#17172aee;box-shadow:0 25px 55px #0008}.plugin-screen span{color:#9694bd;font-size:11px}.plugin-screen strong{font-size:20px}.plugin-screen small{color:#a9a7c7}.plugin-screen button{border:0;border-radius:7px;background:#6755da;color:#fff;padding:9px;font-size:12px}.dependency-visual{background:linear-gradient(145deg,#173d3b,#111d27)}.dependency-screen{width:78%;padding:18px;border:1px solid #ffffff20;border-radius:12px;background:#16191d;box-shadow:0 25px 55px #0008}.dependency-toolbar{display:flex;align-items:center;gap:8px;padding-bottom:13px;border-bottom:1px solid #30363d;font-size:10px;color:#7e8a94}.dependency-toolbar span{margin-right:auto;color:#e4e8eb;font-weight:600}.dependency-toolbar b,.dependency-toolbar i{padding:5px 7px;border-radius:5px;font-style:normal;font-weight:500}.dependency-toolbar b{background:#237b73;color:#e9fffb}.dependency-columns{display:grid;grid-template-columns:1fr 1fr;gap:9px;padding:12px 0}.dependency-columns>div{display:grid;gap:6px;padding:10px;background:#20252a;border-radius:7px}.dependency-columns small{color:#7c8992;font-size:9px}.dependency-columns strong{font-size:11px;color:#f2f4f5}.dependency-columns span{padding:6px;background:#292f35;border-radius:4px;color:#aeb8bf;font-size:9px}.dependency-status{color:#72cfc0;font-size:9px;text-align:right}@media(max-width:720px){.dependency-screen{width:84%}}';
  document.head.appendChild(pluginStyle);

  const categoryLabels = { all: '全部', software: '桌面软件', unity: 'Unity 插件', other: '其他插件' };
  const productCards = [...document.querySelectorAll('.product-card')];
  productCards.forEach((card) => {
    const detailLink = card.querySelector('a[href^="product.html?product="]');
    if (!detailLink) return;
    const id = new URL(detailLink.href).searchParams.get('product');
    const product = products.find((item) => item.id === id);
    if (!product) return;
    card.dataset.productId = id;
    card.dataset.category = product.category || 'other';
    // Search the product identity and overview copy. Feature bullets can contain
    // incidental terms (for example “运行时依赖”) that should not make an
    // unrelated product appear for a focused catalog query.
    card.dataset.search = [product.name, product.fullName, product.description, product.searchTerms || ''].join(' ').toLocaleLowerCase('zh-CN');
    if (!card.querySelector('.product-meta')) detailLink.insertAdjacentHTML('beforebegin', `<div class="product-meta"><span>${escape(categoryLabels[card.dataset.category] || categoryLabels.other)}</span><span>v${escape(product.version)}</span><span>${escape(product.platforms)}</span></div>`);
  });

  if (productsSection && !document.querySelector('.catalog-controls')) {
    productsSection.insertAdjacentHTML('beforebegin', `<section class="catalog-controls wrap" aria-label="产品筛选"><div class="catalog-toolbar"><div class="category-tabs" role="group" aria-label="产品类型">${Object.entries(categoryLabels).map(([value, label]) => `<button type="button" data-filter="${value}" aria-pressed="false">${label}<span></span></button>`).join('')}</div><label class="catalog-search"><span class="sr-only">搜索产品</span><input type="search" autocomplete="off" placeholder="搜索产品" aria-label="搜索产品"></label></div><p class="catalog-summary" role="status"></p></section>`);
    productsSection.insertAdjacentHTML('beforeend', '<div class="catalog-empty" hidden><strong>没有找到匹配的工具</strong><button type="button">清除筛选</button></div>');
  }

  const updates = [...products].sort((a, b) => String(b.releaseDateISO).localeCompare(String(a.releaseDateISO))).slice(0, 3);
  if (productsSection && !document.querySelector('.updates-band')) {
    productsSection.insertAdjacentHTML('afterend', `<section class="updates-band"><div class="wrap"><p class="eyebrow">最近更新</p><h2>持续变得更好。</h2><div class="updates-list">${updates.map((product) => `<a href="product.html?product=${encodeURIComponent(product.id)}"><span>${escape(categoryLabels[product.category] || categoryLabels.other)}</span><strong>${escape(product.name)}</strong><small>v${escape(product.version)} · ${escape(product.releaseDate)}</small><b aria-hidden="true">›</b></a>`).join('')}</div></div></section>`);
  }

  const controls = document.querySelector('.catalog-controls');
  const searchInput = controls?.querySelector('input[type="search"]');
  const filterButtons = [...(controls?.querySelectorAll('[data-filter]') || [])];
  const summary = controls?.querySelector('.catalog-summary');
  const emptyState = productsSection?.querySelector('.catalog-empty');
  const validFilters = new Set(Object.keys(categoryLabels));
  const initialUrl = new URL(location.href);
  let activeFilter = validFilters.has(initialUrl.searchParams.get('type')) ? initialUrl.searchParams.get('type') : 'all';
  if (searchInput) searchInput.value = initialUrl.searchParams.get('q') || '';
  const updateUrlState = () => {
    const url = new URL(location.href);
    if (activeFilter === 'all') url.searchParams.delete('type'); else url.searchParams.set('type', activeFilter);
    const query = searchInput?.value.trim() || '';
    if (query) url.searchParams.set('q', query); else url.searchParams.delete('q');
    history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  };
  const applyCatalogState = (syncUrl = true) => {
    const query = searchInput?.value.trim().toLocaleLowerCase('zh-CN') || '';
    let visible = 0;
    productCards.forEach((card) => {
      const matchesType = activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchesQuery = !query || card.dataset.search.includes(query);
      card.hidden = !(matchesType && matchesQuery);
      if (!card.hidden) visible += 1;
    });
    filterButtons.forEach((button) => { const selected = button.dataset.filter === activeFilter; button.classList.toggle('is-active', selected); button.setAttribute('aria-pressed', String(selected)); const count = productCards.filter((card) => button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter).length; button.querySelector('span').textContent = count; });
    if (summary) summary.textContent = `${visible} 个产品`;
    if (emptyState) emptyState.hidden = visible !== 0;
    if (syncUrl) updateUrlState();
  };
  filterButtons.forEach((button) => button.addEventListener('click', () => { activeFilter = button.dataset.filter; applyCatalogState(); }));
  searchInput?.addEventListener('input', () => applyCatalogState());
  searchInput?.addEventListener('keydown', (event) => { if (event.key === 'Escape' && searchInput.value) { searchInput.value = ''; applyCatalogState(); } });
  emptyState?.querySelector('button')?.addEventListener('click', () => { activeFilter = 'all'; if (searchInput) searchInput.value = ''; applyCatalogState(); searchInput?.focus(); });
  document.addEventListener('keydown', (event) => { if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) { event.preventDefault(); searchInput?.focus(); } });
  applyCatalogState(false);

  const rememberHomePosition = () => sessionStorage.setItem('lnspirationHomeScroll', String(window.scrollY));
  document.querySelectorAll('.product-card').forEach((card) => {
    const detailLink = card.querySelector('a[href^="product.html?product="]');
    if (!detailLink) return;
    detailLink.addEventListener('click', rememberHomePosition);
    const openDetail = () => { rememberHomePosition(); window.location.href = detailLink.href; };
    card.addEventListener('click', (event) => { if (!event.target.closest('a,button,input,select,textarea')) openDetail(); });
  });
  document.querySelectorAll('.updates-list a').forEach((link) => link.addEventListener('click', rememberHomePosition));
  const prefetched = new Set();
  document.querySelectorAll('a[href^="product.html?product="]').forEach((link) => {
    const prefetch = () => { if (prefetched.has(link.href)) return; prefetched.add(link.href); const hint = document.createElement('link'); hint.rel = 'prefetch'; hint.href = link.href; document.head.appendChild(hint); };
    link.addEventListener('pointerenter', prefetch, { once: true });
    link.addEventListener('focus', prefetch, { once: true });
  });
  const restoreHomePosition = () => {
    if (sessionStorage.getItem('lnspirationRestoreScroll') !== '1') return;
    sessionStorage.removeItem('lnspirationRestoreScroll');
    const saved = Number(sessionStorage.getItem('lnspirationHomeScroll'));
    if (Number.isFinite(saved)) requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, saved)));
  };
  window.addEventListener('pageshow', restoreHomePosition);
  restoreHomePosition();

  const grid = document.querySelector('#download-grid');
  if (grid) {
    grid.innerHTML = products.map((product) => { const url = product.releaseUrl || product.assets?.[0]?.url || '#'; return `<article class="download-card"><div><p>${escape(product.fullName)}</p><h3>${escape(product.name)}</h3><span>${escape(product.platforms)} · v${escape(product.version)}</span></div><a class="button button-primary" href="${escape(url)}" download>直接下载</a></article>`; }).join('');
    const toast = document.createElement('div'); toast.className = 'download-toast'; toast.setAttribute('role','status'); document.body.appendChild(toast); let timer;
    grid.querySelectorAll('a.button-primary').forEach((link) => link.addEventListener('click', () => { toast.textContent = '正在准备下载…'; toast.classList.add('show'); clearTimeout(timer); timer = setTimeout(() => toast.classList.remove('show'), 1600); }));
  }

  const targets = [...document.querySelectorAll('.nav-links a[href^="#"], a[href^="#"]')].map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) })).filter((item) => item.section);
  const sections = [...new Set(targets.map((item) => item.section))];
  const updateActive = () => { const current = sections.reduce((best, section) => section.getBoundingClientRect().top <= 130 ? section : best, sections[0]); targets.forEach((item) => item.link.classList.toggle('is-active', item.section === current)); };
  if (sections.length) { window.addEventListener('scroll', updateActive, { passive: true }); updateActive(); }

  if (false) document.addEventListener('click', (event) => {
    const detail = event.target.closest('.product-detail');
    if (detail && detail.dataset.product) { event.preventDefault(); window.location.href = `product.html?product=${encodeURIComponent(detail.dataset.product)}`; return; }
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    const start = window.scrollY;
    const end = Math.max(0, target.getBoundingClientRect().top + start - ((document.querySelector('.site-header')?.offsetHeight || 0) + 18));
    const distance = end - start;
    const duration = Math.min(520, Math.max(260, Math.abs(distance) * 0.32));
    const started = performance.now();
    const ease = (time) => 0.5 - 0.5 * Math.cos(Math.PI * time);
    const frame = (now) => { const progress = Math.min(1, (now - started) / duration); window.scrollTo(0, start + distance * ease(progress)); if (progress < 1) requestAnimationFrame(frame); };
    requestAnimationFrame(frame);
    history.replaceState(null, '', link.getAttribute('href'));
  });
})();
