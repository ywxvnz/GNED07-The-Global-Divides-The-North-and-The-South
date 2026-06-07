/**
 * Shared site layout.
 * Edit the navbar and footer here once, and every page will use it.
 */

document.addEventListener('DOMContentLoaded', () => {
    const isExplorePage = window.location.pathname.includes('/explore/');
    const rootPath = isExplorePage ? '../' : '';
    const explorePath = isExplorePage ? '' : 'explore/';
    const isHomePage = !isExplorePage && getCurrentFileName() === 'index.html';

    renderSiteHeader(rootPath, explorePath, isHomePage, isExplorePage);
    renderPageNavigation(rootPath, isExplorePage);
    renderSiteFooter(rootPath, isHomePage, isExplorePage);
    renderScrollToTopButton();
});

function getCurrentFileName() {
    const pathParts = window.location.pathname.split('/');
    return pathParts[pathParts.length - 1] || 'index.html';
}

function getCurrentPagePath(isExplorePage) {
    const fileName = getCurrentFileName();
    return isExplorePage ? `explore/${fileName}` : fileName;
}

function renderSiteHeader(rootPath, explorePath, isHomePage, isExplorePage) {
    const headerTarget = document.querySelector('[data-site-header]');
    if (!headerTarget) return;

    headerTarget.outerHTML = `
        <div class="navbar-glass-container">
            <nav class="navbar navbar-expand-lg navbar-glass">
                <div class="container-fluid justify-content-center">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="mainNavbar">
                        <ul class="navbar-nav gap-2">
                            <li class="nav-item">
                                <a class="nav-link ${isHomePage ? 'active' : ''}" ${isHomePage ? 'aria-current="page"' : ''} href="${rootPath}index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="${rootPath}index.html#about-section">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle ${isExplorePage ? 'active' : ''}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Explore
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="${explorePath}topics.html">Topics</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="${rootPath}index.html">The Global Divides</a></li>
                                    <li><a class="dropdown-item" href="${explorePath}Conceptualizing_Global_South.html">Conceptualizing the Global South</a></li>
                                    <li><a class="dropdown-item" href="${explorePath}Third_World_versus_Global_South.html">Third World versus Global South</a></li>
                                    <li><a class="dropdown-item" href="${explorePath}The_North-South_Divide.html">The North-South Divide</a></li>
                                    <li><a class="dropdown-item" href="${explorePath}Top_Ten_and_Bottom_Ten_Countries_in_Terms_of_HDI_Rankings.html">Top Ten and Bottom Ten Countries in Terms of HDI Rankings</a></li>
                                    <li><a class="dropdown-item" href="${explorePath}Brandt_Line_and_Structural_Inequalities.html">Brandt Line and Structural Inequalities</a></li>
                                    <li><a class="dropdown-item" href="${explorePath}Major_Lenses_of_Global_Relations.html">Major Lenses of Global Relations</a></li>
                                    <li><a class="dropdown-item" href="${explorePath}Major_Lenses_of_International_Relations.html">Major Lenses of International Relations</a></li>
                                    <li><a class="dropdown-item" href="${explorePath}Conclusion.html">Conclusion</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    `;
}

function renderPageNavigation(rootPath, isExplorePage) {
    const footerTarget = document.querySelector('[data-site-footer]');
    if (!footerTarget || document.querySelector('.page-navigation')) return;

    const pages = [
        {
            title: 'The Global Divides',
            path: 'index.html'
        },
        {
            title: 'Conceptualizing Global South',
            path: 'explore/Conceptualizing_Global_South.html'
        },
        {
            title: 'Third World versus Global South',
            path: 'explore/Third_World_versus_Global_South.html'
        },
        {
            title: 'The North-South Divide',
            path: 'explore/The_North-South_Divide.html'
        },
        {
            title: 'Top Ten and Bottom Ten Countries in Terms of HDI Rankings',
            path: 'explore/Top_Ten_and_Bottom_Ten_Countries_in_Terms_of_HDI_Rankings.html'
        },
        {
            title: 'Brandt Line and Structural Inequalities',
            path: 'explore/Brandt_Line_and_Structural_Inequalities.html'
        },
        {
            title: 'Major Lenses of Global Relations',
            path: 'explore/Major_Lenses_of_Global_Relations.html'
        },
        {
            title: 'Major Lenses of International Relations',
            path: 'explore/Major_Lenses_of_International_Relations.html'
        },
        {
            title: 'Conclusion',
            path: 'explore/Conclusion.html'
        }
    ];

    const currentPagePath = getCurrentPagePath(isExplorePage);
    const currentIndex = pages.findIndex(page => page.path === currentPagePath);
    const isTopicsPage = currentPagePath === 'explore/topics.html';
    if (currentIndex === -1 && !isTopicsPage) return;

    const previousPage = isTopicsPage ? pages[0] : pages[currentIndex - 1];
    const nextPage = isTopicsPage ? pages[1] : pages[currentIndex + 1];

    footerTarget.insertAdjacentHTML('beforebegin', `
        <nav class="page-navigation" aria-label="Topic navigation">
            <div class="container">
                <div class="page-navigation-inner">
                    ${previousPage ? `
                        <a class="page-nav-button page-nav-button-prev" href="${rootPath}${previousPage.path}">
                            <span class="page-nav-label">&larr; Previous</span>
                            <span class="page-nav-title">${previousPage.title}</span>
                        </a>
                    ` : `
                        <span class="page-nav-button page-nav-button-disabled">
                            <span class="page-nav-label">&larr; Previous</span>
                            <span class="page-nav-title">Start of Topics</span>
                        </span>
                    `}

                    <a class="page-nav-topics" href="${rootPath}explore/topics.html">All Topics</a>

                    ${nextPage ? `
                        <a class="page-nav-button page-nav-button-next" href="${rootPath}${nextPage.path}">
                            <span class="page-nav-label">Next &rarr;</span>
                            <span class="page-nav-title">${nextPage.title}</span>
                        </a>
                    ` : `
                        <span class="page-nav-button page-nav-button-disabled">
                            <span class="page-nav-label">Next &rarr;</span>
                            <span class="page-nav-title">End of Topics</span>
                        </span>
                    `}
                </div>
            </div>
        </nav>
    `);

    applyPageNavigationBackground(footerTarget.previousElementSibling);
}

