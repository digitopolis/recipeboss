import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeIndex = ({recipes, ...props}) => {
  return (
    <div className='container'>
      {recipes.map((recipe, idx) => (
        <RecipeCard
					key={idx}
					recipeId={idx}
					deleteRecipe={props.deleteRecipe}
					{...recipe} />
      ))}
    </div>
  )
}

export default RecipeIndex
