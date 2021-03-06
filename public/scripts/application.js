// Application

$(function () {

	// Browser detection
	$.browserDetection({
	  addClasses: true
	});

	// Tooltip
  $('[data-toggle="tooltip"]').tooltip();

	// Popover
  $('[data-toggle="popover"]').popover();
	$('[data-toggle="popover"]').click(function() {
		$('.popover-title').append('<button type="button" class="close"><i class="fa fa-times-circle"></i></button>');
		$('.popover .close').click(function() {
			$('.popover').popover('hide');
		});
	});

	// ProgressJS
	$('.progressjs-example').click(function() {
		progressJs().start().autoIncrease(1, 100);
		setTimeout(function() {
			progressJs().end();
		}, 5000);
	});

	// Front-page
	$('.nav-starter-template').click(function() {
		$('.front-page').fadeOut(200);
		window.scrollTo(0,0);
		$('body').removeClass('body-front-page');
		$('.nav-start').removeClass('active');
		$('.nav-starter-template').addClass('active');
	});
	$('.nav-start').click(function() {
		$('.front-page').fadeIn(200);
		window.scrollTo(0,0);
		$('body').addClass('body-front-page');
		$('.nav-start').addClass('active');
		$('.nav-starter-template').removeClass('active');
	});


	// Datetimepicker
	$('.datetimepicker').datetimepicker({
		format: 'YYYY-MM-DD',
		icons:
		{
			time: 'fa fa-clock-o',
			date: 'fa fa-calendar',
			up: 'fa fa-angle-up fa-lg',
			down: 'fa fa-angle-down fa-lg',
			previous: 'fa fa-angle-left fa-lg',
			next: 'fa fa-angle-right fa-lg',
			today: 'fa fa-calendar-o',
			clear: 'fa fa-times-circle',
			close: 'fa fa-times-circle'
		}
	});

	// Typeahead.js
	$(function () {
		var substringMatcher = function(strs) {
			return function findMatches(q, cb) {
				var matches, substringRegex;
				matches = [];
				substrRegex = new RegExp(q, 'i');
				$.each(strs, function(i, str) {
					if (substrRegex.test(str)) {
						matches.push(str);
					}
				});
				cb(matches);
			};
		};
		var demoData = ["Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Angola","Antarctica","Argentina","American Samoa","Austria","Australia","Aruba","Åland","Azerbaijan","Bosnia and Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Saint Barthélemy","Bermuda","Brunei","Bolivia","Bonaire","Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos [Keeling] Islands","Congo","Central African Republic","Republic of the Congo","Switzerland","Ivory Coast","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Curacao","Christmas Island","Cyprus","Czechia","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji","Falkland Islands","Micronesia","Faroe Islands","France","Gabon","United Kingdom","Grenada","Georgia","French Guiana","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Guadeloupe","Equatorial Guinea","Greece","South Georgia and the South Sandwich Islands","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","North Korea","South Korea","Kuwait","Cayman Islands","Kazakhstan","Laos","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova","Montenegro","Saint Martin","Madagascar","Marshall Islands","Macedonia","Mali","Myanmar [Burma]","Mongolia","Macao","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn Islands","Puerto Rico","Palestine","Portugal","Palau","Paraguay","Qatar","Réunion","Romania","Serbia","Russia","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","Saint Helena","Slovenia","Svalbard and Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","South Sudan","São Tomé and Príncipe","El Salvador","Sint Maarten","Syria","Swaziland","Turks and Caicos Islands","Chad","French Southern Territories","Togo","Thailand","Tajikistan","Tokelau","East Timor","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad and Tobago","Tuvalu","Taiwan","Tanzania","Ukraine","Uganda","U.S. Minor Outlying Islands","United States","Uruguay","Uzbekistan","Vatican City","Saint Vincent and the Grenadines","Venezuela","British Virgin Islands","U.S. Virgin Islands","Vietnam","Vanuatu","Wallis and Futuna","Samoa","Kosovo","Yemen","Mayotte","South Africa","Zambia","Zimbabwe"];
		$('#demo-typeahead .typeahead').typeahead({
			hint: true,
			highlight: true,
			minLength: 1
		},
		{
			name: 'demoData',
			source: substringMatcher(demoData)
		});
	});

});