import React from 'react'

const BubbleSort = (array) => {
    //console.log(array);
    var steps = []
    //console.log(steps);
    const size = array.length;
    var temp = array;
    
    for(var i = size; i>1;i--){
        
        for(var j=0;j<i;j++){
            var step = {
                arr: [...temp],
                curr: j,
                comp: j+1,
                swap: -1,
            }
            if(temp[j]>temp[j+1]){
                
                //console.log(temp);
                step = {
                    arr: [...temp],
                    curr: j,
                    swap: j+1,
                    comp: j+1,
                }
                let swap = temp[j+1];
                temp[j+1] = temp[j];
                temp[j] = swap;
                
                //console.log(steps);
            }
            steps.push(step);
        }
    }
    console.log(steps);
    return steps;
}

export default BubbleSort