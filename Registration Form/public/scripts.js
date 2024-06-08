document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('/api/user/register', { username, email, password });

        // Clear the form fields
        document.getElementById('registrationForm').reset();

        // Hide the form and show the success message
        document.getElementById('registrationForm').classList.add('form-hidden');
        document.getElementById('successMessage').style.display = 'flex';
    } catch (error) {
        alert(error.response.data.error);
    }
});
