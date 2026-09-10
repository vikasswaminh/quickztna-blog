import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogDiagramConfigs } from './blog-diagram-data.mjs';
import {
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
} from './generate-50-unique-diagrams.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputDir = path.join(projectRoot, 'public', 'images', 'diagrams');
const blogDir = path.join(projectRoot, 'src', 'content', 'blog');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting generation of 50 unique diagrams...`);

// Helper to generate tailored architecture blueprint SVG (Figure 1.2)
function renderArchitectureBlueprint(cfg) {
  const width = 960;
  const height = 580;
  
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="auto" style="background:#070C18;border-radius:12px;border:1px solid #1E293B;">
  <defs>
    <filter id="archShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Top Banner -->
  <rect x="0" y="0" width="${width}" height="68" fill="#0B132B" />
  <rect x="24" y="18" width="130" height="26" rx="5" fill="#0284C7" />
  <text x="89" y="35" fill="#FFFFFF" font-size="10.5" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif" letter-spacing="1">SYSTEM DESIGN</text>
  <text x="175" y="35" fill="#F8FAFC" font-size="16" font-weight="700" font-family="system-ui, sans-serif">${cfg.title}</text>
  <text x="175" y="52" fill="#38BDF8" font-size="11.5" font-family="system-ui, sans-serif">${cfg.subtitle}</text>
  <line x1="0" y1="68" x2="${width}" y2="68" stroke="#1E293B" stroke-width="1.5" />

  <!-- Tier 1: Client & Ingress Tier -->
  <g transform="translate(40, 95)">
    <rect x="0" y="0" width="880" height="115" rx="8" fill="#0F172A" stroke="#334155" stroke-width="1.2" filter="url(#archShadow)" />
    <rect x="0" y="0" width="880" height="26" rx="8" fill="#1E293B" />
    <text x="20" y="18" fill="#38BDF8" font-size="10.5" font-weight="700" font-family="system-ui, sans-serif">1. CLIENT &amp; INGRESS TIER (EDGE DEFENSE)</text>
    
    <rect x="20" y="38" width="265" height="62" rx="6" fill="#1E293B" stroke="#0284C7" stroke-width="1" />
    <text x="32" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Endpoint Workstations</text>
    <text x="32" y="74" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">Kernel WireGuard Driver (ztna0)</text>
    <text x="32" y="88" fill="#6EE7B7" font-size="9" font-family="system-ui, sans-serif">✓ Continuous TPM &amp; EDR Posture</text>

    <rect x="305" y="38" width="270" height="62" rx="6" fill="#1E293B" stroke="#0284C7" stroke-width="1" />
    <text x="317" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Single-Packet Authorization (SPA)</text>
    <text x="317" y="74" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">100% Dark Ingress (0 Open Ports)</text>
    <text x="317" y="88" fill="#6EE7B7" font-size="9" font-family="system-ui, sans-serif">✓ Silent Packet Drop for Scanners</text>

    <rect x="595" y="38" width="265" height="62" rx="6" fill="#1E293B" stroke="#0284C7" stroke-width="1" />
    <text x="607" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Global Edge Relays (DERP/STUN)</text>
    <text x="607" y="74" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">Frankfurt &amp; Bangalore POPs</text>
    <text x="607" y="88" fill="#6EE7B7" font-size="9" font-family="system-ui, sans-serif">✓ Automated NAT Traversal Fallback</text>
  </g>

  <!-- Connective Arrows -->
  <line x1="480" y1="210" x2="480" y2="240" stroke="#0284C7" stroke-width="2" stroke-dasharray="4,4" />
  <text x="495" y="230" fill="#0284C7" font-size="9" font-weight="600" font-family="system-ui, sans-serif">Out-of-band Policy Signaling (Zero Payload Transit)</text>

  <!-- Tier 2: Decoupled Control & Governance Plane -->
  <g transform="translate(40, 240)">
    <rect x="0" y="0" width="880" height="130" rx="8" fill="#0F172A" stroke="#059669" stroke-width="1.5" filter="url(#archShadow)" />
    <rect x="0" y="0" width="880" height="26" rx="8" fill="#064E3B" />
    <text x="20" y="18" fill="#A7F3D0" font-size="10.5" font-weight="700" font-family="system-ui, sans-serif">2. DECOUPLED CONTROL PLANE (POLICY &amp; KEY GOVERNANCE)</text>
    
    <rect x="20" y="38" width="195" height="75" rx="6" fill="#1E293B" stroke="#10B981" stroke-width="1" />
    <text x="32" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">ABAC Policy Evaluator</text>
    <text x="32" y="74" fill="#94A3B8" font-size="9" font-family="system-ui, sans-serif">Out-of-Band AST Solver</text>
    <text x="32" y="88" fill="#E2E8F0" font-size="8.5" font-family="system-ui, sans-serif">Default-Deny Rule Matrix</text>
    <text x="32" y="102" fill="#6EE7B7" font-size="8.5" font-family="system-ui, sans-serif">✓ Sub-150ms Rule Compile</text>

    <rect x="235" y="38" width="195" height="75" rx="6" fill="#1E293B" stroke="#10B981" stroke-width="1" />
    <text x="247" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">SCIM 2.0 &amp; Multi-IdP</text>
    <text x="247" y="74" fill="#94A3B8" font-size="9" font-family="system-ui, sans-serif">Real-Time Directory Sync</text>
    <text x="247" y="88" fill="#E2E8F0" font-size="8.5" font-family="system-ui, sans-serif">Okta, Entra ID, Google</text>
    <text x="247" y="102" fill="#6EE7B7" font-size="8.5" font-family="system-ui, sans-serif">✓ &lt;1s Session Kill-Switch</text>

    <rect x="450" y="38" width="195" height="75" rx="6" fill="#1E293B" stroke="#10B981" stroke-width="1" />
    <text x="462" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Ephemeral Key Rotator</text>
    <text x="462" y="74" fill="#94A3B8" font-size="9" font-family="system-ui, sans-serif">Netlink Atomic Key Swapping</text>
    <text x="462" y="88" fill="#E2E8F0" font-size="8.5" font-family="system-ui, sans-serif">Curve25519 / ML-KEM-768</text>
    <text x="462" y="102" fill="#6EE7B7" font-size="8.5" font-family="system-ui, sans-serif">✓ Zero Disk Storage (RAM)</text>

    <rect x="665" y="38" width="195" height="75" rx="6" fill="#1E293B" stroke="#10B981" stroke-width="1" />
    <text x="677" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Just-in-Time (JIT) Engine</text>
    <text x="677" y="74" fill="#94A3B8" font-size="9" font-family="system-ui, sans-serif">ChatOps Dual-Approval</text>
    <text x="677" y="88" fill="#E2E8F0" font-size="8.5" font-family="system-ui, sans-serif">Zero-Standing Privileges</text>
    <text x="677" y="102" fill="#6EE7B7" font-size="8.5" font-family="system-ui, sans-serif">✓ Automated TTL Eviction</text>
  </g>

  <!-- Connective Arrows -->
  <line x1="480" y1="370" x2="480" y2="400" stroke="#10B981" stroke-width="2" />
  <text x="495" y="390" fill="#10B981" font-size="9" font-weight="600" font-family="system-ui, sans-serif">Direct Peer-to-Peer Encrypted Data Path</text>

  <!-- Tier 3: Workload & Microsegmentation Enclave -->
  <g transform="translate(40, 400)">
    <rect x="0" y="0" width="880" height="120" rx="8" fill="#0F172A" stroke="#6366F1" stroke-width="1.2" filter="url(#archShadow)" />
    <rect x="0" y="0" width="880" height="26" rx="8" fill="#312E81" />
    <text x="20" y="18" fill="#C7D2FE" font-size="10.5" font-weight="700" font-family="system-ui, sans-serif">3. PROTECTED DATA PLANE (DARK WORKLOAD ENCLAVES)</text>

    <rect x="20" y="38" width="265" height="66" rx="6" fill="#1E293B" stroke="#818CF8" stroke-width="1" />
    <text x="32" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Multi-Cloud VPC Subnet Routers</text>
    <text x="32" y="74" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">AWS, GCP, Azure Private Subnets</text>
    <text x="32" y="90" fill="#A7F3D0" font-size="9" font-family="system-ui, sans-serif">✓ MagicDNS Overlap Resolution</text>

    <rect x="305" y="38" width="270" height="66" rx="6" fill="#1E293B" stroke="#818CF8" stroke-width="1" />
    <text x="317" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Microsegmented Databases &amp; K8s</text>
    <text x="317" y="74" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">Dark PostgreSQL, MySQL, Kube-API</text>
    <text x="317" y="90" fill="#A7F3D0" font-size="9" font-family="system-ui, sans-serif">✓ Granular Single-Port Microtunnels</text>

    <rect x="595" y="38" width="265" height="66" rx="6" fill="#1E293B" stroke="#818CF8" stroke-width="1" />
    <text x="607" y="58" fill="#F8FAFC" font-size="11" font-weight="700" font-family="system-ui, sans-serif">Immutable Audit Evidence Lake</text>
    <text x="607" y="74" fill="#94A3B8" font-size="9.5" font-family="system-ui, sans-serif">WORM Encrypted Object Lock Storage</text>
    <text x="607" y="90" fill="#A7F3D0" font-size="9" font-family="system-ui, sans-serif">✓ SOC 2 &amp; HIPAA Auditor Ready</text>
  </g>

  <!-- Footer -->
  <line x1="20" y1="${height - 28}" x2="${width - 20}" y2="${height - 28}" stroke="#1E293B" stroke-width="1" />
  <text x="24" y="${height - 12}" fill="#64748B" font-size="10" font-family="system-ui, sans-serif">QuickZTNA Master System Design Blueprint · End-to-End Zero Trust Architecture</text>
  <text x="${width - 24}" y="${height - 12}" fill="#38BDF8" font-size="10" font-weight="600" text-anchor="end" font-family="system-ui, sans-serif">Decoupled Policy Plane &amp; Kernel WireGuard</text>
</svg>
  `.trim();
}

