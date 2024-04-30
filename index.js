
let puntiX = 0
let puntiO = 0
let puntiPar = 0

document.addEventListener("DOMContentLoaded", function() {
    var cells = document.querySelectorAll(".cell")
    cells.forEach(function(cell, availableCells) {
        cell.addEventListener("click", function() {
            if (!cell.classList.contains("clicked")) {
                cell.textContent = "X"; 
                cell.classList.add("clicked");  
                let clickedCells = document.querySelectorAll(".clicked")
                let availableCells = document.querySelectorAll(".cell:not(.clicked)");
                

                if (clickedCells.length < 9) {

                    if ( clickedCells.length>1 ) {
                        if (cells[1].textContent == cells[2].textContent && cells[1].textContent == "O" || 
                            cells[3].textContent == cells[6].textContent && cells[6].textContent == "O" || 
                            cells[4].textContent == cells[8].textContent && cells[8].textContent == "O" ) {

                            if (cells[0].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[0].textContent = "O"
                                cells[0].classList.add("o")
                                cells[0].classList.add("clicked")
                                cells[0].classList.remove("availableCells")
                            }
                        } else 
                        if (cells[1].textContent == cells[2].textContent && cells[1].textContent == "X" || 
                            cells[3].textContent == cells[6].textContent && cells[6].textContent == "X" ||
                            cells[4].textContent == cells[8].textContent && cells[8].textContent == "X"  ) {

                            if (cells[0].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[0].textContent = "O"
                                cells[0].classList.add("o")
                                cells[0].classList.add("clicked")
                                cells[0].classList.remove("availableCells")
                            }
                        } else 
                        if (cells[0].textContent == cells[2].textContent && cells[2].textContent == "O"|| 
                            cells[4].textContent == cells[7].textContent && cells[7].textContent == "O" ) {

                            if (cells[1].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[1].textContent = "O"
                                cells[1].classList.add("o")
                                cells[1].classList.add("clicked")
                                cells[1].classList.remove("availableCells")
                            }                        
                        } else
                        if (cells[0].textContent == cells[2].textContent && cells[2].textContent == "X" || 
                            cells[4].textContent == cells[7].textContent && cells[7].textContent == "X"  ) {

                            if (cells[1].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[1].textContent = "O"
                                cells[1].classList.add("o")
                                cells[1].classList.add("clicked")
                                cells[1].classList.remove("availableCells")
                            }                        
                        } else
                        if (cells[0].textContent == cells[1].textContent && cells[1].textContent == "O" || 
                            cells[5].textContent == cells[8].textContent && cells[8].textContent == "O" || 
                            cells[6].textContent == cells[4].textContent && cells[4].textContent == "O" ) {

                            if (cells[2].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[2].textContent = "O"
                                cells[2].classList.add("o")
                                cells[2].classList.add("clicked")
                                cells[2].classList.remove("availableCells")
                            }
                        } else
                        if (cells[0].textContent == cells[1].textContent && cells[1].textContent == "X" || 
                            cells[5].textContent == cells[8].textContent && cells[8].textContent == "X" ||
                            cells[6].textContent == cells[4].textContent && cells[4].textContent == "X" ) {

                            if (cells[2].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[2].textContent = "O"
                                cells[2].classList.add("o")
                                cells[2].classList.add("clicked")
                                cells[2].classList.remove("availableCells")
                            }
                        } else
                        if (cells[0].textContent == cells[6].textContent && cells[6].textContent == "O" || 
                            cells[4].textContent == cells[5].textContent && cells[5].textContent == "O" ) {
                            if (cells[3].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[3].textContent = "O"
                                cells[3].classList.add("o")
                                cells[3].classList.add("clicked")
                                cells[3].classList.remove("availableCells")
                            }
                        } else
                        if (cells[0].textContent == cells[6].textContent && cells[6].textContent == "X" || 
                            cells[4].textContent == cells[5].textContent && cells[5].textContent == "X" ) {
                            if (cells[3].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[3].textContent = "O"
                                cells[3].classList.add("o")
                                cells[3].classList.add("clicked")
                                cells[3].classList.remove("availableCells")
                            }
                        } else
                        if (cells[1].textContent == cells[7].textContent && cells[7].textContent == "O" || 
                            cells[3].textContent == cells[5].textContent && cells[5].textContent == "O" || 
                            cells[6].textContent == cells[2].textContent && cells[2].textContent == "O" || 
                            cells[0].textContent == cells[8].textContent && cells[8].textContent == "O" ) {

                            if (cells[4].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[4].textContent = "O"
                                cells[4].classList.add("o")
                                cells[4].classList.add("clicked")
                                cells[4].classList.remove("availableCells")
                            }
                        } else
                        if (cells[1].textContent == cells[7].textContent && cells[7].textContent == "X" || 
                            cells[3].textContent == cells[5].textContent && cells[5].textContent == "X" || 
                            cells[6].textContent == cells[2].textContent && cells[2].textContent == "X" || 
                            cells[0].textContent == cells[8].textContent && cells[8].textContent == "X"  ) {

                            if (cells[4].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[4].textContent = "O"
                                cells[4].classList.add("o")
                                cells[4].classList.add("clicked")
                                cells[4].classList.remove("availableCells")
                            }
                        } else
                        if (cells[3].textContent == cells[4].textContent && cells[4].textContent == "O" || 
                            cells[2].textContent == cells[8].textContent && cells[8].textContent == "O" ) {

                            if (cells[5].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[5].textContent = "O"
                                cells[5].classList.add("o")
                                cells[5].classList.add("clicked")
                                cells[5].classList.remove("availableCells")
                            }
                        } else
                        if (cells[3].textContent == cells[4].textContent && cells[4].textContent == "X" || 
                            cells[2].textContent == cells[8].textContent && cells[8].textContent == "X" ) {

                            if (cells[5].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[5].textContent = "O"
                                cells[5].classList.add("o")
                                cells[5].classList.add("clicked")
                                cells[5].classList.remove("availableCells")
                            }
                        } else
                        if (cells[0].textContent == cells[3].textContent && cells[3].textContent == "O" || 
                            cells[7].textContent == cells[8].textContent && cells[8].textContent == "O" || 
                            cells[4].textContent == cells[2].textContent && cells[2].textContent == "O" ) {

                            if (cells[6].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[6].textContent = "O"
                                cells[6].classList.add("o")
                                cells[6].classList.add("clicked")
                                cells[6].classList.remove("availableCells")
                            }
                        } else
                        if (cells[0].textContent == cells[3].textContent && cells[3].textContent == "X" ||
                            cells[7].textContent == cells[8].textContent && cells[8].textContent == "X" || 
                            cells[4].textContent == cells[2].textContent && cells[2].textContent == "X" ) {

                            if (cells[6].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[6].textContent = "O"
                                cells[6].classList.add("o")
                                cells[6].classList.add("clicked")
                                cells[6].classList.remove("availableCells")
                            }
                        } else
                        if (cells[1].textContent == cells[4].textContent && cells[4].textContent == "O" || 
                            cells[6].textContent == cells[8].textContent && cells[8].textContent == "O" ) {
                                
                            if (cells[7].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[7].textContent = "O"
                                cells[7].classList.add("o")
                                cells[7].classList.add("clicked")
                                cells[7].classList.remove("availableCells")
                            }
                        } else
                        if (cells[1].textContent == cells[4].textContent && cells[4].textContent == "X" || 
                            cells[6].textContent == cells[8].textContent && cells[8].textContent == "X" ) {
                                
                            if (cells[7].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[7].textContent = "O"
                                cells[7].classList.add("o")
                                cells[7].classList.add("clicked")
                                cells[7].classList.remove("availableCells")
                            }
                        } else
                        if (cells[6].textContent == cells[7].textContent && cells[7].textContent == "O" || 
                            cells[2].textContent == cells[5].textContent && cells[5].textContent == "O" || 
                            cells[0].textContent == cells[4].textContent && cells[4].textContent == "O" ) {
                            if (cells[8].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[8].textContent = "O"
                                cells[8].classList.add("o")
                                cells[8].classList.add("clicked")
                                cells[8].classList.remove("availableCells")
                            }
                        } else 
                        if (cells[6].textContent == cells[7].textContent && cells[7].textContent == "X" || 
                            cells[2].textContent == cells[5].textContent && cells[5].textContent == "X" || 
                            cells[0].textContent == cells[4].textContent && cells[4].textContent == "X" ) {
                            if (cells[8].classList.contains("clicked")) {
                                let index = Math.floor(Math.random() * availableCells.length)
                                let cellaCasuale = availableCells[index];
                                cellaCasuale.textContent = 'O';
                                cellaCasuale.classList.add("o")
                                cellaCasuale.classList.add('clicked');
                                cellaCasuale.classList.remove('availableCells')
                            } else {
                                cells[8].textContent = "O"
                                cells[8].classList.add("o")
                                cells[8].classList.add("clicked")
                                cells[8].classList.remove("availableCells")
                            }
                        } else {
                            let index = Math.floor(Math.random() * availableCells.length)
                            let cellaCasuale = availableCells[index];
                            cellaCasuale.textContent = 'O';
                            cellaCasuale.classList.add("o")
                            cellaCasuale.classList.add('clicked');
                            cellaCasuale.classList.remove('availableCells')
                        }
                    } else {
                        let index = Math.floor(Math.random() * availableCells.length)
                        let cellaCasuale = availableCells[index];
                        cellaCasuale.textContent = 'O';
                        cellaCasuale.classList.add("o")
                        cellaCasuale.classList.add('clicked');
                        cellaCasuale.classList.remove('availableCells')
                    }
                }
            }
            
            for (var i = 0; i < cells.length ; i++) {
                let setVittoria
                if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent && cells[2].textContent == "X" || 
                    cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent && cells[5].textContent == "X" || 
                    cells[6].textContent == cells[7].textContent && cells[7].textContent == cells[8].textContent && cells[8].textContent == "X" || 
                    cells[0].textContent == cells[3].textContent && cells[3].textContent == cells[6].textContent && cells[6].textContent == "X" || 
                    cells[1].textContent == cells[4].textContent && cells[4].textContent == cells[7].textContent && cells[7].textContent == "X" || 
                    cells[2].textContent == cells[5].textContent && cells[5].textContent == cells[8].textContent && cells[8].textContent == "X" || 
                    cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent && cells[8].textContent == "X" || 
                    cells[2].textContent == cells[4].textContent && cells[4].textContent == cells[6].textContent && cells[6].textContent == "X") {
                    puntiX++
                    document.getElementById("punti_x").textContent = puntiX;
                    document.getElementById("vittoria").textContent = "Hai Vinto!"
                    setTimeout(clearVincitore,1000)
                    setTimeout(riavvia, 1000)
                    return
                }
                if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent && cells[2].textContent == "O" || 
                    cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent && cells[5].textContent == "O" || 
                    cells[6].textContent == cells[7].textContent && cells[7].textContent == cells[8].textContent && cells[8].textContent == "O" || 
                    cells[0].textContent == cells[3].textContent && cells[3].textContent == cells[6].textContent && cells[6].textContent == "O" || 
                    cells[1].textContent == cells[4].textContent && cells[4].textContent == cells[7].textContent && cells[7].textContent == "O" || 
                    cells[2].textContent == cells[5].textContent && cells[5].textContent == cells[8].textContent && cells[8].textContent == "O" || 
                    cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent && cells[8].textContent == "O" || 
                    cells[2].textContent == cells[4].textContent && cells[4].textContent == cells[6].textContent && cells[6].textContent == "O") {
                    puntiO++
                    document.getElementById("punti_o").textContent = puntiO;

                    document.getElementById("vittoria").textContent = "Hai Perso!"
                    setTimeout(clearVincitore,1000)
                    setTimeout(riavvia, 1000)
                    return
                }
                if (document.querySelectorAll(".clicked").length === 9) {
                    puntiPar++
                    document.getElementById("punti_par").textContent = puntiPar
                    document.getElementById("vittoria").textContent = "Pareggio!"
                    setTimeout(clearVincitore,1000)
                    setTimeout(riavvia, 1000)
                    return
                }

            }
        })
    })
})
function riavvia() {
    var cells = document.querySelectorAll(".cell")
    cells.forEach(function(cell) {
        cell.textContent=""
        cell.classList.remove("clicked")
        cell.classList.remove("o")
        cell.classList.add('availableCell')
    });
}
let buttonRiavvia=document.getElementById("button_riavvia")
buttonRiavvia.addEventListener("click", function() {
    riavvia()
    puntiO = 0
    puntiPar = 0 
    puntiX = 0
    document.getElementById("punti_o").textContent = puntiO
    document.getElementById("punti_x").textContent = puntiX
    document.getElementById("punti_par").textContent = puntiPar
    document.getElementById("vittoria").textContent = ""

})
function clearVincitore() {
    document.getElementById("vittoria").textContent = ""
}

