/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require("sequelize"); // Import Sequelize
const db = require("../db"); // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    validate: {
      min: 0,
      max: 4,
    },
  },
});

Student.associate = (models) => {
  Student.belongsTo(models.Campus, { foreignKey: "campusId" });
};

// Export the student model
module.exports = Student;