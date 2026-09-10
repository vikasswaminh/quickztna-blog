export const blogDiagramConfigs = [
  // 1. anssi-pqc-transition-plan
  {
    slug: 'anssi-pqc-transition-plan',
    title: "ANSSI 3-Phase Post-Quantum Cryptographic Migration",
    subtitle: "French National Cybersecurity Agency (ANSSI) Roadmap for Critical Operators (OIV)",
    type: 'timeline',
    phases: [
      {
        phaseTag: "PHASE 1",
        timeWindow: "2022 – 2025",
        title: "Hybrid Deployment & Beta",
        desc: "Introduction of post-quantum key exchange alongside classical ECDH algorithms.",
        req1: "Deploy hybrid KEM (X25519 + ML-KEM)",
        req2: "Retain classical ECDH as security backstop",
        req3: "Prohibit pure post-quantum algorithms",
        statusBg: "#1E3A8A",
        statusBorder: "#3B82F6",
        statusTitle: "Transitional Testing",
        statusDesc: "Lab testing & non-critical OIV pilot links",
        deliverable: "Cryptographic Inventory (CBOM)"
      },
      {
        phaseTag: "PHASE 2",
        timeWindow: "2026 – 2030",
        title: "Mandatory Hybridization",
        desc: "Hard requirement for all French public administration and critical infrastructure.",
        req1: "Enforce hybrid key exchange on all external WANs",
        req2: "Quantum-safe firmware and software signing",
        req3: "SecNumCloud & CSPN qualification mandate",
        statusBg: "#064E3B",
        statusBorder: "#059669",
        statusTitle: "Mandatory Compliance",
        statusDesc: "Full enforcement across vital operators",
        deliverable: "Audited Hybrid WireGuard/TLS Configs"
      },
      {
        phaseTag: "PHASE 3",
        timeWindow: "2030+",
        title: "Pure Post-Quantum Sunset",
        desc: "Classical cryptography deprecated. Full transition to standalone PQC primitives.",
        req1: "Complete sunset of RSA, DH, and ECC",
        req2: "FIPS 203/204 algorithms (ML-KEM / ML-DSA)",
        req3: "Pure PQC permitted for qualified equipment",
        statusBg: "#4C1D95",
        statusBorder: "#8B5CF6",
        statusTitle: "Full PQC Era",
        statusDesc: "Complete classical deprecation across France",
        deliverable: "National Quantum Defense Certificate"
      }
    ]
  },

  // 2. audit-outbound-traffic-shadow-ai-remote-laptops
  {
    slug: 'audit-outbound-traffic-shadow-ai-remote-laptops',
    title: "Shadow AI Egress Interception & DLP Architecture",
    subtitle: "Kernel eBPF Socket Monitoring & Deep Packet Inspection for Remote Endpoints",
    type: 'threat_model',
    attacker: {
      name: "Shadow AI & Rogue LLM Exfil",
      desc1: "Developer CLIs (Cursor, Claude Code, Aider)",
      desc2: "Unauthorized public LLM web browsers"
    },
    entryPoint: {
      step1: "Prompt pastes source code & AWS keys",
      step2: "Encrypted DNS (DoH) attempts bypass",
      step3: "Split-tunnel socket skirts legacy VPN"
    },
    securityGate: {
      name: "QuickZTNA eBPF + DLP Interceptor",
      check1: "Kernel Socket Probe & PID Attribution",
      sub1: "Tracks process binary hash (SHA-256)",
      check2: "DoH / SNI / ECH Loopback Decryption",
      sub2: "Inspects HTTP/2 SSE streaming prompt buffers"
    },
    protectedAsset: {
      name: "Authorized Corporate AI Gateway",
      item1: "Private Enterprise Model Endpoints",
      item2: "Automated Regex & PII Redaction",
      item3: "Zero Retention Agreement (ZRA) Mesh"
    },
    siemNode: {
      title: "Real-Time Shadow AI Telemetry & CISO Alerting",
      desc1: "Identifies rogue model APIs, token counts, and attempted secret leaks within 50ms.",
      desc2: "Exported to Splunk, Datadog, and CrowdStrike via cryptographically signed JSON logs."
    }
  },

  // 3. bsi-post-quantum-transition-2026
  {
    slug: 'bsi-post-quantum-transition-2026',
    title: "German BSI TR-02102-1 Compliance Flowchart",
    subtitle: "Cryptographic Algorithm Selection & Hybrid Mandates for KRITIS Operators",
    type: 'decision_tree',
    stages: [
      {
        stageName: "STAGE 1: ASSET SCOPE",
        borderColor: "#38BDF8",
        headerColor: "#0284C7",
        gateTitle: "KRITIS / NIS2 Scope",
        gateDesc: "Identifies whether workload belongs to German vital infrastructure.",
        rule1: "Energy, Water, Finance, Gov",
        rule2: "Data retention horizon >= 5 years",
        passAction: "Proceed to PQC Mandate",
        failAction: "Standard Baseline"
      },
      {
        stageName: "STAGE 2: KEM ALGORITHM",
        borderColor: "#10B981",
        headerColor: "#059669",
        gateTitle: "FrodoKEM / ML-KEM",
        gateDesc: "Evaluates algorithm hardness against BSI approved specifications.",
        rule1: "FrodoKEM (Unstructured Lattice)",
        rule2: "ML-KEM / Kyber (FIPS 203)",
        passAction: "Algorithm Approved",
        failAction: "Non-Compliant Primitive"
      },
      {
        stageName: "STAGE 3: HYBRIDIZATION",
        borderColor: "#F59E0B",
        headerColor: "#D97706",
        gateTitle: "Classical ECDH Combiner",
        gateDesc: "Validates that post-quantum KEM is combined with Curve25519/Brainpool.",
        rule1: "HKDF-SHA256 dual derivation",
        rule2: "Zero single-algorithm point of failure",
        passAction: "BSI TR-02102 Certified",
        failAction: "Standalone PQC Rejected"
      }
    ]
  },

  // 4. cloudflare-access-alternatives
  {
    slug: 'cloudflare-access-alternatives',
    title: "Cloudflare Edge-Proxy vs. Direct WireGuard Mesh",
    subtitle: "Architectural Comparison: Centralized HTTP Reverse Proxy vs. P2P Kernel Overlay",
    type: 'comparison_split',
    legacyTitle: "Cloudflare Access (Edge-Proxy)",
    legacyItems: [
      { title: "Hairpinned Data Plane", desc1: "All packets traverse Cloudflare edge data centers.", desc2: "Latency overhead + per-GB egress costs on large transfers." },
      { title: "TLS Decryption at Edge", desc1: "Cloudflare proxy terminates and inspects user TLS.", desc2: "Third-party vendor has visibility into decrypted payload." },
      { title: "Limited Non-HTTP Support", desc1: "Protocols like SSH/RDP require WARP client or cloudflared.", desc2: "High operational friction for internal infrastructure." },
      { title: "Vendor Cloud Lock-in", desc1: "Control plane and data path bound to proprietary CDN.", desc2: "Cannot run air-gapped or purely sovereign infrastructure." }
    ],
    modernTitle: "QuickZTNA (Direct WireGuard Mesh)",
    modernItems: [
      { title: "Direct Peer-to-Peer Routing", desc1: "Sub-2ms direct LAN/WAN connections without hairpin.", desc2: "Native line-rate kernel WireGuard throughput (10GbE)." },
      { title: "100% Zero-Knowledge E2E", desc1: "End-to-end encryption with ChaCha20-Poly1305.", desc2: "Control plane never sees or decrypts user payloads." },
      { title: "Universal Layer 4/7 Support", desc1: "Native support for Postgres, SSH, RDP, SMB, and UDP.", desc2: "Zero proxy wrapper friction; operates transparently." },
      { title: "Out-of-Band Coordination", desc1: "Decoupled control plane; mesh survives cloud outages.", desc2: "Deployable across any cloud, bare-metal, or on-prem." }
    ]
  },

  // 5. cnsa-2-0-deadlines
  {
    slug: 'cnsa-2-0-deadlines',
    title: "NSA Commercial National Security Algorithm (CNSA 2.0) Roadmap",
    subtitle: "US National Security Agency Mandatory Quantum-Resistant Timelines (2025 – 2035)",
    type: 'timeline',
    phases: [
      {
        phaseTag: "MILESTONE 1",
        timeWindow: "2025 – 2030",
        title: "Software & Firmware Signing",
        desc: "Initial mandate focusing on software supply chain, OS boot, and code signing.",
        req1: "Begin ML-DSA / LMS / XMSS signing in 2025",
        req2: "Exclusive use mandatory by 2030",
        req3: "RSA/ECDSA signatures prohibited post-2030",
        statusBg: "#1E3A8A",
        statusBorder: "#3B82F6",
        statusTitle: "In Progress (2025)",
        statusDesc: "Firmware, OS bootloaders, and code signers",
        deliverable: "CNSA 2.0 Supply Chain Attestation"
      },
      {
        phaseTag: "MILESTONE 2",
        timeWindow: "2025 – 2033",
        title: "Web Browsers & Cloud Ingress",
        desc: "Protection of external web traffic, cloud services, and client TLS endpoints.",
        req1: "Begin hybrid TLS 1.3 key exchange in 2025",
        req2: "ML-KEM-1024 or ML-KEM-768 standard",
        req3: "Exclusive post-quantum TLS by 2033",
        statusBg: "#064E3B",
        statusBorder: "#059669",
        statusTitle: "Cloud Mandate",
        statusDesc: "Browsers, servers, and ingress proxies",
        deliverable: "FIPS 203 Validated Ingress"
      },
      {
        phaseTag: "MILESTONE 3",
        timeWindow: "2026 – 2030",
        title: "Networking Equipment & VPNs",
        desc: "Routers, firewalls, site-to-site VPNs, and Zero Trust gateways.",
        req1: "Begin PQC VPN deployment in 2026",
        req2: "Exclusive PQC VPN enforcement by 2030",
        req3: "Classical IKEv2 / IPsec / OpenVPN phased out",
        statusBg: "#D97706",
        statusBorder: "#F59E0B",
        statusTitle: "Critical Infrastructure",
        statusDesc: "All gateway and tunnel infrastructure",
        deliverable: "Quantum-Resistant Overlay Mesh"
      },
      {
        phaseTag: "MILESTONE 4",
        timeWindow: "2031 – 2035",
        title: "Total Sunset: Legacy Hardware",
        desc: "Full deprecation of custom ASICs, legacy equipment, and all NSS hardware.",
        req1: "Legacy hardware upgrade beginning in 2031",
        req2: "100% quantum-safe across entire US NSS by 2035",
        req3: "Zero classical public-key cryptography permitted",
        statusBg: "#4C1D95",
        statusBorder: "#8B5CF6",
        statusTitle: "Final Sunset",
        statusDesc: "Absolute deadline for all US defense systems",
        deliverable: "NSS Complete PQC Compliance"
      }
    ]
  },

  // 6. device-posture-checks
  {
    slug: 'device-posture-checks',
    title: "Continuous Multi-Signal Device Posture Engine",
    subtitle: "Real-Time Telemetry Evaluation & Tiered Failure Remediation Flowchart",
    type: 'decision_tree',
    stages: [
      {
        stageName: "TIER 1: OS INTEGRITY",
        borderColor: "#EF4444",
        headerColor: "#991B1B",
        gateTitle: "Hardware & Disk Security",
        gateDesc: "Evaluates physical security chips and filesystem encryption.",
        rule1: "FileVault / BitLocker active",
        rule2: "Secure Boot & OS patch <= N-1",
        passAction: "Proceed to EDR Health",
        failAction: "⛔ HARD DENY: Revoke WireGuard key"
      },
      {
        stageName: "TIER 2: EDR TELEMETRY",
        borderColor: "#F59E0B",
        headerColor: "#D97706",
        gateTitle: "Host Protection Health",
        gateDesc: "Checks running EDR agent status and recent zero-day threat scores.",
        rule1: "CrowdStrike/Defender running",
        rule2: "Zero active high-severity detections",
        passAction: "Proceed to Biometrics",
        failAction: "⚠️ QUARANTINE: Allow patch server only"
      },
      {
        stageName: "TIER 3: AUTH & JIT",
        borderColor: "#10B981",
        headerColor: "#059669",
        gateTitle: "Identity & Screen Lock",
        gateDesc: "Validates active user presence and session idle timeout.",
        rule1: "Screen lock timeout <= 5 min",
        rule2: "FIDO2 Touch ID / Hello active",
        passAction: "✅ GRANT ACCESS: Scoped L4 port",
        failAction: "🔄 STEP-UP: Prompt hardware MFA"
      }
    ]
  },

  // 7. dora-compliance-network-resilience
  {
    slug: 'dora-compliance-network-resilience',
    title: "EU DORA ICT Multi-Relay Disaster Resilient Mesh",
    subtitle: "Regulation (EU) 2022/2554 Resilience Testing & Automated Out-of-Band Failover",
    type: 'mesh_network',
    controlPlane: {
      name: "DORA Dual-Region Active-Active Coordination Plane",
      desc: "Frankfurt (Primary) + Dublin (Hot Standby) control plane with zero-loss Raft state replication"
    },
    nodes: [
      { zone: "Core Banking Cloud", name: "AWS Frankfurt (eu-central-1)", ip: "100.64.10.1 (ztna0)", detail1: "Primary Core Banking Ledger", detail2: "Zero Inbound Ports / 100% Dark" },
      { zone: "Financial Disaster Enclave", name: "Azure Dublin (northeurope)", ip: "100.64.20.1 (ztna0)", detail1: "Hot Standby Secondary Enclave", detail2: "Automated Sub-second Failover" },
      { zone: "On-Premises Mainframe", name: "Zurich Private Datacenter", ip: "100.64.30.1 (ztna0)", detail1: "Hardware HSM & SWIFT Gateway", detail2: "Direct Encrypted Mesh Overlay" },
      { zone: "Authorized Treasury Operator", name: "Secured Compliance Laptop", ip: "100.64.40.5 (ztna0)", detail1: "FIDO2 Token + Continuous Posture", detail2: "Direct P2P Tunnel to Active Site" }
    ]
  },

  // 8. ephemeral-key-architecture
  {
    slug: 'ephemeral-key-architecture',
    title: "Atomic Netlink Dual-Key Ephemeral Rotation Lifeline",
    subtitle: "Zero-Downtime Kernel-Level WireGuard Key Shredding & JIT Rekeying Sequence",
    type: 'sequence',
    participants: [
      { name: "Dev Workstation", role: "Client Endpoint" },
      { name: "Local ZTNA Daemon", role: "Netlink Controller" },
      { name: "Linux Kernel", role: "WireGuard Driver" },
      { name: "IdP / OIDC Broker", role: "Identity Provider" },
      { name: "Target Gateway", role: "Protected Workload" }
    ],
    steps: [
      { from: 0, to: 1, label: "1. OIDC Token Nearing Expiration", detail: "TTL <= 60 seconds", color: "#F59E0B" },
      { from: 1, to: 3, label: "2. Request JIT Ephemeral Key Pair", detail: "Authenticated via hardware TPM", color: "#06B6D4" },
      { from: 3, to: 1, label: "3. Issue New Short-Lived Curve25519 Pair", detail: "Valid for 15 minutes", color: "#10B981" },
      { from: 1, to: 2, label: "4. Netlink Atomic Key Swap (RTM_NEWLINK)", detail: "Zero packet drop / No socket reset", color: "#06B6D4" },
      { from: 2, to: 4, label: "5. Noise_IK Ephemeral Handshake", detail: "Rekeyed tunnel active in <2ms", color: "#10B981" },
      { from: 1, to: 2, label: "6. Zero Memory & Shred Old Private Key", detail: "mlock() volatile RAM cleared", color: "#EF4444" }
    ]
  },

  // 9. harvest-now-decrypt-later
  {
    slug: 'harvest-now-decrypt-later',
    title: "Harvest Now, Decrypt Later (HNDL) Threat Mitigation",
    subtitle: "Adversarial Ciphertext Interception vs. Quantum-Safe Forward Secrecy Barrier",
    type: 'threat_model',
    attacker: {
      name: "Adversarial Nation-State Actor",
      desc1: "Passive Fiber Taps & ISP Intercepts",
      desc2: "Exabytes of encrypted traffic recorded"
    },
    entryPoint: {
      step1: "Taps undersea / WAN cables",
      step2: "Stores encrypted classical TLS/IPsec",
      step3: "Awaits Cryptographically Relevant QC"
    },
    securityGate: {
      name: "Hybrid Post-Quantum Boundary",
      check1: "Dual-Key Exchange (X25519 + ML-KEM-768)",
      sub1: "Classical ECDH + Lattice Module-LWE",
      check2: "Ephemeral Sub-Hourly Rekeying",
      sub2: "Keys destroyed immediately post-session"
    },
    protectedAsset: {
      name: "High-Value Enterprise Secrets",
      item1: "Healthcare PHI & Medical Records",
      item2: "Financial Ledgers & Banking Data",
      item3: "Government Intellectual Property"
    },
    siemNode: {
      title: "Quantum Forward Secrecy Guarantee",
      desc1: "Even if a future quantum computer breaks X25519 via Shor's algorithm, ML-KEM-768 remains unbreakable.",
      desc2: "HNDL attack ROI is reduced to absolute zero; stored ciphertext cannot be decrypted."
    }
  },

  // 10. headscale-vs-managed-coordination
  {
    slug: 'headscale-vs-managed-coordination',
    title: "Headscale (Self-Hosted) vs. Managed Coordination",
    subtitle: "Architectural & Operational Trade-off Matrix for Engineering Teams",
    type: 'comparison_split',
    legacyTitle: "Self-Hosted Headscale (DIY Ops)",
    legacyItems: [
      { title: "Manual Ops & SRE Overhead", desc1: "Requires 4-8 hours/month maintaining PostgreSQL, Linux VM.", desc2: "Manual setup of custom DERP relays and STUN servers." },
      { title: "Single Point of Failure", desc1: "Vanilla deployments run as single SQLite/PostgreSQL instance.", desc2: "Relies on manual backup scripts and VM snapshots." },
      { title: "Feature Lag vs. Tailscale Clients", desc1: "Community reverse-engineered; lags new client releases.", desc2: "May break on unexpected protocol updates." },
      { title: "DIY Compliance Paperwork", desc1: "No bundled SOC 2 Type II, ISO 27001, or HIPAA BAAs.", desc2: "Your internal team must defend infrastructure to auditors." }
    ],
    modernTitle: "Managed Coordination (QuickZTNA)",
    modernItems: [
      { title: "Zero Infrastructure Maintenance", desc1: "100% Managed SaaS control plane; deploy in <2 minutes.", desc2: "Free tier up to 5 users with full enterprise capabilities." },
      { title: "Active-Active Global High Availability", desc1: "Multi-region distributed consensus with automatic failover.", desc2: "Low-latency relay infrastructure in Frankfurt & Bangalore." },
      { title: "Advanced Governance & JIT", desc1: "Built-in ABAC, device posture checking, and JIT approvals.", desc2: "Out-of-band policy validation and instant key revocation." },
      { title: "Turnkey Compliance Readiness", desc1: "SOC 2 Type II certified, HIPAA compliant with signed BAAs.", desc2: "Automated cryptographic evidence logging exportable to SIEM." }
    ]
  }
];

