function password_check() {
    var first_check = document.getElementById("first_check").value;
    var second_check = document.getElementById("second_check").value;


    if (first_check.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (second_check.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (first_check != second_check) {
        alert("Two passwords don't match!")
    } else {
        alert("Everything is good!")
    }
}

var pic_count = 0;

function prev() {
    pic_count = ((pic_count + 5) - 1) % 5
    var picture_uri = `pictures/${pic_count}.jpeg`
    document.getElementById("picture").src = picture_uri
}

function next() {
    pic_count = (pic_count + 1) % 5
    var picture_uri = `pictures/${pic_count}.jpeg`
    document.getElementById("picture").src = picture_uri
}

function alter_color() {
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}
