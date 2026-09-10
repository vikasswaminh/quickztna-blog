import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(path.dirname(__dirname), 'public', 'images', 'diagrams');

// Chart 1: ML-KEM-768 Wire Size Budget Comparison (Log-scale style visual bar chart with exact bytes)
const wireSizeSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="bar-blue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="bar-green" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <linearGradient id="bar-purple" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="0.75"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1000" height="560" rx="14" fill="url(#bg-grad)" stroke="#334155" stroke-width="1.5"/>
  <rect width="1000" height="560" fill="url(#grid)" opacity="0.4"/>

  <!-- Title Header -->
  <g transform="translate(36, 28)">
    <rect width="140" height="24" rx="12" fill="#0284c7" opacity="0.2"/>
    <text x="70" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="10.5" font-weight="700" fill="#38bdf8" text-anchor="middle" letter-spacing="1">SIZE BUDGET BENCHMARK</text>
    <text x="0" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="20" font-weight="800" fill="#f8fafc">Key Encapsulation Wire Size Comparison</text>
    <text x="0" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="12" font-weight="400" fill="#94a3b8">Public Key ($pk$) vs Ciphertext ($ct$) payload overhead on handshake wire (Bytes)</text>
  </g>

  <!-- Legend -->
  <g transform="translate(680, 48)">
    <rect x="0" y="0" width="14" height="14" rx="3" fill="#38bdf8"/>
    <text x="22" y="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#cbd5e1">Public Key ($pk$)</text>
    
    <rect x="140" y="0" width="14" height="14" rx="3" fill="#34d399"/>
    <text x="162" y="11" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#cbd5e1">Ciphertext ($ct$)</text>
  </g>

  <!-- Chart Axis & Grid lines -->
  <g transform="translate(240, 135)">
    <!-- Vertical guide lines -->
    <line x1="0" y1="0" x2="0" y2="330" stroke="#334155" stroke-width="1.5"/>
    <line x1="175" y1="0" x2="175" y2="330" stroke="#1e293b" stroke-dasharray="4,4"/>
    <line x1="350" y1="0" x2="350" y2="330" stroke="#1e293b" stroke-dasharray="4,4"/>
    <line x1="525" y1="0" x2="525" y2="330" stroke="#1e293b" stroke-dasharray="4,4"/>
    <line x1="700" y1="0" x2="700" y2="330" stroke="#1e293b" stroke-dasharray="4,4"/>

    <text x="0" y="348" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">0 B</text>
    <text x="175" y="348" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">4 KB</text>
    <text x="350" y="348" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">8 KB</text>
    <text x="525" y="348" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">12 KB</text>
    <text x="700" y="348" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">16 KB</text>
  </g>

  <!-- Bar Group 1: X25519 (Classical) -->
  <g transform="translate(36, 150)">
    <!-- Label -->
    <text x="190" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="13" font-weight="700" fill="#f1f5f9" text-anchor="end">X25519 (Classical)</text>
    <text x="190" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="10.5" font-weight="400" fill="#64748b" text-anchor="end">RFC 7748 (Curve25519)</text>

    <!-- Bars (Scaled visually with minimum visible width + exact data label) -->
    <!-- pk: 32 B -->
    <rect x="204" y="8" width="16" height="20" rx="4" fill="url(#bar-blue)"/>
    <text x="228" y="23" font-family="monospace" font-size="11" font-weight="700" fill="#38bdf8">32 B</text>
    
    <!-- ct: 32 B -->
    <rect x="204" y="32" width="16" height="20" rx="4" fill="url(#bar-green)"/>
    <text x="228" y="47" font-family="monospace" font-size="11" font-weight="700" fill="#34d399">32 B</text>

    <text x="700" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="500" fill="#94a3b8">Total Handshake: 64 B · Negligible wire footprint</text>
  </g>

  <!-- Bar Group 2: ML-KEM-768 (NIST FIPS 203) -->
  <g transform="translate(36, 245)">
    <!-- Label -->
    <text x="190" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="13" font-weight="700" fill="#38bdf8" text-anchor="end">ML-KEM-768 (Standard)</text>
    <text x="190" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="10.5" font-weight="500" fill="#0284c7" text-anchor="end">NIST FIPS 203 / Category 3</text>

    <!-- pk: 1,184 B -> ~52px on 16KB scale -->
    <rect x="204" y="8" width="80" height="20" rx="4" fill="url(#bar-blue)"/>
    <text x="292" y="23" font-family="monospace" font-size="11" font-weight="700" fill="#f8fafc">1,184 B</text>
    
    <!-- ct: 1,088 B -> ~48px on 16KB scale -->
    <rect x="204" y="32" width="74" height="20" rx="4" fill="url(#bar-green)"/>
    <text x="286" y="47" font-family="monospace" font-size="11" font-weight="700" fill="#f8fafc">1,088 B</text>

    <text x="700" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="600" fill="#38bdf8">Hybrid Total: 2,272 B (+0.18ms latency on 100Mbps)</text>
  </g>

  <!-- Bar Group 3: FrodoKEM-976 (High-Assurance Unstructured Lattice) -->
  <g transform="translate(36, 340)">
    <!-- Label -->
    <text x="190" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="13" font-weight="700" fill="#cbd5e1" text-anchor="end">FrodoKEM-976 (Heavy)</text>
    <text x="190" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="10.5" font-weight="400" fill="#64748b" text-anchor="end">ANSSI Renforcée Target</text>

    <!-- pk: 15,632 B -> ~680px -->
    <rect x="204" y="8" width="670" height="20" rx="4" fill="url(#bar-blue)"/>
    <text x="882" y="23" font-family="monospace" font-size="11" font-weight="700" fill="#f8fafc">15,632 B</text>
    
    <!-- ct: 15,744 B -> ~685px -->
    <rect x="204" y="32" width="675" height="20" rx="4" fill="url(#bar-green)"/>
    <text x="887" y="47" font-family="monospace" font-size="11" font-weight="700" fill="#f8fafc">15,744 B</text>

    <text x="700" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="500" fill="#94a3b8">Total: 31,376 B · Crosses MTU (Requires packet splitting)</text>
  </g>

  <!-- Card Callout Banner at bottom -->
  <g transform="translate(36, 475)">
    <rect width="928" height="52" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="18" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11.5" font-weight="600" fill="#38bdf8">💡 WireGuard 2-Minute Rekey Impact:</text>
    <text x="248" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11.5" font-weight="400" fill="#cbd5e1">100 peers rekeying ML-KEM-768 transfer ~36 MB/day in handshake overhead (negligible bandwidth cost).</text>
  </g>
