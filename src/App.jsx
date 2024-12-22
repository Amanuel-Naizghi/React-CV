import { useState } from 'react'
import {PersonalInfo} from './components/personalInfo';
import {EducationalExperience} from './components/educationalExperience';
import { PracticalExperience } from './components/practicalExperience';
import {TechnicalSkillsInformation} from './components/technicalSkills';
import './App.css';
import {Form} from './form.jsx';

function App() {
  const [data,setData]=useState([{personalInformation:[]},{educationalExp:[]},{practicalExp:[]},{technicalSkills:[]},{objectiveDetails:[]}]);
  return(
    <>
      <h1 className='headed-title'>Fill out your resume</h1>
      <PersonalInfo data={data} setData={setData}></PersonalInfo>
      <EducationalExperience data={data} setData={setData}></EducationalExperience>
      <PracticalExperience data={data} setData={setData}></PracticalExperience>
      <TechnicalSkillsInformation data={data} setData={setData}></TechnicalSkillsInformation>
      <Form data={data}></Form>
    </>
  );
}

export {App};
