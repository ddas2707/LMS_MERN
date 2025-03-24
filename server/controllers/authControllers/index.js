const User = require('../../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const { userName, userEmail, password, role } = req.body;
    const existingUser = await User.findOne({
        $or: [{ userEmail }, { userName }]
    });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "UserName or UserEmail already Exists."
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ userName, userEmail, password: hashedPassword });

    await newUser.save();

    return res.status(201).json({
        success: true,
        message: "New User Created/Registered SuccessFully"
    })
}

module.exports = { registerUser }