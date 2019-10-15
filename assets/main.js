
// Declaration Space ------------------
let number_holder = ''
let place_holder = ''
let bool = true
let correctPlacesForOne = ["17", "32", "48", "53", "73", "97"]
let correctPlacesForTwo = ["16", "29", "33", "45", "62", "74", "87"]
let correctPlacesForThree = ["27", "34", "49", "77", "82", "95"]
let correctPlacesForFour = ["13", "28", "35", "59", "61", "78", "93"]
let correctPlacesForFive = ["37", "42", "55", "68", "79", "81"]
let correctPlacesForSix = ["21", "46", "89", "94"]
let correctPlacesForSeven = ["15", "39", "51", "64", "76", "83", "98"]
let correctPlacesForEight = ["23", "36", "67", "75",]
let correctPlacesForNine = ["31", "43", "57", "65", "71"]
let place = ''
let Minutes = 0;
let seconds = 0;
let timerId = 0;
let hasStarted = false;

// Click button --------------------
$(".column1").hide();

$("#home").click(function () {
    $(".HomePage_container").show();
    $(".number_container").hide();
    $(".game_container").hide();
    $("#game_logo").hide();
    $(".column1").hide();
});

$("#save").click(function () {

});

$("#play").click(function () {
    $(".modal").show();
});
$(".modal-content").click(function () {
    $(".modal").hide();
});

$("#hard").click(function () {
    $(".modal").hide();
    $(".HomePage_container").hide();

    $(".number_container").show();
    $(".game_container").show();
    $("#game_logo").show();
    $(".column1").show();

    timer.setupListeners();
});


$(".number_container").click(function (e) {
    number_holder = e.target.id
    console.log(number_holder);
});

$(".game_container").click(function (e) {
    place_holder = e.target
    console.log(place_holder.id);
    if (number_holder == '') {
        Swal.fire({
            type: 'info',
            title: "Choose number from bar",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else if (returnCheck()) {
        console.log(e.target);
        $(e.target).css("background-color", "rgb(230, 185, 67)");
        Swal.fire({
            type: 'success',
            title: "Correct Place",
            showConfirmButton: false,
            timer: 1500
        });
        $(`#${place}`).text(number_holder);
        bool = false
        number_holder = ''
    } else { 
        if (e.target.innerHTML) {
            Swal.fire({
                type: 'warning',
                title: "The Place Equipped",
                showConfirmButton: false,
                timer: 1500
            });

        } else {
            Swal.fire({
                type: 'error',
                title: "It's not the Correct Place",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
});

// function Space -----------------------
function returnCheck() {
    if (number_holder == "1") {
        for (let i = 0; i < correctPlacesForOne.length; i++) {
            if (place_holder.id == correctPlacesForOne[i]) {
                place = correctPlacesForOne[i]
                return true
            }
        }
    } else if (number_holder == "2") {
        for (let i = 0; i < correctPlacesForTwo.length; i++) {
            if (place_holder.id == correctPlacesForTwo[i]) {
                place = correctPlacesForTwo[i]
                return true
            }
        }
    } else if (number_holder == "3") {
        for (let i = 0; i < correctPlacesForThree.length; i++) {
            if (place_holder.id == correctPlacesForThree[i]) {
                place = correctPlacesForThree[i]
                return true
            }
        }
    } else if (number_holder == "4") {
        for (let i = 0; i < correctPlacesForFour.length; i++) {
            if (place_holder.id == correctPlacesForFour[i]) {
                place = correctPlacesForFour[i]
                return true
            }
        }
    } else if (number_holder == "5") {
        for (let i = 0; i < correctPlacesForFive.length; i++) {
            if (place_holder.id == correctPlacesForFive[i]) {
                place = correctPlacesForFive[i]
                return true
            }
        }
    } else if (number_holder == "6") {
        for (let i = 0; i < correctPlacesForSix.length; i++) {
            if (place_holder.id == correctPlacesForSix[i]) {
                place = correctPlacesForSix[i]
                return true
            }
        }
    } else if (number_holder == "7") {
        for (let i = 0; i < correctPlacesForSeven.length; i++) {
            if (place_holder.id == correctPlacesForSeven[i]) {
                place = correctPlacesForSeven[i]
                return true
            }
        }
    } else if (number_holder == "8") {
        for (let i = 0; i < correctPlacesForEight.length; i++) {
            if (place_holder.id == correctPlacesForEight[i]) {
                place = correctPlacesForEight[i]
                return true
            }
        }
    } else if (number_holder == "9") {
        for (let i = 0; i < correctPlacesForNine.length; i++) {
            if (place_holder.id== correctPlacesForNine[i]) {
                place = correctPlacesForNine[i]
                return true
            }
        }
    }
    else {
        return false
    }
}
function relocate() {
    location.replace("")
}
var timer = {
    Minutes: 0,
    seconds: 0,
    timerId: 0,
    hasStarted: false,

    els: {
        timer: $("#timer"),
        start: $("#start"),
    },

    updateTime: function updateTime() {
        this.seconds++;
        if (this.seconds < 10) {
            this.els.timer.text(this.Minutes + ":0" + this.seconds);
        } if (this.Minutes < 10 && this.seconds < 10) {
            this.els.timer.text("0" + this.Minutes + ":0" + this.seconds);
        } else if (this.Minutes < 10) {
            this.els.timer.text("0" + this.Minutes + ":" + this.seconds);
        } else {
            this.els.timer.text(this.Minutes + ":" + this.seconds);
        }
        if (this.seconds == 59) {
            this.Minutes++
            this.seconds = 0
        }
    },
    setupListeners: function () {
        this.els.timer.text("Time Started!!");
        if (this.hasStarted === false) {
            this.timerId = setInterval(this.updateTime.bind(this), 1000);
            this.hasStarted = true;
        }
    }
}
