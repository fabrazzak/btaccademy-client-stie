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


    return (
        <div>
            <h3 className='text-center  fw-bold border p-4 border-1 border-dark bg-secondary text-light'>সর্বমোট ছাত্র ছাত্রী সংখ্যা  {students.length} জন ।</h3>


            <div id='students-table'>
                <div className='students-table-wraper'>
                    <div className='students'>

                    <div className='student'>
                            <div className='student-name student-info '>
                                <h6 className='text-center'>S/L </h6>
                            </div>
                            <div className='student-name student-info '>
                                <h6 className='text-center'>ছবি </h6>
                            </div>
                            <div className='student-name student-info '>
                                <h6 className='text-center'>নাম: </h6>
                            </div>
                            <div className='course-name student-info '>
                                 <h6 className='text-center'>র্কোসের নাম:</h6>
                            </div>
                            <div className='total-fee student-info'>
                            <h6 className='text-center'>মোট ফি: </h6>
                            </div>
                            <div className='total-paid student-info'>
                            <h6 className='text-center'>মোট জমা:</h6>
                            </div>
                            <div className='view-profile student-info text-center'>
                            <h6 className='text-center'>প্রোফাইল </h6>
                            </div>

                        </div>
                        {
                            students.map(student => <Students student={student} index={students.indexOf(student)}  key={student._id} ></Students>)
                           
                            
                        }
                        
                       
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Allstudent;