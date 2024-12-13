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
    validate: {
      isEmail: true,
    },
  },

  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue:
      "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png",
  },

  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

Student.associate = (models) => {
  Student.belongsTo(models.Campus, {
    foreignKey: {
      name: "campusId",
      allowNull: true, 
    },
  });
};


// Export the student model
module.exports = Student;