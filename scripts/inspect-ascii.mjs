import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.join(path.dirname(__dirname), 'src', 'content', 'blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

console.log(`Inspecting ${files.length} blog files...`);

for (const file of files) {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const matches = [...content.matchAll(/```[^\n]*\n([\s\S]*?┌─[\s\S]*?└─[\s\S]*?)\n```/g)];
  if (matches.length > 0) {
    console.log(`[REMAINING ASCII] ${file}: ${matches.length} box(es)`);
    for (const m of matches) {
      const firstLine = m[1].split('\n').find(l => l.includes('│') || l.includes('┌'));
      console.log(`   -> ${firstLine ? firstLine.replace(/[│┌└┐┘]/g, '').trim() : 'Box'}`);
    }
  }
}
