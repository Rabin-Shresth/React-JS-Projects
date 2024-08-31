
export default function SearchForm(props) {
  
  //Handle the change in search input
  const handleInputChange =(e)=>{
    props.setSearch(e.target.value);
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(props.search)
  };
  
  return (
    <form onClick={handleSubmit}>
        <input type='text' value={props.search} onChange={handleInputChange} placeholder='Enter Ingredients ...'/>
        <button type='submit'>Submit</button>
    </form>
  )
}
