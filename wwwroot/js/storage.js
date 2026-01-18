// Storage helper for persisting game scores
window.gameStorage = {
    saveScores: function(scoreX, scoreO, draws) {
        const scores = {
            scoreX: scoreX,
            scoreO: scoreO,
            draws: draws
        };
        localStorage.setItem('tictactoe-scores', JSON.stringify(scores));
    },
    
    loadScores: function() {
        const scoresJson = localStorage.getItem('tictactoe-scores');
        if (scoresJson) {
            return JSON.parse(scoresJson);
        }
        return { scoreX: 0, scoreO: 0, draws: 0 };
    },
    
    resetScores: function() {
        localStorage.removeItem('tictactoe-scores');
    }
};

// PWA installation prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('PWA installation available');
});

window.addEventListener('appinstalled', () => {
    console.log('PWA installed successfully');
    deferredPrompt = null;
});
