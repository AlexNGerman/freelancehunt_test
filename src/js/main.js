// Load Bootstrap JS
import 'bootstrap'
import isMobileDevice from './libs'

document.addEventListener('DOMContentLoaded', () => {

  const showBackgroundOverlay = () => {
    let elOverlay = document.createElement('div');
    elOverlay.className = 'background-overlay';
    document.body.appendChild(elOverlay);
  };

  const hideBackgroundOverlay = () => {
    let backgroundOverlay = document.querySelector('.background-overlay');

    if(backgroundOverlay)
      document.body.removeChild(backgroundOverlay);
  };

  let setElementsBackgroundOverlay = (window.innerWidth >= 768 && !isMobileDevice()) ? '[data-bs-toggle]' : '.navbar-btn, .user-profile-open';
  document.querySelectorAll(setElementsBackgroundOverlay).forEach(function(elDropdowns){
    elDropdowns.addEventListener('shown.bs.dropdown', () => {
      showBackgroundOverlay();
    });

    elDropdowns.addEventListener('hide.bs.dropdown',  () => {
      hideBackgroundOverlay();
    });
  });

});
