import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogDiagramConfigs } from './blog-diagram-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const blogDir = path.join(projectRoot, 'src', 'content', 'blog');

function getDiagramAlt(cfg) {
  switch (cfg.type) {
    case 'timeline': return `Regulatory Roadmap: ${cfg.title}`;
    case 'threat_model': return `Threat Model: ${cfg.title}`;
    case 'decision_tree': return `Decision Flowchart: ${cfg.title}`;
    case 'comparison_split': return `Architecture Comparison: ${cfg.title}`;
    case 'sequence': return `Protocol Sequence: ${cfg.title}`;
    case 'mesh_network': return `Mesh Topology: ${cfg.title}`;
    case 'bar_chart': return `Benchmark Comparison: ${cfg.title}`;
    case 'purdue_model': return `Purdue Model: ${cfg.title}`;
    case 'defense_in_depth': return `Defense in Depth: ${cfg.title}`;
    case 'venn': return `Scope Analysis: ${cfg.title}`;
    default: return `Architecture Diagram: ${cfg.title}`;
  }
}

function getCaption(cfg) {
  switch (cfg.type) {
    case 'timeline': return `Figure 1.1: Regulatory Milestones & Compliance Migration Roadmap — ${cfg.title}.`;
    case 'threat_model': return `Figure 1.1: Attack Vector Threat Model & Zero Trust Interception Gate — ${cfg.title}.`;
    case 'decision_tree': return `Figure 1.1: Multi-Stage Policy Decision Flowchart & Gating Logic — ${cfg.title}.`;
    case 'comparison_split': return `Figure 1.1: Architectural Comparison & Failure Mode Analysis — ${cfg.title}.`;
    case 'sequence': return `Figure 1.1: Protocol Handshake Sequence & Lifeline Verification Flow — ${cfg.title}.`;
    case 'mesh_network': return `Figure 1.1: Distributed Mesh Topology & Multi-Cloud Peering Matrix — ${cfg.title}.`;
    case 'bar_chart': return `Figure 1.1: Empirical Benchmark Comparison & Overhead Metrics — ${cfg.title}.`;
    case 'purdue_model': return `Figure 1.1: Purdue Model Industrial OT/IT Segmentation Architecture — ${cfg.title}.`;
    case 'defense_in_depth': return `Figure 1.1: Concentric Defense-in-Depth Layered Security Architecture — ${cfg.title}.`;
    case 'venn': return `Figure 1.1: Architectural Scope & Convergence Analysis — ${cfg.title}.`;
    default: return `Figure 1.1: Zero Trust Technical Architecture Breakdown — ${cfg.title}.`;
  }
}

