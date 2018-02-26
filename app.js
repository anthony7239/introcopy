/* question 1 */
const q1Btn = document.getElementById('Que1Btn');
q1Btn.onclick = function() {
	const answer = document.getElementById('enterinfo').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('question2').style.display = "block";
	} else {
		message.textContent = "Please enter Info";	
	}
}

/* question 2 */
const q2Btn = document.getElementById('Que2Btn');
q2Btn.onclick = function() {
	const answer = document.getElementById('enterinfo').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('question3').style.display = "block";
	} else {
		message.textContent = "Please enter Info";	
	}
}

/* question 3 */
const q3Btn = document.getElementById('Que3Btn');
q3Btn.onclick = function() {
	const answer = document.getElementById('enterinfo').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('question4').style.display = "block";
	} else {
		message.textContent = "Please enter Info";	
	}
}

/* question 4 */
const q4Btn = document.getElementById('Que4Btn');
q4Btn.onclick = function() {
	const answer = document.getElementById('enterinfo').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
		document.getElementById('question5').style.display = "block";
	} else {
		message.textContent = "Please enter Info";	
	}
}

/* question 5 */
const q5Btn = document.getElementById('Que5Btn');
q5Btn.onclick = function() {
	const answer = document.getElementById('enterinfo').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	if (answer) {
        document.getElementById('question1').style.display = "none";
        document.getElementById('question2').style.display = "none";
        document.getElementById('question3').style.display = "none";
        document.getElementById('question4').style.display = "none";
        document.getElementById('question5').style.display = "none";
	} else {
		message.textContent = "Please enter Info";	
	}
}