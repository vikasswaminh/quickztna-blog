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

// ── Metadata Definitions for all 50 blog posts ──────────────────────────────────
const blogs = [
  {
    slug: 'anssi-pqc-transition-plan',
    title: 'ANSSI PQC Transition Plan',
    subtitle: "France's 3-Phase Cryptographic Migration for Vital Operators",
    category: 'compliance',
    hub: 'ANSSI PQC Validation & Key Broker',
    nodes: [
      { name: 'OIV Vital Operator Workstations', desc: 'Continuous EDR & French Public Administration Terminals', step: '① Identity & Posture' },
      { name: 'X25519 + ML-KEM Hybrid KEM', desc: 'Phase 2 Dual Shared Secret Key Establishment', step: '② Hybrid Key Exchange' },
      { name: 'WireGuard Post-Quantum Tunnel', desc: 'PQC-Hardened Symmetric Session Pipe', step: '③ Encrypted Mesh' },
      { name: 'ANSSI Qualification Service', desc: 'CSPN & SecNumCloud Compliance Verifier', step: '④ Crypto Verification' },
      { name: 'Critical Infrastructure VPC', desc: 'Air-Gapped / Isolated SCADA & Enclaves', step: '⑤ Protected Workload' },
      { name: 'SIEM Audit & NIS2 Telemetry', desc: 'Real-Time Cryptographic Evidence Logging', step: '⑥ Audit Telemetry' },
    ],
    arch: {
      client: 'Secured French Gov & OIV Workstations (EDR + Posture)',
      edge: 'ANSSI-Qualified Edge Gateway (Single-Packet Auth)',
      control: 'Hybrid PQC Key Exchange & Policy Engine (ML-KEM-768 / FrodoKEM)',
      data: 'Direct PQC-Hardened WireGuard Mesh to Vital Operator Infrastructure',
      storage: 'ANSSI / NIS2 Compliance Audit Store & Splunk/Elastic Ingestion',
    }
  },
  {
    slug: 'audit-outbound-traffic-shadow-ai-remote-laptops',
    title: 'Shadow AI Egress Audit & Prevention',
    subtitle: 'Auditing LLM & CLI Data Exfiltration on Remote Developer Laptops',
    category: 'technical',
    hub: 'Shadow AI Interception & Inspection Engine',
    nodes: [
      { name: 'Developer Laptops & CLI Agents', desc: 'Aider, Claude-Code, Cursor IDE & Browsers', step: '① Egress Initiated' },
      { name: 'eBPF Egress Traffic Monitor', desc: 'Captures Non-VPN & Split-Tunnel Sockets', step: '② Socket Inspection' },
      { name: 'DoH / SNI / ECH Decryptor', desc: 'Bypasses Encrypted DNS & Inspects Hostnames', step: '③ Domain Interception' },
      { name: 'Real-Time DLP Payload Scanner', desc: 'Scans SSE Prompt Buffers for API Keys & PII', step: '④ Payload Analysis' },
      { name: 'Authorized AI Gateway Proxy', desc: 'Approved Enterprise Model Endpoints (Anthropic/OpenAI)', step: '⑤ Secure Proxying' },
      { name: 'Security Alerting & SIEM Log', desc: 'Instant CISO Notification on Sensitive Leak', step: '⑥ Forensic Telemetry' },
    ],
    arch: {
      client: 'Remote Laptops (eBPF Kernel Socket Monitor + Endpoint DLP Agent)',
      edge: 'Transparent Egress Proxy with DoH / SNI Deep Packet Inspector',
      control: 'Centralized Shadow AI Policy Engine (Regex DLP + Model Whitelisting)',
      data: 'Encrypted WireGuard Tunnel to Enterprise LLM Gateway Proxy',
      storage: 'Immutable Prompt Audit Log & Forensic Data Lake',
    }
  },
  {
    slug: 'bsi-post-quantum-transition-2026',
    title: 'BSI TR-02102-1 Post-Quantum Migration',
    subtitle: "Germany's Cryptographic Baseline & FrodoKEM Deployment",
    category: 'compliance',
    hub: 'BSI TR-02102-1 Compliance Controller',
    nodes: [
      { name: 'German Public Enterprise Endpoints', desc: 'BSI Verified Endpoints & Admin Workstations', step: '① Posture Validation' },
      { name: 'Dual Hybrid KEM Engine', desc: 'ECDH Curve25519 + FrodoKEM / ML-KEM-768', step: '② Dual KEM Secret' },
      { name: 'Symmetric Key Derivation (HKDF)', desc: 'Combines Classical & PQC Entropy Pools', step: '③ Key Synthesis' },
      { name: 'WireGuard Tunnel Interface', desc: 'ChaCha20-Poly1305 with 256-bit PQC Session Key', step: '④ Data Protection' },
      { name: 'Federal Government On-Prem Data Center', desc: 'BSI High-Security Enclaves & Services', step: '⑤ Direct Mesh Path' },
      { name: 'Federal IT Security Evidence Logger', desc: 'Cryptographic Inventory & BSI Audit Proof', step: '⑥ Audit Record' },
    ],
    arch: {
      client: 'BSI-Compliant Enterprise Endpoints (FrodoKEM / ML-KEM Ready)',
      edge: 'BSI-Certified Gateway (TR-02102-1 Cryptographic Enforcer)',
      control: 'Post-Quantum Dual-KEM Policy Broker (HKDF Hybrid Secret)',
      data: 'End-to-End PQC WireGuard Mesh to Federal Infrastructure',
      storage: 'Cryptographic Inventory & German Federal Audit Lake',
    }
  },
  {
    slug: 'cloudflare-access-alternatives',
    title: 'Modern Cloudflare Access Alternatives',
    subtitle: 'Decoupled Client-Mesh Architecture vs Cloudflare Centralized Edge',
    category: 'comparison',
    hub: 'Decoupled Peer-to-Peer Mesh Controller',
    nodes: [
      { name: 'Native Operating System Agent', desc: 'Kernel WireGuard Client with Zero-Latency Routing', step: '① Direct Agent Auth' },
      { name: 'Multi-Cloud IdP (Okta / Entra)', desc: 'OpenID Connect & SCIM 2.0 User State', step: '② Identity Verification' },
      { name: 'Out-of-Band Policy Broker', desc: 'Coordinates Peer Routing Without Passing Traffic', step: '③ Policy Routing' },
      { name: 'Direct P2P Mesh Tunnel', desc: 'Sub-millisecond Latency, Bypasses Cloudflare POPs', step: '④ Direct Data Pipe' },
      { name: 'Private Multi-Cloud Workloads', desc: 'AWS, GCP, Azure, Bare-Metal Servers', step: '⑤ Zero-Hop Access' },
      { name: 'Independent Log Pipeline', desc: 'Direct Telemetry Export to Your Datadog/Splunk', step: '⑥ Unfiltered Telemetry' },
    ],
    arch: {
      client: 'Native WireGuard Peer Agent (macOS, Linux, Windows, iOS)',
      edge: 'NAT Traversal STUN/DERP Relays (Direct Hole-Punching)',
      control: 'Decoupled Cloud Coordination Server (Zero Data Plane Transit)',
      data: 'Direct Peer-to-Peer WireGuard Tunnels (Bypasses Third-Party Edge)',
      storage: 'Self-Hosted S3 / Datadog / Elasticsearch Telemetry Store',
    }
  },
  {
    slug: 'cnsa-2-0-deadlines',
    title: 'NSA CNSA 2.0 Quantum Deadlines',
    subtitle: 'Mandatory Timelines for DoD Contractors & National Security Systems',
    category: 'compliance',
    hub: 'CNSA 2.0 Quantum-Safe Policy Engine',
    nodes: [
      { name: 'Defense Industrial Base (DIB) Endpoints', desc: 'CAC / PIV Smart Card Authenticated Laptops', step: '① CAC/PIV Auth' },
      { name: 'FIPS 203 (ML-KEM-1024) Enclave', desc: 'CNSA 2.0 Mandated Post-Quantum Key Exchange', step: '② PQC Key Gen' },
      { name: 'FIPS 204 (ML-DSA) Signatures', desc: 'Quantum-Resistant Certificate Validation', step: '③ Mutual Digital Sig' },
      { name: 'CNSA 2.0 IPsec / WireGuard Tunnel', desc: 'AES-256-GCM with Quantum-Safe Symmetric Keys', step: '④ Protected Tunnel' },
      { name: 'Secret & Top Secret Classified VPCs', desc: 'GovCloud & On-Premises Defense Workloads', step: '⑤ Secure Access' },
      { name: 'DoD Continuous Monitoring & SIEM', desc: 'Real-Time Automated Compliance Reporting', step: '⑥ CMMC / DoD Logs' },
    ],
    arch: {
      client: 'DIB Contractor Laptops (Smartcard CAC/PIV + Device Posture)',
      edge: 'CNSA 2.0 Quantum Gateway (Mutual FIPS 204 Signature Check)',
      control: 'Quantum Policy Controller (FIPS 203 ML-KEM-1024 Key Rotation)',
      data: 'Quantum-Resistant WireGuard Mesh with AES-256 / ChaCha20',
      storage: 'DoD CMMC 2.0 / FedRAMP High Immutable Audit Store',
    }
  },
  {
    slug: 'device-posture-checks',
    title: 'Continuous Zero Trust Device Posture',
    subtitle: 'Real-Time Health, EDR, and OS Patch Verification Architecture',
    category: 'technical',
    hub: 'Continuous Posture Evaluation Engine (CPE)',
    nodes: [
      { name: 'Endpoint Posture Collector', desc: 'Queries Secure Boot, TPM 2.0, Disk Encryption', step: '① Hardware Telemetry' },
      { name: 'EDR Integration (CrowdStrike/Sentinel)', desc: 'Real-Time Zero-Day Threat Score Ingestion', step: '② Threat Telemetry' },
      { name: 'Identity & Session Context', desc: 'Matches User Identity to Authorized Hardware Serial', step: '③ Context Binding' },
      { name: 'Dynamic Access Policy Engine', desc: 'Computes Dynamic Trust Score (0 - 100)', step: '④ Policy Decision' },
      { name: 'Dynamic WireGuard Route Filter', desc: 'Instantly Revokes Routes if Posture Drops', step: '⑤ Dynamic Revocation' },
      { name: 'Remediation Quarantine Portal', desc: 'Directs Non-Compliant Devices to OS Update Guide', step: '⑥ Remediation Loop' },
    ],
    arch: {
      client: 'Endpoint Agent (CrowdStrike EDR + TPM 2.0 + OS Patch Validator)',
      edge: 'Single-Packet Authorization (SPA) Posture Gatekeeper',
      control: 'Continuous Posture Decision Engine (Live Trust Scoring)',
      data: 'WireGuard Tunnel with Dynamic Microsegmentation Route Table',
      storage: 'Live Device Posture Inventory & Security Event Stream',
    }
  },
  {
    slug: 'dora-compliance-network-resilience',
    title: 'DORA Digital Operational Resilience',
    subtitle: 'EU Regulation 2022/2554 Resilience Framework for Financial Entities',
    category: 'compliance',
    hub: 'DORA ICT Network Resilience Controller',
    nodes: [
      { name: 'Banking & Financial Workstations', desc: 'FIDO2 / WebAuthn Authenticated Terminals', step: '① Financial Auth' },
      { name: 'Dual Multi-Cloud Mesh Controllers', desc: 'Zero Single Point of Failure (99.999% SLA)', step: '② Failover Signaling' },
      { name: 'End-to-End Encrypted Tunnels', desc: 'Resilient P2P WireGuard Mesh without VPN Hubs', step: '③ Redundant Data Mesh' },
      { name: 'Third-Party ICT Risk Gateway', desc: 'Isolated Vendor & Outsourced Partner Access', step: '④ Vendor Sandboxing' },
      { name: 'Core Core-Banking & Ledger VPCs', desc: 'SWIFT, Payment Gateways & Microservices', step: '⑤ High-Resilience Core' },
      { name: 'EBA / ESMA Audit Reporting Engine', desc: 'Automated ICT Major Incident & Penetration Logs', step: '⑥ Regulatory Reporting' },
    ],
    arch: {
      client: 'Financial Institution Terminals (FIDO2 Hardware Key + Posture)',
      edge: 'Multi-Region Anycast Ingress with Automated ICT Failover',
      control: 'DORA Redundant Policy Cluster (Active-Active Distributed Consensus)',
      data: 'High-Availability WireGuard Mesh Across Isolated Cloud Regions',
      storage: 'EBA-Compliant Immutable Incident & Resilience Audit Log',
    }
  },
  {
    slug: 'ephemeral-key-architecture',
    title: 'Ephemeral WireGuard Key Architecture',
    subtitle: 'Dynamic Sub-Hourly Key Rotation for Forward Secrecy & Perfect Zero Trust',
    category: 'technical',
    hub: 'Dynamic Ephemeral Key Rotation Broker',
    nodes: [
      { name: 'WireGuard Kernel Endpoint A', desc: 'Generates Ephemeral Curve25519 Keypair', step: '① Local Keygen' },
      { name: 'Coordination Signaling Channel', desc: 'Noise-Authenticated TLS / gRPC Control Channel', step: '② Public Key Publish' },
      { name: 'Central Ephemeral Key Broker', desc: 'Verifies Posture & Distributes Ephemeral Keys', step: '③ Signed Key Exchange' },
      { name: 'WireGuard Netlink API Update', desc: 'Dynamically Replaces Peer Keys in Kernel Memory', step: '④ Seamless Netlink Swap' },
      { name: 'WireGuard Kernel Endpoint B', desc: 'Instantaneous Zero-Packet-Drop Handshake', step: '⑤ Ephemeral Data Tunnel' },
      { name: 'Forward Secrecy Key Erasure', desc: 'Zeroes Expired Keys in RAM After TTL Expiration', step: '⑥ Cryptographic Shredding' },
    ],
    arch: {
      client: 'Kernel WireGuard Peer (Userspace Key Rotator Daemon via Netlink)',
      edge: 'NAT Traversal Signaling Relay with Zero Private Key Knowledge',
      control: 'High-Frequency Ephemeral Key Coordination Server (Sub-Hour Rotation)',
      data: 'Kernel-Level WireGuard P2P Session with Zero Re-Authentication Drop',
      storage: 'Audit Log of Key Rotations (Public Key Fingerprints Only)',
    }
  },
  {
    slug: 'harvest-now-decrypt-later',
    title: 'Harvest Now, Decrypt Later Defense',
    subtitle: 'Mitigating Adversarial TLS & VPN Interception with Post-Quantum Mesh',
    category: 'post-quantum',
    hub: 'PQC Quantum-Safe Key Agreement Broker',
    nodes: [
      { name: 'Enterprise Remote Laptops', desc: 'Sends Sensitive R&D and Financial Payloads', step: '① Encrypted Egress' },
      { name: 'Nation-State Adversary Tap', desc: 'Passively Records Fibre & ISP Traffic Streams', step: '② Interception Point' },
      { name: 'Classical Key Exchange (Vulnerable)', desc: 'RSA-4096 / ECDH Curve25519 (Breakable by Q-Day)', step: '③ Broken by Shor’s' },
      { name: 'ML-KEM-768 Hybrid Layer (Protected)', desc: 'Lattice-Based Hard Mathematical Problem', step: '④ Unbreakable Defense' },
      { name: 'Enterprise Internal Services', desc: 'Decrypted Only by Intended Authorized Peer', step: '⑤ Secure Delivery' },
      { name: 'Long-Term Data Classification Engine', desc: 'Tags Data with 10+ Year Secrecy Lifecycle', step: '⑥ Data Longevity Policy' },
    ],
    arch: {
      client: 'Remote Developer Endpoints with Hybrid Classical+PQC Support',
      edge: 'Quantum-Safe Single-Packet Authorization Perimeter',
      control: 'Decoupled PQC Key Orchestrator (X25519 + ML-KEM-768 FIPS 203)',
      data: 'Quantum-Hardened WireGuard Mesh Protected Against Passive Recording',
      storage: 'Adversary Tamper-Proof Audit Vault with Long-Term Retention',
    }
  },
  {
    slug: 'headscale-vs-managed-coordination',
    title: 'Headscale vs Managed Coordination',
    subtitle: 'Total Cost of Ownership & Architectural Scaling Breakdown',
    category: 'comparison',
    hub: 'Coordination Server Decision Matrix',
    nodes: [
      { name: 'Self-Hosted Headscale Node', desc: 'Single Linux VM running SQLite/Postgres', step: '① Self-Host Setup' },
      { name: 'Enterprise Multi-Node Mesh', desc: 'Hundreds of Cross-Cloud Servers & Laptops', step: '② Peer Registration' },
      { name: 'OIDC / SAML Identity Provider', desc: 'Authenticates Users Against Corporate Directory', step: '③ Identity Sync' },
      { name: 'Custom DERP Relay Fleet', desc: 'Manual Deployment & Maintenance of STUN Relays', step: '④ Relay Overhead' },
      { name: 'Managed Control Plane (QuickZTNA)', desc: 'Multi-Region HA, Built-In Posture & Zero SRE Effort', step: '⑤ Managed Alternative' },
      { name: 'Audit & High-Availability Database', desc: 'Failover Clustering & 99.99% Guaranteed SLA', step: '⑥ SLA & Operations' },
    ],
    arch: {
      client: 'WireGuard Endpoints (Laptops, Servers, Kubernetes Nodes)',
      edge: 'Global Distributed DERP / STUN Network (Self-Hosted vs Managed)',
      control: 'Control Plane Layer (Single Headscale VM vs Scalable Managed Cluster)',
      data: 'Direct P2P WireGuard Mesh between all authorized nodes',
      storage: 'SQLite/Postgres Database vs Multi-Region Managed Telemetry Cluster',
    }
  },
  {
    slug: 'hipaa-compliant-vpn-2026',
    title: 'HIPAA-Compliant Zero Trust Remote Access',
    subtitle: 'Protecting Electronic Protected Health Information (ePHI) in 2026',
    category: 'compliance',
    hub: 'HIPAA ePHI Access Enforcement Broker',
    nodes: [
      { name: 'Clinical Staff Laptops & Tablets', desc: 'Doctors & Telehealth Clinicians with MFA', step: '① Clinician Auth' },
      { name: 'Hospital EHR / EMR Infrastructure', desc: 'Epic, Cerner & Medical Imaging (PACS)', step: '② Health Records' },
      { name: 'FIPS 140-3 Cryptographic Engine', desc: 'Validated Encryption in Transit & at Rest', step: '③ FIPS Encryption' },
      { name: 'Strict BAA & Multi-Tenant Isolation', desc: 'Contractual & Cryptographic Data Separation', step: '④ BAA Guarantee' },
      { name: 'Emergency Break-Glass Policy', desc: 'Audited JIT Elevation for Urgent Patient Care', step: '⑤ Emergency Access' },
      { name: '6-Year Immutable HIPAA Audit Log', desc: 'NIST SP 800-66r2 Compliant Audit Trail', step: '⑥ Mandatory Logging' },
    ],
    arch: {
      client: 'Clinical Tablets & Telehealth Laptops (Hardware MFA + Disk Encryption)',
      edge: 'HIPAA-Hardened Zero-Trust Edge Gateway (Zero Public IP Exposure)',
      control: 'ABAC Role-Based Access Engine with Just-In-Time Emergency Break-Glass',
      data: 'FIPS 140-3 Validated WireGuard Data Tunnels Directly to EHR/EMR Clusters',
      storage: 'WORM (Write Once, Read Many) 6-Year Immutable Medical Audit Vault',
    }
  },
  {
    slug: 'how-to-set-up-zero-trust-remote-access-isolated-multi-cloud-vpcs',
    title: 'Zero Trust for Isolated Multi-Cloud VPCs',
    subtitle: 'Connecting AWS, GCP, and Azure Without Transit Gateways or Public IPs',
    category: 'technical',
    hub: 'Multi-Cloud Mesh Interconnect Controller',
    nodes: [
      { name: 'AWS Private VPC (us-east-1)', desc: 'Production Microservices & RDS Postgres', step: '① AWS Peer' },
      { name: 'GCP Private VPC (us-central1)', desc: 'GKE Kubernetes Cluster & BigQuery Pipelines', step: '② GCP Peer' },
      { name: 'Azure Isolated VNet (westeurope)', desc: 'Internal Financial App & Active Directory', step: '③ Azure Peer' },
      { name: 'On-Premises Bare Metal Cluster', desc: 'Legacy VMware & Hardware Database Servers', step: '④ On-Prem Peer' },
      { name: 'Cloud-Agnostic WireGuard Connector', desc: 'Outbound-Only Container (Zero Open Ingress Ports)', step: '⑤ Mesh Connector' },
      { name: 'Central Multi-Cloud Route Table', desc: 'MagicDNS & Cross-Cloud Split-DNS Resolution', step: '⑥ Uniform Routing' },
    ],
    arch: {
      client: 'Developer Workstations & Cross-Cloud Services',
      edge: 'NAT Traversal Coordination Relay (Zero Public Inbound Firewall Openings)',
      control: 'Decoupled Multi-Cloud Policy Controller (Cross-VPC Route Manager)',
      data: 'Direct Inter-Cloud WireGuard Mesh (Direct VPC-to-VPC Tunnels)',
      storage: 'Unified Multi-Cloud CloudWatch / Cloud Logging Aggregator',
    }
  },
  {
    slug: 'hybrid-key-exchange-x25519-mlkem',
    title: 'Hybrid Key Exchange: X25519 + ML-KEM-768',
    subtitle: 'Dual Shared-Secret Key Derivation for Quantum-Resistant Networks',
    category: 'post-quantum',
    hub: 'Hybrid Key Derivation & Combiner Engine',
    nodes: [
      { name: 'Initiator WireGuard Node', desc: 'Generates (x25519_sk, mlkem_sk) Keypairs', step: '① Dual Keygen' },
      { name: 'Responder WireGuard Node', desc: 'Encapsulates Shared Secret via Public Keys', step: '② Dual Encapsulation' },
      { name: 'Classical Secret (ss_classical)', desc: '32-Byte Secret from ECDH Curve25519', step: '③ Classical Secret' },
      { name: 'PQC Secret (ss_pqc)', desc: '32-Byte Secret from FIPS 203 ML-KEM-768', step: '④ PQC Secret' },
      { name: 'HKDF-Extract & Expand (RFC 5869)', desc: 'Combines Both Secrets into 256-Bit Master Key', step: '⑤ Cryptographic Mix' },
      { name: 'ChaCha20-Poly1305 WireGuard Pipe', desc: 'Symmetric Encryption Protected from Quantum Threat', step: '⑥ Quantum-Safe Data' },
    ],
    arch: {
      client: 'WireGuard Initiator Endpoint with Hybrid KEM Software Layer',
      edge: 'State-Free WireGuard Protocol Handshake Parser',
      control: 'Hybrid Key Derivation Orchestrator (X25519 + ML-KEM-768 via HKDF)',
      data: 'ChaCha20-Poly1305 Encrypted Symmetric Data Tunnel with Combined Entropy',
      storage: 'Cryptographic Algorithm Agility & Key Rotation Audit Trail',
    }
  },
  {
    slug: 'identity-first-networking-scim',
    title: 'Identity-First Networking & SCIM 2.0',
    subtitle: 'Automating Least-Privilege ZTNA with Multi-IdP Directory Sync',
    category: 'technical',
    hub: 'Identity-First SCIM 2.0 Policy Broker',
    nodes: [
      { name: 'Identity Providers (Okta / Entra / Google)', desc: 'Master Source of Truth for Employee Status', step: '① IdP Webhooks' },
      { name: 'SCIM 2.0 Real-Time Ingestion Engine', desc: 'Instant Provisioning & De-Provisioning Events', step: '② SCIM Sync' },
      { name: 'Attribute-Based Access Control (ABAC)', desc: 'Translates Dept / Role / Clearance to ACLs', step: '③ Rule Evaluation' },
      { name: 'Immediate Session Kill-Switch', desc: 'Revokes WireGuard Peer Keys in < 2 Seconds', step: '④ Instant Revocation' },
      { name: 'Micro-Segmented Workload Enclaves', desc: 'Target Applications Only Visible to Authorized Users', step: '⑤ Least Privilege' },
      { name: 'SOC 2 / ISO Identity Audit Stream', desc: 'Real-Time Evidence of Deprovisioning Enforcement', step: '⑥ Access Evidence' },
    ],
    arch: {
      client: 'User Workstations with SSO / OIDC Browser Authentication',
      edge: 'Continuous Session Token & Posture Verifier Gateway',
      control: 'SCIM 2.0 Synchronization Engine & ABAC Policy Decision Point',
      data: 'Dynamic WireGuard Tunnel Routes Adjusted by Identity Group Membership',
      storage: 'Identity Change Ledger & Automated Access Review Log',
    }
  },
  {
    slug: 'infrastructure-as-code-zero-trust',
    title: 'Infrastructure as Code for Zero Trust',
    subtitle: 'Managing Mesh VPNs, ACLs, and Route Policies with Terraform & GitOps',
    category: 'technical',
    hub: 'GitOps & Terraform Policy Controller',
    nodes: [
      { name: 'Git Repository (GitHub / GitLab)', desc: 'Single Source of Truth for Network Topology', step: '① Pull Request' },
      { name: 'CI/CD Pipeline & OPA Linter', desc: 'Dry-Runs Rego Rules to Prevent Self-Lockout', step: '② Automated Linting' },
      { name: 'Terraform / OpenTofu Provider', desc: 'Deploys Mesh Peers, Gateways & ACL Policies', step: '③ Terraform Apply' },
      { name: 'Decoupled Network Controller API', desc: 'Pushes Cryptographic Configs to Global Nodes', step: '④ Config Broadcast' },
      { name: 'Fleet of WireGuard Mesh Peers', desc: 'Instantly Updates Local Routing Tables', step: '⑤ Peer Convergence' },
      { name: 'Configuration Drift Detector', desc: 'Alerts SREs if Out-of-Band Changes Occur', step: '⑥ Drift Monitoring' },
    ],
    arch: {
      client: 'DevOps & SRE Workstations (Git Client + Terraform CLI)',
      edge: 'Continuous Integration Build Runner with Automated PR Verification',
      control: 'GitOps Policy Engine & Terraform Provider for QuickZTNA API',
      data: 'Declaratively Defined WireGuard Mesh Across Heterogeneous Clouds',
      storage: 'Terraform Remote State (S3 + DynamoDB) & Git Commit Audit History',
    }
  },
  {
    slug: 'kubernetes-zero-trust',
    title: 'Kubernetes Zero Trust Networking',
    subtitle: 'Replacing kubectl proxy and Open Ingress with Mesh Sidecars',
    category: 'technical',
    hub: 'Kubernetes Zero Trust Mesh Controller',
    nodes: [
      { name: 'Developer & SRE Laptops', desc: 'Direct kubectl & Lens Access without Bastion Hosts', step: '① Authenticated Dev' },
      { name: 'SPIFFE / SPIRE Workload Identity', desc: 'Cryptographic mTLS Proof for Every Pod', step: '② Workload Identity' },
      { name: 'Kubernetes API Server (Private)', desc: 'Port 6443 100% Hidden from Public Internet', step: '③ Hidden API Server' },
      { name: 'WireGuard In-Pod Sidecar / DaemonSet', desc: 'Transparent Microsegmentation Between Namespaces', step: '④ In-Cluster Mesh' },
      { name: 'Internal Cluster Services & DBs', desc: 'PostgreSQL, Redis, Elasticsearch Clusters', step: '⑤ Protected Pod' },
      { name: 'Kubernetes Audit Log Pipeline', desc: 'Logs Every Pod-to-Pod and User-to-Cluster Action', step: '⑥ K8s Audit Stream' },
    ],
    arch: {
      client: 'Developer Terminal (kubectl with WireGuard Peer Extension)',
      edge: 'Kubernetes In-Cluster Zero-Trust Gateway (DaemonSet)',
      control: 'Kubernetes Operator + SPIRE Controller for Dynamic Pod Identity',
      data: 'Direct WireGuard Pod-to-Pod & Developer-to-Pod Tunnels',
      storage: 'Kubernetes API Audit Logs & Fluentbit / Prometheus Metrics',
    }
  },
  {
    slug: 'ml-kem-768-explained',
    title: 'ML-KEM-768 Cryptographic Architecture',
    subtitle: 'Inside the NIST FIPS 203 Module Lattice Key Encapsulation Standard',
    category: 'post-quantum',
    hub: 'ML-KEM-768 Key Encapsulation Engine',
    nodes: [
      { name: 'Public Key Generator (KeyGen)', desc: 'Generates 1184-byte Public Key from Seed', step: '① Matrix Sampling' },
      { name: 'Encapsulation Routine (Encaps)', desc: 'Generates 1088-byte Ciphertext & Shared Secret', step: '② Ciphertext Gen' },
      { name: 'Polynomial Ring Arithmetic R_q', desc: 'Computes Operations over Z_q[X]/(X^256 + 1)', step: '③ Lattice Math' },
      { name: 'Decapsulation Routine (Decaps)', desc: 'Recovers 32-byte Symmetric Key via Secret Key', step: '④ Secret Recovery' },
      { name: 'Shared Symmetric Key (ss)', desc: '256-Bit High-Entropy Key for ChaCha20 / AES', step: '⑤ Symmetric Key' },
      { name: 'Timing & Side-Channel Shield', desc: 'Constant-Time Implementation to Prevent Leakage', step: '⑥ Side-Channel Guard' },
    ],
    arch: {
      client: 'Client Cryptographic Enclave (ML-KEM KeyGen & Decaps Engine)',
      edge: 'High-Throughput Packet Processor Handling 1184-byte KEM Handshakes',
      control: 'FIPS 203 Cryptographic Module & Algorithm Agility Selector',
      data: 'High-Performance WireGuard Tunnel Seeded by ML-KEM-768 Shared Secret',
      storage: 'Cryptographic Health Monitor & Hardware Entropy Pool Logger',
    }
  },
  {
    slug: 'netbird-vs-tailscale-vs-quickztna',
    title: 'NetBird vs Tailscale vs QuickZTNA',
    subtitle: 'Technical Architectural Comparison of Modern Overlay Mesh Networks',
    category: 'comparison',
    hub: 'Overlay Mesh Architecture Comparison Matrix',
    nodes: [
      { name: 'Data Plane Protocol', desc: 'WireGuard Kernel vs Userspace Go WireGuard Implementation', step: '① Data Plane' },
      { name: 'Coordination & Control Plane', desc: 'Single-Tenant Managed vs Open Core vs Fully Decentralized', step: '② Control Plane' },
      { name: 'NAT Traversal Mechanism', desc: 'Interactive Connectivity Establishment (ICE/STUN) vs DERP', step: '③ NAT Traversal' },
      { name: 'Policy & Access Enforcement', desc: 'Static JSON ACLs vs Dynamic Attribute-Based Access Control', step: '④ Policy Engine' },
      { name: 'Device Posture & EDR Checks', desc: 'Basic OS Check vs Real-Time Deep CrowdStrike / Sentinel Posture', step: '⑤ Posture Checks' },
      { name: 'Post-Quantum Cryptography', desc: 'Classical Only vs Hybrid X25519 + ML-KEM-768 Quantum Readiness', step: '⑥ Crypto Posture' },
    ],
    arch: {
      client: 'Cross-Platform Mesh Endpoints (Kernel vs Userspace WireGuard)',
      edge: 'Distributed Relay Network (Global STUN / TURN / DERP Nodes)',
      control: 'Central Control Plane (Multi-Tenant SaaS vs Self-Hosted Control)',
      data: 'Direct Peer-to-Peer WireGuard Overlay Tunnels with Sub-ms Overhead',
      storage: 'Unified Access Logging & Multi-Cloud Observability Stack',
    }
  },
  {
    slug: 'nis2-remote-access-requirements',
    title: 'NIS2 Directive Remote Access Framework',
    subtitle: 'EU Directive 2022/2555 Compliance Checklist for Critical Infrastructure',
    category: 'compliance',
    hub: 'NIS2 Directive Compliance Orchestrator',
    nodes: [
      { name: 'Essential & Important Entities', desc: 'Energy, Transport, Health, Digital Infrastructure', step: '① Entity Scope' },
      { name: 'Multi-Factor & Identity Verification', desc: 'Phishing-Resistant FIDO2 WebAuthn Mandate', step: '② MFA Enforcement' },
      { name: 'Supply Chain & Vendor Access', desc: 'Zero Lateral Movement for Third-Party Contractors', step: '③ Vendor Isolation' },
      { name: 'End-to-End Cryptographic Security', desc: 'State-of-the-Art WireGuard Encryption Standard', step: '④ Strong Crypto' },
      { name: '24-Hour Early Warning Telemetry', desc: 'Mandatory Incident Notification to National CSIRTs', step: '⑤ Incident Alerting' },
      { name: 'C-Level Personal Liability Audit', desc: 'Documented Proof of Management Cybersecurity Oversight', step: '⑥ Board Evidence' },
    ],
    arch: {
      client: 'Corporate & Industrial Operator Endpoints (MFA + Posture Enforced)',
      edge: 'NIS2 Compliant Perimeterless Gateway with Strict Lateral Segmentation',
      control: 'Dynamic Access Policy Engine with Real-Time Cryptographic Tracking',
      data: 'Peer-to-Peer Encrypted WireGuard Mesh with Zero Public IP Exposure',
      storage: 'Immutable 24-Hour CSIRT Reporting Vault & Audit Data Lake',
    }
  },
  {
    slug: 'open-source-vs-managed-ztna',
    title: 'Open-Source vs Managed ZTNA',
    subtitle: 'Self-Hosted Control Planes vs Turnkey Enterprise Solutions',
    category: 'comparison',
    hub: 'ZTNA Build vs Buy Decision Engine',
    nodes: [
      { name: 'Total Cost of Ownership (TCO)', desc: 'License Fees vs Ongoing SRE & DevOps Maintenance Hours', step: '① Cost Analysis' },
      { name: 'Global Relay Infrastructure', desc: 'Self-Managing 20+ Regional Relays vs Turnkey Anycast Network', step: '② Infrastructure' },
      { name: 'Identity & SCIM Integration', desc: 'Custom Scripts vs Pre-Built Okta, Entra, Ping Federations', step: '③ Identity Sync' },
      { name: 'Continuous Device Posture', desc: 'Manual Endpoint Scripts vs Native CrowdStrike / Sentinel Connectors', step: '④ Posture Hooks' },
      { name: 'Compliance Certifications', desc: 'Self-Audited Systems vs Turnkey SOC 2 Type II, ISO 27001, HIPAA', step: '⑤ Compliance Proof' },
      { name: 'High Availability & 99.99% SLA', desc: 'Handling DB Failures & Upgrades vs Automated Resilient HA', step: '⑥ SLA Reliability' },
    ],
    arch: {
      client: 'Multi-Platform Client Fleet (Automated MDM Deployment vs Manual Config)',
      edge: 'Edge Routing Topology (Custom Regional VPS vs Managed Anycast Mesh)',
      control: 'Control Plane Core (Self-Hosted Open-Source Instance vs Managed SaaS)',
      data: 'Direct Encrypted Peer-to-Peer WireGuard Mesh Communication',
      storage: 'Self-Hosted Postgres/TimescaleDB vs Managed Enterprise Telemetry',
    }
  },
  {
    slug: 'out-of-band-policy-engines',
    title: 'Out-of-Band Policy Engines',
    subtitle: 'How Dry-Run Linting & Decoupled PDPs Prevent Total Network Lockout',
    category: 'technical',
    hub: 'Out-of-Band Policy Decision Point (PDP)',
    nodes: [
      { name: 'Network Policy Authoring (Rego/YAML)', desc: 'Engineers Commit Rule Changes via Git', step: '① Rule Authoring' },
      { name: 'Simulation & Dry-Run Engine', desc: 'Simulates Changes Against Live Network State', step: '② Dry-Run Check' },
      { name: 'Lockout Prevention Circuit Breaker', desc: 'Blocks Commits That Sever Admin Access Routes', step: '③ Safety Circuit' },
      { name: 'Atomic Staged Rollout Controller', desc: 'Canary Deployment of New Rules to 5% of Nodes', step: '④ Canary Rollout' },
      { name: 'Distributed Enforcement Nodes (PEP)', desc: 'Enforces WireGuard Kernel Routing Filters', step: '⑤ PEP Enforcement' },
      { name: 'Automated Instant Rollback', desc: 'Reverts to Previous Working State if Telemetry Fails', step: '⑥ Auto Rollback' },
    ],
    arch: {
      client: 'Administrator Workstations (GitOps Workflow + Policy Sandbox CLI)',
      edge: 'Decoupled Policy Distribution Channel (Atomic Delta Updates)',
      control: 'Out-of-Band PDP with Integrated Linting & Static Analysis Engine',
      data: 'Autonomous Local Enforcement Points (PEP) Operating During Control Outages',
      storage: 'Policy Version Control Ledger & Real-Time Conflict Detection DB',
    }
  },
  {
    slug: 'outbound-only-zero-trust',
    title: 'Outbound-Only Zero Trust Architecture',
    subtitle: 'Eliminate Inbound Firewalls & Public IP Exposure Across Clouds',
    category: 'technical',
    hub: 'Outbound-Only Hole Punching Broker',
    nodes: [
      { name: 'Private Target Server (No Public IP)', desc: 'Zero Inbound Ports Open on AWS Security Group', step: '① Outbound Connect' },
      { name: 'STUN / ICE Coordination Relay', desc: 'Discovers Public NAT Endpoint Mapping', step: '② NAT Mapping' },
      { name: 'Remote Client Laptop', desc: 'Requests Access via Outbound Tunnel', step: '③ Client Request' },
      { name: 'Encrypted Handshake Packet', desc: 'Direct UDP Hole-Punching Through State Tables', step: '④ State Table Hole' },
      { name: 'Direct P2P WireGuard Tunnel', desc: 'Symmetric Encryption Without Ingress Firewall Holes', step: '⑤ Direct Tunnel' },
      { name: 'Network Port Scanner (Shodan/Censys)', desc: 'Sees 0 Open Ports; Host Is 100% Dark & Invisible', step: '⑥ 100% Dark Surface' },
    ],
    arch: {
      client: 'Remote Client Node (Initiates Outbound-Only UDP Session)',
      edge: 'Distributed NAT Traversal Coordination Relays (STUN / DERP)',
      control: 'Out-of-Band Coordination Broker (Signaling Without Data Inspection)',
      data: 'Direct Peer-to-Peer Encrypted Mesh with Zero Inbound Listening Ports',
      storage: 'Stateful Connection Ledger & NAT Traversal Quality Telemetry',
    }
  },
  {
    slug: 'post-quantum-migration-timeline',
    title: 'Post-Quantum Cryptography Migration Timeline',
    subtitle: 'Every Regulatory Deadline & Implementation Milestone Through 2035',
    category: 'post-quantum',
    hub: 'Enterprise PQC Migration Management Engine',
    nodes: [
      { name: 'Phase 1: Cryptographic Inventory (2024-2025)', desc: 'Discover Every RSA / ECC Key Across All Apps', step: '① Crypto Discovery' },
      { name: 'Phase 2: Hybrid Key Testing (2025-2026)', desc: 'Deploy X25519 + ML-KEM-768 Hybrid Tunnels', step: '② Hybrid Pilot' },
      { name: 'Phase 3: CNSA 2.0 & BSI Mandate (2027-2030)', desc: 'Mandatory PQC for All National Security Systems', step: '③ Gov Compliance' },
      { name: 'Phase 4: Full Production Rollout (2030-2033)', desc: 'Phase Out Legacy Classical Key Exchanges', step: '④ Classical EOL' },
      { name: 'Phase 5: Post-Quantum Default (2035+)', desc: 'Pure Post-Quantum Primitives (FIPS 203/204)', step: '⑤ Pure PQC State' },
      { name: 'Crypto-Agility Verification Stream', desc: 'Continuous Verification of Algorithm Adaptability', step: '⑥ Agility Score' },
    ],
    arch: {
      client: 'Multi-Generation Enterprise Endpoints (Classical & PQC Capable)',
      edge: 'Dual-Stack Quantum-Safe Ingress with Automated Algorithm Negotiation',
      control: 'Central Cryptographic Agility Manager & Key Lifecycle Controller',
      data: 'Hybrid and Native PQC WireGuard Data Mesh Across Hybrid Clouds',
      storage: 'Cryptographic Inventory Management Database (CBOM) & Audit Store',
    }
  },
  {
    slug: 'post-quantum-vpn-vendor-questions',
    title: 'Post-Quantum VPN Vendor RFP Guide',
    subtitle: '6 Critical Architectural Questions to Ask Your Current Provider',
    category: 'post-quantum',
    hub: 'PQC Vendor Evaluation & Scoring Engine',
    nodes: [
      { name: 'Q1: FIPS 203 (ML-KEM) Support', desc: 'Is ML-KEM Standardized or Proprietary Crypto?', step: '① Standard KEM' },
      { name: 'Q2: Hybrid Classical Fallback', desc: 'Does the Protocol Combine ECDH with PQC?', step: '② Hybrid Defense' },
      { name: 'Q3: Packet Fragmentation Handling', desc: 'How Does the VPN Handle 1088-Byte PQC Keys?', step: '③ MTU & Frags' },
      { name: 'Q4: Ephemeral Key Lifetime', desc: 'Are PQC Keys Rotated Every Hour or Static?', step: '④ Key Rotation' },
      { name: 'Q5: Cryptographic Agility', desc: 'Can Algorithms Be Swapped Without Redesign?', step: '⑤ Crypto Agility' },
      { name: 'Q6: Formal Security Audits', desc: 'Has the Implementation Been Audited by Cryptographers?', step: '⑥ Audit Validation' },
    ],
    arch: {
      client: 'Enterprise Evaluation Team & Security Architect Terminals',
      edge: 'Vendor Comparison Sandbox & Automated Benchmark Harness',
      control: 'Cryptographic Capability Scoring Engine & Compliance Assessor',
      data: 'Side-by-Side Testbed of Legacy VPN vs Modern PQC Mesh Tunnels',
      storage: 'Vendor RFP Scorecard & Cryptographic Benchmark Telemetry Lake',
    }
  },
  {
    slug: 'remote-workforce-security-os',
    title: 'Remote Workforce Security OS Architecture',
    subtitle: 'Replacing Castle-and-Moat Perimeter Security with an Identity Mesh',
    category: 'technical',
    hub: 'Remote Workforce Security OS Controller',
    nodes: [
      { name: 'Remote Employee Laptops & Mobile', desc: 'Distributed Worldwide on Unmanaged Wi-Fi Networks', step: '① Distributed Device' },
      { name: 'Unified Identity & FIDO2 MFA', desc: 'Hardware-Bound Passkeys via WebAuthn', step: '② Phishing-Proof Auth' },
      { name: 'Real-Time Device Posture Sensor', desc: 'Monitors EDR, OS Health & Endpoint Firewalls', step: '③ Continuous Health' },
      { name: 'Context-Aware Policy Decision Point', desc: 'Evaluates Location, Time, Role & Workload Risk', step: '④ Dynamic Trust' },
      { name: 'Dark Mesh Microsegmentation', desc: 'Direct Encrypted Tunnels with Peer Isolation', step: '⑤ Micro-Isolation' },
      { name: 'Real-Time Threat Telemetry & SIEM', desc: 'Instant Anomaly Detection & Automatic Revocation', step: '⑥ Threat Telemetry' },
    ],
    arch: {
      client: 'Global Remote Workforce Laptops (OS Agent + FIDO2 Key + EDR Sensor)',
      edge: 'Global Edge Anycast Relay Network with Single-Packet Authorization',
      control: 'Decoupled Cloud Control Plane (Identity Broker + Dynamic ABAC PDP)',
      data: 'End-to-End Encrypted WireGuard Mesh with Zero Concentrator Bottlenecks',
      storage: 'Real-Time Global Session State (Redis) & Centralized SIEM Event Stream',
    }
  },
  {
    slug: 'sase-vs-ztna-vs-sse',
    title: 'SASE vs ZTNA vs SSE Frameworks',
    subtitle: 'De-mystifying Security Frameworks for 50 to 5,000 Person Organizations',
    category: 'fundamentals',
    hub: 'Enterprise Security Architecture Taxonomy',
    nodes: [
      { name: 'ZTNA (Zero Trust Network Access)', desc: 'Secure Resource Access via Identity & Posture', step: '① Core Access' },
      { name: 'SWG (Secure Web Gateway)', desc: 'Inspects Outbound Web & Internet Traffic', step: '② Web Inspection' },
      { name: 'CASB (Cloud Access Security Broker)', desc: 'Controls SaaS Applications (Salesforce, Google)', step: '③ SaaS Governance' },
      { name: 'SSE (Security Service Edge)', desc: 'Unifies ZTNA + SWG + CASB in Cloud Edge', step: '④ Unified Edge' },
      { name: 'SD-WAN (Software-Defined WAN)', desc: 'Physical Branch Office Routing & Multiplexing', step: '⑤ Branch Transport' },
      { name: 'SASE (Complete Unified Fabric)', desc: 'Combines SD-WAN Transport with SSE Edge Security', step: '⑥ Full Convergence' },
    ],
    arch: {
      client: 'Branch Offices & Remote Users (Single Unified Security Client)',
      edge: 'Converged SASE Cloud Edge (SWG + CASB + ZTNA Decoupled Gateways)',
      control: 'Centralized Cloud Management Console (Unified Policy Engine)',
      data: 'Optimized SD-WAN Mesh Backbone + Direct WireGuard Private App Tunnels',
      storage: 'Centralized Global Telemetry & Cross-Service Threat Intelligence Store',
    }
  },
  {
    slug: 'securing-developer-workstations-malicious-dependencies-zero-trust',
    title: 'Developer Workstation Supply Chain Security',
    subtitle: 'Preventing Malicious NPM/PyPI Packages from Stealing Production Secrets',
    category: 'post-quantum',
    hub: 'Developer Egress & Secret Isolation Broker',
    nodes: [
      { name: 'Developer Workstation & Terminal', desc: 'Runs `npm install` or `pip install` on OSS Packages', step: '① Package Run' },
      { name: 'eBPF Process Sandbox Monitor', desc: 'Catches Hidden Post-Install Script Socket Creation', step: '② Process Watcher' },
      { name: 'Ephemeral Dev Environment Token', desc: 'Short-Lived Secrets That Expire Every 30 Minutes', step: '③ JIT Secret Gen' },
      { name: 'Air-Gapped Production Gateway', desc: 'Blocks Workstation Direct Network Access to Prod DB', step: '④ Production Airgap' },
      { name: 'Vetted Internal Artifact Proxy', desc: 'Scans & Mirrors Open Source Dependencies', step: '⑤ Dependency Mirror' },
      { name: 'Workstation Exfiltration Alerting', desc: 'Kills Sockets Attempting Outbound Pastebin/Webhook', step: '⑥ Exfiltration Kill' },
    ],
    arch: {
      client: 'Developer Laptops (eBPF Socket Interceptor + Secret Scrubber)',
      edge: 'Internal Secure Dependency Gateway & Artifact Cache (Artifactory)',
      control: 'Workstation Posture & Ephemeral Credential Broker (JIT Access)',
      data: 'Microsegmented WireGuard Tunnels (Zero Workstation-to-Prod Lateral Pivot)',
      storage: 'Dependency Provenance Ledger (SLSA) & Developer Telemetry Vault',
    }
  },
  {
    slug: 'securing-third-party-vendor-access-enforce-ztna-external-contractors',
    title: 'Third-Party Contractor & Vendor Access',
    subtitle: 'Enforcing Least-Privilege ZTNA Without Deploying Intrusive MDM',
    category: 'compliance',
    hub: 'Third-Party Contractor Access Broker',
    nodes: [
      { name: 'External Vendor Laptops (BYOD)', desc: 'Unmanaged Contractor Devices Without Corporate MDM', step: '① Vendor Request' },
      { name: 'Identity & Contractor Verification', desc: 'OIDC Federation with Expiring Contractor Account', step: '② Vendor Auth' },
      { name: 'Lightweight Browser / Zero-Install ZTNA', desc: 'Agentless Web Portal or Isolated Container', step: '③ Agentless Tunnel' },
      { name: 'Single-Resource Micro-Boundary', desc: 'Grants Access Strictly to 1 Port on 1 App (No LAN)', step: '④ Micro-Boundary' },
      { name: 'Real-Time Session Recording', desc: 'Full Keystroke & Video Recording for Compliance', step: '⑤ Session Capture' },
      { name: 'Automatic Expiration & Kill-Switch', desc: 'Contract Terminates Access at Specific Date/Time', step: '⑥ Auto Revocation' },
    ],
    arch: {
      client: 'Unmanaged Contractor Laptops (Web Portal / Ephemeral WireGuard Agent)',
      edge: 'Isolated Vendor DMZ Access Proxy with Full TLS Termination',
      control: 'Contractor Policy Engine (Time-Bounded JIT Access & Expiration)',
      data: 'Direct Application-Layer Proxy Tunnels (Cryptographically Isolated from LAN)',
      storage: 'Full Session Audit Recordings & Keystroke Logs for Third-Party Audit',
    }
  },
  {
    slug: 'serverless-zero-trust-aws-lambda-cloud-functions',
    title: 'Serverless Zero Trust for Lambda & Cloud Functions',
    subtitle: 'Connecting Ephemeral Functions to Private Databases Without NAT Gateways',
    category: 'technical',
    hub: 'Serverless Ephemeral Mesh Connector',
    nodes: [
      { name: 'AWS Lambda / Cloud Functions', desc: 'Spawns and Terminates in Hundreds of Milliseconds', step: '① Cold Start Trigger' },
      { name: 'In-Memory WireGuard Layer', desc: 'Userspace WireGuard Embedded Inside Function Memory', step: '② Memory Handshake' },
      { name: 'Pre-Computed Ephemeral Session Key', desc: 'Avoids 3-Way Handshake Latency During Cold Starts', step: '③ Fast Session' },
      { name: 'Private Database in Isolated VPC', desc: 'Amazon RDS / Cloud SQL with Zero Public IP', step: '④ Private DB Query' },
      { name: 'Decoupled Policy Controller', desc: 'Verifies IAM Execution Role & Function SHA256', step: '⑤ Function Identity' },
      { name: 'Serverless Execution Telemetry', desc: 'Logs Microsecond Access Events Directly to CloudWatch', step: '⑥ Fast Metrics' },
    ],
    arch: {
      client: 'Ephemeral Serverless Runtimes (AWS Lambda, Cloud Run, Cloudflare Workers)',
      edge: 'Ultra-Low-Latency Edge Relays for Instantaneous NAT Penetration',
      control: 'Serverless IAM Token Verifier & Dynamic WireGuard Key Dispatcher',
      data: 'In-Memory WireGuard Micro-Tunnels Directly to Private Cloud Databases',
      storage: 'Serverless Access Event Logs & Sub-Millisecond Telemetry Stream',
    }
  },
  {
    slug: 'soc-2-remote-access-controls',
    title: 'SOC 2 Type II Remote Access Controls',
    subtitle: '11 Common Criteria Audited by Security Evaluators',
    category: 'compliance',
    hub: 'SOC 2 Trust Services Criteria Engine',
    nodes: [
      { name: 'CC6.1: Logical Access Boundaries', desc: 'Individual Resource Authorisation per Connection', step: '① Logical Access' },
      { name: 'CC6.2: User Registration & Deprovisioning', desc: 'SCIM Automated Instant Account Removal', step: '② SCIM Deprovision' },
      { name: 'CC6.3: Least-Privilege Role Control', desc: 'Attribute-Based Access Rules Restricted to Roles', step: '③ Least Privilege' },
      { name: 'CC6.6: Perimeter & Lateral Prevention', desc: 'Elimination of Flat Internal Networks via Mesh', step: '④ Lateral Guard' },
      { name: 'CC6.7: Transmission Encryption', desc: 'State-of-the-Art WireGuard Encrypted Channels', step: '⑤ Modern Crypto' },
      { name: 'CC7.2: Continuous Security Monitoring', desc: 'Immutable SIEM Logs of Every Authorized Session', step: '⑥ Continuous Audit' },
    ],
    arch: {
      client: 'Employee Workstations (Enforced MFA + Hardware Encryption)',
      edge: 'Zero Trust Access Gateway Enforcing Strict Trust Services Criteria',
      control: 'Automated SOC 2 Policy Compliance & Access Review Engine',
      data: 'Encrypted WireGuard Mesh with Zero Unauthenticated Traffic Allowed',
      storage: 'Immutable WORM Evidence Vault (1-Year Retention for SOC 2 Auditors)',
    }
  },
  {
    slug: 'tailscale-alternatives-2026',
    title: 'Tailscale Alternatives Architecture Breakdown',
    subtitle: 'Comparing Managed Coordination, Open-Source & PQC Mesh Solutions',
    category: 'comparison',
    hub: 'Overlay Network Comparison Engine',
    nodes: [
      { name: 'Client Architecture (Kernel vs Userspace)', desc: 'Speed & Throughput: Netlink Kernel vs Go Userspace', step: '① Kernel Driver' },
      { name: 'Coordination Server Architecture', desc: 'Proprietary Cloud vs Headscale vs QuickZTNA Control', step: '② Coordination' },
      { name: 'NAT Traversal Performance', desc: 'DERP Relaying Bottlenecks vs Direct STUN/ICE Punching', step: '③ NAT Performance' },
      { name: 'ABAC vs JSON ACLs', desc: 'Dynamic Device Attributes vs Static Identity Tags', step: '④ Policy Agility' },
      { name: 'Post-Quantum Preparedness', desc: 'Legacy Cryptography vs FIPS 203 ML-KEM-768 Readiness', step: '⑤ Quantum Defense' },
      { name: 'Enterprise Cost at 500+ Peers', desc: 'Per-User SaaS Surcharge vs Predictable Infrastructure Cost', step: '⑥ Scale Pricing' },
    ],
    arch: {
      client: 'Heterogeneous Endpoints (macOS, Windows, Linux, Android, iOS, Routers)',
      edge: 'High-Performance NAT Traversal Relays with Global Edge Presence',
      control: 'High-Availability Coordination Server (Decoupled from User Data)',
      data: 'Direct Peer-to-Peer WireGuard Overlay Tunnels with Sub-Millisecond Jitter',
      storage: 'Unified Audit Logging Pipeline & Real-Time Connection Map',
    }
  },
  {
    slug: 'top-10-ai-security-tools-2026',
    title: 'Top 10 Enterprise AI Security Tools',
    subtitle: 'Protecting LLMs, Context Windows, and API Pipelines from Exploitation',
    category: 'technical',
    hub: 'AI Security & Prompt Firewall Broker',
    nodes: [
      { name: 'LLM Prompt Injection Firewalls', desc: 'Inspects Prompts for Jailbreaks & Indirect Attacks', step: '① Prompt Guard' },
      { name: 'Output Hallucination & PII Scanners', desc: 'Prevents Customer Data Leakage in Model Responses', step: '② Output Filter' },
      { name: 'Model Weight Access Control', desc: 'Zero Trust Storage Encryption for Proprietary Weights', step: '③ Model Protection' },
      { name: 'Vector DB Isolation (Pinecone/Milvus)', desc: 'Microsegmented RAG Queries via WireGuard Mesh', step: '④ RAG Isolation' },
      { name: 'Shadow AI Egress Interceptors', desc: 'Audits Unauthorized API Calls to External Models', step: '⑤ Shadow AI Block' },
      { name: 'AI Incident SIEM & Red-Teaming Logs', desc: 'Real-Time Telemetry on Adversarial AI Probes', step: '⑥ Model Audit' },
    ],
    arch: {
      client: 'AI Developers, Data Scientists & Automated Autonomous Agents',
      edge: 'Enterprise LLM Security Proxy & Real-Time Prompt Firewall',
      control: 'AI Governance Policy Decision Point (RAG & Model Access Rules)',
      data: 'Private WireGuard Tunnels Between Vector DBs and Inference Clusters',
      storage: 'Prompt Audit Store, Model Weights Vault & Compliance Evidence DB',
    }
  },
  {
    slug: 'top-10-database-access-control',
    title: 'Top 10 Database Access Control Tools',
    subtitle: 'Zero Trust Database Proxies, JIT Credentials, and Query Auditing',
    category: 'technical',
    hub: 'Zero Trust Database Access Broker',
    nodes: [
      { name: 'Software Engineers & Data Analysts', desc: 'Requests Access to Production SQL / NoSQL Databases', step: '① User Request' },
      { name: 'Identity & MFA Verification', desc: 'FIDO2 / SSO Authenticated Database Session', step: '② Identity Proof' },
      { name: 'Just-In-Time Ephemeral DB Credentials', desc: 'Generates 15-Minute Postgres / MySQL Users', step: '③ JIT DB User' },
      { name: 'WireGuard Dynamic Route Injection', desc: 'Connects Directly to Database Private Subnet', step: '④ Secure Tunnel' },
      { name: 'Real-Time SQL Query Firewalls', desc: 'Blocks DROP TABLE, Unindexed Queries & Mass Dumps', step: '⑤ Query Filter' },
      { name: 'Complete SQL Keystroke Audit Vault', desc: 'Logs Every Query & Result Hash for SOC 2 / HIPAA', step: '⑥ Audit Capture' },
    ],
    arch: {
      client: 'DBA & Developer Terminals (DBeaver, psql, DataGrip, VSCode)',
      edge: 'Zero Trust Database Access Gateway (TLS Termination + Query Parser)',
      control: 'Dynamic Database Credential Mint & ABAC Policy Decision Point',
      data: 'Point-to-Point WireGuard Tunnel to Isolated Private DB Subnet',
      storage: 'Full SQL Query Audit Log & Sensitive Data Masking Engine',
    }
  },
  {
    slug: 'top-10-dlp-solutions-remote-teams',
    title: 'Top 10 DLP Solutions for Remote Teams',
    subtitle: 'Preventing Data Exfiltration Across Laptops, SaaS, and Cloud Endpoints',
    category: 'comparison',
    hub: 'Distributed Data Loss Prevention Engine',
    nodes: [
      { name: 'Remote Endpoint Agent', desc: 'Monitors Clipboard, USB Storage & File Transfers', step: '① Endpoint Sensor' },
      { name: 'Network Egress DPI Gateway', desc: 'Inspects Outbound Packets for PII, Credit Cards & Keys', step: '② Egress DPI' },
      { name: 'Optical Character Recognition (OCR)', desc: 'Scans Screenshots & Images for Sensitive Data', step: '③ OCR Analysis' },
      { name: 'Cloud SaaS API Connector', desc: 'Scans Google Drive, Slack & Box for Shared Secrets', step: '④ SaaS Scanner' },
      { name: 'Policy Enforcement & Quarantine', desc: 'Instantly Blocks Transfer & Alerts Security Ops', step: '⑤ Policy Block' },
      { name: 'SIEM / SOAR Incident Telemetry', desc: 'Automated Remediation Workflow Triggered in Real Time', step: '⑥ SOAR Trigger' },
    ],
    arch: {
      client: 'Remote Laptops (Kernel File Filter + Clipboard Monitor + OCR Engine)',
      edge: 'Inline Network Egress DLP Proxy with Deep Packet Inspection',
      control: 'Central DLP Classification Policy Engine (Regex, ML, Fingerprinting)',
      data: 'Secured WireGuard Tunnels Directing Uninspected Traffic Safely',
      storage: 'DLP Incident Forensic Evidence Vault & Compliance Reporting Engine',
    }
  },
  {
    slug: 'top-10-jit-access-frameworks',
    title: 'Top 10 Just-In-Time (JIT) Access Frameworks',
    subtitle: 'Eliminating Standing Privileges with Ephemeral Zero Trust Grants',
    category: 'compliance',
    hub: 'Just-In-Time (JIT) Privilege Orchestrator',
    nodes: [
      { name: 'On-Call Engineer / Administrator', desc: 'Requires Emergency Access to Production Cluster', step: '① JIT Request' },
      { name: 'Slack / Teams Approval Workflow', desc: 'Peer Manager Approves Request in Chat with MFA', step: '② Manager Approval' },
      { name: 'Ephemeral Access Token Minting', desc: 'Generates 60-Minute Scoped Credentials', step: '③ Scoped Token' },
      { name: 'Dynamic WireGuard Route Activation', desc: 'Temporarily Adds Server IP to Client Route Table', step: '④ Route Open' },
      { name: 'Continuous Session Recording', desc: 'Captures Terminal Video & Commands During Session', step: '⑤ Live Recording' },
      { name: 'Zero-Standing-Privilege Revocation', desc: 'Automatically Tears Down WireGuard Route at Expiry', step: '⑥ Route Teardown' },
    ],
    arch: {
      client: 'Engineer Terminal & Browser (Slack/Teams Integrated Requestor)',
      edge: 'Dynamic WireGuard Enforcement Gateway with Ephemeral Peer Ingestion',
      control: 'JIT Policy Engine & Multi-Party Approval Workflow Coordinator',
      data: 'Time-Bounded Ephemeral WireGuard Mesh Tunnels to Production Workloads',
      storage: 'Complete JIT Access Request Ledger & Session Video Recordings',
    }
  },
  {
    slug: 'top-10-kubernetes-access-control',
    title: 'Top 10 Kubernetes Access Control Tools',
    subtitle: 'Hardening API Servers, RBAC, and Workload Identities in 2026',
    category: 'technical',
    hub: 'Kubernetes Zero Trust Admission & Mesh Controller',
    nodes: [
      { name: 'Platform Engineers & Developers', desc: 'Interacts via kubectl, Helm, and CI/CD Runners', step: '① Dev Access' },
      { name: 'SSO / OIDC Cluster Authentication', desc: 'Pins Developer Identity to Ephemeral Kubeconfig', step: '② OIDC Token' },
      { name: 'Dark Kubernetes API Server (SPA)', desc: 'Port 6443 Closed to Public Internet; No Scans', step: '③ Dark API Server' },
      { name: 'Fine-Grained RBAC & Impersonation', desc: 'Scopes Access Strictly to Developer Namespace', step: '④ RBAC Filter' },
      { name: 'SPIFFE / In-Cluster Mesh Enclave', desc: 'mTLS WireGuard Mesh Between Pods & Microservices', step: '⑤ In-Cluster Mesh' },
      { name: 'Kubernetes Audit Log Streaming', desc: 'Streams Every API Call to Centralized SIEM', step: '⑥ Audit Stream' },
    ],
    arch: {
      client: 'Developer Workstations (kubectl with Zero Trust Mesh Plugin)',
      edge: 'Dark Kubernetes API Gateway (Single-Packet Auth / No Public IP)',
      control: 'Cluster Identity & Admission Webhook Controller (OIDC + Kyverno/OPA)',
      data: 'Direct WireGuard Tunnels into Private Cluster Pod Subnets',
      storage: 'Kube-Audit Event Stream & Prometheus / Grafana Observability',
    }
  },
  {
    slug: 'top-10-msp-zero-trust-strategies',
    title: 'Top 10 MSP Zero Trust Strategies',
    subtitle: 'Managing Multi-Tenant Client Networks Without Flat VPNs or Shared Keys',
    category: 'industry',
    hub: 'Multi-Tenant MSP Zero Trust Controller',
    nodes: [
      { name: 'MSP Helpdesk Technicians', desc: 'Needs Access to 50+ Different Client Environments', step: '① Tech Auth' },
      { name: 'Multi-Tenant Cryptographic Partitioning', desc: 'Zero Cross-Tenant Leakage; Hard Isolation', step: '② Tenant Wall' },
      { name: 'Client A Isolated Network (Health)', desc: 'HIPAA Workloads & Medical Practice Servers', step: '③ Client A Mesh' },
      { name: 'Client B Isolated Network (Finance)', desc: 'PCI-DSS Workloads & Accounting Databases', step: '④ Client B Mesh' },
      { name: 'Just-In-Time Ticket Authorization', desc: 'Technician Access Tied Directly to Helpdesk Ticket', step: '⑤ Ticket Binding' },
      { name: 'Multi-Tenant Audit Evidence Vault', desc: 'Individual Unaltered Client Logs for Compliance', step: '⑥ Client Log Split' },
    ],
    arch: {
      client: 'MSP Technician Workstations (Strict FIDO2 MFA + Client Chooser)',
      edge: 'Multi-Tenant Zero-Trust Edge Relays with Cryptographic Boundary Enforcement',
      control: 'Central MSP Multi-Tenant Management Plane (PSA / RMM Integrated)',
      data: 'Completely Segmented WireGuard Mesh Tunnels Per Client Organization',
      storage: 'Partitioned Multi-Tenant Audit Data Lake for Individual Client Audits',
    }
  },
  {
    slug: 'top-10-remote-desktop-secure-access',
    title: 'Top 10 Secure Remote Desktop Solutions',
    subtitle: 'Replacing Open RDP & Port 3389 with Dark Microsegmentation',
    category: 'comparison',
    hub: 'Zero Trust Remote Desktop Access Controller',
    nodes: [
      { name: 'Remote Office Workers & SREs', desc: 'Connects from Windows, Mac, or Linux Laptops', step: '① Session Request' },
      { name: 'Phishing-Resistant MFA Verification', desc: 'FIDO2 Hardware Key Authenticated Session', step: '② Hardware MFA' },
      { name: 'Dark RDP Host (Port 3389 Hidden)', desc: 'Host Has 0 Inbound Open Ports; Shodan Sees Nothing', step: '③ Dark Endpoint' },
      { name: 'Direct Encrypted WireGuard Pipe', desc: 'Low-Latency P2P Screen Streaming (60 FPS)', step: '④ High-Speed Stream' },
      { name: 'Clipboard & File Transfer Filter', desc: 'Prevents Data Exfiltration Across RDP Sessions', step: '⑤ DLP Policy' },
      { name: 'Video Session Compliance Recording', desc: 'Tamper-Proof Video Capture of Administrative Actions', step: '⑥ Video Audit' },
    ],
    arch: {
      client: 'Remote Laptops Running RDP/VNC Client over WireGuard Overlay',
      edge: 'NAT Traversal Edge Nodes with Single-Packet Authorization',
      control: 'Dynamic RDP Session Broker (Attribute-Based Access Control)',
      data: 'Direct UDP WireGuard Tunnels Delivering Sub-10ms Desktop Latency',
      storage: 'Central Session Audit Video Store & Keystroke Event Logger',
    }
  },
  {
    slug: 'top-10-secrets-management-tools-2026',
    title: 'Top 10 Secrets Management Tools',
    subtitle: 'Securing API Keys, Certificates, and Ephemeral Credentials',
    category: 'technical',
    hub: 'Zero Trust Secrets Broker & Vault',
    nodes: [
      { name: 'Application Microservices & CI/CD', desc: 'Requests Database Passwords & Cloud API Keys', step: '① Secret Request' },
      { name: 'Workload Identity Attestation (SPIFFE)', desc: 'Cryptographically Proves Pod / Runner Identity', step: '② Identity Attest' },
      { name: 'Dynamic Ephemeral Secret Generation', desc: 'Issues Passwords That Auto-Expire in 5 Minutes', step: '③ Ephemeral Mint' },
      { name: 'Microsegmented WireGuard Tunnel', desc: 'Secrets Ingested Over Dark P2P Tunnels Only', step: '④ Secure Transport' },
      { name: 'Hardware Security Module (HSM) Root', desc: 'FIPS 140-3 Master Key Storage with Zero Software Leak', step: '⑤ HSM Master Root' },
      { name: 'Real-Time Secret Access Auditing', desc: 'Alerts Instantly on Abnormal Secret Fetch Bursts', step: '⑥ Secret Audit' },
    ],
    arch: {
      client: 'Microservice Pods & Build Runners with SPIFFE Workload Agents',
      edge: 'In-VPC Secrets Access Broker (Mutual TLS & WireGuard Sealed)',
      control: 'Central Secrets Engine (HashiCorp Vault / Infisical / QuickZTNA KMS)',
      data: 'Encrypted Point-to-Point Tunnels for Ephemeral Secret Delivery',
      storage: 'Hardware Security Module (HSM) Key Storage & Audit Log Stream',
    }
  },
  {
    slug: 'top-10-session-recording-compliance',
    title: 'Top 10 Session Recording Solutions',
    subtitle: 'Auditing SSH, RDP, and Web Sessions for Regulatory Compliance',
    category: 'compliance',
    hub: 'Compliance Session Recording Broker',
    nodes: [
      { name: 'Privileged Engineers & Contractors', desc: 'Initiates SSH, RDP, or Database Sessions', step: '① Session Start' },
      { name: 'Identity & Posture Gatekeeper', desc: 'Validates MFA and Workstation Security State', step: '② Posture Check' },
      { name: 'Transparent Zero-Trust Proxy', desc: 'Intercepts Protocol Streams Without Client Friction', step: '③ Inline Intercept' },
      { name: 'Real-Time Keystroke & OCR Indexer', desc: 'Makes Every Terminal Command Searchable', step: '④ Command Index' },
      { name: 'Session Kill-Switch Trigger', desc: 'Immediately Drops Session on Blacklisted Commands', step: '⑤ Command Kill' },
      { name: 'Immutable WORM Video Archive', desc: 'Cryptographically Sealed Recording for SOC 2/PCI', step: '⑥ Immutable Video' },
    ],
    arch: {
      client: 'Administrative Workstations (SSH Terminal, RDP Client, Web Browser)',
      edge: 'Transparent Protocol Gateway with Low-Latency Video Interceptor',
      control: 'Session Recording Governance Engine & Real-Time Command Filter',
      data: 'Direct Encrypted Data Channels Streaming Compressed Frame Deltas',
      storage: 'WORM Compliant Cloud Storage & Full-Text Keystroke Search Index',
    }
  },
  {
    slug: 'top-10-ztna-manufacturing-iot',
    title: 'Top 10 ZTNA Solutions for Manufacturing & IoT',
    subtitle: 'Securing OT Networks, PLCs, and SCADA Without Disrupting Operations',
    category: 'industry',
    hub: 'OT / SCADA Zero Trust Isolation Controller',
    nodes: [
      { name: 'Remote Plant Engineers & Vendors', desc: 'Diagnoses Industrial PLCs & Robotics Remotely', step: '① Remote Support' },
      { name: 'Purdue Model Level 3/4 Boundary', desc: 'Strict Separation Between Corporate IT and Factory OT', step: '② IT/OT Boundary' },
      { name: 'Outbound-Only OT Mesh Gateway', desc: 'Installed on Factory Floor (Zero Open Inbound Ports)', step: '③ Outbound Gateway' },
      { name: 'Sensitive Factory PLCs & SCADA (Modbus)', desc: 'Fragile Legacy Controllers Protected from Scans', step: '④ PLC Protection' },
      { name: 'Time-Bounded Vendor Maintenance', desc: 'Grants Access Only During Scheduled Maintenance', step: '⑤ Maintenance JIT' },
      { name: 'IEC 62443 / NIS2 Industrial Audit', desc: 'Complete Historical Evidence of Industrial Remote Changes', step: '⑥ OT Audit Log' },
    ],
    arch: {
      client: 'Field Support Engineers & OEM Vendor Diagnostic Laptops',
      edge: 'Ruggedized Industrial Edge Gateway (DIN-Rail Mounted in Factory)',
      control: 'Purdue-Compliant Zero Trust Policy Engine (Protocol Whitelisting)',
      data: 'Direct Encrypted WireGuard Tunnels to Specific Factory Floor Enclaves',
      storage: 'IEC 62443 Certified Immutable Industrial Event Data Lake',
    }
  },
  {
    slug: 'twingate-alternative',
    title: 'Twingate Alternatives Architecture Review',
    subtitle: 'Evaluating Connector Topologies, Kernel WireGuard & Open Standards',
    category: 'comparison',
    hub: 'Modern Zero Trust Connector Matrix',
    nodes: [
      { name: 'Client Software Layer', desc: 'Kernel WireGuard (6 Gbps) vs Userspace Virtual Adapters', step: '① Client Driver' },
      { name: 'Private Workload Connector', desc: 'Outbound-Only Container vs Proprietary Relay Daemons', step: '② Connector Node' },
      { name: 'Control Plane Decoupling', desc: 'Zero Data Plane Interception; Full Privacy Guarantees', step: '③ Privacy Guarantee' },
      { name: 'NAT Traversal Efficiency', desc: 'Direct P2P UDP Hole-Punching vs Cloud Relay Chokepoints', step: '④ P2P Efficiency' },
      { name: 'Policy Expression & RBAC', desc: 'Dynamic Attribute-Based Access Control (ABAC) Rules', step: '⑤ Dynamic Policy' },
      { name: 'Total Cost of Ownership (TCO)', desc: 'Predictable Open-Standard TCO vs Proprietary Lock-In', step: '⑥ TCO Analysis' },
    ],
    arch: {
      client: 'Cross-Platform Client Nodes (macOS, Windows, Linux, iOS, Android)',
      edge: 'Lightweight Outbound Connectors Deployed in Private Subnets',
      control: 'High-Performance Decoupled Coordination & Routing Server',
      data: 'Direct Peer-to-Peer WireGuard Tunnels Bypassing Middleboxes',
      storage: 'Distributed Connection State & Enterprise SIEM Log Forwarder',
    }
  },
  {
    slug: 'what-is-ztna',
    title: 'What Is ZTNA? Zero Trust Architecture',
    subtitle: 'Core Tenets, Architectural Patterns, and Implementation Checklist',
    category: 'fundamentals',
    hub: 'NIST SP 800-207 Zero Trust Engine',
    nodes: [
      { name: 'Untrusted Network Perimeter', desc: 'Assumes Breach: Corporate Wi-Fi & Internet Are Hostile', step: '① Assume Breach' },
      { name: 'Policy Decision Point (PDP)', desc: 'Evaluates Identity, Device Posture & Environmental Risk', step: '② PDP Evaluation' },
      { name: 'Policy Enforcement Point (PEP)', desc: 'Dynamically Establishes Resource-Specific Tunnels', step: '③ PEP Tunnel' },
      { name: 'Continuous Re-Evaluation', desc: 'Repeats Posture & Session Checks Every 60 Seconds', step: '④ Continuous Check' },
      { name: 'Micro-Segmented Private Workload', desc: 'Individual Application Port Access Only; 0 Lateral LAN', step: '⑤ Target App' },
      { name: 'Comprehensive SIEM Telemetry', desc: 'Every Packet & Authorization Decision Recorded', step: '⑥ Full Audit' },
    ],
    arch: {
      client: 'Enterprise Endpoint Fleet (Laptops, Mobile, Servers, IoT)',
      edge: 'Policy Enforcement Points (PEP) Distributed Across Global Edge',
      control: 'NIST SP 800-207 Policy Decision Point (PDP) & Context Engine',
      data: 'Direct Encrypted WireGuard Channels Scoped Strictly to Individual Resources',
      storage: 'Centralized Security Information and Event Management (SIEM) Data Lake',
    }
  },
  {
    slug: 'wireguard-mesh-network',
    title: 'WireGuard Mesh Networking Architecture',
    subtitle: 'Zero to 100 Peers Without Manual Config Files or Central Bottlenecks',
    category: 'technical',
    hub: 'Automated WireGuard Mesh Coordinator',
    nodes: [
      { name: 'Peer Node Key Generation', desc: 'Automatic Local Generation of Curve25519 Keys', step: '① Peer Keygen' },
      { name: 'Coordination Server Publish', desc: 'Pushes Public Key & Endpoint Metadata via TLS', step: '② Key Discovery' },
      { name: 'STUN / ICE Endpoint Discovery', desc: 'Finds Reflexive Public IP & Port Across NATs', step: '③ NAT Reflexive' },
      { name: 'Dynamic Netlink Interface Config', desc: 'Programs Linux / macOS Kernel WireGuard Tables', step: '④ Kernel Netlink' },
      { name: 'Full-Mesh Peer-to-Peer Tunnels', desc: 'Sub-Millisecond Direct Packets Between All Nodes', step: '⑤ Direct Mesh' },
      { name: 'Peer Health & Mesh Reconvergence', desc: 'Automatically Re-routes Traffic if a Peer Goes Offline', step: '⑥ Reconvergence' },
    ],
    arch: {
      client: 'Distributed Peer Nodes Running Kernel WireGuard (wg0)',
      edge: 'High-Throughput STUN Discovery & Encrypted Relay Nodes',
      control: 'Decoupled Mesh Coordination Server (Peer State Synchronization)',
      data: 'Direct Full-Mesh UDP Peer-to-Peer WireGuard Connections',
      storage: 'Live Mesh Topology Graph & Peer Latency Metrics Engine',
    }
  },
  {
    slug: 'wireguard-vs-openvpn-vs-ipsec',
    title: 'WireGuard vs OpenVPN vs IPsec',
    subtitle: 'Cryptographic Complexity, Kernel Performance & Codebase Auditability',
    category: 'technical',
    hub: 'VPN Protocol Benchmark & Comparison Hub',
    nodes: [
      { name: 'Codebase Size & Auditability', desc: 'WireGuard (4,000 LOC) vs OpenVPN (100k) vs IPsec (400k)', step: '① Code Simplicity' },
      { name: 'Throughput & CPU Saturation', desc: 'WireGuard achieves line rate (950+ Mbps) with low CPU', step: '② Raw Throughput' },
      { name: 'Handshake State Machine', desc: 'Noise IK Handshake (1 RTT) vs IKEv2 / TLS Multi-Roundtrip', step: '③ 1-RTT Handshake' },
      { name: 'Cryptographic Opinionated Primitives', desc: 'Fixed ChaCha20-Poly1305 vs Vulnerable Cipher Agility', step: '④ Modern Ciphers' },
      { name: 'Connection Roaming (Mobility)', desc: 'Seamless IP Roaming Across Wi-Fi and 5G Without Drops', step: '⑤ Seamless Roaming' },
      { name: 'Kernel vs Userspace Overhead', desc: 'Zero Context-Switching in Linux Kernel vs TUN/TAP Lag', step: '⑥ Kernel Speed' },
    ],
    arch: {
      client: 'Multi-Protocol Endpoints (Benchmarking WireGuard, OpenVPN, StrongSwan)',
      edge: 'Multi-Core Edge Gateway Testing 10 Gbps Saturated Network Egress',
      control: 'Protocol Evaluation Engine & State Machine Comparison Core',
      data: 'Side-by-Side Data Planes (Kernel WireGuard wg0 vs OpenVPN tun0)',
      storage: 'Benchmark Latency, Throughput & CPU Utilization Telemetry Store',
    }
  },
  {
    slug: 'zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes',
    title: 'Zero Trust in CI/CD Build Pipelines',
    subtitle: 'Securing Ephemeral Runners, Staging Nodes, and Deployment Targets',
    category: 'technical',
    hub: 'CI/CD Ephemeral Runner Mesh Broker',
    nodes: [
      { name: 'Ephemeral GitHub / GitLab Runner', desc: 'Spins up in Kubernetes for a 3-Minute Job', step: '① Runner Spawn' },
      { name: 'OIDC Job Identity Attestation', desc: 'Claims Scoped to Repo, Branch & Commit SHA', step: '② OIDC Attestation' },
      { name: 'Ephemeral WireGuard Mesh Peer', desc: 'Joins Secure Overlay Mesh for Duration of Build', step: '③ Mesh Join' },
      { name: 'Isolated Staging Deployment Target', desc: 'Accepts Deployment from Authorized Commit Hash Only', step: '④ Scoped Deploy' },
      { name: 'Strict Egress Dependency Filtering', desc: 'Blocks Runner from Exfiltrating Secrets to the Web', step: '⑤ Egress Guard' },
      { name: 'Cryptographic Destruction & Teardown', desc: 'Revokes Keys and Destroys Runner Container', step: '⑥ Clean Teardown' },
    ],
    arch: {
      client: 'Ephemeral Build Containers (GitHub Actions, GitLab CI, CircleCI)',
      edge: 'Internal Artifact Proxy & Build Dependency Security Gateway',
      control: 'OIDC Identity Verifier & Ephemeral WireGuard Mesh Peer Mint',
      data: 'Microsegmented Peer-to-Peer Tunnels to Isolated Staging/Prod Clusters',
      storage: 'Build Provenance (SLSA 3) Evidence Vault & Deployment Audit Stream',
    }
  },
  {
    slug: 'zero-trust-healthcare',
    title: 'Zero Trust for Distributed Healthcare',
    subtitle: 'Connecting 200 Clinics & Medical Imaging Without Central Hub Bottlenecks',
    category: 'industry',
    hub: 'Healthcare Distributed Mesh Controller',
    nodes: [
      { name: '200+ Regional Outpatient Clinics', desc: 'Doctors & Radiologists Accessing Hospital Records', step: '① Clinic Access' },
      { name: 'Medical Imaging PACS / DICOM Servers', desc: 'Multi-Gigabyte CT Scans & MRI Data Streams', step: '② PACS Imaging' },
      { name: 'Zero Central Hub Bottleneck', desc: 'Direct Peer-to-Peer DICOM Transfer at LAN Speeds', step: '③ Direct Transfer' },
      { name: 'HIPAA & HITECH Cryptographic Isolation', desc: 'Strict Zero Lateral Movement Between Separate Clinics', step: '④ Clinic Isolation' },
      { name: 'Medical IoT Medical Devices (Infusion)', desc: 'Microsegmented from General Clinical Laptops', step: '⑤ Medical IoT' },
      { name: 'Unified Hospital Audit & Compliance Vault', desc: 'Continuous Compliance Evidence for HHS Audits', step: '⑥ HHS Audit Vault' },
    ],
    arch: {
      client: 'Clinic Diagnostic Workstations & Radiologist High-Res Displays',
      edge: 'Clinic Edge Gateways with Automated WAN Failover (Fiber + 5G)',
      control: 'HIPAA-Compliant Central Health Mesh Policy & Routing Hub',
      data: 'High-Throughput P2P WireGuard Mesh Connecting Clinics Directly to PACS',
      storage: 'HIPAA ePHI Access Audit Trail & Medical Record Transaction Logs',
    }
  },
  {
    slug: 'zero-trust-ma-integration',
    title: 'Zero Trust for M&A Network Integration',
    subtitle: 'Connecting Acquired Enterprise Infrastructure in Days, Not Months',
    category: 'industry',
    hub: 'M&A Rapid Network Integration Engine',
    nodes: [
      { name: 'Acquiring Company Corporate Network', desc: 'Existing Identity (Okta) and Multi-Cloud VPCs', step: '① Parent Company' },
      { name: 'Acquired Subsidiary Infrastructure', desc: 'Overlapping Subnets (10.0.0.0/16 IP Conflicts)', step: '② Subnet Conflict' },
      { name: 'Zero IP Re-numbering Gateway', desc: 'Overlays MagicDNS Names; 0 Subnet Changes Needed', step: '③ MagicDNS Overlay' },
      { name: 'Multi-IdP Cross-Organization Federation', desc: 'Allows Acquired Staff to Use Legacy Credentials', step: '④ IdP Federation' },
      { name: 'Resource-Level Least-Privilege Granularity', desc: 'Grants Access Strictly to Necessary CRM / Jira Only', step: '⑤ Scoped Access' },
      { name: 'Integrated M&A Compliance Audit', desc: 'Consolidated Security Visibility on Day One', step: '⑥ Day-1 Audit' },
    ],
    arch: {
      client: 'Acquired Company Employee Laptops (Using Existing IdP Credentials)',
      edge: 'Non-Invasive Outbound-Only Connectors Deployed in Acquired VPCs',
      control: 'Multi-IdP Policy Broker (Federating Parent Okta & Child Entra ID)',
      data: 'Cryptographic Overlay Mesh Resolving IP Conflicts via Namespace Routing',
      storage: 'Consolidated Day-1 M&A Security & Access Audit Lake',
    }
  },
  {
    slug: 'ztna-metrics-for-cisos',
    title: '17 Essential ZTNA Metrics for CISOs',
    subtitle: 'Actionable Security KPIs, Blast-Radius Reductions & Boardroom Reporting',
    category: 'technical',
    hub: 'CISO Zero Trust Telemetry & Metrics Hub',
    nodes: [
      { name: 'Metric: Mean Time to Revocation (MTTR)', desc: 'Time to Drop Session After Employee Departure (< 2s)', step: '① MTTR Speed' },
      { name: 'Metric: Lateral Movement Surface Reduction', desc: 'Percentage of Dark Infrastructure Inaccessible to Scans', step: '② Blast Radius' },
      { name: 'Metric: Non-Compliant Posture Drop Rate', desc: 'Devices Blocked Due to Missing EDR or OS Patches', step: '③ Posture Drops' },
      { name: 'Metric: JIT Access Duration & Usage', desc: 'Average Ephemeral Access Lifetime (< 45 minutes)', step: '④ JIT Duration' },
      { name: 'Metric: Direct P2P Latency Savings', desc: 'Milliseconds Saved vs Traditional Hub-and-Spoke VPN', step: '⑤ Latency Gain' },
      { name: 'Executive Boardroom KPI Dashboard', desc: 'Automated Real-Time Security Posture Scorecards', step: '⑥ Board Metrics' },
    ],
    arch: {
      client: 'Global Endpoint Telemetry Collectors & EDR Integrations',
      edge: 'High-Frequency Access Log Aggregators Streaming from Global Edge',
      control: 'Continuous KPI Analytics Engine & Anomaly Detection Pipeline',
      data: 'Live Connection Performance Monitors Tracking Packet Drops & Jitter',
      storage: 'Executive Metric Warehouse (TimescaleDB / ClickHouse) & Grafana',
    }
  },
  {
    slug: 'ztna-vs-vpn',
    title: 'ZTNA vs Legacy VPN Architecture',
    subtitle: 'The 8 Fundamental Differences: Scope, Trust, Latency & Lateral Movement',
    category: 'fundamentals',
    hub: 'ZTNA vs VPN Architectural Arbiter',
    nodes: [
      { name: 'Trust Assumption: Perimeter vs None', desc: 'Legacy: Inside = Trusted | ZTNA: Assume Breach Always', step: '① Trust Paradigm' },
      { name: 'Network Scope: Subnet vs Application', desc: 'Legacy: Layer 3 Subnet | ZTNA: Layer 4/7 Single Port', step: '② Granularity' },
      { name: 'Ingress Visibility: Public Port vs Dark', desc: 'Legacy: Open 443/1194 | ZTNA: 100% Dark (Single-Packet Auth)', step: '③ Dark Ingress' },
      { name: 'Topology: Hub-and-Spoke vs Direct Mesh', desc: 'Legacy: VPN Concentrator Bottleneck | ZTNA: Direct P2P', step: '④ P2P Topology' },
      { name: 'Authentication: Login Time vs Continuous', desc: 'Legacy: One-Time Login | ZTNA: Re-verified Every 60s', step: '⑤ Continuous Auth' },
      { name: 'Lateral Movement: Unrestricted vs Zero', desc: 'Legacy: LAN Scanning | ZTNA: Cryptographically Impossible', step: '⑥ Lateral Barrier' },
    ],
    arch: {
      client: 'User Workstations Running Modern ZTNA Mesh vs Legacy VPN Client',
      edge: 'Edge Access Brokers with Single-Packet Authorization (Zero Open Ports)',
      control: 'Decoupled Cloud Policy Decision Point (Attribute-Based Access Control)',
      data: 'Direct Peer-to-Peer WireGuard Tunnels (Eliminating Concentrator Hops)',
      storage: 'Unified Access Audit Data Lake & Live Security Anomaly Stream',
    }
  }
];

