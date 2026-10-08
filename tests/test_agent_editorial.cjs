const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const guides = fs.readdirSync(path.join(root, 'guias'), {withFileTypes:true}).filter(d => d.isDirectory()).map(d => path.join(root, 'guias', d.name, 'index.html')).filter(f => fs.existsSync(f) && fs.readFileSync(f,'utf8').includes('data-editorial-body'));
assert(guides.length > 0);
for (const file of guides) {
  const html = fs.readFileSync(file,'utf8');
  const body = html.match(/<div data-editorial-body>([\s\S]*)<\/div><p class="editorial-recommendation">/)[1];
  const words = body.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().split(' ').length;
  assert(words >= 800 && words <= 1200, file + ': ' + words);
  assert.equal((html.match(/<h1>/g)||[]).length,1);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(schema.author['@type'],'Organization');
  assert.equal(schema.inLanguage,'es');
  for (const anchor of body.matchAll(/href="#([^"]+)"/g)) assert(body.includes('id="'+anchor[1]+'"'));
  const url = new URL(schema.mainEntityOfPage).pathname;
  for (const entry of ['index.html','guias/index.html','sitemap.xml']) assert(fs.readFileSync(path.join(root,entry),'utf8').includes(url));
  console.log(path.basename(path.dirname(file))+': '+words+' words; headings, schema, anchors and discovery PASS');
}
