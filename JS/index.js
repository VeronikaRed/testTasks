// JS логика
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]
let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},{"name":"Dima","email":"dima@example.com","age":34},{"name":"Colya","email":"colya@example.com","age":46},{"name":"Misha","email":"misha@example.com","age":16},{"name":"Ashan","email":"ashan@example.com","age":99},{"name":"Rafshan","email":"rafshan@example.com","age":11},1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]

// ***1
function cloneDee(obj){
    let cloned = JSON.parse(JSON.stringify(obj));
    console.log(obj[0].skills === cloned[0].skills)
    return cloned
}
cloneDee(testData3);

// ***2
let arrays = [[1, 2, 3], [4, 5], [6]];

function convolution(arg){
    let newArr = arg.reduce((a, b) => a.concat(b))
    console.log('convolution', newArr);
    return newArr;
}
convolution(arrays)

// ***3
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.1)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    let res;
    try {res = primitiveMultiply(a, b);}
        catch(error){  
            res = reliableMultiply(a, b)
        }
    return res;
}
console.log(reliableMultiply(8, 8));

// ***4
let arr = [1, 2, 3];
Array.prototype.append = function(startNumber){
    let newArr = [startNumber, ...this]
    return newArr
}
console.log(arr.append(0))

// ***5
arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function recuseLog(arr) {
    if (arr.length != 0){
        console.log(arr[0]);
        recuseLog(arr.slice(1, arr.length))
    }
} 
recuseLog(arr);

// ***6
var a = function(one, two) {
  return one + two
}

var b = function() {
  return false;
}

parallel(
    [[a, [1, 2]], [b]], function(results) {
    console.log(results);
});

function parallel(arr, func){
    let res = [];
    for(let item of arr){
        if(item.length>1){
            res.push(item[0](...item[1]))
        }else{
            res.push(item[0]())
        }
    }
    func(res)
}

// ***7
function array_find(arr, filter) {
    if (!Array.isArray(arr) || !arr.length ) {
        return [];
    } else {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i].toString()
     
            if (str.match(filter)) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}
console.log(array_find(testData, /^raf.*/i));
console.log(array_find(testData, "Rafshan"));

// ***8
function array_skip_until(arr, value) {
    if (!Array.isArray(arr) || !arr.length ) {
        return []
    } else {
        let index = arr.findIndex(i=>i==value)
        if(index<0)return[];
        let result = arr.slice(index)
        return result
    }
}
console.log(array_skip_until(testData, 2))
console.log(array_skip_until(testData, "Rafshan"))
console.log(array_skip_until(testData, "asd"))

// ***9
function array_normalize(arr, shema, bool = false){
    let res = [];
    
    for (let item of arr){
        if(typeof item == shema){
            res.push(item)
        }
    }
    return res
}
console.log(array_normalize(testData4, 'string'))

// ***10
function array_unique(arr){
    if (!Array.isArray(arr) || !arr.length ) {
        return [];
    } else {
        let newArr = [];
        for(let item of arr){
            if(!newArr.includes(item)){
                newArr.push(item);
            }
        }
        return newArr;
    }
}
console.log(array_unique(testData2.concat(testData)));

// ***11
function findByKey(obj, keys, result){
    for (let key in obj){
        if(key === keys[0]){
            if(keys.length>1){
                keys.splice(0,1)
                findByKey(obj[key], keys, result)
            }else{
                result.push(obj[key]) 
            }
        }
    }
}

function array_pluck(arr, path){
    let result = [];
    for(let object of arr){
        findByKey(object, path.split('.'), result)
    }
    console.log(result);
    return result;
}
array_pluck(testData3, 'name')
array_pluck(testData3, 'skills.php')

// ***12
function array_combine(keys, values){
    let obj = {};
    for(let i=0; i<keys.length; i++){
        let a = keys[i];
        obj[a] = values[i];
    }
    console.log(obj);
    return obj;
}
array_combine(testData, testData2);
