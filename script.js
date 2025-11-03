const divIds = ['dashboard', 'place-order-section', 'profile-section', 'my-orders-section', 'available-deliveries-section'];
showOnly(divIds[0],document.getElementById('Overview-Button'))
function showOnly(activeId, button) {
    // Loop through all div IDs
    for (let i = 0; i < divIds.length; i++) {
        let div = document.getElementById(divIds[i]); // get the div
        if (!div) continue; // skip if div not found

        // Show the active div, hide the rest
        if (divIds[i] === activeId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        } 
    }

    // --- New part: handle button highlighting ---
    const allButtons = document.querySelectorAll(".sidebar-menu > button");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("active");
    }

    if (button) {
        button.classList.add("active");
    }
}

