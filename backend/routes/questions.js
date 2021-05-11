const router = require('express').Router();
let Question = require('../models/question.model');

router.route('/').get((req, res) => {
  Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const questionid = req.body.questionid;
  const questiontext = req.body.questiontext;
  const choice1 = req.body.choice1;
  const choice2 = req.body.choice2;
  const choice3 = req.body.choice3;
  const choice4 = req.body.choice4;
  const answer = req.body.answer;
  const picture = req.body.picture;
  const fact = req.body.fact;

  const newQuestion = new Question({
    questionid,
    questiontext,
    choice1,
    choice2,
    choice3,
    choice4,
    answer,
    picture,
    fact
  });

  newQuestion.save()
  .then(() => res.json('Question added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// unused routes - talk about in report
router.route('/:id').get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Question.findByIdAndDelete(req.params.id)
    .then(() => res.json('Question deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Question.findById(req.params.id)
    .then(question => {
      question.questionid = req.body.questionid;
      question.questiontext = req.body.questiontext;
      question.choice1 = req.body.choice1;
      question.choice2 = req.body.choice2;
      question.choice3 = req.body.choice3;
      question.choice4 = req.body.choice4;
      question.answer = req.body.answer;
      question.picture = req.body.picture;
      question.fact = req.body.fact;

      //can be used by website creater but not by user if no interface
      question.save()
        .then(() => res.json('Question updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
