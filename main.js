img = "";
objects = [];
status = "";

function setup()
{
    canvas = createCanvas(300, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start()
{}

function modelLoaded()
{
    console.log("Model Loaded")
    status = true;
}