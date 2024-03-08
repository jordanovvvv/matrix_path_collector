
const matrix = [
    ['>', '-', '-', '-', 'A', '-', '-', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['s', '-', 'B', '-', '+', '', '', '', 'C'],
    ['', '', '', '', '|', '', '', '', '|'],
    ['', '', '', '', '+', '-', '-', '-', '+']
];

let start = true, end = false;
let path = '';
let letters = '';
let goingRight = true;
let goingLeft = false;
let goingUp = false;
let goingDown = false;



for(let i = 0; i < matrix.length; i++){
    let rowLength = matrix[i].length;
    if(goingRight){
        for(let j = 0; j < rowLength; j++){
            if(matrix[i][j] === '>' && start){
                start = false;
                path+='@';

            }
            else if(/[A-Z]/.test(matrix[i][j])){
                path+=matrix[i][j];
                letters+=matrix[i][j];

                if(j === rowLength - 1){
                    j--;
                    i++;
                }


            }
            else if(matrix[i][j] === 's'){
                end = true;
                path+=matrix[i][j];
                break;
            }
            else if(matrix[i][j] === '-'){

                path+=matrix[i][j];
            }
            else if(matrix[i][j] === '|'){
                path+=matrix[i][j];
                j--;
                i++;
            }
            else if(matrix[i][j] === '+'){
                path+=matrix[i][j];


                if(i === matrix.length - 1 && j === rowLength - 1){
                    goingLeft = true;
                    goingRight = false;
                    i--;
                }
                else if(j === rowLength - 1){
                    goingLeft = true;
                    goingDown = true;
                    goingRight = false;
                    goingUp = false;
                    j--;
                    i++;
                }
                else if(goingUp){
                        if(goingRight) {
                            goingRight = false;
                            goingLeft = true;
                            goingDown = true;
                            goingUp = false;
                        }
                        else if(goingLeft){
                            goingLeft = false;
                            goingRight = true;
                            goingDown = true;
                            goingUp = false;
                        }
                        j -= 2;
                    }
                    else if(goingDown){
                        if(goingRight) {
                            goingRight = false;
                            goingLeft = true;
                            goingUp = true;
                            goingDown = false;
                        }
                        else if(goingLeft){
                            goingLeft = false;
                            goingRight = true;
                            goingUp = true;
                            goingDown = false;
                        }
                        i -= 2;
                    }

            }

        }


    }
    else if(goingLeft){
        for(let j = rowLength - 2; j >= 0; j--){

            if(matrix[i][j] === 's'){
                end = true;
                path+=matrix[i][j];
            }
            else if(/[A-Z]/.test(matrix[i][j])){
                path+=matrix[i][j];
                letters+=matrix[i][j];
                if(goingLeft){
                    continue;
                }
                else if(goingDown){
                    i++;
                }
                else if(goingUp){
                    i--;
                }
            }
            else if(matrix[i][j] === 's'){
                end = true;
                path+=matrix[i][j];
                break;
            }
            else if(matrix[i][j] === '-'){
                path+=matrix[i][j];
            }
            else if(matrix[i][j] === '|'){
                path+=matrix[i][j];
                if(goingUp)
                    i--;
                j++;
            }
            else if(matrix[i][j] === '+'){
                path+=matrix[i][j];


                if(goingUp){
                    if(goingRight) {
                        goingRight = false;
                        goingLeft = true;
                        goingDown = true;
                        goingUp = false;
                    }
                    else if(goingLeft){
                        goingLeft = false;
                        goingRight = true;
                        goingDown = true;
                        goingUp = false;
                    }

                }
                else if(goingDown){
                    if(goingRight) {
                        goingRight = false;
                        goingLeft = true;
                        goingUp = true;
                        goingDown = false;
                    }
                    else if(goingLeft){
                        goingLeft = false;
                        goingRight = true;
                        goingUp = true;
                        goingDown = false;
                    }
                    j++;
                    i--;
                }



            }
        }
    }
    if(end){
        break;
    }
}

console.log("Path: " + path);
console.log("Letters: " + letters);



