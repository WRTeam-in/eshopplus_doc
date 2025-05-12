document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const contentPanel = document.getElementById('side-panel-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            tabLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Add loading animation
            contentPanel.innerHTML = '<div class="loading">Loading content...</div>';
            
            // Simulate content loading (replace with actual content loading)
            setTimeout(() => {
                contentPanel.innerHTML = `<h2>${this.textContent}</h2>
                                        <div class="content-section">
                                            Content for ${this.textContent}
                                        </div>`;
            }, 500);
        });
    });
});