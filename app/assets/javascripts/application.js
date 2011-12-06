// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery.validate
//= require messages_fr
//= require_tree .

function validateCovoiturageForm() {
	var validator = $("#new_proposition_covoiturage").validate({
		debug:true,
		rules:{
			"proposition_covoiturage[depart]": {
				required:true,
				maxlength: 30
			},
			"proposition_covoiturage[places]": {
				required:true,
				range: [1,7]
			},
			"proposition_covoiturage[name]":{
				required:true,
				maxlength: 30
			},
			"proposition_covoiturage[email]":{
				required:true,
				email:true
			},
			"proposition_covoiturage[telephone]":{
				required:true,
				minlength:9,
				maxlength:15
			}
		},
		errorElement: "span",
		errorClass: "invalid",
		successClass: "valid",
		errorPlacement: function(error,element) {
			error.addClass("help-inline");
			error.insertAfter(element);
		},
		highlight: function(element,errorClass) {
			$(element).parent(".input").parent(".clearfix").removeClass("success");
			$(element).parent(".input").parent(".clearfix").addClass("error");
		},
		success: function(succ) {
			succ.html("ok");

		},
		unhighlight: function(element,errorClass) {
			$(element).parent(".input").parent(".clearfix").removeClass("error");
			$(element).parent(".input").parent(".clearfix").addClass("success");
		}
	});
	
}

function showForm(div) {
	div.show();
}
function hideForm(div) {
	div.hide();
}

$(document).ready(function() {
	$("#proposer-form").hide();
	validateCovoiturageForm();
});