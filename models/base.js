const mongoose = require('mongoose');

const baseSchema = new mongoose.Schema({
	current_id: {
		type: Number,
		required: [true, 'An ML ID is required'],
	},
});

baseSchema.set('toJSON', {
	transform: (document, returned) => {
		returned.id = returned._id.toString();
		delete returned._id;
		delete returned.__v;
	},
});

const Base = mongoose.model('Base', baseSchema);

module.exports = Base;
