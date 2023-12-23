/**
 * Light theme object containing properties for the light theme.
 * @typedef {Object} LightTheme
 * @property {string} primaryColor - The primary color for the light theme.
 * @property {string} secondaryColor - The secondary color for the light theme.
 * @property {string} textColor - Common text color for light theme.
 * @property {string} backgroundColor - Common background color for light theme.
 * 
 */


/**
 * Dark theme object containing properties for the dark theme.
 * @typedef {Object} DarkTheme
 * @property {string} primaryColor - The primary color for the dark theme.
 * @property {string} secondaryColor - The secondary color for the dark theme.
 * @property {string} textColor - Common text color for dark theme.
 * @property {string} backgroundColor - Common background color for dark theme.
 * Other properties...
 */

/**
 * Light theme object containing properties for the light theme.
 * @type {LightTheme}
 */
export const lightTheme = {
    primaryColor: '#3498db',
    secondaryColor: '#2ecc71',
    textColor: '#333', // Common text color for light theme
    backgroundColor: '#FFF', // Common background color for light theme
    // Other light theme properties
  };
  
/**
 * Dark theme object containing properties for the dark theme.
 * @type {DarkTheme}
 */
  export const darkTheme = {
    primaryColor: '#9b59b6',
    secondaryColor: '#e74c3c',
    textColor: '#DDD', // Common text color for dark theme
    backgroundColor: '#111', // Common background color for dark theme
    // Other dark theme properties
  };
  