function getExplanationMarkdown(cfg) {
  switch (cfg.type) {
    case 'timeline':
      return [
        '### Regulatory Mandates & Phased Migration Milestones',
        '',
        `The timeline roadmap above charts the statutory compliance gates and cryptographic migration milestones for **${cfg.title}**:`,
        '',
        ...cfg.phases.map(p => 
          `- **${p.phaseTag} (${p.timeWindow}) — ${p.title}:** ${p.desc}\n  - **Requirement 1:** ${p.req1}\n  - **Requirement 2:** ${p.req2}\n  - **Requirement 3:** ${p.req3}\n  - **Audit Deliverable:** \`${p.deliverable}\` (${p.statusTitle} — ${p.statusDesc})`
        )
      ].join('\n');

    case 'threat_model':
      return [
        '### Attack Surface, Interception Barrier & Cryptographic Enclave Analysis',
        '',
        `The threat model above diagrams the exploit vectors, inline interception gates, and protected workloads for **${cfg.title}**:`,
        '',
        `1. **Threat Vector & Infiltration Origin (${cfg.attacker.name}):** ${cfg.attacker.desc1}; ${cfg.attacker.desc2}. Identified entry points:`,
        `   - ${cfg.entryPoint.step1}`,
        `   - ${cfg.entryPoint.step2}`,
        `   - ${cfg.entryPoint.step3}`,
        `2. **Zero Trust Enforcement Gate (${cfg.securityGate.name}):** Intercepts traffic at the operating system kernel before network egress:`,
        `   - **${cfg.securityGate.check1}:** ${cfg.securityGate.sub1}`,
        `   - **${cfg.securityGate.check2}:** ${cfg.securityGate.sub2}`,
        `3. **Protected Workload Enclave (${cfg.protectedAsset.name}):** Validated sessions terminate inside isolated execution boundaries:`,
        `   - ${cfg.protectedAsset.item1}`,
        `   - ${cfg.protectedAsset.item2}`,
        `   - ${cfg.protectedAsset.item3}`,
        `4. **SIEM Telemetry & Forensic Audit (${cfg.siemNode.title}):** ${cfg.siemNode.desc1} ${cfg.siemNode.desc2}`
      ].join('\n');

    case 'decision_tree':
      return [
        '### Multi-Stage Gating Logic & Policy Evaluation Flow',
        '',
        `The decision flowchart above illustrates the sequential verification pipeline enforced by **${cfg.title}**:`,
        '',
        ...cfg.stages.map(s => 
          `- **${s.stageName} — ${s.gateTitle}:** ${s.gateDesc}\n  - **Verification Rules:** ${s.rule1}; ${s.rule2}\n  - **Branch Outcome:** Passes to *${s.passAction}*; non-compliant requests trigger *${s.failAction}*.`
        )
      ].join('\n');

    case 'comparison_split':
      return [
        '### Architectural Divergence & Failure Mode Analysis',
        '',
        `The architectural contrast above details the structural differences between legacy approaches and modern Zero Trust for **${cfg.title}**:`,
        '',
        `#### 1. Legacy Limitations: ${cfg.legacyTitle}`,
        ...cfg.legacyItems.map(item => `- **${item.title}:** ${item.desc1} ${item.desc2}`),
        '',
        `#### 2. Modern Zero Trust Guarantees: ${cfg.modernTitle}`,
        ...cfg.modernItems.map(item => `- **${item.title}:** ${item.desc1} ${item.desc2}`)
      ].join('\n');

    case 'sequence':
      return [
        '### Protocol Handshake & Verification Sequence',
        '',
        `The sequence diagram above traces the chronological protocol transactions across participating lifelines for **${cfg.title}**:`,
        '',
        ...cfg.steps.map((s, idx) => {
          const fromName = cfg.participants[s.from]?.name || 'Origin';
          const toName = cfg.participants[s.to]?.name || 'Target';
          return `${idx + 1}. **${s.label} (${fromName} → ${toName}):** ${s.detail}`;
        })
      ].join('\n');

    case 'mesh_network':
      return [
        '### Distributed Mesh Topology & Multi-Cloud Peering Matrix',
        '',
        `The network topology above maps the peer-to-peer overlay and encrypted data plane for **${cfg.title}**:`,
        '',
        `- **Coordination Layer (${cfg.controlPlane.name}):** ${cfg.controlPlane.desc}`,
        '- **Distributed Mesh Nodes:**',
        ...cfg.nodes.map(n => `  - **${n.zone} (${n.name}):** ${n.ip}. ${n.detail1}; ${n.detail2}.`),
        '- **Direct Point-to-Point Transit:** Endpoints negotiate direct UDP sockets via STUN/DERP hole-punching, entirely bypassing centralized VPN concentrator bottlenecks.'
      ].join('\n');

    case 'bar_chart':
      return [
        '### Empirical Benchmark Analysis & Comparative Metrics',
        '',
        `The benchmark chart above quantifies **${cfg.chartTitle}** across evaluated architectures for **${cfg.title}**:`,
        '',
        ...cfg.metrics.map(m => 
          `- **${m.label} (${m.sub}):** \`${m.displayValue} ${cfg.chartUnit}\`${m.speedup ? ` (*${m.speedup}*)` : ''}`
        )
      ].join('\n');

    case 'purdue_model':
      return [
        '### Purdue Model Industrial OT/IT Segmentation Breakdown',
        '',
        `The architecture above enforces ISA-95 / Purdue Model isolation across critical infrastructure for **${cfg.title}**:`,
        '',
        '- **Enterprise & Plant Operations (Levels 3 & 4):** Cloud reporting, central ERP, and plant historians communicate across monitored boundaries with strict attribute-based access controls.',
        '- **OT/IT DMZ Microsegmentation Barrier:** A strict air-gap boundary prevents Layer 3 cross-subnet routing between corporate IT networks and the physical production floor.',
        '- **Area Supervisory & Local HMIs (Level 2):** Distributed control systems (DCS) and human-machine interfaces operate behind localized zero trust policy proxies.',
        '- **Field Devices & Physical Control (Levels 0 & 1):** Programmable logic controllers (PLCs), remote terminal units (RTUs), and actuator drives are kept agentless and completely dark, reachable solely through just-in-time authorized proxies.'
      ].join('\n');

    case 'defense_in_depth':
      return [
        '### Concentric Defense-in-Depth Layer Breakdown',
        '',
        `The layered security model above outlines concentric defensive controls spanning from the hardware perimeter to the data core for **${cfg.title}**:`,
        '',
        ...cfg.layers.map(l => 
          `- **${l.ringTag} — ${l.title}:** ${l.desc} *Enforced Controls:* ${l.controls}`
        )
      ].join('\n');

    case 'venn':
      return [
        '### Architectural Scope & Boundary Overlap Analysis',
        '',
        `The Venn diagram above models the distinct responsibilities and convergence points across SASE, SSE, and ZTNA for **${cfg.title}**:`,
        '',
        '- **SASE (Secure Access Service Edge):** Encompasses wide-area networking (SD-WAN) and cloud-delivered security services into a comprehensive global architecture.',
        '- **SSE (Security Service Edge):** Focuses specifically on the unified security service stack (SWG, CASB, and DLP) delivered from the cloud edge.',
        '- **ZTNA (Zero Trust Network Access):** Forms the foundational, identity-bound, dark-endpoint connectivity layer providing direct, least-privilege tunnels to private enterprise workloads.'
      ].join('\n');

    default:
      throw new Error(`Unknown diagram archetype: ${cfg.type}`);
  }
}

