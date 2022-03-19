Webcam.set({
    width:290,
    height:290,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("webcam")

Webcam.attach(camera)
function takepic(){
    Webcam.snap(function(data_uri){
document.getElementById("capture").innerHTML="<img id='picture' src='"+data_uri+"'>"
    })
}
console.log(ml5.version)
classifierer=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_RZTxqPwm/model.json",modelloaded)
function modelloaded(){
    console.log("Sanjay is too smart")
}
function idpic(){
    img = document.getElementById('picture')

classifierer.classify(img,getresult)

}
function getresult(error,result){
console.log(result)
if(error){
    console.log(error)
}
else{
    console.log(result)
    document.getElementById("object").innerHTML=result[0].label
    document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2)
}

}
