// variables to trigger animations after passing elements position with event scroll

var rowComponent = document.querySelectorAll('.row-component-intro')

// .component-intro-line-divider
// .component-intro-h2
// .component-intro-p
// ---------------------------------------------------------------------
var wearethebestTOP = document.querySelector('.row-wearethebest-top')
var wearethebestBOTTOM = document.querySelector('.row-wearethebest-bottom')

var wearethebestTOP_h3 = document.querySelector('.wearethebest-h3-left')
var wearethebestTOP_p = document.querySelector('.wearethebest-p-left')
var wearethebestTOP_button = document.querySelector(
  '.wearethebest-top-mybutton',
)
var wearethebestTOP_image = document.querySelector('.wearethebest-top-image')

var wearethebestBOTTOM_h3 = document.querySelector('.wearethebest-h3-right')
var wearethebestBOTTOM_p = document.querySelector('.wearethebest-p-right')
var wearethebestBOTTOM_button = document.querySelector(
  '.wearethebest-bottom-mybutton',
)
var wearethebestBOTTOM_image = document.querySelector(
  '.wearethebest-bottom-image',
)

// ---------------------------------------------------------------------
// our services

var columnOurServices = document.querySelectorAll('.column-services-text')

var ourservices_h3 = document.querySelector('.services-text-right-h3')
var ourservices_p = document.querySelector('.services-text-right-p')
var ourservices_button = document.querySelector('.services-text-right-mybutton')
var servicesweprovide_image_wrapper = document.querySelector(
  '.servicesweprovide_image_wrapper',
)

// ---------------------------------------------------------------------
// recent work
var recentWork = document.querySelector(
  '.container-fluid-recent-projects-section',
)

// ---------------------------------------------------------------------
// form
var form = document.querySelector('.row-form-section')

// if(windowTop > form.offsetTop){
//    form.classList.add("form_active");
// }else {
//    form.classList.remove("form_active");
// }

// ---------------------------------------------------------------------

function scrollingdown() {
  var windowTop = window.pageYOffset + 300
  var windowTop600 = window.pageYOffset + 600

  for (var i = 0; i < rowComponent.length; i++) {
    if (windowTop > rowComponent[i].offsetTop) {
      rowComponent[i]
        .querySelector('.component-intro-line-divider')
        .classList.add('component-intro-active')
      rowComponent[i]
        .querySelector('.component-intro-h2')
        .classList.add('component-intro-active')
      rowComponent[i]
        .querySelector('.component-intro-p')
        .classList.add('component-intro-active')
    } else {
      rowComponent[i]
        .querySelector('.component-intro-line-divider')
        .classList.remove('component-intro-active')
      rowComponent[i]
        .querySelector('.component-intro-h2')
        .classList.remove('component-intro-active')
      rowComponent[i]
        .querySelector('.component-intro-p')
        .classList.remove('component-intro-active')
    }
  }

  // wearethebest=============================================================
  if (windowTop > wearethebestTOP.offsetTop) {
    wearethebestTOP_h3.classList.add('wearethebest-top-active')
    wearethebestTOP_p.classList.add('wearethebest-top-active')
    wearethebestTOP_button.classList.add('wearethebest-top-active')
    wearethebestTOP_button.style.transitionDelay = '.3s'
    wearethebestTOP_image.classList.add('wearethebest-top-active')
  } else {
    wearethebestTOP_h3.classList.remove('wearethebest-top-active')
    wearethebestTOP_p.classList.remove('wearethebest-top-active')
    wearethebestTOP_button.classList.remove('wearethebest-top-active')
    wearethebestTOP_image.classList.remove('wearethebest-top-active')
  }

  if (windowTop > wearethebestBOTTOM.offsetTop) {
    wearethebestBOTTOM_h3.classList.add('wearethebest-top-active')
    wearethebestBOTTOM_p.classList.add('wearethebest-top-active')
    wearethebestBOTTOM_button.classList.add('wearethebest-top-active')
    wearethebestBOTTOM_button.style.transitionDelay = '.3s'
    wearethebestBOTTOM_image.classList.add('wearethebest-top-active')
  } else {
    wearethebestBOTTOM_h3.classList.remove('wearethebest-top-active')
    wearethebestBOTTOM_p.classList.remove('wearethebest-top-active')
    wearethebestBOTTOM_button.classList.remove('wearethebest-top-active')
    wearethebestBOTTOM_image.classList.remove('wearethebest-top-active')
  }

  // =====================
  // our services

  for (var i = 0; i < columnOurServices.length; i++) {
    if (windowTop > columnOurServices[i].offsetTop) {
      columnOurServices[i]
        .querySelector('.services-text-right-h3')
        .classList.add('servicesweprovide-active')
      columnOurServices[i]
        .querySelector('.services-text-right-p')
        .classList.add('servicesweprovide-active')
      columnOurServices[i].querySelector(
        '.services-text-right-p',
      ).style.transitionDelay = '.2s'
      columnOurServices[i]
        .querySelector('.services-text-right-mybutton')
        .classList.add('ourservices_green_button_active')
      columnOurServices[i].querySelector(
        '.services-text-right-mybutton',
      ).style.transitionDelay = '.5s'
      columnOurServices[i]
        .querySelector('.servicesweprovide_image_wrapper')
        .classList.add('servicesweprovide_image_active')
    } else {
      columnOurServices[i]
        .querySelector('.services-text-right-h3')
        .classList.remove('servicesweprovide-active')
      columnOurServices[i]
        .querySelector('.services-text-right-p')
        .classList.remove('servicesweprovide-active')
      columnOurServices[i]
        .querySelector('.services-text-right-mybutton')
        .classList.remove('ourservices_green_button_active')
      columnOurServices[i]
        .querySelector('.servicesweprovide_image_wrapper')
        .classList.remove('servicesweprovide_image_active')
    }
  }

  // =====================
  // recent projects

  // .container-fluid-recent-projects-section
  if (windowTop600 > recentWork.offsetTop) {
    recentWork.classList.add('recent_projects_active')
  } else {
    recentWork.classList.remove('recent_projects_active')
  }

  // =====================
  // form

  if (windowTop > form.offsetTop) {
    form.classList.add('form_active')
  } else {
    form.classList.remove('form_active')
  }

  // =====================
  // contact
}

window.addEventListener('scroll', scrollingdown)
