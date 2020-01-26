import React, { Component } from 'react';


/**  Components  **/
import Layout from '../components/layouts/Layout';
import MainBanner from '../components/MainBanner';

/** Actions **/
import { getPages } from '../store/actions';

class MainPage extends Component {
	static async getInitialProps(props) {
		const { query, store } = props;

		const pagesReq = await store.dispatch(getPages());
		const frontPageRecord = pagesReq.items.find(item => item.showOnFront == true);

		return { frontPageRecord };
	}

	render() {
		const { frontPageRecord } = this.props;

		const meta = {
			title: 'Lego-Lounge',
			description: 'Lego-Lounge'
		};

		return (
			<Layout meta={meta} pageClass="mainPage" frontPage={true} container={false} {...this.props}>
				<MainBanner />

				<div>
					<a href="/">
						<img src="/YoutubeChannel.png" style={{ width: '415px', margin: 'auto', display: 'block', padding: '10px 0 20px 0' }} />
					</a>
				</div>
				<div className="container">{frontPageRecord && <div className="row description ckEditorContent" dangerouslySetInnerHTML={{ __html: frontPageRecord.description }} />}</div>
			</Layout>
		);
	}
}

export default MainPage;
