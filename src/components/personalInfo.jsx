import { useState } from 'react';
//import {data} from '../App';

function PersonalInfo(){

    const [myData,setMyData]=useState({fullName:'',phoneNum:'',email:'',github:'',linkedin:''});
    // console.log(myData);

    return(
        <div className='personal-info-container'>
            <h1>My Resume</h1>
            <h3>Personal Information</h3>
            <div className='personal-info-input-container'>
                <label className='personal-info-label'>
                    Your Full Name
                </label>
                <input type='text'className='full-name' value={myData.fullName} onChange={(e)=>{
                    const myNewData={...myData,fullName:e.target.value};
                    setMyData(myNewData)}} required/>

                <label className='personal-info-label' >
                    Phone Number
                </label>
                <input type='number'className='phone-number' value={myData.phoneNum} onChange={(e)=>{
                    const myNewData={...myData,phoneNum:e.target.value};
                    setMyData(myNewData)}} required/>

                <label className='personal-info-label'>
                    Email
                </label>
                <input type='email'className='email' value={myData.email} onChange={(e)=>{
                    const myNewData={...myData,email:e.target.value};
                    setMyData(myNewData)}} required/>

                <label className='personal-info-label'>
                    Github
                </label>
                <input type='text'className='github' value={myData.github} onChange={(e)=>{
                    const myNewData={...myData,github:e.target.value};
                    setMyData(myNewData)}} required/>

                <label className='personal-info-label'>
                    Linkedin
                </label>
                <input type='text'className='Linkedin' value={myData.linkedin} onChange={(e)=>{
                    const myNewData={...myData,linkedin:e.target.value};
                    setMyData(myNewData)}} required/>
            </div>
            
        </div>
    );
}
export {PersonalInfo};