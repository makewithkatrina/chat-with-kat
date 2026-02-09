// Katrina's Chatbot Response Data
// Structured for clarifying questions, session memory, and easy maintenance

const chatbotData = {
  // Session memory - tracks conversation state
  session: {
    discussedTopics: [],
    lastCategory: null,
    lastResponseId: null,  // Track last response for follow-up handling
    questionCount: 0
  },

  // Affirmative phrases that indicate "yes, tell me more"
  affirmativePhrases: [
    "yes", "yeah", "yep", "sure", "absolutely", "definitely", "please",
    "tell me", "tell me more", "go on", "continue", "i'd like that",
    "i would", "sounds good", "ok", "okay", "yes please", "sure thing",
    "of course", "why not", "let's hear it", "go ahead", "i'm interested",
    "that sounds interesting", "yes i would", "i'd love to", "please do"
  ],

  // Category definitions for clarifying questions
  // forceTriggers = keywords that ALWAYS trigger this category's clarifying question
  categories: {
    automation: {
      label: "Automation & Workflows",
      clarifyingQuestion: "Which automation story interests you?",
      responseIds: ["zapier-kudos", "airtable-crm", "airtable-recognition"],
      forceTriggers: ["automation project", "automation stories", "your automations"]
    },
    airtable: {
      label: "Airtable Projects",
      clarifyingQuestion: "Which Airtable project would you like to hear about?",
      responseIds: ["airtable-experience", "airtable-knowledge", "airtable-recognition", "airtable-crm"],
      forceTriggers: []
    },
    stanford: {
      label: "Stanford Experience",
      clarifyingQuestion: "Which Stanford story interests you?",
      responseIds: ["stanford-transformation", "airtable-knowledge", "airtable-recognition", "salesforce-learning"],
      forceTriggers: []
    },
    twilio: {
      label: "Twilio Experience",
      clarifyingQuestion: "Which Twilio story would you like to hear?",
      responseIds: ["twilio-photoshoot", "twilio-jobdesc", "twilio-erg"],
      forceTriggers: ["twilio experience", "at twilio", "twilio stories"]
    },
    technical: {
      label: "Technical/Tools Experience",
      clarifyingQuestion: "I love tinkering with tools, so my tech stack is pretty large. I can speak to Airtable and Zapier if you'd like. Or if you're curious about something else, check out my resume or shoot me an email or connect on LinkedIn and I'd be happy to answer.",
      responseIds: ["airtable-experience", "zapier-kudos"],
      forceTriggers: ["tech stack", "tools you use", "what tools", "tools do you", "technical skills", "technical experience", "software you use", "software experience", "systems you use"]
    },
    problemSolving: {
      label: "Problem Solving",
      clarifyingQuestion: "It wouldn't be called work without a problem to overcome. Which type of challenge or problem would you like me to elaborate more on?",
      responseIds: ["airtable-recognition", "airtable-crm", "twilio-photoshoot"],
      forceTriggers: ["problem you solved", "problem you faced", "problem solving", "biggest challenge", "challenge you faced", "challenge at work", "tough situation", "obstacle you"]
    },
    learning: {
      label: "Learning & Adoption",
      clarifyingQuestion: "Want to hear about learning new tools or driving adoption?",
      responseIds: ["salesforce-learning", "airtable-crm", "failure-accessibility"],
      forceTriggers: []
    },
    proud: {
      label: "Proudest Work",
      clarifyingQuestion: "Professional accomplishment or personal passion project?",
      responseIds: ["proud-professional", "proud-personal"],
      forceTriggers: ["what are you proud", "proudest", "most proud", "best work", "your accomplishment", "your achievement", "biggest accomplishment"]
    },
    strengths: {
      label: "Core Strengths",
      clarifyingQuestion: "My portfolio has given me opportunities to hone my six core strengths in:\n\n• Executive Project Management\n• Executive Communications\n• Systems Governance\n• Automations and Workflows\n• AI Prompting and Agents\n• Learning and Development\n\nWhich one would you like to hear more about?",
      responseIds: ["strengths-project-mgmt", "strengths-communication", "strengths-systems", "strengths-automations", "strengths-ai", "strengths-learning"],
      forceTriggers: ["strengths", "your strengths", "core strengths", "key strengths", "what are you good at", "your expertise", "what sets you apart", "specialize"]
    }
  },

  // All responses with metadata
  responses: {
    // ============================================
    // BEHAVIORAL - TRANSFORMATION & CHANGE
    // ============================================
    "stanford-transformation": {
      id: "stanford-transformation",
      title: "Leading Business Transformation at Stanford",
      categories: ["leadership", "stanford", "problemSolving"],
      companies: ["stanford"],
      keywords: ["transformation", "change initiative", "stanford project", "major project", "project you led", "stalled", "2 years", "executive", "led", "moscow", "5 whys"],
      relatedTopics: ["stakeholder-communication", "airtable-knowledge"],
      response: `In my current role at Stanford, I was asked to lead a project team focused on accelerating a business transformation initiative that had been stalled for over 2 years. Issues were documented and spread across different documents, competing priorities, and zero alignment on what was truly a "must" versus what was a "need."

After asking myself and, admittedly, my manager, "Why the hell are we stuck?," I took that same question directly to the team.

I held two separate hour-and-a-half working sessions with one member from each cross-functional team, where I ran a "5 Whys" session. I challenged all of us to examine our biases and focus on the true root causes of these business problems. This allowed me to map cross-functional gaps and quantify the actual business impact for a clear baseline.

Using the MoSCoW model, I created a priority roadmap that got 100% executive approval because everyone could finally see how their piece fit into the bigger picture.

We accelerated that 2+ year project to completion in 3 months. All critical initiatives moved to production as of December 2025.`,
    },

    // ============================================
    // BEHAVIORAL - AMBIGUITY
    // ============================================
    "twilio-photoshoot": {
      id: "twilio-photoshoot",
      title: "Navigating Ambiguity - Twilio Photo Shoot",
      categories: ["twilio", "problemSolving"],
      companies: ["twilio"],
      keywords: ["ambiguity", "limited information", "unclear", "vague", "uncertainty", "photo shoot", "careers site"],
      relatedTopics: ["twilio-jobdesc", "twilio-erg"],
      response: `I offset ambiguity by leaning into creativity and being specific about my approach, priorities, and constraints.

At Twilio, my manager asked me to lead an employee photoshoot to refresh our careers site for remote-first culture. That was all the information I got.

The photographer needed a detailed shot list 2 weeks in advance and spent 30 minutes per concept. With 8 hours on-site, I had to strategically plan what we could accomplish. After collaborating with our Recruitment Marketing lead, I presented six core concepts with reasoning and trade-offs, then gave my manager a clear action: review by X date, or we proceed with my plan but buffer time for variety.

My manager appreciated how I made their decision easy—a simple go-ahead or "zero in on this"—while keeping all teams aligned. The best part? We got diverse employee groups to participate that truly reflected our "Twilio Magic" culture.`,
    },

    // ============================================
    // BEHAVIORAL - FAILURE
    // ============================================
    "failure-accessibility": {
      id: "failure-accessibility",
      title: "Learning from Failure - Accessibility Oversight",
      categories: ["learning", "problemSolving"],
      companies: ["stanford"],
      keywords: ["fail", "failed", "failure", "mistake", "went wrong", "error", "salesforce training"],
      relatedTopics: ["salesforce-learning"],
      response: `My manager's priority was to drive wider cross-functional team adoption for using Salesforce. I was told there was some resistance from the org since the tool was perceived as too difficult to learn.

I recently discovered an AI product demo tool called Supademo that I advocated for. I thought it would be the best way to create an engaging "mini course" training with just enough relevant information for our instance's specific features and use cases, rather than relying on a lengthy, dense Google doc that would be difficult to maintain.

For the QA stage, I decided it would be best to get feedback from an existing colleague who uses Salesforce (to catch what required further clarity) and another colleague who had never used the platform but would be expected to (to confirm if the flow and explanations made sense). While the colleague who used Salesforce confirmed minor copy edits, the colleague who never used the platform had visual impairment issues. Due to some of the features—ripples on buttons and pulsing pointers—it triggered their vertigo and they informed me they couldn't continue reviewing.

The reason this is a fail to me is that while the tool was a win for AI features (auto-generate steps, synthetic AI-powered voices, and customized zoom and pan), I was caught up in the AI features and didn't consider all aspects of creating a training, especially accessibility issues outside of auditory processing. After receiving their feedback, I removed all animations. That small change allowed them to review the materials successfully and they applauded how I was able to make the training so easy to understand.

This was a great reminder for me to create a checklist for considerations and to consult at least one specialist skilled in this kind of work, such as our instructional designers, for feedback and guidance before getting started. Or, at minimum, a quick Google search.`,
    },

    // ============================================
    // BEHAVIORAL - INFLUENCE
    // ============================================
    "twilio-jobdesc": {
      id: "twilio-jobdesc",
      title: "Influencing Without Authority - Job Descriptions",
      categories: ["leadership", "twilio"],
      companies: ["twilio"],
      keywords: ["influence", "no authority", "buy-in", "persuade", "influencing without authority", "without authority", "job description", "inclusive"],
      relatedTopics: ["twilio-photoshoot", "twilio-erg"],
      response: `At Twilio, I was tasked with redesigning our job description template to be more inclusive and consistent, but I had zero authority over hiring managers who often write their job descriptions exactly as they want. I needed their buy-in to comply with the new changes for this project to be considered a success.

In collaboration with the legal team, I held a virtual roadshow showcasing the "before" and "after" of the new job description template and writing guide. I illustrated how it reduced compliance risks, to which the legal team spoke more to. Together we showed hiring managers how better templates would actually reduce back and forth with recruiters and reduce the chances of a candidate self-selecting out of applying for key roles we needed to fill.

Breaking down the ownership, highlighting the benefits, and leveraging the legal team as an advocate gave hiring managers a stronger sense of responsibility by speaking in a language I knew they would understand, driving a successful adoption.`,
    },

    // ============================================
    // BEHAVIORAL - COMPETING PRIORITIES
    // ============================================
    "twilio-erg": {
      id: "twilio-erg",
      title: "Managing Competing Priorities - ERG Leadership",
      categories: ["leadership", "twilio"],
      companies: ["twilio"],
      keywords: ["competing priorities", "multiple stakeholders", "juggling", "workload", "analysis paralysis", "paralysis", "manage competing", "erg", "volunteer"],
      relatedTopics: ["twilio-photoshoot", "twilio-jobdesc"],
      response: `As a volunteer lead for a Twilio ERG, I was asked to plan monthly lunch-and-learns. I set up a repeatable process for outreach, Zoom, and surveys.

During a busy recruiting season, I asked fellow chairs if we could rotate leadership responsibilities. I'd manage logistics, but if someone could handle two specific tasks monthly using my templates, it would help me stay effective in my day job.

I built a schedule showing each chair would only lead once every 2 months—no administrative burden, just a fun activity they could own and personalize.`,
    },

    // ============================================
    // BEHAVIORAL - LEARNING
    // ============================================
    "salesforce-learning": {
      id: "salesforce-learning",
      title: "Learning Salesforce Quickly",
      categories: ["learning", "stanford"],
      companies: ["stanford"],
      keywords: ["learn", "quickly", "new skill", "salesforce", "trailblazer", "new tool", "adoption"],
      relatedTopics: ["failure-accessibility", "airtable-crm"],
      response: `For me, the best way to learn is to play.

Curiosity has always been a huge part of my work and personal ethos, so when I was appointed as my current org's Salesforce Admin (sans certification), I knew I needed to know enough to help my team use it efficiently.

It's no secret that Salesforce is robust. My approach to learning the platform was first identifying what we wanted to log in the tool, how the team had used it before, and starting "small."

With Trailblazer, rather than going through a specific learning path, I pulled in and binged all modules related to the basics. Once I had the basics, I went into the demo environment to test creating accounts and opportunities and prototyping flows. Once I felt comfortable with the tool, I did an audit of all custom objects to confirm what we should keep and remove based on our current workflows.

While I am not an expert, I'm proud to say I learned enough to get our team excited about adopting the tool by breaking it down into simple steps and expectations of what we would start to use it for together.`,
    },

    // ============================================
    // SITUATIONAL - LIMITED RESOURCES
    // ============================================
    "airtable-recognition": {
      id: "airtable-recognition",
      title: "Building Recognition Platform with Zero Budget",
      categories: ["automation", "airtable", "stanford", "problemSolving"],
      companies: ["stanford"],
      keywords: ["limited resources", "budget", "scrappy", "recognition", "kudos", "zero cost", "zero budget", "employee recognition"],
      relatedTopics: ["zapier-kudos", "airtable-crm"],
      response: `My colleague and I pitched an employee recognition tool to Stanford leadership. They loved it but suggested Google Forms as an MVP. I decided to build something better with zero additional budget using Airtable.

Since we were already paying for Airtable, I wanted to demonstrate creative use of existing tools. I designed a form that fed an Airtable base automatically, added a dropdown for company values, and created a searchable database.

Leadership was impressed—we turned a static form into a dynamic dashboard that gave them visibility into team contributions while giving employees a place to track accomplishments. Our leaders actively encouraged using the "Kudos Board."

To me, limited resources mean "being scrappy, not crappy" to build something delightful.`,
    },

    // ============================================
    // SITUATIONAL - INEFFICIENT PROCESS
    // ============================================
    "airtable-crm": {
      id: "airtable-crm",
      title: "Building a Zero-Cost CRM in Airtable",
      categories: ["automation", "airtable", "stanford", "problemSolving"],
      companies: ["stanford"],
      keywords: ["inefficient", "process", "nobody cared", "proof of concept", "inbox", "crm", "leads", "email"],
      relatedTopics: ["airtable-recognition", "zapier-kudos"],
      response: `I lead with a proof of concept—it's easier for people to react to a working solution than debate hypotheticals.

Before my Stanford team adopted Salesforce, inbound leads required replying to a shared inbox to claim them. Leads got buried, missed, and team leads kept asking "who's handling what?"

I built a zero-cost Airtable CRM with automation: emails hit our inbox, Airtable extracted details and populated a table, and automated reminders flagged leads not contacted within 24 hours.

Result? A searchable CRM where colleagues self-assigned leads with clear visibility. We eliminated lost leads and inbox clutter. Once people saw how simple the new process was, adoption followed naturally.`,
    },

    // ============================================
    // TECHNICAL - ZAPIER WORKFLOW
    // ============================================
    "zapier-kudos": {
      id: "zapier-kudos",
      title: "Zapier Workflow",
      categories: ["automation", "airtable"],
      companies: ["stanford"],
      keywords: ["workflow", "zapier", "automation", "slack", "trigger", "walk me through", "building automations", "build", "automate"],
      relatedTopics: ["airtable-recognition", "airtable-crm"],
      response: `When I initially launched an employee recognition platform using Airtable, it included an Airtable form (that fed the table) where you'd select from a dropdown the values an employee embodied, their name, and the kudos you wanted to give (write-in). While some people used the form, it seemed most people were still giving kudos in Slack. To me, it was obvious that having to do an extra step, (filling in the form), was still the barrier to giving meaningful kudos because it was faster to just do it in Slack.

So I decided to meet people where they are.

I asked my boss, "What if there was a way to automatically capture kudos by simply saying a magic word in Slack? That word being 'kudos.'" He was interested, so I did a test run.

I first defined the trigger and desired outcome:
• Trigger: When someone mentions the word "kudos" in a specific Slack channel (New Mention)
• Outcome: Send a copy of that kudos to Airtable (Create a New Record)

Then I mapped the data flow:
Slack message → Zapier catches it → Extracts key info (who, what, when) → Sends to Airtable

Then I built and tested it:
• Created a locked Slack channel
• Tested with case-sensitive and case-insensitive mentions (Kudos, kudos)
• Adjusted whether I wanted to pull out more or less information

Once my test proved successful, I moved toward documentation and enablement:
• Drafted a simple guide for the team
• Set up a feedback channel for improvements and iterations

The result was that twice as many people were giving kudos as before, and we now had a dedicated channel just for kudos (versus kudos getting lost in our primary announcements channel).`,
    },

    // ============================================
    // TECHNICAL - KNOWLEDGE MANAGEMENT
    // ============================================
    "airtable-knowledge": {
      id: "airtable-knowledge",
      title: "Designing Knowledge Management Systems",
      categories: ["airtable", "stanford"],
      companies: ["stanford"],
      keywords: ["knowledge", "repository", "knowledge management", "documentation", "taxonomy", "systems thinking", "design", "knowledge center"],
      relatedTopics: ["airtable-recognition", "stakeholder-communication"],
      response: `I've designed several knowledge repositories in Airtable, and I've learned that the tech is the easy part. The true challenge is: 1) Understanding how your org currently thinks, and 2) The desired outcome of how you want people to navigate the information you present them.

When I launched Stanford Online's Knowledge Center, I used this process:

1. Understand the pain:
• What information are people searching for repeatedly? (To know what should be captured)
• Where do current knowledge gaps cause the most friction?

2. Design the taxonomy:
• "Keep it simple, stupid," so that people will actually use it—such as using language my team is already familiar with and focusing on core themes and categories that leave room to encompass multiple resources without being overwhelming.

3. Build governance from day one:
• Who owns updates? Who approves new content? And what's the easiest way to instill ownership without making it feel like an administrative burden?
• What's the review cadence?
• How do we sunset outdated info?
• Data integrity and looking for ways to automate where data is pulled from and how to reduce human error (Dropdown options versus write-ins, identifying duplications)

4. Make it intuitive:
• Different interfaces for different user types and learners
• Easy-to-read reference guides and visual hierarchy so people know where to start

What I ended up creating was a robust, searchable knowledge base. Omni, Airtable's native AI, also helped to address common questions, helping employees find the information they need even faster.`,
    },

    // ============================================
    // TECHNICAL - STAKEHOLDER COMMUNICATION
    // ============================================
    "stakeholder-communication": {
      id: "stakeholder-communication",
      title: "Stakeholder Communication Framework",
      categories: ["leadership", "stanford"],
      companies: ["stanford"],
      keywords: ["stakeholder", "communication", "how do you communicate", "keeping people informed", "updates", "communication style", "explain your process"],
      relatedTopics: ["stanford-transformation", "airtable-knowledge"],
      response: `I always value over-communication in different mediums to catch people where they are. And with most places in a hybrid work environment, communication across different mediums is a must.

For the business transformation project I led for Stanford, I leveraged this framework:

<strong>Before the project:</strong>
• Stakeholder mapping: Who needs to know the what, where, and why, and to what extent (for my sponsor, executive, leader, and project team)
• Mode of communication: Ensuring meeting recaps are emailed, confirmations in Slack saying to check email, and using Looms in place of a meeting or embedded in emails for a TLDR

<strong>During the project:</strong>
• Meeting agendas: Providing a brief overview of what's expected (working session, brainstorm), attendee roles, and if any prework is involved
• Status updates: Using a consistent format in my messaging (progress, visibility only, next steps, pivots) so people can scan quickly
• Transparency on risks: I flag potential problems early
• Visibility tools: Dashboards in Airtable, Asana, or Google Docs so stakeholders can self-serve

<strong>Showcasing the project org-wide:</strong>
• Explaining the logic: Broke down our assumptions, approach, findings, and recommendations (both free and paid, short-term versus long-term wins)

<strong>After the project:</strong>
• Providing periodic updates on the status of each build that went into production to keep the org abreast of the actual progress being made

Check out the "Leading Stanford Online's Business Transformation Strategy" project in my portfolio for more details.`,
    },

    // ============================================
    // GENERAL - PROUDEST WORK
    // ============================================
    "proud-professional": {
      id: "proud-professional",
      title: "Professional Accomplishment",
      categories: ["proud", "stanford"],
      companies: ["stanford"],
      keywords: ["professional accomplishment", "professional achievement", "work accomplishment"],
      relatedTopics: ["airtable-recognition", "proud-personal"],
      response: `Stanford's Employee Recognition platform. I'm a huge advocate for self-advocacy because that's something I had to teach myself growing up in a military-focused and Asian value-driven household. We often downplay our own accomplishments or don't realize our own impact, so being able to visibly see the impact that our peers and managers recognize is something I hope people can celebrate as they think about their own growth.`,
    },

    "proud-personal": {
      id: "proud-personal",
      title: "Personal Passion Project",
      categories: ["proud", "personal"],
      companies: [],
      keywords: ["personal accomplishment", "personal project", "passion project"],
      relatedTopics: ["hobbies", "proud-professional"],
      response: `My travel blog, <a href='https://seekwanderful.com' target='_blank' style='color: #059669; text-decoration: underline;'>seekwanderful.com</a>. It's a testament to my commitment to my personal excellence and a labor of love. Teaching myself WordPress, learning SEO, installing themes myself, setting up a domain and hosting platform, and writing all articles and editing all photos on my own: it's my art form and stories I'm so excited to share with the world. I've even landed on the first page of Google a few times, especially for my Taiwan guide!`,
    },

    // ============================================
    // GENERAL - ABOUT ME
    // ============================================
    "about-me": {
      id: "about-me",
      title: "About Katrina",
      categories: ["general"],
      companies: [],
      keywords: ["about", "who are you", "background", "introduce", "yourself", "tell me about you"],
      relatedTopics: ["strengths"],
      response: `On the surface, it may not be obvious what someone who has worked as a localization project manager, event manager, employer brand manager, and corporate engagement manager represents. But the common thread that weaves my portfolio career together is my ability to remove friction as a strategic operator. I embody the unique combination of strategic vision and tactical execution to design intuitive, people-first, scalable systems to turn ambiguity into momentum, to simplify complexity, and drive measurable impact for executive leaders and empower teams. In short, I own projects, clarify priorities, and build structures for success.

Regardless of industry or title, I am driven by my curiosity and commitment to operational excellence and how I can help organizations achieve it.`,
    },

    // ============================================
    // GENERAL - STRENGTHS
    // ============================================
    "strengths": {
      id: "strengths",
      title: "Key Strengths",
      categories: ["general", "strengths"],
      companies: [],
      keywords: ["strength", "good at", "specialize", "expertise", "skills", "what sets you apart"],
      relatedTopics: ["about-me", "stanford-transformation"],
      response: `My portfolio has given me opportunities to hone my six core strengths in:

• Executive Project Management
• Executive Communications
• Systems Governance
• Automations and Workflows
• AI Prompting and Agents
• Learning and Development

Which one would you like to hear more about?`,
    },

    // ============================================
    // STRENGTHS - INDIVIDUAL BREAKDOWNS
    // ============================================
    "strengths-automations": {
      id: "strengths-automations",
      title: "Automations and Workflows",
      categories: ["strengths"],
      companies: [],
      keywords: ["automations and workflows", "workflow strength"],
      relatedTopics: ["airtable-recognition", "zapier-kudos"],
      response: `In short, I've built a low-cost employee recognition platform integrating Slack + Zapier + Airtable, transforming lost recognition into a searchable achievement database mapped to company values.`,
      followUpOptions: [
        { id: "airtable-recognition", label: "How I came up with the idea" },
        { id: "zapier-kudos", label: "How I iterated with a Zap" }
      ]
    },

    "strengths-ai": {
      id: "strengths-ai",
      title: "AI Prompting and Agents",
      categories: ["strengths"],
      companies: [],
      keywords: ["ai prompting", "ai agents strength"],
      relatedTopics: ["ai-experience"],
      response: `My current hyperfixation is building and refining Airtable prompts and agents, including agents to find public LinkedIn URLs of leads and drafting customized outreach emails to them based on their areas of interest. If you'd like to hear more, ask me, "What experience do you have with AI?"`,
    },

    "strengths-systems": {
      id: "strengths-systems",
      title: "Systems Governance",
      categories: ["strengths"],
      companies: [],
      keywords: ["systems governance", "knowledge repository"],
      relatedTopics: ["airtable-experience"],
      response: `I've designed different dynamic knowledge repositories in Airtable (Resource Wikis, Source of Truth, Knowledge Hubs), for Sales and Marketing teams, with taxonomy and governance, searchable dashboards, and intuitive interfaces.`,
    },

    "strengths-learning": {
      id: "strengths-learning",
      title: "Learning and Development",
      categories: ["strengths"],
      companies: [],
      keywords: ["learning and development", "micro-learning", "training design"],
      relatedTopics: [],
      response: `In short, I've designed engaging micro-learning pathways in LMSs and with AI tools to support Sales and People Enablement. My current favorite tool to create interactive training is Supademo.`,
    },

    "strengths-project-mgmt": {
      id: "strengths-project-mgmt",
      title: "Executive Project Management",
      categories: ["strengths"],
      companies: [],
      keywords: ["project management", "executive project management"],
      relatedTopics: [],
      response: `In short, I have a large tech stack. I am currently using Airtable, Asana, ClickUp, and Salesforce for orchestrating complex project plans, sales prospecting, and maintaining visibility across stakeholders. I am also Airtable Admin Certified.`,
    },

    "strengths-communication": {
      id: "strengths-communication",
      title: "Executive Communication",
      categories: ["strengths"],
      companies: [],
      keywords: ["executive communication", "communication strength"],
      relatedTopics: [],
      response: `In short, I leverage different modes of communication (email, summaries, Slack, and Loom) and communication styles to serve matrix environments and audiences. In 2025, I earned my certification from Wes Kao's course, <a href="https://maven.com/wes-kao/executive-communication-influence" target="_blank" style="color: #233E32; text-decoration: underline;">Executive Communication & Influence for Senior ICs and Managers</a>.`,
    },

    // ============================================
    // GENERAL - HOBBIES
    // ============================================
    // ============================================
    // TECHNICAL - AIRTABLE EXPERIENCE
    // ============================================
    "airtable-experience": {
      id: "airtable-experience",
      title: "Airtable Experience",
      categories: ["airtable"],
      companies: ["stanford"],
      keywords: ["airtable experience", "tell me about airtable", "your airtable", "airtable background", "app builder"],
      relatedTopics: ["airtable-knowledge", "airtable-recognition", "airtable-crm"],
      response: `I LOVE Airtable and have been using it since 2018. Earlier in my career, I primarily built knowledge repositories for different organizations, including content libraries, event calendars, and leveraged the tool for project management tasks.

As Airtable has evolved into an AI app builder, so has my ability to create robust apps for people teams, including building an employee recognition platform, a CRM, a content engine, and elevated knowledge repositories with robust interfaces and relational databases for deeper insights and self-service capabilities.`,
    },

    // ============================================
    // TECHNICAL - AI EXPERIENCE
    // ============================================
    "ai-experience": {
      id: "ai-experience",
      title: "AI Experience",
      categories: ["automation"],
      companies: ["stanford"],
      keywords: ["ai experience", "ai workflow", "ai agent", "artificial intelligence", "ai automations", "experience with ai", "ai tools", "machine learning", "have with ai", "experience do you have"],
      relatedTopics: ["zapier-kudos", "airtable-crm"],
      response: `My experience with AI includes implementing AI workflow automations that move the needle past simply accelerating work to fundamentally operationalize how teams get work done. (And of course, vibe coding this chatbot!)

For example, instead of manually reviewing all inbound leads, qualifying them, triaging based on the respective Business Development Manager's domain, and writing follow-up emails, I set up an automation in Airtable that manages this entire workflow end-to-end.

The system works like this: An automation logs all inbound leads while an AI agent extracts key information—name, role, and interest area—and assigns a lead score. A second agent searches the web for their public LinkedIn profile and provides an analysis of who they are and what they care about. A third agent drafts a customized email based on their specific interests, and a final automation sends the approaching BD Manager a draft for review before sending.

Automating this workflow has given my team more time to focus on what's truly at stake: being able to cultivate genuine, value-driven relationships instead of drowning in admin tasks.`,
    },

    // ============================================
    // GENERAL - NEXT ROLE
    // ============================================
    "next-role": {
      id: "next-role",
      title: "What I'm Looking For",
      categories: ["general", "motivation"],
      companies: [],
      keywords: ["next role", "looking for", "seeking", "what do you want", "career goals", "ideal role", "looking for in your next"],
      relatedTopics: ["about-me", "strengths"],
      response: `In my next role, I'm seeking a new challenge that sits at the intersection of business strategy, AI innovation, and enablement.

I'd love to bring my strategic systems thinking and "figure it out" energy to a company that's pushing boundaries. As an anime nerd, I recently completed Love Through A Prism, and one of the challenges the art professor gives his students has a theme of "free" with the task of exploring the concept of being "free" through art. I am seeking a company that embraces that the future of work is remote and having the freedom to be creative and different in the work that you do, to try and fail to become better, and to create meaningful, impactful, and delightful experiences while having fun doing so.

For me, that looks like a company that is moving past AI curiosity to enthusiastic adoption for all.`,
    },

    // ============================================
    // GENERAL - WHY HIRE ME
    // ============================================
    "why-hire": {
      id: "why-hire",
      title: "Why You Should Hire Me",
      categories: ["general"],
      companies: [],
      keywords: ["why hire", "why should we", "hire you", "why you", "what makes you different", "why should we hire"],
      relatedTopics: ["strengths", "about-me"],
      response: `You should hire me if you want someone who takes calculated risks for big rewards, respectfully challenges ideas with alternative solutions, and has a bias for action, while always bringing everyone along for the journey.

I'm someone who will send you a Loom instead of scheduling another meeting, share a "spiky point of view" when I see a better path, and move fast without leaving people behind. If that sounds like the kind of energy you need, then I'm your person.`,
    },

    // ============================================
    // EXPERIENCE - LEADERSHIP OVERVIEW
    // ============================================
    "leadership-overview": {
      id: "leadership-overview",
      title: "Leadership Experience",
      categories: ["general"],
      companies: [],
      keywords: ["leadership experience", "leadership", "led", "manage", "change management"],
      relatedTopics: ["leadership-style", "stanford-transformation", "conflict-handling"],
      response: `Oh, that's a tough one since I've led projects across different contexts and industries. Check out my <a href='https://drive.google.com/file/d/1JGmj7lk8DNxcVkGraRFSJhL7cDDhqy87/view?usp=drive_link' target='_blank' style='color: #059669; text-decoration: underline;'>resume</a> for more details!`,
    },

    // ============================================
    // EXPERIENCE - LEADERSHIP STYLE
    // ============================================
    "leadership-style": {
      id: "leadership-style",
      title: "Leadership & Management Style",
      categories: ["leadership"],
      companies: [],
      keywords: ["leadership style", "management style", "how do you lead", "lead a team", "managing people", "your style"],
      relatedTopics: ["conflict-handling", "stanford-transformation"],
      response: `I lead with empathy, which, for me, means leading with humility. I can share wisdom without needing to be the "smartest person in the room." Everyone can agree that we're all human with our own struggles and personalities. However, that's easy to remember in calm moments, but harder to practice under pressure. When leading with and without authority, I believe you can always find harmony with people you may not see eye-to-eye with. Leading with empathy helps me cultivate working relationships, understand others' perspectives, and figure out how to bring out the best in others and myself.`,
    },

    // ============================================
    // EXPERIENCE - CONFLICT HANDLING
    // ============================================
    "conflict-handling": {
      id: "conflict-handling",
      title: "Handling Conflict",
      categories: ["leadership"],
      companies: ["stanford"],
      keywords: ["conflict", "disagreement", "handle conflict", "resolve conflict", "difficult conversation", "ted lasso", "pushback"],
      relatedTopics: ["leadership-style", "twilio-jobdesc"],
      response: `I am exposing myself, but much like Ted Lasso from the show, when faced with conflict, I like to approach it from a place of curiosity. I've found that most conflict stems from either failing to anticipate an objection or not explaining my point of view clearly enough. But more importantly, approaching conflict with curiosity gives me insight into boundaries and pressures I may not have complete oversight of, which helps me determine whether I need to pivot, pause, or push forward with my approach.

For example, when a colleague mentioned how difficult it was to filter our offerings from the rest of the University's catalog, I flagged the issue to our web team, who informed us that new website updates were on pause without a timeframe of when we could submit a new request. I then built a searchable catalog of our offerings in Airtable with tags and filters that matched how we speak to our products in under 20 minutes and at zero cost.

While it solved our search and discoverability problem, our Brand team raised the concern about the inability to apply brand colors to the tags due to Airtable's limitations, which went against our brand guidelines. I acknowledged their concern and reframed the conversation around trade-offs. I explained that by embedding the Airtable as an iframe on our branded website, we'd have a functional solution within our existing brand ecosystem.

Then I posed the question directly: Is it better to have a perfectly branded site that's non-functional, which is the current state, or a branded website with a functional component that may not have exact brand colors but solves the real problem of clients not being able to find what they need?

When I laid out the pros and cons this way, the team agreed. While I was happy with the outcome, what mattered most was that my curiosity-first approach revealed the Brand team's constraints and priorities, valuable information that informed how I will need to navigate with that team should something similar occur in the future.`,
    },

    // ============================================
    // GENERAL - HOBBIES
    // ============================================
    "hobbies": {
      id: "hobbies",
      title: "Hobbies & Fun",
      categories: ["personal"],
      companies: [],
      keywords: ["fun", "hobbies", "outside work", "travel", "personal", "funsies", "do for fun", "free time"],
      relatedTopics: ["proud-personal"],
      response: `I have quite a few hobbies, including traveling—17 countries and counting—that I'm attempting to chronicle on my travel blog, <a href='https://seekwanderful.com' target='_blank' style='color: #059669; text-decoration: underline;'>seekwanderful.com</a>. I'm also a big Asian pop culture fan. When I'm not reading fan fiction, I coordinate teams of volunteer voice actors to turn the best fan works into fully produced audiobooks.`,
    },

    // ============================================
    // FUN - JOKES & SILLY
    // ============================================
    "joke": {
      id: "joke",
      title: "Joke Time",
      categories: ["personal"],
      companies: [],
      keywords: ["joke", "funny", "make me laugh", "humor", "tell me a joke"],
      relatedTopics: ["hobbies"],
      response: `Why did the project manager bring a ladder to the meeting? Because they wanted to reach the next level of stakeholder alignment. ...I'll see myself out. But seriously, if you want to see my actual sense of humor, ask me about my hobbies or what I do for fun!`,
    },

    "compliment": {
      id: "compliment",
      title: "Thank You!",
      categories: ["personal"],
      companies: [],
      keywords: ["great", "awesome", "impressive", "amazing", "love this", "this is cool", "well done", "nice job", "you're great"],
      relatedTopics: ["about-me"],
      response: `That means a lot, thank you! I put a lot of care into everything I build, including this chatbot. If you'd like to continue the conversation beyond what's programmed here, feel free to reach out at makewithkatrina@gmail.com or connect with me on LinkedIn!`,
    },

    "inappropriate": {
      id: "inappropriate",
      title: "Nice Try",
      categories: ["personal"],
      companies: [],
      keywords: ["salary", "how much do you make", "are you single", "are you married", "how old are you", "your age", "where do you live", "your address", "phone number", "dating"],
      relatedTopics: [],
      response: `Ha! I appreciate the curiosity, but that's a little outside the scope of this interview. How about we stick to the fun stuff like my projects, skills, or what I binge-watch after work?`,
    },

    "sing": {
      id: "sing",
      title: "Hidden Talents",
      categories: ["personal"],
      companies: [],
      keywords: ["sing", "dance", "hidden talent", "superpower", "secret skill", "party trick"],
      relatedTopics: ["hobbies"],
      response: `Can I sing? Only in the car with the windows up. My real superpower is turning a chaotic spreadsheet into a beautiful Airtable dashboard in under 20 minutes. Less entertaining at karaoke, but way more useful at work.`,
    },

    "weather": {
      id: "weather",
      title: "Off Topic",
      categories: ["personal"],
      companies: [],
      keywords: ["weather", "what time", "what day", "where are you", "what city"],
      relatedTopics: ["hobbies"],
      response: `I wish I could help with that, but I'm more of a "build you a dashboard to track the weather" kind of person than a weather app. Try asking me about something I can actually nerd out on, like my projects or what I do for fun!`,
    }
  },

  // Fallback responses when no match is found
  fallbacks: [
    "That's a great question! I don't have a pre-written answer for that specific topic, but I'd love to discuss it further. Feel free to email me at makewithkatrina@gmail.com or connect on LinkedIn, and I'm happy to dive deeper!",
    "Hmm, I don't have that exact info programmed in, but that's exactly the kind of question I'd love to explore in a real conversation!",
    "Great question! While I might not have that specific response ready, you can reach me at makewithkatrina@gmail.com or connect on <a href=\"https://www.linkedin.com/in/katrinahoner/\" target=\"_blank\" style=\"color: #233E32; text-decoration: underline;\">LinkedIn</a>."
  ]
};

