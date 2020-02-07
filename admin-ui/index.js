import React from 'react';
import Button from '../shop/components/Button/Button';

export default {
	pages: () => [
		{
			label: 'button',
			path: 'button',
			component: () => {
				return <Button title="button" />;
			}
		}
	]
};
