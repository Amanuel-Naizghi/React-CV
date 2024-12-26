import { useState } from 'react';
import {Header} from './components';
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
    <div className="main-container">
      <Header></Header>
      <h1 className='headed-title'>Fill out your resume</h1>
      <hr></hr>
      <ObjectiveDetails data={data} setData={setData}></ObjectiveDetails>
      <PersonalInfo data={data} setData={setData}></PersonalInfo>
      <EducationalExperience data={data} setData={setData}></EducationalExperience>
      <PracticalExperience data={data} setData={setData}></PracticalExperience>
      <TechnicalSkillsInformation data={data} setData={setData}></TechnicalSkillsInformation>
      <Form data={data}></Form>
    </div>
  );
}

export {App};
