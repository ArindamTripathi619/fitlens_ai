document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  const fullNameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const statusMessage = document.createElement('p');
  statusMessage.className = 'text-center text-sm mt-4';

  // Insert the status message element after the form's parent container for better layout
  if (signupForm) {
    signupForm.parentNode.insertBefore(statusMessage, signupForm.nextSibling);
  }

  if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const fullName = fullNameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      if (!fullName || !email || !password) {
        statusMessage.textContent = 'Please fill out all fields.';
        statusMessage.className = 'text-center text-sm mt-4 text-red-500';
        return;
      }

      if (password !== confirmPassword) {
        statusMessage.textContent = 'Passwords do not match.';
        statusMessage.className = 'text-center text-sm mt-4 text-red-500';
        return;
      }

      const userData = {
        fullName,
        email,
        password,
      };

      try {
        // NOTE: This is a placeholder for the backend integration.
        // In a real application, the API key should never be exposed on the client-side.
        console.log('Simulating API call to /api/signup with data:', userData);
        console.log(`Using API Key: Bearer ${API_CONFIG.OPENROUTER_API_KEY}`);

        // Mock a successful API response
        await new Promise(resolve => setTimeout(resolve, 1000));

        statusMessage.textContent = 'Signup successful! Redirecting to login...';
        statusMessage.className = 'text-center text-sm mt-4 text-green-500';

        setTimeout(() => {
          window.location.href = 'login.html';
        }, 2000);

      } catch (error) {
        console.error('Signup failed:', error);
        statusMessage.textContent = 'Signup failed. Please try again later.';
        statusMessage.className = 'text-center text-sm mt-4 text-red-500';
      }
    });
  }
});
