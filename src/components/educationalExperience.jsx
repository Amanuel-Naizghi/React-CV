import {useState,useEffect} from 'react';
import {data} from '../App';

function EducationalExperience(){
    const [addEducation,setAddEducation]=useState(false);

    return(
        <div className='education-container'>
            <h3>Education</h3>
            {
                data[1].educationalExp.length>0&&(
                    <EducationalReport></EducationalReport>
                )
            }
           
            {addEducation?(<EducationalDetails setAddEducation={setAddEducation}></EducationalDetails>)
            :(<button className='add-education' onClick={()=>setAddEducation(true)}>+ Add Education</button>)}
        </div>
    );
}

function EducationalDetails({setAddEducation}){

    function handleSubmit(e){
        e.preventDefault();
        let schoolInfo=document.querySelector('.educational-details-container>.school').value;
        let degreeInfo=document.querySelector('.educational-details-container>.degree').value;
        let startDateInfo=document.querySelector('.educational-details-container>.start-date').value;
        let endDateInfo=document.querySelector('.educational-details-container>.end-date').value;
        let countryInfo=document.querySelector('.educational-details-container>.country').value;
        let cityInfo=document.querySelector('.educational-details-container>.city').value;

        let myNewData={school:schoolInfo,degree:degreeInfo,startDate:startDateInfo,
            endDate:endDateInfo,country:countryInfo,city:cityInfo,id:crypto.randomUUID()};//The id is used for key, b/c the items can be changed when user add or delete educational experience
        console.log(`myNewData value is ${JSON.stringify(myNewData)}`);//Just for testing output
        data[1].educationalExp.push(myNewData);
        console.log(`data value is ${JSON.stringify(data)}`);
        document.querySelector('.educational-details-container').reset();
        setAddEducation(false);
    }
    
    return(
        <form className='educational-details-container' onSubmit={handleSubmit}>
            <label className='education-details-label'>School/University</label>
            <input className='school' required type='text'/>
            <label className='education-details-label'>Degree</label>
            <input className='degree' type='text' required/>
            <label className='education-details-label'>Start date</label>
            <input className='start-date' type='date'required/>
            <label className='education-details-label'>End date</label>
            <input className='end-date' type='date'required/>
            <label className='education-details-label'>Country</label>
            <input className='country' type='text'required/>
            <label className='education-details-label'>City</label>
            <input className='city' type='text'required/>
            <button className='save' type='submit'>Save</button>
            <button className='cancel'onClick={()=>setAddEducation(false)}>Cancel</button>
        </form>
    );
}

function EducationalReport(){
    // console.log("Yep Yep am inside educationalReport component");
    // data[1].educationalExp.map(item=>{
    //     console.log(item.id);
    //     console.log(item.degree);
    // })
    return(
        <div className="education-report">
            {
                data[1].educationalExp.map((item)=>(
                    <div className="report-container" key={item.id}>
                        <div className="report-info">
                            <p>{item.degree} at {item.school}</p>
                            <p>{item.startDate} - {item.endDate}</p>
                        </div>
                        
                    </div>
                    
                ))
            }
        </div>
    )
}

export {EducationalExperience};
