let box = document.getElementById('display');

addtoscreen = x => {
    box.value += x;
    if(x === 'C'){
        box.value = ''
    }
}

let equal = document.getElementById('calculate');


calc = x =>  {   
   x = box.value
   var arrr = x.split(' ')

    
    for(let char = 0; char < arrr.length; char++){
            add = () => {
                if(arrr[char] === '+'){
                    var result = parseInt(arrr[char-1]) + parseInt(arrr[char+1]);
                    console.log(box.value = result);
                    
                }
            }
            minus = () => {
                if(arrr[char] === '-'){
                    var result = parseInt(arrr[char-1]) - parseInt(arrr[char+1]);
                    console.log(box.value = result);
                }
            }
            multiply = () => {
                if(arrr[char] === '*'){
                    var result = parseInt(arrr[char-1]) * parseInt(arrr[char+1]);
                    console.log(box.value = result);
                }
            }

            function operator(){
                add()
                minus()
                multiply()
                eval(x)
            }
         operator()
    }
    
}


