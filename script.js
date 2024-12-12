function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please select your date of birth.');
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDate() - dobDate.getDate();

    // Adjust for months and days not yet reached in the current year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    const result = document.getElementById('result');
    result.textContent = `Your age is ${age} years.`;
}