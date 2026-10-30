// Uses the Universe checkout's existing Playwright dependency; no install needed.
const {chromium}=require('../../../../Apps/The-Pulse/node_modules/playwright-core');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const base=process.env.CHANNEL_DEMO_BASE||'http://127.0.0.1:8848/mockups/';
const out=path.resolve(__dirname,'../output/premium-review');fs.mkdirSync(out,{recursive:true});
const report={timestamp:new Date().toISOString(),base,checks:[],errors:[]};
const check=(name,value)=>{assert.ok(value,name);report.checks.push(name);};
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400)report.errors.push(`${r.status()} ${r.url()}`);});
 const a=x=>page.locator(`[data-action="${x}"]`).click(),s=x=>page.locator(`[data-scenario="${x}"]`).click(),t=x=>page.locator(`[data-tab="${x}"]`).click();
 const shot=async name=>{await page.locator('#toast').waitFor({state:'hidden'});await page.screenshot({path:path.join(out,name+'.png'),fullPage:true});};
 try{
  await page.goto(base+'COMM-005-proposed-product-link.html');await a('reset');
  check('Locked posts absent from DOM',await page.locator('.feed-post').count()===0);
  await s('existing');await a('existingSignIn');await a('unmatchedBuyer');
  check('Existing member without purchase stays locked',await page.locator('.feed-post').count()===0&&(await page.locator('.status-banner').innerText()).includes('No qualifying purchase'));
  await a('existingSignIn');await a('expiredBuyer');check('Expired existing bonus does not restart on sign-in',await page.locator('.feed-post').count()===0&&(await page.locator('.status-banner').innerText()).includes('does not restart'));
  await a('existingSignIn');await a('recognizeBuyer');
  check('Existing buyer enters without new checkout',await page.locator('.feed-post').count()===2&&await page.locator('[role=dialog]').count()===0&&(await page.locator('.status-banner').innerText()).includes('No new order'));
  await s('order');check('Existing purchase retains original order and source',(await page.locator('[role=dialog]').innerText()).includes('DEMO-EXISTING-1000')&&(await page.locator('[role=dialog]').innerText()).includes('Original course sales funnel'));await page.keyboard.press('Escape');
  await s('bundle');await page.locator('#bundleLibraryRow').click();check('Second channel starts locked',await page.locator('.feed-post').count()===0);await a('buyBundle');
  check('Single order lists both channel benefits',(await page.locator('[role=dialog]').innerText()).includes('Course Library')&&(await page.locator('[role=dialog]').innerText()).includes('90 days'));
  await a('confirmBundle');check('Same purchase unlocks library',(await page.locator('#channelContent').innerText()).includes('Lifetime access · same Club Course purchase'));
  await a('bundleEvents');check('Same purchase unlocks meeting feed',await page.locator('.feed-post,.featured-card').count()===3);await a('expireBundle');
  check('Meeting bonus expiry locks only meetings',await page.locator('.featured-card').count()===0&&(await page.locator('#channelContent').innerText()).includes('meeting bonus has expired'));
  await page.locator('#bundleLibraryRow').click();check('Lifetime library survives meeting expiry',(await page.locator('#channelContent').innerText()).includes('Lifetime access · same Club Course purchase'));
  await s('order');check('Bundle remains a single source order',(await page.locator('[role=dialog]').innerText()).includes('DEMO-BUNDLE-1002'));await page.keyboard.press('Escape');
  await s('admin');await t('pricing');await page.locator('#duration0').selectOption('custom');await page.locator('#days0').fill('45');await a('savePricing');
  check('Custom days reach guest offer',(await page.locator('.offer-row').innerText()).includes('45 days'));await page.reload();check('Custom days survive reload',(await page.locator('.offer-row').innerText()).includes('45 days'));
  await a('offer');check('Custom days reach checkout',(await page.locator('[role=dialog]').innerText()).includes('45 days'));await page.keyboard.press('Escape');
  await s('admin');await t('pricing');
  for(const invalid of ['0','-1','1.5','']){await page.locator('#days0').fill(invalid);await a('savePricing');check('Invalid custom duration rejected: '+(invalid||'empty'),await page.locator('#settingsError').isVisible());}
  await page.keyboard.press('Escape');await a('reset');

  await s('admin');await t('pricing');await a('addOffer');await a('savePricing');
  check('Saved mappings produce two offer choices',await page.locator('[data-action="offer"]').count()===2);
  await page.reload();check('Settings survive reload',await page.locator('[data-action="offer"]').count()===2);
  await page.locator('[data-action="offer"][data-offer="membership"]').click();
  check('Offer opens its existing sales-page handoff',await page.locator('[data-action="continueCheckout"]').count()===1);
  await a('continueCheckout');check('Chosen product reaches matching checkout',(await page.locator('[role=dialog]').innerText()).includes('€29'));
  await a('failPayment');check('Payment failure leaves access locked',await page.locator('#checkoutError').isVisible()&&await page.locator('.feed-post').count()===0);
  await a('pay');check('Successful purchase returns to three-post feed',await page.locator('.feed-post,.featured-card').count()===3&&await page.locator('[role=dialog]').count()===0);
  await s('order');check('Order identifies purchased membership',(await page.locator('[role=dialog]').innerText()).includes('Club Membership'));await a('returnFeed');
  await s('overlap');await a('expireBonus');check('Bonus expiry retains membership access',await page.locator('.feed-post').count()===2&&(await page.locator('.status-banner').innerText()).includes('stays unlocked'));
  await a('endMembership');check('Last grant removal relocks posts',await page.locator('.feed-post').count()===0&&await page.locator('[data-action=offer]').count()===2);
  await s('admin');await t('pricing');await page.locator('#offer1').selectOption('course');await a('savePricing');check('Duplicate mapping is rejected',await page.locator('#settingsError').isVisible());await page.keyboard.press('Escape');
  await s('admin');await a('editChannel');await page.locator('#editName').fill('Club calls');await page.locator('#editIcon').selectOption('⭐');await a('saveChannel');
  check('Channel Edit updates name and icon',(await page.locator('#channelName').innerText())==='Club calls'&&(await page.locator('#channelIcon').innerText())==='⭐');
  await t('members');await page.locator('#memberSearch').fill('nobody');check('Member search filters list',await page.locator('#memberList .admin-line:visible').count()===0);await page.keyboard.press('Escape');
  await s('admin');await t('pricing');await page.locator('input[name=mode][value=free]').check();await a('savePricing');await a('request');check('Free request is pending, not unlocked',await page.locator('[data-action=request]').isDisabled()&&await page.locator('.feed-post').count()===0);
  await s('admin');await a('editChannel');await page.locator('#editVisibility').selectOption('hidden');await a('saveChannel');await page.keyboard.press('Escape');
  check('Hidden channel disappears for nonmember',!await page.locator('#channelRow').isVisible()&&await page.locator('.feed-post').count()===0);
  await s('admin');await a('managers');await page.locator('#addManager').check();await a('saveManagers');check('Manager addition updates list',(await page.locator('#sampleMember').innerText()).includes('Manager'));await page.keyboard.press('Escape');
  await a('reset');await shot('proposed-locked');await s('admin');await t('pricing');await a('addOffer');await shot('proposed-settings');await a('savePricing');await s('unlocked');await shot('proposed-unlocked');
  for(const width of [1920,1024,390]){await page.setViewportSize({width,height:width===390?844:1080});await s('locked');check(`Toolbar does not cover app header at ${width}`,await page.evaluate(()=>document.querySelector('.demo-bar').getBoundingClientRect().bottom<=document.querySelector('.topbar').getBoundingClientRect().top));check(`No page overflow at ${width}`,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await s('admin');await t('pricing');check(`Settings fit viewport at ${width}`,await page.locator('[role=dialog]').evaluate(el=>{const r=el.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight;}));await page.keyboard.press('Escape');if(width===390)await shot('proposed-mobile');}
  await page.setViewportSize({width:1440,height:1000});await page.goto(base+'COMM-005-current-behavior.html');await a('reset');
  check('Current uses channel checkout, not products',await page.locator('[data-action=checkout]').count()===1&&await page.locator('[data-action=offer]').count()===0);
  await a('checkout');await page.locator('input[value=annual]').check();check('Annual billing updates total',(await page.locator('#checkoutTotal').innerText()).includes('290 / year'));await page.keyboard.press('Escape');
  await s('free');check('Current free-visible does not invent request button',await page.locator('[data-action=request]').count()===0);
  await s('admin');await t('pricing');check('Current pricing has three native modes',await page.locator('input[name=mode]').count()===3);await page.locator('input[value=oneTime]').check();await a('savePricing');await a('checkout');check('One-time selection opens one-time checkout',(await page.locator('[role=dialog]').innerText()).includes('One-time channel purchase'));await page.keyboard.press('Escape');
  await s('admin');await t('pricing');await page.locator('input[value=recurring]').check();await page.locator('#currency').selectOption('USD');await page.locator('#monthly').fill('39');await a('savePricing');await a('checkout');check('Saved currency and price reach checkout',(await page.locator('#checkoutTotal').innerText()).includes('$39'));await page.keyboard.press('Escape');
  await s('admin');await a('editChannel');await page.locator('#editReadonly').check();await a('saveChannel');await page.keyboard.press('Escape');await s('unlocked');check('Read-only channel hides member composer',await page.locator('.composer').count()===0);
  await a('reset');await shot('current-locked');
  await page.goto(base+'COMM-005-proposed-product-link.html');await a('reset');await s('embedded');await a('completeEmbedded');
  check('Incomplete embedded form keeps channel locked',await page.locator('#embeddedAccessForm').count()===1&&await page.locator('.feed-post').count()===0);
  await page.locator('#accessAnswer').fill('Prepare for the next Club meeting');await a('completeEmbedded');
  check('Embedded form completion unlocks without a workflow',await page.locator('.feed-post').count()===2);await s('order');check('Free completion logs activity without inventing an order',(await page.locator('[role=dialog]').innerText()).includes('No order or payment was needed'));await page.keyboard.press('Escape');
  await s('admin');await t('pricing');await page.locator('input[value=custom]').check();await page.locator('#customKind').selectOption('quiz');await a('savePricing');
  check('Selected existing quiz appears inline',await page.locator('select#accessAnswer').count()===1);await page.locator('#accessAnswer').selectOption('Events');await a('completeEmbedded');check('Quiz completion grants access',await page.locator('.feed-post').count()===2);
  await s('admin');await t('pricing');await page.locator('#customKind').selectOption('survey');await page.locator('#customLayout').selectOption('popup');await a('savePricing');await a('openEmbedded');await page.locator('#accessAnswer').fill('Discuss the next Club call');await a('completeEmbedded');check('Survey popup completion closes popup and unlocks feed',await page.locator('[role=dialog]').count()===0&&await page.locator('.feed-post').count()===2);
  await s('admin');await t('pricing');await page.locator('#customKind').selectOption('form');await page.locator('#customAsset').selectOption('coursePayment');await page.locator('#customLayout').selectOption('inline');await a('savePricing');await page.locator('#accessAnswer').fill('Join the course and Club calls');await a('embeddedPaymentFailure');check('Embedded failed payment does not unlock access',await page.locator('#embeddedError').isVisible()&&await page.locator('.feed-post').count()===0);await a('completeEmbedded');await s('order');check('Paid embedded form preserves the actual product order',(await page.locator('[role=dialog]').innerText()).includes('Club Course · Full access')&&(await page.locator('[role=dialog]').innerText()).includes('Embedded form'));await page.keyboard.press('Escape');
  await s('admin');await t('pricing');await page.locator('#customMethod').selectOption('external');await page.locator('#customUrl').fill('javascript:alert(1)');await a('savePricing');check('External destination must be a valid web URL',await page.locator('#settingsError').isVisible());await page.locator('#customUrl').fill('https://ivodimitrovpro.github.io/highlevel-product-feedback/');await page.locator('#customButton').fill('Explore Club course');await a('savePricing');
  check('External path shows only description and CTA',await page.locator('[data-action=externalFunnel]').count()===1&&await page.locator('.offer-row,#embeddedAccessForm').count()===0);await a('externalFunnel');await a('returnFromFunnel');check('Visiting a funnel without completion keeps channel locked',await page.locator('.feed-post').count()===0);await a('externalFunnel');await a('completeExternal');check('Verified external purchase returns to unlocked channel',await page.locator('.feed-post').count()===2);await s('order');check('External purchase retains original funnel attribution',(await page.locator('[role=dialog]').innerText()).includes('Original external funnel'));await page.keyboard.press('Escape');
  await s('admin');await t('pricing');await page.locator('#customConfirmation').selectOption('none');await a('savePricing');await a('externalFunnel');check('Link-only path does not promise automatic access',await page.locator('[data-action=completeExternal]').count()===0);await a('returnFromFunnel');await a('reset');
  await page.setViewportSize({width:390,height:844});await s('embedded');check('Mobile embedded form fits the page',await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.locator('#accessAnswer').fill('Prepare for Club meetings');await a('completeEmbedded');check('Mobile embedded completion opens feed',await page.locator('.feed-post').count()===2);await s('external');await a('externalFunnel');check('Mobile external handoff fits the dialog',await page.locator('[role=dialog]').evaluate(el=>el.scrollWidth<=el.clientWidth));await a('returnFromFunnel');await a('reset');await page.setViewportSize({width:1440,height:1000});
  await page.goto(base+'index.html');check('Guide opens both executable demos',await page.locator('a[href*="COMM-005-"]').count()===2);
  check('No runtime/network errors',report.errors.length===0);report.result='PASS';
 }catch(e){report.result='FAIL';report.failure=e.stack;process.exitCode=1;}
 finally{fs.writeFileSync(path.join(out,'verification.json'),JSON.stringify(report,null,2));await browser.close();console.log(JSON.stringify(report,null,2));}
})().catch(e=>{console.error(e);process.exitCode=1;});
