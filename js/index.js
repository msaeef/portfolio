$(window).on('load', function(){
			var aside = $('aside');
				asideH = aside.height(),
				article = $('article'),
				articleH = article.height();

			if ( asideH > articleH ) {
				article.css('height', asideH + 68);
			} else {
				aside.css('height', articleH);
			}

			aside.delay(1000).animate({
				'opacity': '1'
			});
			article.delay(2000).animate({
				'width': '600px',
				'padding': '30px 20px 30px 35px'
			}, 'fast');
			
			var navLi = $('nav').children('ul').children('li');

			navLi.on('click', function(){
				var nav = $(this).data('nav'),
					skills = $('article').children('div').children('ul').children('li').children('div').css('width', '0');

				if ( $(this).hasClass('active') ) {
					return
				}

				if ( nav === '02') {
					skills.each( function(i){
						var color = $(this).data('color'),
							porcent = $(this).data('porcent');
						$(this).delay(i*500).addClass(color);
						$(this).animate({
							'width': porcent * 5
						}, 1000);
					});
				}

				$(this).siblings('li').removeClass('active').end().addClass('active');
				$('#'+nav).siblings('div').fadeOut().end().delay(600).fadeIn(1000);
			});

			setTimeout(function(){
				navLi.eq(0).delay(1000).trigger('click');
			}, 3000);

		});