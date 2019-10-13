
let number_holder = ''
let place_holder = ''
let bool = true
let correctPlacesForOne = ["17","32", "48", "53","73","97"]
let correctPlacesForTwo = ["16","29","33","45","62", "74","87"]
let correctPlacesForThree = ["27","43","49","77","82","95"]
let correctPlacesForFour = ["13","28","35","59","61","78","93"]
let correctPlacesForFive = ["37","42","55","68","79","81"]
let correctPlacesForSix = ["21","46","89","94"]
let correctPlacesForSeven = ["15","39","51","64","76","83"]
let correctPlacesForEight = ["23","36","67","75",]
let correctPlacesForNine = ["31","43","57","65","71"]
let place = ''

$(".container2").click(function (e) {
    number_holder = e.target.id
    console.log(number_holder);
});

    $(".container").click(function (e) {
        place_holder = e.target.id
        console.log(place_holder);
        if (number_holder == '') {
            alert("Choose number ")
        }
        else if (returnCheck()) {
            alert("Correct")
            $(`#${place}`).text(number_holder);
            bool = false
            number_holder = ''
        } else {
            alert("Wrong Place")
        }
    });

    function returnCheck(){
        if (number_holder == "1"){
            for (let i = 0; i < correctPlacesForOne.length; i++) {
                if (place_holder == correctPlacesForOne[i]){
                    place = correctPlacesForOne[i]
                    return true 
                }            
            }
        }else if (number_holder == "2"){
            for (let i = 0; i < correctPlacesForTwo.length; i++) {
                if (place_holder == correctPlacesForTwo[i]){
                    place = correctPlacesForTwo[i]
                    return true 
                }            
            }
        }else if (number_holder == "3"){
            for (let i = 0; i < correctPlacesForThree.length; i++) {
                if (place_holder == correctPlacesForThree[i]){
                    place = correctPlacesForThree[i]
                    return true 
                }            
            }
        }else if (number_holder == "4"){
            for (let i = 0; i < correctPlacesForFour.length; i++) {
                if (place_holder == correctPlacesForFour[i]){
                    place = correctPlacesForFour[i]
                    return true 
                }            
            }
        }else if (number_holder == "5"){
            for (let i = 0; i < correctPlacesForFive.length; i++) {
                if (place_holder == correctPlacesForFive[i]){
                    place = correctPlacesForFive[i]
                    return true 
                }            
            }
        }else if (number_holder == "6"){
            for (let i = 0; i < correctPlacesForSix.length; i++) {
                if (place_holder == correctPlacesForSix[i]){
                    place = correctPlacesForSix[i]
                    return true 
                }            
            }
        }else if (number_holder == "7"){
            for (let i = 0; i < correctPlacesForSeven.length; i++) {
                if (place_holder == correctPlacesForSeven[i]){
                    place = correctPlacesForSeven[i]
                    return true 
                }            
            }
        }else if (number_holder == "8"){
            for (let i = 0; i < correctPlacesForEight.length; i++) {
                if (place_holder == correctPlacesForEight[i]){
                    place = correctPlacesForEight[i]
                    return true 
                }            
            }
        }else if (number_holder == "9"){
            for (let i = 0; i < correctPlacesForNine.length; i++) {
                if (place_holder == correctPlacesForNine[i]){
                    place = correctPlacesForNine[i]
                    return true 
                }            
            }
        }
        else{
            return false
        }
    }