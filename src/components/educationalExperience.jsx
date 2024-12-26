import {useState} from 'react';
import addIcon from '../assets/edit.png';
import removeIcon from '../assets/remove.png';

function EducationalExperience({data,setData}){
    const [addEducation,setAddEducation]=useState(false);
    const [editData,setEditData]=useState([]);

    return(
        <div className='education-container'>
            <h3>Education</h3>
            {data[1].educationalExp.length>0&&(<EducationalReport setAddEducation={setAddEducation}
            setEditData={setEditData} editData={editData} data={data} setData={setData}></EducationalReport>)}
           
            {addEducation?(<EducationalDetails setAddEducation={setAddEducation} editData={editData}
            setEditData={setEditData} data={data} setData={setData}></EducationalDetails>)
            :(<button className='add-button' onClick={()=>setAddEducation(true)}>+ Add Educational Experience</button>)}
        </div>
    );
}

function EducationalDetails({setAddEducation,editData,setEditData,data,setData}){

    function handleSubmit(e){
        e.preventDefault();
        let schoolInfo=document.querySelector('.educational-details-container .school').value;
        let degreeInfo=document.querySelector('.educational-details-container .degree').value;
        let startDateInfo=document.querySelector('.educational-details-container .start-date').value;
        let endDateInfo=document.querySelector('.educational-details-container .end-date').value;
        let countryInfo=document.querySelector('.educational-details-container .country').value;
        let cityInfo=document.querySelector('.educational-details-container .city').value;

        let myNewData={school:schoolInfo,degree:degreeInfo,startDate:startDateInfo,
            endDate:endDateInfo,country:countryInfo,city:cityInfo,id:crypto.randomUUID()};//The id is used for key, b/c the items can be changed when user add or delete educational experience
        console.log(`myNewData value is ${JSON.stringify(myNewData)}`);//Just for testing output of the information to be added to the data
        setData(prevData=>{
            return prevData.map(item=>{
                if(item.educationalExp){
                    return {...item,educationalExp:[...item.educationalExp,myNewData]};
                }
                return item;
            });
        });
        console.log(`data value is ${JSON.stringify(data)}`);//Just for showing the output of the data
        //console.log(`full name is ${data[0].personalInformation[0].fullName}`);
        document.querySelector('.educational-details-container').reset();
        setAddEducation(false);
        setEditData([]);
    }
    
    return(
        <form className='educational-details-container' onSubmit={handleSubmit}>
            <div className='input-container'>
                <label className='education-details-label'>School/University</label>
                <input className='school' required type='text' defaultValue={editData[0]}/>
            </div>
            <div className='input-container'>
                <label className='education-details-label'>Degree</label>
                <input className='degree' type='text' defaultValue={editData[1]} required/>
            </div>
            <div className='input-container'>
                <label className='experience-details-label'>Start date</label>
                <input className='start-date' type='date' defaultValue={editData[2]} />
            </div>   
            <div className='input-container'>
                <label className='education-details-label'>End date</label>
                <input className='end-date' type='date' defaultValue={editData[3]}/>
            </div>
            <div className='input-container'>
                <label className='education-details-label'>Country</label>
                <input className='country' type='text' defaultValue={editData[4]} required/>
            </div>
            <div className='input-container'>
                <label className='education-details-label'>City</label>
                <input className='city' type='text' defaultValue={editData[5]} required/>
            </div>
            <div className='button-container'>
                <button className='save' type='submit'>Save</button>
                <button className='cancel'onClick={()=>setAddEducation(false)}>Cancel</button>
            </div>          
        </form>
    )
}

function EducationalReport({setAddEducation,setEditData,addEducation,data,setData}){
    let editable=addEducation===true;//Used for disabling the edit and remove buttons while editing the educational experience fields

    const handleEdit=(e)=>{
        const parentContainer=e.target.parentNode.parentNode.parentNode;
        const key=parentContainer.getAttribute('data-key');
        const indexToEdit=data[1].educationalExp.findIndex((item)=>item.id===key)
        
        setAddEducation(true);
        
        console.log(indexToEdit);
        let schoolInfo=data[1].educationalExp[indexToEdit].school;
        let degreeInfo=data[1].educationalExp[indexToEdit].degree;
        let startDateInfo=data[1].educationalExp[indexToEdit].startDate;
        let endDateInfo=data[1].educationalExp[indexToEdit].endDate;
        let countryInfo=data[1].educationalExp[indexToEdit].country;
        let cityInfo=data[1].educationalExp[indexToEdit].city;
        
        const myOldData=[schoolInfo,degreeInfo,startDateInfo,endDateInfo,countryInfo,cityInfo];
        console.log(`my old data is ${myOldData}`);//Just for showing the old data to be edited
        setEditData(myOldData);
        handleRemove(e);
    }

    const handleRemove=(e)=>{

        const parentContainer=e.target.parentNode.parentNode.parentNode;

        //for removing the info from the data
        const key=parentContainer.getAttribute('data-key');
        const indexToRemove=data[1].educationalExp.findIndex((item)=>item.id===key)
            
        setData(prevData=>{
            return prevData.map(item=>{
                if(item.educationalExp){
                    return {...item,educationalExp:item.educationalExp.filter(obj=>obj.id!==key)};
                }
                return item;
            });
        });
        console.log(indexToRemove);//Just for testing which index is gone be removed from the data
        console.log(`key value is ${key}`);//Just for testing the key of the item to be removed
        console.log(`my new data value after removal is ${JSON.stringify(data)}`);//Just for testing output
        
    }

    return(
        <div className="education-report">
            {
                data[1].educationalExp.map((item)=>(
                    <div className="report-container" key={item.id} data-key={item.id}>
                        <div className="report-info">
                            <p>{item.degree} at {item.school}</p>
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


export {EducationalExperience};
