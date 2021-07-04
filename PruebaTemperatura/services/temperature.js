const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getEntries(reqQuery) {
	query = `SELECT temperature FROM cities WHERE city ='${reqQuery.city}'`;
	const rows = await db.query(query);
	const data = helper.checkHasContent(rows);

	return {
		data,
	};
}

module.exports = {
	getEntries: getEntries,
};
