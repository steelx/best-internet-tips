/*
	Ajinkya Borade
	www.ajinkyaxjs.com
*/

(function($) {

	var settings = {
		
		// Parallax background effect?
			parallax: false,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.init({
		reset: 'full',
		containers: '100%',
		breakpoints: {
			global: { href: '/css/style.css', grid: { gutters: ['2.5em', 0] } },
			xlarge: { media: '(max-width: 1800px)', href: '/css/style-xlarge.css' },
			large: { media: '(max-width: 1280px)', href: '/css/style-large.css', grid: { gutters: ['2em', 0] } },
			medium: { media: '(max-width: 980px)', href: '/css/style-medium.css'},
			small: { media: '(max-width: 736px)', href: '/css/style-small.css', grid: { gutters: ['1.5em', 0], zoom: 2 }, viewport: { scalable: false } },
			xsmall: { media: '(max-width: 480px)', href: '/css/style-xsmall.css', grid: { zoom: 3 } }
		}
	});

	$(function() {
		
		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');
			
			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.isMobile) {
			
				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);
			
			}

		// Forms (IE<10).

			if (skel.vars.IEVersion < 10) {
				
				var $form = $('form');

				if ($form.length > 0) {

					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();

				}
			
			}
					
		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (skel.vars.browser == 'ie'
					||	skel.vars.isMobile){
						settings.parallax = false;
				}

				if (settings.parallax) {

					skel.change(function() {
						
						if (skel.isActive('medium')) {
							
							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');
						
						}
						else {
							
							$header.css('background-position', 'left 0px');
					
							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});
							
						}
					
					});
					
				}

		// Main Sections: Two.
		
			// Lightbox gallery.
				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (skel.isActive('small') ? 0 : 50)
				});


				//set Cookie
				var createCookie = function(name, value, days) {
				    var expires;
				    if (days) {
				        var date = new Date();
				        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				        expires = "; expires=" + date.toGMTString();
				    }
				    else {
				        expires = "";
				    }
				    document.cookie = name + "=" + value + expires + "; path=/";
				};

				function getCookie(c_name) {
				    if (document.cookie.length > 0) {
				        c_start = document.cookie.indexOf(c_name + "=");
				        if (c_start != -1) {
				            c_start = c_start + c_name.length + 1;
				            c_end = document.cookie.indexOf(";", c_start);
				            if (c_end == -1) {
				                c_end = document.cookie.length;
				            }
				            return unescape(document.cookie.substring(c_start, c_end));
				        }
				    }
				    return "";
				};

				if (getCookie('subscribed') == 'subscribed') {
					$('#emailme').remove();
				} else {
					$('#emailme').hide();
					$('#emailme .closeme').on('click', function (e) {
						e.preventDefault();
						$('#emailme').fadeOut(300);
					});
					//show emailme form
					setTimeout(function () {
						$('#emailme').fadeIn(300);
					}, 3000);

					//show again after 3mins
					setInterval(function () {
						$('#emailme').fadeIn(300);
					}, 180000);
					//on submit setCookie
					$('#emailme_form').submit(function(){
						createCookie('subscribed', 'subscribed', 20)
					});
				}

			});

})(jQuery);