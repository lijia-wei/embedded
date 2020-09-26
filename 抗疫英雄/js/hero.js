
// Intended to prevent false-positive bug reports about Bootstrap not working properly in old versions of IE due to folks testing using IE's unreliable emulation modes.
(function () {
  'use strict';

  function emulatedIEMajorVersion() {
    var groups = /MSIE ([0-9.]+)/.exec(window.navigator.userAgent)
    if (groups === null) {
      return null
    }
    var ieVersionNum = parseInt(groups[1], 10)
    var ieMajorVersion = Math.floor(ieVersionNum)
    return ieMajorVersion
  }

  function actualNonEmulatedIEMajorVersion() {
    // Detects the actual version of IE in use, even if it's in an older-IE emulation mode.
    // IE JavaScript conditional compilation docs: https://msdn.microsoft.com/library/121hztk3%28v=vs.94%29.aspx
    // @cc_on docs: https://msdn.microsoft.com/library/8ka90k2e%28v=vs.94%29.aspx
    var jscriptVersion = new Function('/*@cc_on return @_jscript_version; @*/')() // jshint ignore:line
    if (jscriptVersion === undefined) {
      return 11 // IE11+ not in emulation mode
    }
    if (jscriptVersion < 9) {
      return 8 // IE8 (or lower; haven't tested on IE<8)
    }
    return jscriptVersion // IE9 or IE10 in any mode, or IE11 in non-IE11 mode
  }

  var ua = window.navigator.userAgent
  if (ua.indexOf('Opera') > -1 || ua.indexOf('Presto') > -1) {
    return // Opera, which might pretend to be IE
  }
  var emulated = emulatedIEMajorVersion()
  if (emulated === null) {
    return // Not IE
  }
  var nonEmulated = actualNonEmulatedIEMajorVersion()

  if (emulated !== nonEmulated) {
    window.alert('WARNING: You appear to be using IE' + nonEmulated + ' in IE' + emulated + ' emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON\'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!')
  }

})();

$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }

})();

  
// silde-show-----------------------------------------------------------------------------------------------------
  var index=0;
  var f;
  $('.box-img').eq(index).fadeIn(0).siblings('.box-img').fadeOut(0);
  function dinshiqi(){
    f = setInterval(function(){
    $('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
    $('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
    if(index==$('.box-img').length-1){
      index=-1;
    }
    index++;
    }, 4000)
  }
  dinshiqi();
  $('.box-left').on('click', function(){
    clearInterval(f);
    if(index==0){
      index=$('.box-img').length
    }
    index--;
    $('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
    $('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
    dinshiqi();
  })
  $('.box-right').on('click', function(){
    clearInterval(f);
    if(index==$('.box-img').length-1){
      index=-1;
    }
    index++;
    $('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
    $('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
    dinshiqi();
  })
  $('.botton').on('click', function(){
    clearInterval(f);
    var indexx=$(this).index();
    index=indexx;
    $('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
    $('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
    dinshiqi();
  })

$(function(){
  var index=0;
  var f;
  $('.box-img').eq(index).fadeIn(0).siblings('.box-img').fadeOut(0);
  function dinshiqi(){
    f = setInterval(function(){
    $('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
    $('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
    if(index==$('.box-img').length-1){
      index=-1;
    }
    index++;
    }, 4000)
  }
  dinshiqi();
  $('.box-left').on('click', function(){
    clearInterval(f);
    if(index==0){
      index=$('.box-img').length
    }
    index--;
    $('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
    $('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
    dinshiqi();
  })
  $('.box-right').on('click', function(){
    clearInterval(f);
    if(index==$('.box-img').length-1){
      index=-1;
    }
    index++;
    $('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
    $('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
    dinshiqi();
  })
  $('.botton').on('click', function(){
    clearInterval(f);
    var indexx=$(this).index();
    index=indexx;
    $('.box-img').eq(index).fadeIn().siblings('.box-img').fadeOut();
    $('.botton').eq(index).css('background-color', '#fff').siblings('.botton').css('background-color', '#ccc');
    dinshiqi();
  })

  //导航栏---------------------------------------------------------------------
  $('.container ul li').on('click', function(){
    var index=$(this).index();
    $('.navbar-inverse .navbar-nav  .active  a').css('background-color', '#08080800').css('color', '#9d9d9d');
    $(this).css('background-color', '#080808').siblings(this).css('background-color', '#08080800');
    if(index==0){
      $('.container ul li a').eq(index).css('color', '#fff');
    }
  })

  //侧边栏-----------------------------------------------------------------------
  $('.row-offcanvas .row-2').hide();
  $('.list-group a').on('click', function(){
    var index=$(this).index();
    $(this).css('background-color', '#337AB7').css('color', '#fff').siblings(this).css('background-color', '#fff').css('color', '#555');
    if(index==0){
      $('.row-offcanvas .row').show();
      $('.row-offcanvas .row-2').hide();
    }
    if(index==1){
      $('.row-offcanvas .row').hide();
      $('.row-offcanvas .row-2').show();
    }
  })
  
  // 置顶栏--------------------------------------------------------------------
  $(window).scroll(function(){
    if($(window).scrollTop()>=500){
      $('.slider-bar').fadeIn();
    }
    else{
      $('.slider-bar').fadeOut();
    }
  })
})