let generatedCount = 0;

for (const cfg of blogDiagramConfigs) {
  let flowSvg = "";

  switch (cfg.type) {
    case 'sequence':
      flowSvg = renderSequenceDiagram(cfg);
      break;
    case 'comparison_split':
      flowSvg = renderComparisonSplit(cfg);
      break;
    case 'threat_model':
      flowSvg = renderThreatModel(cfg);
      break;
    case 'decision_tree':
      flowSvg = renderDecisionTree(cfg);
      break;
    case 'mesh_network':
      flowSvg = renderMeshTopology(cfg);
      break;
    case 'timeline':
      flowSvg = renderTimelineRoadmap(cfg);
      break;
    case 'bar_chart':
      flowSvg = renderBarChart(cfg);
      break;
    case 'venn':
      flowSvg = renderVennDiagram(cfg);
      break;
    case 'purdue_model':
      flowSvg = renderPurdueModel(cfg);
      break;
    case 'defense_in_depth':
      flowSvg = renderDefenseInDepth(cfg);
      break;
    default:
      flowSvg = renderComparisonSplit(cfg);
  }

  // Save Flow diagram
  const flowPath = path.join(outputDir, `${cfg.slug}-flow.svg`);
  fs.writeFileSync(flowPath, flowSvg, 'utf-8');

  // Save Architecture diagram (clean, customized blueprint)
  const archSvg = renderArchitectureBlueprint(cfg);
  const archPath = path.join(outputDir, `${cfg.slug}-architecture.svg`);
  fs.writeFileSync(archPath, archSvg, 'utf-8');

  generatedCount++;
  console.log(`[${generatedCount}/50] Generated diagrams for: ${cfg.slug} (Type: ${cfg.type})`);
}

console.log(`\nSUCCESS: Generated 100 distinct diagram assets across all 50 blogs!`);
