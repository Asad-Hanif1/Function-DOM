const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const sub3 = document.getElementById("sub3");
const sub4 = document.getElementById("sub4");
const sub5 = document.getElementById("sub5");

document.getElementById("submit").addEventListener("click", result);

// Function to calculate

function result() {
  const val1 = parseInt(sub1.value);
  const val2 = parseInt(sub2.value);
  const val3 = parseInt(sub3.value);
  const val4 = parseInt(sub4.value);
  const val5 = parseInt(sub5.value);

  // Percentage Calculation Formula

  const res = ((val1 + val2 + val3 + val4 + val5) / 500) * 100;

  // To print the output

  const print = "You have secured " + res + " %";

  // Validate the inputs

  if (isNaN(val1) === true) {
    document.getElementById("sub1").innerHTML = "cannot";
  } else {
    console.log("k");
  }

  if (isNaN(val2) === true) {
    console.log("e");
  } else {
    console.log("k");
  }

  if (isNaN(val3) === true) {
    console.log("e");
  } else {
    console.log("k");
  }

  if (isNaN(val4) === true) {
    console.log("e");
  } else {
    console.log("k");
  }

  if (isNaN(val5) === true) {
    console.log("e");
  } else {
    console.log("k");
  }

  // Success and Error message

  if (isNaN(res) === true) {
    document.getElementById("result").innerHTML = "Please enter your marks";
  } else {
    document.getElementById("result").innerHTML = print;
  }
}






// var ChemMarks = document.querySelector('#chem-marks');
// var EngMarks = document.querySelector('#eng-marks');
// var ComMarks = document.querySelector('#com-marks');
// var SSTMarks = document.querySelector('#sst-marks');
// var SciMarks = document.querySelector('#sci-marks');
// var IslMarks = document.querySelector('#isl-marks');
// var UrduMarks = document.querySelector('#urdu-marks');
// var SindhiMarks = document.querySelector('#sin-marks');
// var studenTotal = document.querySelector('#total-marks');
// var percentage = document.querySelector('#percentage');
// var grade = document.querySelector('#grad');


// function calculatePercentage(){
//     console.log(ChemMarks.value);
//     console.log(EngMarks.value);
//     console.log(ComMarks.value);
//     console.log(SSTMarks.value);
//     console.log(SciMarks.value);
//     console.log(IslMarks.value);
//     console.log(UrduMarks.value);
//     console.log(SindhiMarks.value);
    
//     var totalMarks = 800;
//     var obtainedMarks = +ChemMarks.value + +EngMarks.value + +ComMarks.value + +SSTMarks.value + +SciMarks.value + +IslMarks.value + +UrduMarks.value + +SindhiMarks.value;
//     console.log('obtained marks ===>', obtainedMarks);
//     studenTotal.innerHTML = obtainedMarks;
//     var studentPercentage = obtainedMarks / totalMarks * 100;
//     percentage.innerHTML = studentPercentage;
//     var grade = document.getElementById('grade')

    
//     if(studentPercentage >= 85) {
//         grade.innerHTML = 'A+';
//     }else if(studentPercentage >= 70) {
//         grade.innerHTML = 'A';
//     }else if(studentPercentage >= 60) {
//         grade.innerHTML = 'B';
//     }else if(studentPercentage >= 50) {
//         grade.innerHTML = 'C';
//     }else if(studentPercentage >= 40) {
//         grade.innerHTML = 'D';
//     }else{
//         grade.innerHTML = 'FAIL';
//     }

// }