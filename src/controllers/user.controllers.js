const catchError = require('../utils/catchError');
const User = require('../models/User');
const getAll = catchError(async (req, res) => {
    const users = await User.findAll()
    return res.json(users)
});
const create = catchError(async (req, res) => {
    const user = req.body
    const createUser = await User.create(user)
    return res.status(201).json(createUser)
})


const remove = catchError(async (req, res) => {
    const {id} = req.params
    await User.destroy({where: {id}})
    return res.sendStatus(204)
})

const getOne = catchError(async (req, res) => {
    const {id} = req.params
    const user = await User.findByPk(id)
    return res.json(user)
})

const update = catchError(async (req, res) => {

    const user = req.body
    const {id} = req.params

    const userUpdate = await User.update(user, { where: {id}, returning:true})
    return res.json(userUpdate[1][0])
})



module.exports = {
    getAll,
    create,
    remove,
    getOne,
    update
}