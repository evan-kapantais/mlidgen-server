const mongoose = require('mongoose');

const attackSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

attackSchema.set('toJSON', {
	transform: (document, returned) => {
		returned.id = returned._id.toString();
		delete returned._id;
		delete returned.__v;
	},
});

const Attack = mongoose.model('Attack', attackSchema);

module.exports = Attack;
