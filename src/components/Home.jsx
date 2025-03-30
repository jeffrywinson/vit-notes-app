import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'
import '../index.css'

export default function Home() {
    const sem_subs = [["phys","calc","chem","python"],["beee","diff","oops","eng"],["dsa","dsd","discrete","java"],["cao","toc","daa","mpmc"]]
    const [subjects, setSubjects] = useState([])
    function updateSubjects(e){
      setSubjects(sem_subs[e])
    }
  return (
    <div>
      <Header />
      <div className='sems'>
        <div className='flex justify-center'>
            <Button func={()=>updateSubjects(0)} text={"Sem 1"}></Button>
            <Button func={()=>updateSubjects(1)} text={"Sem 2"}></Button>
            <Button func={()=>updateSubjects(2)} text={"Sem 3"}></Button>
            <Button func={()=>updateSubjects(3)} text={"Sem 4"}></Button>
        </div>
      </div>
      <div className='subject-container'>
        {subjects.length>0 ? subjects.map((subject, index)=>{
            return (
                <div key={index} className='subject'>
                    <h2>{subject}</h2>
                </div>
            )
        }) : <h2>Choose semester</h2>}
       </div>
      <Footer />
    </div>
  )
}
