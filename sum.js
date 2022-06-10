function solve(arr, start, end) {
    if (Array.isArray(arr) == false) {
        return NaN;
    }
    if (start  < 0) {
        start = 0;
    }
    if (end > arr.length - 1){
        end = arr.length - 1;
    }
    let sum = 0;

    for (let i = start; i <= end, i++;){
        sum += Number(arr[i])
    }
    return sum;
}


function test(name, actual, expected) {
    if (Number.isNaN(expected) && Number.isNaN(actual)) {
        console.log(name, 'Pass')
    }else if (actual.toFixed(2) == expected.toFixed(2)) {
        console.log(name, 'Pass');
    }else {
        console.log('Fail')
    }
}

test('Case A', solve([10, 20, 30, 40, 50, 60], 3, 300) == 150)
