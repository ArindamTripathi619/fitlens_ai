# Frontend Product Requirements Document

## 0. Authentication Screens (Added)

## 0.5 Onboarding Flow
### Overview
The onboarding sequence introduces users to the app’s core value, builds trust, and guides them smoothly into account creation.

### Screens
#### **Screen 1 – Welcome Screen**
- **Content:** App logo, tagline (“Your AI-powered fitness companion”).
- **UI Style:** Full-screen gradient background with soft glow.
- **Animation:** Fade-in logo & floating micro animations.
- **Buttons:** “Get Started”.

#### **Screen 2 – Feature Highlights Carousel**
3–5 horizontally swipeable cards:
1) **AI Food Analyzer** (Food photo → calories + suggestions)
2) **AI Fitness Coach** (Chatbot guidance & plans)
3) **Steps & Activity Tracking**
4) **Body Composition Analysis**
5) **Fasting + Wellness Tools**

- **Design:** Full-width images with subtle parallax, rounded card edges.
- **Indicators:** Dot or bar indicators at bottom.
- **Animations:** Smooth swipe transitions, Lottie illustrations.

#### **Screen 3 – Permissions Intro Screen**
Explains why permissions are needed:
- Camera (food analysis)
- Motion sensors (step tracking)
- Photos (upload meals & physique photos)
- Notifications (reminders, insights)

- **Buttons:** “Allow Permissions” → leads to permission prompts.
- **Animation:** Simple icon bounce animations.

#### **Screen 4 – Get Started CTA**
- Minimal layout.
- “Create Account” & “Login” buttons.
- Fades into authentication flow.

### 0.1 Login Screen
- **Fields:** Email/Phone, Password
- **Buttons:** Login, Forgot Password, Continue with Google
- **Animations:** Smooth fade-in form, button ripple on press
- **Layout:** Centered card UI with soft shadows and blurred background
- **Validation:** Inline red error text; disabled login button until valid

### 0.2 Signup Screen
- **Fields:** Name, Email/Phone, Password, Confirm Password
- **Buttons:** Create Account, Login Instead, Continue with Google
- **UI Add-ons:** Password strength meter, field-level validation
- **Animations:** Card slides in from right when navigating from Login

### 0.3 OTP Verification (Optional)
- **Fields:** 4–6 digit segmented OTP boxes with auto-focus
- **Buttons:** Verify, Resend OTP (countdown timer)
- **Animations:** Shake animation for wrong OTP, success checkmark

### 0.4 First-Time Setup Wizard
- **Data Collected:** Height, Weight, Age, Gender, Activity Level, Fitness Goal, Diet Preference
- **Animations:** Lottie transitions, progress indicator at top
 (PRD)

## 1. Introduction
This document defines **every screen, UI element, animation, interaction, input type, graph, insight, and notification** needed to build the entire frontend of the Fitness & Health App. This PRD is **strictly for the frontend** and is written to support efficient implementation using **React Native**.

---

