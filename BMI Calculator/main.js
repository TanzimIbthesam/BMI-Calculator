

function getbmivalue(){
    var weight=document.getElementById('Weight').value;
    var height=document.getElementById('Height').value;

    height=height * 12;
    height=height * 0.025;//Now height in meter

    // var newbmivalue= weight/(height * height);
    var newbmivalue= weight/(Math.pow(height,2));
    newbmivalue=Math.round(newbmivalue);

    document.getElementById('bmiValue').value=newbmivalue;
}