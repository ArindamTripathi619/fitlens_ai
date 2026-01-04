document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const statusMessage = document.createElement('p');
  statusMessage.className = 'text-center text-sm mt-4';

  if (loginForm) {
    loginForm.parentNode.insertBefore(statusMessage, loginForm.nextSibling);
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value;

      if (!email || !password) {
        statusMessage.textContent = 'Please enter both email and password.';
        statusMessage.className = 'text-center text-sm mt-4 text-red-500';
        return;
      }

      const credentials = {
        email,
        password,
      };

      try {
        // NOTE: This is a placeholder for the backend integration.
        // The API key is not typically used for a login endpoint but is included for consistency.
        console.log('Simulating API call to /api/login with credentials:', credentials);
        console.log(`Using API Key: Bearer ${API_CONFIG.OPENROUTER_API_KEY}`);

        // Mock a successful API response
        await new Promise(resolve => setTimeout(resolve, 1000));

        statusMessage.textContent = 'Login successful! Redirecting to dashboard...';
        statusMessage.className = 'text-center text-sm mt-4 text-green-500';

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 2000);

      } catch (error) {
        console.error('Login failed:', error);
        statusMessage.textContent = 'Login failed. Please check your credentials and try again.';
        statusMessage.className = 'text-center text-sm mt-4 text-red-500';
      }
    });
  }
});
