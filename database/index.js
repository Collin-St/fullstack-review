const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;

db.on('error', 
console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB')
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  id: { 
    Number,
    unique: true },
  repos_url: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let newRepo = Repo(repo);
  return newRepo.save();
};

let reposByStars = () => {
  return Repo.find().sort({ stars: -1 });
};

module.exports = {
  save,
  reposByStars
} ;