


// Declaration Space ------------------
let number_holder = ''
let place_holder = ''
let bool = true
let id_out, id_in = ''

let board_hard = [

    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 0, 9]
]

let solved_board_hard = [
    [5, 3, 4, 6, 7, 8, 1, 9, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 9, 7, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 7, 1, 9]
]

let board_medium = [
    [0, 0, 1, 0, 0, 0, 0, 0, 4],
    [0, 9, 0, 0, 2, 0, 0, 5, 3],
    [0, 8, 0, 0, 0, 0, 7, 0, 0],
    [0, 1, 0, 4, 3, 0, 0, 0, 0],
    [0, 0, 7, 0, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 6, 8, 1, 0, 0, 0, 4, 0],
    [0, 0, 0, 9, 7, 0, 8, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0],
]

let solved_board_medium = [
    [3, 2, 1, 7, 6, 5, 9, 8, 4],
    [7, 9, 4, 8, 2, 1, 6, 5, 3],
    [6, 8, 5, 3, 4, 9, 7, 2, 1],
    [2, 1, 6, 4, 3, 8, 5, 7, 9],
    [8, 4, 7, 5, 9, 6, 1, 3, 2],
    [5, 3, 9, 2, 1, 7, 4, 6, 8],
    [9, 6, 8, 1, 5, 3, 2, 4, 7],
    [4, 5, 3, 9, 7, 2, 8, 1, 6],
    [1, 7, 2, 6, 8, 4, 3, 9, 5],
]
let board_easy = [

    [0, 2, 7, 3, 5, 9, 0, 1, 6],
    [0, 0, 4, 1, 2, 0, 0, 0, 0],
    [1, 0, 3, 7, 4, 8, 0, 0, 5],
    [0, 1, 5, 8, 0, 0, 6, 7, 2],
    [2, 4, 6, 5, 1, 7, 3, 9, 8],
    [0, 7, 8, 9, 6, 2, 0, 5, 0],
    [4, 0, 9, 0, 8, 0, 0, 3, 7],
    [6, 3, 0, 2, 7, 5, 8, 4, 9],
    [7, 0, 2, 0, 9, 3, 0, 6, 0]
]
let solved_board_easy = [
    [8, 2, 7, 3, 5, 9, 4, 1, 6],
    [5, 9, 4, 1, 2, 6, 7, 8, 3],
    [1, 6, 3, 7, 4, 8, 9, 2, 5],
    [9, 1, 5, 8, 3, 4, 6, 7, 2],
    [2, 4, 6, 5, 1, 7, 3, 9, 8],
    [3, 7, 8, 9, 6, 2, 1, 5, 4],
    [4, 5, 9, 6, 8, 1, 2, 3, 7],
    [6, 3, 1, 2, 7, 5, 8, 4, 9],
    [7, 8, 2, 4, 9, 3, 5, 6, 1]
]
// let board_easy = [

//     [8, 2, 7, 3, 5, 9, 4, 0, 6],
//     [5, 9, 4, 1, 2, 6, 7, 8, 3],
//     [1, 6, 3, 7, 4, 8, 9, 2, 5],
//     [9, 0, 5, 8, 3, 4, 6, 7, 2],
//     [2, 4, 6, 5, 1, 7, 3, 9, 8],
//     [3, 7, 8, 9, 6, 2, 1, 5, 4],
//     [4, 5, 9, 6, 8, 1, 2, 3, 7],
//     [6, 3, 1, 2, 7, 5, 8, 4, 9],
//     [7, 8, 2, 4, 9, 3, 5, 6, 1]
// ]


// Click button --------------------

$(".column1").hide();

$("#home").click(function () {
    
    location.reload()
    $(".HomePage_container").show();
    $(".number_container").hide();
    $(".game_container").hide();
    $("#game_logo").hide();
    $(".column1").hide();

});

$(".close").click(function () {
    $(".modal").hide();
});

$("#play").click(function () {
    $(".modal").show();
});