// 11. hipaa-compliant-vpn-2026
blogDiagramConfigs.push({
  slug: 'hipaa-compliant-vpn-2026',
  title: "HIPAA Zero Trust Healthcare Defense-in-Depth Ring",
  subtitle: "45 CFR § 164 Compliance: Cryptographic Microsegmentation & PHI Protection",
  type: 'defense_in_depth',
  layers: [
    { ringTag: "RING 1: ENDPOINT", ringSub: "Physical Security", title: "Clinical Workstation & COW Device Posture", desc: "Verifies full-disk encryption (BitLocker/FileVault) and active EDR before any network socket opens.", controls: "Continuous TPM 2.0 attestation, FIDO2 badge tap, 5-minute screen lock", color: "#38BDF8", badgeBg: "#0284C7" },
    { ringTag: "RING 2: IDENTITY", ringSub: "Access Control", title: "Unique User ID & Ephemeral JIT Tokens", desc: "Eliminates shared passwords at nursing stations; issues short-lived session credentials tied to IdP.", controls: "SSO/OIDC federation, Just-in-Time privilege elevation, automated session termination", color: "#10B981", badgeBg: "#059669" },
    { ringTag: "RING 3: NETWORK", ringSub: "Transmission", title: "Outbound-Only WireGuard Micro-Tunnels", desc: "No listening ports on hospital or clinic servers; traffic isolated to specific EHR application ports.", controls: "End-to-End ChaCha20-Poly1305 encryption, 100% dark private subnets, zero lateral LAN pivoting", color: "#F59E0B", badgeBg: "#D97706" },
    { ringTag: "RING 4: AUDIT", ringSub: "Evidence & Logs", title: "Immutable Cryptographic Audit Trail", desc: "Logs every access decision and packet flow immutably for HIPAA §164.312(b) audit reviews.", controls: "WORM encrypted storage, HMAC signature chains, SIEM streaming", color: "#A855F7", badgeBg: "#7E22CE" }
  ]
});

// 12. how-to-set-up-zero-trust-remote-access-isolated-multi-cloud-vpcs
blogDiagramConfigs.push({
  slug: 'how-to-set-up-zero-trust-remote-access-isolated-multi-cloud-vpcs',
  title: "Multi-Cloud Isolated VPC Zero Trust Mesh Overlay",
  subtitle: "Direct Peer-to-Peer Interconnect Across AWS, GCP, and Azure with Zero Public IPs",
  type: 'mesh_network',
  controlPlane: {
    name: "QuickZTNA Out-of-Band Multi-Cloud Coordination Plane",
    desc: "Distributes MagicDNS records, STUN endpoints, and ABAC policies out-of-band without touching data payloads"
  },
  nodes: [
    { zone: "AWS Private VPC", name: "AWS us-east-1 Connector", ip: "100.64.1.10 (ztna0)", detail1: "Production RDS Postgres & EKS", detail2: "0.0.0.0/0 INGRESS: DROP ALL" },
    { zone: "GCP Isolated VNet", name: "GCP europe-west1 Connector", ip: "100.64.2.20 (ztna0)", detail1: "GKE Analytics Cluster", detail2: "Zero Public IPv4 Addresses" },
    { zone: "Azure Private Cloud", name: "Azure westeurope Connector", ip: "100.64.3.30 (ztna0)", detail1: "Internal Financial ERP & DB", detail2: "Overlapping 10.0.0.0/16 Resolved" },
    { zone: "Remote Engineer", name: "Developer Laptop Client", ip: "100.64.0.5 (ztna0)", detail1: "Direct P2P UDP Hole Punching", detail2: "Reaches postgres.aws.zt.net via MagicDNS" }
  ]
});

