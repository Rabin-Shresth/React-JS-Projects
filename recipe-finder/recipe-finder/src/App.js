import { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import SearchForm from './components/SearchForm';

function App() {

  const[search, setSearch]=useState('');

  return (
    <div className="App">
      <Header />
      <SearchForm search={search} setSearch={setSearch}/>
      <RecipeList />
    </div>
  );
}

export default App;
