// Walker animation position calculator
// Dynamically sets CSS variables based on actual word positions

(function() {
  function initWalkerPositions() {
    const tagline = document.querySelector('.physics-tagline');
    if (!tagline) return;

    const walker = tagline.querySelector('.walker');
    const words = tagline.querySelectorAll('.word:not(.slide-left)');

    if (!walker || words.length === 0) return;

    // Wait for text to settle (after fall animation completes ~2.5s)
    setTimeout(() => {
      // Temporarily disable walker animation to get its natural position
      const originalAnimation = walker.style.animation;
      walker.style.animation = 'none';
      walker.style.transform = 'none';
      walker.style.opacity = '0';

      // Force reflow
      walker.offsetHeight;

      // Get walker's natural position (left edge, since translateX moves from there)
      const walkerRect = walker.getBoundingClientRect();
      const walkerLeft = walkerRect.left;

      // Get font size for converting px to em
      const fontSize = parseFloat(getComputedStyle(tagline).fontSize);

      // Calculate positions relative to walker's natural left position
      const taglineStyle = tagline.style;

      // Offset to align emoji center with word edges
      const emojiOffset = 1;
      // Buffer: jump earlier (before word start), drop later (after word end)
      const jumpBuffer = 0.5;  // jump up this much before word starts
      const dropBuffer = 0.5;  // drop down this much after word ends

      words.forEach((word, index) => {
        const rect = word.getBoundingClientRect();

        // Position relative to walker's left (negative = left of walker)
        const startPx = rect.left - walkerLeft;
        const endPx = rect.right - walkerLeft;

        // Convert px to em, apply offset and buffers
        const startEm = (startPx / fontSize) - emojiOffset - jumpBuffer;
        const endEm = (endPx / fontSize) - emojiOffset + dropBuffer;

        taglineStyle.setProperty(`--word${index + 1}-start`, `${startEm.toFixed(2)}em`);
        taglineStyle.setProperty(`--word${index + 1}-end`, `${endEm.toFixed(2)}em`);

        console.log(`Word ${index + 1}: ${startEm.toFixed(2)}em to ${endEm.toFixed(2)}em`);
      });

      // Set before-words position (5em left of first word)
      const word1Start = parseFloat(taglineStyle.getPropertyValue('--word1-start'));
      taglineStyle.setProperty('--before-words', `${(word1Start - 5).toFixed(2)}em`);

      // Ground level and top-of-word Y positions
      taglineStyle.setProperty('--ground-y', '1.2em');
      taglineStyle.setProperty('--top-fallen', '-0.2em');
      taglineStyle.setProperty('--top-baseline', '-1.4em');

      // Add class to indicate positions are ready
      tagline.classList.add('positions-ready');

      // Re-enable the walker animation
      walker.style.transform = '';
      walker.style.opacity = '';
      walker.offsetHeight; // Trigger reflow
      walker.style.animation = 'robot-walk 20s linear infinite';

      console.log('Walker positions calculated and applied');

    }, 2800); // Run after words settle (15% = 3s) but before walker appears (16% = 3.2s)
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWalkerPositions);
  } else {
    initWalkerPositions();
  }
})();
