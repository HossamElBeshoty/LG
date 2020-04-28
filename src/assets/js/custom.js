//Initialize nice select
// $(function () {
//       var owlslider = jQuery("div.owl-carousel");
//         owlslider.each(function () {
//         var $this = $(this),
//               $items = ($this.data('items')) ? $this.data('items') : 1,
//               $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
//               $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
//               $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
//               $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
//               $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
//               $autowdt = ($this.data('autoWidth')) ? $this.data('autoWidth') : true,
//               $space = ($this.attr('data-space')) ? $this.data('space') : 20;
//
//               $(this).owlCarousel({
//                   loop: $loop,
//                   items: $items,
//                   responsive: {
//                     0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
//                     480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
//                     768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
//                     980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
//                     1200:{items: $items}
//                   },
//                   dots: $navdots,
//                   autoHeight:$autohgt,
//                   margin:$space,
//                   nav: $navarrow,
//                   navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
//                   autoplay: $autoplay,
//                   autoplayHoverPause: true,
//               });
//
//        });
//  });
function owlCarousel() {
  var owlslider = jQuery("div.owl-carousel");
  owlslider.each(function () {
    var $this = $(this),
      $items = ($this.data('items')) ? $this.data('items') : 1,
      $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
      $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
      $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
      $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
      $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
      $autowdt = ($this.data('autoWidth')) ? $this.data('autoWidth') : true,
      $space = ($this.attr('data-space')) ? $this.data('space') : 20;
    if (localStorage.getItem('language') === 'ar'){
      $(this).owlCarousel({
        loop: $loop,
        items: $items,
        rtl: false,
        responsive: {
          0: {
            items: $this.data('xx-items') ? $this.data('xx-items') : 1
          },
          480: {
            items: $this.data('xs-items') ? $this.data('xs-items') : 1
          },
          768: {
            items: $this.data('sm-items') ? $this.data('sm-items') : 2
          },
          980: {
            items: $this.data('md-items') ? $this.data('md-items') : 3
          },
          1200: {
            items: $items
          }
        },
        dots: $navdots,
        autoHeight: $autohgt,
        margin: $space,
        nav: $navarrow,
        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
        autoplay: $autoplay,
        autoplayHoverPause: true,
      });
    } else {
      $(this).owlCarousel({
        loop: $loop,
        items: $items,
        rtl: true,
        responsive: {
          0: {
            items: $this.data('xx-items') ? $this.data('xx-items') : 1
          },
          480: {
            items: $this.data('xs-items') ? $this.data('xs-items') : 1
          },
          768: {
            items: $this.data('sm-items') ? $this.data('sm-items') : 2
          },
          980: {
            items: $this.data('md-items') ? $this.data('md-items') : 3
          },
          1200: {
            items: $items
          }
        },
        dots: $navdots,
        autoHeight: $autohgt,
        margin: $space,
        nav: $navarrow,
        navText: ["<i class='ti-arrow-right'></i>", "<i class='ti-arrow-left'></i>"],
        autoplay: $autoplay,
        autoplayHoverPause: true,
      });
    }
  });
}


function isotopeProduct() {
  // $('.product-item').isotope({
  //   itemSelector: '.item',
  //   layoutMode: 'fitRows'
  // });
  // $('.product-menu-tabs ul li').click(function () {
  //   $('.product-menu-tabs ul li').removeClass('active');
  //   $(this).addClass('active');
  //   var selector = $(this).attr('data-filter');
  //   $('.product-item').isotope({
  //     filter: selector
  //   });
  //   return false
  // });




  const grid = $('.money-counting-item');

    // grid.isotope({
    //   itemSelector: '.item',
    //   layoutMode: 'fitRows',
    // });
    $('.tab-content ul li').click(function() {
      $('.tab-content ul li').removeClass('activeIsotope');
      $(this).addClass('activeIsotope');
      const selector = $(this).attr('data-filter');
      grid.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
        filter: selector
      });
      return false;
    });

}
