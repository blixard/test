window.onload = function() {
    document.getElementById("id_mdm").style.display = "none";
    document.getElementById("id_capacity_constraint").style.display = "none";
    document.getElementById("display_contents").style.display = "none";
  };
function showCapacityConstraint(){
    document.getElementById("id_capacity_constraint").style.display = "block";
}

function onDisplayClick(){
    document.getElementById("display_contents").style.display = "block";
}

function showCapMat(){
    document.getElementById("id_capacity").style.display = "block";
}

function showMDM(){
    document.getElementById("id_mdm").style.display = "block";
}
// display_contents