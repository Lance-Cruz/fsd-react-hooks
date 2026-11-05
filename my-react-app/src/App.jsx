import { useState } from 'react'
import './App.css'

function App()
{
    const [name, setName]=useState("");
    const [grade, setGrade]=useState("");
    const [students, setStudents]=useState([]);

    const studentObject = {
      fname : name,
      finalGrade : grade,
    }

    const addStudents=() => {
        setStudents([...students,  studentObject]) //add a student base on clicked
    }

    if (grade >= 70) {
      studentObject.status = "First Class"
    } else if (grade >= 40) {
      studentObject.status = "Pass"
    } else {
      studentObject.status = "Fail"
    }

  let average = Math.max(...studentObject.finalGrade)
  console.log(average)

  var avgGrad = studentObject.finalGrade / students.length

  return(
  <div>
    <h1>Student Grade Tracker</h1>
    <input type="text" value={name} onChange = {(e) => setName(e.target.value)}/>

    <input type="text" value={grade} onChange = {(e) => setGrade(e.target.value)}/>

    <button onClick={addStudents}>Add Student</button>

    <hr></hr>
    <h2>Statistics </h2>

    <p>Number of student: {students.length}</p>

    <p>Average Grade: {avgGrad} </p>
      
    <p>Highest Grade: {Math.max(...students.map(studentObject => studentObject.finalGrade))}</p> 

    <p>Lowest Grade: {Math.min(...students.map(studentObject => studentObject.finalGrade))}</p>
    <hr></hr>

    <h2>Students</h2>

    {students.map((studentObject,index) => (
      <p key={index}> {studentObject.fname} {studentObject.finalGrade} {studentObject.status} <button> Delete</button></p>
    ))}
  </div>
  );
}

export default App
