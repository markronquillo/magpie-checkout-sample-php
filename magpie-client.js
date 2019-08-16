(function() {
	var icon = "https://s3-us-west-2.amazonaws.com/client-objects/sample-app/red-store.jpg";
	var name = "My E-Commerce Store";

	var currentAmount = 0;

	// Instantiate
	var app = MagpieCheckout({
		// The publishable key from the Magpie dashboard
		key: "pk_test_HCZZXNHxaTLMg3aL2kWg3w",
		token: function (result) {
			// you can include any data here
			// ideally, we shouldn't pass the amount here
			// we just pass the item and map the item to its actual
			// value in the backend
			result.amount = currentAmount
			$.ajax({
				url: '/ajax-backend.php',
				method: 'POST',
				data: result,
				success: function(response) {
					console.log(response);
					var data = JSON.parse(response);
					alert('Successfully paid ' + currentAmount / 100);
				}
			});
		}
	});

	// Must correspond to the id of the link in index.php
	$("#not_all").on("click", function(e) {
		e.preventDefault();

		currentAmount = 49900;
		app.open({
			icon: 'https://s3-us-west-2.amazonaws.com/client-objects/sample-app/red-store.jpg',
			name: 'My E-Commerce Store',
			currency: 'PHP',
			amount: currentAmount,
			description: 'Basic plan'
		});
	})

	$("#not_button").on("click", function(e) {
		e.preventDefault();
		currentAmount = 99900;
		app.open({
			icon: 'https://s3-us-west-2.amazonaws.com/client-objects/sample-app/red-store.jpg',
			name: 'My E-Commerce Store',
			currency: 'USD',
			amount: currentAmount,
			description: 'Standard Plan',
			payLabel: 'Subscribe'
		});
	})

	$("#start_pkg").on("click", function(e) {
		e.preventDefault();

		currentAmount = 1900
		app.open({
			icon: 'https://s3-us-west-2.amazonaws.com/client-objects/sample-app/cloud-icon.png',
			name: 'My Cloud Service',
			currency: 'USD',
			amount: currentAmount,
			description: 'Start Package (8GB/4U/15GB)',
			payLabel: 'Subscribe'
		});
	})

	$("#business_pkg").on("click", function(e) {
		e.preventDefault();
		currentAmount = 2900;
		app.open({
			icon: 'https://s3-us-west-2.amazonaws.com/client-objects/sample-app/cloud-icon.png',
			name: 'My Cloud Service',
			currency: 'USD',
			amount: currentAmount,
			description: 'Business Package (16GB/10U/20GB)',
			payLabel: 'Subscribe'
		});
	})

	$("#premium_pkg").on("click", function(e) {
		e.preventDefault();
		currentAmount = 3900
		app.open({
			icon: 'https://s3-us-west-2.amazonaws.com/client-objects/sample-app/cloud-icon.png',
			name: 'My Cloud Service',
			currency: 'USD',
			amount: currentAmount,
			description: 'Premium Package (32GB/20U/25GB)',
			payLabel: 'Subscribe'
		});
	})

	$("#ultimate_pkg").on("click", function(e) {
		e.preventDefault();
		currentAmount = 2900;
		app.open({
			icon: 'https://s3-us-west-2.amazonaws.com/client-objects/sample-app/cloud-icon.png',
			name: 'My Cloud Service',
			currency: 'USD',
			amount: currentAmount,
			description: 'Ultimate Package (64GB/Unlimited/35GB)',
			payLabel: 'Subscribe'
		});
	})

	$("#ex_shipping").on("click", function(e) {
		e.preventDefault();
		currentAmount = 235000;
		app.open({
			currency: 'PHP',
			amount: currentAmount,
			description: 'A Beautiful Birthday Gift',
			payLabel: 'Pay',
			shipping: true,
			billing: true
		});
	})

	$("#ex_billing").on("click", function(e) {
		e.preventDefault();
		var icon2 = "https://s3-us-west-2.amazonaws.com/client-objects/sample-app/condo-icon.jpg";
		currentAmount = 1250000;
		app.open({
			currency: 'PHP',
			amount: currentAmount,
			description: 'One Month Rent (Flair Unit N2602)',
			icon: icon,
			payLabel: 'Pay',
			billing: true
		});
	})

	$("#ex_donate").on("click", function(e) {
		e.preventDefault();
		currentAmount = 500000;
		app.open({
			currency: 'PHP',
			amount: currentAmount,
			description: 'Give to Childre\'s Crusade',
			payLabel: 'Donate',
			allowRememberMe: false
		});
	})

	$('#email_form_btn').on('click', function(e) {
		e.preventDefault();
		var email = $('#email_form_text').val();
		currentAmount = 500000;
		app.open({
			currency: 'PHP',
			amount: currentAmount,
			description: 'Give to Children\'s Crusade',
			payLabel: 'Donate',
			email: email,
			allowRememberMe: false
		});
	});
})();
