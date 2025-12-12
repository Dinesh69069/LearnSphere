/**
 * D3.js Tree Visualization
 * Renders an interactive, zoomable, collapsible tree diagram
 */

let svg, g, tree, root, zoom;
let currentFocusedNode = null;
const duration = 400;

// Initialize the tree visualization
async function initializeTree() {
    const selectedRoleId = getSelectedRole();
    
    console.log('Selected Role ID:', selectedRoleId);
    
    if (!selectedRoleId) {
        showNoSelectionMessage();
        return;
    }
    
    try {
        // Load roadmap data
        console.log('Fetching data from:', `data/${selectedRoleId}.json`);
        const data = await fetchJSON(`data/${selectedRoleId}.json`);
        
        console.log('Data loaded:', data);
        
        // Update title
        const titleElement = document.getElementById('roadmap-title');
        if (titleElement) {
            titleElement.textContent = data.name + ' Roadmap';
        }
        
        // Render tree
        console.log('Calling renderTree...');
        renderTree(data);
        
    } catch (error) {
        console.error('Error loading roadmap:', error);
        showError('Failed to load roadmap data. Please try again: ' + error.message);
    }
}

// Show "no selection" message
function showNoSelectionMessage() {
    const noSelection = document.getElementById('no-selection');
    if (noSelection) {
        toggleElement(noSelection, true);
    }
}

// Show error message
function showError(message) {
    alert(message); // In production, use a better error UI
}

// Render the D3 tree
function renderTree(data) {
    console.log('renderTree called with data:', data);
    
    const container = document.getElementById('roadmap-tree');
    if (!container) {
        console.error('Container #roadmap-tree not found!');
        return;
    }
    
    console.log('Container found:', container);
    
    const width = container.clientWidth || 928;
    console.log('Container width:', width);
    
    // Clear existing SVG
    container.innerHTML = '';
    
    // Hide loading message, show tree
    const noSelection = document.getElementById('no-selection');
    if (noSelection) toggleElement(noSelection, false);
    
    // Create hierarchy
    root = d3.hierarchy(data);
    
    // Sort the tree
    root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
    
    // Collapse nodes beyond level 3 by default (showing more layers)
    if (root.children) {
        root.children.forEach(d => {
            if (d.children) {
                d.children.forEach(collapse);
            }
        });
    }
    
    // Compute tree layout
    const dx = 25;
    const dy = width / (root.height + 1);
    tree = d3.tree().nodeSize([dx, dy]);
    
    // Apply the layout
    tree(root);
    
    // Compute the extent of the tree (x and y are swapped for horizontal layout)
    let x0 = Infinity;
    let x1 = -x0;
    root.each(d => {
        if (d.x > x1) x1 = d.x;
        if (d.x < x0) x0 = d.x;
    });
    
    // Compute the adjusted height
    const height = x1 - x0 + dx * 2;
    
    // Add left padding to center the tree better
    const leftPadding = width * 0.15;
    
    // Create SVG with better centering
    svg = d3.select(container)
        .append('svg')
        .attr('width', '100%')
        .attr('height', height)
        .attr('viewBox', [-leftPadding, x0 - dx, width + leftPadding, height])
        .style('max-width', '100%')
        .style('height', 'auto')
        .style('font', '12px sans-serif')
        .style('user-select', 'none');
    
    // Create a parent group for both links and nodes (for zoom/pan)
    g = svg.append('g');
    
    // Add zoom behavior to the parent group
    zoom = d3.zoom()
        .scaleExtent([0.1, 3])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });
    
    svg.call(zoom);
    
    // Create group for links inside the parent group
    const linkGroup = g.append('g')
        .attr('fill', 'none')
        .attr('stroke', '#555')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', 1.5);
    
    // Create group for nodes inside the parent group
    const nodeGroup = g.append('g')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 3);
    
    // Draw links
    linkGroup.selectAll('path')
        .data(root.links())
        .join('path')
        .attr('d', d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x));
    
    // Draw nodes
    const node = nodeGroup.selectAll('g')
        .data(root.descendants())
        .join('g')
        .attr('transform', d => `translate(${d.y},${d.x})`)
        .style('cursor', 'pointer')
        .on('click', (event, d) => {
            if (d.children || d._children) {
                toggle(d);
                renderTree(data); // Re-render the tree
            }
            showDetailPanel(d);
            event.stopPropagation();
        })
        .on('mouseover', (event, d) => showTooltip(event, d))
        .on('mouseout', hideTooltip);
    
    // Add circles to nodes
    node.append('circle')
        .attr('r', 5)
        .attr('fill', d => {
            if (d._children) return '#555'; // Collapsed node
            if (d.children) return '#555';  // Parent node
            // Leaf node - color by difficulty
            const level = d.data.meta?.level;
            if (level === 'beginner') return '#22c55e';
            if (level === 'intermediate') return '#00bcd4';
            if (level === 'advanced') return '#a855f7';
            return '#999';
        })
        .attr('stroke', 'white')
        .attr('stroke-width', 2);
    
    // Add text labels
    node.append('text')
        .attr('dy', '0.31em')
        .attr('x', d => d.children || d._children ? -8 : 8)
        .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
        .text(d => d.data.name)
        .attr('stroke', 'white')
        .attr('stroke-width', 3)
        .attr('paint-order', 'stroke')
        .clone(true)
        .lower()
        .attr('stroke', 'none')
        .attr('fill', 'currentColor');
    
    // Store positions for future updates
    root.each(d => {
        d.x0 = d.x;
        d.y0 = d.y;
    });
    
    // Set up keyboard navigation
    setupKeyboardNavigation();
}

