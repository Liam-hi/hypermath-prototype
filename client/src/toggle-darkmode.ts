function toggleDarkMode() {
    const toggleButton = document.getElementById('toggle-button')!;
    let darkMode = false;
  
    toggleButton.addEventListener('click', () => {
      if (darkMode) {
        document.documentElement.style.setProperty('--background-color', '#eeeeee');
        document.documentElement.style.setProperty('--canvas-background-color', '#fff');
        document.documentElement.style.setProperty('--text-color', '#000');
        document.documentElement.style.setProperty('--prompt-background', '#fff');
        document.documentElement.style.setProperty('--prompt-input', '#f5f5f5');
        document.documentElement.style.setProperty('--prompt-borderColor', 'rgba(0, 0, 0, 0.1)');
        document.documentElement.style.setProperty('--warning-background', '#ffdddd');
        document.documentElement.style.setProperty('--cell', 'rgb(96, 198, 200)');
        document.documentElement.style.setProperty('--highlight-background', '#ddb62b');
        document.documentElement.style.setProperty('--highlight-color', '#000');
        document.documentElement.style.setProperty('--input-value', '#000');
        darkMode = false;
      } else {
        document.documentElement.style.setProperty('--background-color', '#323232');
        document.documentElement.style.setProperty('--canvas-background-color', '#111111');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--prompt-background', '#212121');
        document.documentElement.style.setProperty('--prompt-input', '#212121');
        document.documentElement.style.setProperty('--prompt-borderColor', 'rgba(255, 255, 255, 0.4)');
        document.documentElement.style.setProperty('--warning-background', '#501e1b');
        document.documentElement.style.setProperty('--cell', '#fff');
        document.documentElement.style.setProperty('--highlight-background', '#ddb62b');
        document.documentElement.style.setProperty('--highlight-color', '#fff');
        document.documentElement.style.setProperty('--input-value', '#ff7070');
        darkMode = true;
      }
    });
  }
  
  export { toggleDarkMode };

  // Skillnad mellan att exportera 