import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const blogDir = path.join(projectRoot, 'src', 'content', 'blog');
const diagDir = path.join(projectRoot, 'public', 'images', 'diagrams');

// 1. Generate SASE vs SSE vs ZTNA nested relationship SVG
const saseVennSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" width="100%" height="100%">
  <defs>
    <linearGradient id="sase-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="sse-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="960" height="520" rx="14" fill="#090d16" stroke="#334155" stroke-width="1.5"/>

  <!-- Outer Layer: SASE (Secure Access Service Edge) -->
  <g transform="translate(30, 24)">
    <rect width="900" height="470" rx="12" fill="url(#sase-grad)" stroke="#0284c7" stroke-width="2"/>
    <rect x="20" y="16" width="260" height="28" rx="6" fill="#0284c7"/>
    <text x="150" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">SASE (FULL CONVERGED FABRIC)</text>
    <text x="295" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="12" font-weight="500" fill="#94a3b8">Complete Convergence of Edge Security &amp; WAN Connectivity</text>

    <!-- Inner Layer 1: SSE (Security Service Edge) -->
    <g transform="translate(20, 60)">
      <rect width="860" height="270" rx="10" fill="#0b1120" stroke="#7c3aed" stroke-width="2"/>
      <rect x="18" y="14" width="220" height="24" rx="5" fill="#7c3aed"/>
      <text x="128" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">SSE (SECURITY SERVICE EDGE)</text>
      <text x="250" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-size="11" font-weight="500" fill="#cbd5e1">The Cloud-Delivered Security Stack Without Physical WAN</text>

      <!-- Component 1: ZTNA (Core Engine) -->
      <g transform="translate(18, 55)">
        <rect width="260" height="185" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <rect x="14" y="14" width="130" height="22" rx="4" fill="#0284c7"/>
        <text x="79" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">ZTNA (CORE ACCESS)</text>
        <text x="14" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="14" font-weight="700" fill="#f8fafc">Zero Trust Network Access</text>
        <text x="14" y="86" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">Per-request resource authorization</text>
        <text x="14" y="104" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">Continuous device posture checks</text>
        <text x="14" y="122" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">WireGuard dark mesh infrastructure</text>
        <text x="14" y="152" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="700" fill="#38bdf8">QuickZTNA Foundational Tier ★</text>
      </g>

      <!-- Component 2: SWG (Secure Web Gateway) -->
      <g transform="translate(294, 55)">
        <rect width="260" height="185" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <rect x="14" y="14" width="70" height="22" rx="4" fill="#475569"/>
        <text x="49" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">SWG</text>
        <text x="14" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="14" font-weight="700" fill="#f8fafc">Secure Web Gateway</text>
        <text x="14" y="86" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">Outbound web traffic filtering</text>
        <text x="14" y="104" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">Malware &amp; phishing prevention</text>
        <text x="14" y="122" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">TLS inspection &amp; policy blocking</text>
      </g>

      <!-- Component 3: CASB & FWaaS -->
      <g transform="translate(570, 55)">
        <rect width="270" height="185" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <rect x="14" y="14" width="120" height="22" rx="4" fill="#475569"/>
        <text x="74" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">CASB &amp; FWaaS</text>
        <text x="14" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="14" font-weight="700" fill="#f8fafc">SaaS Broker &amp; Firewall</text>
        <text x="14" y="86" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">Cloud DLP &amp; tenant control</text>
        <text x="14" y="104" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">Layer 3–7 cloud-delivered firewall</text>
        <text x="14" y="122" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="500" fill="#94a3b8">Cross-SaaS activity auditing</text>
      </g>
    </g>

    <!-- Inner Layer 2: SD-WAN (Transport) -->
    <g transform="translate(20, 350)">
      <rect width="860" height="100" rx="10" fill="#0b1120" stroke="#059669" stroke-width="2"/>
      <rect x="18" y="14" width="140" height="24" rx="5" fill="#059669"/>
      <text x="88" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">SD-WAN NETWORKING</text>
      <text x="170" y="31" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-size="12" font-weight="600" fill="#f8fafc">Software-Defined Wide Area Network (Transport Plane)</text>
      <text x="18" y="64" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-size="11" font-weight="400" fill="#94a3b8">Replaces expensive MPLS circuits with dynamic multi-path routing across broadband, 5G, and private fiber.</text>
      <text x="18" y="82" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-size="11" font-weight="400" fill="#94a3b8">Branch-office physical appliance interconnection and automated carrier failover.</text>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(diagDir, 'sase-sse-ztna-relationship.svg'), saseVennSvg, 'utf8');
