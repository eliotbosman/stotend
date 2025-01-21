// Array of car image paths
const carImages = [
    'American Mutoscope and Biograph Company.jpg',
    'American Steel and Wire Co Railroad Car Spring 1920.jpg',
    'Andy Warhol Orange Car Crash Fourteen Times 1963.jpg',
    'Anni Albers Automobile Upholstery Material After 1933.jpg',
    'Benjamin Patterson Traffic Light 1960 62.jpg',
    'Bill Arnold Horses out California Car Window 1970.png',
    'Brett Weston Car Glass 1939.jpg',
    'Dante Giacosa 500f city car designed 1957.jpg',
    'Eberhard Grammes Boy 1989.jpg',
    'Francis Bruguière.jpg',
    'General Motors Corporation Oscar car design template 1950s.jpg',
    'Graciela Iturbide Carro 1972.jpg',
    'Herbert Bayer Der neue Adler Brochure designed Walter Gropius 1931.jpg',
    'James Wines SITE Ghost Parking Lot.jpg',
    'Jeanne Moutoussamy Ashe Riding in a Car with No Windows 1977.jpeg',
    'Jim Dine Study for The Car Crash 1960.jpg',
    'John Cobb Drove 369 MPH on 1939.jpg',
    'John Cobb in his 350 mile per hour car 1938.jpg',
    'John Lacey Traffic Lights 1954.png',
    'Ketaki Sheth Shilpa and Sheetal in their car 1995.jpg',
    'Lilly Reich Car seat elevations 1930s.jpg',
    'Loaded mail wagon Montreal 1908 Library and Archive of Canada.jpg',
    'Louis I Kahn Traffic Study project 1952.jpg',
    'Marion Post Wolcott 1941.jpg',
    'Meg Cranston Buying a new car 1995.jpg',
    'Micro Compact Car Smart GmbHh 1998 .jpg',
    'Pininfarina Cisitalia 202 GT Car 1946.jpg',
    'Robert Bechtle Covered Car.jpg',
    'Robert Rauschenberg with John Cage. Automobile Tire Print 1953.jpg',
    'The First Renaud Car 1898.jpg',
    'Zaha Hadid Parc De La Villette Car Park 1950.jpg'
];

// Text content for the website
const textContent = [
    "The automobile, a revolutionary invention that transformed the 20th century, represents more than mere transportation. Through the lens of art and design, it becomes a symbol of cultural evolution, technological progress, and societal change. These images capture moments where the intersection of automotive innovation and artistic expression created lasting impressions on our collective consciousness.",
    "From the early experiments of motion photography with the American Mutoscope and Biograph Company to Andy Warhol's haunting reflections on car crashes, we witness how artists have interpreted the automobile's impact on modern life. The collection spans from technical drawings and industrial designs to artistic interpretations, each offering a unique perspective on our relationship with motorized mobility.",
    "This visual journey through automotive history reveals not just the evolution of the car, but the evolution of how we see ourselves in relation to technology. From the optimistic futurism of early car designs to critical commentaries on car culture, these works reflect the complex dialogue between human ambition, artistic vision, and mechanical innovation."
];

// Color blocks configuration
const colorBlocks = [
    { color: 'rgb(43, 38, 135)', title: 'Paint Guidelines' },
    { color: 'rgb(75, 63, 87)', title: 'General House Rules' },
    { color: 'rgb(99, 78, 60)', title: 'Safety and Environment' },
    { color: 'rgb(63, 63, 63)', title: 'Technical Assistance' },
    { color: 'rgb(31, 47, 31)', title: 'Equipment Usage' },
    { color: 'rgb(0, 0, 0)', title: 'Emergency Procedures' },
    { color: 'rgb(60, 78, 99)', title: 'Material Handling' },
    { color: 'rgb(47, 63, 47)', title: 'Waste Management' },
    { color: 'rgb(31, 31, 31)', title: 'Security Protocols' },
    { color: 'rgb(0, 102, 204)', title: 'Access Control' },
    { color: 'rgb(0, 128, 128)', title: 'Ventilation Guidelines' },
    { color: 'rgb(0, 102, 51)', title: 'Storage Regulations' },
    { color: 'rgb(51, 68, 85)', title: 'Personal Protection' },
    { color: 'rgb(68, 85, 102)', title: 'Chemical Safety' },
    { color: 'rgb(85, 102, 119)', title: 'Fire Safety' },
    { color: 'rgb(102, 119, 136)', title: 'First Aid Procedures' },
    { color: 'rgb(119, 136, 153)', title: 'Evacuation Routes' },
    { color: 'rgb(136, 153, 153)', title: 'Emergency Contacts' }
];

// Function to get random position within the container
function getRandomPosition() {
    const container = document.getElementById('container');
    const x = Math.random() * (container.offsetWidth - 300); // 300 is image width
    const y = Math.random() * (container.offsetHeight - 200); // 200 is image height
    return { x, y };
}

