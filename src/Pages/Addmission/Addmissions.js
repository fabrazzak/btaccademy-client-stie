import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../Addmission/Addmission.css";
import uploadImg from "../../Img/upload-icon.png";
import { Toast } from "bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addmissions = () => {

 
  const handleClick = (event) => {
    document.getElementById("formFile").click();
    event.currentTarget.classList.add("upload-img");
  };

  const imageStorageKey='ecd4b61be352b594a80d23e92a45661a';

  const date = new Date();
  const currentDay= date.getDate();
  const currentMonth= date.getMonth();
  const currentYear= date.getFullYear();
  const addmissionDate= currentDay + "/" + currentMonth + "/" + currentYear;


  const handleAddStudent = (event) => {
    event.preventDefault();
    const banglaName = event.target.banglaName.value;
    const englishName = event.target.englishName.value;
    const fatherName = event.target.fatherName.value;
    const englishFatherName = event.target.englishFatherName.value;
    const village = event.target.village.value;
    const postOffice = event.target.postOffice.value;
    const upazila = event.target.postOffice.value;
    const zila = event.target.zila.value;
    const email = event.target.email.value;
    const religion = event.target.religion.value;
    const refarance = event.target.refarance.value;
    const presentAddress = event.target.presentAddress.value;
    const dateOfBirth = event.target.dateOfBirth.value;
    const mobile = event.target.mobile.value;
    const eduQalification = event.target.eduQalification.value;
    const totalFee = event.target.totalFee.value;
    const totalPaid = event.target.totalPaid.value;
    const courseName = event.target.courseName.value;
    const sRoll = event.target.sRoll.value;
    const sResult = event.target.sResult.value;
    const sPassingYear = event.target.sPassingYear.value;
    const sDivision = event.target.sDivision.value;
    const jRoll = event.target.jRoll.value;
    const jResult = event.target.jResult.value;
    const jPassingYear = event.target.jPassingYear.value;
    const jDivision = event.target.jDivision.value;


    const jscInfo = {
      roll: jRoll,
      result: jResult,
      passingYear: jPassingYear,
      division: jDivision,
    };
    const sscInfo = {
      roll: sRoll,
      result: sResult,
      passingYear: sPassingYear,
      division: sDivision,
    };
    const permanentAddress = {
      village,
      postOffice,
      upazila,
      zila,
    };
  

    
    const fileField= document.querySelector('input[type="file"]');
    const formData= new FormData();
   const image=fileField.files[0];
   formData.append('image',image)
   
   const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
   fetch (url,{
    method:'POST',
    body: formData
   })
   .then(res=> res.json())
   .then(result =>{

    if (result.success){
      
     
      const img= result.data.url;
      const student = {
        banglaName,
        englishName,
        fatherName,
        englishFatherName,
        permanentAddress,
        email,
        religion,
        refarance,
        presentAddress,
        dateOfBirth,
        mobile,
        totalFee,
        totalPaid,
        courseName,
        jscInfo,
        sscInfo,
        eduQalification,
        addmissionDate,
        img
      
      };
     


      fetch('http://localhost:5000/students', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(student),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);

    event.target.reset();
    
   toast("Addmission success full");
   
  })
  .catch((error) => {
    console.error('Error:', error);
  });

   

    }
   } )

   
   

   
  };

  return (
    <div>
      <section id="addmission-section">
        <h2 className="text-center pt-5 addmission-heading">?????????????????? ????????????????????? ?????????????????????</h2>
        

        <div className="addmission-wrapper">
          <div className="addmission-form">
            <form className="row g-3 needs-validation" onSubmit={handleAddStudent}>
              <div className="addmission-form-top">
                <div className="addmission-date">
                  <h5>?????????????????? ???????????????: { addmissionDate}</h5>
                 
                </div>
                <div className="addmission-title">
                  <h3>??????????????? ?????????</h3>
                </div>
                <div className="student-img" onClick={handleClick}>
                <div className="mb-3 img-file-upload   ">
                <input className="form-control " name="imgFile"  type="file" id="formFile" required />
              </div>

                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  ??????????????? / ????????????????????? ?????????: ( ?????????????????? )<strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="text" className="form-control" name="banglaName" id="validationCustom01" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">
                  ??????????????? / ????????????????????? ?????????: ( ?????????????????? ) <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" id="validationCustom02" name="englishName" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  ??????????????? ?????????: ( ?????????????????? )<strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="text" className="form-control" name="fatherName" id="validationCustom01" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">
                  ??????????????? ?????????: ( ?????????????????? ) <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="englishFatherName" id="validationCustom02" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  ??????????????? ?????????: ( ?????????????????? )<strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="text" className="form-control" name="motherName" id="validationCustom01" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">
                  ??????????????? ?????????: ( ?????????????????? ) <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="englishMotherName" id="validationCustom02" required />
              </div>

              <h5 className="mt-4">?????????????????? ??????????????????</h5>

              <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">
                  ???????????????:
                  <strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="text" className="form-control" name="village" id="validationCustom01" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ???????????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" id="validationCustom02" name="postOffice" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">
                  ??????????????????:
                  <strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="text" className="form-control" name="upazila" id="validationCustom01" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ????????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="zila" id="validationCustom02" required />
              </div>

              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ????????????????????? ??????????????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="presentAddress" id="validationCustom02" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ???????????????????????? ?????????????????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="eduQalification" id="validationCustom02" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">
                  ??????????????????????????? ?????????????????? ???????????????:
                  <strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="number" className="form-control" name="mobile" id="validationCustom01" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ??????????????????????????? ?????????????????? ???????????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="number" className="form-control" name="parentMobile" id="validationCustom02" required />
              </div>

              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ???????????? ???????????????: ( ?????????-?????????-????????? ) <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="dateOfBirth" id="validationCustom02" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">
                  ????????????:
                  <strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="text" className="form-control" name="religion" id="validationCustom01" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ????????????????????????????????? ?????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="refarance" id="validationCustom02" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ???-????????????:: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="email" className="form-control" name="email" id="validationCustom02" required />
              </div>

              <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">
                  ??????.??????.?????? ?????????:
                  <strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="number" className="form-control" name="sRoll" id="validationCustom01" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ???????????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="sResult" id="validationCustom02" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">
                  ??????????????? ??????:
                  <strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="number" className="form-control" name="sPassingYear" id="validationCustom01" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ???????????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="text" className="form-control" name="sDivision" id="validationCustom02" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ??????.??????.?????? ?????????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="number" className="form-control" name="jRoll" id="validationCustom02" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">
                  ???????????????:
                  <strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="text" className="form-control" name="jResult" id="validationCustom01" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">
                  ??????????????? ??????: <strong className="text-danger fs-4">*</strong>
                </label>
                <input type="number" className="form-control" name="jPassingYear" id="validationCustom02" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">
                  ???????????????:
                  <strong className="text-danger fs-4"> *</strong>
                </label>
                <input type="text" className="form-control" name="jDivision" id="validationCustom01" required />
              </div>

              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">
                  ?????? ?????????????????? ??????????????????????????? ??????????????? ???????????? ??????????????????:
                </label>
                <select className="form-select" defaultValue={"DEFAULT"} name="courseName" id="validationCustom04" required>
                  <option valu='DEFAULT' >???????????? ??????????????? ??? ?????????</option>
                  <option valu='2' >???????????? ??????????????? ??? ?????????</option>
                  <option valu='3' >???????????? ?????????????????? ????????? ??????????????????????????? ????????????????????????????????? </option>
                  <option valu='4' >????????????????????? ??????????????????????????? </option>
                  <option valu='5' >??????????????????????????????????????? ????????????????????? ??????????????? ??? ?????? ????????? </option>
                </select>
              </div>
              

              <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">
                  ??????????????? ??????:
                </label>
                <input type="text" className="form-control" name="totalFee" id="validationCustom05" required />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">
                  ?????? ?????????:
                </label>
                <input type="text" className="form-control" name="totalPaid" id="validationCustom05" required />
              </div>
              <ToastContainer />
              <div className="col-12 ">
                <button className="btn btn-primary form-submit form-control w-50 mx-auto "  type="submit">
                  ????????? ?????????????????? ????????????
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addmissions;

