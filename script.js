bcolor = "white";
width = 1;
color = "black";
mouse_events = "";
last_x = "";
last_y = "";

canvas = document.getElementById("canvas");
urb = canvas.getContext("2d");
canvas.addEventListener("mousedown", spy);

function spy(e) {

    color = document.getElementById("i1").value;
    bcolor = document.getElementById("i3").value;
    width = document.getElementById("i2").value;

    document.getElementById("canvas").style.backgroundColor = bcolor;
    mouse_events = "mouseDown";
}


function clearArea() {
    urb.clearRect(0, 0, canvas.width, canvas.height);
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_events = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_events = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_events == "mouseDown") {
        urb.beginPath();
        urb.strokeStyle = color;
        urb.lineWidth = width;

        urb.moveTo(last_x, last_y);


        urb.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        urb.stroke();
    }

    last_x = current_position_of_mouse_x;
    last_y = current_position_of_mouse_y;
}

//touch events

canvas.addEventListener("touchstart", spy1);

function spy1(e) {

    color = document.getElementById("i1").value;
    bcolor = document.getElementById("i3").value;
    width = document.getElementById("i2").value;

    document.getElementById("canvas").style.backgroundColor = bcolor;

    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    urb.beginPath();
    urb.strokeStyle = color;
    urb.lineWidth = width;

    urb.moveTo(last_x, last_y);


    urb.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    urb.stroke();


    last_x = current_position_of_mouse_x;
    last_y = current_position_of_mouse_y;
}