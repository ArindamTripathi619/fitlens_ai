# **FitLens AI – Frontend UI/UX Design PRD**

## **Comprehensive User Interface & Experience Blueprint**

---

# **1. Design Philosophy**

FitLens AI’s UI/UX is designed to feel:

* **Clean** – no clutter, easy scanability.
* **Motivating & Energetic** – gradient accents inspired by fitness and movement.
* **Youth-centric** – tailored for students and young adults.
* **Accessible** – readable fonts, responsive components.
* **Fast & Smooth** – micro-animations, predictable transitions.

**Core Concept → "Vibrant Minimalism"**
A balance of minimal UI with energetic color highlights and glowing gradients.

---

# **2. Color Palette & Theme System**

## **2.1 Primary Colors**

### **Primary Gradient (Brand Signature)**

**Blue → Purple → Pink Neon**

* Start: `#3A8DFF` (bright blue)
* Mid: `#7B4DFF` (vibrant purple)
* End: `#FF3DB8` (electric pink)

Used for:

* Buttons
* Highlights
* Progress bars
* Key background sections

### **Secondary Accents**

* Lime Green: `#9DFF57` → success, completion
* Orange/Amber: `#FFB038` → caution or tips
* Soft Red: `#FF6B6B` → alerts

## **2.2 Background Colors**

* Dark Mode Default: `#0D0D0F`
* Card Background: `#16161A`
* Light Text: `#F3F3F4`
* Muted Text: `#9A9AA0`

(Option for later Light Mode v2)

---

# **3. Typography System**

**Font Family:** *Inter* (primary), *Poppins* (headings optional)

### **Font Sizes**

* Title (H1): 28–32px
* Section Headers (H2): 22–24px
* Subheading (H3): 18–20px
* Body Text: 15–16px
* Small/Text Tags: 12–13px

### **Font Color Rules**

* Headers: White (#FFF)
* Body: Light Grey (#EEE)
* Secondary Text: Muted Grey (#A5A5A5)

---

# **4. Iconography**

* Icon set: **Phosphor Icons / Lucide Icons**
* Style: Rounded, consistent stroke width, neutral colors
* Active icons use gradient highlights

---

# **5. Component Design System**

## **5.1 Buttons**

### **Primary Button**

* Full-width or pill-shaped
* Gradient background
* White bold text
* Shadow: soft neon glow
* Animation: subtle scale-up (1.05x) on press

### **Secondary Button**

* Transparent + gradient border
* White text
* Hover/press: border brightens, inner glow

### **Tertiary Button**

* Text only, minimal
* Used in settings, links

---

## **5.2 Cards**

### **Style**

* Rounded corners: **18–22px**
* Background: #16161A
* Shadow: soft ambient shadow
* Inner padding: 16–20px

### **Special Cards**

* Dashboard stat cards
* Food recognition results cards
* Activity session cards

Each uses a small colored accent bar or icon.

---

## **5.3 Progress Indicators**

### **Circular Rings (for Steps, Calories)**

* Gradient stroke
* Smooth animated sweep
* Center numeric count

### **Linear Bars**

* Rounded ends
* Gradient fill
* Small icons at edges

---

# **6. Animation System**

Animations must be **smooth, subtle, and meaningful**.

## **6.1 Page Transition Animations**

* Slide-in from right (mobile friendly)
* Fade + slight scale-up for modal dialogs

## **6.2 Microinteractions**

* Button press → scale to 1.05x
* Progress ring fills with easing curve
* Food detection bounding boxes animate in
* Step counter digits roll (like odometer)

## **6.3 AI Feedback Animations**

* Chatbot typing indicator → pulsating dots
* Food analysis loading → circular rotating gradient ring
* Diet suggestions → card slide-in from bottom

---

# **7. App Layout & Page-by-Page UI/UX**

# **7.1 Onboarding Flow**

### Screens:

1. Welcome screen with gradient background
2. Permissions (Camera, Activity, Notifications)
3. Profile setup (Height, Weight, Goal)
4. Dashboard preview animation

### UX Goals:

* Keep it under 1 minute
* Quick input with sliders + pickers

---

# **7.2 Home Dashboard**

### Layout

* Header with greeting and profile picture
* Daily Rings section:

  * Steps
  * Calories In
  * Calories Out
  * Sleep
* Scrollable cards for:

  * "Log Meal"
  * "Start Walk/Run"
  * "Start Fast / Break Fast"
  * Water intake
  * Quick AI tips

### User Experience

* Everything reachable with one thumb
* Clear visual hierarchy

---

# **7.3 Food Analyzer UI**

### Flow

1. User opens camera → full-screen camera UI
2. Tap to capture
3. AI scanning animation
4. Results page

### UI Elements

* Bounding boxes with labels (smooth fade-in)
* Nutritional breakdown in cards
* Portion selector slider
* Suggestions: horizontal card slider

### Colors

* Labels match category colors:

  * Protein: blue
  * Carbs: yellow
  * Fats: red

---

# **7.4 Workout Screens**

* Exercise cards with thumbnail GIF
* Timer animations
* Instructions panel with smooth expand/collapse
* Completion badge pop-ups

---

# **7.5 Step & Jogging Tracker**

### Live Session Screen

* Map at top (dark styled map)
* Live stats in floating cards
* Pause/Stop buttons with bright accent colors

### End Session

* Summary with animated graphs

---

# **7.6 Calculators UI**

### BMI / BMR / Fat % Calculator

* Input sliders for height & weight
* Instant recalculation animations
* Result card with gradient highlight border
* Info tooltips

### Body Composition Analyzer (Camera)

* Framing guide overlay
* Privacy notice popup
* Results displayed in radar chart

---

# **7.7 Fasting Timer UI**

### Active Fast Screen

* Big countdown timer (neon ring animation)
* Health insights timeline
* Motivational quotes that update every few hours
* "Break Fast" button → confirmation modal

---

# **7.8 Chatbot UI**

* Message bubbles with soft rounded shapes
* Gradient background for bot responses
* Buttons for quick actions (chips)
* Loading animation with pulsing gradient

---

# **8. Navigation System**

## **Bottom Navigation Bar**

Tabs:

1. Home
2. Food
3. AI Coach
4. Activity
5. Profile

### Style

* Dark background
* Active icon uses gradient + tiny glow
* Inactive icons muted gray

---

# **9. Accessibility Standards**

* Minimum contrast ratio 4.5:1
* Large tap area (48px)
* Color-blind safe palette
* VoiceOver / TalkBack friendly labels
* Slider alternative for numeric inputs

---

# **10. Security-focused UI/UX**

* Sensitive screens use blur overlay
* Camera images never shown after processing unless user wants
* Profile & image data editing require re-auth
* Local storage encryption notice

---

# **11. UI Assets & Exporting Guidelines**

* Icons SVG 24px grid
* Images WebP
* Splash screen 3 variants
* Lottie animations for key interactions

---

# **12. Microcopy Guidelines**

Tone:

* Motivational
* Friendly
* Non-judgmental

Examples:

* “Let’s smash today’s goals.”
* “Great job! You’re building momentum.”
* “Small steps matter.”

---

# **13. Prototype Flow (Figma)**

Prototype should include:

* All onboarding screens
* Full dashboard interaction
* Food scan prototype
* Workout timer interactions
* Fasting timer
* Chatbot flows

---

# **14. Final Deliverables**

* UI kit (buttons, cards, icons)
* Design tokens (colors, radius, spacing)
* Full Figma prototype
* Component library
* Animations (Lottie + CSS/Motion specs)
* Interaction guidelines

---

# **END OF UI/UX DESIGN PRD**
