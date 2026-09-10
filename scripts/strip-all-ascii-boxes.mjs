import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const blogDir = path.join(projectRoot, 'src', 'content', 'blog');

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
console.log(`Auditing and cleaning all ASCII boxes across ${files.length} blogs...`);

let cleanedFilesCount = 0;
let totalBoxesRemoved = 0;

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileModified = false;

  // Regex to match any fenced code block containing box-drawing characters
  const codeBlockRegex = /```[^\n]*\n([\s\S]*?)\n```/g;
  
  content = content.replace(codeBlockRegex, (match, blockContent) => {
    // Check if this code block contains box-drawing or ASCII diagram characters
    const hasBoxChars = /[┌└├┤┬┴┼]/.test(blockContent) || 
                        (/\+─+/.test(blockContent) && /│|\|/.test(blockContent));
    
    if (!hasBoxChars) {
      return match; // keep real code blocks (e.g. bash, yaml, json, python, rust)
    }

    totalBoxesRemoved++;
    fileModified = true;

    // Check if it's an ASCII table
    if (/[├┼]/.test(blockContent) && /[┬]/.test(blockContent)) {
      // Convert ASCII table to markdown table
      const lines = blockContent.split('\n')
        .map(l => l.trim())
        .filter(l => l.startsWith('│') && l.endsWith('│') && !l.includes('───'));
      
      if (lines.length >= 2) {
        const headerCells = lines[0].split('│').slice(1, -1).map(c => c.trim());
        const headerRow = `| ${headerCells.join(' | ')} |`;
        const separatorRow = `| ${headerCells.map(() => '---').join(' | ')} |`;
        const dataRows = lines.slice(1).map(l => {
          const cells = l.split('│').slice(1, -1).map(c => c.trim());
          return `| ${cells.join(' | ')} |`;
        });
        return `${headerRow}\n${separatorRow}\n${dataRows.join('\n')}`;
      }
    }

    // If it's an ASCII flowchart / architecture box:
    // Extract non-empty, non-border text lines
    const textLines = blockContent.split('\n')
      .map(l => l.replace(/[┌└┐┘│├┤┬┴┼─━═║\+\-]/g, '').trim())
      .filter(l => l.length > 0 && !/^[▼▲►◄\|]+$/.test(l));

    if (textLines.length <= 8 && textLines.length > 0) {
      const calloutContent = textLines.map(l => `> • ${l}`).join('\n');
      return `> [!NOTE]\n${calloutContent}`;
    }

    // For large redundant architecture ASCII blocks that duplicate the visual SVG:
    return '';
  });

  // Clean up any double blank lines caused by removal
  content = content.replace(/\n{4,}/g, '\n\n');

  if (fileModified) {
    fs.writeFileSync(filePath, content, 'utf8');
    cleanedFilesCount++;
    console.log(`[Cleaned ASCII] ${file}`);
  }
}

console.log(`\nFinished! Removed/converted ${totalBoxesRemoved} ASCII diagram boxes across ${cleanedFilesCount} files.`);
