// alert("Welcome to your bank")

// var deposit = prompt("How much would you like to deposit today?")
// alert("You've deposited: " + deposit)

// console.log("You are a cool person")

// var weightP = prompt('Enter your wight: ');

// var weightKg = Number(weightP) * 0.454;
// console.log(weightKg);

// alert("Your weight in kg is: " + weightKg);
// console.log("conversion completed");

// word = "javascript"

// for (var index = 0; index < word.length; index += 2) {
//   console.log(word[index])
  
  
// }

// if (word == "python"){
//   console.log('cuvantul testat este python')
// }else if (word == 'javascript'){
//   console.log('cuvantul testat este js')
// }else{
//   console.log('cuvantul testat este:' + word)
// }

// for (let i = 1; i < 25; i++) {
//   if (i % 2 != 0){
//     console.log(i)
//   }
  
// }

// var yourName = prompt('name: ')
// var age = prompt('age: ')
// if (yourName[0] == 'M' && yourName.length == 6 && age > 20 && age < 33){
//   console.log('Ce faci mah? Salut!')
// }


// function hello(name="Marius", title='sir'){
//   console.log(title + ' ' + name);
//   return title + name
// }

// hello()

// function testFunct(file){
//   if (file.length === 10) {
//     return true;
//   } else{
//     return false;
//   }
// }

// testFunct("354235")

// function multiplyStr(str, n){
//   var returnStr = ""
//   for (var i = 0; i < n; i++){
//     returnStr += str
//   }
//   return returnStr
// }

// //array methods

// var myArr = ['one', 2.0, 'python']
// myArr.pop()
// console.log(myArr);

// var files = ['txt', 'png', 'jpg']
// for (file of files){
//   console.log(file)
// }
// files.forEach(alert)


function addName(arr){
  var myName = prompt('numele: ')
  arr.push(myName);
}

function rmvName(arr){
  var myName = prompt('numele: ')
  arr.splice(arr.indexOf(myName), 1);
}

var option = prompt('What would you like to do?')

var arr = [];
while (option !== 'exit'){
  if (option === 'add'){
    addName(arr);
  }else if (option === 'display'){
    console.log(arr);
  }else{
    rmvName(arr)
  }
  option = prompt('What would you like to do?')
}
console.log('exit')

var people = {firstName: "Marius", lastname: "Ciurea"}
console.log(people);
console.log(people['firstName']);
for (item in people){
  console.log(item);
  console.log(people[item]);
}