
var today = new Date();
var hours_of_today = today.getHours();
var minutes_of_today = today.getMinutes();

var midnight_to_sixAM = "between midnight and 6am the city is wild yet peaceful";

var media = document.getElementById('see');

var update_time = document.getElementById('time');
update_time.textContent = hours_of_today + ':' + minutes_of_today;

if (hours_of_today === 17) {
	var text_now = document.getElementById('text');
	text_now.textContent = midnight_to_sixAM;
	media.style.backgroundColor = 'red';
}

