import Header from './components/Header';
import RecipeList from './components/RecipeList';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <RecipeList />
    </div>
  );
}

export default App;
