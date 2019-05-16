import React from 'react'
import styled from 'styled-components'

class NewRecipe extends React.Component {
	render () {
		return (
			<div className='container'>
				<FormContainer >
					<form style={{flexGrow: 1}}>
						<h3>New Recipe</h3>
						<hr/>
						<div>
							<label className='form-label'>Name: </label>
							<input className='form-input'type='text'/>
						</div>
						<div>
							<label className='form-label'>Description: </label>
							<input className='form-input'type='text'/>
						</div>
						<div>
							<label className='form-label'>Instructions: </label>
							<textarea className='form-input'/>
						</div>
					</form>
				</FormContainer>
			</div>
		)
	}
}

export default NewRecipe;

const FormContainer = styled.div`
  background-color: white;
  position: relative;
	width: 600px;
	display: flex;
	justify-content: center;
  border: black solid 3px;
  border-radius: 5px;
`
