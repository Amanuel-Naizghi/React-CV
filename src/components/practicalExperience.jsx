import {useState} from 'react';
//import {data} from '../App';

function PracticalExperience(){
    const [addExperience,setAddExperience]=useState(false);

    return (
        <div className='experience-container'>
            <h3>Experience</h3>
            {addExperience?(<ExperienceDetails setAddExperience={setAddExperience}></ExperienceDetails>)
             :(<button className='add-experience' onClick={()=>setAddExperience(true)}>+ Add Experience</button>)};
        </div>
    );
}

function ExperienceDetails({setAddExperience}){
    const [myData,setMyData]=useState({title:'',company:'',startDate:'',endDate:'',country:'',city:''});

    function handleSubmit(e){
        e.preventDefault();
    }
    
    return(
        <form className='experience-details-container' onSubmit={handleSubmit}>
            <label className='experience-details-label'>Position/Title</label>
            <input className='title' type='text' required/>
            <label className='experience-details-label'>Company Name</label>
            <input className='company' type='text' required/>
            <label className='experience-details-label'>Start date</label>
            <input className='start-date' type='date' required/>
            <label className='experience-details-label'>End date</label>
            <input className='end-date' type='date' required/>
            <label className='experience-details-label'>Country</label>
            <input className='country' type='text' required/>
            <label className='experience-details-label'>City</label>
            <input className='city' type='text' required/>
            <button className='save' type='submit'>Save</button>
            <button className='cancel'onClick={()=>setAddExperience(false)}>Cancel</button>
        </form>
    );
}

export {PracticalExperience};