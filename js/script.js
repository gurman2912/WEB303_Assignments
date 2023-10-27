$(document).ready(function() {
    // Accordion behavior
    $('.accordion-header').click(function() {
        var content = $(this).next('.accordion-content');
        $('.accordion-content').not(content).slideUp();
        content.slideToggle();
    });

    // Initially, show the first tab and hide the others
    $('.tab-content:first').show();
            
    // When a tab button is clicked
    $('.tab-button').click(function () {
        // Hide all tab content
        $('.tab-content').hide();
        
        // Show the content associated with the clicked tab button
        $(this).next('.tab-content').show();
    });
});
