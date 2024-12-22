import { useState } from 'react';
import addIcon from '../assets/edit.png';
import removeIcon from '../assets/remove.png';

function PersonalInfo({data,setData}){
    const [addPersonalInfo,setAddPersonalInfo]=useState(false);
    const [counter,setCounter]=useState(0);
    const [editData,setEditData]=useState([]);

    return(
        <div className='education-container'>
            <h3>Personal Information</h3>
            {data[0].personalInformation.length>0&&(<PersonalInfoReport addPersonalInfo={addPersonalInfo} setEditData={setEditData}
             editData={editData}setAddPersonalInfo={setAddPersonalInfo} data={data} setData={setData} setCounter={setCounter}></PersonalInfoReport>)}
           
            {addPersonalInfo&&(<PersonalInfoDetails addPersonalInfo={addPersonalInfo} data={data} setEditData={setEditData}
            editData={editData} setAddPersonalInfo={setAddPersonalInfo}setData={setData}setCounter={setCounter}counter={counter}></PersonalInfoDetails>)}

            {(!addPersonalInfo&&counter===0)&&
            (<button className='add-personal-info' onClick={()=>setAddPersonalInfo(true)}>+ Add Personal Information</button>)
            }
        </div>
    );
}

function PersonalInfoDetails({data,setData,setAddPersonalInfo,setEditData,editData,setCounter,counter}){

    function handleSubmit(e){
        e.preventDefault();
        let fullName=document.querySelector('.personal-details-container>.full-name').value;
        let phoneNum=document.querySelector('.personal-details-container>.phone-number').value;
        let address=document.querySelector('.personal-details-container>.address').value;
        let email=document.querySelector('.personal-details-container>.email').value;
        let github=document.querySelector('.personal-details-container>.github').value;
        let linkedin=document.querySelector('.personal-details-container>.linkedin').value;

        let myNewData={fullName,phoneNum,address,email,github,linkedin,id:crypto.randomUUID()};//The id is used for key, b/c the items can be changed when user add or delete educational experience
        console.log(`myNewData value is ${JSON.stringify(myNewData)}`);//Just for testing output of the information to be added to the data
        setData(prevData=>{
            return prevData.map(item=>{
                if(item.personalInformation){
                    return {...item,personalInformation:[...item.personalInformation,myNewData]};
                }
                return item;
            });
        });
        console.log(`data value is ${JSON.stringify(data)}`);//Just for showing the output of the data
        setAddPersonalInfo(false);
        setCounter(counter+1);
        setEditData([fullName,phoneNum,address,email,github,linkedin]);
        console.log(editData);
    }

    return(
        <form className='personal-details-container' onSubmit={handleSubmit}>
            <h1>My Resume</h1>
            <label className='personal-info-label'>
                Your Full Name
            </label>
            <input type='text'className='full-name' defaultValue={editData[0]} required/>
            <label className='personal-info-label' >
                Phone Number
            </label>
            <input type='number'className='phone-number' defaultValue={editData[1]} required/>
            <label className='personal-info-label' >
                Address
            </label>
            <input type='text'className='address' defaultValue={editData[2]} required/>
            <label className='personal-info-label'>
                Email
            </label>
            <input type='email'className='email' defaultValue={editData[3]} required/>
            <label className='personal-info-label'>
                Github
            </label>
            <input type='text'className='github' defaultValue={editData[4]} required/>
            <label className='personal-info-label'>
                Linkedin
            </label>
            <input type='text'className='linkedin' defaultValue={editData[5]} required/>
            <button className='save' type='submit'>Save</button>
            <button className='cancel'onClick={()=>setAddPersonalInfo(false)}>Cancel</button>   
        </form>
    );
}

function PersonalInfoReport({setAddPersonalInfo,addPersonalInfo,data,setData,setEditData,setCounter}){
    let editable=addPersonalInfo===true;//Used for disabling the edit and remove buttons while editing the educational experience fields

    const handleEdit=(e)=>{
        setAddPersonalInfo(true);
        handleRemove(e);
    }

    const handleRemove=(e)=>{
            
        setData(prevArray=>
            prevArray.map(item=>
                item.personalInformation!==undefined?{...item,personalInformation:[]}
                :item
            )
        )
        e.target.className==='remove'&&setEditData([]);
        setCounter(0);
    }

    return(
        <div className="personal-report">
            {
                data[0].personalInformation.map((item)=>(
                    <div className="report-container" key={item.id} data-key={item.id}>
                        <div className="report-info">
                            <p>Full Name: {item.fullName} </p>
                            <p>Phone Number: {item.phoneNum}</p>
                            <p>Email: {item.email}</p>
                            <p>Github: {item.github}</p>
                            <p>Linkedin: {item.linkedin}</p>
                        </div>
                        <div className="edit-remove-button">
                            <button className="edit-education"  data-key={item.id}>
                                <img src={addIcon} alt="edit" className="edit" onClick={handleEdit} disable={editable.toString()}/>
                            </button>
                            <button className="remove-education" data-key={item.id}>
                                <img src={removeIcon} alt="remove" className="remove" onClick={handleRemove} disable={editable.toString()}/>
                            </button>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}

export {PersonalInfo};