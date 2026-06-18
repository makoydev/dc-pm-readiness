# Data Center PM Readiness Quiz App — Feature Spec & Development Checklist

## 1. App Purpose

A simple web app that tests whether a user knows enough about data-center project management, critical facilities, live-site operations, sustainability, and interview-level terminology.

The app should help someone preparing for roles such as:

- Data Center Project Manager
- Data Center Project Engineer
- Critical Facilities Project Manager
- Technical Project Manager, Infrastructure
- Data Center Service Delivery Manager
- M&E Project Manager, Data Center
- Data Center Operations / Live-Site PM

The goal is not to replace CDCP, Uptime, CDCS, or actual work experience. The goal is to check whether the user can speak confidently about the topics likely to appear in interviews.

---

## 2. Core Concept

The user chooses one of three modes:

1. **Easy Mode** — basic concepts and vocabulary
2. **Medium Mode** — practical project and operations knowledge
3. **Hardest Mode** — scenario-based interview simulations and live-site risk judgment

Each mode gives the user a score, feedback, and a list of weak topics to study.

---

## 3. Target Users

### Primary User

Someone transitioning into data-center roles from:

- Tech project management
- Software delivery management
- Mechanical engineering
- Facilities engineering
- Critical infrastructure operations
- Building services
- Sustainability / Green Mark-related work

### Secondary User

Someone preparing for interviews for:

- DC PM
- DC project engineer
- DC service delivery
- Critical facilities operations
- Infrastructure PM
- Cloud / AI infrastructure PM

---

## 4. Difficulty Modes

## 4.1 Easy Mode — Foundation Check

### Purpose

Tests whether the user understands basic data-center language.

### Best For

- Beginners
- People preparing before CDCP
- First 2–4 weeks of learning
- Users who need interview vocabulary

### Topics

- What a data center does
- Basic power path
- UPS basics
- Generator basics
- Cooling basics
- Hot aisle / cold aisle
- Racks and PDUs
- Fire suppression basics
- Physical security
- Cabling basics
- Redundancy: N, N+1, 2N
- PUE basics
- Difference between data-center engineer and data-center PM

### Question Types

- Multiple choice
- True / false
- Match term to definition
- Simple fill-in-the-blank

### Example Questions

#### Question 1
What does UPS usually stand for in a data center?

A. Universal Power Source  
B. Uninterruptible Power Supply  
C. Utility Protection System  
D. Unified Processing Server  

Correct answer: B

#### Question 2
What does N+1 redundancy mean?

A. No backup capacity  
B. One extra component beyond what is required  
C. Two fully independent systems  
D. One system shared by two data centers  

Correct answer: B

#### Question 3
PUE is mainly used to measure:

A. Network speed  
B. Physical security level  
C. Energy efficiency  
D. Number of servers per rack  

Correct answer: C

### Passing Score

- 70% = basic understanding
- 85% = ready for Medium Mode

---

## 4.2 Medium Mode — Practical DC PM Readiness

### Purpose

Tests whether the user can think like a junior/intermediate data-center PM or project engineer.

### Best For

- People applying for DC project engineer roles
- People applying for junior DC PM roles
- People with PMP who need DC-specific practical knowledge
- Users after CDCP or equivalent self-study

### Topics

- MOP, SOP, EOP
- Planned maintenance
- Change windows
- Vendor coordination
- Contractor management
- Site access control
- Risk assessment
- Escalation process
- Incident reporting
- Commissioning basics
- Handover documents
- Capacity planning basics
- Client/customer deployment
- Rack, power, cooling, and network readiness
- Green Mark for Data Centers concepts
- Basic live-site operations

### Question Types

- Multiple choice
- Multi-select
- Sequence ordering
- “What should the PM do next?”
- Short answer with rubric

### Example Questions

#### Question 1
A vendor wants to replace a component connected to a live power path. What should a DC PM check first?

A. Whether the vendor has a good reputation  
B. Whether there is an approved MOP, risk assessment, rollback plan, and change window  
C. Whether the finance team has paid the vendor  
D. Whether the customer has been sent a marketing update  

Correct answer: B

#### Question 2
Which document usually describes the step-by-step procedure for planned work in a critical environment?

A. SLA  
B. MOP  
C. NDA  
D. BOQ  

