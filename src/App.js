import React, { useState } from 'react';


function App() {

  const [notas, setNotas] = useState([
    'aprender ReactJS',
    'aprender React Native'
  ])

  const [input, setInput] = useState('')

  function addNotes(){
    // alert('notas add!!')
    if(input != ''){
      setNotas([...notas, input])
      setInput('')
    }else{
      alert('Por favor digite um valor no campo.')
    }
  }

  return (
   <div>
     {/* <h1>{notas}</h1> */}
     <ul>
       {notas.map(notinhas => (
         <li key={notinhas} >{notinhas}</li>
       ))}
     </ul>

     <input type="text" value={input} onChange={event => setInput(event.target.value)} />
     <button type="button" onClick={addNotes} >ADD Notes</button>


   </div>
  );
}

export default App;
