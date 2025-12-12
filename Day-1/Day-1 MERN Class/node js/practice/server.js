const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/usersdb")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("DB Connection Error:", err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model("User", userSchema);

// GET all users
app.get("/api/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// GET user by ID
app.get("/api/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user)
            return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(400).json({ message: "Invalid user ID" });
    }
});

// POST - Create user
app.post("/api/users", async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email
    });

    await newUser.save();
    res.status(201).json(newUser);
});

// PUT - Update entire user
app.put("/api/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email
            },
            { new: true } // returns updated data
        );

        if (!updatedUser)
            return res.status(404).json({ message: "User not found" });

        res.json({ message: "User updated", updatedUser });
    } catch (error) {
        res.status(400).json({ message: "Invalid user ID" });
    }
});

// DELETE user
app.delete("/api/users/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser)
            return res.status(404).json({ message: "User not found" });

        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(400).json({ message: "Invalid user ID" });
    }
});

// --------------------------------------
//              START SERVER
// --------------------------------------
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
