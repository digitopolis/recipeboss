import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeIndex = ({recipes, ...props}) => {
  return (
    <div className='container'>
      {recipes.map((recipe, idx) => (
        <RecipeCard key={idx} {...recipe} />
      ))}
    </div>
  )
}

export default RecipeIndex
