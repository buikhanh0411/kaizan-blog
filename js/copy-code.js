document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach((block) => {
    // Check if the block already has a copy button
    if (block.querySelector('.copy-button')) return;

    // Create the copy button
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.type = 'button';
    button.innerText = 'Copy';

    // Position the block relatively if it's not already
    const style = window.getComputedStyle(block);
    if (style.position === 'static') {
      block.style.position = 'relative';
    }

    // Add button to the block
    block.appendChild(button);

    button.addEventListener('click', async () => {
      const code = block.querySelector('code');
      const text = code ? code.innerText : block.innerText;

      try {
        await navigator.clipboard.writeText(text);
        button.innerText = 'Copied!';
        button.classList.add('copied');

        setTimeout(() => {
          button.innerText = 'Copy';
          button.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
        button.innerText = 'Error';
      }
    });
  });
});
