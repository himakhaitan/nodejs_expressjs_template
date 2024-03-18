// Imports
const express = require("express");
const sampleValidator = require("../validations/route");

// Instanciating Router
const router = express.Router();

/*
  @route  GET /sample
  @desc   Sample Route
  @access { general }
  @params [ ]
  @return [ success, message ]
*/
router.get("/sample", (req, res) => {
  return res.json({
    status: true,
    message: "Sample Route Reached",
  });
});

/*
  @route  POST /sample
  @desc   Sample Route
  @access { general }
  @params [ name, email ]
  @return [ success, message ]
*/
router.post("/sample", (req, res) => {
  const { error, isValid } = sampleValidator(req.body);

  // If the req data is not fine
  if (!isValid) {
    return res.json({
      success: false,
      message: "Error in data",
      error,
    });
  }

  // Perform the necessary operations here (as per the logic)

  // Returning a Response
  return res.json({
    success: true,
    message: "Sample Data Successfully Posted",
    error: null,
  });
});

module.exports = router;