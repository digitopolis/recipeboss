import React, {useState, useEffect} from 'react';
import RecipeIndex from './RecipeIndex'
import './App.css';
import NavBar from './NavBar';
import recipeData from './recipes'

function App() {
  const [recipes, setRecipes] = useState([])
	const [showForm, setShowForm] = useState(null)

  useEffect(() => {
    setRecipes(recipeData)
  }, [])

	const showNewForm = () => {
		setShowForm(true)
	}

	const showAllRecipes = () => {
		setShowForm(false)
	}

  return (
    <div className="App">
      <NavBar
				showNewForm={showNewForm}
				showAllRecipes={showAllRecipes}/>
      {showForm ? console.log('true') : <RecipeIndex recipes={recipes} />}
    </div>
  );
}

export default App;
