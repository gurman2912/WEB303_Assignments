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
      var salary = parseFloat($('#yearly-salary').val());
      var percent = parseFloat($('#percent').val());
  
      // Calculate the amount and format it with a dollar sign
      var amount = (salary * percent / 100).toFixed(2);
      $('#amount').text('$' + amount);
    });
  });
  

  