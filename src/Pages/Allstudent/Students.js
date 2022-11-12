import React from 'react';
import "../Allstudent/Allstudents.css"

const Students = ({student,index}) => {
    console.log(index)
    const {banglaName,courseName,totalFee,totalPaid,_id,img}=student;

    return (
        
             <div className='student'>
                            <div className='student-name student-info'>
                                <h6 className='text-center'> নং/  {index + 1}</h6>
                            </div>
                            <div className='student-name student-info'>
                              <div className='mx-auto d-flex justify-content-between'>
                              <img src={img}  className="profile-img"/>
                              </div>
                            </div>
                            <div className='student-name student-info'>
                                <h6 className='text-center'> {banglaName}</h6>
                            </div>
                            <div className='course-name student-info'>
                                 <h6 className='text-center'> {courseName}:</h6>
                            </div>
                            <div className='total-fee student-info'>
                            <h6 className='text-center'> {totalFee} /= </h6>
                            </div>
                            <div className='total-paid student-info'>
                            <h6 className='text-center'>{ totalPaid } /=</h6>
                            </div>
                            <div className='view-profile student-info text-center'>
                                <button className='text-center form-control btn-primary bg-primary text-light'>প্রোফাইল দেখুন</button>
                            </div>

                        </div>
    
    );
};

export default Students;