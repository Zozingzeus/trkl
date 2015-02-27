$(document).ready(function(){
    $("nav ul a li:not('.brand')").mouseenter(function(){
        $(this).stop(true, false).animate({ backgroundColor: "#14AB00" });
    });
    $("nav ul a li:not('.brand')").mouseleave(function(){
        $(this).stop(true, false).animate({ backgroundColor: "#BBB"});
    });
});