exports.seed = function (knex) {
  return knex('users').insert([
			{
				id: 1,
				username: 'KP1',
				password: 'password',
				department: 'development',
			},
			{
				id: 2,
				username: 'Ginger',
				password: 'wordpass',
				department: 'finance',
			},
			{
				id: 3,
				username: 'Dale',
				password: 'eagle',
				department: 'human resources',
			}
		])
}
