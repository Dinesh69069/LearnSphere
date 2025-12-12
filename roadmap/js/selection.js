/**
 * Role selection and storage management
 */

const SELECTED_ROLE_KEY = 'selected_role';

// Save selected role to localStorage
function saveSelectedRole(roleId) {
    storage.set(SELECTED_ROLE_KEY, roleId);
}

// Get selected role from localStorage
function getSelectedRole() {
    return storage.get(SELECTED_ROLE_KEY);
}

// Clear selected role
function clearSelectedRole() {
    storage.remove(SELECTED_ROLE_KEY);
}

// Navigate to roadmap page with selected role
function navigateToRoadmap(roleId) {
    saveSelectedRole(roleId);
    window.location.href = 'roadmap.html';
}

// Handle role card click
function handleRoleSelection(event) {
    const card = event.currentTarget;
    const roleId = card.dataset.roleId;
    
    if (roleId) {
        navigateToRoadmap(roleId);
    }
}

// Make role cards keyboard accessible
function makeRoleCardAccessible(card) {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    
    card.addEventListener('click', handleRoleSelection);
    
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleRoleSelection(e);
        }
    });
}
