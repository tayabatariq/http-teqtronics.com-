
// navbar 
document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// techologies
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('text-black', 'border-blue-500');
            btn.classList.add('text-gray-600', 'border-transparent');
        });
        
        this.classList.add('text-black', 'border-blue-500');
        
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.add('hidden');
        });
        
        document.getElementById(this.dataset.tab).classList.remove('hidden');
    });
});