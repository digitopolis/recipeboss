import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeIndex = ({recipes, ...props}) => {

	const searchFilter = (allRecipes, searchTerm) => {
		return allRecipes.filter( recipe => {
			return recipe.name.includes(searchTerm) || recipe.description.includes(searchTerm)
		})
	}

	if (props.showFavorites) {
		recipes = recipes.filter(recipe=>recipe.favorite)
	}
  return (
    <div className='container'>
      {searchFilter(recipes, props.searchTerm).map((recipe, idx) => (
        <RecipeCard
					key={idx}
					recipeId={idx}
					deleteRecipe={props.deleteRecipe}
					favoriteRecipe={props.favoriteRecipe}
					{...recipe} />
      ))}
    </div>
  )
}

export default RecipeIndex
