function preload(){
}

function setup(){
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XlgrMZF5C/model.json" ,modelLoaded)

    canvas = createCanvas(300,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function modelLoaded(){
    console.log("Model has been loaded.")
}

function draw(){
    image(video,0,0,300,250);
    classifier.classify(video,gotResult)
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}