import React , {Component , useState} from 'react';
import './App.css';
import Person from './Person/Person';
import Person2 from './Person/Person2';
import { render } from 'react-dom';
import Member from './components/Member';

 const App = () => {
  
 const [personState , setPersonState] = useState({
  persons:  [
    {id:"ff", name:"hossam" , age:"28"},
    {id:"fff", name:"ali" , age:"30"},
    {id:"ffff", name:"ahmed" , age:"35"},
  ],
})
const [showNames , setShowNames] =useState(false)
     
 const changeNameHandler = () => {
// alert("onclick")
// this.state.persons[]="alaa"
const persons = [...personState.persons];
person[0].name = "gamal";
person[1].age = "25";
setPersonState({
  persons:persons,
})
 }

  // setPersonState({
//   persons:[
//     {name:"mohamed" , age"20} , 
//     {name:"ali" , age"25} , 
//     {name:"alaa" , age"30} , 
//   ]
// })
 const nameChangeHandler = (name) => {
  setPersonState({
    persons:  [
      {name:"hossam" , age:"28"},
    ],
  });
 };

 const showNamesHandler =() =>{
   setShowNames(!showNames)
 }

 let person = null; 
 if (showNames){
   person = (
    <div>
      {personState.persons.map((person, index) =>{
        return <Person name ={person.name} age= { person.age} key={person.id} />;

      })}
      </div>
   );
  }
//     {/* <Person 
//        name ={personState.persons[0].name} 
//        age= { personState.persons[0].age} 
//        click={changeNameHandler}
//        /> 

//        <Person  
//        name ={personState.persons[1].name} 
//        age= { personState.persons[1].age} 
//        changeName = {nameChangeHandler}
//        /> 

//        <Person  
//        name ={personState.persons[2].name} 
//        age= { personState.persons[2].age} /> 
// </div> */}
   


    return(
<>

<Member />


      <div className="App"> React Comp
      <header className="App-header"> 
        <button className='btn-one' onClick={changeNameHandler}>Change Name</button>
       <button className='btn-two' onClick={showNamesHandler }>Toggle Names</button>
     {person}


    </header>
</div>
</>
    )
  

    }

export default App;
