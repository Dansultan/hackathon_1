var sphere_1;
var newshphere_1;
var cyl_1;
var totalcyl_1;
var newcyl_1;
var total_power1;

document.getElementById("glassCalculate").onclick = function(){
    sphere_1 = parseFloat(document.getElementById('sph_1').value);
    newsphere_1 = sphere_1/(1-(0.012*sphere_1));
    cyl_1 = parseFloat(document.getElementById('cyl_1').value);
    total_power1 = sphere_1+cyl_1;
    newcyl_1 =  (total_power1/(1-(0.012*total_power1)))- sphere_1;
    document.getElementById('result').innerHTML = "Your new prescription is :" +newsphere_1.toFixed(2) + " sph and "+newcyl_1.toFixed(2) + " cylinder" ;};



var sphere_2;
var newshphere_2;
var cyl_2;
var totalcyl_2;
var newcyl_2;
var total_power2;

document.getElementById("lensCalculate").onclick = function(){
    sphere_2 = parseFloat(document.getElementById('sph_2').value);
    newsphere_2 = sphere_2/(1+(0.012*sphere_2));
    cyl_2 = parseFloat(document.getElementById('cyl_2').value);
    total_power2 = sphere_2+cyl_2;
    newcyl_2 =  (total_power2/(1+(0.012*total_power2)))- sphere_2;
    document.getElementById('result').innerHTML = "Your new prescription is :" +newsphere_2.toFixed(2) + " sph and "+newcyl_2.toFixed(2) + " cylinder" };



    




    


