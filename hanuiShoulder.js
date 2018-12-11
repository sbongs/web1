'use strict'

let vers = 0.003;

// 예시.
let hoffmanSign ={
    name:'Hoffman Sign',
    diagnosis:['hypertonia', 'corticospinal tract'],
};


let physicalDiagnosis ={
    'Hoffman':'hypertonia or corticospinal tract',
    '_Hoffman':hoffmanSign,
    'External-rotation-lag-test':'Infraspinatus & Supraspinatus',
    'Internal-rotation-lag-test':'Subscapularis',
    'Pain-arc-test':'Impingement Syndrome (LR+ 3.7, LR- 0.36)',
    'Cross-body-adduction-test':'Impingement Syndrome (LR+ 1.9, LR- 0.42)',
    'Neer\'s-test':'Impingement Syndrome (LR+ 1.30~35, LR- 0.37~82)',
    'Hawkins-test':'Impingement Syndrome (LR+ 1.20~3.33, LR- 0.21~55)',
    'Drop-arm-test':'Supraspinatus (LR+ 3.3, LR- 0.82)',
    'Empty-can-test':'Supraspinatus pathology',
    'Full-can-test':'tear to the supraspinatus tendon or muscle (LR+ 1.78~4.2, LR- 0.22~63)',
    'Compression-rotation-test':'SLAP (LR+ 3.91, LR- 0.64)',
    'Yergason-test':'SLAP (LR+ 2.5, LR- 0.87)',
    'Apprehension-relocation-test':'glenohumeral istability (LR+ 53, LR- 0.47)',
    // hawkins test + neer test = LR+ 1.6, LR- 0.43
    // Empty can test + Full can test = LR+, LR-
};

function diagnosis(diagnosisObject){
    let diagText = "";
    let i = 1;
    for(let key in diagnosisObject){
      if(document.getElementsByName(key)[0].checked == true){
        diagText += (i + ". ");
        diagText += diagnosisObject[key];
        diagText += "\n";
        i += 1;
      }
    }
    if(diagText != ""){
      document.getElementById('diagnosisText').innerText = diagText;
    }
}

function makeCheckBox(diagnosisObject){
  document.write("Version : ");
  document.write(vers);
  document.write("<p></p>");

    for(let key in diagnosisObject){
        document.write(`<input type=\'checkbox\' name=${key}>${key}</br>`)
    }
    document.write('<p></p>');
    document.write('<button onclick=\"diagnosis(physicalDiagnosis)\">diagnosis!</button>')
    document.write('<p id=\'diagnosisText\'>No Diseases for now</p>')
}


let sampleDiagnosis ={
    'Hoffman':'',
};

makeCheckBox(physicalDiagnosis);

/*
더 필요한 것은
hoffman sign이름으로 객체를 아예 만드는 것이다.
양성일 때 뭐일 때 뭐일 때 나누고 해당하는 값을 불러오면 되고
Youtube나 진단법 설명도 써놓으면 될 것이다. Comment 란을 만들어서
그럼 false positive나 true negative 등도 기록할 수 있을 것이다. 
*/