// 13. hybrid-key-exchange-x25519-mlkem
blogDiagramConfigs.push({
  slug: 'hybrid-key-exchange-x25519-mlkem',
  title: "Hybrid Post-Quantum Key Exchange Protocol Lifeline",
  subtitle: "Dual Shared Secret Derivation: X25519 (ECDH) + ML-KEM-768 (FIPS 203)",
  type: 'sequence',
  participants: [
    { name: "Initiator (Alice)", role: "Client Workstation" },
    { name: "KEM Encapsulator", role: "Local Cryptographic Engine" },
    { name: "WireGuard Tunnel", role: "Data Plane Transport" },
    { name: "KEM Decapsulator", role: "Gateway Crypto Engine" },
    { name: "Responder (Bob)", role: "Internal Gateway" }
  ],
  steps: [
    { from: 0, to: 1, label: "1. Generate Ephemeral X25519 Share + ML-KEM Public Key", detail: "pk_x (32B) + pk_kem (1184B)", color: "#06B6D4" },
    { from: 1, to: 3, label: "2. Transmit Combined ClientHello Extension", detail: "Handshake payload ~1216 Bytes", color: "#06B6D4" },
    { from: 3, to: 4, label: "3. ML-KEM Encapsulation & ECDH Computation", detail: "Derives ss_x (32B) + ss_kem (32B)", color: "#10B981" },
    { from: 3, to: 1, label: "4. Return Ephemeral X25519 Share + KEM Ciphertext", detail: "ct_kem (1088B) + resp_x (32B)", color: "#10B981" },
    { from: 1, to: 0, label: "5. HKDF-SHA256 Combiner Function", detail: "K = HKDF(ss_x || ss_kem || Transcript)", color: "#F59E0B" },
    { from: 0, to: 2, label: "6. Inject 256-Bit Quantum-Safe Session Key", detail: "ChaCha20-Poly1305 Line-Rate Pipeline", color: "#10B981" }
  ]
});

// 14. identity-first-networking-scim
blogDiagramConfigs.push({
  slug: 'identity-first-networking-scim',
  title: "SCIM 2.0 Real-Time Deprovisioning & Key Eviction Sequence",
  subtitle: "Sub-Second Automatic Session Kill-Switch Triggered from Identity Provider",
  type: 'sequence',
  participants: [
    { name: "Enterprise IdP", role: "Okta / Entra ID / Google" },
    { name: "SCIM 2.0 Webhook", role: "RFC 7644 Listener" },
    { name: "QuickZTNA Controller", role: "Policy Decision Point" },
    { name: "Local ZTNA Daemon", role: "Endpoint Kernel Driver" },
    { name: "Private Target Workload", role: "Protected Database / SSH" }
  ],
  steps: [
    { from: 0, to: 1, label: "1. Employee Terminated or Role Changed", detail: "User deactivated in HR directory", color: "#EF4444" },
    { from: 1, to: 2, label: "2. POST /scim/v2/Users/{id} (active: false)", detail: "Signed HMAC Webhook < 50ms", color: "#EF4444" },
    { from: 2, to: 3, label: "3. Broadcast Ephemeral Key Revocation Signal", detail: "Sub-second gRPC control broadcast", color: "#F59E0B" },
    { from: 3, to: 4, label: "4. Immediate WireGuard Peer Teardown", detail: "Netlink RTM_DELLINK executed", color: "#EF4444", dashed: true },
    { from: 3, to: 4, label: "5. Flush Local Route & Packet Drop", detail: "Packets blackholed; zero lingering access", color: "#EF4444", dashed: true },
    { from: 2, to: 0, label: "6. Deprovisioning Confirmation & Audit Log", detail: "Cryptographic proof logged to SIEM", color: "#10B981" }
  ]
});

// 15. infrastructure-as-code-zero-trust
blogDiagramConfigs.push({
  slug: 'infrastructure-as-code-zero-trust',
  title: "GitOps Policy-as-Code Verification & Apply Pipeline",
  subtitle: "Automated PR Validation, Dry-Run Linting, and Zero-Downtime Terraform State Apply",
  type: 'decision_tree',
  stages: [
    {
      stageName: "STAGE 1: GITHUB PR",
      borderColor: "#38BDF8",
      headerColor: "#0284C7",
      gateTitle: "Terraform Pull Request",
      gateDesc: "Security engineer defines declarative ABAC rules in HCL.",
      rule1: "Peer tags & port definitions",
      rule2: "Reviewer peer approval required",
      passAction: "Trigger CI/CD Runner",
      failAction: "PR Blocked"
    },
    {
      stageName: "STAGE 2: DRY-RUN LINT",
      borderColor: "#F59E0B",
      headerColor: "#D97706",
      gateTitle: "Out-of-Band AST Solver",
      gateDesc: "Simulates reachability matrix against real-world traffic telemetry.",
      rule1: "Self-lockout rule detection",
      rule2: "Syntax & schema verification",
      passAction: "Pass Pre-Flight Check",
      failAction: "Lint Error Flagged"
    },
    {
      stageName: "STAGE 3: ATOMIC APPLY",
      borderColor: "#10B981",
      headerColor: "#059669",
      gateTitle: "Control Plane Push",
      gateDesc: "Pushes compiled binary policy directly to distributed control planes.",
      rule1: "Atomic commit with rollback",
      rule2: "Zero live data plane interruption",
      passAction: "Policy Live in <100ms",
      failAction: "Automated Git Revert"
    }
  ]
});

// 16. kubernetes-zero-trust
blogDiagramConfigs.push({
  slug: 'kubernetes-zero-trust',
  title: "Kubernetes Zero Trust Access & Defense-in-Depth Shield",
  subtitle: "Dark Kube-API Gateway, Ephemeral OIDC Credentials & Cilium eBPF Pod Sandboxing",
  type: 'threat_model',
  attacker: {
    name: "Compromised Pod & Lateral Scanner",
    desc1: "Malicious container image or CVE exploit",
    desc2: "Attempts scanning cluster internal subnet"
  },
  entryPoint: {
    step1: "Container escapes to host namespace",
    step2: "Scans for 10.96.0.1:443 Kube-API",
    step3: "Attempts token theft via serviceaccount"
  },
  securityGate: {
    name: "QuickZTNA Dark Kube-API + SPIFFE",
    check1: "API Server 100% Dark (No Public Port)",
    sub1: "Reachable strictly through WireGuard mesh",
    check2: "Cilium eBPF Microsegmentation",
    sub2: "Blocks all unauthorized east-west pod traffic"
  },
  protectedAsset: {
    name: "Production Cluster Enclave",
    item1: "Kube-API Server (Dark behind Mesh)",
    item2: "Production Secret Store (Vault / KMS)",
    item3: "Isolated Namespace Data Plane"
  },
  siemNode: {
    title: "Kubernetes Audit & Admission Telemetry",
    desc1: "Records every kubectl exec, namespace port-forward, and API query with user identity.",
    desc2: "Ephemeral tokens expire immediately upon CLI command completion; static certs eliminated."
  }
});

// 17. ml-kem-768-explained
blogDiagramConfigs.push({
  slug: 'ml-kem-768-explained',
  title: "ML-KEM-768 (FIPS 203) Cryptographic Wire Size Budget",
  subtitle: "Byte Size Comparison: Public Key, Ciphertext, and Secret vs Classical X25519",
  type: 'bar_chart',
  chartTitle: "Cryptographic Material Size on Wire (Bytes)",
  chartUnit: "Bytes",
  metrics: [
    { label: "ML-KEM Secret Key", sub: "Private Decapsulation Key (sk)", value: 2400, displayValue: "2,400", color: "#8B5CF6" },
    { label: "ML-KEM Public Key", sub: "Client Public Encapsulation Key (pk)", value: 1184, displayValue: "1,184", color: "#0284C7" },
    { label: "ML-KEM Ciphertext", sub: "Encapsulated Ciphertext Payload (ct)", value: 1088, displayValue: "1,088", color: "#F59E0B" },
    { label: "ML-KEM Shared Secret", sub: "Derived Symmetric Entropy (K)", value: 32, displayValue: "32", color: "#10B981", speedup: "AES-192 Strength" },
    { label: "Classical X25519 Key", sub: "Standard Curve25519 Public Key", value: 32, displayValue: "32", color: "#64748B" }
  ]
});

// 18. netbird-vs-tailscale-vs-quickztna
blogDiagramConfigs.push({
  slug: 'netbird-vs-tailscale-vs-quickztna',
  title: "Tailscale vs. NetBird vs. QuickZTNA Architecture",
  subtitle: "3-Way Technical Comparison: Proprietary vs Open Source vs Enterprise Governance",
  type: 'comparison_split',
  legacyTitle: "Developer Mesh (Tailscale / NetBird)",
  legacyItems: [
    { title: "Point-in-Time Access Control", desc1: "Access granted permanently until manual ACL update.", desc2: "Lacks automated Just-in-Time approval workflows." },
    { title: "Basic Device Posture", desc1: "Simple OS version and client verification.", desc2: "Limited real-time integration with corporate EDRs." },
    { title: "No Built-In DNS Threat Filter", desc1: "Requires third-party NextDNS or Pi-hole integration.", desc2: "No out-of-the-box NRD / C2 domain blocking." },
    { title: "Separate Tooling Billing", desc1: "VPN, ZTNA gateway, and compliance purchased separately.", desc2: "Fragmented admin dashboards for security teams." }
  ],
  modernTitle: "QuickZTNA (Workforce Security OS)",
  modernItems: [
    { title: "Continuous ABAC + JIT Access", desc1: "Dynamic privilege elevation with Slack/Teams approval.", desc2: "Ephemeral tokens with automated TTL revocation." },
    { title: "Deep Real-Time Posture Engine", desc1: "Continuous inspection of BitLocker, FileVault, and CrowdStrike.", desc2: "Sub-second quarantine on any posture policy violation." },
    { title: "Built-In MagicDNS Threat Shield", desc1: "Automated 6-hour threat feed refresh with NRD blocking.", desc2: "Intercepts DNS tunneling and exfiltration covert channels." },
    { title: "Unified Enterprise Governance", desc1: "All-in-one mesh, ZTNA, DNS shield, and SOC 2 evidence.", desc2: "Generous free tier up to 5 users with full enterprise features." }
  ]
});

