const MODES = {
  easy: {
    name: "Easy Mode",
    shortName: "Easy",
    icon: "book",
    attemptSize: 15,
    threshold: 70,
    next: "medium",
    description:
      "Foundation check for data-center vocabulary: power, cooling, redundancy, racks, safety, and basic PM responsibilities.",
    topics: ["UPS", "Cooling", "PUE", "Racks", "Redundancy"],
  },
  medium: {
    name: "Medium Mode",
    shortName: "Medium",
    icon: "clipboard",
    attemptSize: 15,
    threshold: 70,
    next: "hard",
    description:
      "Practical readiness for junior DC PM and project engineer situations: MOPs, vendors, change windows, commissioning, and handover.",
    topics: ["MOP", "Risk", "Vendors", "Commissioning", "Handover"],
  },
  hard: {
    name: "Hardest Mode",
    shortName: "Hardest",
    icon: "alert",
    attemptSize: 5,
    threshold: 70,
    next: null,
    timedSeconds: 180,
    description:
      "Scenario-based interview simulation for live-site risk, escalation, customer impact, and uptime-first decision-making.",
    topics: ["Live-site risk", "Escalation", "SLA", "Trade-offs", "RCA"],
  },
};

const FLASHCARD_DECK_SIZE = 12;
const DAILY_DRILL_MODE = {
  mode: "daily",
  name: "Daily 10-Question Drill",
  shortName: "Daily",
  icon: "calendar",
  attemptSize: 10,
  threshold: 70,
  next: null,
  description:
    "A date-seeded mixed practice set with Easy, Medium, and Hardest prompts for daily readiness maintenance.",
};
const DAILY_DRILL_PLAN = {
  easy: 4,
  medium: 4,
  hard: 2,
};

const STUDY_TOPICS = {
  Power: [
    "Utility feed",
    "Switchgear",
    "UPS",
    "Batteries",
    "PDUs",
    "Generators",
    "ATS/STS",
    "Redundancy",
    "Load testing",
  ],
  Cooling: [
    "Chillers",
    "CRAH / CRAC",
    "Cooling towers",
    "Chilled water",
    "Hot aisle / cold aisle",
    "Containment",
    "Airflow management",
    "Rack density",
  ],
  Operations: [
    "MOP",
    "SOP",
    "EOP",
    "Change window",
    "Planned maintenance",
    "Incident response",
    "Escalation",
    "Root-cause analysis",
    "Post-incident review",
  ],
  "Project Management": [
    "Schedule",
    "Budget",
    "Risk register",
    "Stakeholder management",
    "Vendor coordination",
    "Critical path",
    "Procurement",
    "Handover",
    "Commissioning",
    "Change control",
  ],
  Sustainability: [
    "PUE",
    "Energy efficiency",
    "Water usage",
    "Green Mark for Data Centers",
    "Carbon efficiency",
    "Cooling optimization",
    "Sustainable operations",
  ],
  "Customer / Service Delivery": [
    "SLA",
    "Capacity reservation",
    "Rack readiness",
    "Power availability",
    "Network connectivity",
    "Cross-connects",
    "Access control",
    "Go-live planning",
  ],
};

