// Function to store user preference in localStorage
function saveUserPreference() {
    const box = document.getElementById('animatedBox');
    const preference = { isAnimated: box.classList.contains('animate') };
    localStorage.setItem('userPreference', JSON.stringify(preference));
    alert('Preference saved!');
}

// Function to load user preference from localStorage
function loadUserPreference() {
    const preference = JSON.parse(localStorage.getItem('userPreference'));
    if (preference && preference.isAnimated) {
        document.getElementById('animatedBox').classList.add('animate');
        alert('Preference loaded!');
    } else {
        alert('No preference found or animation not set.');
    }
}

// Function to trigger animation
document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    box.classList.toggle('animate'); // Toggle the animation class
});

// Event listeners for saving and loading preferences
document.getElementById('savePreference').addEventListener('click', saveUserPreference);
document.getElementById('loadPreference').addEventListener('click', loadUserPreference);