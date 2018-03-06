// var password = $('#password'),
//     text = $('#text'),
//     enc = $('#encrypt')
//     , encrypt = function() {
//         enc.val(Tea.encrypt(text.val(), password.val()))
//     }, decrypt = function() {
//         text.val(Tea.decrypt(enc.val(), password.val()))
//     };
// $('#text-label').click(decrypt)
// $('#encrypt-label').click(encrypt)
// text.on('blur', encrypt)
// enc.on('blur', decrypt);
window.password = '0'

window.magic = function()
{
	var password = '07111996';
	var text = "Привет, я это ты из будущего. Будь в центре метро Площадь Революции в 16:00 6ого числа\n\nОтправляясь в путешествие, не забудь тщательно проверить все и всех ли ты взял. Ночью может быть либо страшно, либо волшебно, в зависимости от компании. Даже самые странные люди могут когда-нибудь пригодиться.\nНу вот, все же не все..но с другой стороны, почему обязательно всё должно быть так, как ты привык? Придется идти наугад. По правде сказать, я никогда не верил компасам. Тем, кто чувствует правильный путь, они только мешают."
	var encrypt = Tea.encrypt(text, password);
	$('#encrypt').val(encrypt);
	var decrypt = Tea.decrypt(encrypt, window.password);
	// var opacity = window.password/password;
	// if(opacity>1) opacity = 1/opacity;
	$('.letter').text(decrypt);
	// $('.letter').css('color', "rgba(91, 62, 33, "+opacity+")")
	var color = (window.password/6).toString(16);
	while (color.length < 6) { color = "0" + color; }

	// $('.letter').css('color', '#'+color)
	$('body').css('background', '#'+color)
	// console.log(opacity);
};

$( document ).ready(function() {
	// $('input').change(magic);
	// $('input').keypress(magic);
	// $('input').click(magic);
	// setTimeout(magic, 500);
	magic();

	$("#lock").makeLock()
});