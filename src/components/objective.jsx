import {useState} from 'react';
import addIcon from '../assets/edit.png';
import removeIcon from '../assets/remove.png';

function ObjectiveDetails({data,setData}){
    const [addObjective,setAddObjective]=useState(false);
    const [editData,setEditData]=useState([]);
    const [counter,setCounter]=useState(0);//Used for tracking the add objective input, it only allows to add objective just once

    return(
        <div className='objective-container'>
            <h3>Objective</h3>
            {data[4].objectiveData.length>0&&(<ObjectiveReport setAddObjective={setAddObjective}setCounter={setCounter}
            setEditData={setEditData} editData={editData} data={data} setData={setData}></ObjectiveReport>)}
           
            {addObjective&&(<ObjectiveDetailsInput addObjective={addObjective} setAddObjective={setAddObjective}setCounter={setCounter}
            editData={editData} setEditData={setEditData} data={data} setData={setData}></ObjectiveDetailsInput>)}

            {(!addObjective&&counter===0)&&
             (<button className='add-button' onClick={()=>setAddObjective(true)}>+ Add Objective</button>)
            }
            
        </div>
    );
}

function ObjectiveDetailsInput({setAddObjective,editData,setEditData,data,setData,setCounter,counter}){

    function handleSubmit(e){
        e.preventDefault();
        let objectiveInfo=document.querySelector('.objective').value;

        let myNewData={objectiveInfo,id:crypto.randomUUID()};//The id is used for key, b/c the items can be changed when user add or delete educational experience
        console.log(`myNewData value is ${JSON.stringify(myNewData)}`);//Just for testing output of the information to be added to the data
        //Adding the new user inputs into the data after the submit button is clicked
        setData(prevData=>{
            return prevData.map(item=>{
                if(item.objectiveData){
                    return {...item,objectiveData:[...item.objectiveData,myNewData]};
                }
                return item;
            });
        });
        console.log(`data value is ${JSON.stringify(data)}`);//Just for showing the output of the data
        //console.log(`full name is ${data[0].personalInformation[0].fullName}`);
        setCounter(counter+1);
        setAddObjective(false);
    }

    return(
        <form className='objective-details-container' onSubmit={handleSubmit}>
            <div className="input-container">
                <textarea className='objective' type='text' defaultValue={editData[0]}/>
            </div>
            <div className='button-container'>
                <button className='save' type='submit'>Save</button>
                <button className='cancel'onClick={()=>setAddObjective(false)}>Cancel</button>
            </div>
        </form>
    );
}

function ObjectiveReport({setAddObjective,addObjective,setEditData,data,setData,setCounter}){
    let editable=addObjective===true;//Used for disabling the edit and remove buttons while editing the objective
    const handleEdit=(e)=>{
        setAddObjective(true);//After the add objective data is clicked the form for the objective will appear
        
        let objectiveDetail=data[4].objectiveData[0].objectiveInfo;
        
        const myOldData=[objectiveDetail];
        console.log(`my old data is ${myOldData}`);//Just for showing the old data to be edited
        setEditData(myOldData);
        handleRemove(e);
    }

    const handleRemove=(e)=>{
        //Removing the previous objective from the data
        setData(prevArray=>
            prevArray.map(item=>
                item.objectiveData!==undefined?{...item,objectiveData:[]}
                :item
            )
        )
        e.target.className==='remove'&&setEditData([]);//If the remove button is clicked it will make the edit data state empty
        console.log(`my new data value after removal is ${JSON.stringify(data)}`);//Just for testing output
        setCounter(0);    
    }

    return(
        <div className="objective-report">
            {
                data[4].objectiveData.map((item)=>(
                    <div className="report-container" key={item.id} data-key={item.id}>
                        <div className="report-info">
                            <p>{item.objectiveInfo}</p>
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
    );

}

export {ObjectiveDetails};