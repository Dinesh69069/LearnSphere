/**
 * Utility functions for the Roadmap Visualizer
 */

// Debounce function to limit rapid function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Fetch JSON data
async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching JSON:', error);
        throw error;
    }
}

// Export SVG to file
function exportSVG(svgElement, filename = 'roadmap.svg') {
    // Clone the SVG
    const clone = svgElement.cloneNode(true);
    
    // Add XML namespace
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    
    // Serialize SVG
    const svgData = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    
    // Download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Export SVG to PNG
function exportPNG(svgElement, filename = 'roadmap.png') {
    // Get SVG bounding box
    const bbox = svgElement.getBBox();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size with some padding
    const padding = 40;
    canvas.width = bbox.width + padding * 2;
    canvas.height = bbox.height + padding * 2;
    
    // Fill white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Convert SVG to data URL
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, padding, padding);
        URL.revokeObjectURL(url);
        
        // Download PNG
        canvas.toBlob(function(blob) {
            const pngUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = pngUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(pngUrl);
        });
    };
    img.src = url;
}

// Get difficulty color
function getDifficultyColor(level) {
    const colors = {
        'beginner': 'difficulty-beginner',
        'intermediate': 'difficulty-intermediate',
        'advanced': 'difficulty-advanced',
        'expert': 'difficulty-expert'
    };
    return colors[level?.toLowerCase()] || 'difficulty-intermediate';
}

// Format duration
function formatDuration(duration) {
    if (!duration) return 'N/A';
    return duration;
}

// Local storage helpers
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    }
};

// Show/hide element
function toggleElement(element, show) {
    if (show) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// Sanitize HTML to prevent XSS
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
