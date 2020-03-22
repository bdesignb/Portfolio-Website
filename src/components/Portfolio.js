import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import '../Lightbox.css';
import Title from './Title';

class Portfolio extends React.Component {
	state = {
		photoIndex: 0,
		isOpen: false,
		images: this.props.data
	};

	renderImages = () => {
		let photoIndex = -1;
		const { images } = this.state;

		return images.map((imageSrc) => {
			photoIndex++;
			const privateKey = photoIndex;
			return (
				<MDBCol md="4" key={photoIndex} >
					<figure className='portfolio'>
						<img
							src={imageSrc}
							alt="Portfolio"
							className="img-fluid"
							onClick={() => this.setState({ photoIndex: privateKey, isOpen: true })}
						/>
					</figure>
				</MDBCol>
			);
		});
	};

	render() {
		const { photoIndex, isOpen, images } = this.state;
		return (
			<MDBContainer className="section" id="portfolio">			
				<Title title='my projects' subtitle='some of' />
				<div className="mdb-lightbox">
					<MDBRow>{this.renderImages()}</MDBRow>
				</div>
				{isOpen && (
					<Lightbox
						mainSrc={images[photoIndex]}
						nextSrc={images[(photoIndex + 1) % images.length]}
						prevSrc={images[(photoIndex + images.length - 1) % images.length]}
						imageTitle={photoIndex + 1 + '/' + images.length}
						onCloseRequest={() => this.setState({ isOpen: false })}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + images.length - 1) % images.length
							})}
						onMoveNextRequest={() =>
							this.setState({
								photoIndex: (photoIndex + 1) % images.length
							})}
					/>
				)}
			</MDBContainer>
		);
	}
}

export default Portfolio;