// Function to get random position for color blocks
function getRandomPositionForColorBlocks(elementWidth, elementHeight) {
    const padding = 20; // Minimum distance from edges and other blocks
    const maxX = window.innerWidth - elementWidth - padding;
    const maxY = window.innerHeight - elementHeight - padding;
    return {
        x: Math.random() * maxX + padding,
        y: Math.random() * maxY + padding
    };
}

// Function to check if positions overlap
function checkOverlap(pos1, size1, positions) {
    const padding = 10;
    for (let pos2 of positions) {
        const horizontalOverlap = 
            pos1.x + size1.width + padding > pos2.x && 
            pos2.x + size1.width + padding > pos1.x;
        const verticalOverlap = 
            pos1.y + size1.height + padding > pos2.y && 
            pos2.y + size1.height + padding > pos1.y;
        if (horizontalOverlap && verticalOverlap) {
            return true;
        }
    }
    return false;
}

// Function to create and place car images
function placeCarImages() {
    const container = document.getElementById('container');
    const imageBasePath = 'CAR IMAGES MOMA 3/';
    
    carImages.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imageBasePath + imagePath;
        img.className = 'car-image';
        const pos = getRandomPosition();
        img.style.left = pos.x + 'px';
        img.style.top = pos.y + 'px';
        
        // Add error handler for broken images
        img.onerror = function() {
            this.style.backgroundColor = '#1a365d'; // Dark blue fallback
            this.style.display = 'block';
            this.alt = 'Image not found';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.color = '#fff';
            this.style.fontSize = '14px';
            this.style.textAlign = 'center';
            this.style.padding = '10px';
        };
        
        // Add hover animation using anime.js
        img.addEventListener('mouseenter', () => {
            anime({
                targets: img,
                scale: 1.2,
                rotate: '2deg',
                duration: 800,
                easing: 'easeOutElastic(1, .8)'
            });
        });

        img.addEventListener('mouseleave', () => {
            anime({
                targets: img,
                scale: 1,
                rotate: '0deg',
                duration: 600,
                easing: 'easeOutElastic(1, .8)'
            });
        });

        container.appendChild(img);
    });
}

// Function to get random text box style
function getRandomTextBoxStyle() {
    const styles = ['tall', 'wide', 'triangle', 'octagon', 'strip'];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    
    // Custom clip paths for more variety
    const customClipPaths = [
        '0 0, 100% 0, 100% 100%, 0 100%', // rectangle
        '50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%', // pentagon
        '20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%', // octagon
        '0 0, 100% 0, 100% 100%, 30% 100%, 0 70%', // custom shape
        '50% 0%, 100% 50%, 50% 100%, 0% 50%' // diamond
    ];

    // Sometimes return a custom clip path instead of predefined style
    if (Math.random() < 0.3) {
        const randomClipPath = customClipPaths[Math.floor(Math.random() * customClipPaths.length)];
        return {
            style: '',
            clipPath: randomClipPath
        };
    }

    return {
        style: randomStyle,
        clipPath: null
    };
}

