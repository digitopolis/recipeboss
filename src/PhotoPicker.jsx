import React from 'react'
import styled from 'styled-components'
import Unsplash, { toJson } from 'unsplash-js';

class PhotoPicker extends React.Component {

	state = {
		searchTerm: '',
		photos: [],
		submitted: false
	}

	handleSearch = (event) => {
		event.preventDefault()
		const unsplash = new Unsplash({
		  applicationId: `${process.env.REACT_APP_APP_ACCESS_KEY}`,
		  secret: `${process.env.REACT_APP_APP_SECRET}`
		})
		unsplash.search.photos(this.state.searchTerm, 1)
		  .then(toJson)
		  .then(response => {
				const photos = response.results
		    this.setState({ photos })
		  })
	}

	handleChange = (event) => {
		const searchTerm = event.target.value
		this.setState({ searchTerm })
	}

	handleSelect = (event) => {
		const imgUrl = event.target.value
		this.props.handleImageSelection(imgUrl)
	}

	showPhotoList = () => {
		if (this.state.photos[0]) {
			return (
				<div className='photo-grid' onChange={this.handleSelect}>
					{this.state.photos.map(photo => {
						return (
							<CardWrapper key={photo.id}>
								<label>
									<input type='radio' name='image' value={photo.urls.small}/>
									<div style={{ overflow: 'hidden', height: '160px'}}>
										<img
											src={photo.urls.thumb}
											alt={photo.alt_description}/>
									</div>
								</label>
							</CardWrapper>
						)
					})}
				</div>
			)
		} else {
			return null
		}
	}

	render () {
		return (
			<div className='container'>
				<PhotoContainer>
					<form
						style={{flexGrow: 1}}
						onSubmit={this.handleSearch}>
						<h3>Pick a photo!</h3>
						<hr/>
						<div>
							<input
								type='text'
								name='searchTerm'
								placeholder='Find images..'
								onChange={this.handleChange}
							/>
						<input type='submit' value='Search'/>
						</div>
					</form>
				</PhotoContainer>
				<div className='container'>
					<PhotoContainer>
						{this.showPhotoList()}
					</PhotoContainer>
				</div>
			</div>
		)
	}
}

export default PhotoPicker;

const PhotoContainer = styled.div`
  background-color: white;
  position: relative;
	width: 600px;
	display: flex;
	justify-content: center;
  border: black solid 3px;
  border-radius: 5px;
`

const CardWrapper = styled.div`
  background-color: white;
  width: 200px;
  height: auto;
  cursor: pointer;
  position: relative;
  border: black solid 3px;
  border-radius: 5px;
`
