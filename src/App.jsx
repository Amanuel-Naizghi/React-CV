import { useState } from 'react';
import {Header} from './components/header';
import {PersonalInfo} from './components/personalInfo';
import {EducationalExperience} from './components/educationalExperience';
import { PracticalExperience } from './components/practicalExperience';
import {TechnicalSkillsInformation} from './components/technicalSkills';
import {ObjectiveDetails} from './components/objective';
import './App.css';
import {Form} from './form.jsx';

function App() {
  const [data,setData]=useState([{personalInformation:[]},{educationalExp:[]},{practicalExp:[]},
        {technicalSkills:[]},{objectiveData:[]}]);
  return(
    <div className="container">
      <div className="main-container">
        <Header></Header>
        <h1 className='headed-title'>Fill out your resume</h1>
        <hr></hr>
        <PersonalInfo data={data} setData={setData}></PersonalInfo>
        <ObjectiveDetails data={data} setData={setData}></ObjectiveDetails>
        <EducationalExperience data={data} setData={setData}></EducationalExperience>
        <PracticalExperience data={data} setData={setData}></PracticalExperience>
        <TechnicalSkillsInformation data={data} setData={setData}></TechnicalSkillsInformation>
      </div>
      <div className="form-container">
        <Form data={data}></Form>
      </div>
    </div>   
  );
}

export {App};
