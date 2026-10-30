const {chromium}=require('../../../../Apps/The-Pulse/node_modules/playwright-core');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const expected=require('../mockups/native-reference-metrics.json');
const base=process.env.CHANNEL_DEMO_BASE||'http://127.0.0.1:8848/mockups/';
const out=path.resolve(__dirname,'../output/premium-review/pixel-reference');fs.mkdirSync(out,{recursive:true});
const report={timestamp:new Date().toISOString(),base,checks:[],errors:[]};
const near=(name,a,b)=>{assert.ok(Math.abs(a-b)<0.02,`${name}: actual ${a}, native reference ${b}`);report.checks.push({name,actual:a,reference:b});};
(async()=>{const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});try{
for(const variant of ['current','proposed']){
 const page=await browser.newPage({viewport:{width:2269,height:1349+(variant==='proposed'?90:54)}});page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto(base+(variant==='current'?'COMM-005-current-behavior.html':'COMM-005-proposed-product-link.html')+'?scenario=admin');await page.evaluate(()=>document.fonts.ready);
 near(variant+' settings width',await page.locator('[role=dialog]').evaluate(e=>e.getBoundingClientRect().width),expected.settings.width);
 near(variant+' settings height',await page.locator('[role=dialog]').evaluate(e=>e.getBoundingClientRect().height),expected.settings.height);
 await page.locator('[data-action=editChannel]').click();
 const actual=await page.locator('[role=dialog]').evaluate(e=>{const r=e.getBoundingClientRect(),rect=x=>{const a=x.getBoundingClientRect();return {y:a.y-r.y,height:a.height,width:a.width};};return {width:r.width,height:r.height,fields:[...e.querySelectorAll('.edit-field')].map(rect),input:rect(e.querySelector('#editName')),description:rect(e.querySelector('.description-input')),card:rect(e.querySelector('.visibility-card')),toggle:rect(e.querySelector('.switch-track')),save:rect(e.querySelector('[data-action=saveChannel]')),title:{size:parseFloat(getComputedStyle(e.querySelector('h2')).fontSize),line:parseFloat(getComputedStyle(e.querySelector('h2')).lineHeight)},font:getComputedStyle(e).fontFamily};});
 near(variant+' edit width',actual.width,expected.edit.width);near(variant+' edit height',actual.height,expected.edit.height);
 actual.fields.forEach((f,i)=>{near(`${variant} field ${i+1} top`,f.y,expected.edit.fields[i].y);near(`${variant} field ${i+1} height`,f.height,expected.edit.fields[i].height);});
 near(variant+' input height',actual.input.height,expected.edit.inputHeight);near(variant+' description height',actual.description.height,expected.edit.descriptionHeight);near(variant+' visibility card',actual.card.height,expected.edit.visibilityCardHeight);near(variant+' switch width',actual.toggle.width,expected.edit.switchWidth);near(variant+' switch height',actual.toggle.height,expected.edit.switchHeight);near(variant+' save width',actual.save.width,expected.edit.saveWidth);near(variant+' save height',actual.save.height,expected.edit.saveHeight);near(variant+' title size',actual.title.size,expected.edit.titleFontSize);near(variant+' title line height',actual.title.line,expected.edit.titleLineHeight);assert.ok(actual.font.includes(expected.fontFamily));
 await page.screenshot({path:path.join(out,variant+'-edit-verified.png')});
 await page.setViewportSize({width:390,height:844});assert.ok(await page.locator('[role=dialog]').evaluate(e=>e.scrollWidth<=e.clientWidth));await page.screenshot({path:path.join(out,variant+'-edit-mobile.png')});await page.close();
}
assert.equal(report.errors.length,0);report.result='PASS';
}catch(e){report.result='FAIL';report.failure=e.stack;process.exitCode=1;}finally{await browser.close();fs.writeFileSync(path.join(out,'geometry-verification.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({result:report.result,checks:report.checks.length,errors:report.errors,failure:report.failure}));}})();
