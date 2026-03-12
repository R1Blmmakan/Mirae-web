const buttons = document.querySelectorAll(".dropdown-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        // Close all other dropdowns
        buttons.forEach(btn => {
            if (btn !== this) {
                const otherDropdown = btn.nextElementSibling;
                if (otherDropdown) {
                    otherDropdown.style.maxHeight = null;
                }
            }
        });

        const dropdown = this.nextElementSibling;

        if(dropdown.style.maxHeight){
            dropdown.style.maxHeight = null;
        } else {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        }

    });

});
