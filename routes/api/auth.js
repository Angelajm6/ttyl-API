const router = require("express").Router();
const user = require("./users");

//register
router.post("/register", async (req,res)=>{
  const newUser = new User {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
});


try {
    const user = await newUser.save();
    res.status(200).json(user);
} catch (err) {
    console.log(err);
}



module.exports = router