import React from 'react';
import './styles.css';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer  black">
				<div className="fixed_container row">
					<div className="col s2" />

					<div className="socLinks col s10">
						<ul className="socialIcons right">
							<li>
								<a target="_blank" href="https://www.facebook.com/groups/">
									<img src="/social_icons/Facebook Y.png" />
								</a>
							</li>
							<li>
								<a target="_blank" href="https://www.instagram.com/">
									<img src="/social_icons/Instagram Y.png" />
								</a>
							</li>
							<li>
								<a target="_blank" href="https://ok.ru/profile/">
									<img src="/social_icons/Odnoklassniki Y.png" />
								</a>
							</li>
							<li>
								<a target="_blank" href="https://www.patreon.com/">
									<img src="/social_icons/Patreon Y.png" />
								</a>
							</li>
							<li>
								<a target="_blank" href="https://twitter.com/">
									<img src="/social_icons/Twitter Y.png" />
								</a>
							</li>
							<li>
								<a target="_blank" href="https://vk.com/">
									<img src="/social_icons/VK Y.png" />
								</a>
							</li>
							{/*<li><a target='_blank' href=''><img  src='/social_icons/YoutubeY.png'/></a></li>*/}
						</ul>
					</div>

					<div className="col s12" />
				</div>
			</footer>
		);
	}
}

export default Footer;
