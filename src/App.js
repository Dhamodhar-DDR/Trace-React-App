import './App.css';
import { useState, useEffect } from "react";
import def_cont_pic from "./pic1.PNG" 

function App() {
  const [containers, setContainers] = useState([]);
  const [primaryContainer, setPrimaryContainer] = useState('');
  const [primaryContainerDelta, setPrimaryContainerDelta] = useState('');
  
  const addContainer = () => {
    let newId = 0;
    if(containers.length!=0) newId = containers[containers.length - 1].id + 1;
    if(containers.length < 5) {
      const values = [...containers];
      values.push({ id : newId , content : "" });
      setContainers(values);
    }
    console.log('Added container '+ newId )
  };

  const removeContainer = (index) => {
      const values = [...containers];
      values.splice(index, 1);
      setContainers(values);
      console.log('Deleted container '+ index)
  }
  const alertClose = () => {
    document.getElementById('alert').style.display = 'none'
  }
  const alertOpen = () => {
    document.getElementById('alert').style.display = 'block'
    
  }
  const savePrimaryContainer=() => {
    setPrimaryContainer(primaryContainerDelta);
    console.log(primaryContainer);
    alertOpen();
    document.getElementById('saveBtn').style.display = 'none';
  }

  const changePrimaryContainer= (e) =>{
    setPrimaryContainer(e.target.value);
    document.getElementById('saveBtn').style.display = 'block'
  }
  
  useEffect(() => {
    document.getElementById('alert').style.display = 'none'
    document.getElementById('saveBtn').style.display = 'none'
  }, [])



  return (
    <div className="App">
        {/* <div className="containers">
          {containers.map((container) => (
            <textarea
              key={container.id}
              index={container.id}
              removeContainer={deleteContainer}
              onChange={editContainer}
            />
          ))} */}
        {/* </div> */}
        {/* <button onClick={addContainer}>Add New Container</button> */}
        <button id="saveBtn" onClick={savePrimaryContainer} className="saveButton">Save</button>
        <div id="alert" className="alert">
          <span className="closebtn" onClick={alertClose}>&times;</span>
          Changes Saved!
        </div>
        <div className='primaryContainer'> 
          <h3>Primary Container</h3>
          <textarea rows='7' cols='60' onChange={changePrimaryContainer}/>
        </div>
        <div className='optionalParentContainer'>
          <span className='heading'>Optional Containers</span>
          <button className = 'optionalParentHeadingBtn' onClick={addContainer}>+</button> 
        </div>
        <div className='optionalContainers'>
            {containers.map((container,index) => (
              <div key={container.id}>
                {/* <textarea />                 */}
                <img className="defContPic" src={def_cont_pic}/>
                <button className="removeContainerBtn" onClick={()=>removeContainer(index)} >X</button>
              </div>
            ))}
        </div>    
        
    </div>
  );
}

export default App;
