const School = require("../db/models/school.model");

class SchoolService {
  getAllSchools = async () => {
    try {
      const allSchools = await School.findAll();
      return {
        data: allSchools,
        success: true,
        status: 200,
      };
    } catch (error) {
      return { success: false, error: error };
    }
  };

  createSchool = async (payload) => {
    try {
      const data = await School.create(payload);
      return {
        data: data,
        success: true,
        status: 200,
      };
    } catch (error) {
      return { success: false, error: error };
    }
  };
}

module.exports = SchoolService;
