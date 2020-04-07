/*---- Table of contents ----

:- popover
:- tooltip
:- select
:- accordions
:- prettyhpoto
:- carousel
:-

---- End table content ----*/

$(document).ready(function () {
  $("#myModal").modal('show');
});

//popovers
$(function () {
  $('[data-toggle="popover"]').popover()
});
//tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//accordian start
$(function () {
  $('.tab-wrapper.v1 .item .tab-btn a').click(function (e) {
    e.preventDefault();

    var _item = $(this).closest('.item');
    var _hasClass = 'selected';
    var _all = $('.tab-wrapper.v1 .item');

    if (_item.hasClass(_hasClass)) {
      _item.find('.tab-btn a em').removeClass('mdi-minus').addClass('mdi-plus')
        .closest('.item')
        .find('.tab-content')
        .stop()
        .slideUp(400, function () {
          _item.removeClass('selected');
        });

    } else {
      _all.find('.tab-btn a em').removeClass('mdi-minus').addClass('mdi-plus')
        .closest('.item')
        .find('.tab-content')
        .stop()
        .slideUp(400, function () {
          _all.removeClass('selected');
        });

      _item.find('.tab-btn a em').removeClass('mdi-plus').addClass('mdi-minus')
        .closest('.item')
        .find('.tab-content')
        .stop()
        .slideDown(400, function () {
          _item.addClass('selected');
        });
    }
  });

  $('.tab-wrapper.v2 .tab-btn a').click(function (e) {
    e.preventDefault();

    var _this = $(this);
    var _hasClass = 'selected';
    var _category = _this.data('category');
    var _content = $('.tab-wrapper.v2 .tab-content .item');
    var _all = $('.tab-wrapper.v2 .tab-btn a');

    if (_this.hasClass(_hasClass)) {

    } else {
      _all.removeClass(_hasClass).find('em').removeClass('mdi-minus').addClass('mdi-plus');
      _this.addClass(_hasClass).find('em').removeClass('mdi-plus').addClass('mdi-minus');

      _content.each(function () {
        var _value = $(this).data('value');

        $(this).removeClass(_hasClass).stop().hide();

        if (_value == _category) {
          $(this).stop()
            .fadeIn('slow', function () {
              $(this).addClass(_hasClass);
            });
        }
      });
    }

  });
});
//accordian end

$(document).ready(function () {
  $('select').niceSelect();
});


//nice select
(function ($) {
  $('textonly').fancySelect({
    showText: true,
    showImages: false
  });
});

//select
(function ($) {
  $.fn.niceSelect = function (method) {

    // Methods
    if (typeof method == 'string') {
      if (method == 'update') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');

          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);

            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');

          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });
        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {
        console.log('Method "' + method + '" does not exist.')
      }
      return this;
    }

    // Hide native select
    this.hide();

    // Create custom markup
    this.each(function () {
      var $select = $(this);

      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });

    function create_nice_select($select) {
      $select.after($('<div></div>')
        .addClass('nice-select')
        .addClass($select.attr('class') || '')
        .addClass($select.attr('disabled') ? 'disabled' : '')
        .attr('tabindex', $select.attr('disabled') ? null : '0')
        .html('<span class="current"></span><ul class="list"></ul>')
      );

      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');

      $dropdown.find('.current').html($selected.data('display') || $selected.text());

      $options.each(function (i) {
        var $option = $(this);
        var display = $option.data('display');

        $dropdown.find('ul').append($('<li></li>')
          .attr('data-value', $option.val())
          .attr('data-display', (display || null))
          .addClass('option' +
            ($option.is(':selected') ? ' selected' : '') +
            ($option.is(':disabled') ? ' disabled' : ''))
          .html($option.text())
        );
      });
    }

    /* Event listeners */

    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');

    // Open/close
    $(document).on('click.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);

      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');

      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    });

    // Close when clicking outside
    $(document).on('click.nice_select', function (event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');
      }
    });

    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');

      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');

      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text);

      $dropdown.prev('select').val($option.data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }
        return false;
        // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();
          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }
        return false;
        // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }
        return false;
        // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        }
        // Tab
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    });

    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }

    return this;
  };

}(jQuery));
//end select

//progress bar
(function ($) {
  'use strict';
  $(function (i, elem) {
    var $elem = $(this),
      percent = $elem.attr('data-percent') || "100",
      delay = $elem.attr('data-delay') || "100",
      type = $elem.attr('data-type') || "%";

    if (!$elem.hasClass('progress-animated')) {
      $elem.css({
        'width': '0%'
      });
    }
    var progressBarRun = function () {
      $elem.animate({
        'width': percent + '%'
      }, 'easeInOutCirc').addClass('progress-animated');

      $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
    };

    $(elem).appear(function () {
      setTimeout(function () {
        progressBarRun();
      }, delay);
    });
  });
})(jQuery); // End of use strict

// Counter
(function ($) {
  'use strict';
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
})(jQuery); // End of use strict


//audio and video
(function ($) {
  'use strict';
  $(function () {
    $('audio,video').mediaelementplayer();
  });
})(jQuery); // End of use strict
