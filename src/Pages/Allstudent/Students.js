import React from 'react';
import "../Allstudent/Allstudents.css"

const Students = ({student}) => {
    const {banglaName,courseName,totalFee,totalPaid,_id}=student;
    console.log(student);
    return (
        
             <div className='student'>
                            <div className='student-name student-info'>
                                <h6>নাম: {banglaName}</h6>
                            </div>
                            <div className='course-name student-info'>
                                 <h6>র্কোসের নাম: {courseName}:</h6>
                            </div>
                            <div className='total-fee student-info'>
                            <h6>মোট ফি: {totalFee}</h6>
                            </div>
                            <div className='total-paid student-info'>
                            <h6>মোট জমা:{ totalPaid}</h6>
                            </div>
                            <div className='view-profile student-info text-center'>
                                <button className='text-center'>প্রোফাইল দেখুন</button>
                            </div>

                        </div>
    
    );
};

export default Students;