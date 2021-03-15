let type1Ctr = 5
let type2Ctr = 5

function type1() {
    rows = ""
    for (let i = 0; i < type1Ctr ; i++) {
        for (let j = 0; j < type1Ctr; j++) {
            if (j % 2 != 0) {
                rows += "#"
            } else {
                rows += "*"

            }
        } rows += "<br>"
    }
    console.log(rows)

    document.getElementById("jawaban").innerHTML = rows
    type1Ctr++
    type2Ctr = 5
}


function type2() {
    rows = ""
    for (let i = 0; i < type2Ctr; i++) {
        for (let j = 0; j < type2Ctr - i; j++) {
            if (i % 2 != 0) {
                rows += "*"
            } else {
                rows += "#"
            }

        } rows += "<br>"
    }
    console.log(rows)
    document.getElementById("jawaban"). innerHTML = rows
    type2Ctr++
    type1Ctr = 5
}

