// Vérifie que le document html est fini de chargé 
document.addEventListener('DOMContentLoaded', function(event){
    // Constantes
    const result = document.getElementById('result');
    const caracteresToAdd = document.getElementsByClassName("caracterToAdd");
    const resetButton = document.getElementById('reset');
    const send = document.getElementById('send');
    const deleteButton = document.getElementById('delete');
    let reg = new RegExp("^[\\d\\W]+$");


    // Events Listener
    Array.prototype.forEach.call(caracteresToAdd, carater => {
        carater.addEventListener('click', element => {
            addCaracter(carater.innerHTML);
        })
    })

    deleteButton.addEventListener('click', element =>  {
        deleteLastCaracter();
    })

    resetButton.addEventListener("click", element => {
        reset();
    })

    send.addEventListener('click' , element => {
        calculate();
    })

    document.addEventListener('keyup', key => {
        switch (key.key) {
            case "Enter":
                calculate();
                break;
            case "Delete" :
                reset();
                break;
            case "Backspace" : 
                deleteLastCaracter();
                break;
            default:
                if (reg.test(key.key)) {
                    addCaracter(key.key);
                }
                break;
        }
    })


    // Fonctions 
    function addCaracter(newCaratere){
        // result.value = result.value + newCaratere;
        result.value += newCaratere;
    }

    function reset() {
        result.value = "";
    }

    function calculate(){
        result.value = eval(result.value);
    }
    
    function deleteLastCaracter(){
        result.value = result.value.slice(0, -1)
    }
})