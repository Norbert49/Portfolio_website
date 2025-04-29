document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    
    // Check for saved user preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        localStorage.setItem('darkMode', html.classList.contains('dark') ? 'dark' : 'light');
    });
});