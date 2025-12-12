/* ============================================
   LearnSphere - Login Page JavaScript
   Form Validation, Theme Toggle, Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // Theme Toggle Functionality
    // ============================================
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark');
        themeSwitch.checked = true;
    }
    
    // Toggle theme on switch change
    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark');
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });
    
    // ============================================
    // Password Toggle Functionality
    // ============================================
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const eyeOpen = togglePassword.querySelector('.eye-open');
    const eyeClosed = togglePassword.querySelector('.eye-closed');
    
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icons
        eyeOpen.style.display = type === 'password' ? 'block' : 'none';
        eyeClosed.style.display = type === 'password' ? 'none' : 'block';
    });
    
    // ============================================
    // Form Validation
    // ============================================
    const form = document.getElementById('login-form');
    const email = document.getElementById('email');
    const formCard = document.querySelector('.form-card');
    
    // Validation functions
    const validators = {
        email: (value) => {
            if (!value.trim()) return 'Email is required';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email address';
            return '';
        },
        password: (value) => {
            if (!value) return 'Password is required';
            return '';
        }
    };
    
    // Show error for an input
    function showError(input, message) {
        const group = input.closest('.input-group');
        const errorSpan = group.querySelector('.error-message');
        
        group.classList.add('error');
        errorSpan.textContent = message;
    }
    
    // Clear error for an input
    function clearError(input) {
        const group = input.closest('.input-group');
        const errorSpan = group.querySelector('.error-message');
        
        group.classList.remove('error');
        errorSpan.textContent = '';
    }
    
    // Validate single field
    function validateField(input, validatorKey) {
        const value = input.value;
        const error = validators[validatorKey](value);
        
        if (error) {
            showError(input, error);
            return false;
        } else {
            clearError(input);
            return true;
        }
    }
    
    // Real-time validation on blur
    email.addEventListener('blur', () => validateField(email, 'email'));
    passwordInput.addEventListener('blur', () => validateField(passwordInput, 'password'));
    
    // Clear error on input
    [email, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            const group = input.closest('.input-group');
            if (group.classList.contains('error')) {
                clearError(input);
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const isEmailValid = validateField(email, 'email');
        const isPasswordValid = validateField(passwordInput, 'password');
        
        if (isEmailValid && isPasswordValid) {
            // Show loading state
            const submitBtn = form.querySelector('.btn-primary');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Get remember me value
            const rememberMe = document.getElementById('remember').checked;
            
            // Success - you would typically redirect or handle auth here
            console.log('Login submitted successfully!', {
                email: email.value,
                password: passwordInput.value,
                rememberMe: rememberMe
            });
            
            // Simulate success redirect
            // In production, this would be handled by your auth system
            showSuccessAndRedirect();
        } else {
            // Shake the form card on error
            formCard.classList.add('shake');
            setTimeout(() => {
                formCard.classList.remove('shake');
            }, 500);
        }
    });
    
    // Show success and redirect
    function showSuccessAndRedirect() {
        const formCard = document.querySelector('.form-card');
        formCard.innerHTML = `
            <div style="text-align: center;">
                <div class="success-icon" style="width: 80px; height: 80px; background: hsl(145, 70%, 42%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; animation: scaleIn 0.5s ease;">
                    <svg width="40" height="40" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>
                <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text);">Welcome Back!</h2>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Login successful. Redirecting to your dashboard...</p>
                <div class="loading-dots" style="display: flex; justify-content: center; gap: 0.5rem;">
                    <span style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; animation-delay: -0.32s;"></span>
                    <span style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; animation-delay: -0.16s;"></span>
                    <span style="width: 8px; height: 8px; background: var(--primary); border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both;"></span>
                </div>
            </div>
            <style>
                @keyframes scaleIn {
                    from { transform: scale(0); }
                    to { transform: scale(1); }
                }
                @keyframes bounce {
                    0%, 80%, 100% { transform: scale(0); }
                    40% { transform: scale(1); }
                }
            </style>
        `;
        
        // Redirect after delay (in production, redirect to dashboard)
        setTimeout(() => {
            window.location.href = '../dashboard/index.html';
        }, 2000);
    }
    
    // ============================================
    // Social Login Buttons (Placeholder)
    // ============================================
    const socialButtons = document.querySelectorAll('.btn-social');
    socialButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const provider = btn.classList.contains('btn-google') ? 'Google' : 'Apple';
            console.log(`${provider} login clicked - implement OAuth flow`);
            // In production, implement actual OAuth flow
        });
    });
    
    // ============================================
    // Forgot Password Link
    // ============================================
    const forgotLink = document.querySelector('.forgot-link');
    forgotLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Show forgot password modal or redirect
        // For now, just log
        console.log('Forgot password clicked - implement password reset flow');
        
        // You could show a modal or redirect to a reset page
        alert('Password reset functionality would be implemented here.');
    });
    
    // ============================================
    // Remember Me - Save email to localStorage
    // ============================================
    const rememberCheckbox = document.getElementById('remember');
    
    // Check if email was saved
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        email.value = savedEmail;
        rememberCheckbox.checked = true;
        // Trigger the floating label
        email.dispatchEvent(new Event('input'));
    }
    
    // Save email on form submit if remember me is checked
    form.addEventListener('submit', () => {
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedEmail', email.value);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
    });
});
