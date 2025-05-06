import express from 'express'
import User from '../models/userSchema.mjs'
import Cart from '../models/cartSchema.mjs'

const router = express.Router()


router.post('/register', async (req, res) => {
    const {username, email, password} = (req.body);
    if (!username || !email || !password) {
        return res.status(400).json({msg: 'All fields are required.'})
    }

    const user = await User.findOne({email});
    if(user) {
        res.status(400).json({msg: 'Email already exist'})
    }

    user = new User({username, email, password})
    await user.save();

    const cart = new Cart({user: user._id, items: []})
    await cart.save();

    user.cart = cart._id
    await user.save()

    res.status(201).json({userId: user._id, cartId: cart._id});
    
})

export default router