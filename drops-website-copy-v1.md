# Drops.AR — Website Copy Deck v1
**Date:** Feb 14, 2026
**Tone:** Confident, creative, credible. Speaks to CMOs and brand leads, not just AR nerds.

---

## SECTION 1: HERO

**Headline:**
Your Creativity Belongs in the Real World.

**Subhead:**
We design and deploy location-based experiences that turn online audiences into IRL superfans — at any venue, in any city, at scale.

**CTA Button:** See How It Works
**Secondary CTA:** Get in Touch

---

## SECTION 2: THE SHIFT (Why Now)

**Section Header:**
The Biggest Shift in Entertainment Is Happening Outside the Screen

**Body:**
You already know the world is moving from screen to scene. Fans don't just want to watch — they want to show up, participate, and take something home. The brands winning right now are the ones meeting their audience in the real world.

The right experience, at the right location, at the right moment. That's a Drop.

**Pull stat (designed as a callout):**
52% of Gen Z will cut spending on almost everything else before they cut spending on experiences. — McKinsey, 2026

---

## SECTION 3: WHAT WE DO

**Section Header:**
What We Do

**Body:**
We design location-based experiences for brands, labels, and IP holders. Geofenced content at theaters, venues, record stores, polling stations, city streets — anywhere your audience shows up in the real world. When fans arrive, they unlock experiences on their phone. No app download. Just a shareable link.

We've activated at 1,800+ theaters simultaneously, blanketed every polling location in the U.S., and hidden collectibles in cities from New York to Paris to Seoul.

**Three capability cards:**

**1. Geofenced Experiences**
Pin exclusive content to any location on Earth. Fans can only access it when they're physically there. Scavenger hunts, geocaching, portals, exclusive drops — whatever fits the moment.

**2. Zero Friction — No App Required**
Every experience runs in the mobile browser. No downloads, no installs. Fans tap a link and they're in.

**3. Real-World Analytics That Justify the Spend**
This is the part that gets your CFO on board. We track who showed up, where, when, and what they did — giving you the same conversion data you'd expect from a digital campaign, but for a physical activation. Foot traffic, collection rates, geographic heatmaps, and attribution you can put in a deck for your stakeholders.
---

## SECTION 4: HOW WE WORK

**Section Header:**
How We Work

**Body:**
We treat every project as a collaboration, not a handoff. We embed in your world — your IP, your audience, your goals — and build from there.

What makes us different is what's under the hood. We built proprietary software to deploy geofenced experiences at scale. That's how we can activate 1,800+ theaters simultaneously, or blanket every polling location in the country, and ship in weeks instead of months. Traditional location-based projects require 6–12 months of planning and a single venue. Our platform turns a spreadsheet of coordinates into a live campaign.

We've been doing this since 2016 — combining product engineering, human-centered computing research, and experiential design. We understand both why an experience works and how to build the technology that powers it. That dual capability is what lets us move fast and deliver real-world analytics that justify the spend.
---

## SECTION 5: FEATURED WORK

### Ghost × Drops
**Label:** Loma Vista Records
**Subhead:** 1,800 theaters. 68,000 unique visitors. 13% IRL conversion. Top 10 box office worldwide.

**Body:**
Ghost and Loma Vista Records hired Drops to promote "Rite Here Rite Now," the band's first feature film. We geofenced exclusive AR content — video, merch, tickets — at every screening location worldwide. A countdown clock built anticipation. On opening night, fans who arrived at their theater unlocked the Drop. The result: an estimated $300K+ in attributable ticket sales and a top-10 box office debut.

### #iVoted × Drops
**Subhead:** Every polling location in America. 15M follower reach. 40% conversion.

**Body:**
Drops partnered with #iVoted to drive voter turnout by geofencing exclusive content from artists and comedians — collectively reaching over 15 million followers — at every polling location in the country. Fans who voted unlocked the content. We saw up to 40% conversion from intent to in-person collection.

### More Work
- **Ashnikko** (Warner UK) — Portal experiences at fairy houses in parks from NYC to Paris to Seoul
- **HBO Insecure Season 5** (Atlantic Records) — AR walking tour and love letter to Los Angeles
- **Soccer Mommy** — AR trading cards hidden at independent record stores
- **Trivium** — Dragon Drops in 5 cities daily to a global metal fanbase
- **Amon Amarth** — Algorithmic hunt that auto-generates in your hometown

---

## SECTION 6: PRESS & RECOGNITION

**Header:**
Press & Recognition

**Awards & Accelerators:**
- 2025 Alex Schlesener complete Ph.D in Human-centered Computing, Clemson University 
- 2025 XList Winner for Ghost x Drops — [Seth Hillinger](https://www.xp.land/xlist/2025/xlistings/Seth-Hillinger/)
- 2024 MIT ML/AI Certification
- 2020 Jeezy Georgia Senate Runoff #GetOutTheVote — Atlanta Marketing Award
- 2019 NYCMediaLab Accelerator
- 2018 Nashville Project Music Incubator
- 2016 SFMusicTech Winner

**Press:**
- [Ghost's *Rite Here Rite Now* becomes highest-grossing hard rock cinema event ever in North America](https://blabbermouth.net/news/ghosts-rite-here-rite-now-becomes-highest-grossing-hard-rock-cinema-event-ever-in-north-america) — Blabbermouth

**Design note:** Display as a clean visual strip with logos/badges where possible. Keep text minimal — just the year, award name, and link.

---

## SECTION 7: CONTACT

**Header:**
Let's Put Your Creativity in the Real World.

**Body:**
Whether you're a label, a studio, a brand, or a campaign — if you have fans online, we'll help you meet them in person.

**CTA Button:** Book a Call
**Email:** hello@drops.nyc

---

**Platform Waitlist (small footer section or modal):**

**Header:** Want to Run Drops Campaigns Yourself?

**Body:**
We're building a self-service platform for brands and creators to deploy their own location-based experiences. Join the waitlist for early access.

**CTA:** Get Early Access
**Email capture:** Name + Email

---

## DESIGN NOTES FOR IMPLEMENTATION

**Overall direction:**
- Accent color: keep the purple (#9990FF) from current site
- Typography: clean sans-serif, large headlines, generous whitespace
- Hero: full-bleed, minimal. Consider a subtle background video or a single strong image (Ghost activation or the map visualization from the deck)
- Mobile-first — most fans will hit this from a phone

**What to cut from the current site:**
- The 7-step carousel contact form. Replace with a simple email CTA or a 2-field form (name + email)
- The "Join Our Beta" language — this isn't a beta anymore
- The Webflow boilerplate CSS — replace with clean, hand-written styles
- The video.js player in the hero — either use a native HTML5 video or a clean background loop

**What to preserve:**
- The 3D model-viewer elements for project showcases (these are great and differentiated)
- The Ghost case study imagery
- The Drops logo and color palette
- The existing project pages (ashnikko.html, trivium.html, etc.) — these can stay as deep-link destinations

**Technical approach:**
- Rewrite index.html from scratch as clean semantic HTML
- New single CSS file (drop the Webflow CSS entirely)
- Keep Bootstrap only if needed for the grid, otherwise go custom
- Preserve the header.js web component pattern
- Keep the CNAME and existing project subpages intact
