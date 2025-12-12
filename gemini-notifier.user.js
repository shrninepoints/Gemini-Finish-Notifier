// ==UserScript==
// @name         Gemini Finish Sound
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Plays a clean notification sound when Gemini finishes.
// @author       Gemini
// @match        https://gemini.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const soundURL = 'https://actions.google.com/sounds/v1/cartoon/pop.ogg';

    const volumeLevel = 0.5; // Adjust volume (0.1 to 1.0)
    // ---------------------

    const chime = new Audio(soundURL);
    chime.volume = volumeLevel;

    let wasGenerating = false;

    // Check status every 100ms
    setInterval(() => {
        // Method A: Check for the specific "stop" icon name
        const stopIconName = document.querySelector('[data-mat-icon-name="stop"]');

        // Method B: Backup check for the square "Stop" shape
        const stopIconSvg = document.querySelector('path[d^="M6 6h12v12H6z"]');

        const isGenerating = !!(stopIconName || stopIconSvg);

        // If we were generating, but stopped -> Play Sound
        if (!isGenerating && wasGenerating) {
            chime.play().catch(e => {
                // Fail silently if browser blocks auto-play
            });
        }

        wasGenerating = isGenerating;

    }, 100);
})();
