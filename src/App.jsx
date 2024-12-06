import { useState } from 'react'
import {PersonalInfo} from './components/personalInfo';
import {EducationalExperience} from './components/educationalExperience';
import { PracticalExperience } from './components/practicalExperience';
import {TechnicalSkills} from './components/technicalSkills';
import './App.css'

// let data=[{personalInfo:[]},{educationalExp:[]},{practicalExp:[]},{technicalSkills:[]}];

//let data=[{personalInfo:[]},{educationalExp:[]},{practicalExp:[]},{technicalSkills:[]}];

function App() {
  const [data,setData]=useState([{personalInfo:[]},{educationalExp:[]},{practicalExp:[]},{technicalSkills:[]}]);
  return(
    <>
      <PersonalInfo></PersonalInfo>
      <EducationalExperience data={data} setData={setData}></EducationalExperience>
      <PracticalExperience></PracticalExperience>
      <TechnicalSkills></TechnicalSkills>
    </>
  );
}

export {App};
