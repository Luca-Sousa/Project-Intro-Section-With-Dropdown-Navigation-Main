$(function(){

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
                dropdown.removeClass("hidden").addClass("block");
            } else {
                arrowDown.removeClass("hidden").addClass("block");
                arrowUp.removeClass("block").addClass("hidden");
                dropdown.removeClass("block").addClass("hidden");
            }
        });
    }

    $('#menu').click(function(){
        $('#navigation').removeClass('max-md:hidden');
        $('body').addClass('bg-col-MB')
    });

    $('#close-menu').click(function(){
        $('#navigation').addClass('max-md:hidden');
    });

});
