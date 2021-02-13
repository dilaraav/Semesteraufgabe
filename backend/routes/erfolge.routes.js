module.exports = app => {
    const erfolge = require("../controller/erfolge.controller.js");

    // Create a new Member
    app.post("/erfolge", erfolge.create);

    // GET all Members
    app.get("/erfolge", erfolge.findAll);

    // GET one single Member with memberId
    app.get("/erfolge/:id", erfolge.findOne);

    // Update one Member with memberId
    app.put("/erfolge/:id", erfolge.update);

    // Delete the Member with memberId
    app.delete("/erfolge/:id", erfolge.delete);

    // Delete all members
    app.delete("/erfolge", erfolge.deleteAll);
};
