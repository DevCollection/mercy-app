import React from 'react';
// import Button from '../shop/components/Button/Button';
import Help from 'pages/help';
import App from './app';
export default {
	pages: () => [
		{
			label: 'button',
			path: 'button',
			component: () => {
				return (
					<App>
						<Help />
					</App>
				);
			}
		}
	]
};
