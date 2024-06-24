$(function(){

    var nav = $('#navigation');
    var effect = $('#effect-mb');

    toggleDropdown('#features', '#f-arrow-down', '#f-arrow-up', '#dropdown-features');
    toggleDropdown('#company', '#c-arrow-down', '#c-arrow-up', '#dropdown-company');

    function toggleDropdown(buttonId, arrowDownId, arrowUpId, dropdownId) {
        const arrowDown = $(arrowDownId);
        const arrowUp = $(arrowUpId);
        const dropdown = $(dropdownId);

        $(buttonId).click(function(){
            if(arrowDown.is(':visible')){
                arrowUp.removeClass("hidden").addClass("block");
                arrowDown.removeClass("block").addClass("hidden");
                dropdown.removeClass("hidden").addClass("block animate__animated animate__flipInX");
            } else {
                arrowDown.removeClass("hidden").addClass("block");
                arrowUp.removeClass("block").addClass("hidden");
                dropdown.removeClass("animate__flipInX").addClass("animate__flipOutX");
                setTimeout(function(){
                    dropdown.removeClass("animate__flipOutX block").addClass("hidden");
                },700);
            }
        });
    }

    $('#menu').click(function(){
        nav.removeClass('max-md:hidden').addClass('animate__animated animate__fadeInRight');
        effect.removeClass('hidden').addClass('animate__animated animate__fadeIn');
        
        $(window).resize(function(){
            var windowWidth = $(window).width();
            if (windowWidth >= 751) {
                location.reload();
            }
        });
    });

    $('#close-menu').click(function(){
        nav.removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
        effect.removeClass('animate__fadeIn').addClass('animate__fadeOut');

        setTimeout(function(){
            nav.removeClass('animate__animated animate__fadeOutRight').addClass('max-md:hidden');
            effect.removeClass('animate__animated animate__fadeOut').addClass('hidden');
        },500);
    });
});
