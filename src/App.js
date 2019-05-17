import React from 'react';
import RecipeIndex from './RecipeIndex'
import './App.css';
import NavBar from './NavBar';
import NewRecipe from './NewRecipe'
import recipeData from './recipes'

class App extends React.Component {

	state = {
		recipes: [],
		showForm: false,
		showFavorites: false,
		searchTerm: ''
	}

	componentDidMount() {
		this.setState({ recipes: recipeData })
	}

	showNewForm = () => {
		this.setState({ showForm: true })
	}

	showAllRecipes = () => {
		this.setState({
			showForm: false,
		 	showFavorites: false
		})
	}

	showFavorites = () => {
		this.setState({
			showForm: false,
			showFavorites: true
		})
	}

	addRecipe = (newRecipeObj) => {
		const updatedRecipes = [...this.state.recipes, newRecipeObj]
		this.setState({
			recipes: updatedRecipes,
		 	showForm: false
		})
	}

	deleteRecipe = (recipeId) => {
		const recipesCopy = [...this.state.recipes]
		recipesCopy.splice(recipeId, 1)
		this.setState({ recipes: recipesCopy })
	}

	favoriteRecipe = (recipeId) => {
		const recipesCopy = [...this.state.recipes]
		recipesCopy[recipeId].favorite = true
		this.setState({ recipes: recipesCopy })
	}

	handleSearchInput = (input) => {
		this.setState({ searchTerm: input })
	}

	render () {
		return (
	    <div className="App">
	      <NavBar
					showNewForm={this.showNewForm}
					showAllRecipes={this.showAllRecipes}
					showFavorites={this.showFavorites}
					handleSearchInput={this.handleSearchInput}/>
				{this.state.showForm ? <NewRecipe addRecipe={this.addRecipe}/> : <RecipeIndex recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} favoriteRecipe={this.favoriteRecipe} showFavorites={this.state.showFavorites} searchTerm={this.state.searchTerm}/>}
	    </div>
	  );
	}
}

export default App;
