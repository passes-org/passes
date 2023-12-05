/**
 * Attempts to return the URL of the favicon for the given URL.
 * @param {string} urlString 
 * @returns {Promise<string | null>}
 */
export async function fetchFaviconUrl(urlString) {
  // List of common favicon file names
  const faviconFiles = ['favicon.ico', 'favicon.svg', 'icon.png', 'favicon.svg', 'icon.svg'];
  
  // Parse the URL to get the hostname
  const url = new URL(urlString);
  const baseUrl = `${url.protocol}//${url.hostname}/`;
  
  // Attempt to fetch each favicon file
  for (const file of faviconFiles) {
    const faviconUrl = baseUrl + file;
    const response = await fetch(faviconUrl, { method: 'GET', mode: 'no-cors' });
    
    // If the response is successful, return the URL
    if (response.ok) {
      return faviconUrl;
    }
  }
  
  throw new Error('No favicon found');
}