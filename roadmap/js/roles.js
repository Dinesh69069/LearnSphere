/**
 * Roles data and UI management
 */

// Role data - in a real app, this could be fetched from an API
const roles = [
    {
        id: 'frontend',
        name: 'Frontend Developer',
        subtitle: 'Build beautiful UIs',
        category: 'development',
        badge: 'Popular',
        icon: '💻',
        description: 'Master HTML, CSS, JavaScript, and modern frameworks'
    },
    {
        id: 'backend',
        name: 'Backend Developer',
        subtitle: 'Create server applications',
        category: 'development',
        badge: 'High Demand',
        icon: '⚙️',
        description: 'Learn server-side programming, databases, and APIs'
    },
    {
        id: 'fullstack',
        name: 'Full Stack Developer',
        subtitle: 'Frontend + Backend',
        category: 'development',
        badge: 'Trending',
        icon: '🚀',
        description: 'Complete web development from UI to database'
    },
    {
        id: 'devops',
        name: 'DevOps Engineer',
        subtitle: 'Automate infrastructure',
        category: 'devops',
        icon: '🔧',
        description: 'CI/CD, Docker, Kubernetes, Cloud platforms'
    },
    {
        id: 'cloud',
        name: 'Cloud Engineer',
        subtitle: 'Build on cloud platforms',
        category: 'devops',
        icon: '☁️',
        description: 'AWS, Azure, GCP, cloud architecture'
    },
    {
        id: 'ai-ml',
        name: 'AI / ML Engineer',
        subtitle: 'Build intelligent systems',
        category: 'data',
        badge: 'Hot',
        icon: '🤖',
        description: 'Deep learning, Neural networks, TensorFlow, PyTorch'
    },
    {
        id: 'data-science',
        name: 'Data Scientist',
        subtitle: 'Extract insights from data',
        category: 'data',
        icon: '📊',
        description: 'Python, ML, Statistics, Data visualization'
    },
    {
        id: 'data-engineer',
        name: 'Data Engineer',
        subtitle: 'Build data pipelines',
        category: 'data',
        icon: '🔄',
        description: 'ETL, data warehousing, big data tools'
    },
    {
        id: 'mobile',
        name: 'Mobile App Developer',
        subtitle: 'iOS & Android apps',
        category: 'development',
        icon: '📱',
        description: 'iOS, Android, React Native, Flutter'
    },
    {
        id: 'blockchain',
        name: 'Blockchain Developer',
        subtitle: 'Build decentralized apps',
        category: 'development',
        icon: '⛓️',
        description: 'Smart contracts, Web3, Solidity, Ethereum'
    },
    {
        id: 'cybersecurity',
        name: 'Cybersecurity Engineer',
        subtitle: 'Protect systems & data',
        category: 'security',
        icon: '🛡️',
        description: 'Network security, encryption, threat detection'
    },
    {
        id: 'ethical-hacker',
        name: 'Ethical Hacker / Pentester',
        subtitle: 'Find security vulnerabilities',
        category: 'security',
        icon: '🔐',
        description: 'Penetration testing, vulnerability assessment'
    },
    {
        id: 'ui-ux',
        name: 'Product Designer (UI/UX)',
        subtitle: 'Design user experiences',
        category: 'design',
        icon: '🎨',
        description: 'Figma, User research, Prototyping, Design systems'
    },
    {
        id: 'software-architect',
        name: 'Software Architect',
        subtitle: 'Design system architecture',
        category: 'architecture',
        icon: '🏛️',
        description: 'System design, architecture patterns, scalability'
    },
    {
        id: 'qa-engineer',
        name: 'QA Engineer / Automation Tester',
        subtitle: 'Ensure software quality',
        category: 'testing',
        icon: '✅',
        description: 'Test automation, Selenium, Cypress, quality assurance'
    },
    {
        id: 'game-developer',
        name: 'Game Developer',
        subtitle: 'Create interactive games',
        category: 'development',
        icon: '🎮',
        description: 'Unity, Unreal Engine, game design, graphics'
    },
    {
        id: 'system-design',
        name: 'System Design Engineer',
        subtitle: 'Design scalable systems',
        category: 'architecture',
        icon: '📐',
        description: 'Distributed systems, scalability, performance'
    },
    {
        id: 'database-admin',
        name: 'Database Administrator',
        subtitle: 'Manage databases',
        category: 'data',
        icon: '🗄️',
        description: 'SQL, NoSQL, database optimization, backup'
    },
    {
        id: 'sre',
        name: 'Site Reliability Engineer',
        subtitle: 'Ensure system reliability',
        category: 'devops',
        icon: '⚡',
        description: 'Monitoring, incident response, SLOs, automation'
    },
    {
        id: 'api-developer',
        name: 'API Developer',
        subtitle: 'Build scalable APIs',
        category: 'development',
        icon: '🔌',
        description: 'REST, GraphQL, API design, microservices'
    },
    {
        id: 'prompt-engineer',
        name: 'Prompt Engineer',
        subtitle: 'Craft AI prompts',
        category: 'data',
        badge: 'New',
        icon: '💬',
        description: 'LLM optimization, prompt design, AI interactions'
    },
    {
        id: 'ai-app-developer',
        name: 'AI Application Developer',
        subtitle: 'Build LLM apps',
        category: 'data',
        badge: 'Trending',
        icon: '🧠',
        description: 'LLM integrations, AI SDKs, ChatGPT APIs'
    },
    {
        id: 'big-data',
        name: 'Big Data Engineer',
        subtitle: 'Process large datasets',
        category: 'data',
        icon: '📈',
        description: 'Hadoop, Spark, data lakes, distributed computing'
    },
    {
        id: 'cloud-security',
        name: 'Cloud Security Engineer',
        subtitle: 'Secure cloud infrastructure',
        category: 'security',
        icon: '🔒',
        description: 'Cloud security, IAM, compliance, vulnerability scanning'
    },
    {
        id: 'mlops',
        name: 'MLOps Engineer',
        subtitle: 'Deploy ML models',
        category: 'data',
        icon: '🔁',
        description: 'ML pipelines, model deployment, monitoring'
    },
    {
        id: 'ai-automation',
        name: 'AI Automation Engineer',
        subtitle: 'Automate with AI',
        category: 'data',
        icon: '⚙️🤖',
        description: 'AI-powered automation, workflow optimization'
    },
    {
        id: 'genai-agent',
        name: 'GenAI Agent Developer',
        subtitle: 'Build AI agents',
        category: 'data',
        badge: 'New',
        icon: '🤖✨',
        description: 'LangChain, agent frameworks, autonomous AI'
    },
    {
        id: 'llm-fine-tuning',
        name: 'LLM Fine-Tuning Engineer',
        subtitle: 'Customize LLMs',
        category: 'data',
        icon: '🔬',
        description: 'Model fine-tuning, training, optimization'
    },
    {
        id: 'cyber-threat',
        name: 'Cyber Threat Analyst',
        subtitle: 'Detect & prevent threats',
        category: 'security',
        icon: '🚨',
        description: 'Threat intelligence, incident response, SIEM'
    },
    {
        id: 'edge-computing',
        name: 'Edge Computing Engineer',
        subtitle: 'Build edge solutions',
        category: 'devops',
        icon: '📡',
        description: 'IoT, edge devices, distributed computing'
    },
    {
        id: 'hardware-ai',
        name: 'Hardware + AI Integration',
        subtitle: 'Combine hardware & AI',
        category: 'architecture',
        icon: '🔧🤖',
        description: 'Embedded AI, robotics, hardware optimization'
    },
    {
        id: 'tech-evangelist',
        name: 'Tech Evangelist / DevRel',
        subtitle: 'Advocate for technology',
        category: 'other',
        icon: '📢',
        description: 'Developer relations, content creation, community'
    },
    {
        id: 'fintech',
        name: 'FinTech Software Engineer',
        subtitle: 'Build financial software',
        category: 'development',
        icon: '💰',
        description: 'Payment systems, trading platforms, blockchain'
    },
    {
        id: 'bioinformatics',
        name: 'Bioinformatics Engineer',
        subtitle: 'Software for biology',
        category: 'development',
        icon: '🧬',
        description: 'Genomics, computational biology, data analysis'
    },
    {
        id: 'cloud-cost',
        name: 'Cloud Cost Optimization',
        subtitle: 'Optimize cloud spending',
        category: 'devops',
        icon: '💵',
        description: 'Cost management, resource optimization, FinOps'
    },
    {
        id: 'oss-maintainer',
        name: 'Open Source Maintainer',
        subtitle: 'Maintain OSS projects',
        category: 'other',
        icon: '🌐',
        description: 'Community management, code review, documentation'
    },
    {
        id: 'ai-video',
        name: 'AI Video Developer',
        subtitle: 'Build AI video tools',
        category: 'data',
        icon: '🎬',
        description: 'Computer vision, video processing, AI models'
    }
];

