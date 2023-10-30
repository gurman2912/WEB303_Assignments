$(document).ready(function() {
    // Accordion
    $('.accordion-header').click(function() {
        // Close other open sections in the same accordion
        $(this).parent().siblings().find('.accordion-content').slideUp();
        // Toggle the content of the clicked section
        $(this).next('.accordion-content').slideToggle();
    });

    // Tabbed Sections
    $('.tab-control').click(function() {
        // Remove the 'active' class from all tabs
        $('.tab-control').removeClass('active');
        // Add 'active' class to the clicked tab
        $(this).addClass('active');
        // Hide all tab content
        $('.tab-content').hide();
        // Show the content of the clicked tab
        $($(this).attr('href')).show();
        return false;
    });
});
