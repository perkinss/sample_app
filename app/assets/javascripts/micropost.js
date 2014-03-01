function textAreaLength(textarea, labelid, maxlength) {
	
	var label = document.getElementById(labelid);
	var length = 0;
	length = textarea.value.length;  
	var remainder = ( maxlength - length).toString();
	label.innerHTML = "" + remainder + " characters remaining";
}
  function alert_me_test(object)
  {
      alert ("this is a test" + s.length)
  }