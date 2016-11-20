var strong_Items;

strong_Items = document.getElementsByTagName('strong');

function change_red() {
    for (var i = 0; i < strong_Items.length; i++) {
        strong_Items[i].style.color="red";
    }
}

function change_black() {
    for (var i=0; i<strong_Items.length; i++){
        strong_Items[i].style.color="black";
    }
}