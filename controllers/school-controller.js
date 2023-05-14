const router = require("express").Router();

const SchoolService = require("../services/school-service");
const schoolServiceInstance = new SchoolService();

router.get("/get", async (req, res) => {
  try {
    const data = await schoolServiceInstance.getAllSchools();
    return res.status(data.status).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const data = await schoolServiceInstance.createSchool(req.body);
    return res.status(data.status).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
