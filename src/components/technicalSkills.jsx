import {useState} from 'react';
import {data} from '../App';

function TechnicalSkills(){
    const [addSkill,setAddSkill]=useState(false);

    return(
        <div className='skill-container'>
            <h3>Technical Skills</h3>
            {addSkill?(<TechnicalSkillDetails setAddSkill={setAddSkill}></TechnicalSkillDetails>)
             :(<button className='add-skill' onClick={()=>setAddSkill(true)}>+Add Skill</button>)}
        </div>
    );
}

function TechnicalSkillDetails({setAddSkill}){
    const [myData,setMyData]=useState({skillName:'',skillDetails:''});

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <form className='skills-details-container' onSubmit={handleSubmit}>
            <label className='skills-details-label'>Skill Name</label>
            <input className='skill-name' type='text' required></input>
            <label className='skills-details-label'>Skill Details</label>
            <textarea className='skill-details'></textarea>
            <button className='save' type='submit'>Save</button>
            <button className='cancel'onClick={()=>setAddSkill(false)}>Cancel</button>
        </form>
    );
}

export {TechnicalSkills};