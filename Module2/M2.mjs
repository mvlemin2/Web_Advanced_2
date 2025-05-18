const studentNameInput = document.getElementById('student');
const courseInput = document.getElementById('course');
const gradeInput = document.getElementById('grade');
const addGrade = document.getElementById('addGradebtn');
const studentOverviewDiv = document.getElementById('studentOverview');

let studentData = [];

addGrade.addEventListener('click', () => {
    const name = studentNameInput.value;
    const course = courseInput.value;
    const grade = Number(gradeInput.value);

    if(!name || !course || !grade){
        alert("Alle velden invullen");
        return;
    }

    const student = {
        name: name,
        course: course,
        grade: grade
    };

    studentData.push(student);

    updateView();

    courseInput.value = '';
    gradeInput.value = '';
})

// function updateView(){
//     let view = '';

//     for(let student of studentData){
//         let average = 0:
//         if
//     }
// }