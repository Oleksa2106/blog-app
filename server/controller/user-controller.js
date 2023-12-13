import bcyrpt from 'bcrypt'

import User from '../model/user.js';

export const signupUser = async (request, response) => {
    try {
        //const salt = await bcyrpt.genSalt(40);
        const hashedPassword = await bcyrpt.hash(request.body.password, 10);

        const user = { username: request.body.username, name: request.body.name, password: hashedPassword };

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'signup good' })
    } catch (error) {
        return response.status(500).json({ msg: 'error signup' })
    }
}