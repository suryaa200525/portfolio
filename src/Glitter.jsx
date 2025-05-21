import React, { useEffect } from 'react'


function Glitter() {
  useEffect(() => {
    const glitterContainer = document.getElementById('glitter-container');
    const sparkleCount = 200;

    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = Math.random() * window.innerWidth + 'px';
      sparkle.style.top = -Math.random() * window.innerHeight + 'px';
      sparkle.style.animationDelay = Math.random() * 5 + 's';
      glitterContainer.appendChild(sparkle);
    }
  }, []);

  return <div className="glitter-bg" id="glitter-container"></div>;
};

export default Glitter;
