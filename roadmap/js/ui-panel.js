/**
 * Node detail panel/modal functionality
 */

const detailPanel = document.getElementById('detail-panel');
const panelContent = document.getElementById('panel-content');
const closeButton = document.getElementById('close-panel');

// Show detail panel with node data
function showDetailPanel(nodeData) {
    if (!detailPanel || !panelContent) return;
    
    const meta = nodeData.data.meta || {};
    
    panelContent.innerHTML = `
        <div class="space-y-6">
            <!-- Node Name -->
            <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    ${sanitizeHTML(nodeData.data.name)}
                </h3>
                ${meta.description ? `
                    <p class="text-gray-600 dark:text-gray-400">
                        ${sanitizeHTML(meta.description)}
                    </p>
                ` : ''}
            </div>
            
            <!-- Metadata -->
            <div class="grid grid-cols-2 gap-4">
                ${meta.duration ? `
                    <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                        <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Duration</div>
                        <div class="text-lg font-semibold text-gray-900 dark:text-white">
                            ${sanitizeHTML(formatDuration(meta.duration))}
                        </div>
                    </div>
                ` : ''}
                
                ${meta.level ? `
                    <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
                        <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Difficulty</div>
                        <div class="text-lg font-semibold capitalize ${getDifficultyColor(meta.level)}">
                            ${sanitizeHTML(meta.level)}
                        </div>
                    </div>
                ` : ''}
            </div>
            
            <!-- Topics/Lessons -->
            ${meta.topics && meta.topics.length > 0 ? `
                <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Topics to Learn</h4>
                    <ul class="space-y-2">
                        ${meta.topics.map(topic => `
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">${sanitizeHTML(topic)}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <!-- Resources -->
            ${meta.resources && meta.resources.length > 0 ? `
                <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Learning Resources</h4>
                    <div class="space-y-2">
                        ${meta.resources.map(resource => `
                            <a href="${resource.url || '#'}" target="_blank" rel="noopener noreferrer" 
                               class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                    </svg>
                                    <span class="text-sm text-gray-700 dark:text-gray-300">${sanitizeHTML(resource.title || 'Resource')}</span>
                                </div>
                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                            </a>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- Child Count -->
            ${nodeData.children || nodeData._children ? `
                <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                        Contains <strong class="text-gray-900 dark:text-white">
                            ${(nodeData.children || nodeData._children)?.length || 0}
                        </strong> sub-topics
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    toggleElement(detailPanel, true);
}

// Hide detail panel
function hideDetailPanel() {
    if (detailPanel) {
        toggleElement(detailPanel, false);
    }
}

// Initialize panel controls
if (closeButton) {
    closeButton.addEventListener('click', hideDetailPanel);
}

// Close panel on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailPanel && !detailPanel.classList.contains('hidden')) {
        hideDetailPanel();
    }
});