// 19. nis2-remote-access-requirements
blogDiagramConfigs.push({
  slug: 'nis2-remote-access-requirements',
  title: "EU NIS2 Directive (Article 21) Security Architecture",
  subtitle: "Technical Controls for Essential & Important Entities: Supply Chain & Cryptography",
  type: 'defense_in_depth',
  layers: [
    { ringTag: "PILLAR 1: RISK", ringSub: "Policy & Posture", title: "Endpoint Cyber Hygiene & Device Posture", desc: "Enforces continuous verification of operating system patch level, disk encryption, and firewall status.", controls: "Continuous posture evaluation, MDM profile validation, automatic quarantine", color: "#38BDF8", badgeBg: "#0284C7" },
    { ringTag: "PILLAR 2: SUPPLY", ringSub: "Third-Party Risk", title: "Contractor & Vendor Microsegmentation", desc: "Quarantines third-party suppliers to single application ports; strictly blocks lateral LAN reachability.", controls: "Just-In-Time access elevation, time-bounded grants (TTL), zero standing privilege", color: "#10B981", badgeBg: "#059669" },
    { ringTag: "PILLAR 3: CRYPTO", ringSub: "Data Transmission", title: "End-to-End Quantum-Safe Encryption", desc: "Mandates state-of-the-art cryptography for all remote connections across public networks.", controls: "WireGuard ChaCha20-Poly1305, hybrid post-quantum key exchange readiness", color: "#F59E0B", badgeBg: "#D97706" },
    { ringTag: "PILLAR 4: INCIDENT", ringSub: "Notification", title: "Early Warning Telemetry & Incident Audit", desc: "Generates structured cryptographic event telemetry to satisfy 24-hour early warning obligations.", controls: "Tamper-evident WORM logging, per-decision audit export to CSIRTs", color: "#A855F7", badgeBg: "#7E22CE" }
  ]
});

// 20. open-source-vs-managed-ztna
blogDiagramConfigs.push({
  slug: 'open-source-vs-managed-ztna',
  title: "Open-Source vs. Managed ZTNA Decision Blueprint",
  subtitle: "Operational Overhead, Total Cost of Ownership (TCO), and Compliance Trade-offs",
  type: 'comparison_split',
  legacyTitle: "Open-Source ZTNA (Self-Hosted)",
  legacyItems: [
    { title: "High SRE Engineering Tax", desc1: "Requires dedicated SRE hours for DB backups, VM patches.", desc2: "Custom deployment of STUN/TURN/DERP relays across regions." },
    { title: "DIY Compliance Burden", desc1: "Must defend self-hosted architecture during SOC 2 / HIPAA audits.", desc2: "No vendor-provided attestation reports or signed BAAs." },
    { title: "Manual High-Availability", desc1: "Custom clustering of PostgreSQL & control planes required.", desc2: "Single-region setups suffer downtime during network cuts." },
    { title: "Cost Inversion at Small Scale", desc1: "VM + Relay hosting ($100-$300/mo) exceeds SaaS cost for small teams.", desc2: "Economical only when engineering hours are discounted." }
  ],
  modernTitle: "Managed SaaS ZTNA (QuickZTNA)",
  modernItems: [
    { title: "Zero Operational Overhead", desc1: "Fully managed control plane with automatic global scaling.", desc2: "One-line installation via curl script in under 2 minutes." },
    { title: "Turnkey Compliance Attestations", desc1: "SOC 2 Type II, ISO 27001, and HIPAA compliance bundled.", desc2: "Automated cryptographic evidence export ready for auditors." },
    { title: "Global Relay Infrastructure", desc1: "Multi-region relays ensure instant fallback during UDP blocks.", desc2: "Active-active high-availability with zero maintenance windows." },
    { title: "Free Tier for Small Teams", desc1: "Free forever for up to 5 users and 100 devices.", desc2: "Enterprise governance available without infrastructure costs." }
  ]
});

// 21. out-of-band-policy-engines
blogDiagramConfigs.push({
  slug: 'out-of-band-policy-engines',
  title: "Out-of-Band Policy Simulation & Dry-Run Engine",
  subtitle: "Offline AST Parsing, Reachability Graph Solving, and Zero-Downtime Rule Compilation",
  type: 'decision_tree',
  stages: [
    {
      stageName: "PHASE 1: AST PARSER",
      borderColor: "#38BDF8",
      headerColor: "#0284C7",
      gateTitle: "Abstract Syntax Tree",
      gateDesc: "Parses human-authored Rego / JSON policies into typed AST expressions.",
      rule1: "Syntax & type checking",
      rule2: "Schema version validation",
      passAction: "AST Generated in 12ms",
      failAction: "Syntax Error Flagged"
    },
    {
      stageName: "PHASE 2: REACHABILITY",
      borderColor: "#F59E0B",
      headerColor: "#D97706",
      gateTitle: "Graph Matrix Solver",
      gateDesc: "Evaluates policy against live topology graph to detect self-lockouts.",
      rule1: "Blocks rules severing admin SSH",
      rule2: "Detects orphan mesh nodes",
      passAction: "Zero Lockout Confirmed",
      failAction: "Lockout Warning Raised"
    },
    {
      stageName: "PHASE 3: ATOMIC PUSH",
      borderColor: "#10B981",
      headerColor: "#059669",
      gateTitle: "Compiled Binary Push",
      gateDesc: "Deploys compiled BPF / Netlink rules out-of-band to edge nodes.",
      rule1: "Sub-150ms propagation time",
      rule2: "Zero live connection drops",
      passAction: "Live Enforcement Active",
      failAction: "Rollback to Previous AST"
    }
  ]
});

// 22. outbound-only-zero-trust
blogDiagramConfigs.push({
  slug: 'outbound-only-zero-trust',
  title: "Inbound Perimeter Exposure vs. Outbound-Only Zero Trust",
  subtitle: "Architectural Contrast: Open Inbound Ports vs. 100% Dark State-Table Hole Punching",
  type: 'comparison_split',
  legacyTitle: "Inbound Perimeter (Legacy Model)",
  legacyItems: [
    { title: "Public Inbound Ports Open", desc1: "Ports 22, 443, 3389, and 5432 exposed to 0.0.0.0/0.", desc2: "Continuously scanned by Shodan, Censys, and automated botnets." },
    { title: "Mandatory Public IPv4 Allocation", desc1: "Every internet-reachable VM requires public cloud IP ($$).", desc2: "Direct target for DDoS, SYN floods, and brute-force attacks." },
    { title: "Flat Subnet Lateral Movement", desc1: "Once perimeter breached, attacker pivots across /24 subnet.", desc2: "Zero internal barriers between web server and backend database." },
    { title: "Single Point of Ingress Failure", desc1: "Centralized VPN gateway concentrator bottlenecks bandwidth.", desc2: "Downtime halts entire remote engineering organization." }
  ],
  modernTitle: "Outbound-Only Zero Trust (QuickZTNA)",
  modernItems: [
    { title: "100% Dark Infrastructure", desc1: "0.0.0.0/0 INGRESS: DROP ALL on security groups.", desc2: "Mathematically invisible to external SYN port scans." },
    { title: "Zero Public IPs Required", desc1: "Operates purely within private VPC subnets with zero public IPs.", desc2: "Eliminates hourly IPv4 cloud tax and perimeter exposure." },
    { title: "Direct P2P UDP Hole Punching", desc1: "Workloads initiate outbound-only stateful tunnels to mesh peers.", desc2: "Traffic routes peer-to-peer at line-rate kernel WireGuard speeds." },
    { title: "Process-Level Microsegmentation", desc1: "Granular ABAC enforces least-privilege access per socket.", desc2: "Compromised machine has zero reachability to adjacent servers." }
  ]
});

// 23. post-quantum-migration-timeline
blogDiagramConfigs.push({
  slug: 'post-quantum-migration-timeline',
  title: "Global Post-Quantum Migration Regulatory Horizon",
  subtitle: "Cross-Jurisdictional Timeline: US NIST/NSA, EU NIS2, and Financial Standard Mandates",
  type: 'timeline',
  phases: [
    {
      phaseTag: "PHASE 1: STANDARDS",
      timeWindow: "2024 – 2025",
      title: "Standardization & CBOM",
      desc: "NIST finalizes FIPS 203, 204, 205. Organizations conduct cryptographic inventory.",
      req1: "NIST FIPS 203 (ML-KEM) published",
      req2: "Cryptographic Bill of Materials (CBOM)",
      req3: "Identify Harvest Now Decrypt Later risks",
      statusBg: "#1E3A8A",
      statusBorder: "#3B82F6",
      statusTitle: "Standards Active",
      statusDesc: "Global standards locked into law",
      deliverable: "Enterprise CBOM Audit"
    },
    {
      phaseTag: "PHASE 2: HYBRID DEPLOY",
      timeWindow: "2026 – 2028",
      title: "Hybrid VPN & Edge Migration",
      desc: "Deployment of dual-key classical + post-quantum algorithms on external ingress.",
      req1: "Deploy hybrid X25519 + ML-KEM-768",
      req2: "CNSA 2.0 software signing mandate",
      req3: "EU BSI/ANSSI critical sector rollout",
      statusBg: "#064E3B",
      statusBorder: "#059669",
      statusTitle: "Production Mandate",
      statusDesc: "External networks hardened",
      deliverable: "Hybrid WireGuard / TLS Validated"
    },
    {
      phaseTag: "PHASE 3: SUNSET BEGINS",
      timeWindow: "2030 – 2033",
      title: "Classical Deprecation Gate",
      desc: "Mandatory deprecation of classical-only public key algorithms across critical infrastructure.",
      req1: "RSA-2048 & ECC prohibited by NSA",
      req2: "Web, cloud, and OS must use PQC",
      req3: "Financial banking standards cutover",
      statusBg: "#D97706",
      statusBorder: "#F59E0B",
      statusTitle: "Mandatory Sunset",
      statusDesc: "Classical crypto illegal in defense",
      deliverable: "Elimination of Legacy Ciphers"
    },
    {
      phaseTag: "PHASE 4: FULL PQC ERA",
      timeWindow: "2035+",
      title: "100% Quantum Resistance",
      desc: "All National Security Systems and global critical infrastructure fully quantum-safe.",
      req1: "Total elimination of classical public keys",
      req2: "Legacy equipment hardware refresh complete",
      req3: "Pure PQC formal verification enforced",
      statusBg: "#4C1D95",
      statusBorder: "#8B5CF6",
      statusTitle: "Complete Quantum Safety",
      statusDesc: "Global critical infrastructure secure",
      deliverable: "Zero Legacy Cryptography Attested"
    }
  ]
});

// 24. post-quantum-vpn-vendor-questions
blogDiagramConfigs.push({
  slug: 'post-quantum-vpn-vendor-questions',
  title: "Post-Quantum VPN Vendor Procurement Decision Tree",
  subtitle: "6-Question RFP Vetting Framework: Separating Shipped Crypto from Marketing Claims",
  type: 'decision_tree',
  stages: [
    {
      stageName: "Q1: ALGORITHM",
      borderColor: "#38BDF8",
      headerColor: "#0284C7",
      gateTitle: "FIPS 203 Compliance",
      gateDesc: "Does the vendor explicitly name standardized ML-KEM-768 / 1024?",
      rule1: "Names FIPS 203 parameters",
      rule2: "Rejects vague 'quantum-safe' claims",
      passAction: "Proceed to Hybrid Check",
      failAction: "🚩 Red Flag: Proprietary Crypto"
    },
    {
      stageName: "Q2: HYBRID COMBINER",
      borderColor: "#10B981",
      headerColor: "#059669",
      gateTitle: "Classical Fallback",
      gateDesc: "Does protocol combine ECDH (X25519) with lattice mathematics?",
      rule1: "Dual-key hybrid design",
      rule2: "Preserves classical forward secrecy",
      passAction: "Proceed to Rekey Cadence",
      failAction: "🚩 Red Flag: Unverified Pure PQC"
    },
    {
      stageName: "Q3: DEFAULT-ON",
      borderColor: "#F59E0B",
      headerColor: "#D97706",
      gateTitle: "Production Deployment",
      gateDesc: "Is PQC enabled by default in GA client builds without hidden beta flags?",
      rule1: "Enabled in production client",
      rule2: "Active cipher visible in CLI logs",
      passAction: "✅ Approved for Procurement",
      failAction: "🚩 Red Flag: Lab Flag Only"
    }
  ]
});