// Helper functions for the chatbot

/**
 * Reset session memory
 */
function resetSession() {
  chatbotData.session = {
    discussedTopics: [],
    lastCategory: null,
    questionCount: 0
  };
}

/**
 * Mark a topic as discussed and track as last response
 */
function markDiscussed(responseId) {
  if (!chatbotData.session.discussedTopics.includes(responseId)) {
    chatbotData.session.discussedTopics.push(responseId);
  }
  chatbotData.session.lastResponseId = responseId;
  chatbotData.session.questionCount++;
}

/**
 * Check if a message is an affirmative response (yes, sure, tell me more, etc.)
 */
function isAffirmativeResponse(message) {
  const lowerMessage = message.toLowerCase().trim();

  // Check for exact matches or phrases that start with affirmative
  for (const phrase of chatbotData.affirmativePhrases) {
    if (lowerMessage === phrase || lowerMessage.startsWith(phrase + " ") || lowerMessage.startsWith(phrase + ",") || lowerMessage.startsWith(phrase + "!")) {
      return true;
    }
  }

  // Also check if the message is very short and contains affirmative words
  if (lowerMessage.length < 20) {
    const affirmativeWords = ["yes", "yeah", "yep", "sure", "ok", "okay", "please", "absolutely", "definitely"];
    for (const word of affirmativeWords) {
      if (lowerMessage.includes(word)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Get the follow-up handler for the last response
 * Returns { hasFollowUp: boolean, isSingle: boolean, responseId: string|null, options: array|null }
 */
function getFollowUpHandler() {
  const lastResponseId = chatbotData.session.lastResponseId;
  if (!lastResponseId) {
    return { hasFollowUp: false, isSingle: false, responseId: null, options: null };
  }

  const lastResponse = chatbotData.responses[lastResponseId];
  if (!lastResponse) {
    return { hasFollowUp: false, isSingle: false, responseId: null, options: null };
  }

  // Check for single follow-up response
  if (lastResponse.followUpResponseId) {
    // Don't offer if already discussed
    if (hasBeenDiscussed(lastResponse.followUpResponseId)) {
      return { hasFollowUp: false, isSingle: false, responseId: null, options: null };
    }
    return {
      hasFollowUp: true,
      isSingle: true,
      responseId: lastResponse.followUpResponseId,
      options: null
    };
  }

  // Check for multiple follow-up options
  if (lastResponse.followUpOptions && lastResponse.followUpOptions.length > 0) {
    // Filter out already discussed options
    const availableOptions = lastResponse.followUpOptions.filter(opt => !hasBeenDiscussed(opt.id));

    if (availableOptions.length === 0) {
      return { hasFollowUp: false, isSingle: false, responseId: null, options: null };
    }

    if (availableOptions.length === 1) {
      // Only one option left, treat as single
      return {
        hasFollowUp: true,
        isSingle: true,
        responseId: availableOptions[0].id,
        options: null
      };
    }

    return {
      hasFollowUp: true,
      isSingle: false,
      responseId: null,
      options: availableOptions
    };
  }

  return { hasFollowUp: false, isSingle: false, responseId: null, options: null };
}

/**
 * Check if a topic has been discussed
 */
function hasBeenDiscussed(responseId) {
  return chatbotData.session.discussedTopics.includes(responseId);
}

/**
 * Get response by ID
 */
function getResponseById(id) {
  return chatbotData.responses[id] || null;
}

/**
 * Find matching responses for a query
 * Returns array of {id, score} sorted by relevance
 */
function findMatches(query) {
  const lowerQuery = query.toLowerCase();
  const matches = [];

  for (const [id, data] of Object.entries(chatbotData.responses)) {
    let score = 0;

    // Check keywords
    for (const keyword of data.keywords) {
      if (lowerQuery.includes(keyword)) {
        score += 10;
        // Bonus for exact phrase match
        if (lowerQuery === keyword) score += 5;
      }
    }

    // Check title words
    const titleWords = data.title.toLowerCase().split(' ');
    for (const word of titleWords) {
      if (word.length > 3 && lowerQuery.includes(word)) {
        score += 3;
      }
    }

    // Check company names
    for (const company of data.companies) {
      if (lowerQuery.includes(company)) {
        score += 5;
      }
    }

    if (score > 0) {
      matches.push({ id, score, data });
    }
  }

  return matches.sort((a, b) => b.score - a.score);
}

/**
 * Check if query matches any forced clarification triggers
 * Returns category key if found, null otherwise
 */
function checkForcedClarification(query) {
  const lowerQuery = query.toLowerCase();

  for (const [categoryKey, categoryData] of Object.entries(chatbotData.categories)) {
    if (categoryData.forceTriggers && categoryData.forceTriggers.length > 0) {
      for (const trigger of categoryData.forceTriggers) {
        if (lowerQuery.includes(trigger.toLowerCase())) {
          return categoryKey;
        }
      }
    }
  }
  return null;
}

/**
 * Determine if clarifying question is needed
 * Returns { needsClarification: boolean, category: string|null, options: array }
 */
function checkForClarification(matches, query = '') {
  // FIRST: Check for forced clarification triggers
  const forcedCategory = checkForcedClarification(query);
  if (forcedCategory) {
    const categoryData = chatbotData.categories[forcedCategory];
    const options = categoryData.responseIds
      .filter(id => !hasBeenDiscussed(id)) // Don't show already discussed options
      .map(id => ({
        id,
        label: chatbotData.responses[id]?.title || id
      }));

    // Only show clarification if there are 2+ options remaining
    if (options.length >= 2) {
      return {
        needsClarification: true,
        category: forcedCategory,
        question: categoryData.clarifyingQuestion,
        options
      };
    }
  }

  // THEN: Regular matching logic
  if (matches.length <= 1) {
    return { needsClarification: false, category: null, options: [] };
  }

  // Check if top matches are in the same category and scores are close
  const topScore = matches[0].score;
  const closeMatches = matches.filter(m => m.score >= topScore * 0.7);

  if (closeMatches.length >= 2) {
    // Find common category among close matches
    const categoryCounts = {};
    for (const match of closeMatches) {
      for (const cat of match.data.categories) {
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      }
    }

    // Find category with most matches
    let bestCategory = null;
    let bestCount = 0;
    for (const [cat, count] of Object.entries(categoryCounts)) {
      if (count > bestCount && chatbotData.categories[cat]) {
        bestCount = count;
        bestCategory = cat;
      }
    }

    if (bestCategory && bestCount >= 2) {
      const categoryData = chatbotData.categories[bestCategory];
      const options = closeMatches
        .filter(m => m.data.categories.includes(bestCategory))
        .filter(m => !hasBeenDiscussed(m.id)) // Don't show already discussed options
        .slice(0, 4)
        .map(m => ({
          id: m.id,
          label: m.data.title
        }));

      if (options.length >= 2) {
        return {
          needsClarification: true,
          category: bestCategory,
          question: categoryData.clarifyingQuestion,
          options
        };
      }
    }
  }

  return { needsClarification: false, category: null, options: [] };
}

/**
 * Get a random fallback response
 */
function getRandomFallback() {
  const index = Math.floor(Math.random() * chatbotData.fallbacks.length);
  return chatbotData.fallbacks[index];
}

/**
 * Get related topics that haven't been discussed yet
 */
function getUndiscussedRelated(responseId) {
  const response = chatbotData.responses[responseId];
  if (!response || !response.relatedTopics) return [];

  return response.relatedTopics
    .filter(id => !hasBeenDiscussed(id))
    .map(id => ({
      id,
      title: chatbotData.responses[id]?.title || id
    }));
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { chatbotData, resetSession, markDiscussed, hasBeenDiscussed, getResponseById, findMatches, checkForcedClarification, checkForClarification, getRandomFallback, getUndiscussedRelated, isAffirmativeResponse, getFollowUpHandler };
}
