import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Home() {
    const sem_subs = [["phys","calc","chem","python"],["beee","diff","oops","eng"],["dsa","dsd","discrete","java"],["cao","toc","daa","mpmc"]]
    const [subjects, setSubjects] = useState([])
    const handleClick = (e)=>{
        setSubjects(sem_subs[e])
    }
  return (
    <div>
      <Header />
      <div className='sems'>
        <button onClick={()=>handleClick(0)} className='sem-title'>Sem 1</button>
        <button onClick={()=>handleClick(1)} className='sem-title'>Sem 2</button>
        <button onClick={()=>handleClick(2)} className='sem-title'>Sem 3</button>
        <button onClick={()=>handleClick(3)} className='sem-title'>Sem 4</button>
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
