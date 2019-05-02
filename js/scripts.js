/* СКРИПТ ОТПРАВКИ ДАННЫХ С ФОРМ */
jQuery(document).ready(function() {
    $("#about_us_and_callback_form").submit(function() {
        var o = $(this);
        return o.children().hide(), o.append('<h2 class="submit-sending">Отправка данных...</h2>'), $.ajax({
            type: "POST",
            url: "/send.php",
            data: o.serialize()
        }).done(function() {
            $(this).find("input").val(""), o.trigger("reset"), o.children().hide(), o.append('<h2 class="submit-success">Ваша заявка успешно отправлена!<br> Ожидайте, мы Вам перезвоним!</h2>'), setTimeout(function() {}, 500)
        }), !1
    })
});



/* СКРИПТ TO-NEXT-SECTION */
$(document).ready(function() {
    $(".to_next_section_wrapper").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 900);
    });
}); 



/* СКРИПТ ПЛАВНОГО ПЕРЕХОДА К СЕКЦИЯМ С МЕНЮ */
$(document).ready(function(){
	$(".main_menu li").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 900);
	});
});




