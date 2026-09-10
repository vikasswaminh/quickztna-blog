import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.join(path.dirname(__dirname), 'src', 'content', 'blog');

// 1. securing-third-party-vendor-access-enforce-ztna-external-contractors.md
{
  const p = path.join(blogDir, 'securing-third-party-vendor-access-enforce-ztna-external-contractors.md');
  let c = fs.readFileSync(p, 'utf8');
  const asciiBox = /```[^\n]*\n┌─+┐\n│\s+ZTNA Vendor Access Model[\s\S]*?└─+┘\n```/;
  if (asciiBox.test(c)) {
    c = c.replace(asciiBox, `> [!NOTE]
> **ZTNA Vendor Access Model:** The external contractor device undergoes continuous posture verification before establishing an authenticated WireGuard tunnel. Access is strictly scoped to the authorized application port (e.g. \`DB:5432\`), leaving the remainder of corporate infrastructure completely dark with automated JIT session revocation.`);
    fs.writeFileSync(p, c, 'utf8');
    console.log('[Cleaned] securing-third-party-vendor-access-enforce-ztna-external-contractors.md');
  }
}

// 2. serverless-zero-trust-aws-lambda-cloud-functions.md
{
  const p = path.join(blogDir, 'serverless-zero-trust-aws-lambda-cloud-functions.md');
  let c = fs.readFileSync(p, 'utf8');
  const asciiBox = /```[^\n]*\n\+─+[\s\S]*?\+─+\n```/;
  const table = `| Architecture Pattern | Connectivity Flow | Primary Limitation / Trade-off |
|---|---|---|
| **1. VPC Attachment + NAT Gateway** | \`[Lambda] -> (ENI) -> [VPC Subnet] -> [NAT Gateway] -> [Internet/DB]\` | High cold-start penalty (1-3s), per-GB NAT egress billing, coarse network location trust. |
| **2. VPC Endpoints (AWS PrivateLink)** | \`[Lambda] -> [PrivateLink Interface] -> [Managed AWS Service Only]\` | Locked to supported cloud services; cannot reach arbitrary private servers or legacy VMs. |
| **3. Private Service Connect (GCP)** | \`[Cloud Run] -> [PSC Forwarding Rule] -> [Managed GCP Service Only]\` | GCP-only silo; cannot reach on-premises workloads or cross-cloud applications. |
| **4. Encrypted WireGuard Mesh + ABAC** | \`[Function] -> (Workload Identity) -> [WireGuard Tunnel] -> [Node/DB]\` | Line-rate performance, zero open ingress ports, cryptographic microsegmentation. |`;
  if (asciiBox.test(c)) {
    c = c.replace(asciiBox, table);
    fs.writeFileSync(p, c, 'utf8');
    console.log('[Cleaned] serverless-zero-trust-aws-lambda-cloud-functions.md');
  }
}

// 3. ephemeral-key-architecture.md
{
  const p = path.join(blogDir, 'ephemeral-key-architecture.md');
  let c = fs.readFileSync(p, 'utf8');
  const asciiBox = /```[^\n]*\n┌─+┬─+┬─+┐[\s\S]*?└─+┴─+┴─+┘\n```/;
  const table = `| Attribute | Native WireGuard Rekeying | EKA Identity Rekeying |
|---|---|---|
| **Execution Layer** | In-band (Kernel Crypto Engine) | Out-of-band (Control Plane) |
| **Trigger Interval** | Every 120s or 2^20 packets | Every 60s – 15 mins or posture trigger |
| **Rotated Keys** | Symmetric Session Keys | Asymmetric Curve25519 Identity Keys |
| **Underlying Peer Identity** | Unchanged (Static Curve25519) | Fully Destroyed & Replaced in Memory |
| **Identity & Posture Binding** | None (Layer 3/4 only) | Continuously verified via OIDC & EDR feeds |`;
  if (asciiBox.test(c)) {
    c = c.replace(asciiBox, table);
    fs.writeFileSync(p, c, 'utf8');
    console.log('[Cleaned] ephemeral-key-architecture.md');
  }
}

