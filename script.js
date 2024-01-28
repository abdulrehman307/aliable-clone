document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {

      if (window.scrollY > 200) {
          document.getElementById('navbar_top').classList.add('fixed-top', 'shadow');
          // add padding top to show content behind navbar
           navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
          document.getElementById('navbar_top').style.backgroundColor = '#086447';
      } else {
          document.getElementById('navbar_top').classList.remove('fixed-top', 'shadow');
          // remove padding top from body
          document.body.style.paddingTop = '0';
          document.getElementById('navbar_top').style.backgroundColor = 'transparent';
      }
  });
});