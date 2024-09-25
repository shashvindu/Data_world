function navigateTo(field) {
    let url = '';
    switch (field) {
        case 'data-science':
            url = 'data-science.html';
            break;
        case 'data-engineering':
            url = 'data-engineering.html';
            break;
        case 'data-analyst':
            url = 'data-analyst.html';
            break;
        case 'math-stats':
            url = 'math-statistics.html';
            break;
        default:
            url = 'home.html';
    }
    window.location.href = url;
}
// home.js
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
