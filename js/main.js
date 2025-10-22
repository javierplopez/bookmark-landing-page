document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.features_tab');
    const tabPanels = document.querySelectorAll('.features_panel');

    function showTab(targetPanelId) {
        tabPanels.forEach(panel => {
            panel.hidden = true;
            panel.classList.remove('features_panel--active');
            panel.setAttribute('aria-selected', 'false');
        });

        tabButtons.forEach(button => {
            button.setAttribute('aria-selected', 'false');
        });

        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
            targetPanel.hidden = false;
            targetPanel.classList.add('features_panel--active');
            targetPanel.setAttribute('aria-selected', 'true');
        }

        const targetButton = document.querySelector(`[aria-controls="${targetPanelId}"]`);
        if (targetButton) {
            targetButton.setAttribute('aria-selected', 'true');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPanelId = this.getAttribute('aria-controls');
            showTab(targetPanelId);
        });

        button.addEventListener('keydown', function(e) {
            let currentIndex = Array.from(tabButtons).indexOf(this);
            
            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    currentIndex = (currentIndex + 1) % tabButtons.length;
                    tabButtons[currentIndex].focus();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    currentIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
                    tabButtons[currentIndex].focus();
                    break;
                case 'Home':
                    e.preventDefault();
                    tabButtons[0].focus();
                    break;
                case 'End':
                    e.preventDefault();
                    tabButtons[tabButtons.length - 1].focus();
                    break;
            }
        });
    });
});