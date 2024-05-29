// agecalc.js

document.getElementById('btn').addEventListener('click', function() {
  const birthdayInput = document.getElementById('birthday').value;
  const resultElement = document.getElementById('result');

  if (!birthdayInput) {
      resultElement.textContent = 'Please enter your date of birth.';
      return;
  }

  const birthday = new Date(birthdayInput);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  const dayDiff = today.getDate() - birthday.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }

  resultElement.textContent = Yourage; {age} old.;
});