console.log('[Generated] sase-sse-ztna-relationship.svg');

// 2. Replace ASCII in sase-vs-ztna-vs-sse.md
{
  const p = path.join(blogDir, 'sase-vs-ztna-vs-sse.md');
  let c = fs.readFileSync(p, 'utf8');
  const asciiVenn = /```[^\n]*\n[\s\S]*?┌─+┐\n\s*│\s*SASE[\s\S]*?└─+┘\n```/;
  if (asciiVenn.test(c)) {
    c = c.replace(asciiVenn, `![SASE vs SSE vs ZTNA Venn Architecture](/images/diagrams/sase-sse-ztna-relationship.svg)
*Figure 1.3: Architectural Scope Hierarchy — ZTNA as the Core Foundation of SSE and Converged SASE.*`);
    fs.writeFileSync(p, c, 'utf8');
    console.log('[Cleaned] sase-vs-ztna-vs-sse.md');
  }
}

// 3. Clean out-of-band-policy-engines.md (lines with remaining ASCII)
{
  const p = path.join(blogDir, 'out-of-band-policy-engines.md');
  let c = fs.readFileSync(p, 'utf8');
  
  // Replace Fatal Lockout ASCII flowchart
  const asciiLockout = /```[^\n]*\n\[SecOps Engineer\] ──►[\s\S]*?\[CRITICAL LOCKOUT: Gateway Orphaned\]\n```/;
  if (asciiLockout.test(c)) {
    c = c.replace(asciiLockout, `> [!WARNING]
> **The Fatal Lockout Cascade:**
> 1. **SecOps Engineer** commits rule change with an unhandled default-override.
> 2. **Central Orchestrator** compiles and pushes active policy directly into enforcement gateways.
> 3. **Implicit Deny Applied:** Remote management socket (Port 22 SSH) and gRPC signaling channels are severed.
> 4. **Orphaned State:** Controller cannot push a revert payload; edge node is hard-locked, requiring manual serial console recovery.`);
  }

  // Replace AST table
  const astTable = /```[^\n]*\n┌─+┬─+┐\n│ Concept\s+│ Architectural Role[\s\S]*?└─+┴─+┘\n```/;
  if (astTable.test(c)) {
    c = c.replace(astTable, `| Core Concept | Architectural Role in Out-of-Band Engines |
|---|---|
| **AST (Abstract Syntax Tree)** | Structural tree representation of policy logic analyzed for unreachable nodes before compilation. |
| **Control Isolation Channel** | Dedicated out-of-band signaling path kept separate from active data-plane packet filtering. |
| **Shadow Rule Evaluation** | Live mirrored telemetry evaluation pipeline that processes packets against proposed rules without mutating active tables. |
| **Reachability Graph Check** | Mathematical solver calculation verifying administrative sessions remain reachable under new rule logic. |`);
  }

  // Replace Threat Vector matrix
  const matrixTable = /```[^\n]*\n┌─+┬─+┐\n│ Threat Vector\s+│ Out-of-Band Engine[\s\S]*?└─+┴─+┘\n```/;
  if (matrixTable.test(c)) {
    c = c.replace(matrixTable, `| Threat Vector / Failure Mode | Out-of-Band Engine Mitigation Strategy |
|---|---|
| **Syntax / Parsing Failure** | Static schema validation in CI/CD pipeline prevents invalid payloads from reaching nodes. |
| **Self-Lockout Rule Push** | Reachability graph analysis blocks commits that destroy active administrative paths. |
| **Overly Broad Microsegmentation** | Shadow evaluation detects unintended packet drops against historical traffic flows. |
| **Flawed High-Volume Rule Set** | Canary deployment rolls out rules incrementally with automatic rollback on telemetry errors. |`);
  }

  fs.writeFileSync(p, c, 'utf8');
  console.log('[Cleaned] out-of-band-policy-engines.md');
}

