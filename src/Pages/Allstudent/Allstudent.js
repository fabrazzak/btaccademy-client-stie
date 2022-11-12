import React, { useEffect, useState } from 'react';

import "../Allstudent/Allstudents.css"
import Students from './Students';

const Allstudent = () => {

 const [students,setStudent]=useState([]);

 useEffect(()=>{
    fetch('http://localhost:5000/students')
        .then(res=>res.json())
        .then(data =>setStudent(data))
 },[])
 console.log(students);


    return (
        <div>
            <h3 className='text-center  fw-bold border p-4 border-1 border-dark bg-secondary text-light'>সর্বমোট ছাত্র ছাত্রী সংখ্যা  {students.length} জন ।</h3>


            <div id='students-table'>
                <div className='students-table-wraper'>
                    <div className='students'>
                        {
                            students.map(student => <Students student={student} key={student._id} ></Students>)
                        }
                       
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Allstudent;