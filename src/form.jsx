import {useState} from 'react';

function Form({data}){
    return (
        <div className='resume-display'>
        
            {data[0].personalInformation.length>0&&
                <div className='personal-info-container'>
                    <h3>{data[0].personalInformation[0].fullName}</h3>
                    <p>{data[0].personalInformation[0].address}</p>
                    <p>{data[0].personalInformation[0].phoneNum}|{data[0].personalInformation[0].email}</p>
                    <p>{data[0].personalInformation[0].github}|{data[0].personalInformation[0].linkedin}</p>
                </div>
            }

            {data[4].objectiveData.length>0&&
                <div className='objective-info-container'>
                    <h4>Objective</h4>
                    <hr />
                    <p>{data[4].objectiveData[0].objectiveInfo}</p>
                </div>
            }

            {data[1].educationalExp.length>0&&
                <div className="educational-info-container">
                    <h4>Educational Record</h4>
                    <hr />
                    {data[1].educationalExp.map((item)=>(
                        <div className="educational-record" key={item.id}>
                            <div className="school-info">
                                <p className='school-name'>{item.school}</p>
                                <p className='degree'>{item.degree}</p>
                            </div>
                            <div className="address-period">
                                <p className='address'>{item.city}, {item.country}</p>
                                <p className='period'>{item.startDate} to {item.endDate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }

            {data[2].practicalExp.length>0&&
                <div className="experience-info-container">
                    <h4>Practical Experience Record</h4>
                    <hr />
                    {data[2].practicalExp.map((item)=>(
                        <div key={item.id}>
                            <div className="experience-record">
                                <div className="work-info">
                                    <p className='position'>{item.position}</p>
                                    <p className='company'>{item.company}</p>
                                </div>
                                <div className="period-address">
                                    <p className='period'>{item.startDate} to {item.endDate}</p>
                                    <p className='address'>{item.city}, {item.country}</p>
                                </div>
                            </div>
                            <p className='work-details'>{item.workDetails}</p>
                        </div>
                        
                    ))}
                </div>
            }

            {data[3].technicalSkills.length>0&&
                <div className="technical-skills-record">
                    <h4>Technical Skills</h4>
                    <hr />
                    {data[3].technicalSkills.map((item)=>(
                        <div className="technical-skills" key={item.id}>
                            <p className='skill-name'>{item.skillName}</p>
                            <p className='skill-details'>{item.skillDetails}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export {Form}