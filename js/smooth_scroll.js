// @codekit-prepend "jquery-1.11.3.min.js"
// @codekit-prepend "lightgallery.min.js"
// @codekit-prepend "lg-thumbnail.min.js"
// @codekit-prepend "lg-fullscreen.min.js"

/* Smooth Scroll*/

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
});

/* Galery */

$(document).ready(function() {
        $("#lightgallery").lightGallery();
    });
