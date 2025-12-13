// ============================================
// LearnSphere - Dashboard JavaScript
// Modern E-Learning Dashboard Interactions
// ============================================

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Optional: Add animation feedback
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// Sidebar Toggle for Mobile
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Navigation Active State
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');

// Page content mapping
const pages = {
    'Dashboard': {
        title: 'Welcome Back, Alex 👋',
        subtitle: 'Continue your learning journey',
        content: 'dashboardContent'
    },
    'My Courses': {
        title: 'My Courses',
        subtitle: 'Track your learning progress',
        content: 'myCoursesContent'
    },
    'My Course': {
        title: 'Advanced JavaScript Patterns',
        subtitle: 'Master advanced JavaScript concepts',
        content: 'myCourseContent'
    },
    'Certificates': {
        title: 'My Certificates',
        subtitle: 'View your earned achievements',
        content: 'certificatesContent'
    },
    'Profile': {
        title: 'My Profile',
        subtitle: 'Manage your account information',
        content: 'profileContent'
    },
    'Settings': {
        title: 'Settings',
        subtitle: 'Customize your experience',
        content: 'settingsContent'
    }
};

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all items
        navItems.forEach(navItem => navItem.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Get page name from navigation text
        const pageName = item.querySelector('span').textContent;
        
        // Update page title and subtitle
        if (pages[pageName]) {
            pageTitle.textContent = pages[pageName].title;
            pageSubtitle.textContent = pages[pageName].subtitle;
            
            // Hide all page content
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page content
            const selectedContent = document.getElementById(pages[pageName].content);
            if (selectedContent) {
                selectedContent.classList.add('active');
            }
        }
        
        // Close sidebar on mobile
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('active');
        }
    });
});

// Course Card Play Button Interaction
const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Get course title
        const courseCard = btn.closest('.course-card');
        const courseTitle = courseCard.querySelector('.course-title').textContent;
        
        // Optional: Show video player or navigate to course
        console.log(`Playing: ${courseTitle}`);
        
        // Add visual feedback
        btn.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(() => {
            btn.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200);
        
        // Here you can add logic to show video player section
        // showVideoPlayer(courseTitle);
    });
});

// Video Player Controls (if video section is visible)
const videoControls = document.querySelector('.video-controls');
const playPauseBtn = document.querySelector('.play-pause');
const videoTimeline = document.querySelector('.video-timeline');
const video = document.querySelector('video');

if (playPauseBtn && video) {
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
            `;
        } else {
            video.pause();
            playPauseBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            `;
        }
    });
    
    // Timeline interaction
    if (videoTimeline) {
        videoTimeline.addEventListener('click', (e) => {
            const rect = videoTimeline.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            video.currentTime = percent * video.duration;
        });
        
        // Update timeline progress
        video.addEventListener('timeupdate', () => {
            const timelineProgress = document.querySelector('.timeline-progress');
            const percent = (video.currentTime / video.duration) * 100;
            timelineProgress.style.width = percent + '%';
            
            // Update time display
            const videoTime = document.querySelector('.video-time');
            const current = formatTime(video.currentTime);
            const duration = formatTime(video.duration);
            videoTime.textContent = `${current} / ${duration}`;
        });
    }
}

// Format time helper function
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Notification Button Interaction
const notificationBtn = document.querySelector('.notification-btn');

if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        // Add pulse animation
        const badge = notificationBtn.querySelector('.notification-badge');
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'pulse 0.5s ease';
        }, 10);
        
        // Here you can add logic to show notifications panel
        console.log('Show notifications');
    });
}

// Browse Courses Button
const browseCourseBtn = document.querySelector('.browse-btn');

if (browseCourseBtn) {
    browseCourseBtn.addEventListener('click', () => {
        console.log('Navigate to courses page');
        // window.location.href = '/courses';
    });
}

// Progress Bar Animation on Load
const progressFills = document.querySelectorAll('.progress-fill');

const animateProgress = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            observer.unobserve(entry.target);
        }
    });
};

const progressObserver = new IntersectionObserver(animateProgress, {
    threshold: 0.5
});

