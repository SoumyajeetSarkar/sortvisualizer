
const InsertionSort = (array) => {
    console.log(array);
    var steps = []
    //console.log(steps);
    const size = array.length;
    var temp = array;
    var sortedArr = [];
    var step = {
        skey: temp[1],
        arr: [...temp],
        curr: 1,
        sorted: [...sortedArr],
        comp: 0,
        swap: null,
    }
    steps.push(step);
    for(var i = 1; i<size; i++){
        var key = temp[i];
        var j = i-1;
        sortedArr.push(j);
        while(j>=0 && key<temp[j]){ 
            step = {
                skey: key,
                arr:[...temp],
                curr: i,
                sorted: [...sortedArr],
                comp: j,
                swap: null,
            }
            console.log(step);
            temp[j+1]=temp[j];
            j--;
            steps.push(step);
        }
        step.curr = j+1;
        temp[j+1] = key;
        steps.push(step);
    }
    step = {
        arr:[...temp],
        curr: i-1,
        sorted: [...sortedArr,i-1],
        comp: null,
        swap: null,
    }
    steps.push(step);
    console.log(steps);
    return steps;
}

export default InsertionSort;