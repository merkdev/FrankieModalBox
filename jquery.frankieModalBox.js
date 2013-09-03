/**
 * @package     : Super Simple Modal Box
 * @description : A very simple modal/light box jquery plugin for your beautiful projects. Improve your website and visuality.
 * @author      : Kamer DINC - http://kamerdinc.com
 * @copyright   : licensed under the MIT and GPL
 * @version     : 1.0
 * @source      : http://kamerdinc.com/frankiemodalbox
 * @notes       : will be updated.
 * @alias       : Frankie
 */

(function($){

    $.fn.extend({

        frankieModal: function(options) {

            var defaults = {
                closeButton: null
            }

            var overlay = $('<div id="__frankie_overlay"></div>');
            overlay.css({
                'position' : 'fixed',
                'z-index' : 100,
                'top' : '0px',
                'left' : '0px',
                'height' : '100%',
                'width' : '100%',
                'background' : '#000',
                'display' : 'none',
                'background' : 'rgba(0,0,0,0.65)',
                'box-shadow' : 'inset 0 0 200px 50px rgba(0,0,0,.5)',
                '-moz-box-shadow' : 'inset 0 0 200px 50px rgba(0,0,0,.5)',
                '-webkit-box-shadow' : 'inset 0 0 200px 50px rgba(0,0,0,.5)',
                'filter' : 'progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=\'#8c000000\',endColorstr=\'#8c000000\')'
            });

            $('body').append(overlay);

            options = $.extend(defaults, options);

            return this.each(function() {

                var o = options;

                $(this).click(function(e) {

                    var modalId = $(this).attr('href');

    				$('#__frankie_overlay').click(function() {
                         closeModal(modalId);
                    });

                    $(o.closeButton).click(function() {
                         closeModal(modalId);
                    });

                  	var modal_height = $(modalId).outerHeight();
            	  	var modal_width = $(modalId).outerWidth();

            		$('#__frankie_overlay').fadeIn('fast');

            		$(modalId).css({
            			'display' : 'block',
            			'position' : 'fixed',
            			'opacity' : 0,
            			'z-index': 99999,
            			'left' : 50 + '%',
            			'margin-left' : - (modal_width/2) + 'px',
            			'top' : 50 + '%',
                        'margin-top' : - (modal_height/2) + 'px'
            		});

            		$(modalId).fadeTo(200,1);

                    e.preventDefault();

              	});

            });

			function closeModal(modalId){

        		$('#__frankie_overlay').fadeOut(200);

        		$(modalId).css({'display' : 'none'});

			}

        }
    });

})(jQuery);
