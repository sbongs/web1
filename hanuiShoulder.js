'use strict'

let vers = 0.002;

// 예시.
let hoffmanSign ={
    name:'Hoffman Sign',
    diagnosis:['hypertonia', 'corticospinal tract'],
};


let physicalDiagnosis ={
    'Hoffman':'hypertonia or corticospinal tract',
    '_Hoffman':hoffmanSign,
    'External-rotation-lag-test':'',
    'Internal-rotation-lag-test':'',
    'Pain-arc-test':'',
    'Cross-body-adduction-test':'',
    'Neer\'s-test':'',
    'Hawkins-test':'',
    'Drop-arm-test':'',
    'Empty-can-test':'',
    'Full-can-test':'',
    'Compression-rotation-test':'',
    'Yergason-test':'',
    'Apprehension-relocation-test':'',
};

function diagnosis(diagnosisObject){
    let diagText = "";
    for(let key in diagnosisObject){
        if(document.getElementsByName(key)[0].checked == true){
         diagText += diagnosisObject[key];
         diagText += "\n";
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
