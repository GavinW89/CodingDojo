const JobController = require("../controllers/job.controller");

module.exports = app => {
    app.get("/api/test", JobController.testResponse);
    app.get("/api/jobs/findAll", JobController.findAll);
    app.post("/api/jobs/create", JobController.create);
    app.get("/api/jobs/:_id", JobController.findOne);
    app.delete("/api/jobs/:_id", JobController.deleteOne);
    app.patch("/api/jobs/:_id", JobController.updateOne);
}