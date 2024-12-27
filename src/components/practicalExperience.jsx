import {useState} from 'react';
import addIcon from '../assets/edit.png';
import removeIcon from '../assets/remove.png';

function PracticalExperience({data,setData}){
    const [addExperience,setAddExperience]=useState(false);//Used for adding skills
    const [editData,setEditData]=useState([]);//Used to record the previously filled data so that it will added in the inputs after edit button is clicked

    return (
        <div className='experience-container'>
            <h3>Experience</h3>
            {data[2].practicalExp.length>0&&(<PracticalReport setAddExperience={setAddExperience}
            setEditData={setEditData} editData={editData} data={data} setData={setData}></PracticalReport>)}

            {addExperience?(<ExperienceDetails setAddExperience={setAddExperience} editData={editData}
            setEditData={setEditData} data={data} setData={setData}></ExperienceDetails>)
             :(<button className='add-button' onClick={()=>setAddExperience(true)}>+ Add Practical Experience</button>)}
        </div>
    )
}

function ExperienceDetails({setAddExperience,editData,setEditData,data,setData}){

    function handleSubmit(e){
        e.preventDefault();
        let positionInfo=document.querySelector('.experience-details-container .position').value;
        let companyInfo=document.querySelector('.experience-details-container .company').value;
        let startDateInfo=document.querySelector('.experience-details-container .start-date').value;
        let endDateInfo=document.querySelector('.experience-details-container .end-date').value;
        let countryInfo=document.querySelector('.experience-details-container .country').value;
        let cityInfo=document.querySelector('.experience-details-container .city').value;
        let workInfo=document.querySelector('.experience-details-container .work-details').value;

        let myNewData={position:positionInfo,company:companyInfo,startDate:startDateInfo,
            endDate:endDateInfo,country:countryInfo,city:cityInfo,workDetails:workInfo,id:crypto.randomUUID()};//The id is used for key, b/c the items can be changed when user add or delete educational experience
        console.log(`myNewData value is ${JSON.stringify(myNewData)}`);//Just for testing output of the information to be added to the data
        //adding the newly filled data into the data
        setData(prevData=>{
            return prevData.map(item=>{
                if(item.practicalExp){
                    return {...item,practicalExp:[...item.practicalExp,myNewData]};
                }
                return item;
            })
        });
        console.log(`data value is ${JSON.stringify(data)}`);//Just for showing the output of the data
        document.querySelector('.experience-details-container').reset();
        setAddExperience(false);
        setEditData([]); 
    }
    
    return(
        <form className='experience-details-container' onSubmit={handleSubmit}>
            <div className='input-container'>
                <label className='experience-details-label'>Position/Title</label>
                <input className='position' type='text' defaultValue={editData[0]} required/>
            </div>
            <div className='input-container'>
                <label className='experience-details-label'>Company Name</label>
                <input className='company' type='text' defaultValue={editData[1]} required/>
            </div>
            <div className='input-container'>
                <label className='experience-details-label'>Start date</label>
                <input className='start-date' type='date' defaultValue={editData[2]} />
            </div>
            <div className='input-container'>
                <label className='experience-details-label'>End date</label>
                <input className='end-date' type='date' defaultValue={editData[3]} />
            </div>
            <div className='input-container'>
                <label className='experience-details-label'>Country</label>
                <input className='country' type='text' defaultValue={editData[4]} required/>
            </div>
            <div className='input-container'>
                <label className='experience-details-label'>City</label>
                <input className='city' type='text' defaultValue={editData[5]} required/>
            </div>
            <div className='input-container'>
                <label className='experience-details-label'>Work details</label>
                <textarea className='work-details' defaultValue={editData[6]} ></textarea>
            </div>
            <div className='button-container'>
                <button className='save' type='submit'>Save</button>
                <button className='cancel'onClick={()=>setAddExperience(false)}>Cancel</button>
            </div>           
        </form>
    )
}

function PracticalReport({setAddExperience,addExperience,setEditData,data,setData}){
    let editable=addExperience===true;//Used for disabling the edit and remove buttons while editing the educational experience fields

    const handleEdit=(e)=>{
        const parentContainer=e.target.parentNode.parentNode.parentNode;
        const key=parentContainer.getAttribute('data-key');
        const indexToEdit=data[2].practicalExp.findIndex((item)=>item.id===key)
        
        setAddExperience(true);
        
        console.log(indexToEdit);
        let positionInfo=data[2].practicalExp[indexToEdit].position;
        let companyInfo=data[2].practicalExp[indexToEdit].company;
        let startDateInfo=data[2].practicalExp[indexToEdit].startDate;
        let endDateInfo=data[2].practicalExp[indexToEdit].endDate;
        let countryInfo=data[2].practicalExp[indexToEdit].country;
        let cityInfo=data[2].practicalExp[indexToEdit].city;
        let workInfo=data[2].practicalExp[indexToEdit].workDetails
        
        const myOldData=[positionInfo,companyInfo,startDateInfo,endDateInfo,countryInfo,cityInfo,workInfo];
        console.log(`my old data is ${myOldData}`);//Just for showing the old data to be edited
        setEditData(myOldData);
        handleRemove(e);
    }

    const handleRemove=(e)=>{

        const parentContainer=e.target.parentNode.parentNode.parentNode;

        //for removing the info from the data
        const key=parentContainer.getAttribute('data-key');
        const indexToRemove=data[2].practicalExp.findIndex((item)=>item.id===key)
            
        setData(prevData=>{
            return prevData.map(item=>{
                if(item.practicalExp){
                    return {...item,practicalExp:item.practicalExp.filter(obj=>obj.id!==key)};
                }
                return item;
            });
        });
        console.log(indexToRemove);//Just for testing which index is gone be removed from the data
        console.log(`key value is ${key}`);//Just for testing the key of the item to be removed
        console.log(`my new data value after removal is ${JSON.stringify(data)}`);//Just for testing output
        
    }

    return(
        <div className="experience-report">
            {
                data[2].practicalExp.map((item)=>(
                    <div className="report-container" key={item.id} data-key={item.id}>
                        <div className="report-info">
                            <p>{item.position} at {item.company}</p>
                            <p>{item.startDate} - {item.endDate}</p>
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

export {PracticalExperience};