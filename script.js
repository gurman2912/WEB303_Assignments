/*
	WEB 303 Assignment 1 - jQuery
	Name - Gurmandeep Kaur
	Student No. - 0830963
	Date - 2023-09-17
*/

$(document).ready(function() {
	// Event handler for "change" event on the salary and percent fields
	$('#yearly-salary, #percent').on('change', function() {
	  // Get the values from the input fields
	  let salary = parseFloat($('#yearly-salary').val());
	  let percent = parseFloat($('#percent').val());
  
	  // Calculate the amount and format it with a dollar sign
	  let amount = (salary * percent / 100).toFixed(2);
	  $('#amount').text('$' + amount);
	});
  });
  