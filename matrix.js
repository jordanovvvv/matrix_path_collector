
const matrix = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['+', '-', 'U', '-', '+', '', '', '', 'C'],
    ['|', '', '', '', '|', '', '', '', '|'],
    ['s', '', '', '', '+', '-', '-', '-', '+']
];

let start = true, end = false;
let path = '';
let letters = '';
let goingRight = true;
let goingLeft = false;
let goingUp = false;
let goingDown = false;

var last_i;
var last_j;


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
                last_i = i;
                last_j = j;
                break;
            }
            else if(matrix[i][j] === '-' ||  matrix[i][j] === '@'){
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
            console.log("i: " + i + " j: " + j);
            if(i <=0 )
                break;

            if(j === 0 && ((matrix[i][j] === '+') || (/[A-Z]/.test(matrix[i][j])))){
                path+=matrix[i][j];
                if(goingUp){
                    i--;
                    j++;
                }
                else if(goingDown){
                    i++;
                    j++;
                }
            }

            if(matrix[i][j] === 's'){
                end = true;
                path+=matrix[i][j];
                last_i = i;
                last_j = j;
                break;
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
            else if(matrix[i][j] === '-' || matrix[i][j] === '@'){
                path+=matrix[i][j];
            }
            else if(matrix[i][j] === '|'){
                path+=matrix[i][j];
                if(goingUp)
                    i--;
                if(goingDown)
                    i++;
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

console.log("goingUp: " + goingUp);
console.log("goingDown: " + goingDown);
console.log("goingLeft: " + goingLeft);
console.log("goingRight: " + goingRight);
console.log("last_i: " + last_i);
console.log("last_j: " + last_j);

console.log("Path: " + path);
console.log("Letters: " + letters);



