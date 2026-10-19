import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { render, projects } from '../.prerender/prerender.js'
const origin='https://navlesh-todkar-engineering.sharpbead16.chatgpt.site'
const template=await readFile('dist/index.html','utf8')
const paths=['/','/services','/contact',...projects.map(p=>`/projects/${p.slug}`)]
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;')
for(const path of [...paths,'/404']){
 const p=projects.find(p=>path===`/projects/${p.slug}`)
 const title=p?`${p.eyebrow} — Navlesh Todkar`:path==='/services'?'Services — Navlesh Todkar':path==='/contact'?'Contact — Navlesh Todkar':path==='/404'?'Page not found — Navlesh Todkar':'Navlesh Todkar — Flutter & Connected Systems'
 let html=template.replace('<div id="root"></div>',`<div id="root">${render(path)}</div>`).replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`).replace(/(<meta property="og:title" content=")[^"]*/,`$1${escape(title)}`).replace(/(<link rel="canonical" href=")[^"]*/,`$1${origin}${path}`)
 if(p) html=html.replace(/(<meta name="description" content=")[^"]*/,`$1${escape(p.summary)}`).replace(/(<meta property="og:description" content=")[^"]*/,`$1${escape(p.summary)}`)
 if(path==='/')html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Navlesh Todkar',jobTitle:'Software Developer',url:origin,email:'Navlesh0603@gmail.com'})}</script></head>`)
 const dir=path==='/'?'dist':`dist${path}`;await mkdir(dir,{recursive:true});await writeFile(`${dir}/index.html`,html)
 if(path==='/404')await writeFile('dist/404.html',html)
}
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${origin}${p}</loc></url>`).join('')}</urlset>`)
console.log(`Prerendered ${paths.length} routes and 404 page.`)
