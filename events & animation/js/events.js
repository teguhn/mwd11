			$(function(){
				// click
				// dblclick
				//
				
				$('.box-2').click(function(){
					alert('Ngeklik box 2!');
				});
				
				$('.box-3').click(function(){
					
					// this clicked element
					$(this).css('backgroundColor', '#8C0');
				});
				
				// doubleclick
				$('.box-4').dblclick(function(){
					
					// this clicked element
					$(this).text('doubleclicked!');
				});
				
				// mouseenter, when the mouse entering 
				$('.box-5').mouseenter(function(){					
					// this clicked element
					$(this).css('backgroundColor', '#F90');
				})
					.mouseleave(function(){ 
						// mouse leave: event ketika mousenya keluar dari elemen
						$(this).css('backgroundColor', '#09C');
					});
				
				// hover, menerima 2 parameter sekaligus... : shortcut untuk yang diatas...
				$('.box-6').hover(function(){
					// this clicked element
						$(this).text('masuk');
					}, function(){
						$(this).text('keluar');
					});
				
				// box 7 & 8,, keur animasi we, tp engke...
				// ready event.
				
				
				$('.input-1').focus(function(){
					$(this).val('hello!');
				});
				
				$('.input-2').blur(function(){
					alert('anda meninggalkan input 2');
				});
				
				$('.input-3').change(function(){
					alert('anda mengganti nilai input 3')
				});
				
				$('.input-4').keydown(function(){
					alert('anda menekan keyboard di input 4...');
				});
				
				
				// latihan: ngecek isi value...
				$('.input-6').focus(function(){
					if ($(this).val() == "email anda..."){
						$(this).val('');
					}
				});
				
				$('.input-6').blur(function(){
					if ($(this).val() == ""){
						$(this).val('email anda...');
					}
				});
			
				$('.input-7').keypress(function(){

					length = ($(this).val()).length;
					
					if (length > 0 && length <=4 )
					{
						strength = 'lemah';
					} 
					else if ( length > 5 && length <= 8)
					{
						strength = 'biasa';
					}
					else if (length > 8)
					{
						strength = 'kuat';
					} 
					else 
					{
						strength = '';
					}
					
					$('.strength').removeClass('short medium long').addClass(strength).html(strength);
				});
				
			});
			
			
			/* function log(msg){
				$('#log').append('<li>'+msg+'</li>');
			} */
			