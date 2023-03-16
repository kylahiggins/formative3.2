const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    projectname: {
        type: String, 
        required: true},
    author_name: {
        type: String, 
        required: true},

    web_url:{
        type: String,
        required: true},

    image_url:{
        type: String,
        required: true}

});
const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project