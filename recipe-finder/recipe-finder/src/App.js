import { useEffect, useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import SearchForm from './components/SearchForm';

function App() {

  const[search, setSearch]=useState('');
  const[recipe,setRecipe]=useState([]);
  const apiKey=process.env.REACT_APP_RECIPE_FINDER_API_KEY;


  // useEffect(() => {
  //   if (search) {
  //     const API_URL = `https://api.api-ninjas.com/v1/recipe'query=${search}&X-Api-Key=McAC08DWRHTlJrO0UkKsHg==F7R0IbQa6YQmatTt`;
  //     fetch(API_URL)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then(data => setRecipe(data.results))
  //       .catch(error => console.log('Error fetching data:', error));
  //   }
  // }, [search]);

  useEffect(()=>{
    if(search){
      async function fetchApiData() {
        const url=`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&apiKey=${apiKey}`
        try{
          const res= await fetch(url);
          const apiData= await res.json();
          setRecipe(apiData)
          console.log(apiData)
        }
        catch{
          console.log("not found")
        }        
        
      }
      fetchApiData();
    }
  },
[apiKey, search])



  return (
    <div className="App">
      <Header />
      <SearchForm search={search} setSearch={setSearch}/>
      <RecipeList />
    </div>
  );
}

export default App;