</svg>`;

// Chart 2: Post-Quantum Migration Multi-Year Timeline (CNSA 2.0 & Global Deadlines)
const timelineSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" width="100%" height="100%">
  <defs>
    <linearGradient id="tl-bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="milestone-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="milestone-amber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <linearGradient id="milestone-purple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1000" height="560" rx="14" fill="url(#tl-bg)" stroke="#334155" stroke-width="1.5"/>

  <!-- Title Header -->
  <g transform="translate(36, 28)">
    <rect width="180" height="24" rx="12" fill="#7c3aed" opacity="0.2"/>
    <text x="90" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="10.5" font-weight="700" fill="#a78bfa" text-anchor="middle" letter-spacing="1">REGULATORY COMPLIANCE ROADMAP</text>
    <text x="0" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="20" font-weight="800" fill="#f8fafc">Global Post-Quantum Migration Master Timeline</text>
    <text x="0" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="12" font-weight="400" fill="#94a3b8">NIST FIPS, NSA CNSA 2.0, BSI TR-02102, and EU NIS2 Regulatory Deadlines (2024–2035)</text>
  </g>

  <!-- Central Horizontal Timeline Rail -->
  <line x1="60" y1="260" x2="940" y2="260" stroke="#334155" stroke-width="3"/>

  <!-- Milestone 1: 2024 (Top) -->
  <g transform="translate(100, 260)">
    <circle cx="0" cy="0" r="8" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/>
    <line x1="0" y1="-8" x2="0" y2="-45" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- Card -->
    <g transform="translate(-85, -135)">
      <rect width="170" height="85" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="8" y="8" width="46" height="18" rx="4" fill="#0284c7"/>
      <text x="31" y="21" font-family="monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">2024</text>
      <text x="8" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#f8fafc">NIST FIPS Published</text>
      <text x="8" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">FIPS 203 (ML-KEM),</text>
      <text x="8" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">204 (ML-DSA) finalized.</text>
    </g>
  </g>

  <!-- Milestone 2: 2025 (Bottom) -->
  <g transform="translate(260, 260)">
    <circle cx="0" cy="0" r="8" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
    <line x1="0" y1="8" x2="0" y2="45" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- Card -->
    <g transform="translate(-85, 45)">
      <rect width="170" height="85" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
      <rect x="8" y="8" width="46" height="18" rx="4" fill="#d97706"/>
      <text x="31" y="21" font-family="monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">2025</text>
      <text x="8" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#f8fafc">CNSA 2.0 Inception</text>
      <text x="8" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">Software/firmware</text>
      <text x="8" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">signing transition starts.</text>
    </g>
  </g>

  <!-- Milestone 3: 2026 (Top) -->
  <g transform="translate(420, 260)">
    <circle cx="0" cy="0" r="8" fill="#34d399" stroke="#059669" stroke-width="3"/>
    <line x1="0" y1="-8" x2="0" y2="-45" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- Card -->
    <g transform="translate(-85, -135)">
      <rect width="170" height="85" rx="8" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
      <rect x="8" y="8" width="46" height="18" rx="4" fill="#059669"/>
      <text x="31" y="21" font-family="monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">2026</text>
      <text x="8" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#f8fafc">Hybrid Mesh Baseline</text>
      <text x="8" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">BSI TR-02102-1 mandate,</text>
      <text x="8" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">X25519+ML-KEM in ZTNA.</text>
    </g>
  </g>

  <!-- Milestone 4: 2030 (Bottom) -->
  <g transform="translate(580, 260)">
    <circle cx="0" cy="0" r="8" fill="#a78bfa" stroke="#7c3aed" stroke-width="3"/>
    <line x1="0" y1="8" x2="0" y2="45" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- Card -->
    <g transform="translate(-85, 45)">
      <rect width="170" height="85" rx="8" fill="#1e293b" stroke="#7c3aed" stroke-width="1.5"/>
      <rect x="8" y="8" width="46" height="18" rx="4" fill="#7c3aed"/>
      <text x="31" y="21" font-family="monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">2030</text>
      <text x="8" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#f8fafc">Software Exclusive</text>
      <text x="8" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">EU Critical Systems &amp;</text>
      <text x="8" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">NSA software exclusive.</text>
    </g>
  </g>

  <!-- Milestone 5: 2033 (Top) -->
  <g transform="translate(740, 260)">
    <circle cx="0" cy="0" r="8" fill="#f43f5e" stroke="#e11d48" stroke-width="3"/>
    <line x1="0" y1="-8" x2="0" y2="-45" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- Card -->
    <g transform="translate(-85, -135)">
      <rect width="170" height="85" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
      <rect x="8" y="8" width="46" height="18" rx="4" fill="#e11d48"/>
      <text x="31" y="21" font-family="monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">2033</text>
      <text x="8" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#f8fafc">OS &amp; Routers Exclusive</text>
      <text x="8" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">Web servers, browsers,</text>
      <text x="8" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">and OS 100% PQC.</text>
    </g>
  </g>

  <!-- Milestone 6: 2035 (Bottom) -->
  <g transform="translate(900, 260)">
    <circle cx="0" cy="0" r="8" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/>
    <line x1="0" y1="8" x2="0" y2="45" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- Card -->
    <g transform="translate(-85, 45)">
      <rect width="170" height="85" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
      <rect x="8" y="8" width="46" height="18" rx="4" fill="#0284c7"/>
      <text x="31" y="21" font-family="monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">2035</text>
      <text x="8" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#f8fafc">Full NSS Cutover</text>
      <text x="8" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">100% Classical crypto</text>
      <text x="8" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" fill="#94a3b8">deprecated across NSS.</text>
    </g>
  </g>

  <!-- Bottom Legend Banner -->
  <g transform="translate(36, 495)">
    <text x="0" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="600" fill="#64748b">
      FIG 1.3: Multi-Jurisdiction PQC Cutover Roadmap · NSA CNSA 2.0, NIST FIPS, and BSI TR-02102-1 Alignment
    </text>
    <text x="928" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="700" fill="#a78bfa" text-anchor="end">QuickZTNA Compliance Reference</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(outputDir, 'ml-kem-768-wire-size-comparison.svg'), wireSizeSvg, 'utf8');
fs.writeFileSync(path.join(outputDir, 'post-quantum-timeline-chart.svg'), timelineSvg, 'utf8');

console.log('Successfully generated ml-kem-768-wire-size-comparison.svg and post-quantum-timeline-chart.svg!');
