import React from 'react'
import styled from 'styled-components'

const RecipeCard = recipe => {
  return (
    <CardWrapper>
      <Image
        width="250px"
        height="230px"
        src={recipe.image}
        style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
      />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
    </CardWrapper>
  )
}

export default RecipeCard

const CardWrapper = styled.div`
  background-color: white;
  width: 250px;
  height: auto;
  cursor: pointer;
  position: relative;
  border: black solid 3px;
  border-radius: 5px;
`

export const Image = styled.img`
  height: ${p => p.height};
  width: ${p => p.width};
  object-fit: cover;
`
