const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log("Fetching button code...");
    await page.goto('https://21st.dev/community/components/aliimam/liquid-glass-button/default', { waitUntil: 'networkidle' });
    const codeBlocks1 = await page.$$eval('code', els => els.map(e => e.textContent));
    fs.writeFileSync('liquid-button-code.txt', JSON.stringify(codeBlocks1, null, 2));
    
    console.log("Fetching background code...");
    await page.goto('https://21st.dev/community/components/meghtrix/background-components/teal-glow-right', { waitUntil: 'networkidle' });
    const codeBlocks2 = await page.$$eval('code', els => els.map(e => e.textContent));
    fs.writeFileSync('teal-glow-code.txt', JSON.stringify(codeBlocks2, null, 2));
    console.log("Done");
  } catch(e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
