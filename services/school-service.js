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

  getSchool = async (id) => {
    try {
      const school = await School.findOne({ where: { id } });
      if (!school) {
        return {
          data: {},
          success: true,
          status: 404,
        };
      } else {
        return {
          data: school,
          success: true,
          status: 200,
        };
      }
    } catch (error) {
      return { success: false, error: error };
    }
  };

  deleteSchool = async (id) => {
    try {
      await School.destroy({ where: { id } });
      return {
        data: "School deleted successfully!",
        success: true,
        status: 200,
      };
    } catch (error) {
      return { success: false, error: error };
    }
  };

  updateSchool = async (payload, id) => {
    try {
      await School.update(payload, { where: { id } });
      return {
        data: "School Updated Successfully!",
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
