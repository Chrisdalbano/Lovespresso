
function add() {
    var getx = document.getElementById("txt").value;
    if(getx.trim == '')
{
    alert("Text area cannot be empty");
}else{  

    var recipeBox = document.getElementById("recipeBox").innerHTML += " - "+ getx;
    storedContent += " "+getx;
    document.getElementById("txt").value=" ";
}

    
}


function warns() {
    alert("Already on the homepage.");
    alert(storedContent)
  }
