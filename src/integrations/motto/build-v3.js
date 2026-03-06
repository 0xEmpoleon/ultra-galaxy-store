const fs = require('fs');
const cheerio = require('cheerio');

// Load the raw DOM snapshot
const html = fs.readFileSync('_raw/dom-snapshot.html', 'utf-8');
const $ = cheerio.load(html);

// Remove unwanted tracking scripts to keep it clean
$('script[src*="hsadspixel"], script[src*="hs-analytics"], script[src*="hs-banner"], script[src*="hscollectedforms"]').remove();
$('script[src*="facebook.net"], script[src*="hotjar.com"], script[src*="googletagmanager"], script[src*="googleads"]').remove();
$('script[src*="akismet"]').remove();
$('iframe').remove();
$('noscript').remove();

// Make sure our local extracted CSS is loaded
// Also add simple setup for the font / base styles in case external fails
$('head').append('<link rel="stylesheet" href="./style.css">');

// We are cloning the structure exactly.
// Modify the site-head logo link to point to storefront root for navigation ease
$('.site-head__logo').parent('a').attr('href', '/');

// Modify the 'Clients' link so it doesn't just reload the remote page if clicked
$('a:contains("Clients")').attr('href', '/src/integrations/motto/index.html');

// Create the final HTML document with the exact same <html> and <body> attributes
const outHtml = `
<!DOCTYPE html>
<html lang="${$('html').attr('lang') || 'en-US'}" class="${$('html').attr('class') || ''}" style="${$('html').attr('style') || ''}">
<head>
  ${$('head').html()}
</head>
<body class="${$('body').attr('class') || ''}" style="${$('body').attr('style') || ''}">
  ${$('body').html()}
</body>
</html>
`;

fs.writeFileSync('index.html', outHtml);
console.log('Successfully built index.html from dom-snapshot.html');
