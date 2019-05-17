import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeIndex = ({recipes, ...props}) => {

	if (props.showFavorites) {
		recipes = recipes.filter(recipe=>recipe.favorite)
	}
  return (
    <div className='container'>
      {recipes.map((recipe, idx) => (
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
