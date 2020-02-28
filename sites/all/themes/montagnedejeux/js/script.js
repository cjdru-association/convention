/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      $('#edit-hs-wrapper, #edit-hd-wrapper').hide();
      $('#edit-j').change(function(){
        switch ($(this).val()) {
          case "0":
            $('#edit-hs-wrapper').show();
            $('#edit-hd-wrapper').hide();
            break;
          case "1":
            $('#edit-hd-wrapper').show();
            $('#edit-hs-wrapper').hide();
            break;
          default:
            $('#edit-hs-wrapper, #edit-hd-wrapper').hide();
            break;
        }
        $("#edit-hs-wrapper input:checkbox, #edit-hd-wrapper input:checkbox").removeAttr('checked');
      });
    }
  };
}(jQuery));
