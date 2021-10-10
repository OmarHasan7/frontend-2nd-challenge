document.addEventListener('DOMContentLoaded', function() {
    let menu_btn = document.querySelector('.b-menu');
    let pop_menu = document.querySelector('.menu');
    menu_btn.addEventListener('click', function() {
        let v = pop_menu.style.visibility;
        if (v === "visible")
        {
            pop_menu.style.visibility = 'hidden';
        }
        else
            pop_menu.style.visibility = 'visible';
    });
});