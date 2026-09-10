import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputDir = path.join(projectRoot, 'public', 'images', 'diagrams');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// ── Common SVG Helpers ────────────────────────────────────────────────────────
function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function svgHeader(width, height, badge, badgeColor, title, subtitle) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="auto" style="background:#0B1120;border-radius:12px;border:1px solid #1E293B;">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#0369A1" />
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F43F5E" />
      <stop offset="100%" stop-color="#BE123C" />
    </linearGradient>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#4F46E5" />
    </linearGradient>
    <marker id="arrow-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#06B6D4" />
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10B981" />
    </marker>
    <marker id="arrow-rose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#F43F5E" />
    </marker>
    <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#F59E0B" />
    </marker>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Header Banner -->
  <rect x="0" y="0" width="${width}" height="68" fill="#0F172A" />
  <rect x="24" y="18" width="${badge.length * 9 + 20}" height="26" rx="5" fill="${badgeColor}" />
  <text x="${24 + (badge.length * 9 + 20) / 2}" y="35" fill="#FFFFFF" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif" letter-spacing="1">${escapeXml(badge)}</text>
  <text x="${50 + badge.length * 9 + 20}" y="35" fill="#F8FAFC" font-size="16" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(title)}</text>
  <text x="${50 + badge.length * 9 + 20}" y="52" fill="#94A3B8" font-size="11.5" font-family="system-ui, sans-serif">${escapeXml(subtitle)}</text>
  <line x1="0" y1="68" x2="${width}" y2="68" stroke="#1E293B" stroke-width="1.5" />
  `;
}

function svgFooter(width, height, leftText = "QuickZTNA Technical Architecture Reference", rightText = "Zero Trust Verified Blueprint") {
  return `
  <!-- Footer -->
  <line x1="20" y1="${height - 28}" x2="${width - 20}" y2="${height - 28}" stroke="#1E293B" stroke-width="1" />
  <text x="24" y="${height - 12}" fill="#64748B" font-size="10" font-family="system-ui, sans-serif">${escapeXml(leftText)}</text>
  <text x="${width - 24}" y="${height - 12}" fill="#38BDF8" font-size="10" font-weight="600" text-anchor="end" font-family="system-ui, sans-serif">${escapeXml(rightText)}</text>
