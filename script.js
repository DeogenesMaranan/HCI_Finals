function updateFavicon() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.getElementById('favicon');
    favicon.href = isDarkMode ? 'assets/favicon-white.png' : 'assets/favicon-black.png';
}

updateFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

document.getElementById("burger-menu").addEventListener("click", function() {
    var popupMenu = document.getElementById("popup-menu");
    popupMenu.classList.toggle("open");
    popupMenu.classList.remove("close");
});

document.getElementById("close-menu").addEventListener("click", function() {
    var popupMenu = document.getElementById("popup-menu");
    popupMenu.classList.remove("open");
    popupMenu.classList.add("close");
});

document.getElementById("switch-to-signup").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
});

document.getElementById("switch-to-login").addEventListener("click", function() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});
