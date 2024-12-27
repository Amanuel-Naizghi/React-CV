import {useState} from 'react';
import addIcon from '../assets/edit.png';
import removeIcon from '../assets/remove.png';

function TechnicalSkillsInformation({data,setData}){
    const [addSkill,setAddSkill]=useState(false);//Used for adding skills, it opens and closes the form for adding skill
    const [editData,setEditData]=useState([]);//Used to record the previously filled data so that it will added in the inputs after edit button is clicked

    return(
        <div className='skill-container'>
            <h3>Skills</h3>
            {data[3].technicalSkills.length>0&&(<SkillReport setAddSkill={setAddSkill}
            setEditData={setEditData} editData={editData} data={data} setData={setData}></SkillReport>)}

            {addSkill?(<TechnicalSkillDetails setAddSkill={setAddSkill} editData={editData}
            setEditData={setEditData} data={data} setData={setData}></TechnicalSkillDetails>)
             :(<button className='add-button' onClick={()=>setAddSkill(true)}>+ Add Skill</button>)}
        </div>
    );
}

function TechnicalSkillDetails({setAddSkill,editData,setEditData,data,setData}){

    function handleSubmit(e){
        e.preventDefault();
        let skillName=document.querySelector('.skills-details-container .skill-name').value;
        let skillDetails=document.querySelector('.skills-details-container .skill-details').value;

        let myNewData={skillName:skillName,skillDetails:skillDetails,id:crypto.randomUUID()};
        console.log(`myNewData value is ${JSON.stringify(myNewData)}`);//Just for testing output of the information to be added to the data
        //adding the newly filled data into the data
        setData(prevData=>{
            return prevData.map(item=>{
                if(item.technicalSkills){
                    return {...item,technicalSkills:[...item.technicalSkills,myNewData]};
                }
                return item;
            });
        });
        console.log(`data value is ${JSON.stringify(data)}`);//Just for showing the output of the data
        document.querySelector('.skills-details-container').reset();//Resting the input container after submitting the form
        setAddSkill(false);
        setEditData([]); 
    }

    return(
        <form className='skills-details-container' onSubmit={handleSubmit}>
            <div className='input-container'>
                <label className='skills-details-label'>Skill Name</label>
                <input className='skill-name' type='text' defaultValue={editData[0]} required></input>
            </div>
            <div className='input-container'>
                <label className='skills-details-label'>Skill Details</label>
                <textarea className='skill-details' defaultValue={editData[1]}></textarea>
            </div>
            <div className='button-container'>
                <button className='save' type='submit'>Save</button>
                <button className='cancel'onClick={()=>setAddSkill(false)}>Cancel</button>
            </div>           
        </form>
    );
}

function SkillReport({setAddSkill,addSkill,setEditData,data,setData}){
    let editable=addSkill===true;//Used for disabling the edit and remove buttons while editing the educational experience fields

    const handleEdit=(e)=>{
        const parentContainer=e.target.parentNode.parentNode.parentNode;
        const key=parentContainer.getAttribute('data-key');
        const indexToEdit=data[3].technicalSkills.findIndex((item)=>item.id===key)
        
        setAddSkill(true);//After edit button is clicked the input form will appear
        
        console.log(indexToEdit);
        let skillInfo=data[3].technicalSkills[indexToEdit].skillName;
        let skillDetails=data[3].technicalSkills[indexToEdit].skillDetails;
        
        const myOldData=[skillInfo,skillDetails];
        console.log(`my old data is ${myOldData}`);//Just for showing the old data to be edited
        setEditData(myOldData);//Putting the previous inputs into edit data state
        handleRemove(e);
    }

    const handleRemove=(e)=>{

        const parentContainer=e.target.parentNode.parentNode.parentNode;

        //for removing the info from the data
        const key=parentContainer.getAttribute('data-key');
        const indexToRemove=data[3].technicalSkills.findIndex((item)=>item.id===key);//Finding the index of the item to be removed
        //Removing the clicked item from the data  
        setData(prevData=>{
            return prevData.map(item=>{
                if(item.technicalSkills){
                    return {...item,technicalSkills:item.technicalSkills.filter(obj=>obj.id!==key)};
                }
                return item;
            });
        });
        console.log(indexToRemove);//Just for testing which index is gone be removed from the data
        console.log(`key value is ${key}`);//Just for testing the key of the item to be removed
        console.log(`my new data value after removal is ${JSON.stringify(data)}`);//Just for testing output
        
    }

    return(
        <div className="skills-report">
            {
                data[3].technicalSkills.map((item)=>(
                    <div className="report-container" key={item.id} data-key={item.id}>
                        <div className="report-info">
                            <p>{item.skillName}</p>
                            <p>{item.skillDetails}</p>
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

export {TechnicalSkillsInformation};