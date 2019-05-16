import React from 'react'
import styled from 'styled-components'

class NewRecipe extends React.Component {

	state = {
		name: '',
		description: '',
		instructions: '',
		image: ''
	}

	handleChange = (event) => {
		const target = event.target
		const value = target.value
		const name = target.name

		this.setState({ [name]: value })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const newRecipeObj = this.state
		this.props.addRecipe(newRecipeObj)
	}

	render () {
		return (
			<div className='container'>
				<FormContainer >
					<form
						style={{flexGrow: 1}}
						onSubmit={this.handleSubmit}
					>
						<h3>New Recipe</h3>
						<hr/>
						<div>
							<label className='form-label'>Name: </label>
							<input
								className='form-input'
								type='text'
								name='name'
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<label className='form-label'>Description: </label>
							<input
								className='form-input'
								type='text'
								name='description'
								value={this.state.description}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<label className='form-label'>Instructions: </label>
							<textarea
								style={{width: '300px', height: '100px'}}
								className='form-input'
								name='instructions'
								value={this.state.instructions}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<input
								type='submit'
								value='Save Recipe'
							/>
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
