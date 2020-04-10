import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function Layout({
	locale = 'en',
	meta,
	children,
}) {
	return (
		<div className="site">
			<Helmet>
				<html lang={locale} />
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
			</Helmet>

			<main className="site-main">{children}</main>
		</div>
	);
}

Layout.propTypes = {
	locale: PropTypes.string,
	meta: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
	children: PropTypes.node.isRequired,
};

export default Layout;