// 25. remote-workforce-security-os
blogDiagramConfigs.push({
  slug: 'remote-workforce-security-os',
  title: "Remote Workforce Security OS 4-Tier Architecture",
  subtitle: "Lightweight Endpoint Daemon, Decoupled Control Plane & Direct WireGuard Mesh",
  type: 'defense_in_depth',
  layers: [
    { ringTag: "TIER 1: KERNEL", ringSub: "Data Plane", title: "Native Linux/macOS/Windows WireGuard Driver", desc: "Operates directly in kernel space (TUN/Wintun) with zero context-switching penalty.", controls: "Near line-rate throughput (940 Mbps on 1G link), <2ms added latency, ChaCha20-Poly1305", color: "#38BDF8", badgeBg: "#0284C7" },
    { ringTag: "TIER 2: ENDPOINT", ringSub: "Local Protection", title: "Endpoint Posture & MagicDNS Shield", desc: "Loopback DNS proxy intercepting non-VPN split tunnels, DoH circumvention, and malware domains.", controls: "Sub-50ms DNS threat blocking, process attribution (PID + SHA-256), continuous EDR sync", color: "#10B981", badgeBg: "#059669" },
    { ringTag: "TIER 3: CONTROL", ringSub: "Governance", title: "Decoupled Out-of-Band Policy Engine", desc: "Distributes compiled binary ABAC rules and JIT elevation grants without routing user payloads.", controls: "SCIM 2.0 sync, multi-IdP federation, automated access-review campaigns", color: "#F59E0B", badgeBg: "#D97706" },
    { ringTag: "TIER 4: AUDIT", ringSub: "Compliance", title: "Signed Cryptographic Evidence Fabric", desc: "Generates immutable audit logs with per-decision attribution exportable to any SIEM.", controls: "SOC 2 Type II evidence, HIPAA BAA compliance, ISO 27001 verifiable event stream", color: "#A855F7", badgeBg: "#7E22CE" }
  ]
});

// 26. sase-vs-ztna-vs-sse
blogDiagramConfigs.push({
  slug: 'sase-vs-ztna-vs-sse',
  title: "SASE vs. SSE vs. ZTNA Architectural Scope Matrix",
  subtitle: "Concentric Industry Frameworks: WAN Edge Convergence, Cloud Security, and Private Access",
  type: 'venn'
});

// 27. securing-developer-workstations-malicious-dependencies-zero-trust
blogDiagramConfigs.push({
  slug: 'securing-developer-workstations-malicious-dependencies-zero-trust',
  title: "Malicious Dependency Interception & Workstation Defense Sequence",
  subtitle: "Software Supply Chain Kill Chain Interception: Egress Proxy, ZSP Dotfiles & Instant Quarantine",
  type: 'sequence',
  participants: [
    { name: "Developer CLI", role: "npm / pip / cargo" },
    { name: "Local ZTNA Daemon", role: "eBPF Socket Monitor" },
    { name: "Air-Gapped Proxy", role: "Verified Registry Mesh" },
    { name: "QuickZTNA Controller", role: "Out-of-Band ABAC" },
    { name: "Public C2 / Internet", role: "Adversary Infrastructure" }
  ],
  steps: [
    { from: 0, to: 1, label: "1. Exec preinstall malicious payload", detail: "npm install launches child process", color: "#F59E0B" },
    { from: 1, to: 4, label: "2. Attempt outbound exfiltration to C2", detail: "BLOCKED: Direct public egress dropped", color: "#EF4444", dashed: true },
    { from: 0, to: 1, label: "3. Attempt reading ~/.aws/credentials", detail: "BLOCKED: Zero-Standing Privileges (Empty dotfiles)", color: "#EF4444", dashed: true },
    { from: 1, to: 3, label: "4. Host posture violation signal emitted", detail: "Binary hash anomaly / unauthorized socket", color: "#06B6D4" },
    { from: 3, to: 1, label: "5. Sub-millisecond key revocation command", detail: "Netlink peer eviction; workstation isolated", color: "#10B981" },
    { from: 0, to: 2, label: "6. Legitimate package resolved via mesh proxy", detail: "Cryptographic hash verified before install", color: "#10B981" }
  ]
});

// 28. securing-third-party-vendor-access-enforce-ztna-external-contractors
blogDiagramConfigs.push({
  slug: 'securing-third-party-vendor-access-enforce-ztna-external-contractors',
  title: "Third-Party Vendor Access: Granular Port-Scoped Micro-Tunnels",
  subtitle: "Contractor BYOD Quarantine, Bastion-Free Architecture & Automatic Session Revocation",
  type: 'threat_model',
  attacker: {
    name: "Compromised Contractor Laptop",
    desc1: "Unmanaged BYOD with unknown malware",
    desc2: "Phished credentials / infostealer trojan"
  },
  entryPoint: {
    step1: "Contractor authenticates via Partner IdP",
    step2: "Malware attempts scanning local /24 subnet",
    step3: "Attempts pivoting to internal servers"
  },
  securityGate: {
    name: "QuickZTNA JIT Resource Broker",
    check1: "Ephemeral Just-in-Time Grant (2h TTL)",
    sub1: "Access scoped strictly to single TCP port (e.g. 5432)",
    check2: "Zero Subnet Reachability (Default-Deny)",
    sub2: "Blocks all peer-to-peer and lateral LAN traffic"
  },
  protectedAsset: {
    name: "Target Staging Workload",
    item1: "Contractor-assigned VM only",
    item2: "Production environment completely invisible",
    item3: "Zero open inbound firewall ports"
  },
  siemNode: {
    title: "Immutable Vendor Session Audit & Recording",
    desc1: "Records every TCP connection, command, and file transfer attributed to specific contractor identity.",
    desc2: "Session terminates automatically when support ticket or JIT TTL expires."
  }
});

// 29. serverless-zero-trust-aws-lambda-cloud-functions
blogDiagramConfigs.push({
  slug: 'serverless-zero-trust-aws-lambda-cloud-functions',
  title: "Serverless Zero Trust Mesh: Ephemeral Lambda to Dark Aurora",
  subtitle: "Eliminating VPC Attachment Cold Starts and NAT Gateway Egress Surcharges",
  type: 'mesh_network',
  controlPlane: {
    name: "QuickZTNA In-Memory Serverless Policy Broker",
    desc: "Provides sub-50ms ephemeral identity attestation for serverless compute runtimes without VPC routing table locks"
  },
  nodes: [
    { zone: "AWS Serverless (us-east-1)", name: "AWS Lambda Runtime", ip: "100.64.50.1 (ztna0)", detail1: "Ephemeral Micro-WireGuard Connector", detail2: "Sub-50ms Cold Start / Zero VPC ENI" },
    { zone: "Private Database VPC", name: "Amazon RDS Aurora Postgres", ip: "100.64.50.10 (ztna0)", detail1: "100% Dark in Private Subnet", detail2: "0.0.0.0/0 INGRESS: DROP ALL" },
    { zone: "GCP Cloud Functions", name: "GCP Cloud Run Service", ip: "100.64.50.20 (ztna0)", detail1: "Cross-Cloud Microservice Mesh", detail2: "Zero Public IP / Zero NAT Gateway" },
    { zone: "DevOps Monitoring", name: "Datadog / SIEM Collector", ip: "100.64.50.30 (ztna0)", detail1: "Cryptographic Event Auditing", detail2: "Per-Invocation Invocation Telemetry" }
  ]
});

// 30. soc-2-remote-access-controls
blogDiagramConfigs.push({
  slug: 'soc-2-remote-access-controls',
  title: "SOC 2 Type II Remote Access Trust Services Criteria Fabric",
  subtitle: "Continuous Compliance Mapping: CC6.1, CC6.6, and CC7.2 Evidence Generation",
  type: 'defense_in_depth',
  layers: [
    { ringTag: "CRITERION 1", ringSub: "CC6.1: Logical Access", title: "Identity-Bound Least Privilege (ABAC)", desc: "Enforces role-based and attribute-based access control; standing superuser accounts replaced by JIT.", controls: "SSO/SCIM integration, Just-In-Time role elevation with dual approvals", color: "#38BDF8", badgeBg: "#0284C7" },
    { ringTag: "CRITERION 2", ringSub: "CC6.6: Boundary", title: "Perimeter Elimination & Dark Infrastructure", desc: "Eliminates open listening ports on internet gateways; restricts access to explicit microtunnels.", controls: "Single-Packet Authorization, zero inbound open firewall ports, peer isolation", color: "#10B981", badgeBg: "#059669" },
    { ringTag: "CRITERION 3", ringSub: "CC6.7: Encryption", title: "End-to-End Cryptographic Data Protection", desc: "Encrypts all remote access data in transit using state-of-the-art cryptographic primitives.", controls: "WireGuard ChaCha20-Poly1305, ephemeral key rotation with sub-hourly shredding", color: "#F59E0B", badgeBg: "#D97706" },
    { ringTag: "CRITERION 4", ringSub: "CC7.2: Monitoring", title: "Automated Auditor Evidence Pipeline", desc: "Produces tamper-evident, structured logs proving that policies were continuously enforced.", controls: "One-click auditor CSV/JSON export, cryptographic hash chains, SIEM sync", color: "#A855F7", badgeBg: "#7E22CE" }
  ]
});

// 31. tailscale-alternatives-2026
blogDiagramConfigs.push({
  slug: 'tailscale-alternatives-2026',
  title: "Tailscale Alternatives: Architectural Matrix (2026)",
  subtitle: "Peer-to-Peer WireGuard Mesh vs. Edge Identity Proxies vs. Application SDKs",
  type: 'comparison_split',
  legacyTitle: "Legacy VPN / Edge Proxy (P81 / Cloudflare)",
  legacyItems: [
    { title: "Centralized Traffic Hairpinning", desc1: "User traffic routes through third-party cloud data centers.", desc2: "Increases packet latency by 40-120ms; expensive egress bills." },
    { title: "Lacks Native Mesh P2P", desc1: "Cannot establish direct LAN/WAN connections between machines.", desc2: "Every packet must pass through central cloud proxies." },
    { title: "Complex Connector Wrappers", desc1: "Non-HTTP protocols require specialized CLI wrappers.", desc2: "High friction for native CLI tools like SSH, psql, and Docker." },
    { title: "Rigid Pricing Tiers", desc1: "Expensive per-seat subscriptions with strict enterprise paywalls.", desc2: "Feature gates block small teams from basic audit features." }
  ],
  modernTitle: "Modern WireGuard Mesh (QuickZTNA / NetBird)",
  modernItems: [
    { title: "Direct P2P Encrypted Mesh", desc1: "Point-to-point WireGuard tunnels with sub-2ms direct routing.", desc2: "Zero traffic hairpinning; native line-rate throughput." },
    { title: "Universal L4/L7 Protocol Support", desc1: "Transparent support for databases, SSH, Kubernetes, and UDP.", desc2: "Operates as a standard network interface (ztna0)." },
    { title: "Integrated Access Governance", desc1: "Full ABAC, continuous device posture, and JIT approvals.", desc2: "Built-in MagicDNS threat blocking and compliance evidence." },
    { title: "Generous Developer Free Tier", desc1: "Free forever for up to 5 users and 100 devices on QuickZTNA.", desc2: "Full enterprise security capabilities included out-of-the-box." }
  ]
});

