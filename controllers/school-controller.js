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

router.get("/get/:id", async (req, res) => {
  try {
    const data = await schoolServiceInstance.getSchool(req.params.id);
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

router.patch("/update/:id", async (req, res) => {
  try {
    const data = await schoolServiceInstance.updateSchool(
      req.body,
      req.params.id
    );
    return res.status(data.status).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await schoolServiceInstance.deleteSchool(req.params.id);
    return res.status(data.status).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
