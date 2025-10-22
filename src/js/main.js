const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const targetPanel = document.querySelector(`#${this.getAttribute('aria-controls')}`);
        
        tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.classList.remove('features_tab-active');
        });
        
        panels.forEach(p => {
            p.hidden = true;
            p.classList.remove('features_panel-active');
        });
        
        // Activate current tab and panel
        this.setAttribute('aria-selected', 'true');
        this.classList.add('features_tab-active');
        targetPanel.hidden = false;
        targetPanel.classList.add('features_panel-active');
    });
});