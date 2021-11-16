// function for getting responses from the TIPI (short Big Five) questionnaire
var get_resp = function(data, reverse) {
  var responses = JSON.parse(data.responses);
  var resp = responses.Q0 + 1; // javaScript uses 0-based indexing. Change into 1-based indexing

  // reverse coding
  if (reverse === 1) {
    resp = 8 - resp;
  };

  return resp;

}

var scale_2 = ["disagree strongly", "disagree moderately", "disagree a little", "neither agree nor disagree", "agree a little", "agree moderately", "agree strongly"];

 // questions
var Question1 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 1/2:\nI see myself as: dependable, self-disciplined.",
    labels: scale_2,
    required: true,
  }, ],
  on_finish: function(data) {
    data.test_part = 'TIPI';
    data.reverse = 0;
    data.factor = "Conscientiousness_TIPI";
    data.qnumber = "1";
    data.resp = get_resp(data, data.reverse);
  }
}

var Question2 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 2/2:\nI see myself as: disorganized, careless.",
    labels: scale_2,
    required: true
  }, ],
  on_finish: function(data) {
    data.test_part = 'TIPI';
    data.reverse = 0; //1
    data.factor = "Conscientiousness_TIPI";
    data.qnumber = "2";
    data.resp = get_resp(data, data.reverse);
  }
};


var TIPI_items = [Question1, Question2];
