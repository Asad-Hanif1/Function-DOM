// console.log('hello world');





// var head = document.querySelector('#head');
// head.innerHTML = "change through js"
// console.log(head.innerHTML);



// var list = document.querySelector('#list');
// list.innerHTML = '<li>Home</li>'


// function changeList() {
//     list.innerHTML = `<li>Javascript</li>
//     <li>Python</li>
//     <li>PHP</li>`
// }




















// var input = document.querySelector('#input');
// console.log(input.value);

// function getValue (){
//     input.value = ''
//     console.log(input.value);
// }


// var chemMarks = document.querySelector('#chem-marks')
// var phyMarks = document.querySelector('#phy-marks')
// var mathMarks = document.querySelector('#math-marks')
// var comMarks = document.querySelector('#com-marks')
// var studentTotal = document.querySelector('#total-marks')
// var percentage = document.querySelector('#percentage')
// var grade = document.querySelector('#grade')


// function calculatePercentage() {
//     console.log(chemMarks.value);
//     console.log(phyMarks.value);
//     console.log(mathMarks.value);
//     console.log(comMarks.value);

//     var totalMarks = 400;
//     var obtainedMarks = +chemMarks.value + +phyMarks.value + +mathMarks.value + +comMarks.value;
//     console.log('obtained marks ===>', obtainedMarks);
//     studentTotal.innerHTML = obtainedMarks;

//     var studentPercentage = obtainedMarks / totalMarks * 100;
//     percentage.innerHTML = studentPercentage;


//     if(studentPercentage > 80){
//         grade.innerHTML = 'A+'
//     }else if(studentPercentage > 70){
//         grade.innerHTML = 'A'
//     } else if(studentPercentage > 60){
//         grade.innerHTML = 'B'
//     }else{
//         grade.innerHTML = 'FAIL'
//     }
// }













// var chemistry = document.querySelector('#chem-marks');
//          var physics   = document.querySelector('#phy-marks');
//          var math      = document.querySelector('#math-marks');
//          var computer  = document.querySelector('#com-marks');
//          var tot = document.querySelector('#total-marks');
//          var student = document.querySelector('#student-percentage');
//          var Grade = document.querySelector('#grade');

//             function calculate (){
//                 console.log(chemistry.value);
//                 console.log(physics.value);
//                 console.log(math.value);
//                 console.log(computer.value);
//                 var totalmarks = 400;
//      var Obtainedmarks =  +chemistry.value + +physics.value + +math.value + +computer.value;
//      console.log( "obtainedmarks ====> " , Obtainedmarks);
//      tot.innerHTML = Obtainedmarks;
//      var studentpercentage =   Obtainedmarks / totalmarks * 100 ;
//      console.log("percetage ====>" , studentpercentage)
//      student.innerHTML = studentpercentage;
     
//                         if(studentpercentage>90){
//                             console.log(Grade.innerHTML= "A")
//                         }else if(studentpercentage>70){
//                             console.log(Grade.innerHTML="A")
//                         }else if(studentpercentage>60){
//                             console.log(Grade.innerHTML="B")
//                         }else{
//                             console.log(Grade.innerHTML="fail")
//                         }
//             }










































// function calculateGrade() {
//         var subject1 = parseInt(document.getElementById('subject1').value);
//         var subject2 = parseInt(document.getElementById('subject2').value);
//         var subject3 = parseInt(document.getElementById('subject3').value);
//         var subject4 = parseInt(document.getElementById('subject4').value);
    
//         var totalMarks = subject1 + subject2 + subject3 + subject4;
//         var percentage = (totalMarks / 400) * 100;
//         var grade = '';
    
//         if (percentage >= 90) {
//           grade = 'A';
//         } else if (percentage >= 80) {
//           grade = 'B';
//         } else if (percentage >= 70) {
//           grade = 'C';
//         } else if (percentage >= 60) {
//           grade = 'D';
//         } else {
//           grade = 'F';
//         }
    
//         var resultElement = document.getElementById('result');
//         resultElement.innerHTML = 'Obtained Marks: ' + totalMarks + '<br>' +
//                                    'Percentage: ' + percentage.toFixed(2) + '%<br>' +
//                                    'Grade: ' + grade;
//       }

























// var head = document.querySelector('.head');
// var paragraph = document.querySelector("#para");
// console.log(paragraph.innerHTML)

// function changeText(){

//     if(paragraph.innerHTML === 'changed through js' && head.innerHTML === 'changed through js'){
//         paragraph.innerHTML = 'lorem ipsum';
//         head.innerHTML = 'hello world'
//     }else{
//         paragraph.innerHTML = 'changed through js'
//         head.innerHTML = 'changed through js'
//     }
// }






// console.log('hello world');

// function greetUser (user , user2){
//     console.log('hello ' + user + user2);
//     return 'hello ' + user
// }

// var username = greetUser('abdullah');
// console.log('username ===>' , username)





// var head = document.querySelector('.head');
// head.innerHTML = 'changed through js';






// var head = document.querySelector('.head');
// function greetUser() {
//     console.log(head.innerHTML)
//     if(head.innerHTML === 'Hello world'){
//         head.innerHTML = 'changed through js';
//     }else{
//         head.innerHTML = 'Hello world';
//     }
// }



// var input = document.querySelector('.input');

// function getInputValue() {
//     console.log(input.value)
//     input.value = ''
// }






//Template literals
//backtick

// var firstName = 'Asad';
// var lastName = 'hanif';
// var age = 24;

// // console.log('my name is ' + firstName + ' ' + lastName + ' and my age is ' + age);

// console.log(`my name is ${firstName} ${lastName} and my age is ${age}`)




// 4 form field banaingi. 4 subjects ka number user daiga. total marks 400. button ka click paa uska obtained marks, percentage and grade.







































// alert()
// prompt()


// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');




// function greetUser (){   
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// }

// greetUser()
// greetUser()






// function greetUser(){
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
// }
// greetUser()
// greetUser()







//undefined
//null

// var username ;
// console.log(username)





// function greetUser(username , lastname , age){
//     console.log('hello ' + username + lastname + age);
// }

// greetUser('abdullah' , 'khan' , 20)









// function sum(num1 , num2){
//     console.log('sum of two number ===>' , num1 + num2)
// }
// sum(19 , 20)














// var lastname = 'khan'

// function greetUser (){
//     var username = 'abdullah'
//     console.log(username + lastname);
// }

// console.log(username)
// console.log(lastname)

// greetUser()











// function showString(){
//     console.log('hello world')
//     return 'abdullah'
// }
// // showString()
// var myFunc = showString()
// console.log(myFunc);






// function percentageCal (marks1 , marks2 , marks3 , marks4){
//     var totalMarks = 400;
//     var obtainedMarks = marks1 + marks2 + marks3 + marks4
//     return obtainedMarks / totalMarks * 100

// }

// var usmanPercentage = percentageCal(10 , 50 , 90 ,60);

// console.log(usmanPercentage);




// var head = document.querySelector('.head');
// console.log(head.innerHTML);
// head.innerHTML = 'changed through js'
// console.log(head.innerHTML);




// var head = document.querySelector('.head');
// var paragraph = document.querySelector("#para");
// console.log(paragraph.innerHTML)

// function changeText(){

//     if(paragraph.innerHTML === 'changed through js' && head.innerHTML === 'changed through js'){
//         paragraph.innerHTML = 'lorem ipsum';
//         head.innerHTML = 'hello world'
//     }else{
//         paragraph.innerHTML = 'changed through js'
//         head.innerHTML = 'changed through js'
//     }
// }