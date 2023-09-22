const icon = document.getElementById('icon');

icon.onclick = function() {
    const iconMobile = document.getElementById('id01');
    if(iconMobile.className === "mobile") {
       
        iconMobile.className += " responsive";
    } else {
        iconMobile.className = "mobile";
    }

}