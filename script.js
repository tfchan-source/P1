// Screen titles mapping
const titles = {
  bag: "🎒 Packing My Schoolbag",
  cubby: "📁 Organizing My Cubbyhole",
  homework: "📝 Packing My Homework"
};

// Open selected module
function openModule(moduleName) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Show target module screen
  const targetScreen = document.getElementById(`${moduleName}-screen`);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Update header title and display header bar
  document.getElementById('screen-title').textContent = titles[moduleName];
  document.getElementById('header-bar').classList.remove('hidden');
}

// Return to Homepage
document.getElementById('back-btn').addEventListener('click', () => {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Show homepage and hide header bar
  document.getElementById('home-screen').classList.add('active');
  document.getElementById('header-bar').classList.add('hidden');
});
