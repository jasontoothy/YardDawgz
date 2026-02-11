let numButtonClicks = 0;
function buttonClicked() {
    const video = document.getElementById('logoSplashVideo');
    const btnDiv = document.getElementById('introDiv');
    const mainPage = document.getElementById('mainPage');
    video.hidden = true;
    btnDiv.hidden = true;
    mainPage.hidden = false;
    mainPage.style.visibility = 'visible';
}
