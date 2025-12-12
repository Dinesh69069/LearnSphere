/* ============================================
   LearnSphere - Signup Page JavaScript
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
    // Password Strength Indicator
    // ============================================
    const passwordStrength = document.querySelector('.password-strength');
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        
        if (password.length > 0) {
            passwordStrength.classList.add('visible');
            const strength = calculatePasswordStrength(password);
            updateStrengthIndicator(strength);
        } else {
            passwordStrength.classList.remove('visible');
        }
    });
    
    function calculatePasswordStrength(password) {
        let score = 0;
        
        // Length check
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        
        // Character variety checks
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^a-zA-Z0-9]/.test(password)) score++;
        
        // Return strength level
        if (score <= 2) return 'weak';
        if (score <= 3) return 'fair';
        if (score <= 5) return 'good';
        return 'strong';
    }
    
    function updateStrengthIndicator(strength) {
        // Remove all classes
        strengthFill.classList.remove('weak', 'fair', 'good', 'strong');
        
        // Add current strength class
        strengthFill.classList.add(strength);
        
        // Update text
        const strengthLabels = {
            weak: 'Weak password',
            fair: 'Fair password',
            good: 'Good password',
            strong: 'Strong password'
        };
        
        strengthText.textContent = strengthLabels[strength];
    }
    
    // ============================================
    // Form Validation
    // ============================================
    const form = document.getElementById('signup-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const terms = document.getElementById('terms');
    
    // Validation functions
    const validators = {
        firstName: (value) => {
            if (!value.trim()) return 'First name is required';
            if (value.trim().length < 2) return 'First name must be at least 2 characters';
            return '';
        },
        lastName: (value) => {
            if (!value.trim()) return 'Last name is required';
            if (value.trim().length < 2) return 'Last name must be at least 2 characters';
            return '';
        },
        email: (value) => {
            if (!value.trim()) return 'Email is required';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email address';
            return '';
        },
        password: (value) => {
            if (!value) return 'Password is required';
            if (value.length < 8) return 'Password must be at least 8 characters';
            return '';
        },
        terms: (checked) => {
            if (!checked) return 'You must agree to the terms';
            return '';
        }
    };
    
    // Show error for an input
    function showError(input, message) {
        const group = input.closest('.input-group') || input.closest('.checkbox-group');
        const errorSpan = group.querySelector('.error-message');
        
        group.classList.add('error');
        errorSpan.textContent = message;
    }
    
    // Clear error for an input
    function clearError(input) {
        const group = input.closest('.input-group') || input.closest('.checkbox-group');
        const errorSpan = group.querySelector('.error-message');
        
        group.classList.remove('error');
        errorSpan.textContent = '';
    }
    
    // Validate single field
    function validateField(input, validatorKey) {
        const value = input.type === 'checkbox' ? input.checked : input.value;
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
    firstName.addEventListener('blur', () => validateField(firstName, 'firstName'));
    lastName.addEventListener('blur', () => validateField(lastName, 'lastName'));
    email.addEventListener('blur', () => validateField(email, 'email'));
    passwordInput.addEventListener('blur', () => validateField(passwordInput, 'password'));
    terms.addEventListener('change', () => validateField(terms, 'terms'));
    
    // Clear error on input
    [firstName, lastName, email, passwordInput].forEach(input => {
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
        const isFirstNameValid = validateField(firstName, 'firstName');
        const isLastNameValid = validateField(lastName, 'lastName');
        const isEmailValid = validateField(email, 'email');
        const isPasswordValid = validateField(passwordInput, 'password');
        const isTermsValid = validateField(terms, 'terms');
        
        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isTermsValid) {
            // Show loading state
            const submitBtn = form.querySelector('.btn-primary');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success - you would typically redirect or show success message here
            console.log('Form submitted successfully!', {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                password: passwordInput.value
            });
            
            // Show success state
            showSuccessMessage();
        }
    });
    
    // Show success message
    function showSuccessMessage() {
        const formCard = document.querySelector('.form-card');
        formCard.innerHTML = `
            <div class="success-icon">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
            </div>
            <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text);">Account Created!</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">Welcome to LearnSphere. Your learning journey begins now.</p>
            <a href="../login/index.html" class="btn-primary" style="text-decoration: none;">
                <span>Continue to Login</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
            </a>
        `;
        formCard.classList.add('success');
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
});
