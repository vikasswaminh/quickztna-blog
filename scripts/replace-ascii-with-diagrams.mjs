import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogs } from './generate-diagrams.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const blogDir = path.join(projectRoot, 'src', 'content', 'blog');

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
console.log(`Processing ${files.length} blog posts to replace ASCII boxes with tailored diagrams & explanations...`);

let replacedCount = 0;

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const blog = blogs.find(b => b.slug === slug);
  if (!blog) {
    console.warn(`[Warning] No metadata definition found for ${slug}`);
    continue;
  }

  // 1. Clean up any previous Figure 1.1 insertions placed earlier outside the ASCII box
  const oldFig1Regex = new RegExp(`!\\[[^\\]]*\\]\\(\\/images\\/diagrams\\/${slug}-flow\\.svg\\)\\s*\\*Figure 1\\.1:[^\\n]*\\*\\s*`, 'g');
  content = content.replace(oldFig1Regex, '');

  // 2. Locate ASCII box
  const asciiRegex = /```[^\n]*\n┌─[\s\S]*?└─[\s\S]*?```/;
  const asciiMatch = content.match(asciiRegex);

  let diagramTitle = blog.title;
  if (asciiMatch) {
    const lines = asciiMatch[0].split('\n').filter(l => l.includes('│') && !l.includes('───'));
    if (lines[0]) {
      const extracted = lines[0].replace(/[│┌└┐┘├┤]/g, '').trim();
      if (extracted.length > 5 && !extracted.includes('1990s') && !extracted.includes('Era 1')) {
        diagramTitle = extracted;
      }
    }
  }

  const explanationBlock = `![Data Flow Diagram: ${blog.title}](/images/diagrams/${slug}-flow.svg)
*Figure 1.1: ${diagramTitle} — Protocol Verification Topology & ${blog.hub}.*

### Architecture & Workflow Breakdown

The diagram above models the verified control points, cryptographic boundaries, and access workflows specific to **${blog.title}**:

1. **${blog.nodes[0].step} — ${blog.nodes[0].name}:** ${blog.nodes[0].desc}.
2. **${blog.nodes[1].step} — ${blog.nodes[1].name}:** ${blog.nodes[1].desc}.
3. **${blog.nodes[2].step} — ${blog.nodes[2].name}:** ${blog.nodes[2].desc}.
4. **${blog.nodes[3].step} — ${blog.nodes[3].name}:** ${blog.nodes[3].desc}.
5. **${blog.nodes[4].step} — ${blog.nodes[4].name}:** ${blog.nodes[4].desc}.
6. **${blog.nodes[5].step} — ${blog.nodes[5].name}:** ${blog.nodes[5].desc}.

Central to this architecture is the **${blog.hub}**, which coordinates cryptographic verification, continuous health checks, and dynamic routing out-of-band without funneling raw payload data through centralized choke points.`;

  if (asciiMatch) {
    content = content.replace(asciiRegex, explanationBlock);
    replacedCount++;
    console.log(`[Replaced ASCII] ${file} -> Substituted ASCII box with visual diagram & tailored breakdown`);
  } else if (slug === 'outbound-only-zero-trust') {
    // For outbound-only (no ASCII box), insert right after the introductory comparison table
    const tableEndIdx = content.indexOf('| Microsegmented per-process ABAC policy enforcement. |');
    if (tableEndIdx !== -1) {
      const insertAt = tableEndIdx + '| Microsegmented per-process ABAC policy enforcement. |'.length;
      content = content.slice(0, insertAt) + '\n\n' + explanationBlock + '\n' + content.slice(insertAt);
      replacedCount++;
      console.log(`[Inserted Diagram] ${file} -> Embedded visual diagram & tailored breakdown`);
    }
  }

  // 3. Ensure Figure 1.2 (Architecture Blueprint) is present
  if (!content.includes(`${slug}-architecture.svg`)) {
    const archTag = `![System Design Architecture: ${blog.title}](/images/diagrams/${slug}-architecture.svg)\n*Figure 1.2: End-to-End System Design Architecture Blueprint — Decoupled Control Plane & WireGuard Mesh Topology.*`;
    const h2Matches = [...content.matchAll(/^##\s+([^\r\n]+)/gm)];
    const candidateH2s = h2Matches
      .map(m => m[1])
      .filter(h => !/related|recommended|try quickztna|further reading|faq|author|who this is for|tl;dr/i.test(h));

    let targetH2 = candidateH2s.find(h => /architecture|blueprint|deployment|topology|how it works|mechanics|components|patterns/i.test(h));
    if (!targetH2) {
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
  }

  // 4. Ensure specialized charts are present
  if (slug === 'ml-kem-768-explained' && !content.includes('ml-kem-768-wire-size-comparison.svg')) {
    const wireH2 = '## 4. Size budget: bytes on the wire';
    const wireIdx = content.indexOf(wireH2);
    if (wireIdx !== -1) {
      const chartTag = `\n\n![Key Encapsulation Wire Size Budget Comparison](/images/diagrams/ml-kem-768-wire-size-comparison.svg)\n*Figure 1.3: Size Budget Comparison — Public Key ($pk$) vs Ciphertext ($ct$) Wire Overhead for X25519, ML-KEM-768, and FrodoKEM-976.*`;
      const endOfLine = content.indexOf('\n', wireIdx);
      content = content.slice(0, endOfLine) + chartTag + content.slice(endOfLine);
    }
  }

  if (slug === 'post-quantum-migration-timeline' && !content.includes('post-quantum-timeline-chart.svg')) {
    const timelineH2 = '## 3. US National Security Systems (NSA CNSA 2.0)';
    const tlIdx = content.indexOf(timelineH2);
    if (tlIdx !== -1) {
      const chartTag = `\n\n![Global Post-Quantum Migration Master Timeline](/images/diagrams/post-quantum-timeline-chart.svg)\n*Figure 1.3: Multi-Jurisdiction PQC Cutover Roadmap — NIST FIPS, NSA CNSA 2.0, and BSI TR-02102-1 Deadlines (2024–2035).*`;
      const endOfLine = content.indexOf('\n', tlIdx);
      content = content.slice(0, endOfLine) + chartTag + content.slice(endOfLine);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`\nSuccessfully replaced ASCII diagrams with visual diagrams & unique explanations in all ${replacedCount} blog posts!`);