const QUESTIONS = [
  {
    id: "easy-power-001",
    difficulty: "easy",
    topic: "power",
    type: "multiple_choice",
    question: "What does UPS usually stand for in a data center?",
    options: [
      "Universal Power Source",
      "Uninterruptible Power Supply",
      "Utility Protection System",
      "Unified Processing Server",
    ],
    correctAnswer: "Uninterruptible Power Supply",
    explanation:
      "A UPS provides short-term backup power and power conditioning when utility power fails or fluctuates.",
    tags: ["UPS", "power", "fundamentals"],
  },
  {
    id: "easy-power-002",
    difficulty: "easy",
    topic: "redundancy",
    type: "multiple_choice",
    question: "What does N+1 redundancy mean?",
    options: [
      "No backup capacity",
      "One extra component beyond what is required",
      "Two fully independent systems",
      "One system shared by two data centers",
    ],
    correctAnswer: "One extra component beyond what is required",
    explanation:
      "N is the capacity required for normal load. N+1 means one additional component is available if a required component fails.",
    tags: ["redundancy", "availability"],
  },
  {
    id: "easy-sustainability-001",
    difficulty: "easy",
    topic: "sustainability",
    type: "multiple_choice",
    question: "PUE is mainly used to measure what?",
    options: [
      "Network speed",
      "Physical security level",
      "Energy efficiency",
      "Number of servers per rack",
    ],
    correctAnswer: "Energy efficiency",
    explanation:
      "Power Usage Effectiveness compares total facility power to IT equipment power, making it a high-level energy efficiency indicator.",
    tags: ["PUE", "energy"],
  },
  {
    id: "easy-cooling-001",
    difficulty: "easy",
    topic: "cooling",
    type: "multiple_choice",
    question: "Why are hot aisles and cold aisles used?",
    options: [
      "To separate visitor walkways from staff areas",
      "To manage airflow and reduce mixing of hot and cold air",
      "To increase the number of racks in a room",
      "To make fire suppression easier to trigger",
    ],
    correctAnswer: "To manage airflow and reduce mixing of hot and cold air",
    explanation:
      "Hot aisle / cold aisle layouts improve cooling efficiency by controlling where cool supply air and hot exhaust air move.",
    tags: ["cooling", "airflow"],
  },
  {
    id: "easy-power-003",
    difficulty: "easy",
    topic: "power",
    type: "true_false",
    question: "A generator normally supports longer outages than a UPS battery string.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation:
      "UPS batteries bridge immediate outages, while generators can support longer runtime when fuel and mechanical systems are available.",
    tags: ["generator", "UPS"],
  },
  {
    id: "easy-security-001",
    difficulty: "easy",
    topic: "security",
    type: "multiple_choice",
    question: "Which item is a physical security control in a data center?",
    options: ["Firewall rule", "Biometric access", "Database index", "API token"],
    correctAnswer: "Biometric access",
    explanation:
      "Physical security protects the facility and equipment through controls such as badges, biometrics, mantraps, CCTV, and guards.",
    tags: ["security", "access"],
  },
  {
    id: "easy-fire-001",
    difficulty: "easy",
    topic: "fire safety",
    type: "multiple_choice",
    question: "Why are clean-agent fire suppression systems common in data centers?",
    options: [
      "They are cheaper than smoke detectors",
      "They can suppress fire while reducing water damage to IT equipment",
      "They replace access control",
      "They cool racks during normal operation",
    ],
    correctAnswer:
      "They can suppress fire while reducing water damage to IT equipment",
    explanation:
      "Clean-agent systems are used because they can suppress fires without the same equipment damage risk as water discharge.",
    tags: ["fire suppression", "safety"],
  },
  {
    id: "easy-rack-001",
    difficulty: "easy",
    topic: "customer / service delivery",
    type: "multiple_choice",
    question: "What is a rack PDU used for?",
    options: [
      "Distributing power to IT equipment in a rack",
      "Routing internet traffic",
      "Measuring building water use",
      "Approving maintenance windows",
    ],
    correctAnswer: "Distributing power to IT equipment in a rack",
    explanation:
      "A rack PDU distributes power from upstream electrical systems to servers, storage, and network equipment in a cabinet.",
    tags: ["PDU", "rack"],
  },
  {
    id: "easy-network-001",
    difficulty: "easy",
    topic: "customer / service delivery",
    type: "multiple_choice",
    question: "In a customer deployment, what does a cross-connect usually provide?",
    options: [
      "A physical or logical connection between network services",
      "A backup generator test",
      "A rack weight certificate",
      "A chilled water valve setting",
    ],
    correctAnswer: "A physical or logical connection between network services",
    explanation:
      "Cross-connects link customer equipment, carriers, cloud on-ramps, or other services through managed cabling.",
    tags: ["network", "cross-connect"],
  },
  {
    id: "easy-role-001",
    difficulty: "easy",
    topic: "project management",
    type: "multiple_choice",
    question: "Which activity is most clearly part of a data-center PM role?",
    options: [
      "Owning schedule, risks, vendors, stakeholders, and handover readiness",
      "Replacing every UPS battery personally",
      "Writing application code for the customer",
      "Setting fuel prices for generator suppliers",
    ],
    correctAnswer:
      "Owning schedule, risks, vendors, stakeholders, and handover readiness",
    explanation:
      "A DC PM coordinates work and controls delivery risk, while engineers and technicians usually own detailed technical execution.",
    tags: ["PM role", "handover"],
  },
  {
    id: "easy-cooling-002",
    difficulty: "easy",
    topic: "cooling",
    type: "multiple_choice",
    question: "Which term refers to the amount of IT load a rack can support?",
    options: ["Rack density", "Packet loss", "Humidity alarm", "Security zoning"],
    correctAnswer: "Rack density",
    explanation:
      "Rack density is commonly discussed in kW per rack and affects power, cooling, floor loading, and deployment planning.",
    tags: ["rack density", "cooling"],
  },
  {
    id: "easy-redundancy-002",
    difficulty: "easy",
    topic: "redundancy",
    type: "multiple_choice",
    question: "What does 2N redundancy usually imply?",
    options: [
      "Two fully independent capacity paths or systems",
      "Two users can enter the data hall",
      "Two racks share one PDU",
      "Two maintenance tickets are open",
    ],
    correctAnswer: "Two fully independent capacity paths or systems",
    explanation:
      "2N generally means a second complete system exists to support the full required load if the primary system is unavailable.",
    tags: ["2N", "redundancy"],
  },
  {
    id: "easy-ops-001",
    difficulty: "easy",
    topic: "operations",
    type: "true_false",
    question:
      "In a live data center, planned maintenance should normally be controlled through an approved procedure.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation:
      "Critical-environment work should follow approved procedures so roles, risks, hold points, and rollback steps are clear.",
    tags: ["maintenance", "MOP"],
  },
  {
    id: "easy-cabling-001",
    difficulty: "easy",
    topic: "customer / service delivery",
    type: "multiple_choice",
    question: "Why is cable labeling important?",
    options: [
      "It supports troubleshooting, audits, and safe change execution",
      "It improves server CPU speed",
      "It replaces commissioning",
      "It lowers utility tariffs automatically",
    ],
    correctAnswer: "It supports troubleshooting, audits, and safe change execution",
    explanation:
      "Accurate labels reduce mistakes during installations, maintenance, fault isolation, and future capacity changes.",
    tags: ["cabling", "operations"],
  },
  {
    id: "easy-power-004",
    difficulty: "easy",
    topic: "power",
    type: "multiple_choice",
    question: "Which item is usually part of the electrical power path?",
    options: ["Switchgear", "CRAC filter", "Visitor log", "Ticket template"],
    correctAnswer: "Switchgear",
    explanation:
      "Switchgear controls, protects, and isolates electrical equipment in the facility power path.",
    tags: ["switchgear", "power"],
  },
  {
    id: "medium-ops-001",
    difficulty: "medium",
    topic: "operations",
    type: "multiple_choice",
    question:
      "A vendor wants to replace a component connected to a live power path. What should a DC PM check first?",
    options: [
      "Whether the vendor has a good reputation",
      "Whether there is an approved MOP, risk assessment, rollback plan, and change window",
      "Whether finance has paid the vendor",
      "Whether the customer has received a marketing update",
    ],
    correctAnswer:
      "Whether there is an approved MOP, risk assessment, rollback plan, and change window",
    explanation:
      "Live power-path work requires procedural control, risk review, rollback planning, approvals, and a defined maintenance window.",
    tags: ["MOP", "risk", "change window"],
  },
  {
    id: "medium-ops-002",
    difficulty: "medium",
    topic: "operations",
    type: "multiple_choice",
    question:
      "Which document usually describes the step-by-step procedure for planned work in a critical environment?",
    options: ["SLA", "MOP", "NDA", "BOQ"],
    correctAnswer: "MOP",
    explanation:
      "A Method of Procedure defines the planned work steps, roles, prerequisites, hold points, and rollback actions.",
    tags: ["MOP", "maintenance"],
  },
  {
    id: "medium-ops-003",
    difficulty: "medium",
    topic: "operations",
    type: "multi_select",
    question:
      "Which items should usually be reviewed before live-site maintenance?",
    options: [
      "Approved MOP",
      "Rollback plan",
      "Risk assessment",
      "Social media announcement",
      "Stakeholder notification",
    ],
    correctAnswers: [
      "Approved MOP",
      "Rollback plan",
      "Risk assessment",
      "Stakeholder notification",
    ],
    explanation:
      "Live-site maintenance should be controlled through approved procedures, risk review, rollback planning, and stakeholder communication.",
    tags: ["MOP", "maintenance", "risk"],
  },
  {
    id: "medium-change-001",
    difficulty: "medium",
    topic: "operations",
    type: "multiple_choice",
    question: "What is the main purpose of a change window?",
    options: [
      "To avoid documenting the work",
      "To define when approved work may happen with known stakeholders and risk controls",
      "To let vendors choose any time they prefer",
      "To replace incident management",
    ],
    correctAnswer:
      "To define when approved work may happen with known stakeholders and risk controls",
    explanation:
      "Change windows coordinate timing, approvals, communications, and business impact for controlled work.",
    tags: ["change window", "stakeholders"],
  },
  {
    id: "medium-incident-001",
    difficulty: "medium",
    topic: "operations",
    type: "multiple_choice",
    question:
      "After an incident is stabilized, what should the PM help ensure happens?",
    options: [
      "No one discusses the incident again",
      "Root-cause analysis, action tracking, stakeholder update, and lessons learned",
      "Only the vendor writes a sales proposal",
      "The next maintenance is automatically approved",
    ],
    correctAnswer:
      "Root-cause analysis, action tracking, stakeholder update, and lessons learned",
    explanation:
      "Post-incident discipline turns stabilization into prevention by tracking causes, actions, owners, and communications.",
    tags: ["RCA", "incident", "post-incident review"],
  },
  {
    id: "medium-handover-001",
    difficulty: "medium",
    topic: "project management",
    type: "multi_select",
    question: "Which documents commonly matter during project handover?",
    options: [
      "As-built drawings",
      "O&M manuals",
      "Commissioning results",
      "Personal holiday photos",
      "Asset lists",
    ],
    correctAnswers: [
      "As-built drawings",
      "O&M manuals",
      "Commissioning results",
      "Asset lists",
    ],
    explanation:
      "Operations need accurate as-builts, manuals, test results, asset records, warranties, and open-issue lists to take ownership.",
    tags: ["handover", "commissioning"],
  },
  {
    id: "medium-vendor-001",
    difficulty: "medium",
    topic: "project management",
    type: "multiple_choice",
    question:
      "A contractor reports a cabling delay that threatens server installation. What should the PM do first?",
    options: [
      "Hide the delay until installation day",
      "Confirm impact on critical path, request a recovery plan, and communicate risk early",
      "Cancel every dependent task immediately",
      "Ask sales to solve the cabling issue",
    ],
    correctAnswer:
      "Confirm impact on critical path, request a recovery plan, and communicate risk early",
    explanation:
      "The PM should validate schedule impact, recover where possible, and communicate dependencies before the go-live date is surprised.",
    tags: ["critical path", "vendor coordination", "schedule"],
  },
  {
    id: "medium-commissioning-001",
    difficulty: "medium",
    topic: "project management",
    type: "multiple_choice",
    question: "What is commissioning intended to prove?",
    options: [
      "That systems are installed, tested, integrated, and ready against requirements",
      "That procurement can close without records",
      "That the site no longer needs operations procedures",
      "That capacity planning is optional",
    ],
    correctAnswer:
      "That systems are installed, tested, integrated, and ready against requirements",
    explanation:
      "Commissioning verifies equipment and systems perform as designed before handover or production use.",
    tags: ["commissioning", "handover"],
  },
  {
    id: "medium-capacity-001",
    difficulty: "medium",
    topic: "customer / service delivery",
    type: "multiple_choice",
    question:
      "Before confirming a customer rack deployment, which readiness items should be checked?",
    options: [
      "Rack space, power, cooling, network, access, and dependencies",
      "Only the customer logo",
      "Only the server delivery truck route",
      "Only the monthly invoice template",
    ],
    correctAnswer: "Rack space, power, cooling, network, access, and dependencies",
    explanation:
      "Rack deployments depend on multiple readiness streams; missing one can block go-live or create live-site risk.",
    tags: ["deployment", "capacity", "service delivery"],
  },
  {
    id: "medium-safety-001",
    difficulty: "medium",
    topic: "operations",
    type: "multiple_choice",
    question:
      "A contractor arrives without the required site safety briefing. What should the PM do?",
    options: [
      "Allow work if the contractor says they are experienced",
      "Pause site work until access, induction, permits, and safety requirements are satisfied",
      "Let the contractor work only in the data hall",
      "Skip the briefing if the schedule is tight",
    ],
    correctAnswer:
      "Pause site work until access, induction, permits, and safety requirements are satisfied",
    explanation:
      "Safety and access controls are prerequisites, especially in critical facilities with electrical, mechanical, and operational risks.",
    tags: ["site safety", "access control"],
  },
  {
    id: "medium-sustainability-001",
    difficulty: "medium",
    topic: "sustainability",
    type: "multiple_choice",
    question:
      "Which improvement is most directly connected to cooling efficiency?",
    options: [
      "Better containment and airflow management",
      "More visitor badges",
      "Longer NDA templates",
      "Changing the project name",
    ],
    correctAnswer: "Better containment and airflow management",
    explanation:
      "Containment and airflow management reduce bypass and recirculation, which can lower cooling energy use while preserving IT conditions.",
    tags: ["cooling optimization", "PUE"],
  },
  {
    id: "medium-escalation-001",
    difficulty: "medium",
    topic: "operations",
    type: "multiple_choice",
    question:
      "A risk exceeds the threshold approved in the MOP. What is the best PM response?",
    options: [
      "Continue because the team is already onsite",
      "Pause, involve responsible technical owners, and escalate with options",
      "Ask the least senior person to decide",
      "Remove the risk from the log",
    ],
    correctAnswer:
      "Pause, involve responsible technical owners, and escalate with options",
    explanation:
      "Risk thresholds exist to trigger controlled decision-making rather than letting schedule pressure normalize unsafe work.",
    tags: ["escalation", "MOP", "risk"],
  },
  {
    id: "medium-sop-001",
    difficulty: "medium",
    topic: "operations",
    type: "multiple_choice",
    question: "What does an SOP usually describe?",
    options: [
      "Routine standard operating steps",
      "Emergency-only actions",
      "A customer sales discount",
      "A bill of quantities",
    ],
    correctAnswer: "Routine standard operating steps",
    explanation:
      "SOPs describe standard, repeatable operations; EOPs are used for emergencies; MOPs guide planned methods of work.",
    tags: ["SOP", "operations"],
  },
  {
    id: "medium-eop-001",
    difficulty: "medium",
    topic: "operations",
    type: "multiple_choice",
    question: "When is an EOP most relevant?",
    options: [
      "During emergency response",
      "When drafting a customer brochure",
      "When labeling parking spaces",
      "During routine invoice approval",
    ],
    correctAnswer: "During emergency response",
    explanation:
      "Emergency Operating Procedures guide response to abnormal or emergency situations where fast, controlled action matters.",
    tags: ["EOP", "incident response"],
  },
  {
    id: "medium-risk-001",
    difficulty: "medium",
    topic: "project management",
    type: "multi_select",
    question: "Which items belong in a useful risk register?",
    options: [
      "Risk description",
      "Impact and likelihood",
      "Owner and mitigation",
      "Favorite lunch order",
      "Trigger or status",
    ],
    correctAnswers: [
      "Risk description",
      "Impact and likelihood",
      "Owner and mitigation",
      "Trigger or status",
    ],
    explanation:
      "A risk register should make risks actionable by recording impact, likelihood, owner, mitigation, status, and escalation triggers.",
    tags: ["risk register", "PM"],
  },
  {
    id: "medium-greenmark-001",
    difficulty: "medium",
    topic: "sustainability",
    type: "multiple_choice",
    question:
      "In a data-center sustainability discussion, Green Mark concepts are most likely related to what?",
    options: [
      "Energy and environmental performance of buildings and data centers",
      "A color code for patch panels only",
      "A vendor payment method",
      "A firewall naming scheme",
    ],
    correctAnswer:
      "Energy and environmental performance of buildings and data centers",
    explanation:
      "Green Mark-related discussions focus on building and data-center environmental performance, including energy efficiency and operations.",
    tags: ["Green Mark", "sustainability"],
  },
  {
    id: "hard-live-001",
    difficulty: "hard",
    topic: "live-site risk",
    type: "scenario_text",
    question:
      "A customer deployment is scheduled for Friday. On Wednesday, facilities reports enough rack space but cooling capacity is close to limit. Sales wants to proceed because the customer is strategic. Operations is uncomfortable. What do you do as the DC PM?",
    rubric: [
      "Do not proceed blindly under sales pressure",
      "Validate actual cooling capacity and redundancy margin",
      "Involve facilities, operations, network, service delivery, and management",
      "Assess customer impact, SLA exposure, and live-site risk",
      "Prepare options such as phased deployment, relocation, reduced density, or delay",
      "Document the decision, risk owner, and agreed next steps",
    ],
    sampleStrongAnswer:
      "I would pause the go-live decision until capacity and redundancy margin are validated with facilities and operations. I would bring sales, service delivery, network, and management into a facts-based decision, then present options such as phasing, reducing density, moving racks, or delaying go-live. I would document the risk, owner, customer impact, and final decision.",
    tags: ["cooling", "go-live", "stakeholder management", "risk"],
  },
  {
    id: "hard-power-001",
    difficulty: "hard",
    topic: "live-site risk",
    type: "scenario_text",
    question:
      "During planned UPS maintenance, a vendor reports an abnormal test result. The schedule is tight and the site manager wants to continue. What should the PM do?",
    rubric: [
      "Pause and assess the abnormal result before continuing",
      "Follow MOP hold points and approved thresholds",
      "Involve responsible engineers, operations lead, and vendor technical lead",
      "Check whether redundancy or customer load is affected",
      "Use rollback or abort criteria if risk exceeds approval",
      "Document deviation, decision, and communication trail",
    ],
    sampleStrongAnswer:
      "I would stop at the hold point and ask the technical owners to assess the abnormal result against the MOP criteria. If redundancy or customer load is exposed beyond the approved threshold, we rollback or abort and escalate. Schedule pressure should not override uptime or safety, and the deviation must be documented.",
    tags: ["UPS", "MOP", "rollback", "uptime"],
  },
  {
    id: "hard-schedule-001",
    difficulty: "hard",
    topic: "project management",
    type: "scenario_text",
    question:
      "A contractor is behind schedule on cabling, but server delivery is already booked. What do you do?",
    rubric: [
      "Check critical path and deployment dependencies",
      "Reconfirm rack, power, cooling, cabling, network, and access readiness",
      "Request a credible recovery plan with owners and dates",
      "Resequence work or add approved resources where possible",
      "Communicate customer and go-live impact early",
      "Escalate if the committed date or SLA is threatened",
    ],
    sampleStrongAnswer:
      "I would validate the real schedule impact against the critical path, then confirm every dependency for server delivery. I would request a recovery plan, add resources or resequence if approved, and communicate risk early to service delivery and stakeholders. If go-live is threatened, I would escalate with options instead of hiding the delay.",
    tags: ["vendor delay", "critical path", "deployment"],
  },
  {
    id: "hard-incident-001",
    difficulty: "hard",
    topic: "operations",
    type: "scenario_text",
    question:
      "A planned maintenance activity causes an unexpected alarm in a live hall. The vendor says it is probably harmless. What should the PM do?",
    rubric: [
      "Treat the alarm as real until verified",
      "Pause work and follow escalation or EOP path if required",
      "Bring in operations and responsible engineers",
      "Assess impact to redundancy, load, and customer services",
      "Decide continue, rollback, or abort based on approved criteria",
      "Record timeline, actions, communications, and follow-up items",
    ],
    sampleStrongAnswer:
      "I would not accept 'probably harmless' as the basis to continue. I would pause, get operations and engineering to verify the alarm, check any impact to redundancy or customer load, and follow the MOP/EOP escalation path. The continue or rollback decision must use approved criteria and be documented.",
    tags: ["alarm", "incident response", "EOP"],
  },
  {
    id: "hard-sustainability-001",
    difficulty: "hard",
    topic: "sustainability",
    type: "scenario_text",
    question:
      "Leadership wants to raise cooling setpoints to improve PUE, but operations is concerned about a high-density customer zone. How should the PM handle the trade-off?",
    rubric: [
      "Frame sustainability and uptime as requirements to balance, not slogans",
      "Use data from environmental monitoring, rack density, and equipment limits",
      "Pilot or phase changes with clear rollback criteria",
      "Involve facilities, operations, customer delivery, and management",
      "Assess SLA, thermal margin, and customer impact",
      "Document decision, monitoring plan, and risk ownership",
    ],
    sampleStrongAnswer:
      "I would turn the request into a controlled change with measured data, not a blanket adjustment. We need rack-level thermal margin, customer density, equipment limits, monitoring, and rollback criteria. A pilot or phased change can improve efficiency without sacrificing uptime, but operations and management must own the risk decision.",
    tags: ["PUE", "cooling", "sustainability", "uptime"],
  },
  {
    id: "hard-commissioning-001",
    difficulty: "hard",
    topic: "project management",
    type: "scenario_text",
    question:
      "Integrated systems testing finds a generator failover issue one week before handover. The project team wants to accept it as a punch-list item. What do you do?",
    rubric: [
      "Assess whether the issue affects critical resilience or acceptance criteria",
      "Do not treat major failover risk as routine cosmetic punch-list work",
      "Engage commissioning agent, facilities, operations, vendor, and sponsor",
      "Define remediation, retest plan, owner, and schedule impact",
      "Communicate handover risk and options clearly",
      "Document acceptance decision and residual risk if any exception is approved",
    ],
    sampleStrongAnswer:
      "I would classify the finding against acceptance criteria and resilience impact. If failover is compromised, it should not be waved through as a minor punch item. I would align commissioning, facilities, operations, vendor, and sponsor on remediation, retest, schedule impact, and any formal exception with risk ownership.",
    tags: ["commissioning", "handover", "generator", "risk"],
  },
  {
    id: "hard-stakeholder-001",
    difficulty: "hard",
    topic: "customer / service delivery",
    type: "scenario_text",
    question:
      "A strategic customer insists on weekend access for installation, but security staffing and facilities escort coverage are not confirmed. What do you do?",
    rubric: [
      "Validate contractual commitment and business priority",
      "Confirm security, escort, access, permit, and safety requirements",
      "Do not bypass access controls to satisfy urgency",
      "Create options such as alternate slot, approved overtime, phased work, or remote prep",
      "Communicate customer impact and constraints early",
      "Escalate for resourcing or exception only through approved governance",
    ],
    sampleStrongAnswer:
      "I would confirm the customer commitment and then verify the operational prerequisites: security, escorts, access approvals, safety and permits. I would not bypass controls. I would offer options such as approved overtime, a different slot, or phased preparation, and escalate through governance if the business wants to fund or accept an exception.",
    tags: ["access control", "customer", "stakeholder management"],
  },
  {
    id: "hard-capacity-001",
    difficulty: "hard",
    topic: "customer / service delivery",
    type: "scenario_text",
    question:
      "A customer requests a last-minute increase from 4 kW to 9 kW per rack. Sales says the contract allows growth, but the hall was planned at lower density. What do you do?",
    rubric: [
      "Validate contracted entitlement separately from technical feasibility",
      "Check power, cooling, floor loading, rack layout, and upstream capacity",
      "Assess redundancy impact and whether the change affects other customers",
      "Coordinate facilities, operations, service delivery, network, and commercial owners",
      "Offer options such as phased growth, different rack placement, or revised density",
      "Document decision, constraints, customer communication, and risk ownership",
    ],
    sampleStrongAnswer:
      "I would separate the commercial promise from the physical capacity decision. The team needs to confirm power, cooling, redundancy, floor loading, and any effect on other customers before accepting the higher rack density. I would present options such as phased growth, relocation to a more suitable zone, or a revised deployment plan, then document the risk and customer communication.",
    tags: ["capacity", "rack density", "power", "cooling"],
  },
  {
    id: "hard-network-001",
    difficulty: "hard",
    topic: "customer / service delivery",
    type: "scenario_text",
    question:
      "The racks are installed and powered, but cross-connect delivery is delayed by a carrier. The customer wants to begin go-live testing anyway. How do you manage the situation?",
    rubric: [
      "Confirm which tests can proceed without the carrier connection",
      "Identify critical path impact and dependencies for full go-live",
      "Coordinate carrier, network, service delivery, customer, and site access teams",
      "Create a recovery plan with dates, owners, and escalation path",
      "Communicate partial-readiness versus production-readiness clearly",
      "Avoid declaring go-live complete until required connectivity is validated",
    ],
    sampleStrongAnswer:
      "I would define what is truly ready and what is blocked. Some local installation checks may continue, but production go-live cannot be claimed until required connectivity is delivered and validated. I would escalate with the carrier and network owners, publish a recovery plan, and keep the customer informed on partial readiness versus full service readiness.",
    tags: ["cross-connect", "network", "go-live", "service delivery"],
  },
  {
    id: "hard-security-001",
    difficulty: "hard",
    topic: "operations",
    type: "scenario_text",
    question:
      "A senior executive asks you to let an unbadged vendor enter a secure data hall to avoid delaying a critical repair. The operations lead objects. What should you do?",
    rubric: [
      "Do not bypass physical security because of seniority or urgency",
      "Validate the repair urgency and operational impact",
      "Follow approved access, escort, identity, and permit requirements",
      "Escalate through the proper security and operations governance path",
      "Offer compliant alternatives such as approved escort coverage or rescheduling",
      "Document the request, decision, exception path if any, and risk owner",
    ],
    sampleStrongAnswer:
      "I would treat access control as part of site resilience, not an administrative obstacle. I would confirm the repair urgency, then work through approved identity, escort, permit, and security exception processes. If leadership wants an exception, it must go through the proper governance path with explicit risk ownership, not an informal override.",
    tags: ["physical security", "access control", "governance"],
  },
  {
    id: "hard-water-001",
    difficulty: "hard",
    topic: "sustainability",
    type: "scenario_text",
    question:
      "A water-saving cooling mode can reduce WUE during dry months, but facilities warns it narrows thermal margin during peak IT load. How do you decide whether to use it?",
    rubric: [
      "Balance water efficiency with uptime and thermal reliability",
      "Use measured load, weather, humidity, and equipment operating data",
      "Define operating limits, monitoring, alarms, and rollback criteria",
      "Pilot during lower-risk conditions before broader rollout",
      "Include facilities, operations, sustainability, and customer impact owners",
      "Document decision criteria and residual risk ownership",
    ],
    sampleStrongAnswer:
      "I would not approve the mode just because it improves WUE. We need data on load, weather, humidity, equipment limits, and thermal margin. I would propose a controlled pilot with monitoring and rollback criteria, then expand only if facilities and operations agree the resilience margin remains acceptable.",
    tags: ["WUE", "sustainability", "cooling", "thermal margin"],
  },
  {
    id: "hard-budget-001",
    difficulty: "hard",
    topic: "project management",
    type: "scenario_text",
    question:
      "A project is over budget, and procurement suggests choosing a cheaper electrical subcontractor with limited live-site experience. The schedule is already tight. What is your recommendation?",
    rubric: [
      "Evaluate capability and critical-environment experience, not only price",
      "Assess safety, quality, uptime, warranty, and rework risk",
      "Compare total risk-adjusted cost and schedule impact",
      "Require technical review, references, supervision plan, and method controls",
      "Escalate trade-offs with clear options and recommendation",
      "Document procurement decision, assumptions, and risk ownership",
    ],
    sampleStrongAnswer:
      "I would not make a live-site electrical decision on lowest price alone. The cheaper option needs technical qualification, references, supervision, method controls, and risk assessment. I would present the risk-adjusted cost and schedule trade-off to sponsors, including the cost of rework, safety exposure, and uptime risk.",
    tags: ["budget", "procurement", "vendor risk", "live-site"],
  },
  {
    id: "hard-rca-001",
    difficulty: "hard",
    topic: "operations",
    type: "scenario_text",
    question:
      "After a short cooling incident, the immediate cause is restored quickly. A stakeholder says an RCA is unnecessary because there was no customer outage. How do you respond?",
    rubric: [
      "Explain that near misses still deserve structured learning",
      "Separate service impact from resilience or process weakness",
      "Capture timeline, alarms, decisions, contributing factors, and evidence",
      "Identify corrective and preventive actions with owners and dates",
      "Communicate proportionately without overstating the event",
      "Track action closure and update procedures if needed",
    ],
    sampleStrongAnswer:
      "I would argue for a proportionate post-incident review even without customer outage. A near miss can expose weaknesses in monitoring, maintenance, procedure, or response. We should capture the timeline and contributing factors, agree preventive actions with owners, and close them so the same weakness does not become a real outage later.",
    tags: ["RCA", "near miss", "incident response", "lessons learned"],
  },
  {
    id: "hard-change-001",
    difficulty: "hard",
    topic: "operations",
    type: "scenario_text",
    question:
      "A maintenance vendor asks to add an extra task during an approved change window because the equipment is already isolated. The task is related but not in the approved MOP. What do you do?",
    rubric: [
      "Recognize scope creep inside a live-site change window",
      "Check whether the added task changes risk, duration, isolation, or rollback",
      "Require approval through change governance before adding scope",
      "Consult operations and responsible engineers before any decision",
      "Defer the task if it is not urgent or properly assessed",
      "Document the request, decision, and reason",
    ],
    sampleStrongAnswer:
      "I would not add work simply because the opportunity exists. The new task may change risk, duration, rollback, or affected systems, so it needs technical assessment and change approval. Unless it is urgent and approved through governance, I would defer it to a separate planned activity.",
    tags: ["change control", "MOP", "scope", "risk"],
  },
  {
    id: "hard-sla-001",
    difficulty: "hard",
    topic: "customer / service delivery",
    type: "scenario_text",
    question:
      "A customer-facing SLA clock is running during a deployment issue, but the root cause may be with the customer's own equipment. How do you manage communication and ownership?",
    rubric: [
      "Focus first on service restoration and customer impact",
      "Keep evidence-based separation between fault isolation and blame",
      "Coordinate internal technical teams and the customer technical owner",
      "Communicate status, next steps, and decision points at agreed intervals",
      "Preserve logs, test results, timestamps, and handoff records",
      "Escalate commercial or SLA interpretation through account governance",
    ],
    sampleStrongAnswer:
      "I would keep the team focused on restoring service and isolating the fault with evidence. We should communicate clear status and next steps while preserving logs, timestamps, and test results. If ownership or SLA interpretation becomes commercial, I would escalate through account governance rather than letting technical teams argue blame during the incident.",
    tags: ["SLA", "customer communication", "fault isolation", "escalation"],
  },
  {
    id: "hard-procurement-001",
    difficulty: "hard",
    topic: "project management",
    type: "scenario_text",
    question:
      "A long-lead switchboard is delayed, and the vendor offers a temporary alternative with different protection settings. The project sponsor wants to keep the launch date. What should the PM do?",
    rubric: [
      "Treat the alternative as an engineering change, not a simple substitution",
      "Require technical review of protection, coordination, capacity, and compliance",
      "Assess commissioning, operations, warranty, documentation, and rollback impact",
      "Compare launch-date benefit against safety and resilience risk",
      "Escalate options with schedule, cost, and risk consequences",
      "Document approved decision and update affected drawings and procedures",
    ],
    sampleStrongAnswer:
      "I would require the temporary switchboard option to go through engineering and operations review. Different protection settings can affect selectivity, compliance, commissioning, and live-site risk. I would present launch-date, cost, and resilience trade-offs to the sponsor and proceed only with an approved technical and governance decision.",
    tags: ["procurement", "switchgear", "engineering change", "schedule"],
  },
  {
    id: "hard-migration-001",
    difficulty: "hard",
    topic: "live-site risk",
    type: "scenario_text",
    question:
      "A migration plan moves customer workloads between halls overnight. The technical teams disagree about whether rollback is still possible after the first batch. How do you manage the cutover?",
    rubric: [
      "Clarify no-go, hold, and rollback points before execution",
      "Confirm dependency maps, customer impact, and validation checks",
      "Require agreement from technical owners before passing irreversible steps",
      "Use phased batches with explicit success criteria",
      "Keep stakeholders informed at decision points",
      "Document deviations, approvals, and final service validation",
    ],
    sampleStrongAnswer:
      "I would not start until rollback points and irreversible steps are clearly agreed. The cutover should be phased with dependency maps, validation checks, hold points, and named decision owners. If rollback becomes impossible after a batch, everyone must understand and approve that threshold before crossing it.",
    tags: ["migration", "rollback", "cutover", "live-site"],
  },
  {
    id: "hard-generator-001",
    difficulty: "hard",
    topic: "live-site risk",
    type: "scenario_text",
    question:
      "A generator load test passes electrically, but fuel polishing records show contamination risk in one day tank. The vendor says the next scheduled test is months away. What do you do?",
    rubric: [
      "Recognize that pass results do not erase supporting-system risk",
      "Assess impact to generator availability, runtime, and redundancy",
      "Engage facilities, operations, fuel vendor, and generator specialist",
      "Define immediate mitigation, retest or inspection needs, and monitoring",
      "Escalate if resilience is below accepted threshold",
      "Update risk records, maintenance actions, and evidence trail",
    ],
    sampleStrongAnswer:
      "I would treat the fuel issue as a resilience risk even if the electrical test passed. Generator availability depends on fuel quality and runtime confidence. I would involve facilities, operations, and the fuel vendor to assess impact, define remediation and retest needs, and escalate if redundancy or emergency runtime is compromised.",
    tags: ["generator", "fuel", "load testing", "resilience"],
  },
  {
    id: "hard-bms-001",
    difficulty: "hard",
    topic: "operations",
    type: "scenario_text",
    question:
      "A BMS upgrade is planned during a low-risk window. Facilities says manual monitoring is available, but operations worries alarms may be unavailable for 30 minutes. How should the PM handle this?",
    rubric: [
      "Assess monitoring loss as an operational risk, not just an IT upgrade issue",
      "Confirm which alarms, controls, and trend data are unavailable",
      "Define manual watch, communication, staffing, and escalation coverage",
      "Set rollback or abort criteria if monitoring is not restored on time",
      "Notify stakeholders of temporary monitoring limitations",
      "Document the degraded-monitoring period and restoration validation",
    ],
    sampleStrongAnswer:
      "I would require the plan to explicitly manage the degraded monitoring period. We need to know which alarms and controls are unavailable, who is watching manually, how issues are escalated, and when rollback is triggered. The work can proceed only if operations accepts the temporary controls and restoration is validated.",
    tags: ["BMS", "monitoring", "alarms", "operations"],
  },
  {
    id: "hard-resource-001",
    difficulty: "hard",
    topic: "project management",
    type: "scenario_text",
    question:
      "Two critical activities need the same facilities engineer: a customer deployment readiness check and a planned maintenance review. Both teams say their work is urgent. How do you prioritize?",
    rubric: [
      "Clarify business impact, live-site risk, deadlines, and dependencies",
      "Identify whether either activity blocks safety, uptime, or customer commitment",
      "Look for sequencing, delegation, or additional qualified resource options",
      "Use transparent criteria instead of whoever escalates loudest",
      "Communicate prioritization and trade-offs to both stakeholder groups",
      "Escalate if resource conflict threatens approved commitments",
    ],
    sampleStrongAnswer:
      "I would compare the two activities against clear criteria: uptime risk, safety, customer impact, deadlines, and dependencies. Then I would look for delegation, sequencing, or another qualified engineer. If both commitments are truly at risk, I would escalate with options and trade-offs rather than letting the loudest stakeholder win.",
    tags: ["resource conflict", "prioritization", "stakeholder management"],
  },
];