Correct answer: B

#### Question 3
Put these in a logical order for a planned live-site maintenance activity:

1. Execute work during approved window  
2. Review risk and rollback plan  
3. Prepare and approve MOP  
4. Notify stakeholders  
5. Close out and document results  

Expected order: 2 → 3 → 4 → 1 → 5

### Passing Score

- 70% = can discuss basic DC PM scenarios
- 85% = interview-ready for bridge roles
- 90%+ = ready for Hardest Mode

---

## 4.3 Hardest Mode — Interview Simulation / Live-Site Judgment

### Purpose

Tests whether the user can handle realistic data-center project-management scenarios where uptime, safety, customer impact, schedule, and technical risk conflict.

### Best For

- Data-center PM interviews
- Technical project manager interviews
- Critical facilities manager preparation
- Senior project engineer to PM transition
- People preparing for Uptime/CDCS-type thinking

### Topics

- Live-site risk management
- Critical incident response
- Project delay escalation
- Customer deployment failure
- Cooling capacity constraint
- Power upgrade risk
- Vendor underperformance
- Commissioning failure
- Change-management conflict
- Capacity planning trade-offs
- Sustainability vs uptime trade-offs
- Stakeholder communication under pressure
- Post-incident review
- Budget and schedule trade-offs
- Practical PM judgment

### Question Types

- Scenario-based written answers
- Timed interview-style questions
- Prioritization questions
- Risk ranking
- Root-cause analysis
- Escalation decision trees
- “Defend your decision” questions

### Example Scenario 1
A customer deployment is scheduled for Friday. On Wednesday, the facilities team reports that the assigned hall has enough rack space but cooling capacity is close to limit. Sales is pushing to proceed because the customer is strategic. Operations is uncomfortable. What do you do as the DC PM?

Strong answer should mention:

- Do not proceed blindly
- Validate actual cooling capacity and redundancy margin
- Involve facilities, operations, network, customer delivery, and management
- Check SLA/customer impact
- Identify alternatives: phase deployment, move racks, reduce density, add temporary cooling if approved, delay go-live
- Document risk and decision
- Escalate with clear options, not panic

### Example Scenario 2
During a planned UPS maintenance window, a vendor reports that one test result is abnormal. The schedule is tight and the site manager wants to continue. What should the PM do?

Strong answer should mention:

- Pause and assess risk
- Follow MOP hold points
- Involve responsible engineers and operations lead
- Check whether abnormal result affects redundancy or customer load
- Use rollback plan if needed
- Escalate if risk exceeds approved threshold
- Do not let schedule pressure override uptime/safety
- Document deviation and decision

### Example Scenario 3
A contractor is behind schedule on cabling, but server delivery is already booked. What do you do?

Strong answer should mention:

- Check critical path
- Reconfirm dependencies: rack, power, cooling, cabling, network, access
- Ask for recovery plan
- Add resources or resequence tasks if possible
- Communicate impact early
- Update schedule and risks
- Escalate if go-live date is threatened
- Avoid hiding delays until the last minute

### Passing Score

Hardest Mode should not only score right/wrong. It should grade by rubric:

- Risk awareness
- Uptime-first thinking
- Technical understanding
- Stakeholder management
- Escalation quality
- Communication clarity
- Practical decision-making

Suggested scoring:

- 0–49% = not ready for DC PM interview
- 50–69% = knows terms but lacks judgment
- 70–84% = decent interview readiness
- 85–94% = strong DC PM candidate
- 95–100% = senior-level judgment

---

## 5. Main Features

## 5.1 Home Page

### Required

- App title
- Short description
- Three mode cards: Easy, Medium, Hardest
- “Start Quiz” button per mode
- “View Study Topics” button
- “Review Previous Results” button if local storage is implemented

### Nice to Have

- Progress summary
- Streak counter
- Weakest topic display
- Recommended next mode

---

## 5.2 Quiz Engine

### Required

- Load questions by difficulty
- Randomize question order
- Show one question at a time
- Allow answer selection
- Show progress: question 3 of 20
- Submit answer
- Show correct/incorrect feedback
- Show explanation after answering
- Track score
- End quiz with results summary

### Nice to Have

- Timer per question
- Skip question
- Flag for review
- Retake wrong questions only
- Weighted scoring for scenario questions
- Difficulty adjustment based on performance

