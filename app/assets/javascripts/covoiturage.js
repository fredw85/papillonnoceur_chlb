function validateCovoiturageForm() {
	var validatorProp = $("#new_proposition_covoiturage").validate({
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
	var validatorDem = $("#new_demande_covoiturage").validate({
		debug:true,
		rules:{
			"demande_covoiturage[depart]": {
				required:true,
				maxlength: 30
			},
			"demande_covoiturage[name]":{
				required:true,
				maxlength: 30
			},
			"demande_covoiturage[email]":{
				required:true,
				email:true
			},
			"demande_covoiturage[telephone]":{
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



$(document).ready(function() {
	//toggle forms
	$("#proposer-button").click(function() {
		$("#proposer-form, #annuler-proposer-button").show();
		$(this).hide();
	});
	$("#annuler-proposer-button").click(function() {
		//$("#new_proposition_covoiturage")[0].reset();
		$("#proposer-form").hide();
		$("#proposer-button").show();
	})
	$("#demander-button").click(function() {
		$("#demander-form, #annuler-demander-button").show();
		$(this).hide();
	});
	$("#annuler-demander-button").click(function() {
		$("#demander-form").hide();
		$(this).hide();
		$("#demander-form").hide();
	})
	//validate forms
	if($("#new_proposition_covoiturage, #new_demande_covoiturage").length>1) {
		validateCovoiturageForm();
	}
	//reset forms
	$("form").bind('reset', function() {
		//$(this)
	});
});