progressFills.forEach(fill => {
    progressObserver.observe(fill);
});

// Stat Cards Animation on Load
const statCards = document.querySelectorAll('.stat-card');

const animateStats = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
            
            observer.unobserve(entry.target);
        }
    });
};

const statsObserver = new IntersectionObserver(animateStats, {
    threshold: 0.2
});

statCards.forEach(card => {
    statsObserver.observe(card);
});

// Logout Button
const logoutBtn = document.querySelector('.logout-btn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        const confirmLogout = confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            console.log('Logging out...');
            // Clear user data
            localStorage.removeItem('user');
            // Redirect to login page
            // window.location.href = '/login';
        }
    });
}

// Course Card Click (navigate to course details)
const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't navigate if play button was clicked
        if (e.target.closest('.play-btn')) return;
        
        const courseTitle = card.querySelector('.course-title').textContent;
        console.log(`Navigate to course: ${courseTitle}`);
        // window.location.href = `/course-details?course=${encodeURIComponent(courseTitle)}`;
    });
});

// Activity Items Click
const activityItems = document.querySelectorAll('.activity-item');

activityItems.forEach(item => {
    item.addEventListener('click', () => {
        const activityTitle = item.querySelector('.activity-title').textContent;
        const courseName = item.querySelector('.activity-course').textContent;
        
        console.log(`Activity: ${activityTitle} - ${courseName}`);
        // Navigate to related course or show details
    });
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Open search');
        // Implement search functionality
    }
    
    // Ctrl/Cmd + D for toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        themeToggle.click();
    }
    
    // Escape to close sidebar on mobile
    if (e.key === 'Escape' && window.innerWidth <= 1024) {
        sidebar.classList.remove('active');
    }
});

// Simulate real-time updates (optional)
function simulateRealtimeUpdates() {
    // Update notification badge randomly
    setInterval(() => {
        const badge = document.querySelector('.notification-badge');
        if (badge && Math.random() > 0.7) {
            const currentCount = parseInt(badge.textContent);
            badge.textContent = currentCount + 1;
            
            // Animate badge
            badge.style.animation = 'none';
            setTimeout(() => {
                badge.style.animation = 'pulse 0.5s ease';
            }, 10);
        }
    }, 30000); // Every 30 seconds
}

// Initialize real-time updates (optional)
// simulateRealtimeUpdates();

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// ============================================
// My Courses Page Functionality
// ============================================

// Course filter tabs
const filterTabs = document.querySelectorAll('.filter-tab');
const courseCardsFull = document.querySelectorAll('.course-card-full');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all tabs
        filterTabs.forEach(t => t.classList.remove('active'));
        
        // Add active to clicked tab
        tab.classList.add('active');
        
        // Get filter value
        const filter = tab.dataset.filter;
        
        // Filter courses
        courseCardsFull.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const status = card.dataset.status;
                card.style.display = status === filter ? 'block' : 'none';
            }
        });
    });
});

// Course search
const searchInput = document.querySelector('.search-box input');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        courseCards.forEach(card => {
            const title = card.querySelector('.course-title').textContent.toLowerCase();
            const instructor = card.querySelector('.course-instructor').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || instructor.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Continue learning buttons
const continueBtns = document.querySelectorAll('.btn-continue');

continueBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const courseCard = btn.closest('.course-card-full');
        const courseTitle = courseCard.querySelector('.course-title').textContent;
        console.log(`Continue learning: ${courseTitle}`);
        
        // Add visual feedback
        btn.textContent = 'Loading...';
        setTimeout(() => {
            btn.textContent = 'Continue Learning';
        }, 1000);
    });
});

// ============================================
// Certificates Page Functionality
// ============================================

// View certificate buttons
const viewCertBtns = document.querySelectorAll('.btn-view-cert');

viewCertBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const certCard = btn.closest('.certificate-card');
        const certTitle = certCard.querySelector('h3').textContent;
        console.log(`Viewing certificate: ${certTitle}`);
        
        // Add visual feedback
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    });
});

// Download certificate buttons
const downloadBtns = document.querySelectorAll('.btn-download');

downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Downloading certificate...');
        
        // Animate download
        btn.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            btn.style.animation = '';
        }, 500);
    });
});

// Share certificate buttons
const shareBtns = document.querySelectorAll('.btn-share');

shareBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Sharing certificate...');
        
        // Show share options (you can implement actual share functionality)
        alert('Share options:\n- LinkedIn\n- Twitter\n- Facebook\n- Copy Link');
    });
});

// Continue course buttons (for pending certificates)
const continueCourseBtns = document.querySelectorAll('.btn-continue-course');

continueCourseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const certCard = btn.closest('.certificate-card');
        const courseTitle = certCard.querySelector('h3').textContent;
        console.log(`Continue course: ${courseTitle}`);
        
        // Navigate to My Courses page
        const myCoursesNav = Array.from(navItems).find(item => 
            item.querySelector('span').textContent === 'My Courses'
        );
        if (myCoursesNav) {
            myCoursesNav.click();
        }
    });
});

// ============================================
// Profile Page Functionality
// ============================================

// Edit profile button
const editProfileBtn = document.querySelector('.btn-edit-profile');

if (editProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
        console.log('Edit profile');
        alert('Edit Profile functionality - Would open a modal or form');
    });
}

// Avatar edit button
const avatarEditBtn = document.querySelector('.avatar-edit-btn');

if (avatarEditBtn) {
    avatarEditBtn.addEventListener('click', () => {
        console.log('Change avatar');
        // Trigger file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.querySelector('.profile-avatar-large img');
                    if (img) {
                        img.src = e.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    });
}

// Skill tags interaction
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        console.log(`Skill: ${tag.textContent}`);
        // Could navigate to courses related to this skill
    });
});

// ============================================
// Settings Page Functionality
// ============================================

// Toggle switches
const toggleSwitches = document.querySelectorAll('.toggle-switch input');

toggleSwitches.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        const settingItem = toggle.closest('.setting-item');
        const settingName = settingItem.querySelector('h4').textContent;
        console.log(`${settingName}: ${e.target.checked ? 'ON' : 'OFF'}`);
        
        // Save to localStorage
        localStorage.setItem(settingName, e.target.checked);
    });
});

// Setting selects
const settingSelects = document.querySelectorAll('.setting-select');

settingSelects.forEach(select => {
    select.addEventListener('change', (e) => {
        const settingItem = select.closest('.setting-item');
        const settingName = settingItem.querySelector('h4').textContent;
        console.log(`${settingName}: ${e.target.value}`);
        
        // Save to localStorage
        localStorage.setItem(settingName, e.target.value);
    });
});

// Setting buttons
const settingBtns = document.querySelectorAll('.btn-setting');

settingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const settingItem = btn.closest('.setting-item-btn');
        const settingName = settingItem.querySelector('h4').textContent;
        console.log(`Action: ${settingName}`);
        
        if (settingName.includes('Password')) {
            alert('Change Password - Would open a modal');
        } else if (settingName.includes('Two-Factor')) {
            alert('Enable 2FA - Would start setup process');
        } else if (settingName.includes('Sessions')) {
            alert('Active Sessions - Would show device list');
        }
    });
});

// Delete account button
const deleteBtn = document.querySelector('.btn-danger');

if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
        const confirm1 = confirm('Are you sure you want to delete your account? This action cannot be undone.');
        if (confirm1) {
            const confirm2 = confirm('All your data, courses, and certificates will be permanently deleted. Continue?');
            if (confirm2) {
                console.log('Account deletion initiated');
                alert('Account deletion would be processed here');
            }
        }
    });
}

// ============================================
// My Course Page Functionality
// ============================================

// Lesson Tabs
const lessonTabs = document.querySelectorAll('.lesson-tab');
const lessonTabContents = document.querySelectorAll('.lesson-tab-content');

if (lessonTabs.length > 0) {
    lessonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            lessonTabs.forEach(t => t.classList.remove('active'));
            lessonTabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const tabName = tab.textContent.trim();
            const contentId = tabName.toLowerCase().replace(/\s+/g, '-') + '-content';
            const content = document.getElementById(contentId);
            if (content) {
                content.classList.add('active');
            }
        });
    });
}