---

## 5.3 Question Types

### MVP Question Types

- Multiple choice
- True / false
- Multi-select

### Version 2 Question Types

- Ordering / sequencing
- Short answer
- Scenario answer with rubric
- Timed interview answer
- Flashcard mode

---

## 5.4 Results Page

### Required

Show:

- Final score
- Pass/fail label
- Difficulty mode
- Correct answers count
- Incorrect answers count
- Weak topics
- Recommended study topics
- Button to retry
- Button to try harder mode

### Example Result Labels

Easy Mode:

- 0–49%: Start with fundamentals
- 50–69%: Basic exposure, but not interview-ready
- 70–84%: Decent foundation
- 85–100%: Ready for Medium Mode

Medium Mode:

- 0–49%: Study operations basics
- 50–69%: Understands terms, needs practical judgment
- 70–84%: Good for bridge roles
- 85–100%: Ready for Hardest Mode

Hardest Mode:

- 0–49%: Not ready for DC PM interviews
- 50–69%: Needs more scenario practice
- 70–84%: Interview-capable
- 85–94%: Strong candidate
- 95–100%: Senior-level judgment

---

## 5.5 Study Topics Page

Organize topics by category.

### Power

- Utility feed
- Switchgear
- UPS
- Batteries
- PDUs
- Generators
- ATS/STS
- Redundancy
- Load testing

### Cooling

- Chillers
- CRAH / CRAC
- Cooling towers
- Chilled water
- Hot aisle / cold aisle
- Containment
- Airflow management
- Rack density

### Operations

- MOP
- SOP
- EOP
- Change window
- Planned maintenance
- Incident response
- Escalation
- Root-cause analysis
- Post-incident review

### Project Management

- Schedule
- Budget
- Risk register
- Stakeholder management
- Vendor coordination
- Critical path
- Procurement
- Handover
- Commissioning
- Change control

### Sustainability

- PUE
- Energy efficiency
- Water usage
- Green Mark for Data Centers
- Carbon efficiency
- Cooling optimization
- Sustainable operations

### Customer / Service Delivery

- SLA
- Capacity reservation
- Rack readiness
- Power availability
- Network connectivity
- Cross-connects
- Access control
- Go-live planning

---

## 6. Suggested Tech Stack

## Option A: Simple Frontend-Only MVP

Best for fastest build.

- React or Next.js
- TypeScript
- Tailwind CSS
- JSON question bank
- LocalStorage for results
- Vercel deployment

### Pros

- Fast to build
- No backend required
- Easy to deploy
- Good for private use

### Cons

- No real user accounts
- No server-side analytics
- Question bank visible in source if public

---

## Option B: Full Web App

Best if multiple users will use it.

- Next.js
- TypeScript
- Tailwind CSS
- Supabase or Firebase
- PostgreSQL question bank
- Auth
- Results dashboard
- Admin question editor

### Pros

- Supports user accounts
- Stores progress
- Easy to expand
- Can add admin panel

### Cons

- More complex
- More setup
- More maintenance

---

## 7. Suggested App Structure

```text
/data-center-pm-quiz-app
  /src
    /app
      page.tsx
      /quiz
        page.tsx
      /results
        page.tsx
      /study
        page.tsx
    /components
      ModeCard.tsx
      QuestionCard.tsx
      AnswerOption.tsx
      ProgressBar.tsx
      ResultsSummary.tsx
      TopicBadge.tsx
    /data
      questions.easy.json
      questions.medium.json
      questions.hard.json
    /lib
      scoring.ts
      shuffle.ts
      storage.ts
      questionTypes.ts
    /types
      quiz.ts
  README.md
```

---

## 8. Question Data Model

Use JSON first for MVP.

```json
{
  "id": "easy-power-001",
  "difficulty": "easy",
  "topic": "power",
  "type": "multiple_choice",
  "question": "What does UPS stand for in a data center?",
  "options": [
    "Universal Power Source",
    "Uninterruptible Power Supply",
    "Utility Protection System",
    "Unified Processing Server"
  ],
  "correctAnswer": "Uninterruptible Power Supply",
  "explanation": "A UPS provides temporary backup power and power conditioning when utility power fails or fluctuates.",
  "tags": ["UPS", "power", "fundamentals"]
}
```