// Collapse node and children recursively
function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

// Toggle children on click
function toggle(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else if (d._children) {
        d.children = d._children;
        d._children = null;
    }
}

// Expand/Collapse All
function collapseAll() {
    if (root && root.children) {
        root.children.forEach(collapse);
        // Get the original data and re-render
        const selectedRoleId = getSelectedRole();
        if (selectedRoleId) {
            fetchJSON(`data/${selectedRoleId}.json`).then(data => {
                root.children.forEach(collapse);
                renderTree(data);
            });
        }
    }
}

function expandAll() {
    if (root) {
        root.descendants().forEach(d => {
            if (d._children) {
                d.children = d._children;
                d._children = null;
            }
        });
        // Get the original data and re-render
        const selectedRoleId = getSelectedRole();
        if (selectedRoleId) {
            fetchJSON(`data/${selectedRoleId}.json`).then(data => {
                root.descendants().forEach(d => {
                    if (d._children) {
                        d.children = d._children;
                        d._children = null;
                    }
                });
                renderTree(data);
            });
        }
    }
}

// Tooltip functions
function showTooltip(event, d) {
    const tooltip = document.getElementById('tooltip');
    const content = document.getElementById('tooltip-content');
    
    if (!tooltip || !content) return;
    
    const meta = d.data.meta || {};
    content.innerHTML = `
        <div class="font-semibold mb-1">${sanitizeHTML(d.data.name)}</div>
        ${meta.level ? `<div class="text-xs">Level: ${sanitizeHTML(meta.level)}</div>` : ''}
        ${meta.duration ? `<div class="text-xs">Duration: ${sanitizeHTML(meta.duration)}</div>` : ''}
    `;
    
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY + 10) + 'px';
    toggleElement(tooltip, true);
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        toggleElement(tooltip, false);
    }
}

// Zoom controls
function zoomIn() {
    svg.transition().call(zoom.scaleBy, 1.3);
}

function zoomOut() {
    svg.transition().call(zoom.scaleBy, 0.7);
}

function resetZoom() {
    svg.transition().call(zoom.transform, d3.zoomIdentity);
}

// Export functions
function handleExportSVG() {
    const svgElement = document.querySelector('#roadmap-tree svg');
    if (svgElement) {
        const roleId = getSelectedRole();
        exportSVG(svgElement, `${roleId}-roadmap.svg`);
    }
}

function handleExportPNG() {
    const svgElement = document.querySelector('#roadmap-tree svg');
    if (svgElement) {
        const roleId = getSelectedRole();
        exportPNG(svgElement, `${roleId}-roadmap.png`);
    }
}

// Keyboard navigation
function setupKeyboardNavigation() {
    // Simplified keyboard navigation - just use Tab and Enter
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
        
        // Press 'c' to collapse all
        if (e.key === 'c' || e.key === 'C') {
            collapseAll();
        }
        
        // Press 'e' to expand all
        if (e.key === 'e' || e.key === 'E') {
            expandAll();
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTree();
    
    // Event listeners for controls
    document.getElementById('collapse-all')?.addEventListener('click', collapseAll);
    document.getElementById('expand-all')?.addEventListener('click', expandAll);
    document.getElementById('zoom-in')?.addEventListener('click', zoomIn);
    document.getElementById('zoom-out')?.addEventListener('click', zoomOut);
    document.getElementById('reset-zoom')?.addEventListener('click', resetZoom);
    document.getElementById('export-svg')?.addEventListener('click', handleExportSVG);
    document.getElementById('export-png')?.addEventListener('click', handleExportPNG);
});