$("#hard").click(function () {
    $(".modal").hide();
    $(".HomePage_container").hide();

    $(".number_container").show();
    $(".game_container").show();
    $("#game_logo").show();
    $(".column1").show();

    timer.setupListeners();
    fill_level(board_hard)
    play(solved_board_hard, board_hard)
});
$("#medium").click(function () {
    $(".modal").hide();
    $(".HomePage_container").hide();

    $(".number_container").show();
    $(".game_container").show();
    $("#game_logo").show();
    $(".column1").show();

    timer.setupListeners();
    fill_level(board_medium)
    play(solved_board_medium, board_medium)
});

$("#easy").click(function () {
    $(".modal").hide();
    $(".HomePage_container").hide();

    $(".number_container").show();
    $(".game_container").show();
    $("#game_logo").show();
    $(".column1").show();

    timer.setupListeners();
    fill_level(board_easy)
    play(solved_board_easy, board_easy)
});

$(".number_container").click(function (e) {
    number_holder = e.target.id
    console.log(number_holder);
});

// function ----------------------

function play(solved_board, board) {

    $(".game_container").click(function (e) {
        place_holder = e.target.id
        if (number_holder == '') {
            Swal.fire({
                type: 'info',
                title: "Choose Number From the Red Box",
                showConfirmButton: false,
                timer: 1500
            });

        }
        else if (e.target.innerHTML) {
            Swal.fire({
                type: 'warning',
                title: "The Place Equipped",
                showConfirmButton: false,
                timer: 1500
            });

        } else if (returnCheck(solved_board)) {
            $(e.target).css("background-color", "rgb(230, 185, 67)");
            Swal.fire({
                type: 'success',
                title: "Correct Place",
                showConfirmButton: false,
                timer: 1500
            });
            $(`#${place_holder}`).text(number_holder);
            let idd = place_holder.split("")
            board[idd[0]][idd[1]] = parseInt(number_holder)
            bool = false
            number_holder = ''
            console.log(board);

            if (isWining(board)) {
                Swal.fire({
                    title: 'Congratulations !!',
                    width: 600,
                    padding: '3em',
                    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                    backdrop: `
                              rgba(0,0,123,0.4)
                              url("https://sweetalert2.github.io/images/nyan-cat.gif")
                              center left
                              no-repeat
                            `,
                    showConfirmButton: false,
                    timer: 2500
                }).then(
                    function () {
                        location.reload()
                        $(".HomePage_container").show();

                        $(".number_container").hide();
                        $(".game_container").hide();
                        $("#game_logo").hide();
                        $(".column1").hide();

                    }
                )
            }
        } else {
            Swal.fire({
                type: 'error',
                title: "It's not the Correct Place",
                showConfirmButton: false,
                timer: 1500
            });

        }
    });

}

function fill_level(board) {
    for (var i = 0; i < board.length; i++) {
        id_out = i + ''
        for (let j = 0; j < board[i].length; j++) {
            id_in = id_out + j + ''
            if (board[i][j] != 0) {
                $(`#${id_in}`).text(board[i][j]);
                $(`#${id_in}`).css("background-color", "rgb(233, 233, 233)");
            }
        }
    }
}

function returnCheck(solved_board) {
    let txt = place_holder + ''
    let index = txt.split('')
    if (solved_board[index[0]][index[1]] == number_holder) {
        return true
    } else {
        return false
    }

}
var timer = {
    Minutes: 0,
    seconds: -1,
    timerId: 0,
    hasStarted: false,

    els: {
        timer: $("#timer"),
        start: $("#start"),
    },

    updateTime: function updateTime() {
        this.seconds++;
        if (this.Minutes < 10 && this.seconds < 10) {
            this.els.timer.text("0" + this.Minutes + ":0" + this.seconds);
        } else if (this.seconds < 10) {
            this.els.timer.text(this.Minutes + ":0" + this.seconds);
        } else if (this.Minutes < 10) {
            this.els.timer.text("0" + this.Minutes + ":" + this.seconds);
        } else {
            this.els.timer.text(this.Minutes + ":" + this.seconds);
        }
        if (this.seconds == 59) {
            this.Minutes++
            this.seconds = -1
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

function isWining(board) {
    for (var i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            console.log(board[i][j] !== 0);
            if (board[i][j] == 0) {
                return false
            }
        }
    }
    return true

}