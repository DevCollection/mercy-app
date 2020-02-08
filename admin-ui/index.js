import React from 'react';
// import Button from '../shop/components/Button/Button';
import Help from 'pages/help';
import OrderReceived from 'pages/order-recived';

import App from './app';
export default {
	pages: () => [
		{
			label: 'button',
			path: 'help',
			component: () => {
				return (
					<App>
						<Help />
					</App>
				);
			}
		},
		{
			label: 'button',
			path: 'order-recived',
			component: () => {
				return (
					<App>
						<OrderReceived />
					</App>
				);
			}
		}
	]
};