</svg>
  `;
}

// ── 1. ARCHETYPE: SEQUENCE DIAGRAM ───────────────────────────────────────────
function renderSequenceDiagram({ title, subtitle, badge = "SEQUENCE FLOW", participants, steps }) {
  const width = 960;
  const height = 580;
  const pCount = participants.length;
  const colWidth = (width - 140) / (pCount - 1);
  const pX = participants.map((p, i) => 70 + i * colWidth);
  const topY = 100;
  const botY = height - 45;

  let lifelinesSvg = "";
  participants.forEach((p, i) => {
    const x = pX[i];
    lifelinesSvg += `
      <line x1="${x}" y1="${topY + 38}" x2="${x}" y2="${botY}" stroke="#334155" stroke-width="1.5" stroke-dasharray="4,4" />
      <rect x="${x - 65}" y="${topY}" width="130" height="38" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1.5" filter="url(#shadow)" />
      <text x="${x}" y="${topY + 17}" fill="#F8FAFC" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(p.name)}</text>
      <text x="${x}" y="${topY + 30}" fill="#38BDF8" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(p.role)}</text>
    `;
  });

  let stepsSvg = "";
  const msgStartY = topY + 65;
  const stepSpacing = (botY - msgStartY - 20) / steps.length;

  steps.forEach((s, i) => {
    const y = msgStartY + i * stepSpacing;
    const x1 = pX[s.from];
    const x2 = pX[s.to];
    const arrowColor = s.color || "#06B6D4";
    const marker = s.marker || "arrow-cyan";
    const midX = (x1 + x2) / 2;

    stepsSvg += `
      <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${arrowColor}" stroke-width="2" marker-end="url(#${marker})" ${s.dashed ? 'stroke-dasharray="5,4"' : ''} />
      <rect x="${midX - 125}" y="${y - 19}" width="250" height="18" rx="4" fill="#0F172A" stroke="#334155" stroke-width="0.8" opacity="0.95" />
      <text x="${midX}" y="${y - 6}" fill="${arrowColor}" font-size="10" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(s.label)}</text>
    `;
    if (s.detail) {
      stepsSvg += `
        <rect x="${midX - 85}" y="${y + 5}" width="170" height="15" rx="3" fill="#1E293B" stroke="${arrowColor}" stroke-width="0.7" />
        <text x="${midX}" y="${y + 16}" fill="#CBD5E1" font-size="8.5" font-family="system-ui, sans-serif" text-anchor="middle">${escapeXml(s.detail)}</text>
      `;
    }
  });

  return svgHeader(width, height, badge, "#0284C7", title, subtitle) + lifelinesSvg + stepsSvg + svgFooter(width, height);
}

// ── 2. ARCHETYPE: SIDE-BY-SIDE COMPARISON SPLIT ──────────────────────────────
function renderComparisonSplit({ title, subtitle, badge = "ARCHITECTURAL CONTRAST", legacyTitle, legacyItems, modernTitle, modernItems }) {
  const width = 960;
  const height = 580;
  const colW = 420;
  const leftX = 40;
  const rightX = 500;
  const cardY = 95;
  const cardH = 435;

  let leftRows = "";
  legacyItems.forEach((item, idx) => {
    const y = cardY + 55 + idx * 85;
    leftRows += `
      <g transform="translate(${leftX + 20}, ${y})">
        <rect x="0" y="0" width="380" height="72" rx="6" fill="#18181B" stroke="#7F1D1D" stroke-width="1.2" />
        <circle cx="20" cy="22" r="10" fill="#EF4444" />
        <text x="20" y="26" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">✕</text>
        <text x="38" y="24" fill="#FCA5A5" font-size="12" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(item.title)}</text>
        <text x="38" y="44" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">${escapeXml(item.desc1)}</text>
        <text x="38" y="58" fill="#64748B" font-size="9.5" font-family="system-ui, sans-serif">${escapeXml(item.desc2 || '')}</text>
      </g>
    `;
  });

  let rightRows = "";
  modernItems.forEach((item, idx) => {
    const y = cardY + 55 + idx * 85;
    rightRows += `
      <g transform="translate(${rightX + 20}, ${y})">
        <rect x="0" y="0" width="380" height="72" rx="6" fill="#064E3B" stroke="#059669" stroke-width="1.2" fill-opacity="0.25" />
        <circle cx="20" cy="22" r="10" fill="#10B981" />
        <text x="20" y="26" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">✓</text>
        <text x="38" y="24" fill="#6EE7B7" font-size="12" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(item.title)}</text>
        <text x="38" y="44" fill="#E2E8F0" font-size="10" font-family="system-ui, sans-serif">${escapeXml(item.desc1)}</text>
        <text x="38" y="58" fill="#38BDF8" font-size="9.5" font-family="system-ui, sans-serif">${escapeXml(item.desc2 || '')}</text>
      </g>
    `;
  });

  const body = `
    <!-- Left Column: Legacy -->
    <rect x="${leftX}" y="${cardY}" width="${colW}" height="${cardH}" rx="10" fill="#111827" stroke="#374151" stroke-width="1.5" filter="url(#shadow)" />
    <rect x="${leftX}" y="${cardY}" width="${colW}" height="42" rx="10" fill="#450A0A" />
    <rect x="${leftX + 15}" y="${cardY + 11}" width="70" height="20" rx="4" fill="#EF4444" />
    <text x="${leftX + 50}" y="${cardY + 25}" fill="#FFFFFF" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">LEGACY</text>
    <text x="${leftX + 95}" y="${cardY + 26}" fill="#FECACA" font-size="13" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(legacyTitle)}</text>
    ${leftRows}

    <!-- Central VS Badge -->
    <circle cx="480" cy="${cardY + cardH / 2}" r="22" fill="#0F172A" stroke="#334155" stroke-width="2" filter="url(#shadow)" />
    <text x="480" y="${cardY + cardH / 2 + 5}" fill="#F59E0B" font-size="12" font-weight="900" text-anchor="middle" font-family="system-ui, sans-serif">VS</text>

    <!-- Right Column: Modern Zero Trust -->
    <rect x="${rightX}" y="${cardY}" width="${colW}" height="${cardH}" rx="10" fill="#0F172A" stroke="#059669" stroke-width="1.5" filter="url(#shadow)" />
    <rect x="${rightX}" y="${cardY}" width="${colW}" height="42" rx="10" fill="#064E3B" />
    <rect x="${rightX + 15}" y="${cardY + 11}" width="85" height="20" rx="4" fill="#10B981" />
    <text x="${rightX + 57}" y="${cardY + 25}" fill="#FFFFFF" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">ZERO TRUST</text>
    <text x="${rightX + 110}" y="${cardY + 26}" fill="#A7F3D0" font-size="13" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(modernTitle)}</text>
    ${rightRows}
  `;

  return svgHeader(width, height, badge, "#DC2626", title, subtitle) + body + svgFooter(width, height);
}

// ── 3. ARCHETYPE: THREAT MODEL & ATTACK PATH INTERCEPTION ─────────────────────
function renderThreatModel({ title, subtitle, badge = "THREAT MODEL", attacker, entryPoint, securityGate, protectedAsset, siemNode }) {
  const width = 960;
  const height = 580;

  const body = `
    <!-- 1. Attacker Vector -->
    <g transform="translate(40, 110)">
      <rect x="0" y="0" width="200" height="240" rx="8" fill="#1F1515" stroke="#EF4444" stroke-width="1.5" filter="url(#shadow)" />
      <rect x="0" y="0" width="200" height="34" rx="8" fill="#450A0A" />
      <text x="100" y="22" fill="#FCA5A5" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">🔴 ATTACK VECTOR</text>
      <text x="100" y="65" fill="#FFFFFF" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(attacker.name)}</text>
      <text x="15" y="90" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">${escapeXml(attacker.desc1)}</text>
      <text x="15" y="105" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">${escapeXml(attacker.desc2 || '')}</text>
      
      <rect x="15" y="130" width="170" height="90" rx="6" fill="#2E1010" stroke="#7F1D1D" stroke-width="1" />
      <text x="100" y="152" fill="#F87171" font-size="10" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Target Exploitation:</text>
      <text x="25" y="172" fill="#CBD5E1" font-size="9" font-family="system-ui, sans-serif">• ${escapeXml(entryPoint.step1)}</text>
      <text x="25" y="190" fill="#CBD5E1" font-size="9" font-family="system-ui, sans-serif">• ${escapeXml(entryPoint.step2)}</text>
      <text x="25" y="208" fill="#CBD5E1" font-size="9" font-family="system-ui, sans-serif">• ${escapeXml(entryPoint.step3)}</text>
    </g>

    <!-- Blocked Arrow from Attacker -->
    <line x1="240" y1="230" x2="350" y2="230" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,4" marker-end="url(#arrow-rose)" />
    <rect x="255" y="205" width="80" height="20" rx="4" fill="#450A0A" stroke="#EF4444" stroke-width="1" />
    <text x="295" y="219" fill="#FCA5A5" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">EXPLOIT DROP</text>

    <!-- 2. Zero Trust Interception Barrier -->
    <g transform="translate(360, 100)">
      <rect x="0" y="0" width="240" height="270" rx="10" fill="#0B2135" stroke="#0284C7" stroke-width="2" filter="url(#shadow)" />
      <rect x="0" y="0" width="240" height="38" rx="10" fill="#0369A1" />
      <text x="120" y="24" fill="#FFFFFF" font-size="12" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">🛡️ ZERO TRUST ENFORCEMENT</text>
      <text x="120" y="65" fill="#38BDF8" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(securityGate.name)}</text>
      
      <rect x="15" y="80" width="210" height="50" rx="6" fill="#0F172A" stroke="#1E293B" />
      <text x="25" y="98" fill="#6EE7B7" font-size="10" font-weight="700" font-family="system-ui, sans-serif">✓ ${escapeXml(securityGate.check1)}</text>
      <text x="25" y="115" fill="#94A3B8" font-size="9" font-family="system-ui, sans-serif">${escapeXml(securityGate.sub1 || '')}</text>

      <rect x="15" y="140" width="210" height="50" rx="6" fill="#0F172A" stroke="#1E293B" />
      <text x="25" y="158" fill="#6EE7B7" font-size="10" font-weight="700" font-family="system-ui, sans-serif">✓ ${escapeXml(securityGate.check2)}</text>
      <text x="25" y="175" fill="#94A3B8" font-size="9" font-family="system-ui, sans-serif">${escapeXml(securityGate.sub2 || '')}</text>

      <rect x="15" y="200" width="210" height="55" rx="6" fill="#450A0A" stroke="#EF4444" />
      <text x="120" y="222" fill="#FCA5A5" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">🚫 Attack Intercepted</text>
      <text x="120" y="240" fill="#CBD5E1" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif">Instant Sub-Millisecond Revocation</text>
    </g>

    <!-- Secure Arrow to Asset -->
    <line x1="600" y1="230" x2="710" y2="230" stroke="#10B981" stroke-width="3" marker-end="url(#arrow-green)" />
    <rect x="620" y="205" width="70" height="20" rx="4" fill="#064E3B" stroke="#10B981" stroke-width="1" />
    <text x="655" y="219" fill="#A7F3D0" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">AUTHORIZED</text>

    <!-- 3. Protected Enclave -->
    <g transform="translate(720, 110)">
      <rect x="0" y="0" width="200" height="240" rx="8" fill="#064E3B" stroke="#10B981" stroke-width="1.5" fill-opacity="0.3" filter="url(#shadow)" />
      <rect x="0" y="0" width="200" height="34" rx="8" fill="#064E3B" />
      <text x="100" y="22" fill="#A7F3D0" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">🔒 PROTECTED ENCLAVE</text>
      <text x="100" y="65" fill="#FFFFFF" font-size="13" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(protectedAsset.name)}</text>
      
      <rect x="15" y="85" width="170" height="135" rx="6" fill="#0F172A" stroke="#059669" stroke-width="0.8" />
      <text x="25" y="110" fill="#38BDF8" font-size="10" font-weight="700" font-family="system-ui, sans-serif">Protected Scope:</text>
      <text x="25" y="130" fill="#E2E8F0" font-size="9.5" font-family="system-ui, sans-serif">• ${escapeXml(protectedAsset.item1)}</text>
      <text x="25" y="150" fill="#E2E8F0" font-size="9.5" font-family="system-ui, sans-serif">• ${escapeXml(protectedAsset.item2)}</text>
      <text x="25" y="170" fill="#E2E8F0" font-size="9.5" font-family="system-ui, sans-serif">• ${escapeXml(protectedAsset.item3)}</text>
      <text x="25" y="195" fill="#10B981" font-size="9" font-weight="700" font-family="system-ui, sans-serif">100% Dark · Zero Lateral Scan</text>
    </g>

    <!-- 4. SIEM & Forensics Banner at Bottom -->
    <g transform="translate(160, 400)">
      <rect x="0" y="0" width="640" height="110" rx="8" fill="#0F172A" stroke="#334155" stroke-width="1.5" />
      <rect x="0" y="0" width="640" height="28" rx="8" fill="#1E293B" />
      <text x="320" y="19" fill="#94A3B8" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">📊 FORENSIC TELEMETRY &amp; AUDIT LAKE</text>
      
      <line x1="480" y1="-30" x2="480" y2="0" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow-amber)" />
      <text x="495" y="-12" fill="#F59E0B" font-size="9" font-weight="700" font-family="system-ui, sans-serif">Real-time Telemetry</text>

      <text x="20" y="55" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(siemNode.title)}</text>
      <text x="20" y="75" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">${escapeXml(siemNode.desc1)}</text>
      <text x="20" y="93" fill="#38BDF8" font-size="9.5" font-family="system-ui, sans-serif">${escapeXml(siemNode.desc2)}</text>
    </g>
  `;

  return svgHeader(width, height, badge, "#EF4444", title, subtitle) + body + svgFooter(width, height);
}

// ── 4. ARCHETYPE: MULTI-STAGE DECISION TREE FLOWCHART ────────────────────────
function renderDecisionTree({ title, subtitle, badge = "DECISION TREE", stages }) {
  const width = 960;
  const height = 580;
  const startX = 40;
  const cardW = 190;
  const gap = 45;

  let stagesSvg = "";
  stages.forEach((s, idx) => {
    const x = startX + idx * (cardW + gap);
    const y = 130;

    stagesSvg += `
      <!-- Stage ${idx + 1} -->
      <g transform="translate(${x}, ${y})">
        <rect x="0" y="0" width="${cardW}" height="280" rx="8" fill="#1E293B" stroke="${s.borderColor || '#38BDF8'}" stroke-width="1.5" filter="url(#shadow)" />
        <rect x="0" y="0" width="${cardW}" height="32" rx="8" fill="${s.headerColor || '#0284C7'}" />
        <text x="${cardW / 2}" y="20" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(s.stageName)}</text>
        
        <text x="12" y="55" fill="#F8FAFC" font-size="11.5" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(s.gateTitle)}</text>
        <text x="12" y="75" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">${escapeXml(s.gateDesc)}</text>

        <!-- Evaluation Condition -->
        <rect x="10" y="95" width="${cardW - 20}" height="65" rx="5" fill="#0F172A" stroke="#334155" />
        <text x="${cardW / 2}" y="114" fill="#38BDF8" font-size="9" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Evaluation Criterion:</text>
        <text x="16" y="132" fill="#E2E8F0" font-size="8.5" font-family="system-ui, sans-serif">• ${escapeXml(s.rule1)}</text>
        <text x="16" y="148" fill="#E2E8F0" font-size="8.5" font-family="system-ui, sans-serif">• ${escapeXml(s.rule2)}</text>

        <!-- Success Outcome -->
        <rect x="10" y="170" width="${cardW - 20}" height="45" rx="5" fill="#064E3B" stroke="#059669" fill-opacity="0.4" />
        <text x="16" y="188" fill="#6EE7B7" font-size="9" font-weight="700" font-family="system-ui, sans-serif">✓ PASS</text>
        <text x="16" y="204" fill="#A7F3D0" font-size="8.5" font-family="system-ui, sans-serif">${escapeXml(s.passAction)}</text>

        <!-- Failure Outcome -->
        <rect x="10" y="222" width="${cardW - 20}" height="45" rx="5" fill="#450A0A" stroke="#EF4444" fill-opacity="0.4" />
        <text x="16" y="240" fill="#FCA5A5" font-size="9" font-weight="700" font-family="system-ui, sans-serif">✕ FAIL</text>
        <text x="16" y="256" fill="#FECACA" font-size="8.5" font-family="system-ui, sans-serif">${escapeXml(s.failAction)}</text>
      </g>
    `;

    if (idx < stages.length - 1) {
      const arrowX1 = x + cardW;
      const arrowX2 = arrowX1 + gap;
      stagesSvg += `
        <line x1="${arrowX1}" y1="${y + 192}" x2="${arrowX2}" y2="${y + 192}" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-green)" />
      `;
    }
  });

  const footerBanner = `
    <g transform="translate(60, 445)">
      <rect x="0" y="0" width="840" height="70" rx="8" fill="#0F172A" stroke="#1E293B" stroke-width="1.2" />
      <text x="24" y="28" fill="#F59E0B" font-size="11" font-weight="700" font-family="system-ui, sans-serif">⚡ Continuous Re-Evaluation Axiom:</text>
      <text x="24" y="48" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">Policies are not static login checkpoints. If any posture metric or token claim degrades during an active session, keys are evicted instantly.</text>
    </g>
  `;

  return svgHeader(width, height, badge, "#059669", title, subtitle) + stagesSvg + footerBanner + svgFooter(width, height);
}

// ── 5. ARCHETYPE: MULTI-CLOUD MESH INTERCONNECT TOPOLOGY ─────────────────────
function renderMeshTopology({ title, subtitle, badge = "MESH TOPOLOGY", controlPlane, nodes }) {
  const width = 960;
  const height = 580;

  let nodesSvg = "";
  const positions = [
    { x: 70, y: 220, label: "Edge / Client" },
    { x: 370, y: 130, label: "Cloud Node A" },
    { x: 670, y: 220, label: "Cloud Node B" },
    { x: 370, y: 350, label: "On-Prem / DB Node" },
  ];

  nodes.forEach((n, idx) => {
    const pos = positions[idx];
    nodesSvg += `
      <g transform="translate(${pos.x}, ${pos.y})">
        <rect x="0" y="0" width="220" height="135" rx="8" fill="#1E293B" stroke="#0284C7" stroke-width="1.5" filter="url(#shadow)" />
        <rect x="0" y="0" width="220" height="30" rx="8" fill="#0F172A" />
        <circle cx="15" cy="15" r="5" fill="#10B981" />
        <text x="28" y="19" fill="#38BDF8" font-size="10" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(n.zone)}</text>
        
        <text x="14" y="52" fill="#FFFFFF" font-size="12" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(n.name)}</text>
        <text x="14" y="70" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">${escapeXml(n.ip)}</text>
        
        <rect x="10" y="85" width="200" height="40" rx="4" fill="#0B1120" stroke="#334155" stroke-width="0.8" />
        <text x="18" y="101" fill="#E2E8F0" font-size="8.5" font-family="system-ui, sans-serif">• ${escapeXml(n.detail1)}</text>
        <text x="18" y="117" fill="#6EE7B7" font-size="8.5" font-family="system-ui, sans-serif">• ${escapeXml(n.detail2)}</text>
      </g>
    `;
  });

  const meshP2pLines = `
    <!-- Mesh Peer-to-Peer Interconnects -->
    <line x1="290" y1="280" x2="370" y2="200" stroke="#06B6D4" stroke-width="2" stroke-dasharray="4,4" />
    <line x1="290" y1="280" x2="370" y2="410" stroke="#06B6D4" stroke-width="2" stroke-dasharray="4,4" />
    <line x1="590" y1="200" x2="670" y2="280" stroke="#06B6D4" stroke-width="2" stroke-dasharray="4,4" />
    <line x1="590" y1="410" x2="670" y2="280" stroke="#06B6D4" stroke-width="2" stroke-dasharray="4,4" />
    <line x1="480" y1="265" x2="480" y2="350" stroke="#10B981" stroke-width="2.5" />
    <rect x="420" y="295" width="120" height="18" rx="4" fill="#064E3B" stroke="#10B981" />
    <text x="480" y="308" fill="#A7F3D0" font-size="8.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Direct WireGuard P2P</text>
  `;

  const controlPlaneBox = `
    <!-- Central Coordination Plane (Out of band) -->
    <g transform="translate(260, 485)">
      <rect x="0" y="0" width="440" height="50" rx="8" fill="#0F172A" stroke="#F59E0B" stroke-width="1.5" />
      <text x="220" y="22" fill="#F59E0B" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">⚡ ${escapeXml(controlPlane.name)}</text>
      <text x="220" y="38" fill="#94A3B8" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(controlPlane.desc)}</text>
    </g>
  `;

  return svgHeader(width, height, badge, "#0284C7", title, subtitle) + meshP2pLines + nodesSvg + controlPlaneBox + svgFooter(width, height);
}

// ── 6. ARCHETYPE: TIMELINE / ROADMAP ─────────────────────────────────────────
function renderTimelineRoadmap({ title, subtitle, badge = "REGULATORY ROADMAP", phases }) {
  const width = 960;
  const height = 580;
  const startX = 60;
  const phaseW = 200;
  const gap = 15;

  let phasesSvg = "";
  phases.forEach((p, idx) => {
    const x = startX + idx * (phaseW + gap);
    const y = 140;

    phasesSvg += `
      <g transform="translate(${x}, ${y})">
        <rect x="0" y="0" width="${phaseW}" height="320" rx="8" fill="#1E293B" stroke="${p.borderColor || '#38BDF8'}" stroke-width="1.5" filter="url(#shadow)" />
        <rect x="0" y="0" width="${phaseW}" height="42" rx="8" fill="${p.headerColor || '#0284C7'}" />
        <text x="${phaseW / 2}" y="18" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(p.phaseTag)}</text>
        <text x="${phaseW / 2}" y="33" fill="#E0F2FE" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(p.timeWindow)}</text>

        <text x="14" y="68" fill="#F8FAFC" font-size="12" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(p.title)}</text>
        <text x="14" y="88" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">${escapeXml(p.desc)}</text>

        <!-- Requirements Box -->
        <rect x="10" y="115" width="${phaseW - 20}" height="90" rx="5" fill="#0F172A" stroke="#334155" />
        <text x="18" y="133" fill="#38BDF8" font-size="9.5" font-weight="700" font-family="system-ui, sans-serif">Technical Mandates:</text>
        <text x="18" y="152" fill="#CBD5E1" font-size="8.5" font-family="system-ui, sans-serif">• ${escapeXml(p.req1)}</text>
        <text x="18" y="172" fill="#CBD5E1" font-size="8.5" font-family="system-ui, sans-serif">• ${escapeXml(p.req2)}</text>
        <text x="18" y="192" fill="#CBD5E1" font-size="8.5" font-family="system-ui, sans-serif">• ${escapeXml(p.req3)}</text>

        <!-- Status / Outcome Badge -->
        <rect x="10" y="220" width="${phaseW - 20}" height="42" rx="5" fill="${p.statusBg || '#064E3B'}" stroke="${p.statusBorder || '#059669'}" />
        <text x="${phaseW / 2}" y="238" fill="#FFFFFF" font-size="9.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(p.statusTitle)}</text>
        <text x="${phaseW / 2}" y="252" fill="#CBD5E1" font-size="8" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(p.statusDesc)}</text>

        <!-- Compliance Target -->
        <rect x="10" y="272" width="${phaseW - 20}" height="35" rx="5" fill="#18181B" stroke="#475569" />
        <text x="${phaseW / 2}" y="287" fill="#F59E0B" font-size="8.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Audit Deliverable</text>
        <text x="${phaseW / 2}" y="300" fill="#E2E8F0" font-size="8" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(p.deliverable)}</text>
      </g>
    `;
  });

  return svgHeader(width, height, badge, "#6366F1", title, subtitle) + phasesSvg + svgFooter(width, height);
}

// ── 7. ARCHETYPE: BAR CHART / BENCHMARK METRIC ────────────────────────────────
function renderBarChart({ title, subtitle, badge = "PERFORMANCE BENCHMARK", metrics, chartTitle, chartUnit }) {
  const width = 960;
  const height = 580;
  const chartX = 80;
  const chartY = 120;
  const chartW = 800;
  const chartH = 340;

  let barsSvg = "";
  const maxVal = Math.max(...metrics.map(m => m.value));
  const rowHeight = chartH / metrics.length;

  metrics.forEach((m, idx) => {
    const y = chartY + idx * rowHeight + 15;
    const barWidth = (m.value / maxVal) * 480;
    const barColor = m.color || "#06B6D4";

    barsSvg += `
      <!-- Bar ${idx + 1} -->
      <text x="${chartX + 170}" y="${y + 22}" fill="#F8FAFC" font-size="12" font-weight="700" text-anchor="end" font-family="system-ui, sans-serif">${escapeXml(m.label)}</text>
      <text x="${chartX + 170}" y="${y + 36}" fill="#94A3B8" font-size="9" text-anchor="end" font-family="system-ui, sans-serif">${escapeXml(m.sub || '')}</text>

      <rect x="${chartX + 185}" y="${y + 8}" width="${barWidth}" height="28" rx="4" fill="${barColor}" filter="url(#shadow)" />
      <text x="${chartX + 195 + barWidth}" y="${y + 27}" fill="#FFFFFF" font-size="11" font-weight="700" font-family="system-ui, sans-serif">${m.displayValue || m.value} ${escapeXml(chartUnit)}</text>

      ${m.speedup ? `
        <rect x="${chartX + 310 + barWidth}" y="${y + 11}" width="80" height="20" rx="3" fill="#064E3B" stroke="#10B981" />
        <text x="${chartX + 350 + barWidth}" y="${y + 24}" fill="#6EE7B7" font-size="9" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">⚡ ${escapeXml(m.speedup)}</text>
      ` : ''}
    `;
  });

  const chartBox = `
    <rect x="${chartX}" y="${chartY - 25}" width="${chartW}" height="${chartH + 40}" rx="8" fill="#0F172A" stroke="#1E293B" stroke-width="1.5" />
    <text x="${chartX + 20}" y="${chartY - 5}" fill="#38BDF8" font-size="12" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(chartTitle)}</text>
    <line x1="${chartX + 180}" y1="${chartY + 10}" x2="${chartX + 180}" y2="${chartY + chartH}" stroke="#334155" stroke-width="1.5" />
    ${barsSvg}
  `;

  return svgHeader(width, height, badge, "#F59E0B", title, subtitle) + chartBox + svgFooter(width, height);
}

// ── 8. ARCHETYPE: VENN DIAGRAM ───────────────────────────────────────────────
function renderVennDiagram({ title, subtitle, badge = "FRAMEWORK SCOPE", sets }) {
  const width = 960;
  const height = 580;

  const body = `
    <g transform="translate(100, 110)">
      <!-- Outer SASE Circle -->
      <rect x="0" y="0" width="760" height="380" rx="16" fill="#0F172A" stroke="#6366F1" stroke-width="2" filter="url(#shadow)" />
      <rect x="20" y="15" width="280" height="30" rx="5" fill="#312E81" />
      <text x="160" y="35" fill="#C7D2FE" font-size="12" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">SASE (Secure Access Service Edge)</text>
      <text x="35" y="70" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">• SD-WAN Connectivity &amp; Edge Optimization</text>
      <text x="35" y="88" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">• Global Backbone Points of Presence (PoPs)</text>
      <text x="35" y="106" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">• Carrier Peering &amp; WAN Management</text>

      <!-- Middle SSE Circle -->
      <rect x="300" y="55" width="430" height="300" rx="12" fill="#1E293B" stroke="#0284C7" stroke-width="2" />
      <rect x="320" y="70" width="220" height="26" rx="5" fill="#075985" />
      <text x="430" y="87" fill="#BAE6FD" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">SSE (Security Service Edge)</text>
      <text x="335" y="120" fill="#CBD5E1" font-size="10" font-family="system-ui, sans-serif">• Cloud SWG (Secure Web Gateway)</text>
      <text x="335" y="138" fill="#CBD5E1" font-size="10" font-family="system-ui, sans-serif">• CASB (Cloud Access Security Broker)</text>
      <text x="335" y="156" fill="#CBD5E1" font-size="10" font-family="system-ui, sans-serif">• FWaaS (Firewall-as-a-Service)</text>

      <!-- Inner ZTNA Circle -->
      <rect x="360" y="180" width="340" height="155" rx="8" fill="#064E3B" stroke="#10B981" stroke-width="2" fill-opacity="0.5" />
      <rect x="380" y="195" width="230" height="26" rx="5" fill="#065F46" />
      <text x="495" y="212" fill="#A7F3D0" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">ZTNA (Zero Trust Network Access)</text>
      <text x="395" y="245" fill="#F8FAFC" font-size="10" font-weight="700" font-family="system-ui, sans-serif">★ The Core Private Access Engine</text>
      <text x="395" y="265" fill="#E2E8F0" font-size="9.5" font-family="system-ui, sans-serif">• Granular Application-Level Microtunnels (Layer 4/7)</text>
      <text x="395" y="285" fill="#E2E8F0" font-size="9.5" font-family="system-ui, sans-serif">• Outbound-Only WireGuard Mesh (100% Dark)</text>
      <text x="395" y="305" fill="#E2E8F0" font-size="9.5" font-family="system-ui, sans-serif">• Continuous Device Posture &amp; JIT Brokering</text>
    </g>
  `;

  return svgHeader(width, height, badge, "#6366F1", title, subtitle) + body + svgFooter(width, height);
}

// ── 9. ARCHETYPE: PURDUE MODEL INDUSTRIAL OT ─────────────────────────────────
function renderPurdueModel({ title, subtitle, badge = "PURDUE MODEL OT" }) {
  const width = 960;
  const height = 580;

  const body = `
    <g transform="translate(60, 95)">
      <!-- Level 4/5: Enterprise IT -->
      <rect x="0" y="0" width="840" height="65" rx="6" fill="#1E293B" stroke="#38BDF8" stroke-width="1.2" />
      <text x="20" y="28" fill="#38BDF8" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Level 4/5: Enterprise IT &amp; Cloud</text>
      <text x="20" y="48" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">ERP, Corporate Wi-Fi, Office Workstations, Vendor Support Dashboards</text>
      <rect x="680" y="16" width="140" height="32" rx="4" fill="#0F172A" stroke="#38BDF8" />
      <text x="750" y="36" fill="#E2E8F0" font-size="9.5" text-anchor="middle" font-family="system-ui, sans-serif">IdP / SSO / SCIM</text>

      <!-- DMZ Gateway (Level 3.5) -->
      <rect x="60" y="80" width="720" height="42" rx="6" fill="#064E3B" stroke="#10B981" stroke-width="1.5" />
      <text x="420" y="106" fill="#A7F3D0" font-size="11.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">🛡️ Level 3.5 Industrial DMZ: QuickZTNA Protocol Isolation Gateway</text>

      <!-- Level 3: Site Operations -->
      <rect x="0" y="135" width="840" height="65" rx="6" fill="#1E293B" stroke="#F59E0B" stroke-width="1.2" />
      <text x="20" y="163" fill="#F59E0B" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Level 3: Plant Operations &amp; SCADA Historians</text>
      <text x="20" y="183" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">Engineering Workstations, Historian DBs, Plant HMIs, Patch Management</text>
      <rect x="680" y="151" width="140" height="32" rx="4" fill="#0F172A" stroke="#F59E0B" />
      <text x="750" y="171" fill="#E2E8F0" font-size="9.5" text-anchor="middle" font-family="system-ui, sans-serif">Dark Outbound Connector</text>

      <!-- DMZ Microsegmentation Barrier -->
      <rect x="60" y="215" width="720" height="32" rx="5" fill="#450A0A" stroke="#EF4444" />
      <text x="420" y="235" fill="#FCA5A5" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">🚫 STRICT AIR-GAP: Zero Layer 3 Subnet Cross-Routing to Plant Floor</text>

      <!-- Level 2: Area Supervisory Control -->
      <rect x="0" y="260" width="840" height="65" rx="6" fill="#1E293B" stroke="#A855F7" stroke-width="1.2" />
      <text x="20" y="288" fill="#C084FC" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Level 2: Area Supervisory &amp; Local HMIs</text>
      <text x="20" y="308" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">DCS Operators, Safety Instrument Systems, Local HMI Panels, Alarm Consoles</text>

      <!-- Level 0/1: Field Devices & PLCs -->
      <rect x="0" y="340" width="840" height="75" rx="6" fill="#0F172A" stroke="#64748B" stroke-width="1.2" />
      <text x="20" y="368" fill="#E2E8F0" font-size="12" font-weight="700" font-family="system-ui, sans-serif">Level 0/1: Basic Control &amp; Physical Processes</text>
      <text x="20" y="388" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">Programmable Logic Controllers (PLCs), RTUs, Drive VFDs, Sensors, Actuators (Modbus/EtherNet-IP)</text>
      <text x="20" y="405" fill="#10B981" font-size="9" font-weight="700" font-family="system-ui, sans-serif">✓ Subnet Gateway Enclave: Agentless legacy OT hardware accessed strictly via validated JIT proxy</text>
    </g>
  `;

  return svgHeader(width, height, badge, "#F59E0B", title, subtitle) + body + svgFooter(width, height);
}

// ── 10. ARCHETYPE: DEFENSE-IN-DEPTH CONCENTRIC RINGS ─────────────────────────
function renderDefenseInDepth({ title, subtitle, badge = "DEFENSE IN DEPTH", layers }) {
  const width = 960;
  const height = 580;

  let layersSvg = "";
  const cardY = 105;
  const cardW = 820;
  const startX = 70;

  layers.forEach((l, idx) => {
    const y = cardY + idx * 95;
    layersSvg += `
      <g transform="translate(${startX}, ${y})">
        <rect x="0" y="0" width="${cardW}" height="80" rx="8" fill="#1E293B" stroke="${l.color || '#38BDF8'}" stroke-width="1.5" filter="url(#shadow)" />
        <rect x="0" y="0" width="130" height="80" rx="8" fill="${l.badgeBg || '#0284C7'}" />
        <text x="65" y="35" fill="#FFFFFF" font-size="11" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(l.ringTag)}</text>
        <text x="65" y="52" fill="#E0F2FE" font-size="9" text-anchor="middle" font-family="system-ui, sans-serif">${escapeXml(l.ringSub || '')}</text>

        <text x="150" y="28" fill="#F8FAFC" font-size="13" font-weight="700" font-family="system-ui, sans-serif">${escapeXml(l.title)}</text>
        <text x="150" y="48" fill="#94A3B8" font-size="10" font-family="system-ui, sans-serif">${escapeXml(l.desc)}</text>
        <text x="150" y="65" fill="${l.color || '#38BDF8'}" font-size="9.5" font-weight="600" font-family="system-ui, sans-serif">Enforced Controls: ${escapeXml(l.controls)}</text>
      </g>
    `;
  });

  return svgHeader(width, height, badge, "#8B5CF6", title, subtitle) + layersSvg + svgFooter(width, height);
}

console.log("Registered all 10 distinct SVG diagram archetypes!");

export {
  renderSequenceDiagram,
  renderComparisonSplit,
  renderThreatModel,
  renderDecisionTree,
  renderMeshTopology,
  renderTimelineRoadmap,
  renderBarChart,
  renderVennDiagram,
  renderPurdueModel,
  renderDefenseInDepth
};
