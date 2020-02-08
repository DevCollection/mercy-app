import React from 'react';
// import Button from '../shop/components/Button/Button';
import Help from 'pages/help';
export default {
	pages: () => [
		{
			label: 'button',
			path: 'button',
			component: () => {
				return <Help />;
			}
		}
	]
};
