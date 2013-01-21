			$(function(){
				$('.tombol_show').click(function(){
					$('.box-1').show(500);
				});
				$('.tombol_hide').click(function(){
					$('.box-1').hide(500);
				});
				$('.tombol_toggle').click(function(){
					$('.box-1').toggle(500);
				});
				
				// fade`
				$('.tombol_fadeIn').click(function(){
					$('.box-1').fadeIn(500);
				});
				$('.tombol_fadeOut').click(function(){
					$('.box-1').fadeOut(500);
				});
				$('.tombol_fadeTo').click(function(){
					opacity = $('#fade_value').val();
					$('.box-1').fadeTo(500,opacity);
				});
				
				// sliding
				$('.tombol_slideUp').click(function(){
					$('.box-1').slideUp(500);
				});
				$('.tombol_slideDown').click(function(){
					$('.box-1').slideDown(500);
				});
				$('.tombol_slideToggle').click(function(){
					$('.box-1').slideToggle(500);
				});
				
								
				
			});
			