// 32. top-10-ai-security-tools-2026
blogDiagramConfigs.push({
  slug: 'top-10-ai-security-tools-2026',
  title: "Enterprise AI Security & Prompt Injection Defense Pipeline",
  subtitle: "LLM App Firewalls, Vector Embedding Inspection & Prompt Leakage Prevention",
  type: 'threat_model',
  attacker: {
    name: "Malicious Prompt & Data Exfil",
    desc1: "Prompt injection, jailbreak tokens",
    desc2: "Unauthorized API key / PII leaks"
  },
  entryPoint: {
    step1: "Developer CLI sends prompt to LLM",
    step2: "Prompt contains proprietary source code",
    step3: "Indirect prompt injection via external data"
  },
  securityGate: {
    name: "AI Prompt Firewall & DLP Broker",
    check1: "Semantic Embedding Anomaly Check",
    sub1: "Detects jailbreak patterns & adversarial tokens",
    check2: "Real-Time Regex & PII Redaction",
    sub2: "Masks AWS keys, passwords, and customer data"
  },
  protectedAsset: {
    name: "Approved Enterprise AI Gateway",
    item1: "Anthropic Claude / OpenAI Private API",
    item2: "Zero-Data Retention Enclave",
    item3: "Audited Prompt / Token Telemetry"
  },
  siemNode: {
    title: "AI Security Governance & Audit Lake",
    desc1: "Logs token counts, redacted entities, and attempted injection vectors in real time.",
    desc2: "Alerts security team within milliseconds if anomalous prompt exfiltration is detected."
  }
});

// 33. top-10-database-access-control
blogDiagramConfigs.push({
  slug: 'top-10-database-access-control',
  title: "Database Access: Legacy Direct DBA vs. Zero Trust Broker",
  subtitle: "Eliminating Standing Root Credentials with In-Memory Ephemeral Tokens & Dynamic Masking",
  type: 'comparison_split',
  legacyTitle: "Legacy DBA Access (Direct TCP Port)",
  legacyItems: [
    { title: "Exposed Listening Ports", desc1: "Port 5432 / 3306 open to corporate VPN or internal LAN.", desc2: "Vulnerable to internal port scans, brute-force, and lateral pivots." },
    { title: "Permanent Static Root Passwords", desc1: "Shared database admin credentials stored in local dotfiles.", desc2: "Password changes require coordination and risk breaking services." },
    { title: "Standing 24/7 Superuser Privileges", desc1: "DBA accounts hold unconstrained admin rights indefinitely.", desc2: "High blast radius if DBA laptop or credentials are compromised." },
    { title: "Unmasked Cleartext Sensitive Data", desc1: "Developers can view credit cards, PII, and customer secrets.", desc2: "Lacks granular column-level or row-level dynamic masking." }
  ],
  modernTitle: "Zero Trust Database Broker (QuickZTNA)",
  modernItems: [
    { title: "100% Dark Private Subnet", desc1: "Database has zero open listening ports to the public internet.", desc2: "Reachable strictly through cryptographic WireGuard microtunnels." },
    { title: "Dynamic In-Memory Ephemeral Credentials", desc1: "Short-lived database tokens issued on-demand via OIDC / SSO.", desc2: "Tokens expire automatically after session TTL; dotfiles stay empty." },
    { title: "Just-In-Time (JIT) Dual Approval", desc1: "Elevation granted only upon ticket verification (Slack/PagerDuty).", desc2: "Standing privileges eliminated; zero persistent admin accounts." },
    { title: "Dynamic Column Masking & Full Audit", desc1: "Sensitive PII masked inline before transmission to developer client.", desc2: "Every SQL query, DML change, and transaction immutably logged." }
  ]
});

// 34. top-10-dlp-solutions-remote-teams
blogDiagramConfigs.push({
  slug: 'top-10-dlp-solutions-remote-teams',
  title: "Remote Team DLP: Endpoint Interception & Data Redaction",
  subtitle: "Clipboard, File Drag, Printing, and Egress Interception for Distributed Workforces",
  type: 'threat_model',
  attacker: {
    name: "Insider Threat & Accidental Leak",
    desc1: "Employee pasting secrets to personal cloud",
    desc2: "Malware exfiltrating local source code"
  },
  entryPoint: {
    step1: "Copies customer database extract to clipboard",
    step2: "Attempts upload to personal Google Drive",
    step3: "Attempts screen capture or printing"
  },
  securityGate: {
    name: "QuickZTNA Endpoint DLP Agent",
    check1: "Kernel Egress & Socket Interception",
    sub1: "Detects unauthorized cloud uploads and file transfer",
    check2: "Regex & Exact Data Matching (EDM)",
    sub2: "Inspects text buffers for credit cards and API keys"
  },
  protectedAsset: {
    name: "Enterprise Data Enclave",
    item1: "Customer PII & Financial Records",
    item2: "Proprietary Source Code Repositories",
    item3: "Regulated Healthcare / Legal Data"
  },
  siemNode: {
    title: "Real-Time DLP Incident Alerting & Quarantine",
    desc1: "Blocks unauthorized clipboard paste and uploads instantly; displays user remediation coaching.",
    desc2: "Sends high-priority alert to SOC with cryptographic evidence and redacted payload snapshot."
  }
});

// 35. top-10-jit-access-frameworks
blogDiagramConfigs.push({
  slug: 'top-10-jit-access-frameworks',
  title: "Just-In-Time (JIT) Access Elevation Lifecycle Sequence",
  subtitle: "ChatOps Request, Peer Dual-Approval, Ephemeral Role Grant & Automatic TTL Eviction",
  type: 'sequence',
  participants: [
    { name: "Engineer", role: "Requesting User" },
    { name: "ChatOps / Bot", role: "Slack / Teams Integration" },
    { name: "On-Call Approver", role: "Security / Lead Engineer" },
    { name: "JIT Access Broker", role: "QuickZTNA Policy Decision Point" },
    { name: "Target Production DB", role: "Zero-Standing Privilege Resource" }
  ],
  steps: [
    { from: 0, to: 1, label: "1. /access request prod-db --reason 'Incident 402' --ttl 1h", detail: "Request initiated via ChatOps", color: "#06B6D4" },
    { from: 1, to: 2, label: "2. Notification dispatched with context & pager ticket", detail: "Dual approval policy enforced", color: "#F59E0B" },
    { from: 2, to: 3, label: "3. Approver clicks [Approve Elevation]", detail: "Authenticated via hardware FIDO2 key", color: "#10B981" },
    { from: 3, to: 0, label: "4. Issue Short-Lived Ephemeral WireGuard & DB Token", detail: "Valid strictly for 60 minutes", color: "#10B981" },
    { from: 0, to: 4, label: "5. Direct Peer-to-Peer Query Session Established", detail: "Full SQL query audit active", color: "#06B6D4" },
    { from: 3, to: 4, label: "6. TTL Expires (60m) -> Automatic Cryptographic Teardown", detail: "Session closed; standing privileges: 0", color: "#EF4444" }
  ]
});

// 36. top-10-kubernetes-access-control
blogDiagramConfigs.push({
  slug: 'top-10-kubernetes-access-control',
  title: "Kubernetes Cluster Hardening & Defense-in-Depth Shield",
  subtitle: "OIDC Authentication, Admission Controllers, and eBPF Network Policies (2026)",
  type: 'defense_in_depth',
  layers: [
    { ringTag: "LAYER 1: INGRESS", ringSub: "Dark Gateway", title: "Cloaked Kube-API Server (Zero Public Port)", desc: "Port 6443 hidden behind outbound-only WireGuard mesh; external port scanners receive zero response.", controls: "Single-Packet Authorization, no public API server IP, zero Shodan exposure", color: "#38BDF8", badgeBg: "#0284C7" },
    { ringTag: "LAYER 2: IDENTITY", ringSub: "Authentication", title: "Ephemeral OIDC Tokens & JIT Elevation", desc: "Static cluster-admin kubeconfig files eliminated; developers authenticate via corporate IdP SSO.", controls: "Short-lived tokens, namespace-scoped RBAC, interactive exec dual-approval", color: "#10B981", badgeBg: "#059669" },
    { ringTag: "LAYER 3: POLICY", ringSub: "Admission Control", title: "Kyverno / OPA Gatekeeper Policy Engine", desc: "Blocks privileged containers, root execution, and unverified registry images before pod creation.", controls: "Pre-flight CI/CD linting, immutable container signatures, runtime verification", color: "#F59E0B", badgeBg: "#D97706" },
    { ringTag: "LAYER 4: NETWORK", ringSub: "Microsegmentation", title: "Cilium eBPF East-West Pod Isolation", desc: "Replaces flat pod network with cryptographic mTLS and strict L3-L7 NetworkPolicies per service.", controls: "Default-deny pod communication, SPIFFE cryptographic SVIDs, DNS policy filtering", color: "#A855F7", badgeBg: "#7E22CE" }
  ]
});

// 37. top-10-msp-zero-trust-strategies
blogDiagramConfigs.push({
  slug: 'top-10-msp-zero-trust-strategies',
  title: "Multi-Tenant MSP Zero Trust Isolation Mesh",
  subtitle: "Technician JIT Access, Cryptographic Tenant Boundaries & Zero Cross-Client Lateral Pivots",
  type: 'mesh_network',
  controlPlane: {
    name: "MSP Multi-Tenant Zero Trust Orchestrator",
    desc: "Maintains strict cryptographic tenant isolation, PSA/RMM ticket bindings, and per-client audit silos"
  },
  nodes: [
    { zone: "MSP Operations Hub", name: "Technician Workstation", ip: "100.64.100.1 (ztna0)", detail1: "JIT Elevation tied to PSA Ticket", detail2: "PAW Verified + FIDO2 Key" },
    { zone: "Client A (Healthcare)", name: "Clinic Network Connector", ip: "100.64.101.1 (ztna0)", detail1: "Isolated HIPAA Tenant Enclave", detail2: "Zero Lateral Route to Client B" },
    { zone: "Client B (Financial)", name: "FinTech Private VPC", ip: "100.64.102.1 (ztna0)", detail1: "Encrypted WireGuard Gateway", detail2: "Client-Owned Cryptographic Keys" },
    { zone: "SIEM & Evidence Lake", name: "Client Audit Export", ip: "100.64.100.50 (ztna0)", detail1: "Per-Technician Attribution", detail2: "Immutable Splunk / Sentinel Feed" }
  ]
});