// 4. Clean remote-workforce-security-os.md
{
  const p = path.join(blogDir, 'remote-workforce-security-os.md');
  let c = fs.readFileSync(p, 'utf8');

  // Threat table
  const threatTable = /```[^\n]*\n┌─+┬─+┐\n│ Threat Vector[\s\S]*?└─+┴─+┘\n```/;
  if (threatTable.test(c)) {
    c = c.replace(threatTable, `| Threat Vector | QuickZTNA Mitigation Mechanism |
|---|---|
| **Compromised User Credentials** | Phishing-resistant MFA (FIDO2) + contextual device posture evaluation. |
| **Unpatched Remote Laptops** | Real-time TPM & OS patch verification; automatic session quarantine on non-compliance. |
| **Lateral Subnet Scanning** | Microsegmentation by default; endpoints cannot route laterally to adjacent workstations. |
| **Exfiltration via Public Internet** | Outbound-only tunnel enforcement; direct egress to unapproved IPs blocked by policy. |`);
  }

  // Technology table
  const techTable = /```[^\n]*\n┌─+┬─+┬─+┐\n│ Technology\s+│ Primary Purpose[\s\S]*?└─+┴─+┴─+┘\n```/;
  if (techTable.test(c)) {
    c = c.replace(techTable, `| Technology | Primary Purpose | Key Architectural Limitation |
|---|---|---|
| **Traditional VPN** | Network-level encrypted tunneling | Grants full Layer 3 subnet access; broad lateral attack radius. |
| **Reverse Proxy (ZTNA 1.0)** | Application-layer HTTP proxying | High latency, requires public DNS resolution, limited non-web protocol support. |
| **Security OS (QuickZTNA)** | Kernel WireGuard mesh + continuous posture | None: Direct line-rate throughput, 100% dark infrastructure via SPA. |`);
  }

  fs.writeFileSync(p, c, 'utf8');
  console.log('[Cleaned] remote-workforce-security-os.md');
}

// 5. Clean securing-third-party-vendor-access-enforce-ztna-external-contractors.md
{
  const p = path.join(blogDir, 'securing-third-party-vendor-access-enforce-ztna-external-contractors.md');
  let c = fs.readFileSync(p, 'utf8');

  // Vendor lifecycle boxes
  const lifecycleBoxes = /```[^\n]*\n┌─+┐\s+┌─+┐\s+┌─+┐\s+┌─+┐\n│\s+Onboarding[\s\S]*?└─+┘\n```/;
  if (lifecycleBoxes.test(c)) {
    c = c.replace(lifecycleBoxes, `> [!NOTE]
> **Vendor Access Lifecycle Flow:**
> \`1. Onboarding (Policy-first)\` ──► \`2. Access Grant (JIT Scoped)\` ──► \`3. Active Use (Audited Live)\` ──► \`4. Offboarding (Auto-Revoked)\``);
  }

  // 7-step checklist box
  const checklistBox = /```[^\n]*\n┌─+┐\n│ 1\. Classify Vendor Risk[\s\S]*?└─+┘\n```/;
  if (checklistBox.test(c)) {
    c = c.replace(checklistBox, `| Phase | Program Implementation Step | Security Governance Control |
|---|---|---|
| **1. Classification** | Classify Vendor Risk (Low / Medium / High) | Match regulatory scope to contractor profile. |
| **2. Contract** | Define Explicit Access Contracts per Engagement | Limit reachability strictly to required applications. |
| **3. Federation** | Federate Identity via Enterprise IdP (OIDC / SCIM) | Enforce single source of truth for vendor credentials. |
| **4. Policy** | Author Deny-by-Default ABAC Rules | Restrict access to specific Layer 4/7 endpoints. |
| **5. JIT Elevation** | Mandate JIT Approvals for Sensitive Workloads | Enforce ephemeral, time-bounded session grants. |
| **6. Review** | Schedule Recurring Access Review Campaigns | Verify continuing business justification. |
| **7. Deprovision** | Automate Instant Single-Action Offboarding | Revoke all cryptographic peer keys simultaneously. |`);
  }

  fs.writeFileSync(p, c, 'utf8');
  console.log('[Cleaned] securing-third-party-vendor-access-enforce-ztna-external-contractors.md');
}

