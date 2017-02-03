//change the way to open the side panel by changing 'mouseover' to click
$('.nav-side .nav-toggle').on('mouseover', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('nav-open');
});