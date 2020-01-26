import React from 'react';
import './parallax.css';
import M from 'materialize-css';

class Parallax extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();

		this.instance = null;
	}

	componentDidMount() {
		const elems = this.myRef.current;
		this.instance = M.Parallax.init(elems, {});
	}
	componentDidUpdate() {
		const elems = this.myRef.current;
		this.instance = M.Parallax.init(elems, {});
	}

	render() {
		const { image } = this.props;
		console.warn('image', image);
		const img = image ? image :'/banner/parallaxBanner.jpg';
		return (
			<div className="row" style={{position: 'sticky'}}>
				<div ref={this.myRef} className="parallax-container">
					<div className="parallax">
						<img className="" alt="parallax" src={img} />
					</div>
				</div>
			</div>
		);
	}
}

export default Parallax;
