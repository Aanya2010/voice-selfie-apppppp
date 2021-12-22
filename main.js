var sr=window.webkitSpeechRecognition;
var rec=new sr();
function start(){
    document.getElementById("textb").innerHTML="";
    rec.start();
}
rec.onresult = function(event) { console.log(event);
     var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content; console.log(Content);
     if(Content =="take my selfie") { console.log("taking selfie --- "); 
     speak(); 
    
    } }

function speak() {
    var talk=window.speechSynthesis;
    var data="Taking your selfie in five seconds";
    var bv= new SpeechSynthesisUtterance(data);
    talk.speak(bv);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="pic" src="'+data_uri+'">';
    });
}

function save() {
    link=document.getElementById("link");
    img=document.getElementById("pic").src;
    link.href=img;
    link.click();
}