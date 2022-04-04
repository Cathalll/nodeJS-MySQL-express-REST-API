const Classroom = require("../models/classroom.model.js");

// Create and Save a new classroom
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a classroom
  const classroom = new Classroom({
    nameClassroom: req.body.nameClassroom,
    capacityClassroom: req.body.capacityClassroom,
    enabledClassroom: req.body.enabledClassroom || false
  });

  // Save classroom in the database
  Classroom.create(classroom, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the classroom."
      });
    else res.send(data);
  });
};

// Retrieve all classrooms from the database (with condition).
exports.findAll = (req, res) => {
  const nameClassroom = req.query.nameClassroom;

  Classroom.getAll(nameClassroom, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving classrooms."
      });
    else res.send(data);
  });
};

// Find a single classroom by Id
exports.findOne = (req, res) => {
  Classroom.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found classroom with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving classroom with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all enabledClassroom classrooms
exports.findAllEnabledClassroom = (req, res) => {
  Classroom.getAllEnabledClassroom((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving classrooms."
      });
    else res.send(data);
  });
};

// Update a classroom identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Classroom.updateById(
    req.params.id,
    new Classroom(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found classroom with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating classroom with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a classroom with the specified id in the request
exports.delete = (req, res) => {
  Classroom.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found classroom with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete classroom with id " + req.params.id
        });
      }
    } else res.send({ message: `classroom was deleted successfully!` });
  });
};

// Delete all classrooms from the database.
exports.deleteAll = (req, res) => {
  Classroom.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all classrooms."
      });
    else res.send({ message: `All classrooms were deleted successfully!` });
  });
};