function applyPageNavigationBackground(navigation) {
    if (!navigation) return;

    const source = findBackgroundSource(navigation.previousElementSibling);
    if (!source) return;

    const sourceStyle = window.getComputedStyle(source);
    if (sourceStyle.backgroundImage && sourceStyle.backgroundImage !== 'none') {
        navigation.style.backgroundImage = sourceStyle.backgroundImage;
        navigation.style.backgroundSize = sourceStyle.backgroundSize;
        navigation.style.backgroundPosition = sourceStyle.backgroundPosition;
        navigation.style.backgroundRepeat = sourceStyle.backgroundRepeat;
    }

    if (!isTransparentColor(sourceStyle.backgroundColor)) {
        navigation.style.backgroundColor = sourceStyle.backgroundColor;
    }
}

function findBackgroundSource(element) {
    if (!element) return null;

    const style = window.getComputedStyle(element);
    const hasBackgroundImage = style.backgroundImage && style.backgroundImage !== 'none';
    const hasBackgroundColor = !isTransparentColor(style.backgroundColor);

    if (hasBackgroundImage || hasBackgroundColor) return element;

    const children = Array.from(element.children).reverse();
    for (const child of children) {
        const childSource = findBackgroundSource(child);
        if (childSource) return childSource;
    }

    return null;
}

function isTransparentColor(color) {
    return !color || color === 'transparent' || color === 'rgba(0, 0, 0, 0)' || color.endsWith(', 0)');
}

function renderSiteFooter(rootPath, isHomePage, isExplorePage) {
    const footerTarget = document.querySelector('[data-site-footer]');
    if (!footerTarget) return;

    footerTarget.outerHTML = `
        <footer class="footer-section" id="about-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7 mb-4 mb-md-0">
                        <h3 class="footer-tagline">Exploring global inequalities, relations, and perspectives.</h3>
                        <p class="footer-copyright mb-0">A project made for the subject GNED 07 - The Contemporary World submitted to Sir Paul John Estorninos</p>
                    </div>
                    <div class="col-md-1 d-none d-md-block text-center footer-separator-col">
                        <div class="footer-separator"></div>
                    </div>
                    <div class="col-md-4 footer-links-container text-md-start text-center">
                        <ul class="footer-links">
                            <li><a href="${rootPath}index.html" class="footer-link ${isHomePage ? 'active' : ''}">Home</a></li>
                            <li><a href="${rootPath}explore/topics.html" class="footer-link ${isExplorePage ? 'active' : ''}">Explore</a></li>
                            <li><a href="${rootPath}index.html#about-section" class="footer-link">About</a></li>
                        </ul>
                        <p class="footer-credit mb-0">Developed by Vanessa Andino, Vhina May Palomar, Lorraine Ochoa, Roselyn Llantos, Christina Gomba, Charles San Juan, and Endred Baido of BSCS-4B A.Y. 2025-2026</p>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

function renderScrollToTopButton() {
    if (document.querySelector('.scroll-to-top-button')) return;

    document.body.insertAdjacentHTML('beforeend', `
        <span class="scroll-bottom-sentinel" aria-hidden="true"></span>
        <button class="scroll-to-top-button" type="button" aria-label="Back to top">
            <span aria-hidden="true">&uarr;</span>
        </button>
    `);

    const button = document.querySelector('.scroll-to-top-button');
    const sentinel = document.querySelector('.scroll-bottom-sentinel');
    let isBottomVisible = false;

    const getScrollMetrics = () => {
        const documentElement = document.documentElement;
        const body = document.body;
        const scrollTop = Math.max(window.scrollY, documentElement.scrollTop, body.scrollTop);
        const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
        const viewportHeight = window.innerHeight || documentElement.clientHeight;

        return {
            distanceFromBottom: scrollHeight - (scrollTop + viewportHeight),
            scrollTop
        };
    };

    const setButtonVisibility = isVisible => {
        button.classList.toggle('is-visible', isVisible);
        button.style.opacity = isVisible ? '1' : '0';
        button.style.pointerEvents = isVisible ? 'auto' : 'none';
        button.style.transform = isVisible ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.94)';
    };

    const toggleButton = () => {
        const { distanceFromBottom, scrollTop } = getScrollMetrics();
        const isAtBottom = distanceFromBottom <= 80;

        setButtonVisibility((isAtBottom || isBottomVisible) && scrollTop > 0);
    };

    button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();

        try {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } catch {
            window.scrollTo(0, 0);
        }

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        if (document.body.scrollTo) {
            document.body.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    });

    window.addEventListener('scroll', toggleButton, { passive: true });
    document.body.addEventListener('scroll', toggleButton, { passive: true });
    window.addEventListener('resize', toggleButton);
    window.addEventListener('load', toggleButton);

    if ('IntersectionObserver' in window && sentinel) {
        const bottomObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                isBottomVisible = entry.isIntersecting;
                toggleButton();
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0
        });

        bottomObserver.observe(sentinel);
    }

    toggleButton();
}