const state = {
  view: "home",
  mode: null,
  quiz: null,
  flashcards: null,
  lastResult: null,
  timerId: null,
};

const app = document.querySelector("#app");

function icon(name) {
  const icons = {
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>',
    clipboard:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2h6l1 3h3v17H5V5h3z"/><path d="M9 5h6"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>',
    alert:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 10 18H2z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>',
    chart:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-3"/></svg>',
    cards:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="13" height="15" rx="2"/><path d="M8 3h10a2 2 0 0 1 2 2v12"/><path d="M8 11h5"/><path d="M8 15h4"/></svg>',
    calendar:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg>',
    study:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  };
  return `<span class="icon">${icons[name] || icons.next}</span>`;
}

function navigate(view, data = {}) {
  if (view !== "quiz") stopTimer();
  state.view = view;
  Object.assign(state, data);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stopTimer() {
  if (!state.timerId) return;
  clearInterval(state.timerId);
  state.timerId = null;
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("dcpm-results") || "[]");
  } catch {
    return [];
  }
}

function saveResult(result) {
  const history = [result, ...getHistory()].slice(0, 20);
  localStorage.setItem("dcpm-results", JSON.stringify(history));
}

function clearHistory() {
  localStorage.removeItem("dcpm-results");
  render();
}

function shuffle(items, randomizer = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(randomizer() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatDateKey(value = new Date()) {
  if (typeof value === "string") return value.slice(0, 10);
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function seededRandom(seed) {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return () => {
    hash += 0x6d2b79f5;
    let t = hash;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getQuestionPool(mode) {
  return QUESTIONS.filter((question) => question.difficulty === mode);
}

function getModeConfig(mode) {
  return mode === DAILY_DRILL_MODE.mode ? DAILY_DRILL_MODE : MODES[mode];
}

function getModeQuestionCount(mode) {
  return getQuestionPool(mode).length;
}

function getRecentQuestionIds(history, mode, attemptLimit = mode === "hard" ? 3 : 1) {
  return new Set(
    history
      .filter((result) => result.mode === mode && Array.isArray(result.questionIds))
      .slice(0, attemptLimit)
      .flatMap((result) => result.questionIds),
  );
}

function selectAttemptQuestions(mode, history = getHistory(), randomizer = Math.random) {
  const config = MODES[mode];
  const pool = getQuestionPool(mode);
  const recentIds = getRecentQuestionIds(history, mode);
  const freshPool = pool.filter((question) => !recentIds.has(question.id));
  const source = freshPool.length >= config.attemptSize ? freshPool : pool;

  return shuffle(source, randomizer).slice(0, config.attemptSize);
}

function selectDailyDrillQuestions(dateKey = formatDateKey()) {
  const selected = Object.entries(DAILY_DRILL_PLAN).flatMap(([mode, count]) =>
    shuffle(getQuestionPool(mode), seededRandom(`${dateKey}:${mode}`)).slice(0, count),
  );
  return shuffle(selected, seededRandom(`${dateKey}:daily-order`));
}

function getFlashcardPool(mode = "all") {
  if (mode === "all") return QUESTIONS;
  return getQuestionPool(mode);
}

function selectFlashcards(mode = "all", randomizer = Math.random, limit = FLASHCARD_DECK_SIZE) {
  return shuffle(getFlashcardPool(mode), randomizer).slice(0, limit);
}

function flashcardAnswer(question) {
  if (isScenario(question)) {
    return `Strong answer should cover: ${question.rubric.join("; ")}`;
  }
  if (isMulti(question)) {
    return question.correctAnswers.join(", ");
  }
  return question.correctAnswer;
}

function flashcardDetail(question) {
  if (isScenario(question)) return question.sampleStrongAnswer;
  return question.explanation;
}

function questionsByIds(questionIds) {
  const wanted = new Set(questionIds);
  return QUESTIONS.filter((question) => wanted.has(question.id));
}

function createFlashcardSession(cards, mode = "all") {
  state.flashcards = {
    mode,
    cards,
    index: 0,
    flipped: false,
    known: [],
    review: [],
    startedAt: new Date().toISOString(),
  };
  navigate("flashcards");
}

function startFlashcards(mode = "all") {
  const cards = selectFlashcards(mode);
  if (!cards.length) return;
  createFlashcardSession(cards, mode);
}

function currentFlashcard() {
  return state.flashcards.cards[state.flashcards.index];
}

function flipFlashcard() {
  state.flashcards.flipped = !state.flashcards.flipped;
  render();
}

function markFlashcard(outcome) {
  const session = state.flashcards;
  const card = currentFlashcard();
  if (outcome === "known") {
    session.known.push(card.id);
  } else {
    session.review.push(card.id);
  }
  if (session.index < session.cards.length - 1) {
    session.index += 1;
    session.flipped = false;
    render();
    return;
  }
  navigate("flashcard-results");
}

function flashcardSummary(session = state.flashcards) {
  return {
    total: session.cards.length,
    knownCount: session.known.length,
    reviewCount: session.review.length,
    reviewTopics: [...new Set(
      session.cards
        .filter((card) => session.review.includes(card.id))
        .map((card) => card.topic),
    )],
  };
}

function createQuiz(mode, questions, source = "standard", options = {}) {
  const timed = Boolean(options.timed);
  state.quiz = {
    mode,
    questions,
    source,
    dailyDateKey: options.dailyDateKey || null,
    index: 0,
    selected: [],
    textAnswer: "",
    submitted: false,
    responses: [],
    startedAt: new Date().toISOString(),
    timer: timed
      ? {
          enabled: true,
          secondsPerQuestion: options.secondsPerQuestion || MODES[mode].timedSeconds,
          questionId: null,
          questionStartedAt: null,
          expiresAt: null,
        }
      : null,
  };
  navigate("quiz", { mode });
}

function startQuiz(mode) {
  const questions = selectAttemptQuestions(mode);
  createQuiz(mode, questions);
}

function startDailyDrill(date = new Date()) {
  const dailyDateKey = formatDateKey(date);
  createQuiz(DAILY_DRILL_MODE.mode, selectDailyDrillQuestions(dailyDateKey), "daily", {
    dailyDateKey,
  });
}

function startTimedQuiz(mode) {
  if (!MODES[mode].timedSeconds) return startQuiz(mode);
  const questions = selectAttemptQuestions(mode);
  createQuiz(mode, questions, "timed", {
    timed: true,
    secondsPerQuestion: MODES[mode].timedSeconds,
  });
}

function startMissedQuiz(mode, questionIds) {
  const missedQuestions = questionsByIds(questionIds);
  const questions = shuffle(
    mode === DAILY_DRILL_MODE.mode
      ? missedQuestions
      : missedQuestions.filter((question) => question.difficulty === mode),
  );
  if (!questions.length) return;
  createQuiz(mode, questions, "missed");
}

function currentQuestion() {
  return state.quiz.questions[state.quiz.index];
}

function isScenario(question) {
  return question.type === "scenario_text";
}

function isMulti(question) {
  return question.type === "multi_select";
}

function normalizeSelection(selection) {
  return [...selection].sort().join("||");
}

function isCorrect(question, selection) {
  if (isScenario(question)) {
    return selection.length / question.rubric.length >= 0.7;
  }
  if (isMulti(question)) {
    return normalizeSelection(selection) === normalizeSelection(question.correctAnswers);
  }
  return selection[0] === question.correctAnswer;
}

function scoreFor(question, selection) {
  if (isScenario(question)) {
    return selection.length;
  }
  return isCorrect(question, selection) ? 1 : 0;
}

function maxScoreFor(question) {
  return isScenario(question) ? question.rubric.length : 1;
}

function formatDuration(totalSeconds) {
  const safeSeconds = Math.max(0, Math.ceil(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function ensureQuestionTimer(now = Date.now()) {
  const quiz = state.quiz;
  if (!quiz?.timer?.enabled) return;
  const question = currentQuestion();
  if (quiz.timer.questionId === question.id) return;
  quiz.timer.questionId = question.id;
  quiz.timer.questionStartedAt = now;
  quiz.timer.expiresAt = now + quiz.timer.secondsPerQuestion * 1000;
}

function getTimerRemainingMs(quiz = state.quiz, now = Date.now()) {
  if (!quiz?.timer?.enabled || !quiz.timer.expiresAt) return null;
  return Math.max(0, quiz.timer.expiresAt - now);
}

function getQuestionElapsedSeconds(quiz = state.quiz, now = Date.now()) {
  if (!quiz?.timer?.enabled || !quiz.timer.questionStartedAt) return null;
  const elapsed = Math.round((now - quiz.timer.questionStartedAt) / 1000);
  return Math.min(quiz.timer.secondsPerQuestion, Math.max(0, elapsed));
}

function syncTimerState(now = Date.now()) {
  const quiz = state.quiz;
  if (!quiz?.timer?.enabled) return;
  ensureQuestionTimer(now);
  if (!quiz.submitted && getTimerRemainingMs(quiz, now) === 0) {
    recordResponse({ timedOut: true, now });
  }
}

function updateTimerDom() {
  const quiz = state.quiz;
  if (!quiz?.timer?.enabled) return;
  const remainingMs = getTimerRemainingMs(quiz);
  if (remainingMs === null) return;
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const countdown = document.querySelector("[data-timer-countdown]");
  const bar = document.querySelector("[data-timer-bar]");
  const panel = document.querySelector("[data-timer-panel]");
  if (countdown) countdown.textContent = formatDuration(remainingSeconds);
  if (bar) {
    const pct = Math.max(0, Math.min(100, (remainingSeconds / quiz.timer.secondsPerQuestion) * 100));
    bar.style.width = `${pct}%`;
  }
  if (panel) {
    panel.classList.toggle("warning", remainingSeconds <= 60 && remainingSeconds > 30);
    panel.classList.toggle("danger", remainingSeconds <= 30);
  }
}

function scheduleTimerTick() {
  const quiz = state.quiz;
  if (!quiz?.timer?.enabled || quiz.submitted) {
    stopTimer();
    return;
  }
  if (state.timerId) return;
  state.timerId = setInterval(() => {
    if (!state.quiz?.timer?.enabled || state.view !== "quiz") {
      stopTimer();
      return;
    }
    const remainingMs = getTimerRemainingMs(state.quiz);
    if (remainingMs === 0 && !state.quiz.submitted) {
      stopTimer();
      syncTimerState();
      render();
      return;
    }
    updateTimerDom();
  }, 1000);
}

function setSelection(value) {
  const question = currentQuestion();
  if (state.quiz.submitted) return;
  if (isScenario(question) || isMulti(question)) {
    const exists = state.quiz.selected.includes(value);
    state.quiz.selected = exists
      ? state.quiz.selected.filter((item) => item !== value)
      : [...state.quiz.selected, value];
  } else {
    state.quiz.selected = [value];
  }
  render();
}

function setTextAnswer(value) {
  if (state.quiz.submitted) return;
  state.quiz.textAnswer = value;
}

function recordResponse({ timedOut = false, now = Date.now() } = {}) {
  const question = currentQuestion();
  if (state.quiz.submitted) return;
  const selection = timedOut ? [] : [...state.quiz.selected];
  state.quiz.submitted = true;
  state.quiz.responses.push({
    questionId: question.id,
    topic: question.topic,
    tags: question.tags,
    selected: selection,
    textAnswer: state.quiz.textAnswer,
    correct: timedOut ? false : isCorrect(question, selection),
    score: timedOut ? 0 : scoreFor(question, selection),
    maxScore: maxScoreFor(question),
    timedOut,
    timedSecondsUsed: state.quiz.timer?.enabled
      ? timedOut
        ? state.quiz.timer.secondsPerQuestion
        : getQuestionElapsedSeconds(state.quiz, now)
      : null,
  });
}

function submitAnswer() {
  if (!state.quiz.selected.length) return;
  recordResponse();
  stopTimer();
  render();
}

function nextQuestion() {
  stopTimer();
  if (state.quiz.index < state.quiz.questions.length - 1) {
    state.quiz.index += 1;
    state.quiz.selected = [];
    state.quiz.textAnswer = "";
    state.quiz.submitted = false;
    if (state.quiz.timer?.enabled) {
      state.quiz.timer.questionId = null;
      state.quiz.timer.questionStartedAt = null;
      state.quiz.timer.expiresAt = null;
    }
    render();
    return;
  }
  finishQuiz();
}

function finishQuiz() {
  const result = buildResult(state.quiz);
  saveResult(result);
  navigate("results", { lastResult: result });
}

function buildResult(quiz) {
  const totalScore = quiz.responses.reduce((sum, item) => sum + item.score, 0);
  const maxScore = quiz.responses.reduce((sum, item) => sum + item.maxScore, 0);
  const percentage = maxScore ? Math.round((totalScore / maxScore) * 100) : 0;
  const incorrect = quiz.responses.filter((item) => !item.correct).length;
  const weakTopics = getWeakTopics(quiz.responses);
  const timedResponses = quiz.responses.filter((item) => typeof item.timedSecondsUsed === "number");
  return {
    id: `result-${Date.now()}`,
    mode: quiz.mode,
    modeName: getModeConfig(quiz.mode).name,
    percentage,
    totalScore,
    maxScore,
    correctCount: quiz.responses.length - incorrect,
    incorrectCount: incorrect,
    totalQuestions: quiz.questions.length,
    questionIds: quiz.questions.map((question) => question.id),
    missedQuestionIds: quiz.responses
      .filter((response) => !response.correct)
      .map((response) => response.questionId),
    source: quiz.source,
    dailyDateKey: quiz.dailyDateKey,
    timed: Boolean(quiz.timer?.enabled),
    timedSecondsPerQuestion: quiz.timer?.secondsPerQuestion || null,
    timedOutCount: quiz.responses.filter((response) => response.timedOut).length,
    totalTimedSeconds: timedResponses.reduce((sum, item) => sum + item.timedSecondsUsed, 0),
    weakTopics,
    label: resultLabel(quiz.mode, percentage),
    recommendation: recommendation(quiz.mode, percentage, weakTopics),
    completedAt: new Date().toISOString(),
  };
}

function getWeakTopics(responses) {
  const byTopic = new Map();
  responses.forEach((response) => {
    const current = byTopic.get(response.topic) || { score: 0, max: 0, misses: 0 };
    current.score += response.score;
    current.max += response.maxScore;
    if (!response.correct) current.misses += 1;
    byTopic.set(response.topic, current);
  });
  return [...byTopic.entries()]
    .map(([topic, data]) => ({
      topic,
      percentage: Math.round((data.score / data.max) * 100),
      misses: data.misses,
    }))
    .filter((item) => item.percentage < 80 || item.misses > 0)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 5);
}

function average(values) {
  if (!values.length) return null;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function summarizeModeProgress(history, mode) {
  const results = history.filter((result) => result.mode === mode);
  if (!results.length) {
    return {
      mode,
      attempts: 0,
      latest: null,
      best: null,
      first: null,
      improvement: null,
      average: null,
    };
  }
  const scores = results.map((result) => result.percentage);
  const latest = results[0].percentage;
  const first = results[results.length - 1].percentage;
  return {
    mode,
    attempts: results.length,
    latest,
    best: Math.max(...scores),
    first,
    improvement: latest - first,
    average: average(scores),
  };
}

function summarizeWeakTopics(history, limit = 5) {
  const byTopic = new Map();
  history.forEach((result) => {
    (result.weakTopics || []).forEach((item) => {
      const current = byTopic.get(item.topic) || {
        attempts: 0,
        misses: 0,
        percentageTotal: 0,
      };
      current.attempts += 1;
      current.misses += item.misses || 0;
      current.percentageTotal += item.percentage;
      byTopic.set(item.topic, current);
    });
  });
  return [...byTopic.entries()]
    .map(([topic, data]) => ({
      topic,
      attempts: data.attempts,
      misses: data.misses,
      averagePercentage: Math.round(data.percentageTotal / data.attempts),
    }))
    .sort((a, b) => b.misses - a.misses || a.averagePercentage - b.averagePercentage)
    .slice(0, limit);
}

function dateKeyToUtcDay(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return Math.floor(Date.UTC(year, month - 1, day) / 86400000);
}

function utcDayToDateKey(dayNumber) {
  return new Date(dayNumber * 86400000).toISOString().slice(0, 10);
}

function getDailyDrillDateKeys(history) {
  return [...new Set(
    history
      .filter((result) => result.mode === DAILY_DRILL_MODE.mode || result.source === "daily")
      .map((result) => result.dailyDateKey || (result.completedAt ? formatDateKey(result.completedAt) : null))
      .filter(Boolean),
  )].sort();
}

function summarizeDailyStreak(history, todayKey = formatDateKey()) {
  const dateKeys = getDailyDrillDateKeys(history);
  const completedDays = new Set(dateKeys.map(dateKeyToUtcDay));
  const today = dateKeyToUtcDay(todayKey);
  let currentStreak = 0;
  for (let day = today; completedDays.has(day); day -= 1) {
    currentStreak += 1;
  }

  let bestStreak = 0;
  let activeStreak = 0;
  let previousDay = null;
  dateKeys.map(dateKeyToUtcDay).forEach((day) => {
    activeStreak = previousDay !== null && day === previousDay + 1 ? activeStreak + 1 : 1;
    bestStreak = Math.max(bestStreak, activeStreak);
    previousDay = day;
  });

  return {
    currentStreak,
    bestStreak,
    completedDays: dateKeys.length,
    lastDailyDateKey: dateKeys[dateKeys.length - 1] || null,
    nextDailyDateKey: utcDayToDateKey(today + 1),
  };
}

function summarizeProgress(history) {
  const scores = history.map((result) => result.percentage);
  const latest = history[0] || null;
  const previous = history[1] || null;
  return {
    attempts: history.length,
    latestScore: latest ? latest.percentage : null,
    bestScore: scores.length ? Math.max(...scores) : null,
    averageScore: average(scores),
    recentDelta: latest && previous ? latest.percentage - previous.percentage : null,
    byMode: Object.keys(MODES).map((mode) => summarizeModeProgress(history, mode)),
    weakTopics: summarizeWeakTopics(history),
    dailyStreak: summarizeDailyStreak(history),
  };
}

function resultLabel(mode, score) {
  if (mode === DAILY_DRILL_MODE.mode) {
    if (score < 50) return "Reset with fundamentals";
    if (score < 70) return "Needs a lighter review";
    if (score < 85) return "Solid daily practice";
    return "Strong daily readiness";
  }
  if (mode === "easy") {
    if (score < 50) return "Start with fundamentals";
    if (score < 70) return "Basic exposure, but not interview-ready";
    if (score < 85) return "Decent foundation";
    return "Ready for Medium Mode";
  }
  if (mode === "medium") {
    if (score < 50) return "Study operations basics";
    if (score < 70) return "Understands terms, needs practical judgment";
    if (score < 85) return "Good for bridge roles";
    return "Ready for Hardest Mode";
  }
  if (score < 50) return "Not ready for DC PM interviews";
  if (score < 70) return "Needs more scenario practice";
  if (score < 85) return "Interview-capable";
  if (score < 95) return "Strong candidate";
  return "Senior-level judgment";
}

function recommendation(mode, score, weakTopics) {
  const weak = weakTopics.length
    ? `Focus next on ${weakTopics.map((item) => titleCase(item.topic)).join(", ")}.`
    : "Keep practicing across power, cooling, operations, and stakeholder scenarios.";
  if (mode === DAILY_DRILL_MODE.mode) {
    if (score >= 70) return `${weak} Keep the daily drill going and use scored modes for deeper checks.`;
    return `${weak} Use flashcards or study topics before the next daily drill.`;
  }
  const nextMode = getModeConfig(mode).next;
  if (score >= 85 && nextMode) {
    return `${weak} You are ready to try ${getModeConfig(nextMode).name}.`;
  }
  if (score >= 70) return `${weak} Retake this mode once more before moving up.`;
  return `${weak} Use the study topics page before retrying this mode.`;
}

function titleCase(value) {
  return value
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function scoreValue(value) {
  return value === null ? "None" : `${value}%`;
}

function deltaValue(value) {
  if (value === null) return "None";
  if (value > 0) return `+${value} pts`;
  if (value < 0) return `${value} pts`;
  return "No change";
}

function deltaClass(value) {
  if (value === null || value === 0) return "";
  return value > 0 ? "trend-up" : "trend-down";
}

function shell(content) {
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="topbar-inner">
          <button class="brand btn-ghost" data-action="home" aria-label="Go home">
            <span class="brand-mark">DC</span>
            <span class="brand-text">
              <strong>Data Center PM Readiness</strong>
              <span>Quiz, study topics, and interview judgment practice</span>
            </span>
          </button>
          <nav class="nav-actions" aria-label="Main navigation">
            <button class="btn btn-ghost" data-action="daily">${icon("calendar")} Daily</button>
            <button class="btn btn-ghost" data-action="flashcards">${icon("cards")} Flashcards</button>
            <button class="btn btn-ghost" data-action="study">${icon("study")} Study</button>
            <button class="btn btn-ghost" data-action="history">${icon("chart")} Results</button>
          </nav>
        </div>
      </header>
      <main class="container">${content}</main>
    </div>
  `;
  bindGlobalActions();
}

function bindGlobalActions() {
  document.querySelectorAll("[data-action='home']").forEach((button) => {
    button.addEventListener("click", () => navigate("home"));
  });
  document.querySelectorAll("[data-action='study']").forEach((button) => {
    button.addEventListener("click", () => navigate("study"));
  });
  document.querySelectorAll("[data-action='daily']").forEach((button) => {
    button.addEventListener("click", () => startDailyDrill());
  });
  document.querySelectorAll("[data-action='flashcards']").forEach((button) => {
    button.addEventListener("click", () => startFlashcards());
  });
  document.querySelectorAll("[data-action='history']").forEach((button) => {
    button.addEventListener("click", () => navigate("history"));
  });
}

function render() {
  if (state.view === "quiz") return renderQuiz();
  if (state.view === "flashcards") return renderFlashcards();
  if (state.view === "flashcard-results") return renderFlashcardResults();
  if (state.view === "results") return renderResults(state.lastResult);
  if (state.view === "study") return renderStudy();
  if (state.view === "history") return renderHistory();
  return renderHome();
}

function renderHome() {
  const history = getHistory();
  const best = history.length
    ? Math.max(...history.map((item) => item.percentage))
    : null;
  const latest = history[0];
  const weakest = history.flatMap((item) => item.weakTopics || [])[0];
  shell(`
    <section class="hero">
      <div>
        <p class="eyebrow">Critical facilities interview prep</p>
        <h1>Practice the decisions a data-center PM has to defend.</h1>
        <p class="lead">
          Test fundamentals, live-site operations, and scenario judgment for data-center project manager,
          project engineer, critical facilities, infrastructure TPM, and service delivery interviews.
        </p>
      </div>
      <aside class="status-panel" aria-label="Progress summary">
        <h3>Progress Summary</h3>
        <div class="status-grid">
          <div class="metric"><span>Attempts</span><strong>${history.length}</strong></div>
          <div class="metric"><span>Best Score</span><strong>${best === null ? "None" : `${best}%`}</strong></div>
          <div class="metric"><span>Latest Mode</span><strong>${latest ? getModeConfig(latest.mode).shortName : "Start"}</strong></div>
          <div class="metric"><span>Weakest Topic</span><strong>${weakest ? titleCase(weakest.topic) : "None"}</strong></div>
        </div>
      </aside>
    </section>

    <section>
      <div class="section-head">
        <div>
          <h2>Choose A Mode</h2>
          <p>Each attempt is randomized. Easy and Medium score objective answers; Hardest uses a rubric checklist, with optional timed interview practice.</p>
        </div>
      </div>
      <div class="mode-grid">
        ${Object.entries(MODES)
          .map(([key, mode]) => modeCard(key, mode))
          .join("")}
      </div>
    </section>

    <section class="practice-band">
      <div>
        <p class="eyebrow">Fast review</p>
        <h2>Run a flashcard deck before your next scored attempt.</h2>
        <p>Flip through randomized prompts from the question bank, then mark each one as known or needing review.</p>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" data-start-daily>${icon("calendar")} Daily Drill</button>
        <button class="btn btn-primary" data-start-flashcards="all">${icon("cards")} Start Flashcards</button>
        <button class="btn" data-start-flashcards="hard">${icon("alert")} Hardest Only</button>
      </div>
    </section>
  `);
  document.querySelectorAll("[data-start-mode]").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.startMode));
  });
  document.querySelectorAll("[data-start-timed-mode]").forEach((button) => {
    button.addEventListener("click", () => startTimedQuiz(button.dataset.startTimedMode));
  });
  document.querySelectorAll("[data-start-flashcards]").forEach((button) => {
    button.addEventListener("click", () => startFlashcards(button.dataset.startFlashcards));
  });
  document.querySelectorAll("[data-start-daily]").forEach((button) => {
    button.addEventListener("click", () => startDailyDrill());
  });
}

function modeCard(key, mode) {
  const bankCount = getModeQuestionCount(key);
  const bankLabel = key === "hard" ? "scenario bank" : "question bank";
  return `
    <article class="card mode-card">
      <div class="mode-top">
        <span class="mode-icon">${icon(mode.icon)}</span>
        <span class="pill">${mode.attemptSize} per attempt</span>
      </div>
      <span class="pill">${bankCount} ${bankLabel}</span>
      ${mode.timedSeconds ? `<span class="pill">${formatDuration(mode.timedSeconds)} timed practice</span>` : ""}
      <h3>${mode.name}</h3>
      <p>${mode.description}</p>
      <ul class="topic-list">
        ${mode.topics.map((topic) => `<li>${topic}</li>`).join("")}
      </ul>
      <div class="card-actions">
        <button class="btn btn-primary" data-start-mode="${key}">${icon("play")} Start Quiz</button>
        ${
          mode.timedSeconds
            ? `<button class="btn" data-start-timed-mode="${key}">${icon("clock")} Timed Practice</button>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderQuiz() {
  const quiz = state.quiz;
  if (!quiz) return renderHome();
  syncTimerState();
  const question = currentQuestion();
  const progress = Math.round(((quiz.index + 1) / quiz.questions.length) * 100);
  shell(`
    <section class="quiz-layout">
      <article class="card quiz-card">
        <div class="progress-wrap">
          <div class="progress-meta">
            <span>${getModeConfig(quiz.mode).name}</span>
            <span>Question ${quiz.index + 1} of ${quiz.questions.length}</span>
          </div>
          <div class="progress" aria-label="Quiz progress"><span style="width:${progress}%"></span></div>
        </div>
        <p class="eyebrow">${titleCase(question.topic)} · ${question.type.replace("_", " ")}</p>
        <h1 class="question-text">${question.question}</h1>
        ${timerPanel()}
        ${questionInput(question)}
        ${quiz.submitted ? feedbackBlock(question) : ""}
        <div class="card-actions">
          ${
            quiz.submitted
              ? `<button class="btn btn-primary" data-next>${quiz.index === quiz.questions.length - 1 ? `${icon("chart")} Show Results` : `${icon("next")} Next Question`}</button>`
              : `<button class="btn btn-primary" data-submit ${quiz.selected.length ? "" : "disabled"}>${icon("next")} Submit Answer</button>`
          }
          <button class="btn" data-action="home">Exit</button>
        </div>
      </article>
      <aside class="card side-panel" aria-label="Quiz status">
        ${quizStatus()}
      </aside>
    </section>
  `);
  bindQuestionEvents(question);
  updateTimerDom();
  scheduleTimerTick();
}

function timerPanel() {
  const quiz = state.quiz;
  if (!quiz?.timer?.enabled) return "";
  const remainingSeconds = Math.ceil((getTimerRemainingMs(quiz) || 0) / 1000);
  const pct = Math.max(0, Math.min(100, (remainingSeconds / quiz.timer.secondsPerQuestion) * 100));
  return `
    <div class="timer-panel ${quiz.submitted && remainingSeconds === 0 ? "danger" : ""}" data-timer-panel>
      <div>
        <strong>${icon("clock")} Interview Timer</strong>
        <span>${quiz.submitted && remainingSeconds === 0 ? "Time expired" : "Answer before the timer ends"}</span>
      </div>
      <strong data-timer-countdown>${formatDuration(remainingSeconds)}</strong>
      <div class="timer-track" aria-label="Time remaining"><span data-timer-bar style="width:${pct}%"></span></div>
    </div>
  `;
}

function questionInput(question) {
  if (isScenario(question)) {
    return `
      <textarea class="text-answer" data-text-answer placeholder="Draft your interview answer here. Then check the rubric points you covered." ${state.quiz.submitted ? "disabled" : ""}>${state.quiz.textAnswer}</textarea>
      <div class="rubric" aria-label="Self-scoring rubric">
        ${question.rubric
          .map(
            (point, index) => `
              <label>
                <input type="checkbox" value="${point}" ${state.quiz.selected.includes(point) ? "checked" : ""} ${state.quiz.submitted ? "disabled" : ""} />
                <span>${index + 1}. ${point}</span>
              </label>
            `,
          )
          .join("")}
      </div>
    `;
  }
  const note = isMulti(question)
    ? '<p class="multi-note">Select every answer that applies.</p>'
    : "";
  return `
    ${note}
    <div class="answers">
      ${question.options
        .map((option, index) => answerButton(question, option, index))
        .join("")}
    </div>
  `;
}

function answerButton(question, option, index) {
  const selected = state.quiz.selected.includes(option);
  const submitted = state.quiz.submitted;
  const correct = isMulti(question)
    ? question.correctAnswers.includes(option)
    : question.correctAnswer === option;
  const resultClass = submitted
    ? correct
      ? "correct"
      : selected
        ? "incorrect"
        : ""
    : selected
      ? "selected"
      : "";
  return `
    <button class="answer-option ${resultClass}" data-answer="${encodeURIComponent(option)}" ${submitted ? "disabled" : ""}>
      <span class="choice-mark">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    </button>
  `;
}

function feedbackBlock(question) {
  const response = state.quiz.responses[state.quiz.responses.length - 1];
  if (isScenario(question)) {
    const percent = Math.round((response.score / response.maxScore) * 100);
    return `
      <div class="feedback ${percent >= 70 ? "good" : "bad"}">
        <strong>${response.timedOut ? "Time expired. " : ""}Rubric score: ${response.score} of ${response.maxScore} (${percent}%).</strong>
        <div class="sample-answer">
          <strong>Sample strong answer</strong>
          <p>${question.sampleStrongAnswer}</p>
        </div>
      </div>
    `;
  }
  return `
    <div class="feedback ${response.correct ? "good" : "bad"}">
      <strong>${response.correct ? "Correct." : "Not quite."}</strong>
      <p>${question.explanation}</p>
    </div>
  `;
}

function quizStatus() {
  const completed = state.quiz.responses.length;
  const earned = state.quiz.responses.reduce((sum, item) => sum + item.score, 0);
  const possible = state.quiz.responses.reduce((sum, item) => sum + item.maxScore, 0);
  const liveScore = possible ? `${Math.round((earned / possible) * 100)}%` : "Pending";
  const timerRows = state.quiz.timer?.enabled
    ? `
      <div><dt>Practice Type</dt><dd>Timed</dd></div>
      <div><dt>Time Limit</dt><dd>${formatDuration(state.quiz.timer.secondsPerQuestion)}</dd></div>
    `
    : "";
  return `
    <h3>Attempt Status</h3>
    <dl>
      <div><dt>Answered</dt><dd>${completed}/${state.quiz.questions.length}</dd></div>
      <div><dt>Current Score</dt><dd>${liveScore}</dd></div>
      <div><dt>Mode</dt><dd>${getModeConfig(state.quiz.mode).shortName}</dd></div>
      <div><dt>Pass Target</dt><dd>${getModeConfig(state.quiz.mode).threshold}%</dd></div>
      ${timerRows}
    </dl>
  `;
}

function bindQuestionEvents(question) {
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      setSelection(decodeURIComponent(button.dataset.answer));
    });
  });
  document.querySelectorAll(".rubric input").forEach((input) => {
    input.addEventListener("change", () => setSelection(input.value));
  });
  const textarea = document.querySelector("[data-text-answer]");
  if (textarea) {
    textarea.addEventListener("input", (event) => setTextAnswer(event.target.value));
  }
  const submit = document.querySelector("[data-submit]");
  if (submit) submit.addEventListener("click", submitAnswer);
  const next = document.querySelector("[data-next]");
  if (next) next.addEventListener("click", nextQuestion);
}

function renderResults(result) {
  const effectiveResult = result || getHistory()[0];
  if (!effectiveResult) return renderHistory();
  const nextMode = getModeConfig(effectiveResult.mode).next;
  const missedCount = effectiveResult.missedQuestionIds?.length || 0;
  const timedSummary = effectiveResult.timed
    ? `
          <div class="metric"><span>Timed Out</span><strong>${effectiveResult.timedOutCount || 0}</strong></div>
          <div class="metric"><span>Total Time</span><strong>${formatDuration(effectiveResult.totalTimedSeconds || 0)}</strong></div>
      `
    : "";
  shell(`
    <section class="results-grid">
      <article class="card results-card">
        <p class="eyebrow">${effectiveResult.modeName}</p>
        <h1 class="question-text">Results Summary</h1>
        <div class="score-ring" style="--score:${effectiveResult.percentage}">
          <strong>${effectiveResult.percentage}%</strong>
        </div>
        <h2 class="result-label">${effectiveResult.label}</h2>
        <div class="status-grid">
          <div class="metric"><span>Correct</span><strong>${effectiveResult.correctCount}</strong></div>
          <div class="metric"><span>Incorrect</span><strong>${effectiveResult.incorrectCount}</strong></div>
          <div class="metric"><span>Points</span><strong>${effectiveResult.totalScore}/${effectiveResult.maxScore}</strong></div>
          <div class="metric"><span>Completed</span><strong>${formatDate(effectiveResult.completedAt).split(",")[0]}</strong></div>
          ${timedSummary}
        </div>
        <div class="card-actions" style="margin-top:18px">
          <button class="btn btn-primary" data-retry="${effectiveResult.mode}">${icon("play")} Retry</button>
          ${
            missedCount
              ? `<button class="btn" data-retry-missed="${effectiveResult.id}">${icon("next")} Retry Missed (${missedCount})</button>`
              : ""
          }
          ${nextMode ? `<button class="btn" data-start-mode="${nextMode}">${icon("next")} Try ${getModeConfig(nextMode).shortName}</button>` : ""}
          <button class="btn" data-action="study">${icon("study")} Study Topics</button>
        </div>
      </article>
      <article class="card results-card">
        <h2>Weak Topics</h2>
        <p class="lead">${effectiveResult.recommendation}</p>
        <div class="weak-list">
          ${
            effectiveResult.weakTopics.length
              ? effectiveResult.weakTopics
                  .map(
                    (item) => `
                      <div class="weak-topic">
                        <strong>${titleCase(item.topic)}</strong>
                        <span>${item.percentage}% topic score · ${item.misses} missed or partial answer${item.misses === 1 ? "" : "s"}</span>
                      </div>
                    `,
                  )
                  .join("")
              : '<div class="empty-state"><p>No weak topics in this attempt.</p></div>'
          }
        </div>
      </article>
    </section>
  `);
  document.querySelectorAll("[data-retry]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.retry === DAILY_DRILL_MODE.mode) {
        startDailyDrill(effectiveResult.dailyDateKey || new Date());
        return;
      }
      startQuiz(button.dataset.retry);
    });
  });
  document.querySelectorAll("[data-retry-missed]").forEach((button) => {
    button.addEventListener("click", () => {
      const historyResult = getHistory().find((item) => item.id === button.dataset.retryMissed);
      const selectedResult = historyResult || effectiveResult;
      startMissedQuiz(selectedResult.mode, selectedResult.missedQuestionIds || []);
    });
  });
  document.querySelectorAll("[data-start-mode]").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.startMode));
  });
}

function renderFlashcards() {
  const session = state.flashcards;
  if (!session) return renderHome();
  const card = currentFlashcard();
  const progress = Math.round(((session.index + 1) / session.cards.length) * 100);
  const modeLabel = session.mode === "all" ? "All Topics" : MODES[session.mode].name;
  shell(`
    <section class="quiz-layout">
      <article class="card flashcard-card">
        <div class="progress-wrap">
          <div class="progress-meta">
            <span>${modeLabel} Flashcards</span>
            <span>Card ${session.index + 1} of ${session.cards.length}</span>
          </div>
          <div class="progress" aria-label="Flashcard progress"><span style="width:${progress}%"></span></div>
        </div>
        <div class="flashcard-surface ${session.flipped ? "flipped" : ""}">
          <p class="eyebrow">${titleCase(card.topic)} · ${card.difficulty}</p>
          <h1 class="question-text">${card.question}</h1>
          ${
            session.flipped
              ? `
                <div class="flashcard-answer">
                  <strong>Answer</strong>
                  <p>${flashcardAnswer(card)}</p>
                  <strong>Why it matters</strong>
                  <p>${flashcardDetail(card)}</p>
                </div>
                <ul class="topic-list">
                  ${card.tags.map((tag) => `<li>${tag}</li>`).join("")}
                </ul>
              `
              : '<p class="lead">Think through the answer, then flip the card to compare against the expected points.</p>'
          }
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" data-flip-card>${session.flipped ? `${icon("next")} Hide Answer` : `${icon("cards")} Flip Card`}</button>
          <button class="btn" data-mark-card="review" ${session.flipped ? "" : "disabled"}>${icon("study")} Review</button>
          <button class="btn" data-mark-card="known" ${session.flipped ? "" : "disabled"}>${icon("next")} Know It</button>
          <button class="btn" data-action="home">Exit</button>
        </div>
      </article>
      <aside class="card side-panel" aria-label="Flashcard status">
        <h3>Session Status</h3>
        <dl>
          <div><dt>Reviewed</dt><dd>${session.known.length + session.review.length}/${session.cards.length}</dd></div>
          <div><dt>Known</dt><dd>${session.known.length}</dd></div>
          <div><dt>Review</dt><dd>${session.review.length}</dd></div>
          <div><dt>Deck</dt><dd>${modeLabel}</dd></div>
        </dl>
      </aside>
    </section>
  `);
  const flip = document.querySelector("[data-flip-card]");
  if (flip) flip.addEventListener("click", flipFlashcard);
  document.querySelectorAll("[data-mark-card]").forEach((button) => {
    button.addEventListener("click", () => markFlashcard(button.dataset.markCard));
  });
}

function renderFlashcardResults() {
  const session = state.flashcards;
  if (!session) return renderHome();
  const summary = flashcardSummary(session);
  const modeLabel = session.mode === "all" ? "All Topics" : MODES[session.mode].name;
  shell(`
    <section class="results-grid">
      <article class="card results-card">
        <p class="eyebrow">${modeLabel} Flashcards</p>
        <h1 class="question-text">Flashcard Summary</h1>
        <div class="status-grid">
          <div class="metric"><span>Total Cards</span><strong>${summary.total}</strong></div>
          <div class="metric"><span>Known</span><strong>${summary.knownCount}</strong></div>
          <div class="metric"><span>Review</span><strong>${summary.reviewCount}</strong></div>
          <div class="metric"><span>Known Rate</span><strong>${Math.round((summary.knownCount / summary.total) * 100)}%</strong></div>
        </div>
        <div class="card-actions" style="margin-top:18px">
          <button class="btn btn-primary" data-start-flashcards="${session.mode}">${icon("cards")} Restart Deck</button>
          <button class="btn" data-start-flashcards="hard">${icon("alert")} Hardest Deck</button>
          <button class="btn" data-action="study">${icon("study")} Study Topics</button>
        </div>
      </article>
      <article class="card results-card">
        <h2>Review Topics</h2>
        <div class="weak-list">
          ${
            summary.reviewTopics.length
              ? summary.reviewTopics
                  .map(
                    (topic) => `
                      <div class="weak-topic">
                        <strong>${titleCase(topic)}</strong>
                        <span>Marked for review during this flashcard session.</span>
                      </div>
                    `,
                  )
                  .join("")
              : '<div class="empty-state"><p>No review topics in this deck.</p></div>'
          }
        </div>
      </article>
    </section>
  `);
  document.querySelectorAll("[data-start-flashcards]").forEach((button) => {
    button.addEventListener("click", () => startFlashcards(button.dataset.startFlashcards));
  });
}

function renderStudy() {
  shell(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Study Topics</p>
          <h1 class="question-text">Review the areas interviewers expect you to speak about.</h1>
          <p>Use these categories to close gaps after a quiz attempt, especially weak topics from your results.</p>
        </div>
      </div>
      <div class="study-grid">
        ${Object.entries(STUDY_TOPICS)
          .map(
            ([category, topics]) => `
              <article class="study-card">
                <h3>${category}</h3>
                <ul>${topics.map((topic) => `<li class="topic-badge">${topic}</li>`).join("")}</ul>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `);
}

function renderHistory() {
  const history = getHistory();
  const progress = summarizeProgress(history);
  shell(`
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Previous Results</p>
          <h1 class="question-text">Track readiness by mode and topic.</h1>
        </div>
        ${history.length ? '<button class="btn btn-danger" data-clear-history>Clear History</button>' : ""}
      </div>
      ${history.length ? progressDashboard(progress) : ""}
      ${
        history.length
          ? `<div class="history-list">
              ${history
                .map(
                  (item) => `
                    <article class="history-item">
                      <strong>${item.modeName}: ${item.percentage}% · ${item.label}</strong>
                      <span>${formatDate(item.completedAt)} · ${item.correctCount}/${item.totalQuestions} questions correct${item.timed ? ` · Timed out: ${item.timedOutCount || 0}` : ""} · Weak topics: ${
                        item.weakTopics.length
                          ? item.weakTopics.map((topic) => titleCase(topic.topic)).join(", ")
                          : "None"
                      }</span>
                      ${
                        item.missedQuestionIds?.length
                          ? `<div class="card-actions"><button class="btn" data-retry-missed="${item.id}">${icon("next")} Retry Missed (${item.missedQuestionIds.length})</button></div>`
                          : ""
                      }
                    </article>
                  `,
                )
                .join("")}
            </div>`
          : `<div class="empty-state">
              <p>No saved attempts yet. Complete a quiz to build your history.</p>
              <button class="btn btn-primary" data-start-mode="easy">${icon("play")} Start Easy Mode</button>
            </div>`
      }
    </section>
  `);
  document.querySelectorAll("[data-clear-history]").forEach((button) => {
    button.addEventListener("click", clearHistory);
  });
  document.querySelectorAll("[data-start-mode]").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.startMode));
  });
  document.querySelectorAll("[data-retry-missed]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = getHistory().find((item) => item.id === button.dataset.retryMissed);
      if (result) startMissedQuiz(result.mode, result.missedQuestionIds || []);
    });
  });
}

function progressDashboard(progress) {
  return `
    <div class="progress-dashboard">
      <div class="status-grid">
        <div class="metric"><span>Total Attempts</span><strong>${progress.attempts}</strong></div>
        <div class="metric"><span>Best Score</span><strong>${scoreValue(progress.bestScore)}</strong></div>
        <div class="metric"><span>Average Score</span><strong>${scoreValue(progress.averageScore)}</strong></div>
        <div class="metric"><span>Recent Change</span><strong class="${deltaClass(progress.recentDelta)}">${deltaValue(progress.recentDelta)}</strong></div>
      </div>
      <div class="dashboard-grid">
        <article class="dashboard-panel">
          <h3>Mode Progress</h3>
          <div class="mode-progress-list">
            ${progress.byMode.map((item) => modeProgressRow(item)).join("")}
          </div>
        </article>
        <article class="dashboard-panel">
          <h3>Recurring Weak Topics</h3>
          <div class="weak-list">
            ${
              progress.weakTopics.length
                ? progress.weakTopics
                    .map(
                      (item) => `
                        <div class="weak-topic">
                          <strong>${titleCase(item.topic)}</strong>
                          <span>${item.misses} misses across ${item.attempts} attempt${item.attempts === 1 ? "" : "s"} · ${item.averagePercentage}% average topic score</span>
                        </div>
                      `,
                    )
                    .join("")
                : '<div class="empty-state"><p>No recurring weak topics yet.</p></div>'
            }
          </div>
        </article>
      </div>
    </div>
  `;
}

function modeProgressRow(item) {
  return `
    <div class="mode-progress-row">
      <div>
        <strong>${MODES[item.mode].shortName}</strong>
        <span>${item.attempts} attempt${item.attempts === 1 ? "" : "s"}</span>
      </div>
      <div><span>Latest</span><strong>${scoreValue(item.latest)}</strong></div>
      <div><span>Best</span><strong>${scoreValue(item.best)}</strong></div>
      <div><span>Change</span><strong class="${deltaClass(item.improvement)}">${deltaValue(item.improvement)}</strong></div>
    </div>
  `;
}

render();
