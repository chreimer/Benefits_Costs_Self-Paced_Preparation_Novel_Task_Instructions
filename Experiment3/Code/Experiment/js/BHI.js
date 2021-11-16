// function for getting responses from the BHI (short HEXACO) questionnaire
var get_resp = function(data, reverse) {
  var responses = JSON.parse(data.responses);
  var resp = responses.Q0 + 1; // javaScript uses 0-based indexing. Change into 1-based indexing

  // reverse coding
  if (reverse === 1) {
    resp = 6 - resp;
  };

  return resp;

}

var scale_3 = ["strongly disagree", "disagree", "neutral (neither agree nor disagree)", "agree", "strongly agree"];

 // questions
var Question1 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 1/4:\nI make sure that things are in the right spot.",
    labels: scale_3,
    required: true,
  }, ],
  on_finish: function(data) {
    data.test_part = 'BHI';
    data.reverse = 0;
    data.factor = "Conscientiousness_BHI";
    data.qnumber = "1";
    data.resp = get_resp(data, data.reverse);
  }
}

var Question2 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 2/4:\nI postpone complicated tasks as long as possible.",
    labels: scale_3,
    required: true
  }, ],
  on_finish: function(data) {
    data.test_part = 'BHI';
    data.reverse = 0; //1
    data.factor = "Conscientiousness_BHI";
    data.qnumber = "2";
    data.resp = get_resp(data, data.reverse);
  }
};

var Question3 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 3/4:\nI work very precisely.",
    labels: scale_3,
    required: true
  }, ],
  on_finish: function(data) {
    data.test_part = 'BHI';
    data.reverse = 0;
    data.factor = "Conscientiousness_BHI";
    data.qnumber = "3";
    data.resp = get_resp(data, data.reverse);
  }
};

var Question4 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 4/4:\nI often do things without really thinking.",
    labels: scale_3,
    required: true
  }, ],
  on_finish: function(data) {
    data.test_part = 'BHI';
    data.reverse = 0; //1
    data.factor = "Conscientiousness_BHI";
    data.qnumber = "4";
    data.resp = get_resp(data, data.reverse);
  }
};


var BHI_items = [Question1, Question2, Question3, Question4];
