function estimatesforvpn () { //gives user nums based off of inputs
  var response = "";
  var user, devices, remote; 
   
  //check to make sure all the fields are answered
  if (document.getElementById("user").value == null || document.getElementById("user").value == "") {
    response += "Need input for user ";
  }
  else {
    user = document.getElementById("user").value;
  }
  
  if (document.getElementById("devices").value == null || document.getElementById("devices").value == "") {
    response += "\nNeed input for devices ";
  }
  else {
    devices = document.getElementById("devices").value;
  }
  
  if (document.getElementById("remote").value == null || document.getElementById("remote").value == "") {
    response += "\nNeed input for remote";
  }
  else {
    remote = document.getElementById("remote").value;
  }
  if (response.length >= 1 || user < 0 || devices < 0 || remote < 0) { //if any are empty, quit function and show error
    if (response.length >= 11) document.getElementById("error").value = "Please fill empty fields."
    else document.getElementById("error").value = "Invalid numbers."
    document.getElementById("error").style.visibility = "visible";
    document.getElementById("error").style.display = "block";
    return;
  }
  
  //AWS 
  if (devices >= 2) {
    document.getElementById("AWS").value = "$" + (12 + (59.91 * user)) + "/month";
  }
  else document.getElementById("AWS").value = "$" + (12 + (44.91 * user)) + "/month";
  
  //Tailscale
  if (user <= 1 && devices <= 100) document.getElementById("Tailscale").value = "FREE";
  else if (devices >= 500) document.getElementById("Tailscale").value = "$" + 20 * user + "/month";
  else document.getElementById("Tailscale").value = "$" + 10 * user + "/month";
  
  //Twingates
   if (user <= 50 && devices <= 5 && remote <= 5) {
    document.getElementById("Twingates").value = "$" + 5 * user + "/month";
   }
    else if (user <=150 && devices <= 5 && remote <= 10) {
      document.getElementById("Twingates").value = "$" + 10 * user + "/month";
    }
     else {
       document.getElementById("Twingates").value = "Contact Twingates";
     }
  
  //Cloudflare
    if (user >= 50) document.getElementById("Cloudflare").value = "$" + 7 * user + "/month";
    else document.getElementById("Cloudflare").value = "FREE";
  
  //clear error (in case it occurred) and show results
    document.getElementById("results").style.visibility = "visible";
   document.getElementById("results").style.display = "block";
    document.getElementById("error").style.visibility = "hidden";
  document.getElementById("error").style.display = "none";
}

function clearvaluesforvpn() { //clears the fields of text
  //sets all the input fields to blank
   document.getElementById("user").value = '';  
   document.getElementById("devices").value = '';
   document.getElementById("remote").value='';
  
  //hide error and answers if visible right now
   document.getElementById("results").style.visibility = "hidden";
  document.getElementById("results").style.display = "none";
   document.getElementById("error").style.visibility = "hidden";
  document.getElementById("error").style.display = "none";
}
