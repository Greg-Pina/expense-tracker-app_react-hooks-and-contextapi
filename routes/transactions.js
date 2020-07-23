const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const {
	getTransactions,
	addTransactions,
	deleteTransactions,
} = require('../controllers/transaction_controller')

router.route('/').get(getTransactions).post(addTransactions)

router.route('/:id').delete(deleteTransactions)

module.exports = router
