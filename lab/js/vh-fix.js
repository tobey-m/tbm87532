// js/vh-fix.js

function setAppHeight() {
    const appHeight = window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
}

document.addEventListener('DOMContentLoaded', setAppHeight);
window.addEventListener('resize', setAppHeight);
setAppHeight();