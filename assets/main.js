// create elemnt\

// bar elemnt 
let $one = document.getElementById("1")
let $two = document.getElementById("2")
let $three = document.getElementById("3")
let $four = document.getElementById("4")
let $five = document.getElementById("5")
let $six = document.getElementById("6")
let $seven = document.getElementById("7")
let $eight = document.getElementById("8")
let $nine = document.getElementById("9")


// space element

let $spaces = []
for (var i = 1; i < 10; i++) {
    $spaces[i] = document.getElementById(("1" + i));
}

//appending to be showen in page 
for (let index = 1; index < 10; index++) {

    $one.addEventListener('click', function (e) {
        let outer_Select = e.target.innerText
        if ($spaces[index].innerText == "") {
            console.log($spaces[index]);
            $spaces[index].addEventListener('click', function (e) {
                let inner_Select = e.target.id
                console.log($spaces[index]);
                if (outer_Select == "1" && inner_Select == "17")
                    $spaces[index].textContent = outer_Select;
                else {
                    alert("Wrong number")
                    index= 10
                }

            })
        }
    })
    console.log(index);
    

    $two.addEventListener('click', function (e) {
        let outer_Select = e.target.innerText
        if ($spaces[index].innerText == "") {
            console.log($spaces[index]);
            $spaces[index].addEventListener('click', function (e) {
                let inner_Select = e.target.id
                console.log($spaces[index]);
                if (outer_Select == "2" && inner_Select == "16")
                    $spaces[index].textContent = outer_Select;
                else {
                    alert("Wrong number")
                    index= 10
                }

            })
        }
    })
}