// 38. top-10-remote-desktop-secure-access
blogDiagramConfigs.push({
  slug: 'top-10-remote-desktop-secure-access',
  title: "Remote Desktop: Exposed RDP vs. Web-Brokered Zero Trust",
  subtitle: "Eliminating TCP 3389 Shodan Exposure with In-Browser HTML5 WireGuard Tunnels",
  type: 'comparison_split',
  legacyTitle: "Direct Internet RDP / Legacy VPN",
  legacyItems: [
    { title: "Public Port 3389 Open to World", desc1: "Exposed RDP port indexed by Shodan/Censys within minutes.", desc2: "Target for continuous automated brute-force attacks and BlueKeep." },
    { title: "Single Static Password Barrier", desc1: "Often configured without MFA on local Active Directory accounts.", desc2: "Credential stuffing trivially compromises internal host." },
    { title: "Broad Layer 3 Network Access", desc1: "Connecting via VPN gives infected home laptop full subnet access.", desc2: "Malware spreads laterally to domain controllers and file servers." },
    { title: "Heavy Client Footprint", desc1: "Requires installing fat VPN agents and native RDP clients.", desc2: "High friction for contractors, Chromebooks, and external teams." }
  ],
  modernTitle: "Zero Trust Web Broker (QuickZTNA)",
  modernItems: [
    { title: "100% Dark Target Machine", desc1: "Target Windows/Linux server has zero open inbound ports.", desc2: "Reachable strictly through outbound-only WireGuard connector." },
    { title: "Mandatory IdP SSO + FIDO2 MFA", desc1: "Authentication anchored in Okta/Entra ID with hardware key.", desc2: "Continuous device posture check before desktop stream launches." },
    { title: "Single-Resource Micro-Tunnel", desc1: "Access scoped strictly to the specific remote desktop host.", desc2: "Zero lateral peer routing; corporate subnet completely invisible." },
    { title: "Clientless In-Browser HTML5 Stream", desc1: "Streamed securely over TLS 1.3 to any modern web browser.", desc2: "Zero local agent install needed for third-party contractors." }
  ]
});

// 39. top-10-secrets-management-tools-2026
blogDiagramConfigs.push({
  slug: 'top-10-secrets-management-tools-2026',
  title: "Zero-Standing Secrets: Dynamic Ephemeral Token Lifecycle",
  subtitle: "Eliminating Plaintext .env Files with In-Memory Just-in-Time Secret Brokering",
  type: 'sequence',
  participants: [
    { name: "App Runtime", role: "Container / Microservice" },
    { name: "QuickZTNA Agent", role: "Local Kernel Injector" },
    { name: "Enterprise Vault", role: "HashiCorp / Cloud KMS" },
    { name: "Identity Token (OIDC)", role: "Workload Attestation" },
    { name: "Private Target DB", role: "Postgres / Redis" }
  ],
  steps: [
    { from: 0, to: 1, label: "1. Workload boots with empty filesystem", detail: "Zero static .env secrets on disk", color: "#10B981" },
    { from: 1, to: 3, label: "2. Fetch Short-Lived SPIFFE / OIDC JWT", detail: "Cryptographically bound to container UID", color: "#06B6D4" },
    { from: 1, to: 2, label: "3. Request Dynamic Secret via Vault API", detail: "Mutual TLS with attestation token", color: "#06B6D4" },
    { from: 2, to: 1, label: "4. Synthesize Dynamic Database Role (1h TTL)", detail: "Ephemeral credentials generated", color: "#10B981" },
    { from: 1, to: 0, label: "5. Inject Secret Directly into In-Memory Enclave", detail: "mlock() volatile RAM; never hits disk", color: "#10B981" },
    { from: 0, to: 4, label: "6. Authenticate to DB & Auto-Revoke upon Exit", detail: "Vault shreds credential upon TTL expiry", color: "#EF4444" }
  ]
});

// 40. top-10-session-recording-compliance
blogDiagramConfigs.push({
  slug: 'top-10-session-recording-compliance',
  title: "Tamper-Proof Session Recording & WORM Compliance Pipeline",
  subtitle: "Keystroke OCR, Protocol Chunk Encryption, and Immutable S3 Object Lock Storage",
  type: 'threat_model',
  attacker: {
    name: "Malicious Admin / Insider Tampering",
    desc1: "Privileged operator attempting log tampering",
    desc2: "Unauthorized execution of destructive scripts"
  },
  entryPoint: {
    step1: "Admin opens SSH / RDP / SQL session",
    step2: "Executes unauthorized database export",
    step3: "Attempts deleting local bash history or audit logs"
  },
  securityGate: {
    name: "QuickZTNA Session Recorder Proxy",
    check1: "Dual Protocol Stream Splitting",
    sub1: "Splits SSH/RDP stream: one live, one encrypted chunk",
    check2: "Inline Keystroke OCR & Command Parsing",
    sub2: "Extracts commands, queries, and file transfer hashes"
  },
  protectedAsset: {
    name: "Immutable Compliance Evidence Lake",
    item1: "WORM Encrypted S3 Bucket (Object Lock)",
    item2: "Cryptographic SHA-256 Hash Chain",
    item3: "Real-time SIEM Audit Forwarding (Splunk)"
  },
  siemNode: {
    title: "SOC 2 & HIPAA Regulatory Evidence Verification",
    desc1: "Even if an admin has root access to the target VM, session recordings in WORM storage cannot be modified or deleted.",
    desc2: "Auditors can verify HMAC digital signatures and replay exact keystroke timelines during incident reviews."
  }
});

// 41. top-10-ztna-manufacturing-iot
blogDiagramConfigs.push({
  slug: 'top-10-ztna-manufacturing-iot',
  title: "Purdue Model 5-Level Manufacturing Zero Trust Architecture",
  subtitle: "Protocol Isolation, Agentless OT Enclaves & Air-Gapped Industrial Cell Microsegmentation",
  type: 'purdue_model'
});

// 42. twingate-alternative
blogDiagramConfigs.push({
  slug: 'twingate-alternative',
  title: "Twingate Dual-Connector Proxy vs. Kernel WireGuard Mesh",
  subtitle: "Architectural Comparison: Proprietary Multi-Hop Proxy vs. Direct Line-Rate Mesh",
  type: 'comparison_split',
  legacyTitle: "Twingate (Client-Connector Proxy)",
  legacyItems: [
    { title: "Proprietary Data Plane", desc1: "Uses closed-source protocol instead of open standard.", desc2: "Requires running proprietary Connector containers on VMs." },
    { title: "Multi-Hop Cloud Proxying", desc1: "Traffic traverses Relay and Connector nodes before target.", desc2: "Adds routing latency compared to direct peer-to-peer tunnels." },
    { title: "Lacks Peer-to-Peer Device Mesh", desc1: "Cannot interconnect developer workstations directly.", desc2: "Designed purely for client-to-resource egress." },
    { title: "Limited Workforce Security Scope", desc1: "Focused primarily on resource access; lacks DNS threat shields.", desc2: "Requires purchasing separate tools for DNS and DLP." }
  ],
  modernTitle: "QuickZTNA (Kernel WireGuard Mesh)",
  modernItems: [
    { title: "Standard Open WireGuard Protocol", desc1: "High-performance Noise_IK cryptographic handshake in kernel.", desc2: "Open, auditable, and battle-tested cryptographic core." },
    { title: "Direct Peer-to-Peer UDP Tunnels", desc1: "Sub-2ms direct communication between endpoints and resources.", desc2: "Native line-rate 10GbE throughput with minimal CPU overhead." },
    { title: "Full Workstation-to-Workstation Mesh", desc1: "Seamless device-to-device connectivity with MagicDNS.", desc2: "Empowers remote developer collaboration and peer testing." },
    { title: "Comprehensive Security OS", desc1: "All-in-one mesh, device posture, JIT, DNS threat filter, and DLP.", desc2: "Generous free tier with full enterprise features included." }
  ]
});

// 43. what-is-ztna
blogDiagramConfigs.push({
  slug: 'what-is-ztna',
  title: "Perimeter Castle-and-Moat vs. NIST SP 800-207 Zero Trust",
  subtitle: "Architectural Paradigm Shift: Implicit Network Trust vs. Continuous Explicit Verification",
  type: 'comparison_split',
  legacyTitle: "Perimeter Security (Castle-and-Moat)",
  legacyItems: [
    { title: "Implicit Trust on Internal Network", desc1: "Assumes anyone inside the corporate LAN or VPN is trusted.", desc2: "Single authentication check at login; blind for remainder of session." },
    { title: "Broad Layer 3 Subnet Routing", desc1: "Grants remote laptop access to entire /16 or /24 subnet.", desc2: "Infected workstation can scan, probe, and pivot laterally to all hosts." },
    { title: "Public Ingress IP & Open Ports", desc1: "VPN concentrators expose public IPs with listening ports (443/1194).", desc2: "Continuously scanned by botnets and targeted for zero-day RCE." },
    { title: "Coarse Static Firewall ACLs", desc1: "Security rules defined by fragile IP addresses and port numbers.", desc2: "Fails in modern dynamic cloud and remote workforce environments." }
  ],
  modernTitle: "Zero Trust Network Access (QuickZTNA)",
  modernItems: [
    { title: "Assume Breach: Continuous Verification", desc1: "Never trust, always verify every packet flow explicitly.", desc2: "Continuous re-evaluation of user identity, posture, and context." },
    { title: "Granular Layer 4/7 Microsegmentation", desc1: "Grants access strictly to individual applications and ports.", desc2: "Peer isolation by default; lateral movement mathematically blocked." },
    { title: "100% Dark Infrastructure", desc1: "Zero open listening ports; Single-Packet Authorization (SPA).", desc2: "Workloads initiate outbound-only tunnels; invisible to Shodan." },
    { title: "Dynamic Attribute-Based Policies (ABAC)", desc1: "Rules defined by cryptographic identity, EDR health, and JIT state.", desc2: "Adapts in real time to employee role changes and security signals." }
  ]
});

// 44. wireguard-mesh-network
blogDiagramConfigs.push({
  slug: 'wireguard-mesh-network',
  title: "Distributed Peer-to-Peer WireGuard Mesh with STUN/ICE",
  subtitle: "Automated UDP Hole Punching & Decentralized Encrypted Tunnel Topology",
  type: 'mesh_network',
  controlPlane: {
    name: "QuickZTNA Ephemeral Coordination Server",
    desc: "Exchanges Curve25519 public keys and STUN candidate mappings out-of-band; zero payload data decrypted"
  },
  nodes: [
    { zone: "Remote Workstation A", name: "Engineer Laptop (Home NAT)", ip: "100.64.0.10 (ztna0)", detail1: "STUN Discovers Public UDP Port", detail2: "Direct P2P Punch to Peer B" },
    { zone: "Cloud Microservice B", name: "AWS EC2 API Node", ip: "100.64.0.20 (ztna0)", detail1: "Encrypted Noise_IK Handshake", detail2: "Direct Line-Rate Line Speed" },
    { zone: "Production Database C", name: "Internal DB Server", ip: "100.64.0.30 (ztna0)", detail1: "100% Dark in Private Subnet", detail2: "Zero Listening Ports to Internet" },
    { zone: "Encrypted Relay Fallback", name: "Frankfurt DERP Node", ip: "100.64.0.254 (ztna0)", detail1: "Automated Symmetric NAT Fallback", detail2: "End-to-End ChaCha20 Preserved" }
  ]
});

// 45. wireguard-vs-openvpn-vs-ipsec
blogDiagramConfigs.push({
  slug: 'wireguard-vs-openvpn-vs-ipsec',
  title: "VPN Protocols Compared: Codebase Complexity & Performance",
  subtitle: "Lines of Code (LOC) Auditable Surface vs Throughput Efficiency (Gbps)",
  type: 'bar_chart',
  chartTitle: "Protocol Codebase Size (Lines of Code - Lower is Safer)",
  chartUnit: "LOC",
  metrics: [
    { label: "IPsec (IKEv2 Stack)", sub: "StrongSwan / Kernel IPsec", value: 400000, displayValue: "400,000", color: "#EF4444" },
    { label: "OpenVPN Daemon", sub: "OpenVPN + OpenSSL Dependency", value: 120000, displayValue: "120,000", color: "#F59E0B" },
    { label: "WireGuard Kernel Driver", sub: "Clean In-Kernel Implementation", value: 4000, displayValue: "4,000", color: "#10B981", speedup: "99% Less Code" }
  ]
});

