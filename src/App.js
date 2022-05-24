import { useState } from 'react';
import Form from './components/Form';
import NewForm from './components/NewForm';
import AddContext from './store/form-context';
import './App.css';

function App() {
 const [newData,setNewData]=useState([])

 const saveData=(formData)=>{

    setNewData((prevState)=>{
      return[...prevState,formData]
    })
  
  }
 

 const deleteData=(id)=>{
const filteredData=newData.filter((el)=>{
if(el.id!==id){
  return [el]
}
})
setNewData(filteredData)
 }
  return (
    <>
    <AddContext.Provider value={{onSaveData:saveData,onDelete:deleteData,onData:newData}}>
      <Form/>
      <NewForm />
      </AddContext.Provider>
    </>
  );
}

export default App;