// 4. out-of-band-policy-engines.md
{
  const p = path.join(blogDir, 'out-of-band-policy-engines.md');
  let c = fs.readFileSync(p, 'utf8');
  const asciiTable = /```[^\n]*\n┌─+┬─+┐[\s\S]*?└─+┴─+┘\n```/;
  const table = `| Concept | Architectural Role |
|---|---|
| **AST (Abstract Syntax Tree)** | Structural tree representation of policy code to parse logic and analyze semantics before compilation. |
| **Control Isolation Channel** | Protected out-of-band signaling path kept strictly distinct from data plane packet filtering. |
| **Shadow Rule Evaluation** | Live telemetry evaluation pipeline that processes packets against proposed rules without mutating active tables. |
| **Reachability Graph Check** | Mathematical solver calculation verifying administrative sessions remain reachable under new rule logic. |`;
  if (asciiTable.test(c)) {
    c = c.replace(asciiTable, table);
    fs.writeFileSync(p, c, 'utf8');
    console.log('[Cleaned] out-of-band-policy-engines.md');
  }
}

// 5. remote-workforce-security-os.md
{
  const p = path.join(blogDir, 'remote-workforce-security-os.md');
  let c = fs.readFileSync(p, 'utf8');
  const asciiEras = /```[^\n]*\n\s*┌─+┐\n\s*│ Era 1: Dial-Up[\s\S]*?└─+┘\n```/;
  const erasTable = `| Remote Access Era | Architectural Model | Primary Trust Boundary | Core Limitation |
|---|---|---|---|
| **Era 1: Dial-Up & PPP (1990s)** | Dedicated modem pools & physical circuits | Physical phone line verification | Extremely low bandwidth, rigid physical hardware coupling |
| **Era 2: IPSec & SSL VPNs (2000s)** | Encrypted transport tunnels over public internet | Castle-and-moat: broad internal subnet trust | Broad lateral movement risk, open public listening ports |
| **Era 3: 1st-Gen ZTNA (2010s)** | Application-level reverse proxies (BeyondCorp) | Per-application HTTP/HTTPS authentication | Proxy latency bottlenecks, limited non-web protocol support |
| **Era 4: Security OS (Present)** | Direct peer-to-peer WireGuard mesh + SPA | Continuous identity, posture, and zero-trust ABAC | None: Line-rate kernel throughput, 100% dark infrastructure |`;
  if (asciiEras.test(c)) {
    c = c.replace(asciiEras, erasTable);
  }

  const asciiSpa = /```[^\n]*\n[\s\S]*?Single-Packet Authorization \(SPA\) Flow[\s\S]*?└─+┘\n```/;
  if (asciiSpa.test(c)) {
    c = c.replace(asciiSpa, `> [!NOTE]
> **Single-Packet Authorization Topology:** The QuickZTNA client generates an authenticated, encrypted SPA UDP frame verified by the target resource gateway before any TCP port is dynamically unlocked. The control plane coordinates session keys out-of-band, enabling a direct WireGuard peer-to-peer data mesh without exposing public listening IPs.`);
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log('[Cleaned] remote-workforce-security-os.md');
}

// 6. zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes.md
{
  const p = path.join(blogDir, 'zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes.md');
  let c = fs.readFileSync(p, 'utf8');
  const asciiPhases = /```[^\n]*\n┌─+┐\s+┌─+┐\s+┌─+┐\n│ Phase 1: Static Build Server[\s\S]*?└─+┘\n```/;
  const phasesTable = `| Pipeline Evolution Phase | Compute & Host Model | Credential & Identity Strategy | Network Reachability & Trust Boundary |
|---|---|---|---|
| **Phase 1: Static Build Server (Pre-2015)** | Long-lived bare-metal server (Jenkins) | Static SSH keys authorized on production hosts | Flat internal network trust behind firewall |
| **Phase 2: Cloud-Native Runner (2015–2022)** | Ephemeral cloud containers (GitHub Actions / GitLab CI) | Long-lived repo API tokens & service accounts | Over-permissive VPC subnets & flat peering |
| **Phase 3: Zero Trust Data Plane (Present)** | Ephemeral build containers spawned on-demand | Short-lived OIDC Workload Identity Federation | Peer-to-peer WireGuard mesh with JIT elevation |`;
  if (asciiPhases.test(c)) {
    c = c.replace(asciiPhases, phasesTable);
    fs.writeFileSync(p, c, 'utf8');
    console.log('[Cleaned] zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes.md');
  }
}