// Bookmark Button
const bookmarkBtn = document.querySelector('.btn-bookmark');
if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', () => {
        bookmarkBtn.classList.toggle('active');
        const isBookmarked = bookmarkBtn.classList.contains('active');
        console.log(isBookmarked ? 'Course bookmarked' : 'Bookmark removed');
    });
}

// Share Course Button
const shareCourseBtn = document.querySelector('.btn-share-course');
if (shareCourseBtn) {
    shareCourseBtn.addEventListener('click', () => {
        alert('Share functionality - Would open share dialog');
    });
}

// Lesson Navigation Buttons
const prevLessonBtn = document.querySelector('.btn-prev-lesson');
const nextLessonBtn = document.querySelector('.btn-next-lesson');
const markCompleteBtn = document.querySelector('.btn-mark-complete');

if (prevLessonBtn) {
    prevLessonBtn.addEventListener('click', () => {
        console.log('Navigate to previous lesson');
        alert('Would navigate to previous lesson');
    });
}

if (nextLessonBtn) {
    nextLessonBtn.addEventListener('click', () => {
        console.log('Navigate to next lesson');
        alert('Would navigate to next lesson');
    });
}

if (markCompleteBtn) {
    markCompleteBtn.addEventListener('click', () => {
        const isCompleted = markCompleteBtn.textContent.includes('Completed');
        if (!isCompleted) {
            markCompleteBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed';
            console.log('Lesson marked as complete');
        }
    });
}

// Save Notes Button
const saveNotesBtn = document.querySelector('.btn-save-notes');
if (saveNotesBtn) {
    saveNotesBtn.addEventListener('click', () => {
        const notesTextarea = document.querySelector('.notes-textarea');
        if (notesTextarea) {
            const notes = notesTextarea.value;
            localStorage.setItem('lesson-notes', notes);
            console.log('Notes saved:', notes);
            
            // Visual feedback
            saveNotesBtn.textContent = 'Saved!';
            setTimeout(() => {
                saveNotesBtn.textContent = 'Save Notes';
            }, 2000);
        }
    });
}

// Load saved notes on page load
const notesTextarea = document.querySelector('.notes-textarea');
if (notesTextarea) {
    const savedNotes = localStorage.getItem('lesson-notes');
    if (savedNotes) {
        notesTextarea.value = savedNotes;
    }
}

// Download Resource Buttons
const downloadResourceBtns = document.querySelectorAll('.btn-download-resource');
downloadResourceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const resourceName = btn.closest('.resource-item').querySelector('h4').textContent;
        console.log('Downloading:', resourceName);
        alert(`Would download: ${resourceName}`);
    });
});

// Ask Question Button
const askQuestionBtn = document.querySelector('.btn-ask-question');
if (askQuestionBtn) {
    askQuestionBtn.addEventListener('click', () => {
        const question = prompt('What would you like to ask?');
        if (question && question.trim()) {
            console.log('New question:', question);
            alert('Your question has been submitted and will be answered by the instructor.');
        }
    });
}

// Curriculum Section Toggle
const sectionHeaders = document.querySelectorAll('.section-header');
sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const lessonsList = header.nextElementSibling;
        if (lessonsList && lessonsList.classList.contains('lessons-list')) {
            lessonsList.classList.toggle('collapsed');
        }
    });
});

// Lesson Item Click
const lessonItems = document.querySelectorAll('.lesson-item');
lessonItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('locked')) {
            // Remove active class from all lessons
            lessonItems.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked lesson
            item.classList.add('active');
            
            const lessonTitle = item.querySelector('.lesson-title').textContent;
            console.log('Switched to lesson:', lessonTitle);
            
            // Update page title
            if (pageTitle) {
                pageTitle.textContent = lessonTitle;
            }
        }
    });
});

// Video Player (Basic Implementation)
// In a real application, you would use a proper video player library
const videoPlayer = document.querySelector('.video-player-wrapper');
if (videoPlayer) {
    // Add click event for play button, timeline, etc.
    console.log('Video player initialized');
}

console.log('LearnSphere Dashboard initialized successfully! 🎓');