// 46. zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes
blogDiagramConfigs.push({
  slug: 'zero-trust-ci-cd-pipelines-securing-ephemeral-build-runners-deployment-nodes',
  title: "CI/CD Ephemeral Runner Workload Attestation Sequence",
  subtitle: "OIDC Token Attestation, Dynamic Mesh Enrollment & Instant Key Destruction",
  type: 'sequence',
  participants: [
    { name: "Ephemeral Runner", role: "GitHub / GitLab Job" },
    { name: "IdP / OIDC Provider", role: "Workload Attestation" },
    { name: "QuickZTNA Controller", role: "Policy Decision Point" },
    { name: "Mesh Gateway", role: "Private Staging / Prod" },
    { name: "Production Target", role: "Kubernetes / RDS" }
  ],
  steps: [
    { from: 0, to: 1, label: "1. Request OIDC Token (actions.id.token)", detail: "Claims: repo, branch, commit hash", color: "#06B6D4" },
    { from: 0, to: 2, label: "2. Authenticate to Mesh with OIDC JWT", detail: "Zero static AWS/SSH secrets needed", color: "#06B6D4" },
    { from: 2, to: 0, label: "3. Issue Ephemeral WireGuard Key Pair", detail: "TTL strictly bounded to CI job (15m)", color: "#10B981" },
    { from: 0, to: 3, label: "4. Outbound P2P Encrypted Mesh Tunnel", detail: "Authorized strictly for deploy command", color: "#10B981" },
    { from: 3, to: 4, label: "5. Deploy Artifact to Production Target", detail: "Full commit-attributed audit logging", color: "#06B6D4" },
    { from: 0, to: 2, label: "6. Job Completes -> Instant Cryptographic Key Shred", detail: "Runner destroyed; zero standing access", color: "#EF4444" }
  ]
});

// 47. zero-trust-healthcare
blogDiagramConfigs.push({
  slug: 'zero-trust-healthcare',
  title: "Distributed Healthcare Zero Trust Mesh & IoMT Shield",
  subtitle: "Protecting Remote Radiologists, Clinic Workstations, and Medical IoT Enclaves",
  type: 'mesh_network',
  controlPlane: {
    name: "HIPAA-Compliant Healthcare Coordination Plane",
    desc: "Enforces continuous per-packet ABAC, emergency break-glass procedures, and immutable audit logs"
  },
  nodes: [
    { zone: "Remote Radiologist (Home)", name: "PACS Diagnostic Workstation", ip: "100.64.200.5 (ztna0)", detail1: "FIDO2 Badge + Device Posture", detail2: "Sub-5ms High-Res DICOM Transfer" },
    { zone: "Regional Clinic Branch", name: "Nurse Station & Workstations", ip: "100.64.200.10 (ztna0)", detail1: "Shared COW Fast User Switching", detail2: "Outbound-Only WireGuard Connector" },
    { zone: "Medical IoT Subnet Enclave", name: "Infusion Pumps & MRI Devices", ip: "100.64.200.20 (ztna0)", detail1: "Legacy Agentless IoMT Gateway", detail2: "Isolated Behind Dark Subnet Router" },
    { zone: "Hospital Core EHR Cloud", name: "Epic / Cerner EHR Database", ip: "100.64.200.30 (ztna0)", detail1: "100% Dark in Private AWS/Azure", detail2: "0.0.0.0/0 INGRESS: DROP ALL" }
  ]
});

// 48. zero-trust-ma-integration
blogDiagramConfigs.push({
  slug: 'zero-trust-ma-integration',
  title: "M&A Network Integration: Day-0 to Day-30 Rapid Access",
  subtitle: "Connecting Overlapping Subnets (10.0.0.0/8) with Zero IP Renumbering",
  type: 'timeline',
  phases: [
    {
      phaseTag: "DAY 0 – 3",
      timeWindow: "Hours 0 – 72",
      title: "Identity Federation & Discovery",
      desc: "Connect acquirer and target IdPs (Okta + Entra ID) without AD forest trusts.",
      req1: "Federate Identity Providers via OIDC",
      req2: "Deploy QuickZTNA Subnet Connectors",
      req3: "Zero network renumbering required",
      statusBg: "#1E3A8A",
      statusBorder: "#3B82F6",
      statusTitle: "Day-1 Access Ready",
      statusDesc: "Target ERP accessible in 48 hours",
      deliverable: "Catalog of Shared Business Apps"
    },
    {
      phaseTag: "DAY 4 – 14",
      timeWindow: "Weeks 1 – 2",
      title: "MagicDNS Mesh & Overlap Resolution",
      desc: "Resolve overlapping 10.0.0.0/8 and 192.168.1.0/24 subnets via Carrier-Grade NAT.",
      req1: "Route via unique MagicDNS hostnames",
      req2: "Isolate target corporate subnet",
      req3: "Prevent cross-company malware spread",
      statusBg: "#064E3B",
      statusBorder: "#059669",
      statusTitle: "Subnet Overlap Resolved",
      statusDesc: "Both companies use 10.0.0.0/8 safely",
      deliverable: "Dual-Company Routing Matrix"
    },
    {
      phaseTag: "DAY 15 – 30",
      timeWindow: "Month 1",
      title: "Least-Privilege ABAC Lockdown",
      desc: "Restrict cross-company access strictly to approved role-based applications.",
      req1: "Apply fine-grained ABAC policies",
      req2: "Enable continuous device posture",
      req3: "Integrate joint SIEM compliance logs",
      statusBg: "#D97706",
      statusBorder: "#F59E0B",
      statusTitle: "Zero Trust Enforced",
      statusDesc: "Standing subnet access eliminated",
      deliverable: "SOC 2 Merged Audit Attestation"
    }
  ]
});

// 49. ztna-metrics-for-cisos
blogDiagramConfigs.push({
  slug: 'ztna-metrics-for-cisos',
  title: "CISO Zero Trust Executive Metrics Scorecard",
  subtitle: "Quantitative Attack Surface Reduction, Privilege Hygiene, and Containment Speed",
  type: 'bar_chart',
  chartTitle: "Key Security Posture Performance Metrics (Target Benchmarks)",
  chartUnit: "%",
  metrics: [
    { label: "Attack Surface Elimination", sub: "Exposed Ingress Ports Reduced to Zero", value: 100, displayValue: "100", color: "#10B981", speedup: "Zero Shodan Scan" },
    { label: "JIT Privilege Ratio", sub: "Standing Admin Accounts Converted to JIT", value: 92, displayValue: "92", color: "#0284C7", speedup: ">85% Target Met" },
    { label: "Latency Overhead Reduction", sub: "WireGuard vs Legacy SSL VPN Latency", value: 90, displayValue: "90", color: "#F59E0B", speedup: "Sub-2ms Direct" },
    { label: "Stale Account Elimination", sub: "Automated SCIM Deprovisioning Rate", value: 100, displayValue: "100", color: "#10B981", speedup: "<1s Revocation" }
  ]
});

// 50. ztna-vs-vpn
blogDiagramConfigs.push({
  slug: 'ztna-vs-vpn',
  title: "Legacy VPN Hub-and-Spoke vs. Modern ZTNA Fabric",
  subtitle: "Architectural Contrast: Centralized Chokepoint Hairpinning vs. Direct WireGuard Mesh",
  type: 'comparison_split',
  legacyTitle: "Legacy Enterprise VPN (IPSec/OpenVPN)",
  legacyItems: [
    { title: "Centralized Concentrator Chokepoint", desc1: "All traffic hairpins through central office or cloud gateway.", desc2: "Severe latency bottleneck; expensive bandwidth backhaul fees." },
    { title: "Broad Layer 3 Network-Level Trust", desc1: "Grants full subnet access; trusting the endpoint once authenticated.", desc2: "Compromised laptop can scan internal IP ranges and spread ransomware." },
    { title: "Publicly Exposed Listening Gateway", desc1: "VPN concentrator exposes listening port (443/1194/500) to 0.0.0.0/0.", desc2: "Target for continuous zero-day exploits (Pulse Secure, Fortinet CVEs)." },
    { title: "Single Point-in-Time Login Check", desc1: "Authentication evaluated only once at morning connect.", desc2: "Blind to subsequent host infection, malware installation, or posture loss." }
  ],
  modernTitle: "Modern ZTNA Fabric (QuickZTNA)",
  modernItems: [
    { title: "Direct Peer-to-Peer Encrypted Mesh", desc1: "Tunnels route directly between workloads with sub-2ms latency.", desc2: "No central concentrator bottleneck; line-rate WireGuard performance." },
    { title: "Granular Layer 4/7 Microsegmentation", desc1: "Grants access strictly to individual application ports.", desc2: "Zero lateral peer routing between workstations; breach contained." },
    { title: "100% Dark Ingress Infrastructure", desc1: "Workloads initiate outbound-only tunnels; zero open inbound ports.", desc2: "Single-Packet Authorization makes servers mathematically invisible." },
    { title: "Continuous Per-Connection Posture Check", desc1: "Evaluates identity, EDR health, and posture before every socket open.", desc2: "Any posture violation triggers automated sub-millisecond key revocation." }
  ]
});

// 51. zero-trust-egress-controls-exit-nodes
blogDiagramConfigs.push({
  slug: 'zero-trust-egress-controls-exit-nodes',
  title: "Zero Trust Exit Nodes vs. Legacy Outbound Egress",
  subtitle: "Architectural Comparison: Kernel WireGuard Egress Mesh vs. Fragile SWG / Full-Tunnel VPN",
  type: 'comparison_split',
  legacyTitle: "Legacy Outbound Breakout & SWGs",
  legacyItems: [
    { title: "Synthetic Root CA Decryption", desc1: "Breaks developer tools (Docker, Pip, Cargo, Git).", desc2: "Intercepts and decrypts TLS with high latency." },
    { title: "Fragile PAC Files & Hairpinning", desc1: "80–150ms backhaul latency through central datacenters.", desc2: "Concentrator saturates under commodity streaming." },
    { title: "Rotating Residential IPs", desc1: "Developers connect from dynamic, unmonitored home ISPs.", desc2: "Forces security teams to abandon SaaS IP allowlists." },
    { title: "Heavy User-Space Daemons", desc1: "Continuous socket inspection drains 40%+ laptop battery.", desc2: "Context switching between user space and kernel throttles speed." }
  ],
  modernTitle: "QuickZTNA WireGuard Exit Node Mesh",
  modernItems: [
    { title: "In-Kernel WireGuard (Layer 3/4)", desc1: "ChaCha20-Poly1305 line-rate throughput (>918 Mbps).", desc2: "Sub-1.5ms overhead; zero synthetic certificate friction." },
    { title: "Dedicated Corporate Static IPs", desc1: "Regional cloud exit nodes provide stable public IPs.", desc2: "Enforces strict IP allowlisting on GitHub, AWS, and Snowflake." },
    { title: "Loopback DNS & DoH Blackhole", desc1: "Captures port 53 traffic to private MagicDNS resolver.", desc2: "Blocks public DoH/DoT resolvers to stop DNS exfiltration." },
    { title: "Dynamic ABAC & Auto-Quarantine", desc1: "Continuous posture checks (disk encryption, firewall).", desc2: "Instantly quarantines non-compliant endpoints in real time." }
  ]
});
