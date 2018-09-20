var countdown=10;
var display="";
while (countdown <=10 && countdown !=0)
{
  display += "<br>" + JSON.stringify(countdown);
  document.getElementById("secdisp").innerHTML = display;
  countdown--
}
if (countdown==0)
 document.getElementById("fin").innerHTML = countdown + "<br> Bonne Annee!!!!";