let updatedCount = 0;

for (const cfg of blogDiagramConfigs) {
  const filePath = path.join(blogDir, `${cfg.slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove repetitive Figure 1.2
  const fig2Regex = /\n*!\[System Design Architecture:.*?\]\(.*?\/images\/diagrams\/.*?-architecture\.svg\)\s*\n\*Figure 1\.2: End-to-End System Design Architecture Blueprint[^\n]*\*\n*/g;
  content = content.replace(fig2Regex, '\n\n');

  // 2. Replace Figure 1.1 + old breakdown block
  const flowRegex = /!\[.*?\]\(\/images\/diagrams\/.*?-flow\.svg\)[\s\S]*?### Architecture & Workflow Breakdown[\s\S]*?(?=\n\n---|\n## |\n### 1\. |\n### Unvetted|\nThe operational breakdown)/;

  const alt = getDiagramAlt(cfg);
  const caption = getCaption(cfg);
  const explanation = getExplanationMarkdown(cfg);

  const replacementBlock = `![${alt}](/images/diagrams/${cfg.slug}-flow.svg)\n*${caption}*\n\n${explanation}\n`;

  if (!flowRegex.test(content)) {
    console.error(`Flow pattern did not match for: ${cfg.slug}`);
    continue;
  }

  content = content.replace(flowRegex, replacementBlock);
  fs.writeFileSync(filePath, content, 'utf8');
  updatedCount++;
  console.log(`[${updatedCount}/50] Updated: ${cfg.slug} (Type: ${cfg.type})`);
}

console.log(`\nALL DONE! Successfully updated ${updatedCount} blog posts with custom diagrams and tailored explanations.`);
