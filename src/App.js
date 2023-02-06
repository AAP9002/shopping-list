import './App.css';
import React, { useState } from 'react';

function App() {

  return <div class="d-flex app">
    <h1>Shopping List</h1>
    <Container/>
    </div>
  ;
}

function Container(){
  const [items, setList] = useState([])
  
  function setNewItem(item_name){
    if(item_name.trim().length >0)
      setList([...items,item_name]);
  }

  return <>
    <Form handleSubmit={setNewItem}/>
    <Listitems data={items} />
    </>
  ;
}

function Form(props)
{
  const [new_name, set_newname] = useState("");

  function value_changed(e){
    set_newname(e.target.value);
  }
  function submit(e) {
    props.handleSubmit(new_name);
    set_newname("");
    e.preventDefault();
  }

  return <form onSubmit={submit} class="form w-75">
    <input type="text" onChange={value_changed} value={new_name} class="form-control"/>
    <input type="submit" value="Add item" class="btn btn-success w-100 submit-button"/>
  </form>;
}

function Listitems(props){
  const list_items = props.data.map(
    (val,index)=>
  <li key={index}>{val}</li>
  )
  return <ol>
    {list_items}
    </ol>;
}

export default App;