console.log(`Configured ${blogs.length} blog diagram specifications.`);

// ── SVG GENERATOR FUNCTIONS ──────────────────────────────────────────────────

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Generate Style 1: Data Flow / Context Diagram (Inspired by Image 1)
 */
function generateFlowSvg(blog) {
  const primaryColor = '#0284c7'; // Sky / Primary blue
  const hubBg = '#0f172a'; // Deep slate
  const cardBorder = '#cbd5e1';
  const cardBg = '#ffffff';

  // Positions for 6 surrounding nodes (viewBox: 1000 x 680)
  // Center is (500, 350)
  const nodePositions = [
    { x: 50,  y: 110, w: 260, h: 95, cx: 310, cy: 157 }, // Top-Left
    { x: 370, y: 80,  w: 260, h: 95, cx: 500, cy: 175 }, // Top-Center
    { x: 690, y: 110, w: 260, h: 95, cx: 690, cy: 157 }, // Top-Right
    { x: 50,  y: 505, w: 260, h: 95, cx: 310, cy: 552 }, // Bottom-Left
    { x: 370, y: 535, w: 260, h: 95, cx: 500, cy: 535 }, // Bottom-Center
    { x: 690, y: 505, w: 260, h: 95, cx: 690, cy: 552 }, // Bottom-Right
  ];

  const hubCx = 500;
  const hubCy = 350;

  // Build connection lines & step badges
  let connectionsXml = '';
  blog.nodes.forEach((node, idx) => {
    const pos = nodePositions[idx];
    const midX = (hubCx + pos.cx) / 2;
    const midY = (hubCy + pos.cy) / 2;

    connectionsXml += `
      <!-- Connection to Node ${idx + 1} -->
      <line x1="${hubCx}" y1="${hubCy}" x2="${pos.cx}" y2="${pos.cy}" 
            stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6,4" marker-end="url(#arrow-blue)" />
      
      <!-- Step Badge -->
      <g transform="translate(${midX - 60}, ${midY - 14})">
        <rect width="120" height="26" rx="13" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="60" y="17" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">${escapeXml(node.step)}</text>
      </g>
    `;
  });

  // Build node cards
  let nodesXml = '';
  blog.nodes.forEach((node, idx) => {
    const pos = nodePositions[idx];
    nodesXml += `
      <!-- Node Card ${idx + 1} -->
      <g transform="translate(${pos.x}, ${pos.y})">
        <rect width="${pos.w}" height="${pos.h}" rx="10" fill="${cardBg}" stroke="${cardBorder}" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect x="0" y="0" width="6" height="${pos.h}" rx="3" fill="#0284c7"/>
        <text x="18" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              font-size="13" font-weight="700" fill="#0f172a">${escapeXml(node.name)}</text>
        <foreignObject x="18" y="36" width="${pos.w - 30}" height="52">
          <p xmlns="http://www.w3.org/1999/xhtml" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.35;color:#475569;margin:0;padding:0;">
            ${escapeXml(node.desc)}
          </p>
        </foreignObject>
      </g>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 680" width="100%" height="100%">
  <defs>
    <filter id="drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#0284c7" flood-opacity="0.3"/>
    </filter>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
    </marker>
    <linearGradient id="hub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="1000" height="680" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Top Title Banner -->
  <g transform="translate(0, 0)">
    <path d="M 0 16 Q 0 0 16 0 L 984 0 Q 1000 0 1000 16 L 1000 64 L 0 64 Z" fill="#0f172a"/>
    <rect x="24" y="18" width="168" height="26" rx="13" fill="#0284c7"/>
    <text x="108" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">DATA FLOW DIAGRAM</text>
    
    <text x="210" y="36" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="16" font-weight="700" fill="#ffffff">${escapeXml(blog.title)}</text>
    <text x="976" y="36" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="12" font-weight="500" fill="#94a3b8" text-anchor="end">Zero Trust Data &amp; Control Flow</text>
  </g>

  <!-- Connection Lines & Step Badges -->
  ${connectionsXml}

  <!-- Central Hub Node (DFD Center Circle) -->
  <g transform="translate(${hubCx}, ${hubCy})">
    <!-- Outer Glow Ring -->
    <circle r="92" fill="#e0f2fe" opacity="0.6"/>
    <circle r="82" fill="url(#hub-grad)" stroke="#0284c7" stroke-width="4" filter="url(#glow)"/>
    
    <!-- Central Icon/Symbol Badge -->
    <rect x="-42" y="-55" width="84" height="22" rx="11" fill="#0284c7"/>
    <text x="0" y="-40" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">CORE ENGINE</text>

    <!-- Hub Title -->
    <foreignObject x="-74" y="-26" width="148" height="74">
      <div xmlns="http://www.w3.org/1999/xhtml" style="display:flex;align-items:center;justify-content:center;height:100%;text-align:center;">
        <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;font-weight:700;color:#ffffff;line-height:1.25;">
          ${escapeXml(blog.hub)}
        </span>
      </div>
    </foreignObject>

    <text x="0" y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="9.5" font-weight="600" fill="#38bdf8" text-anchor="middle">QUICKZTNA POLICY BROKER</text>
  </g>

  <!-- Peripheral Functional Nodes -->
  ${nodesXml}

  <!-- Bottom Footer Bar -->
  <g transform="translate(30, 642)">
    <text x="0" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="600" fill="#64748b">
      FIG 1.1: Zero-Level Data Flow Diagram (DFD) · Protocol Routing, Dynamic Policy Ingestion, and Microsegmented Access
    </text>
    <text x="940" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="700" fill="#0284c7" text-anchor="end">QuickZTNA Architecture Reference</text>
  </g>
</svg>`;
}

/**
 * Generate Style 2: System Design Master Blueprint (Inspired by Image 2)
 */
function generateArchSvg(blog) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 840" width="100%" height="100%">
  <defs>
    <!-- Dark slate canvas gradients -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accent-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="accent-green" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <linearGradient id="accent-purple" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
    <linearGradient id="accent-amber" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>

    <!-- Arrow markers -->
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
    </marker>
    <marker id="arrow-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#a78bfa"/>
    </marker>

    <!-- Blueprint grid pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="0.75" opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background Base Canvas -->
  <rect width="1200" height="840" rx="16" fill="url(#bg-grad)" stroke="#334155" stroke-width="2"/>
  <rect width="1200" height="840" fill="url(#grid)"/>

  <!-- Top Title Header Banner -->
  <g transform="translate(30, 24)">
    <rect width="1140" height="65" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <rect x="18" y="16" width="180" height="32" rx="6" fill="url(#accent-cyan)"/>
    <text x="108" y="37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">SYSTEM DESIGN</text>
    
    <text x="216" y="33" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="18" font-weight="700" fill="#f8fafc">${escapeXml(blog.title)}</text>
    <text x="216" y="50" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="12" font-weight="400" fill="#94a3b8">${escapeXml(blog.subtitle)}</text>

    <!-- Legend Pills on Top Right -->
    <g transform="translate(850, 20)">
      <!-- Control Plane Legend -->
      <line x1="0" y1="12" x2="30" y2="12" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5,3"/>
      <text x="36" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-size="11" font-weight="600" fill="#38bdf8">Control Plane</text>
      
      <!-- Data Plane Legend -->
      <line x1="140" y1="12" x2="170" y2="12" stroke="#34d399" stroke-width="2.5"/>
      <text x="176" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            font-size="11" font-weight="600" fill="#34d399">WireGuard Mesh</text>
    </g>
  </g>

  <!-- ── TIER 1: CLIENTS & ENDPOINTS (Top) ────────────────────────── -->
  <g transform="translate(30, 108)">
    <rect width="1140" height="120" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="16" y="12" width="130" height="22" rx="4" fill="#0284c7" opacity="0.2"/>
    <text x="81" y="27" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">CLIENT &amp; ACCESS TIER</text>

    <!-- Client Cards -->
    <g transform="translate(18, 44)">
      <!-- Card 1: Initiator Laptops -->
      <g transform="translate(0, 0)">
        <rect width="350" height="60" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <circle cx="28" cy="30" r="14" fill="#0284c7"/>
        <text x="28" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">💻</text>
        <text x="52" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#f1f5f9">${escapeXml(blog.arch.client)}</text>
        <text x="52" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="400" fill="#94a3b8">Kernel WireGuard + FIDO2 WebAuthn + TPM Posture</text>
      </g>

      <!-- Card 2: Single-Packet Authorization Gate -->
      <g transform="translate(376, 0)">
        <rect width="350" height="60" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <circle cx="28" cy="30" r="14" fill="#7c3aed"/>
        <text x="28" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">🛡️</text>
        <text x="52" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#f1f5f9">${escapeXml(blog.arch.edge)}</text>
        <text x="52" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="400" fill="#94a3b8">Single-Packet Authorization · Zero Open Ports · Anycast</text>
      </g>

      <!-- Card 3: NAT Traversal & STUN Relay -->
      <g transform="translate(752, 0)">
        <rect width="350" height="60" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <circle cx="28" cy="30" r="14" fill="#059669"/>
        <text x="28" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">🌐</text>
        <text x="52" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#f1f5f9">Global STUN / DERP Edge Mesh</text>
        <text x="52" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="400" fill="#94a3b8">Interactive Connectivity Establishment (ICE) Hole Punch</text>
      </g>
    </g>
  </g>

  <!-- Connectors from Tier 1 to Tier 2 -->
  <line x1="200" y1="228" x2="200" y2="280" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-cyan)"/>
  <line x1="580" y1="228" x2="580" y2="280" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-cyan)"/>
  <line x1="950" y1="228" x2="950" y2="280" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow-green)"/>

  <!-- ── TIER 2: DECOUPLED CONTROL PLANE (Middle) ────────────────── -->
  <g transform="translate(30, 280)">
    <rect width="1140" height="230" rx="12" fill="#0b1120" stroke="#0284c7" stroke-width="1.5" opacity="0.95"/>
    <rect x="16" y="12" width="220" height="24" rx="4" fill="url(#accent-cyan)"/>
    <text x="126" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">QUICKZTNA DECOUPLED CONTROL PLANE</text>
    <text x="246" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="500" fill="#94a3b8">Out-of-band policy signaling; zero user payload transit</text>

    <!-- Sub-components of Control Plane -->
    <g transform="translate(18, 50)">
      <!-- 1. Policy Decision Point (PDP) -->
      <g transform="translate(0, 0)">
        <rect width="260" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <rect x="12" y="12" width="110" height="20" rx="4" fill="#0369a1"/>
        <text x="67" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">ABAC PDP ENGINE</text>
        <text x="14" y="54" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#f8fafc">Policy Evaluator</text>
        <foreignObject x="14" y="62" width="232" height="78">
          <p xmlns="http://www.w3.org/1999/xhtml" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.4;color:#94a3b8;margin:0;">
            ${escapeXml(blog.arch.control)}
          </p>
        </foreignObject>
      </g>

      <!-- 2. Identity Provider Sync (SCIM/OIDC) -->
      <g transform="translate(284, 0)">
        <rect width="260" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <rect x="12" y="12" width="110" height="20" rx="4" fill="#7c3aed"/>
        <text x="67" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">IDENTITY &amp; SCIM</text>
        <text x="14" y="54" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#f8fafc">Directory Federation</text>
        <foreignObject x="14" y="62" width="232" height="78">
          <p xmlns="http://www.w3.org/1999/xhtml" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.4;color:#94a3b8;margin:0;">
            Real-time Okta, Entra ID &amp; Google Workspace sync. Automatic session kill-switch upon employee offboarding.
          </p>
        </foreignObject>
      </g>

      <!-- 3. Key Broker & Ephemeral Rotator -->
      <g transform="translate(568, 0)">
        <rect width="260" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <rect x="12" y="12" width="110" height="20" rx="4" fill="#059669"/>
        <text x="67" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">KEY ORCHESTRATOR</text>
        <text x="14" y="54" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#f8fafc">Ephemeral Key Rotator</text>
        <foreignObject x="14" y="62" width="232" height="78">
          <p xmlns="http://www.w3.org/1999/xhtml" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.4;color:#94a3b8;margin:0;">
            Distributes Curve25519 &amp; ML-KEM-768 public keys. Enforces forward secrecy with sub-hourly key shredding.
          </p>
        </foreignObject>
      </g>

      <!-- 4. Distributed State & Shard Manager -->
      <g transform="translate(852, 0)">
        <rect width="252" height="150" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <rect x="12" y="12" width="100" height="20" rx="4" fill="#d97706"/>
        <text x="62" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">SHARD STATE</text>
        <text x="14" y="54" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#f8fafc">Distributed Consensus</text>
        <foreignObject x="14" y="62" width="224" height="78">
          <p xmlns="http://www.w3.org/1999/xhtml" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.4;color:#94a3b8;margin:0;">
            Multi-region Raft consensus cluster maintaining peer route tables, NAT mappings, and active session posture.
          </p>
        </foreignObject>
      </g>
    </g>
  </g>

  <!-- Connectors from Tier 2 to Tier 3 -->
  <line x1="150" y1="510" x2="150" y2="560" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-cyan)"/>
  <line x1="700" y1="510" x2="700" y2="560" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow-green)"/>
  <line x1="980" y1="510" x2="980" y2="560" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-purple)"/>

  <!-- ── TIER 3: DATA PLANE & TARGET WORKLOADS (Bottom) ──────────── -->
  <g transform="translate(30, 560)">
    <rect width="1140" height="150" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="16" y="12" width="220" height="24" rx="4" fill="url(#accent-green)"/>
    <text x="126" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">DIRECT ENCRYPTED DATA PLANE</text>
    <text x="246" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="500" fill="#94a3b8">Peer-to-peer WireGuard mesh · Zero concentrator choke point</text>

    <!-- Workload Cards -->
    <g transform="translate(18, 48)">
      <!-- Target Workload Card 1 -->
      <g transform="translate(0, 0)">
        <rect width="350" height="85" rx="8" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
        <text x="16" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#34d399">🔒 Target Workload Enclave</text>
        <foreignObject x="16" y="32" width="318" height="48">
          <p xmlns="http://www.w3.org/1999/xhtml" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.35;color:#f1f5f9;margin:0;">
            ${escapeXml(blog.arch.data)}
          </p>
        </foreignObject>
      </g>

      <!-- Target Workload Card 2: Microsegmented Enclaves -->
      <g transform="translate(376, 0)">
        <rect width="350" height="85" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="16" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#f8fafc">☸️ Isolated Kubernetes &amp; VPCs</text>
        <text x="16" y="46" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="400" fill="#94a3b8">In-pod WireGuard sidecars &amp; private subnets.</text>
        <text x="16" y="64" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="400" fill="#94a3b8">Cryptographically impossible lateral movement.</text>
      </g>

      <!-- Target Workload Card 3: Storage & Audit Telemetry -->
      <g transform="translate(752, 0)">
        <rect width="350" height="85" rx="8" fill="#1e293b" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="16" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#a78bfa">📊 Audit &amp; Compliance Lake</text>
        <foreignObject x="16" y="32" width="318" height="48">
          <p xmlns="http://www.w3.org/1999/xhtml" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.35;color:#f1f5f9;margin:0;">
            ${escapeXml(blog.arch.storage)}
          </p>
        </foreignObject>
      </g>
    </g>
  </g>

  <!-- ── FOOTER BAR ─────────────────────────────────────────────── -->
  <g transform="translate(30, 796)">
    <text x="0" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="600" fill="#64748b">
      FIG 1.2: End-to-End System Design Architecture · Single-Packet Auth (SPA), Decoupled Policy Plane, and Kernel WireGuard Mesh
    </text>
    <text x="1140" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-size="11" font-weight="700" fill="#38bdf8" text-anchor="end">QuickZTNA Master System Design Blueprint</text>
  </g>
</svg>`;
}

// ── GENERATION EXECUTION ─────────────────────────────────────────────────────

let generatedCount = 0;

for (const blog of blogs) {
  const flowSvgPath = path.join(outputDir, `${blog.slug}-flow.svg`);
  const archSvgPath = path.join(outputDir, `${blog.slug}-architecture.svg`);

  const flowContent = generateFlowSvg(blog);
  const archContent = generateArchSvg(blog);

  fs.writeFileSync(flowSvgPath, flowContent, 'utf8');
  fs.writeFileSync(archSvgPath, archContent, 'utf8');

  generatedCount += 2;
  console.log(`[Generated] ${blog.slug}: flow.svg + architecture.svg`);
}

console.log(`\nSuccessfully generated all ${generatedCount} diagram assets in public/images/diagrams/!`);

export { blogs };
