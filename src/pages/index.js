import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import { Logo } from '../graphics/graphics';

function IndexPage({ data }) {
	return (
		<Layout
			meta={{
				title: 'Ab hominibus, pro hominibus — Herkimer Media, LLC',
				description: 'Design by humans, for humans.',
			}}
		>
			<div className="portal">
				<h1>
					<span className="sr-only">Herkimer Media, LLC</span>
					<div className="logo-container" aria-hidden="true">
						<Logo />
					</div>
				</h1>

				<p className="subtitle" lang="la" title="By humans, for humans">Ab homnibus, pro homnibus</p>

				<div className="links">
					<a
						href="https://github.com/herkimer-media"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="sr-only">@herkimer-media on GitHub</span>
						<span className="link-icon" aria-hidden="true">🐙</span>
					</a>

					<a href="mailto:contact@herkimer.llc">
						<span className="sr-only">Email contact@herkimer.llc</span>
						<span className="link-icon" aria-hidden="true">📨</span>
					</a>
				</div>
			</div>
		</Layout>
	);
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		logo: PropTypes.object.isRequired,
	}).isRequired,
};

export default IndexPage;
