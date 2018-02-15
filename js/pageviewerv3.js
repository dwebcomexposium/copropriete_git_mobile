/* Méthode en utilisant le plugin cookies */

jQuery( document ).ready(function( $ ) {
	function getSubdomain() {
		var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
		var urlParts = regexParse.exec(window.location.hostname);
		return window.location.hostname.replace(urlParts[0],'').slice(0, -1);
	}
	var subdo = getSubdomain();
	var visited = 0;
	if ($.cookie('visited')) {
		visited = $.cookie('visited');
	}
	if (visited == 0) {
		noty({
			layout: 'center',
			theme: 'relax',
			type: 'warning',
			text: '<header><img src="/theme/assises_securite_desktop/img/les_assises_2016_hp.png" alt="Assises de la sécurité | Refreshingly different"><div class="lang-fr"><span></span></div><div class="lang-en"><span></span></div></header><div class="content"><div class="content-language"><span class="language-switcher french active" data-lang="fr"><img src="/theme/vinovision_desktop_2018/img/surcharge/modalbox/french.png" alt="">Français</span><span class="language-switcher english" data-lang="en"><img src="/theme/vinovision_desktop_2018/img/surcharge/modalbox/english.png" alt="">English</span></div><p class="lang-fr"><span class="title">Chers participants</span><br><br><br>Des interruptions de service et ralentissements ont lieu sur le portail des Assises, en raison de problèmes techniques sur le réseau de notre hébergeur.<br><br>La situation est en cours de résolution et ne perturbera pas le bon déroulement de la manifestation<br><br>Notre équipe des Assises reste naturellement à votre disposition<br><br>Merci de votre compréhension.</p><p class="lang-en"><span class="title">Dear participants</span><br><br><br>Service interruptions and slowdowns take place on les Assises portal, due to a technical problem on the network of our host.<br><br>The situation is being resolved and will not disrupt the smooth running of the event<br><br>Les Assises team is naturally at your disposal<br><br>Thank you for your understanding.</p></div>',
			dismissQueue: true, 
			animation: {
				open: {height: 'toggle'},
				close: {opacity: 0},
				easing: 'swing',
				speed: 500 
			},
			modal: true,
			timeout: 0,
                        buttons: 
			[
				{
					text: '<span class="lang-fr">OK</span><span class="lang-en">OK</span>', onClick: function($noty) {
					// this = button element
					// $noty = $noty element
					$noty.close();
					//noty({text: 'Merci pour votre compréhension', type: 'success'});
					}
				}
			]
		 });     
	}
	
	$('.content-language .language-switcher').on('click', function() {
		var lang = 'lang-' + $(this).attr('data-lang');
		
		$('.content-language .language-switcher').removeClass('active');
		$(this).addClass('active');
		$('.lang-fr, .lang-en').hide();
		$('.' + lang).show();
	});

	visited++;
	var date = new Date();
	date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
	$.cookie('visited', visited, {expires: 1, path: '/'});
});