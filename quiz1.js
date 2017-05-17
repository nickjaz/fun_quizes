
function Quiz(question, answer) {
  this.question = question;
  this.answer = answer;
}

var counter= 0;

Quiz.prototype.askQuestion = function() {
  var userAnswer = prompt(this.question).toLowerCase();
  if (userAnswer === this.answer) {
    alert('Correct. Great Job!');
    counter++;
  } else {
    alert('Wrong. Too bad. :(');
  }
};

var quizOne = new Quiz('There is only one way to make an object.','false');
var quizTwo = new Quiz('According to Brian tables are the best way to design a website.', 'false');
var quizThree = new Quiz('A function inside an object is called a method.', 'true');
var quizFour = new Quiz('Data types are also objects.', 'true');
var quizFive = new Quiz('The .split() is a number method.', 'false');

var quizQuestions = [quizOne, quizTwo, quizThree, quizFour, quizFive];

alert('Quiz for Day 7: Answer with true or false. Invalid answers will be counted as wrong.');


for (var i = 0; i < quizQuestions.length; i++);{
  quizQuestions[i].askQuestion();
}

if (counter > 3) {
  alert('You got ' + counter + ' questions right. You\'re on your way to this:');
} else {
  alert('You got ' + counter + ' questions right. You\'ve got some work to do to be as good as this:');
}
