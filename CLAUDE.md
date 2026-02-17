# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A personal chatbot that lets hiring managers "interview" me by asking questions and receiving pre-written responses. It simulates a conversation with typing indicators and clarifying questions.

## Tech Stack

- **HTML/CSS/JavaScript** - Single page application
- **responses.js** - External file containing all Q&A content, categories, and matching logic
- **No backend** - Runs entirely in the browser
- **Hosted on GitHub Pages** - https://makewithkatrina.github.io/chat-with-kat/

## Current Features

- Chat interface with my photo as avatar
- 8 prompt card buttons for common interview questions (horizontal scroll on mobile, 4-column grid on desktop)
- Typing indicator animation for realistic feel
- Category-based clarifying questions with choice buttons (strengths, technical, problemSolving, proud, talent, boundary, etc.)
- Personality responses for off-topic/fun queries (jokes, compliments, greetings, goodbye, cats/dogs, singing, etc.)
- Boundary handling for inappropriate/personal questions with clarifying flow for ambiguous triggers
- Profanity/insult detection with firm but professional redirect
- AI/bot detection ("are you real?", "is this AI?") with transparent explanation
- Nonsense/gibberish input handling
- Job availability/logistics and salary/compensation redirects to email
- Collapsible history sidebar tracking questions asked (session-only, clears on page leave)
- Clickable history items that scroll to the relevant chat message
- "KAT CHAT" watermark in chat area that dynamically grows with content
- Mobile scroll indicator (animated chevron arrow)
- Fade gradient on right edge of prompt cards (mobile)

## Design

- **Fonts**: Alice (header title), Lora Regular (all other text) via Google Fonts
- **Color scheme**: Dark green gradient header (#233E32 → #2C2821), lined paper background (#f5f1eb)
- **Prompt cards**: Alternating #C3EED6 (mint) and #F1F2DE (cream)
- **Send button**: Dark green rounded square with upward arrow icon

## Key Files

- **index.html** - Main interface, all UI logic, sidebar, and styles
- **responses.js** - Response content, categories, matching logic, and helper functions
- **test-matching.html** - Test suite that validates keyword matching, clarification flows, and affirmative detection

### Response Matching Flow
1. User input → `processUserMessage()`
2. Check if affirmative response to follow-up → `isAffirmativeResponse()` + `getFollowUpHandler()`
3. Check forced category triggers → `checkForcedClarification()` (fires before regular matching)
4. Find keyword matches → `findMatches()` returns scored results using `lowerQuery.includes(keyword)`
5. Check for ambiguity → `checkForClarification()` may show choice buttons
6. Deliver response → `deliverResponse()` marks topic discussed, optionally shows followUpOptions as choice buttons

### Key Data Structures in responses.js

**Response object:**
```javascript
{
  id: "response-id",
  title: "Display Title",
  categories: ["category1", "category2"],
  companies: ["stanford", "twilio"],
  keywords: ["keyword1", "phrase match"],   // Must be contiguous substrings of user query
  relatedTopics: ["other-response-id"],
  response: "The actual response text",
  followUpOptions: [{id, label}]            // Optional choice buttons after response
}
```

**Category with force triggers:**
```javascript
{
  label: "Category Name",
  clarifyingQuestion: "Which option interests you?",
  responseIds: ["resp1", "resp2"],
  forceTriggers: ["multi-word phrase that always triggers clarification"]
}
```

### Important Matching Notes
- Keywords must be **contiguous substrings** of the user's query (`lowerQuery.includes(keyword)`)
- Force triggers should be **multi-word phrases** to avoid false positives (e.g., "tech stack" not "tools"), except for the `boundary` and `talent` categories which intentionally use short triggers with clarifying questions to prevent false blocks
- The `strengths` category shows 6 sub-responses with its own clarifying question flow
- The `boundary` category catches ambiguous personal keywords (age, address, home, money, married) and asks a clarifying question before deciding whether to block or redirect
- The `talent` category disambiguates between professional strengths and hidden talents
- Avoid overly generic keywords (e.g., use "about you" instead of "about") to prevent false matches across responses
- `followUp` and `followUpResponseId` were removed from most responses to reduce UX clutter
- `followUpOptions` still works on specific responses (e.g., strengths-automations)

### Session Memory
`chatbotData.session` tracks:
- `discussedTopics[]` - Prevents repeating content
- `lastResponseId` - Enables follow-up handling
- `questionCount` - Conversation depth

### Sidebar History
- Session-only (no localStorage), clears on page refresh/leave
- Each user question gets a unique ID on its message div
- Clicking a history item scrolls to that message with a brief highlight

## Adding New Content

1. Add response object to `chatbotData.responses` in responses.js
2. Include relevant keywords for matching (must be contiguous substrings of likely queries)
3. Add to appropriate category's `responseIds` if clarification grouping needed
4. Link via `relatedTopics` or `followUpOptions` for conversation flow
5. For personality/fun responses, add keywords that catch common off-topic queries
6. For boundary/sensitive topics, use the `boundary` category pattern: short forceTriggers + clarifying question + two options (personal → block, something else → redirect)
7. After adding new responses, update test-matching.html with test cases and run to verify