For multi-select:

```json
{
  "id": "medium-ops-004",
  "difficulty": "medium",
  "topic": "operations",
  "type": "multi_select",
  "question": "Which items should usually be reviewed before live-site maintenance?",
  "options": [
    "Approved MOP",
    "Rollback plan",
    "Risk assessment",
    "Social media announcement",
    "Stakeholder notification"
  ],
  "correctAnswers": [
    "Approved MOP",
    "Rollback plan",
    "Risk assessment",
    "Stakeholder notification"
  ],
  "explanation": "Live-site maintenance should be controlled through approved procedures, risk review, rollback planning, and stakeholder communication.",
  "tags": ["MOP", "maintenance", "risk"]
}
```

For scenario rubric:

```json
{
  "id": "hard-live-site-001",
  "difficulty": "hard",
  "topic": "live-site risk",
  "type": "scenario_text",
  "question": "A cooling constraint is discovered two days before customer go-live. Sales wants to proceed. Operations wants to delay. What do you do?",
  "rubric": [
    "Validate actual cooling capacity and redundancy margin",
    "Involve facilities, operations, service delivery, and management",
    "Assess customer impact and SLA risk",
    "Prepare options such as phased deployment, relocation, reduced density, or delay",
    "Escalate with clear recommendation",
    "Document decision and risk ownership"
  ],
  "sampleStrongAnswer": "I would not proceed blindly. I would first validate the cooling capacity and redundancy margin with facilities, then assess customer and SLA impact. I would present options such as phased deployment, moving racks, reducing density, or delaying go-live. I would escalate with a clear risk statement and documented recommendation.",
  "tags": ["cooling", "go-live", "stakeholder management", "risk"]
}
```

---

## 9. Scoring Logic

## 9.1 Easy and Medium Modes

Simple scoring:

- Correct answer = 1 point
- Incorrect answer = 0 points
- Final score = correct answers / total questions × 100

## 9.2 Hardest Mode

Rubric scoring:

Each scenario has 5–8 expected points.

Example:

- Mentions risk validation = 1 point
- Mentions uptime/customer impact = 1 point
- Mentions stakeholder escalation = 1 point
- Mentions rollback or alternative plan = 1 point
- Mentions documentation = 1 point

For MVP, the user can self-score by checking boxes.

For later versions, an AI evaluator can grade short answers.

---

## 10. MVP Features Checklist

### Project Setup

- [ ] Create Git repository
- [ ] Create Next.js or React app
- [ ] Add TypeScript
- [ ] Add Tailwind CSS
- [ ] Set up basic routing
- [ ] Add deployment target such as Vercel

### Content

- [ ] Create Easy question bank
- [ ] Create Medium question bank
- [ ] Create Hardest scenario bank
- [ ] Add explanations to every question
- [ ] Add tags to every question
- [ ] Add study topic mapping

### UI

- [ ] Build home page
- [ ] Build mode selection cards
- [ ] Build quiz page
- [ ] Build question card
- [ ] Build answer options
- [ ] Build progress bar
- [ ] Build results page
- [ ] Build study topics page
- [ ] Add mobile responsive layout

### Quiz Logic

- [ ] Load questions by mode
- [ ] Shuffle questions
- [ ] Track current question
- [ ] Track selected answer
- [ ] Submit answer
- [ ] Show explanation
- [ ] Track score
- [ ] Calculate final result
- [ ] Identify weak topics
- [ ] Recommend next study topics

### Results

- [ ] Show score percentage
- [ ] Show pass/fail label
- [ ] Show weak areas
- [ ] Show recommended next mode
- [ ] Add retry button
- [ ] Save result to LocalStorage

### Quality

- [ ] Test Easy Mode
- [ ] Test Medium Mode
- [ ] Test Hardest Mode
- [ ] Test mobile view
- [ ] Test edge cases such as no answer selected
- [ ] Check spelling and terminology
- [ ] Review all explanations for accuracy

---

## 11. Version 2 Features Checklist

### User Progress

- [ ] Add user login
- [ ] Store results in database
- [ ] Add progress dashboard
- [ ] Show improvement over time
- [ ] Show weakest topics over multiple attempts

### Better Practice Tools

