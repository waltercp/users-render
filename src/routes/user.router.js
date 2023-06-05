const { getAll, create, remove, getOne, update} = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
		.post(create)

userRouter.route("/:id")
  .delete(remove)
  .get(getOne)
  .put(update)


module.exports = userRouter;