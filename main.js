/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ

*/
/*
let number1 ='5';
let number2 ='5';

let condition1 = number1 >= number2;//Boolean ค่าที่ได้จะเป็น true  หรือ false
console.log('result of condition is',condition1);
*/

/*



let number1 = 5;
let number2 = 10;

//if - else condition

if (number1 >= number2) {
        console.log('this is if');

} else if (number1 == number2){
    console.log('this is else if');
}

else {
    console.log('this is else');
}
    */


/*
>=80 เป็นเกรด A
>=70 เป็นเกรด B
>=60 เป็นเกรด C
>=50 เป็นเกรด D
*/

/*
let score = prompt('Enter your score: ');
console.log('your score is ' + score);
//if - else condition 
if (score >= 80) { //false
    console.log('you are grade A');
}else if (score >= 70) { //false
    console.log('you are grade B');
}else if (score >= 60) { //true
    console.log('you are grade C');
}else if (score >= 50) {
    console.log('you are grade D');
}else {
    console.log('you are grade F')
}
    */

/*
&& และ
|| หรือ
! not หรือ ไม่
*/

/*
let number1 = 5;
let number2 = 8;
// true && false = false
let condition = number1 >= 3 || number2 >=10;
console.log('result of condition',condition);

let age =30;
let gender = 'male'

// true && true = true
if (age >= 20 && gender == 'male'){
    console.log('You are male adult');
}
    */

/*
let number = 20;

if (!(number % 2 == 0)){
    console.log('you are even number');

}
    */
/*  ถ้าไม่ลงตัวจะแสดงข้อความ  */

/*
while loop
for
*/
/*
let counter =0;

while (counter <= 10){//true
    console.log("while loop");
    counter = counter +1;

}

for (let counter =0; counter = counter + 1 ){
    
}
*/

/*
array
*/

/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1, age2, age3, age4);

let ages = [30,35,40];
console.log ('new age', ages[2]);
console.log ('age list',ages);

//1.แทนค่าใน array
ages = [45,50];
console.log('new age', ages);

///2 ต่อ array
ages.push [55];
console.log('new age', ages);
*/

/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log (age1, age2, age3, age4);

let ages = [30,35,40,45,50];
console.log(ages);
ages.sort();
console.log (ages);

let  names_list = ['John','Bob','Alice','Mary'];
names_list.push('Mike');
console.log(names_list.length);
console.log(names_list[0]);

for (let index = 0; index <= names_list; index++){
    console.log('names list', names_list[index]);
}
*/

/*
object
*/

/*
let student =[{
    name: 'zz',
    age: 90,
    grade: 'A'
}, {
    name: 'aa'
    age: 66,
    grade: 'B'
}];
st

for (let index = 0; index < student.length; index++);
    console.log('Student number',(index + 1));
    console.log('name',student[index].name);
    console.log('age',student[index].age)
    console.log('grade',student[index].grade)
*/

/*
object + array
*/


/*
let scores1 = 50
let scores2 = 90
let grades = ''

function calculateGrade(scores) {
    if (scores >= 80) {
        grades = 'A'
    }else if (scores >= 70){
        grades = 'B'
    }else if (scores >= 60){
        grades = 'C'
    }else if (scores >= 50){
        grades = 'D'
    }else {
        grades = 'F'
    }
    return grades
}
let student1 = calculateGrade(scores1)
let student2 = calculateGrade(scores2)
console.log('grad:', student1, student2)
*/


/*
array
*/

/*  111111111
let  scores = [10, 20, 30, 40, 50];
for (let index =0 ; index < scores.length; index++){
    console.log(scores[index])
}
/* 1
scores[0] = scores[0] * 2;
scores[1] = scores[1] * 2;
scores[2] = scores[2] * 2;
scores[3] = scores[3] * 2;
scores[4] = scores[4] * 2;
*/
/*  1
scores = scores.map((S) => {
    return S*2;
});
scores.forEach((s) => {
    console.log('score:',s)

})*/

/*
array
 */


/*5555
let scores = [10, 20, 30, 40];
//let newScores = []

for (let index = 0; index < scores.length; index++) {
    console.log('Scores',scores[index]);
    /*
    if (scores[index] >= 30) {
        newScores.push(scores[index]);
    }
    
}
/* 5555
let newScores = scores.filter((s) => {
    return s >= 20; 
})

newScores.forEach((ns) => {
    console.log('New Score',ns);
})
    */

let students = [
    {
        name: 'John',
        score: 90,
        grade: 'A'
    },
    {
        name: 'Jane',
        score: 75,
        grade: 'B'
    },
    {
        name: 'Jim',
        score: 60,
        grade: 'C'
    }
]
let student = students.find((s) => {
    if (s.name == 'Jane') {
        return true
    }
})
let doublescore_student = students.map((s)=> {
    s.score= s.score * 2

})

let highscore_student = students.filter((s)=> {
   if ( s.score > 80) {
    return true
   }

})
console.log('student:',student)