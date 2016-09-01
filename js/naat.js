$(function(){
	//pinta los cuadritos de los extremos (si existen)
	$('header nav a').each(function() {
		if ($(this).prop('href') == window.location.href) {
		  $(this).parent().addClass('active');
		}
	});
	console.log(window.location.href)

	if ( $('.campo').length ){
		$('.campo').append('<i class="tl"/><i class="tr"/><i class="br"/><i class="bl"/>');
	}

	if ( $('nav.main').length ){
		$('nav.main a u').append('<i class="tl"/><i class="tr"/><i class="br"/><i class="bl"/>');
	}

	//sube el label cuando damos click en input
	$('.registro-usuario input, .login input').focus(function() {
		$(this).parents('.campo').addClass('lleno');
  });
	//si lo dejó vacío le quita la clase
  $('.registro-usuario input, .login input').blur(function() {
		if( $(this).val().length === 0 ) {
			$(this).parents('.campo').removeClass('lleno');
		}
  });

	//hace que los textarea crezcan con forme a su contenido
	if ( $('.registro-iniciativa').length ){
		autosize($('.lista textarea'));
	}

	//crea un nuevo paso y le palicala función anterior
	$('.agregar').on('click',function(){
		$('.lista ol').append('<li><textarea data-autoresize></textarea></li>');
	});

	//
	$('.categoria input, .categoria select').on('click', function (evt) {
		$('.categoria label').removeAttr('class');
		$(this).parent('label').addClass('checked');
	});

	//limita a 3 el número de indicadores 
	$('.indicadores input, .calificar input').on('click', function (evt) {
		if ($('.indicadores input:checked').length > 3) {
			this.checked = false;
		} else {
			$(this).parent('.campo').toggleClass('checked');
		}
	});

	//le asigna el tamaño al área para scrollear
	if ( $('.scroll-content').length ){
		var total = $(window).height(),
		top = $('.scroll-content').offset().top,
		outer = top + 92,
		inner = total-outer;
		$('.scroll-content').height(inner);
	}


	//colorea las estrellas con la calificación
	$('.rating').each(function(){
		var item = $(this);
		item.rateYo({
			starWidth: '12px',
			spacing: '4px',
			ratedFill: '#ED1941',
			rating: item.data('rating')
		});
	});

	$('.rate').each(function(){
		var item = $(this);
		item.rateYo({
			starWidth: '20px',
			spacing: '4px',
			normalFill: "rgba(250,250,250,0.5)",
			ratedFill: '#fafafa'
		});
	});

});