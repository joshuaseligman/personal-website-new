import mongoose from 'mongoose';

const projectSchema:mongoose.Schema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    topics: [String],
    localPathToImg: String,
    projectURL: String
});

export default mongoose.models.project || mongoose.model('project', projectSchema);