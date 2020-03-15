import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import '../Lightbox.css';

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
				<MDBCol md="4" key={photoIndex}>
					<figure>
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
				{/* START SECTION TITLE */}
				<div className="section-title">
					<h4 className="text-center">Some of</h4>
					<h2 className="text-center">My Completed Projects</h2>
				</div>
				{/* END SECTION TITLE */}
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
