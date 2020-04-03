// prettyPhoto
$("a[rel^='prettyPhoto[gallery1]']").prettyPhoto();

// //isotope gallery
// $(function () {
//   var $isotope = $(".isotope"),
//     $itemElement = '.grid-item',
//     $filters = $('.isotope-filters');
//
//   $isotope.isotope({
//     resizable: true,
//     itemSelector: $itemElement,
//     masonry: {
//       gutterWidth: 10
//     }
//   });
//   $filters.on('click', 'button', function () {
//     var $val = $(this).attr('data-filter');
//     $isotope.isotope({filter: $val});
//     $filters.find('.active').removeClass('active');
//     $(this).addClass('active');
//   });
//
// });
// //masonry (no use)
// $(function () {
//   setTimeout(function () {
//     var $masonry = $('.masonry-main .masonry'),
//       $itemElement = '.masonry-main .masonry-item',
//       $filters = $('.masonry-main .isotope-filters');
//
//     $masonry.isotope({
//       resizable: true,
//       percentPosition: true,
//       itemSelector: $itemElement,
//       masonry: {
//         gutterWidth: 0
//       }
//     });
//     // bind filter button click
//     $filters.on('click', 'button', function () {
//       var filterValue = $(this).attr('data-filter');
//       $masonry.isotope({filter: filterValue});
//     });
//
//     $filters.each(function (i, buttonGroup) {
//       var $buttonGroup = $(buttonGroup);
//       $buttonGroup.on('click', 'button', function () {
//         $buttonGroup.find('.active').removeClass('active');
//         $(this).addClass('active');
//       });
//     });
//
//   }, 100);
// });

function isotopeGallery() {
  var $isotope = $(".isotope"),
    $itemElement = '.grid-item',
    $filters = $('.isotope-filters');

  $isotope.isotope({
    resizable: true,
    itemSelector: $itemElement,
    masonry: {
      gutterWidth: 10
    }
  });
  $filters.on('click', 'button', function () {
    var $val = $(this).attr('data-filter');
    $isotope.isotope({filter: $val});
    $filters.find('.active').removeClass('active');
    $(this).addClass('active');
  });

}

function masonry() {
  setTimeout(function () {
    var $masonry = $('.masonry-main .masonry'),
      $itemElement = '.masonry-main .masonry-item',
      $filters = $('.masonry-main .isotope-filters');

    $masonry.isotope({
      resizable: true,
      percentPosition: true,
      itemSelector: $itemElement,
      masonry: {
        gutterWidth: 0
      }
    });
    // bind filter button click
    $filters.on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $masonry.isotope({filter: filterValue});
    });

    $filters.each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });

  }, 100);
}