## 2. Global UI/UX Principles
### 2.1 Design System
- **Primary Colors**: Deep Indigo (#4C46E5), Electric Blue (#4F9DFF)
- **Secondary Colors**: Mint Green (#59E3A7), Peach (#FFB38A)
- **Background Colors**:
  - Light mode: #F7F9FC
  - Dark mode: #0D0F13
- **Typography**:
  - Heading: Poppins Semi-bold
  - Body: Inter Regular / Medium
  - Numeric displays (stats): Roboto Mono / JetBrains Mono

### 2.2 Shadows & Corners
- Card Radius: **20–28px**
- Button Radius: **14–18px**
- Shadow: Soft ambient + subtle drop shadow

### 2.3 Animation Principles
- Spring animations for transitions
- Fade + Slide‑Up for bottom sheets
- 200–300ms micro‑interactions
- Lottie animations for onboarding, progress, celebrations

---

## 3. Core Navigation Structure
### 3.1 Main Tabs
1. **Home Dashboard**
2. **Food Analyzer (Camera + Manual Logging)**
3. **Fitness Tracking (Steps / Running / Workouts)**
4. **Calculators Suite**
5. **Profile & Settings**

### 3.2 Navigation Components
- Bottom Navigation Bar (floating, glassmorphic)
- Top Navigation (contextual)
- Drawer (settings + documents)
- Floating Action Buttons (FAB) for quick actions

---

## 4. Screen-by-Screen Breakdown

# **4.1 Onboarding Flow**
### Screens:
1. **Welcome Screen**
2. **Account Setup** (Email/Google/Apple)
3. **Personal Details Input** (height, weight, gender, goals)
4. **Preferences** (diet, fasting, workout goals)
5. **Final Setup w/ Lottie Animation**

### Inputs:
- Height (cm/ft)
- Weight (kg/lb)
- Age
- Activity Level (chart-like slider)
- Goals: Weight Loss / Gain / Maintenance

### Animations:
- Swipe animations between screens
- Fade-in illustrations
- Progress bar on top

---

# **4.2 Home Dashboard**
### Overview Cards:
1. **Calories Remaining Widget** (ring progress + animation)
2. **Steps & Distance**
3. **Active Minutes**
4. **Water Intake**
5. **Fasting Timer (if enabled)**

### Insights Section:
- Auto-generated insights using colored banners
- Examples:
  - “You're under calories today — consider adding a healthy snack.”
  - "Your activity is 20% above average this week!"

### Graphs:
- Daily calorie burn bar graph
- Weekly steps line graph
- Weight trend line (if weight logs enabled)

### Animations:
- Micro bounce on card press
- Graph animations on load

---

# **4.3 Food Analyzer (Camera + Logging)**
### Screens:
1. **Camera Scanner**
2. **Food Recognition Results**
3. **Serving Adjustment Screen**
4. **Meal Log Summary**

### Inputs:
- Photo (camera)
- Manual text input search
- Portion slider (0.1x to 3x)

### Features:
- AI Food Detection Overlay
- Suggest Portion Changes (color-coded)
- Good/Bad Food Indicator
- Nutritional breakdown cards
- Macro bars (horizontal segmented bars)

### Animations:
- Camera focus animation
- Scanning pulse effect
- Result cards slide-up

---

# **4.4 Fitness Tracking Section**
### Tabs:
- Steps
- Walk/Run Tracker
- Workout History

### Screens:
1. **Steps Overview**
   - Step count progress bar
   - Inclination insight (if incline walking detected)

2. **Running/Walking Timer**
   - Stopwatch timer
   - Live steps
   - Live calories burned
   - Pace meter (radial gauge)

3. **Workout History**
   - Scrollable list with date separators

### Animations:
- Live counter animation
- Radial gauge arc animation
- Timeline expansion

---

# **4.5 Calculators Suite**
Includes:
- BMI Calculator
- BMR Calculator
- Body Fat % Estimator
- Water Weight Estimation
- Visceral Fat Estimation

### Inputs:
- Height, weight
- Body images (front + side) for enhanced analysis
- Gender
- Age

### Output UI:
- Score with colored badge
- Trend graph
- Body composition card grid
- Healthy range comparison bar

### Animations:
- Number counter
- Morphing progress ring

---

# **4.6 Fasting Module**
### Screens:
1. **Fasting Timer Live**
   - Circular progress animation
   - Fat burn estimate
   - Current fasting stage UI

2. **Fasting History**
   - Calendar heatmap
   - Duration graph

3. **Fast Break Guidance**
   - Recommended light foods
   - Water reminders

### Notifications:
- Starting fast
- Mid-fast motivation
- Fast completed celebration animation

---

# **4.7 Body Progress Tracking**
### Screens:
1. **Body Image Upload**
2. **Progress Timeline**
3. **Automatic Body Attribute Analysis Output**

### Metrics Shown:
- Muscle mass estimate
- Visceral fat estimate
- Waist–hip ratios
- Chest/shoulder values

### Graphs:
- Monthly transformation chart
- Body attribute radar (spider graph)

### Animations:
- Comparison slider between old/new images
- Radar graph dynamic expansion

---

# **4.8 Profile & Settings**
Includes:
- Account info
- App theme
- Notification preferences
- Privacy & security
- AI settings
- Data export controls

### Animations:
- Accordion expansion
- Toggle switches with tactile motion

---

# **5. Global Components Library**
The frontend must implement reusable components:
- Buttons (primary, secondary, ghost)
- Cards (elevated, glass, gradient)
- Input fields (with icons, validation states)
- Sliders
- Graphs (line, bar, radar)
- Icons set
- Status badges
- Bottom sheets
- Modals
- Stepper wizards
- Snackbars
- Notification banners

---

# **6. Micro-animations & Motion Specs**
- Button press → 95% scale for 100ms
- Tab switch → fading slide
- Graph load → 300–600ms easing
- FAB floating → 2px hover float
- Pull-to-refresh → water drop animation

---

# **7. Notifications System (Frontend)**
### Types:
- Toasts
- Push notifications
- In-app alerts

### Contexts:
- Meal log reminders
- Fasting milestones
- Step milestones
- Weight log reminders

---

# **8. Frontend Security Requirements**
- Client-side validation for all inputs
- Local secure storage for tokens
- No sensitive data in Redux logs
- Masked inputs for weight, body images

---

# **9. Accessibility Requirements**
- 100% color contrast compliant
- VoiceOver/TalkBack support
- Haptic feedback for interactions
- Adjustable text sizes

---

# **10. Appendix**
### To Be Documented During Development
- Component states (loading/empty/error)
- Error-handling UIs
- Offline mode flows

---
**Chatbot / AI Assistant (Added)**

## Chatbot / AI Assistant UI & UX
### Overview
The in-app AI Assistant provides conversational guidance for workouts, diet, food-analysis explanations, fasting advice, and quick actions. The UI must make interactions fast, contextual, and safe.

### Entry Points
- Bottom tab: "AI Coach"
- Floating FAB on Home dashboard
- Quick-reply chips after food analysis
- Voice input (optional v2)

### Screens & Components
#### Main Chat Screen
- Message list (infinite scroll) with timestamp dividers
- User input area with:
  - Text input (multi-line, auto-expand)
  - Send button (gradient)
  - Quick-action chips above keyboard (e.g., "Log Meal", "Start Walk", "Generate Meal Plan")
  - Attach button to upload food image or select from gallery
- Assistant messages shown in gradient bubbles, user messages in muted bubbles
- Bot avatar: animated (subtle breathing) to show presence
- Typing indicator: three pulsating dots inside a small rounded bubble

#### Conversation Context Panel (Optional Slide-over)
- Shows recent user stats (today's calories, steps, sleep)
- Allows the assistant to reference recent logs
- Toggle to include/exclude context when sending prompt

#### Persona Switcher
- Small segmented control near top to switch persona:
  - "Trainer" (exercise-focused)
  - "Dietician" (food & macros)
  - "Motivator" (short motivational prompts)
- Visual change: persona icon and header color accent

#### Quick Suggestions & Actions
- After each bot response: show 2–4 suggestion chips (e.g., "Add to log", "Replace rice with salad", "Show workout for 20 min")
- Chips animate in (slide-up + fade)

#### Food Image Integration
- If user attaches an image, show inline thumbnail with analysis summary
- Allow "Explain" button which asks the chatbot to explain food analyzer output in plain language

### Input Validation & UX Safeguards
- Disable send while assistant is composing
- Show a small badge if the assistant is using retrieved facts (e.g., "Based on nutrition DB")
- Show disclaimer for medical/clinical advice

### RAG / Source Attribution UI
- When assistant uses external facts or nutrition DB results, add a small "Sources" link under the message
- Expandable sources panel shows nutrition DB entries or model confidence scores

### Conversation History & Management
- Persist chat history per user
- Allow favorite/starred responses
- Allow export of conversation as PDF or text
- Allow clearing conversation with confirmation

### Notifications & Proactive Messaging
- Opt-in for proactive suggestions (e.g., "You are 300 kcal under today. Want snack ideas?")
- Deliver via push notifications and in-app banners

### Animations & Microinteractions
- Typing indicator (pulsing dots)
- Message bubble entrance: slide + fade
- Quick action chips: spring pop-in
- Persona switch: subtle color morph of header

### Accessibility
- All messages accessible via screen readers
- Large tap targets for chips
- Voice input alternative for message entry

### Error Handling
- If assistant fails to respond (timeout), show a retry button
- Show clear message if LLM backend is unreachable and fallback to template responses

### Security & Privacy
- Do not include sensitive personal data in prompts sent to managed LLM providers unless user has explicitly opted in
- Mask user-identifiable info when displaying logs for support
- Allow users to opt-out of storing conversations for training

### Analytics & Telemetry (Frontend)
- Track events: question sent, suggestion clicked, image attached, persona used
- Send minimal telemetry (no PII) for usage insights

---

**END OF DOCUMENT**

