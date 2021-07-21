const attacksRouter = require('express').Router();
const Attack = require('../models/attack');

attacksRouter.get('/', async (req, res) => {
	try {
		const attacks = await Attack.find({});
		res.status(200).json(attacks);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

attacksRouter.get('/:id', async (req, res) => {
	try {
		const attack = await Attack.findById(req.params.id);
		res.status(200).json(attack);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

attacksRouter.post('/', async (req, res) => {
	try {
		const attack = new Attack({
			name: req.body.name,
		});

		const savedAttack = await attack.save();

		res.status(200).json(savedAttack);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

attacksRouter.delete('/:id', async (req, res) => {
	try {
		const attack = await Attack.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: 'Attack deleted successfully', attack });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = attacksRouter;
