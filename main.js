

function Validate(){
    var nameChk = document.getElementById("name").value;
    var Height1Chk = parseFloat(document.getElementById("height").value);
    var Height2Chk = parseFloat(document.getElementById("height2").value);
    var Weight1Chk = parseFloat(document.getElementById("weight").value);
    var Weight2Chk = parseFloat(document.getElementById("weight2").value);

    if (!isNaN(nameChk)){
        alert("Name is required and can only be alphabetical");
        document.getElementById("name").value = ' ';

    } else if (isNaN(Height1Chk)){
        alert("Height is required and can only be numerical");
        document.getElementById("height").value = ' ';

    } else if (Height1Chk <= 0){
        alert("Height must be a positive number");
        document.getElementById("height").value = ' ';

    } else if (Height1Chk > 2.72){
        alert("Height cannot be bigger than 2.72 metres which is the tallest person who ever lived on Earth");  
        document.getElementById("height").value = ' ';  

    } else if (isNaN(Height2Chk)){
        alert("Height is required and can only be numerical");
        document.getElementById("height2").value = ' ';

    } else if (Height2Chk <= Height1Chk){
        alert("Height (end) must be bigger than Height (start)");
        document.getElementById("height2").value = ' ';

    } else if (Height2Chk >= 2.73){
        alert("Height cannot be bigger than 2.72 metres which is the tallest person who ever lived on Earth");   
        document.getElementById("height2").value = ' '; 

    } else if (isNaN(Weight1Chk)){
        alert("Weight is required and can only be numerical");
        document.getElementById("weight").value = ' ';

    } else if (Weight1Chk <= 0){
        alert("Height must be a positive number");
        document.getElementById("weight").value = ' ';

    } else if (isNaN(Weight2Chk)){
        alert("Weight is required and can only be numerical");
        document.getElementById("weight2").value = ' ';

    } else if (Weight2Chk <= Weight1Chk){
        alert("Weight (end) must be bigger than Weight (start)");
        document.getElementById("weight2").value = ' ';

    } else if ( nameChk.lenght != 0 && isNaN(nameChk) &&
        Height1Chk > 0 && Height1Chk <= 2.71 && 
        Height2Chk > Height1Chk && Height2Chk <=2.72 && 
        Weight1Chk > 0  && Weight2Chk > Weight1Chk)
        {
        showTable()
        AddRow()
        reset()                
    }
}


function reset(){
    document.getElementById("name").value = '';
    document.getElementById("height").value = '';
    document.getElementById("height2").value = '';
    document.getElementById("weight").value = '';
    document.getElementById("weight2").value = '';
}

var container = document.getElementById("container"); 

function showTable(){
    container.className = "open";
}

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var n = 1;
var x = 0;

function AddRow(){

    var AddRown = document.getElementById('table');
    var NewRow = AddRown.insertRow(n);

    var fname = document.getElementById("name").value;
    var fheight1 = parseFloat(document.getElementById("height").value);
    var fheight2 = parseFloat(document.getElementById("height2").value);
    var fweight1 = parseFloat(document.getElementById("weight").value);
    var fweight2 = parseFloat(document.getElementById("weight2").value);
    var avgHeight = ((fheight1+fheight2)/2);
    var avgWeight = ((fweight1+fweight2)/2);
    var bmi = (avgWeight/(avgHeight*avgHeight)).toFixed(2);
    var results; 

    if(bmi < 18.5){
        results = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        results = "Normal";
    } else if (bmi >= 25.0 && bmi <= 29.9){
        results = "Overweight";
    } else if (bmi >= 30.0 && bmi <= 34.9){
        results = "Obese Class 1"; 
    } else if (bmi >= 35.0 && bmi <= 39.9){
        results = "Obese Class 2";
    } else if (bmi >= 40.0){
        results = "Obese Class 3"
    }

    list1[x] = fname;
    list2[x] = fheight1 + " - " + fheight2;
    list3[x] = fweight1 + " - " + fweight2;
    list4[x] = bmi;
    list5[x] = results;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];

    n++;
    x++;

}
