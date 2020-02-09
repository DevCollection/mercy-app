const seed = {
	User: [
		{
			name: 'Admin User',
			email: 'ichenwu01@gmail.com',
			isAdmin: true,
			dob: '1990-01-01',
			password: 'wuichen01'
		},
		{
			name: 'Demo User',
			email: 'user@keystonejs.com',
			isAdmin: false,
			dob: '1995-06-09',
			password: 'password'
		}
	]
};

module.exports = async keystone => {
	const users = await keystone.lists.User.adapter.findAll();
	if (!users.length) {
		await keystone.createItems(seed);
	}
};
