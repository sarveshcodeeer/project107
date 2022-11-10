function bts() {

navigator.mediaDevices.getUserMedia({audio : true}) ; 

}
classifier = ml5.soundClassifier( "https://teachablemachine.withgoogle.com/models/kTTYfdgkf/model.json" , modelReady )

function modelReady() {

console.log("model has loadeed commander")
classifier.classify(gotResults)


}

function gotResults(error , results) {


}