// 6. Clean serverless-zero-trust-aws-lambda-cloud-functions.md
{
  const p = path.join(blogDir, 'serverless-zero-trust-aws-lambda-cloud-functions.md');
  let c = fs.readFileSync(p, 'utf8');

  // Lambda invocation ASCII box
  const lambdaBox = /```[^\n]*\n┌─+┐[\s\S]*?1\. Trigger[\s\S]*?└─+┘\n```/;
  if (lambdaBox.test(c)) {
    c = c.replace(lambdaBox, `> [!NOTE]
> **Serverless Zero-Trust Invocation Sequence:**
> 1. **Event Trigger:** Client / EventBridge triggers serverless function.
> 2. **OIDC Workload Auth:** Function issues ephemeral JWT token via Workload Identity.
> 3. **WireGuard Micro-Tunnel:** Kernel extension establishes authenticated tunnel to target backend.
> 4. **Resource Access:** Scoped SQL / internal API request executed; zero lateral network exposure.`);
  }

  // Four-way comparison box
  const fourWayBox = /```[^\n]*\n\+─+[\s\S]*?1\. VPC Attachment[\s\S]*?\+─+\n```/;
  if (fourWayBox.test(c)) {
    c = c.replace(fourWayBox, `| Architecture Pattern | Connectivity Flow | Primary Limitation / Trade-off |
|---|---|---|
| **1. VPC Attachment + NAT Gateway** | \`[Lambda] -> (ENI) -> [VPC Subnet] -> [NAT Gateway] -> [Internet/DB]\` | High cold-start penalty (1-3s), per-GB NAT egress billing, coarse network location trust. |
| **2. VPC Endpoints (AWS PrivateLink)** | \`[Lambda] -> [PrivateLink Interface] -> [Managed AWS Service Only]\` | Locked to supported cloud services; cannot reach arbitrary private servers or legacy VMs. |
| **3. Private Service Connect (GCP)** | \`[Cloud Run] -> [PSC Forwarding Rule] -> [Managed GCP Service Only]\` | GCP-only silo; cannot reach on-premises workloads or cross-cloud applications. |
| **4. Encrypted WireGuard Mesh + ABAC** | \`[Function] -> (Workload Identity) -> [WireGuard Tunnel] -> [Node/DB]\` | Line-rate performance, zero open ingress ports, cryptographic microsegmentation. |`);
  }

  fs.writeFileSync(p, c, 'utf8');
  console.log('[Cleaned] serverless-zero-trust-aws-lambda-cloud-functions.md');
}

// 7. Clean zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes.md
{
  const p = path.join(blogDir, 'zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes.md');
  let c = fs.readFileSync(p, 'utf8');

  // Threat mitigation matrix
  const threatMatrix = /```[^\n]*\n┌─+┬─+┐\n│ Threat Vector\s+│ Zero Trust CI\/CD Mitigation[\s\S]*?└─+┴─+┘\n```/;
  if (threatMatrix.test(c)) {
    c = c.replace(threatMatrix, `| CI/CD Threat Vector | Zero Trust CI/CD Mitigation Mechanism |
|---|---|
| **Compromised Dependency / Script** | Outbound egress locked down; runner blocked from external C2 beaconing. |
| **Stolen Runner Environment Token** | Workload Identity issues single-job ephemeral tokens; expired immediately after build. |
| **Lateral Scanning into Production** | Microsegmentation isolates runner; zero network path to production databases. |
| **Long-Lived SSH Deployment Keys** | JIT access workflows replace static credentials with time-bounded WireGuard sessions. |`);
  }

  // Runner lifecycle flow
  const runnerFlow = /```[^\n]*\n┌─+┐[\s\S]*?CI\/CD Ephemeral Runner Lifecycle[\s\S]*?└─+┘\n```/;
  if (runnerFlow.test(c)) {
    c = c.replace(runnerFlow, `> [!NOTE]
> **Ephemeral Runner Zero-Trust Lifecycle:**
> \`1. Webhook Trigger\` ──► \`2. Ephemeral VM/Container Spawn\` ──► \`3. OIDC Workload Token Exchange\` ──► \`4. Scoped WireGuard Mesh Join\` ──► \`5. Job Execution & Egress Filtering\` ──► \`6. Immediate Cryptographic Teardown\``);
  }

  fs.writeFileSync(p, c, 'utf8');
  console.log('[Cleaned] zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes.md');
}