// Render role card
function createRoleCard(role) {
    const card = document.createElement('div');
    card.className = 'role-card bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl p-4 cursor-pointer border-2 border-transparent hover:border-primary transition-all';
    card.dataset.roleId = role.id;
    card.dataset.category = role.category;
    card.dataset.searchText = `${role.name} ${role.subtitle} ${role.description}`.toLowerCase();
    
    card.innerHTML = `
        <div class="flex items-start justify-between mb-3">
            <div class="text-3xl">${role.icon}</div>
            ${role.badge ? `
                <span class="badge px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white">
                    ${sanitizeHTML(role.badge)}
                </span>
            ` : ''}
        </div>
        <h3 class="text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
            ${sanitizeHTML(role.name)}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-xs mb-2">
            ${sanitizeHTML(role.subtitle)}
        </p>
        <div class="mt-3 flex items-center text-primary font-medium text-xs">
            View Roadmap
            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        </div>
    `;
    
    makeRoleCardAccessible(card);
    return card;
}

// Render all roles
function renderRoles(rolesToRender = roles) {
    const grid = document.getElementById('roles-grid');
    const noResults = document.getElementById('no-results');
    
    grid.innerHTML = '';
    
    if (rolesToRender.length === 0) {
        toggleElement(noResults, true);
        toggleElement(grid, false);
        return;
    }
    
    toggleElement(noResults, false);
    toggleElement(grid, true);
    
    rolesToRender.forEach(role => {
        const card = createRoleCard(role);
        grid.appendChild(card);
    });
}

// Filter roles
function filterRoles() {
    const searchValue = document.getElementById('search').value.toLowerCase().trim();
    const categoryValue = document.getElementById('category').value;
    
    const filtered = roles.filter(role => {
        const matchesSearch = !searchValue || role.dataset?.searchText?.includes(searchValue) || 
                             `${role.name} ${role.subtitle} ${role.description}`.toLowerCase().includes(searchValue);
        const matchesCategory = categoryValue === 'all' || role.category === categoryValue;
        
        return matchesSearch && matchesCategory;
    });
    
    renderRoles(filtered);
}

// Debounced filter
const debouncedFilter = debounce(filterRoles, 300);

// Initialize roles page
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderRoles();
    
    // Search input
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', debouncedFilter);
    }
    
    // Category filter
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        categorySelect.addEventListener('change', filterRoles);
    }
});
