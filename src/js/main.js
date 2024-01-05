// console.log('Hello from index.js');

import '../scss/main.scss';

import $ from 'jquery';
import * as bootstrap from 'bootstrap';

import 'bootstrap/dist/js/bootstrap.js';
import AOS from 'aos';

// Add Animation
AOS.init({
    duration: 1200,
})

// Hide Menu on Scroll

var lastScrollTop = 0;
window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st > lastScrollTop){
       document.getElementById("header").style.top = "-100%";
   } else {
      document.getElementById("header").style.top = "0";
   }
   lastScrollTop = st;
}, false);

  // popup
    document.getElementById('openPopup').addEventListener('click', function() {
        toggleContent();
      });
      
      function toggleContent() {
        var contentElement = document.getElementById('popupContainer');
        if (contentElement.classList.contains('show')) {
            contentElement.classList.remove('show');
            contentElement.classList.add('hide');
          } else {
            contentElement.classList.remove('hide');
            contentElement.classList.add('show');
          }
        }
        document.getElementById('close-btn').addEventListener('click', function() {
            var div = document.getElementById('popupContainer');
            div.classList.remove('show');
        });

    // Menu

    document.getElementById('navbartoggle').addEventListener('click', function() {
        var movingBlock = document.getElementById('movingBlock');
        var icon = document.querySelector('.navbartoggler');

        movingBlock.classList.toggle('active');
        icon.classList.toggle('close');
      });
      