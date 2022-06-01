/* preloader */
function fade() {
    $(".preloader").fadeOut();
}
setTimeout(fade, 2400);


/* Menu Click functionality */
$("#mobileMenuIcon").click(function(){
    $(".mobileMenu").toggleClass("active");
    if ($(".mobileMenu").hasClass("active")) {
        $(".mobileMenu").css("height", "300px");
        $(".mobileMenu ul").css("opacity", "1");
        $("#mobileCloseIcon").css("opacity", "1");
        $("#mobileMenuIcon").css("opacity", "0"); 
    }
    else {
        $(".mobileMenu").css("height", "0px");
        $(".mobileMenu ul").css("opacity", "0");
        $("#mobileCloseIcon").css("opacity", "0");
        $("#mobileMenuIcon").css("opacity", "1"); 
    }
});

$("#mobileCloseIcon").click(function(){
    $(".mobileMenu").toggleClass("active");
    if ($(".mobileMenu").hasClass("active")) {
        $(".mobileMenu").css("height", "300px");
        $(".mobileMenu ul").css("opacity", "1");
        $("#mobileCloseIcon").css("opacity", "1");
        $("#mobileMenuIcon").css("opacity", "0"); 
    }
    else {
        $(".mobileMenu").css("height", "0px");
        $(".mobileMenu ul").css("opacity", "0");
        $("#mobileCloseIcon").css("opacity", "0");
        $("#mobileMenuIcon").css("opacity", "1"); 
    }
});

/* Tablet Click Menu */

$("#tabletMenuIcon").click(function(){
    $(".tabletMenu").toggleClass("active");
    if ($(".tabletMenu").hasClass("active")) {
        $(".tabletMenu").css("height", "412px");
        $(".tabletMenu ul").css("opacity", "1");
        $("#tabletCloseIcon").css("opacity", "1");
        $("#tabletMenuIcon").css("opacity", "0"); 
    }
    else {
        $(".tabletMenu").css("height", "0px");
        $(".tabletMenu ul").css("opacity", "0");
        $("#tabletCloseIcon").css("opacity", "0");
        $("#tabletMenuIcon").css("opacity", "1"); 
    }
});

$("#tabletCloseIcon").click(function(){
    $(".tabletMenu").toggleClass("active");
    if ($(".tabletMenu").hasClass("active")) {
        $(".tabletMenu").css("height", "412px");
        $(".tabletMenu ul").css("opacity", "1");
        $("#tabletCloseIcon").css("opacity", "1");
        $("#tabletMenuIcon").css("opacity", "0"); 
    }
    else {
        $(".tabletMenu").css("height", "0px");
        $(".tabletMenu ul").css("opacity", "0");
        $("#tabletCloseIcon").css("opacity", "0");
        $("#tabletMenuIcon").css("opacity", "1"); 
    }
});
