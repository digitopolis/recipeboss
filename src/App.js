import React, {useState, useEffect} from 'react';
import RecipeIndex from './RecipeIndex'
import './App.css';
import NavBar from './NavBar';
import NewRecipe from './NewRecipe'
import recipeData from './recipes'

function App() {
  const [recipes, setRecipes] = useState(recipeData)
	const [showForm, setShowForm] = useState(null)

  useEffect(() => {
    console.log(recipes);
  })

	const showNewForm = () => {
		setShowForm(true)
	}

	const showAllRecipes = () => {
		setShowForm(false)
	}

	const addRecipe = (newRecipeObj) => {
		recipes.push(newRecipeObj)
		setRecipes(recipes)
		showAllRecipes()
	}

  return (
    <div className="App">
      <NavBar
				showNewForm={showNewForm}
				showAllRecipes={showAllRecipes}/>
			{showForm ? <NewRecipe addRecipe={addRecipe}/> : <RecipeIndex recipes={recipes} />}
    </div>
  );
}

export default App;
