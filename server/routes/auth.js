const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

// Step 3
router.get("/login/success", (req, res) => {
    console.log('User:', req.user);
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
});

// Step 4
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

// Step 5
router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect(CLIENT_URL);
});

// Step 1
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Step 2
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
