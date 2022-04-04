const sql = require("./db.js");

// constructor
const Classroom = function(classroom) {
  this.nameClassroom = classroom.nameClassroom;
  this.capacityClassroom = classroom.capacityClassroom;
  this.enabledClassroom = classroom.enabledClassroom;
};

Classroom.create = (newClassroom, result) => {
  sql.query("INSERT INTO classroom SET ?", newClassroom, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created classroom: ", { id: res.insertId, ...newClassroom });
    result(null, { id: res.insertId, ...newClassroom });
  });
};

Classroom.findById = (id, result) => {
  sql.query(`SELECT * FROM classroom WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found classroom: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found classroom with the id
    result({ kind: "not_found" }, null);
  });
};

Classroom.getAll = (nameClassroom, result) => {
  let query = "SELECT * FROM classroom";

  if (nameClassroom) {
    query += ` WHERE nameClassroom LIKE '%${nameClassroom}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("classrooms: ", res);
    result(null, res);
  });
};

Classroom.getAllEnabledClassroom = result => {
  sql.query("SELECT * FROM classroom WHERE enabledClassroom=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("classrooms: ", res);
    result(null, res);
  });
};

Classroom.updateById = (id, classroom, result) => {
  sql.query(
    "UPDATE classroom SET nameClassroom = ?, capacityClassroom = ?, enabledClassroom = ? WHERE id = ?",
    [classroom.nameClassroom, classroom.capacityClassroom, classroom.enabledClassroom, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found classroom with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated classroom: ", { id: id, ...classroom });
      result(null, { id: id, ...classroom });
    }
  );
};

Classroom.remove = (id, result) => {
  sql.query("DELETE FROM classroom WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found classroom with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted classroom with id: ", id);
    result(null, res);
  });
};

Classroom.removeAll = result => {
  sql.query("DELETE FROM classroom WHERE 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} classrooms`);
    result(null, res);
  });
};

module.exports = Classroom;
