import User from '../models/User.js';
import bcrypt from 'bcryptjs'

// log in or get single user info

export const logInUser = async (req, res) => {
    try {

        const user = await User.findOne({username: req.params.username});
        if (!user) {
            res.status(404).send("User Not Found.");
        } else {
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordCorrect) {
                res.status(400).send("Wrong Password!");
            } else {
                const {password, ...otherDetails} = user._doc
                res.status(200).send({...otherDetails});
            }
        }

    } catch(err) {
        res.status(500).json(err);
    }
};

export const logInWithGoogle = async (req, res) => {
    try {

        const user = await User.findOne({email: req.params.email});
        if (!user) {
            res.status(404).send("Email doesn't exist in system. Please sign up first!");
        } else {
            const { password, ...otherDetails } = user._doc;
            res.status(200).send({ ...otherDetails });
        }

    } catch(err) {
        res.status(500).json(err);
    }
};



