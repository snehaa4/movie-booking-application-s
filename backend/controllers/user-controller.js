export const getAllUsers = async (req, res, next) => {
    
    let users;
    try {
        users = User.Users.find()
    }
    catch (err) {
        return next(err);
    }
    if (!users) {
        return res.status(500).json({ message: "Unexpected error occured" })
        
    }
    return res.status(200).json({ users })
};
export const signup = async (req, res, next) => { 
    const { name, email, password } = req.body;
    if (
        !name && name.trim() === "" &&
        !email && email.trim() === "" &&
        !password && password.trim() === ""
    )
    {
        return res.status(422).json({ message: "Invalid Inputs" });
        
    };
    try{
    user = new User({ name, email, password });  
    user = await user.save
    
}catch (err) { 
    return console.log(err);
    }
if (!user) {
    return res.status(500).json({ message: "unexpected error" });
}
    return res.status(201).json({ user})
};

export const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    if (
        !name && name.trim() === "" &&
        !email && email.trim() === "" &&
        !password && password.trim() === ""
    ) {
        return res.status(422).json({message: "unexpected input error" });
    }
    let user;
    try {
        user = await User.findByIdAndUpdate(id, { name, email, password });
    } catch (err) { 
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({message: "Unexpected Error Occured"})
    }
    res.status(200).json({
        message: "Updated Successfully,"
    });
}
export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAnDelete
    } catch (err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({message: "Unexpected Error Occured"})
    }
    res.status(200).json({
        message: "Deleted Successfully"
    });
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (
        !name && name.trim() === "" &&
        !email && email.trim() === "" &&
        !password && password.trim() === ""
    ) {
        return res.status(422).json({ message: "Incalid Input data" });
    }
    let existingUser;
    try {
        existingUser = await User.findOne({ email })
    }
    catch (err) { 
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(404).json({ message: "Unable to found the user from it s id" });
    }
    const isPasswordCorrect = bycrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) { 
        return res.status(400).json({message:"Invalid Credentials"});
    }
    return res.status(200).json({ message: "Login Successfuly" })
}


