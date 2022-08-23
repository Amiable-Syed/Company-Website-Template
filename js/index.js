$(function () {
    $(".agile-sidebar-open-btn").on("click", function () {
        if(!$(".agile-header.mobile").hasClass("no-opac"))
        {
            $(".agile-header.mobile").addClass("no-opac");
        }
        $(".agile-header.mobile").addClass("active");
        
        
    });
    
    $(".agile-close-sidebar-menu-btn").on("click", function () {
        $(".agile-header.mobile").removeClass("active");
    });

});