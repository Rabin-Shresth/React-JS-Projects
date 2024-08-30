import React, { useState } from 'react'

export default function SearchForm() {
  const[search, setSearch]=useState('');

  //Handle the change in search input
  const handleInputChange =(e)=>{
    setSearch(e.target.value);
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(search)
  };
  
  return (
    <form onClick={handleSubmit}>
        <input type='text' value={search} onChange={handleInputChange} placeholder='Search for recipe'/>
        <button type='submit'>Submit</button>
    </form>
  )
}
