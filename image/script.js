// Image sources (Black and White versions first, Colorful versions next)
const images = {
    img1: {
      black: "black1.png",
      color: "color1.jpeg"
    },
    img2: {
      white: "white1.jpeg",
      color: "color2.jpeg"
    }
  };
  
  // Setup click events
  document.querySelectorAll('.switchable').forEach(img => {
    img.addEventListener('click', () => {
      const id = img.id;
      if (img.src.includes(images[id].black) || img.src.includes(images[id].white)) {
        img.src = images[id].color;
      } else {
        // Clicking again goes back to black or white
        img.src = id === 'img1' ? images[id].black : images[id].white;
      }
    });
  });
  