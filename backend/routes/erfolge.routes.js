module.exports = app => {
    const erfolge = require("../controller/erfolge.controller.js");

    // Create a new Member
    app.post("/erfolge", erfolge.create);

    // GET all Members
    app.get("/erfolge", erfolge.findAll);

    // GET one single Member with memberId
    app.get("/erfolge/:datum", erfolge.findOne);

    // Update one Member with memberId
    app.put("/members/:datum", erfolge.update);

    // Delete the Member with memberId
    app.delete("/members/:datum", erfolge.delete);

    // Delete all members
    app.delete("/members", erfolge.deleteAll);
};