- [ ] Flashcard mode
- [ ] Wrong-answers-only mode
- [ ] Timed interview mode
- [ ] Mock interview mode
- [ ] Daily 10-question drill
- [ ] Study streaks

### Hardest Mode Improvements

- [ ] Add self-scoring rubric checklist
- [ ] Add sample strong answer
- [ ] Add sample weak answer
- [ ] Add AI grading option
- [ ] Add voice-answer practice
- [ ] Add interview feedback summary

### Admin Tools

- [ ] Add question editor
- [ ] Add topic manager
- [ ] Add difficulty manager
- [ ] Add question import/export
- [ ] Add question review status

---

## 12. Version 3 Ideas

- AI interview simulator
- Voice-based mock interview
- Data-center diagram labeling
- Power path simulation
- Cooling airflow mini-game
- MOP approval simulation
- Incident response simulation
- Job-specific interview packs
- CDCP prep mode
- Uptime ATS prep mode
- Green Mark for Data Centers study pack
- Singapore data-center interview pack

---

## 13. Recommended Initial Question Counts

For MVP:

| Mode | Question Count |
|---|---:|
| Easy | 50 questions |
| Medium | 50 questions |
| Hardest | 25 scenarios |

For each quiz attempt:

| Mode | Questions per Attempt |
|---|---:|
| Easy | 15 questions |
| Medium | 15 questions |
| Hardest | 5 scenarios |

---

## 14. Topic Coverage Checklist

### Easy Mode Topics

- [ ] What is a data center?
- [ ] UPS
- [ ] Generator
- [ ] PDU
- [ ] Rack
- [ ] Cooling
- [ ] Hot aisle / cold aisle
- [ ] Fire suppression
- [ ] Physical security
- [ ] Cabling
- [ ] N redundancy
- [ ] N+1 redundancy
- [ ] 2N redundancy
- [ ] PUE
- [ ] Basic PM role

### Medium Mode Topics

- [ ] MOP
- [ ] SOP
- [ ] EOP
- [ ] Planned maintenance
- [ ] Change window
- [ ] Risk assessment
- [ ] Vendor coordination
- [ ] Site safety
- [ ] Incident escalation
- [ ] Root-cause analysis
- [ ] Commissioning
- [ ] Handover
- [ ] Capacity planning
- [ ] Customer deployment
- [ ] Green Mark DC concepts

### Hardest Mode Topics

- [ ] Cooling capacity conflict
- [ ] Power maintenance risk
- [ ] Vendor delay
- [ ] Customer go-live delay
- [ ] Commissioning failure
- [ ] Incident during maintenance
- [ ] Stakeholder conflict
- [ ] SLA risk
- [ ] Budget vs uptime conflict
- [ ] Sustainability vs resilience trade-off
- [ ] Escalation under pressure
- [ ] Post-incident review

---

## 15. Suggested User Flow

1. User lands on home page
2. User chooses difficulty mode
3. App loads randomized questions
4. User answers one question at a time
5. App shows immediate feedback after each question
6. User finishes quiz
7. App shows score, weak topics, and recommendation
8. User can retry, move to harder mode, or study weak topics

---

## 16. Definition of Done for MVP

The MVP is done when:

- A user can choose Easy, Medium, or Hardest Mode
- Each mode loads its own questions
- The user can complete a quiz
- The app scores the quiz correctly
- The app shows explanations
- The app shows weak topics
- The app recommends what to study next
- The app works on mobile and desktop
- The app can be deployed and shared with another person

---

## 17. Build Priority

### Phase 1 — Basic Quiz

- Home page
- Mode selection
- Multiple-choice quiz
- Score page
- JSON question bank

### Phase 2 — Better Learning

- Explanations
- Weak topics
- Study page
- LocalStorage history

### Phase 3 — Interview Prep

- Hardest scenario mode
- Rubric scoring
- Sample strong answers
- Timed answer practice

### Phase 4 — Advanced

- Login
- Database
- AI answer grading
- Voice mock interview
- Admin question editor

---

## 18. Key Product Principle

The app should not only ask, “Do you know the definition?”

It should increasingly ask:

> “Can you make the right decision in a live, risky, stakeholder-heavy data-center situation?”

That is what separates someone who memorized terms from someone who can survive a real data-center PM interview.
