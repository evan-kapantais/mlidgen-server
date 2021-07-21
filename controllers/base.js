const baseRouter = require('express').Router();
const Base = require('../models/base');

baseRouter.get('/', async (req, res) => {
	try {
		const base = await Base.find({});
		res.status(200).json(base);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

baseRouter.post('/', async (req, res) => {
	try {
		const base = new Base({
			current_id: req.body.current_id,
		});

		const savedBase = await base.save();

		res.status(200).json(savedBase);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

baseRouter.put('/:id', async (req, res) => {
	try {
		const base = await Base.findByIdAndUpdate(
			req.params.id,
			{
				current_id: req.body.current_id,
			},
			{ new: true }
		);

		res.status(200).json(base);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = baseRouter;
