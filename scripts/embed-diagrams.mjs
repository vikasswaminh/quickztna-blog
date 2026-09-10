import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const blogDir = path.join(projectRoot, 'src', 'content', 'blog');
const genScriptPath = path.join(projectRoot, 'scripts', 'generate-diagrams.mjs');

// Extract blogs metadata mapping from generate-diagrams.mjs
const genContent = fs.readFileSync(genScriptPath, 'utf8');
const blogDefs = {};

// Parse slug and hub from generate-diagrams.mjs
const blogBlocks = genContent.split(/\{\s*slug:\s*'/);
for (let i = 1; i < blogBlocks.length; i++) {
  const block = blogBlocks[i];
  const slugMatch = block.match(/^([^']+)'/);
  const hubMatch = block.match(/hub:\s*'([^']+)'/);
  const titleMatch = block.match(/title:\s*'([^']+)'/);
  if (slugMatch) {
    const slug = slugMatch[1];
    blogDefs[slug] = {
      hub: hubMatch ? hubMatch[1] : 'Policy Decision Point & Encrypted Mesh',
      title: titleMatch ? titleMatch[1] : slug
    };
  }
}

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
console.log(`Processing ${files.length} blog posts...`);

let processedCount = 0;

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already embedded
  if (content.includes(`/images/diagrams/${slug}-flow.svg`)) {
    console.log(`[Skipping] ${slug} - already contains diagrams.`);
    continue;
  }

  // Extract title from frontmatter
  const titleMatch = content.match(/^title:\s*(.+)$/m);
  const title = titleMatch ? titleMatch[1].replace(/['"]/g, '').trim() : slug;
  const hub = blogDefs[slug]?.hub || 'Policy Broker & Encrypted Mesh';

  const flowTag = `![Data Flow Diagram: ${title}](/images/diagrams/${slug}-flow.svg)\n*Figure 1.1: Zero-Level Data Flow Diagram (DFD) — ${hub} & Protocol Ingestion Topology.*`;
  const archTag = `![System Design Architecture: ${title}](/images/diagrams/${slug}-architecture.svg)\n*Figure 1.2: End-to-End System Design Architecture Blueprint — Decoupled Control Plane & WireGuard Mesh Topology.*`;

  // ── Placement of Diagram 1 (Flow / Protocol Diagram) ──────────────────────────
  // Best location: After comparison table or ASCII box in introduction, before deep-dive sections.
  let flowInserted = false;

  // Check for ASCII box in intro
  const asciiBoxMatch = content.match(/```[\r\n]+┌─[\s\S]*?└─[\s\S]*?```/);
  if (asciiBoxMatch && asciiBoxMatch.index < 3000) {
    const insertPos = asciiBoxMatch.index + asciiBoxMatch[0].length;
    content = content.slice(0, insertPos) + '\n\n' + flowTag + '\n' + content.slice(insertPos);
    flowInserted = true;
  }

  // If no ASCII box, check for introductory table in the first 2500 chars
  if (!flowInserted) {
    const tableMatch = content.match(/\|[^\r\n]+\|\s*[\r\n]+\|[-:| ]+\|\s*[\r\n]+(?:\|[^\r\n]+\|[\r\n]+)+/);
    if (tableMatch && tableMatch.index < 3500) {
      const insertPos = tableMatch.index + tableMatch[0].length;
      content = content.slice(0, insertPos) + '\n\n' + flowTag + '\n' + content.slice(insertPos);
      flowInserted = true;
    }
  }

  // Fallback for Diagram 1: after first H2 (typically TL;DR)
  if (!flowInserted) {
    const firstH2 = content.indexOf('## ');
    if (firstH2 !== -1) {
      const nextParagraph = content.indexOf('\n\n', firstH2);
      if (nextParagraph !== -1) {
        content = content.slice(0, nextParagraph) + '\n\n' + flowTag + '\n' + content.slice(nextParagraph);
        flowInserted = true;
      }
    }
  }

  // ── Placement of Diagram 2 (Architecture Blueprint) ───────────────────────────
  // Find suitable H2 for architecture/mechanics
  const h2Matches = [...content.matchAll(/^##\s+([^\r\n]+)/gm)];
  const candidateH2s = h2Matches
    .map(m => m[1])
    .filter(h => !/related|recommended|try quickztna|further reading|faq|author|who this is for|tl;dr/i.test(h));

  let targetH2 = candidateH2s.find(h => /architecture|blueprint|deployment|topology|how it works|mechanics|components|patterns/i.test(h));
  if (!targetH2) {
    // Pick 3rd or 4th technical heading
    targetH2 = candidateH2s.length >= 3 ? candidateH2s[2] : (candidateH2s[1] || candidateH2s[0]);
  }

  if (targetH2) {
    const h2Marker = `## ${targetH2}`;
    const h2Idx = content.indexOf(h2Marker);
    if (h2Idx !== -1) {
      const lineEnd = content.indexOf('\n', h2Idx);
      content = content.slice(0, lineEnd) + '\n\n' + archTag + '\n' + content.slice(lineEnd);
    }
  }

  // ── Specialized Charts ────────────────────────────────────────────────────────
  if (slug === 'ml-kem-768-explained') {
    const wireH2 = '## 4. Size budget: bytes on the wire';
    const wireIdx = content.indexOf(wireH2);
    if (wireIdx !== -1) {
      const chartTag = `\n\n![Key Encapsulation Wire Size Budget Comparison](/images/diagrams/ml-kem-768-wire-size-comparison.svg)\n*Figure 1.3: Size Budget Comparison — Public Key ($pk$) vs Ciphertext ($ct$) Wire Overhead for X25519, ML-KEM-768, and FrodoKEM-976.*`;
      const endOfLine = content.indexOf('\n', wireIdx);
      content = content.slice(0, endOfLine) + chartTag + content.slice(endOfLine);
    }
  }

  if (slug === 'post-quantum-migration-timeline') {
    const timelineH2 = '## 3. US National Security Systems (NSA CNSA 2.0)';
    const tlIdx = content.indexOf(timelineH2);
    if (tlIdx !== -1) {
      const chartTag = `\n\n![Global Post-Quantum Migration Master Timeline](/images/diagrams/post-quantum-timeline-chart.svg)\n*Figure 1.3: Multi-Jurisdiction PQC Cutover Roadmap — NIST FIPS, NSA CNSA 2.0, and BSI TR-02102-1 Deadlines (2024–2035).*`;
      const endOfLine = content.indexOf('\n', tlIdx);
      content = content.slice(0, endOfLine) + chartTag + content.slice(endOfLine);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  processedCount++;
  console.log(`[Embedded] ${file}: Flow & Architecture diagrams inserted cleanly.`);
}

console.log(`\nSuccessfully processed and embedded diagrams into all ${processedCount} blog posts!`);
