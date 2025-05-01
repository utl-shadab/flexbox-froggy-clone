
        // Game Data
        const levels = [
            {
                title: "Level 1: Getting Started",
                description: "Use <code>justify-content</code> to center the frogs horizontally in the pond.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "justify-content: center;",
                startingCss: "display: flex;",
                hint: "Try adding <code>justify-content: center;</code> to the pond."
            },
            {
                title: "Level 2: Space Between",
                description: "Use <code>justify-content</code> to distribute the frogs with equal space between them.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "justify-content: space-between;",
                startingCss: "display: flex;",
                hint: "Try adding <code>justify-content: space-between;</code> to the pond."
            },
            {
                title: "Level 3: Align Items",
                description: "Use <code>align-items</code> to center the frogs vertically in the pond.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "align-items: center;",
                startingCss: "display: flex;",
                hint: "Try adding <code>align-items: center;</code> to the pond."
            },
            {
                title: "Level 4: Flex Direction",
                description: "Use <code>flex-direction</code> to arrange the frogs in a vertical column.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "flex-direction: column;",
                startingCss: "display: flex;",
                hint: "Try adding <code>flex-direction: column;</code> to the pond."
            },
            {
                title: "Level 5: Flex Wrap",
                description: "Use <code>flex-wrap</code> to make the frogs wrap to a new line when they run out of space.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div><div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "flex-wrap: wrap;",
                startingCss: "display: flex;",
                hint: "Try adding <code>flex-wrap: wrap;</code> to the pond."
            },
            {
                title: "Level 6: Align Content",
                description: "Use <code>align-content</code> to center multiple lines of frogs vertically.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div><div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "align-content: center; flex-wrap: wrap;",
                startingCss: "display: flex;",
                hint: "Try adding <code>align-content: center;</code> and <code>flex-wrap: wrap;</code> to the pond."
            },
            {
                title: "Level 7: Order Property",
                description: "Use <code>order</code> on individual frogs to rearrange them.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "",
                startingCss: "display: flex;",
                frogCss: [
                    { selector: ".frog:nth-child(1)", css: "order: 2;" },
                    { selector: ".frog:nth-child(2)", css: "order: 3;" },
                    { selector: ".frog:nth-child(3)", css: "order: 1;" }
                ],
                hint: "Try adding <code>order: 2;</code> to the first frog, <code>order: 3;</code> to the second, and <code>order: 1;</code> to the third."
            },
            {
                title: "Level 8: Flex Grow",
                description: "Use <code>flex-grow</code> to make the middle frog take up more space.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "",
                startingCss: "display: flex;",
                frogCss: [
                    { selector: ".frog:nth-child(2)", css: "flex-grow: 1;" }
                ],
                hint: "Try adding <code>flex-grow: 1;</code> to the middle frog."
            },
            {
                title: "Level 9: Align Self",
                description: "Use <code>align-self</code> to position individual frogs differently from the group.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "align-items: flex-start;",
                startingCss: "display: flex;",
                frogCss: [
                    { selector: ".frog:nth-child(2)", css: "align-self: flex-end;" }
                ],
                hint: "Add <code>align-items: flex-start;</code> to the pond and <code>align-self: flex-end;</code> to the middle frog."
            },
            {
                title: "Level 10: Final Challenge",
                description: "Combine all your Flexbox knowledge to create this complex layout.",
                html: `<div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div><div class="frog bg-green-500"></div><div class="frog bg-green-600"></div><div class="frog bg-green-700"></div>`,
                targetCss: "justify-content: space-around; align-content: space-between; flex-wrap: wrap;",
                startingCss: "display: flex;",
                hint: "Try combining <code>justify-content: space-around;</code>, <code>align-content: space-between;</code>, and <code>flex-wrap: wrap;</code>."
            }
        ];

        // Game State
        let currentLevel = 0;
        let completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || [];
        let soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        let galleryMedia = JSON.parse(localStorage.getItem('galleryMedia')) || [
            { id: 1, type: 'photo', src: 'https://images.unsplash.com/photo-1550853024-fae8cd4be47f?w=300&auto=format', title: 'nature.jpg' },
            { id: 2, type: 'video', src: '', title: 'tutorial.mp4', duration: '0:23' },
            { id: 3, type: 'gif', src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ0d2J0b3J5bW5jZzR1bG1xZ3J1d2V5b2Z0d2R6eW1tZ3J6eGZ5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMHxhOfscxPfIfm/giphy.gif', title: 'animation.gif' },
            { id: 4, type: 'audio', src: '', title: 'sound-effect.mp3' }
        ];

        // DOM Elements
        const pond = document.getElementById('pond');
        const targetPond = document.getElementById('targetPond');
        const cssEditor = document.getElementById('cssEditor');
        const runBtn = document.getElementById('runBtn');
        const resetBtn = document.getElementById('resetBtn');
        const prevLevelBtn = document.getElementById('prevLevel');
        const nextLevelBtn = document.getElementById('nextLevel');
        const levelTitle = document.getElementById('levelTitle');
        const levelDescription = document.getElementById('levelDescription');
        const levelCounter = document.getElementById('levelCounter');
        const feedback = document.getElementById('feedback');
        const hintBtn = document.getElementById('hintBtn');
        const progressBar = document.getElementById('progressBar');
        const completedLevelsDisplay = document.getElementById('completedLevels');
        const progressLevels = document.getElementById('progressLevels');
        const helpBtn = document.getElementById('helpBtn');
        const helpModal = document.getElementById('helpModal');
        const closeHelp = document.getElementById('closeHelp');
        const successModal = document.getElementById('successModal');
        const continueBtn = document.getElementById('continueBtn');
        const soundToggle = document.getElementById('soundToggle');
        const successSound = document.getElementById('successSound');
        const clickSound = document.getElementById('clickSound');
        ;

        // Initialize the game
        function initGame() {
            loadLevel(currentLevel);
            updateProgress();
            updateSoundToggle();
            renderGallery();
        }

        // Load a level
        function loadLevel(levelIndex) {
            const level = levels[levelIndex];
            
            // Update UI
            levelTitle.innerHTML = level.title;
            levelDescription.innerHTML = level.description;
            levelCounter.textContent = `Level ${levelIndex + 1} of ${levels.length}`;
            
            // Set up ponds
            pond.innerHTML = level.html;
            targetPond.innerHTML = level.html;
            
            // Set up CSS editor
            cssEditor.value = `#pond {\n    display: flex;\n    ${level.startingCss}\n}`;
            
            // Apply target CSS to target pond
            if (level.targetCss) {
                targetPond.style.cssText = `display: flex; ${level.targetCss}`;
            }
            
            // Apply individual frog CSS if specified
            if (level.frogCss) {
                level.frogCss.forEach(frog => {
                    const targetFrog = targetPond.querySelector(frog.selector);
                    if (targetFrog) {
                        targetFrog.style.cssText = frog.css;
                    }
                });
            }
            
            // Update navigation buttons
            prevLevelBtn.disabled = levelIndex === 0;
            nextLevelBtn.disabled = !completedLevels.includes(levelIndex) && levelIndex !== levels.length - 1;
            
            // Reset feedback
            feedback.classList.add('hidden');
            
            // Update progress bar
            progressBar.style.width = `${((levelIndex + 1) / levels.length) * 100}%`;
        }

        // Run the CSS from the editor
        function runCss() {
            if (soundEnabled) clickSound.play();
            
            try {
                const css = cssEditor.value;
                const safeCss = sanitizeCss(css);
                
                // Apply to pond
                const styleParts = safeCss.split('{');
                if (styleParts.length > 1) {
                    const cssContent = styleParts[1].replace('}', '').trim();
                    pond.style.cssText = `display: flex; ${cssContent}`;
                    
                    // Check if level is completed
                    checkLevelCompletion();
                }
            } catch (e) {
                console.error("Error applying CSS:", e);
            }
        }

        // Sanitize CSS input
        function sanitizeCss(css) {
            // Only allow flexbox-related properties
            const allowedProperties = [
                'display', 'flex-direction', 'justify-content', 'align-items', 'align-content',
                'flex-wrap', 'order', 'flex-grow', 'flex-shrink', 'flex-basis', 'align-self',
                'gap', 'row-gap', 'column-gap'
            ];
            
            // Remove any potentially harmful characters
            let safeCss = css.replace(/[<>"'`]/g, '');
            
            // Filter out non-flexbox properties
            safeCss = safeCss.replace(/[a-zA-Z-]+(?=:)/g, match => {
                return allowedProperties.includes(match) ? match : '';
            });
            
            return safeCss;
        }

        // Check if the current level is completed
        function checkLevelCompletion() {
            const level = levels[currentLevel];
            const computedPondStyle = window.getComputedStyle(pond);
            const computedTargetStyle = window.getComputedStyle(targetPond);
            
            // Check main container properties
            let mainPropertiesMatch = true;
            if (level.targetCss) {
                const targetProps = level.targetCss.split(';').map(prop => prop.trim());
                targetProps.forEach(prop => {
                    if (prop) {
                        const [name, value] = prop.split(':').map(p => p.trim());
                        if (computedPondStyle[name] !== computedTargetStyle[name]) {
                            mainPropertiesMatch = false;
                        }
                    }
                });
            }
            
            // Check individual frog properties if specified
            let frogPropertiesMatch = true;
            if (level.frogCss) {
                for (const frog of level.frogCss) {
                    const frogElement = pond.querySelector(frog.selector);
                    const targetFrog = targetPond.querySelector(frog.selector);
                    
                    if (frogElement && targetFrog) {
                        const frogProps = frog.css.split(';').map(prop => prop.trim());
                        frogProps.forEach(prop => {
                            if (prop) {
                                const [name, value] = prop.split(':').map(p => p.trim());
                                if (window.getComputedStyle(frogElement)[name] !== window.getComputedStyle(targetFrog)[name]) {
                                    frogPropertiesMatch = false;
                                }
                            }
                        });
                    }
                }
            }
            
            // If everything matches, level is complete
            if (mainPropertiesMatch && frogPropertiesMatch) {
                completeLevel();
            }
        }

        // Complete the current level
        function completeLevel() {
            if (!completedLevels.includes(currentLevel)) {
                completedLevels.push(currentLevel);
                localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
            }
            
            feedback.classList.remove('hidden');
            nextLevelBtn.disabled = false;
            
            if (soundEnabled) successSound.play();
            
            // Show success modal if not the last level
            if (currentLevel < levels.length - 1) {
                setTimeout(() => {
                    successModal.classList.remove('hidden');
                }, 500);
            } else {
                // Last level completed
                setTimeout(() => {
                    successModal.querySelector('h3').textContent = "Game Complete!";
                    successModal.querySelector('p').textContent = "Congratulations! You've mastered CSS Flexbox!";
                    continueBtn.textContent = "Play Again";
                    successModal.classList.remove('hidden');
                }, 500);
            }
            
            updateProgress();
        }

        // Update progress display
        function updateProgress() {
            completedLevelsDisplay.textContent = completedLevels.length;
            progressLevels.style.width = `${(completedLevels.length / levels.length) * 100}%`;
        }

        // Toggle sound
        function toggleSound() {
            soundEnabled = !soundEnabled;
            localStorage.setItem('soundEnabled', soundEnabled);
            updateSoundToggle();
        }

        // Update sound toggle button
        function updateSoundToggle() {
            if (soundEnabled) {
                soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            } else {
                soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            }
        }

        // Render gallery
        function renderGallery(filter = 'all') {
            galleryContent.innerHTML = '';
            
            galleryMedia.forEach(media => {
                if (filter === 'all' || media.type === filter) {
                    const mediaElement = document.createElement('div');
                    mediaElement.className = `gallery-item ${media.type}`;
                    mediaElement.dataset.id = media.id;
                    
                    let mediaContent = '';
                    if (media.type === 'photo' || media.type === 'gif') {
                        mediaContent = `<img src="${media.src}" alt="${media.title}" class="w-full h-32 object-cover rounded">`;
                    } else if (media.type === 'video') {
                        mediaContent = `
                            <div class="relative w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                                <i class="fas fa-play-circle text-3xl text-gray-500"></i>
                                ${media.duration ? `<span class="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-1 rounded">${media.duration}</span>` : ''}
                            </div>
                        `;
                    } else if (media.type === 'audio') {
                        mediaContent = `
                            <div class="w-full h-32 bg-gray-100 rounded flex items-center justify-center">
                                <i class="fas fa-music text-3xl text-gray-500"></i>
                            </div>
                        `;
                    }
                    
                    mediaElement.innerHTML = `
                        ${mediaContent}
                        <div class="flex justify-between items-center mt-1">
                            <span class="text-xs text-gray-500 truncate">${media.title}</span>
                            <button class="delete-media text-red-400 hover:text-red-600">
                                <i class="fas fa-trash text-xs"></i>
                            </button>
                        </div>
                    `;
                    
                    galleryContent.appendChild(mediaElement);
                }
            });
            
            // Add event listeners to delete buttons
            document.querySelectorAll('.delete-media').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const mediaId = parseInt(btn.closest('.gallery-item').dataset.id);
                    deleteMedia(mediaId);
                });
            });
        }

        // Handle media upload
        function handleMediaUpload(e) {
            const files = e.target.files;
            
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const fileType = file.type.split('/')[0];
                let mediaType = '';
                
                if (fileType === 'image') {
                    if (file.type === 'image/gif') {
                        mediaType = 'gif';
                    } else {
                        mediaType = 'photo';
                    }
                } else if (fileType === 'video') {
                    mediaType = 'video';
                } else if (fileType === 'audio') {
                    mediaType = 'audio';
                } else {
                    continue; // Skip unsupported types
                }
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    const newMedia = {
                        id: Date.now() + i,
                        type: mediaType,
                        src: e.target.result,
                        title: file.name,
                        duration: mediaType === 'video' ? '0:00' : undefined
                    };
                    
                    galleryMedia.push(newMedia);
                    localStorage.setItem('galleryMedia', JSON.stringify(galleryMedia));
                    renderGallery(document.querySelector('.gallery-tab.bg-blue-100').dataset.type);
                };
                
                if (mediaType === 'photo' || mediaType === 'gif') {
                    reader.readAsDataURL(file);
                } else {
                    // For videos and audio, we just store the metadata
                    const newMedia = {
                        id: Date.now() + i,
                        type: mediaType,
                        src: '',
                        title: file.name,
                        duration: mediaType === 'video' ? '0:00' : undefined
                    };
                    
                    galleryMedia.push(newMedia);
                    localStorage.setItem('galleryMedia', JSON.stringify(galleryMedia));
                    renderGallery(document.querySelector('.gallery-tab.bg-blue-100').dataset.type);
                }
            }
        }

        // Delete media from gallery
        function deleteMedia(id) {
            galleryMedia = galleryMedia.filter(media => media.id !== id);
            localStorage.setItem('galleryMedia', JSON.stringify(galleryMedia));
            renderGallery(document.querySelector('.gallery-tab.bg-blue-100').dataset.type);
        }

        // Event Listeners
        runBtn.addEventListener('click', runCss);
        resetBtn.addEventListener('click', () => {
            if (soundEnabled) clickSound.play();
            loadLevel(currentLevel);
        });
        
        prevLevelBtn.addEventListener('click', () => {
            if (soundEnabled) clickSound.play();
            if (currentLevel > 0) {
                currentLevel--;
                loadLevel(currentLevel);
            }
        });
        
        nextLevelBtn.addEventListener('click', () => {
            if (soundEnabled) clickSound.play();
            if (currentLevel < levels.length - 1) {
                currentLevel++;
                loadLevel(currentLevel);
            } else {
                // Restart game if last level
                currentLevel = 0;
                completedLevels = [];
                localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
                loadLevel(currentLevel);
            }
        });
        
        hintBtn.addEventListener('click', () => {
            if (soundEnabled) clickSound.play();
            const hint = levels[currentLevel].hint;
            alert(hint.replace(/<[^>]*>/g, ''));
        });
        
        helpBtn.addEventListener('click', () => {
            if (soundEnabled) clickSound.play();
            helpModal.classList.remove('hidden');
        });
        
        closeHelp.addEventListener('click', () => {
            if (soundEnabled) clickSound.play();
            helpModal.classList.add('hidden');
        });
        
        continueBtn.addEventListener('click', () => {
            if (soundEnabled) clickSound.play();
            successModal.classList.add('hidden');
            if (currentLevel < levels.length - 1) {
                currentLevel++;
                loadLevel(currentLevel);
            } else {
                // Restart game if last level
                currentLevel = 0;
                completedLevels = [];
                localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
                loadLevel(currentLevel);
            }
        });
        
        soundToggle.addEventListener('click', toggleSound);
        
        
        
        // Initialize the game
        initGame();
    