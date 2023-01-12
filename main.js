// HAMBURGER MENU 
document.getElementById('hamburger-menu-icon').addEventListener('click', () => {
    document.querySelector('.navbar__links').classList.toggle('show');
});
    // HIDING HAMBURGER MENU WHEN SCROLLING
    window.onscroll = () => {
        document.querySelector('.navbar__links').classList.remove('show');
    }