// Function to create and place text boxes
function placeTextBoxes() {
    const container = document.getElementById('container');
    
    textContent.forEach((text, index) => {
        const textBox = document.createElement('div');
        textBox.className = 'text-box';
        textBox.textContent = text;

        // Get random style
        const boxStyle = getRandomTextBoxStyle();
        if (boxStyle.style) {
            textBox.classList.add(boxStyle.style);
        }
        if (boxStyle.clipPath) {
            textBox.style.setProperty('--clip-path', boxStyle.clipPath);
        }

        // Random rotation for non-tall boxes
        if (!boxStyle.style.includes('tall')) {
            const rotation = Math.random() < 0.3 ? Math.random() * 30 - 15 : 0; // -15 to +15 degrees, 30% chance
            textBox.style.transform = `rotate(${rotation}deg)`;
        }

        // Random position
        const pos = getRandomPosition();
        textBox.style.left = pos.x + 'px';
        textBox.style.top = pos.y + 'px';
        
        // Add hover animation using anime.js
        textBox.addEventListener('mouseenter', () => {
            anime({
                targets: textBox,
                scale: 1.05,
                duration: 400,
                easing: 'easeOutCubic'
            });
        });

        textBox.addEventListener('mouseleave', () => {
            anime({
                targets: textBox,
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });

        container.appendChild(textBox);
    });
}

// Function to create color blocks
function createColorBlocks() {
    const container = document.querySelector('.color-blocks');
    const blockWidth = (2 * window.innerWidth / 100) - 20; // 2vw - 20px
    const blockHeight = (25 * window.innerHeight / 100) - 20; // 25vh - 20px
    const positions = [];
    
    colorBlocks.forEach((block, index) => {
        const div = document.createElement('div');
        div.className = 'color-block';
        div.style.backgroundColor = block.color;
        div.textContent = block.title;
        
        // Find a non-overlapping position
        let position;
        let attempts = 0;
        do {
            position = getRandomPositionForColorBlocks(blockWidth, blockHeight);
            attempts++;
        } while (checkOverlap(position, {width: blockWidth, height: blockHeight}, positions) && attempts < 50);
        
        positions.push(position);
        
        div.style.left = position.x + 'px';
        div.style.top = position.y + 'px';
        
        // Add click handler
        div.addEventListener('click', () => openPanel(block.title));
        
        container.appendChild(div);
    });
}

// Function to animate texture overlays
function animateTextures() {
    const textures = document.querySelectorAll('.texture-overlay');
    let currentIndex = 0;

    function showNextTexture() {
        // Hide all textures
        textures.forEach(texture => {
            texture.style.opacity = '0';
        });

        // Show current texture
        textures[currentIndex].style.opacity = '0.3';

        // Update index
        currentIndex = (currentIndex + 1) % textures.length;

        // Schedule next change
        setTimeout(showNextTexture, 3000); // Change every 3 seconds
    }

    showNextTexture();
}

// Function to open side panel
function openPanel(title) {
    const panel = document.querySelector('.side-panel');
    const content = panel.querySelector('.panel-content');
    const colorBlock = Array.from(document.querySelectorAll('.color-block'))
        .find(block => block.textContent === title);
    
    if (colorBlock) {
        // Set panel background color to match the color block
        panel.style.backgroundColor = colorBlock.style.backgroundColor;
        
        // Add stronger box shadow
        panel.style.boxShadow = `-10px 0 30px rgba(0,0,0,0.5)`;
    }

    content.innerHTML = `<h2>${title}</h2><p>${getContentForTitle(title)}</p>`;
    panel.classList.add('active');
}

// Function to handle panel closing
function setupPanelClose() {
    const closeBtn = document.querySelector('.close-panel');
    const panel = document.querySelector('.side-panel');
    
    closeBtn.addEventListener('click', () => {
        panel.classList.remove('active');
    });
}

// Function to animate text stroke
function animateTextStroke() {
    const textElements = document.querySelectorAll('.start-text-top, .start-text-bottom');
    
    textElements.forEach(el => {
        anime({
            targets: el,
            strokeWidth: [
                { value: [0, 3], duration: 1500, easing: 'easeInOutQuad' },
                { value: 0, duration: 1500, easing: 'easeInOutQuad' }
            ],
            direction: 'alternate',
            loop: true,
            update: function(anim) {
                const currentWidth = Math.round(anim.animations[0].currentValue);
                el.style.webkitTextStroke = `${currentWidth}px white`;
            }
        });
    });
}

// Function to create falling blocks
function createFallingBlocks() {
    const startPage = document.querySelector('.start-page');
    const blockCount = 30; // Number of falling blocks
    
    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.className = 'falling-block';
        
        // Random color from our color scheme
        const randomColor = colorBlocks[Math.floor(Math.random() * colorBlocks.length)].color;
        block.style.backgroundColor = randomColor;
        
        // Random starting position
        block.style.left = `${Math.random() * 100}vw`;
        block.style.top = `-50px`;
        
        startPage.appendChild(block);
        
        // GSAP animation with physics
        gsap.to(block, {
            y: window.innerHeight + 100,
            x: `random(-200, 200)`,
            rotation: `random(-720, 720)`,
            duration: `random(3, 6)`,
            delay: `random(0, 2)`,
            ease: 'power1.in',
            repeat: -1,
            onRepeat: function() {
                // Reset position for next fall
                gsap.set(block, {
                    x: `random(-200, 200)`,
                    y: -50,
                    rotation: 0
                });
            }
        });

        // Wobble animation
        gsap.to(block, {
            rotation: `random(-45, 45)`,
            duration: `random(0.5, 1.5)`,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Scale animation
        gsap.to(block, {
            scale: `random(0.8, 1.2)`,
            duration: `random(0.5, 1.5)`,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// Function to handle start page
function handleStartPage() {
    const startPage = document.querySelector('.start-page');
    
    // Start animations
    createFallingBlocks();
    animateTextStroke();
    
    // Fade out start page after 5 seconds
    setTimeout(() => {
        startPage.classList.add('fade-out');
        
        // Remove from DOM after fade animation
        setTimeout(() => {
            startPage.remove();
        }, 500);
    }, 5000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    handleStartPage();
    createColorBlocks();
    setupPanelClose();
    placeCarImages();
    placeTextBoxes();
    animateTextures(); // Start texture animation

    // Add smooth scrolling effect
    const container = document.getElementById('container');
    let isScrolling = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isScrolling = false;
    });

    container.addEventListener('mouseup', () => {
        isScrolling = false;
    });

    container.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    const container = document.querySelector('.color-blocks');
    container.innerHTML = '';
    createColorBlocks();
});

// Function to get content for title
function getContentForTitle(title) {
    // This function should return the content for the given title
    // For now, it just returns a placeholder text
    return 'Content for ' + title + ' will be placed here from the document.';
}
