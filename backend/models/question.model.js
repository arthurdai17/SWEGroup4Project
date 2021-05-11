const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  questionid: {type: Number, required: true},
  questiontext: { type: String, required: true },
  choice1: { type: String, required: true },
  choice2: { type: String, required: true },
  choice3: { type: String, required: true },
  choice4: { type: String, required: true },
  answer: { type: String, required: true },
  picture: { type: String},
  fact: {type: String, required: true}
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
