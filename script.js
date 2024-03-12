//------------------section_1_2-logoProgressBar---------------------------
//ref(s)
const progressIndicator = document.querySelector('.progressIndicator');
let scrolledArea, hiddenHeight, currentPosition;
//implementation
window.addEventListener('scroll', indicator);
//function
function indicator() {
    scrolledArea = document.body.scrollTop || document.documentElement.scrollTop;
    hiddenHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    currentPosition = (scrolledArea/hiddenHeight)*100;
    progressIndicator.style.cssText = `width: ${currentPosition}%;`;
}


//------------------section_5-features---------------------------
//resonsive
const responsive = document.querySelector('.responsive');
const responsiveCover = document.querySelector('.responsiveCover');
const responsiveContent = document.querySelector('.responsiveContent');
responsive.onmouseenter = function() {onMouseEnter(responsiveCover, responsiveContent);}
responsive.onmouseleave = function() {onMouseLeave(responsiveCover, responsiveContent);}

// domainHosting
const domainHosting = document.querySelector('.domainHosting');
const domainHostingCover = document.querySelector('.domainHostingCover');
const domainHostingContent = document.querySelector('.domainHostingContent');
domainHosting.onmouseenter = function() { onMouseEnter(domainHostingCover, domainHostingContent); }
domainHosting.onmouseleave = function() { onMouseLeave(domainHostingCover, domainHostingContent); }

// teamCollab
const teamCollab = document.querySelector('.teamCollab');
const teamCollabCover = document.querySelector('.teamCollabCover');
const teamCollabContent = document.querySelector('.teamCollabContent');
teamCollab.onmouseenter = function() { onMouseEnter(teamCollabCover, teamCollabContent); }
teamCollab.onmouseleave = function() { onMouseLeave(teamCollabCover, teamCollabContent); }

// analytics
const analytics = document.querySelector('.analytics');
const analyticsCover = document.querySelector('.analyticsCover');
const analyticsContent = document.querySelector('.analyticsContent');
analytics.onmouseenter = function() { onMouseEnter(analyticsCover, analyticsContent); }
analytics.onmouseleave = function() { onMouseLeave(analyticsCover, analyticsContent); }

// tools
const tools = document.querySelector('.tools');
const toolsCover = document.querySelector('.toolsCover');
const toolsContent = document.querySelector('.toolsContent');
tools.onmouseenter = function() { onMouseEnter(toolsCover, toolsContent); }
tools.onmouseleave = function() { onMouseLeave(toolsCover, toolsContent); }

// security
const security = document.querySelector('.security');
const securityCover = document.querySelector('.securityCover');
const securityContent = document.querySelector('.securityContent');
security.onmouseenter = function() { onMouseEnter(securityCover, securityContent); }
security.onmouseleave = function() { onMouseLeave(securityCover, securityContent); }

// personalization
const personalization = document.querySelector('.personalization');
const personalizationCover = document.querySelector('.personalizationCover');
const personalizationContent = document.querySelector('.personalizationContent');
personalization.onmouseenter = function() { onMouseEnter(personalizationCover, personalizationContent); }
personalization.onmouseleave = function() { onMouseLeave(personalizationCover, personalizationContent); }

// liveSupport
const liveSupport = document.querySelector('.liveSupport');
const liveSupportCover = document.querySelector('.liveSupportCover');
const liveSupportContent = document.querySelector('.liveSupportContent');
liveSupport.onmouseenter = function() { onMouseEnter(liveSupportCover, liveSupportContent); }
liveSupport.onmouseleave = function() { onMouseLeave(liveSupportCover, liveSupportContent); }

//rotating functions
function onMouseEnter(cover, content) {
    cover.style.cssText = `z-index: 2; transform: rotateY(-180deg) scale(-1,1);`;
    content.style.cssText = `z-index: 3; transform: rotateY(-180deg) scale(-1,1);`;
}
function onMouseLeave(cover, content) {
    cover.style.cssText = `z-index: 3; transform: rotateY(0) scale(1);`;
    content.style.cssText = `z-index: 2; transform: rotateY(0) scale(1);`;
}



//------------------section_11-reveiew---------------------------
//ref(s)
const slider = document.querySelector('.reviewSlidesContainer');
const allSlides = document.querySelectorAll('.reviewSlide');
const toPrevButton = document.querySelector('.toPrev');
const toNextButton = document.querySelector('.toNext');
let currentIndex = 0, translateX;
//function
function updateSlide(index) {
    if(index<0) {index = allSlides.length-1;}
    else if(index == allSlides.length) {index=0}
    currentIndex = index;
    translateX = -index*100;
    slider.style.cssText = `transform: translateX(${translateX}%);`;
}
// function
toPrevButton.addEventListener('click', function() {
    updateSlide(currentIndex - 1);
});
toNextButton.addEventListener('click', function() {
    updateSlide(currentIndex + 1);
});
