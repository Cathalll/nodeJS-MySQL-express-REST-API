module.exports = app => {
  const classrooms = require("../controllers/classroom.controller.js");

  var router = require("express").Router();

  // Create a new classroom
  router.post("/", classrooms.create);

  // Retrieve all classrooms
  router.get("/", classrooms.findAll);

  // Retrieve all enabledClassroom classrooms
  router.get("/enabledClassroom", classrooms.findAllEnabledClassroom);

  // Retrieve a single classroom with id
  router.get("/:id", classrooms.findOne);

  // Update a classroom with id
  router.put("/:id", classrooms.update);

  // Delete a classroom with id
  router.delete("/:id", classrooms.delete);

  // Delete all classrooms
  router.delete("/", classrooms.deleteAll);

  app.use('/api/classrooms', router);
};
