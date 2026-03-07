# Heidy De La Cruz — Client Change Requests

> **How to use this file:** Paste this into a Claude Code session and say:
> "Please implement all the changes in CLIENT_CHANGES.md"

---

## 1. Site-Wide: Page Title / Site Name

**File:** `app/layout.tsx` — line 18

**Change:** Update the site `<title>` metadata

```
FROM: "Heidy De La Cruz | Podcast Coach"
TO:   "Heidy De La Cruz | Podcast Coach for Latinas"
```

---

## 2. Homepage (`app/page.tsx`)

### 2a. Hero Headline — line 49

```
FROM: "Elevate Your Online Presence with Podcasting"
TO:   "Helping Latinas become Podcasters with The V.O.I.C.E Method"
```

---

## 3. About Page (`app/about/page.tsx`)

### 3a. Hero Section Headline — line 39

```
FROM: "Let's get your Podcast Launched"
TO:   (keep as-is — the headline stays, but the button changes below)
```

### 3b. "Request a consultation" button — line 46–52

Replace the Calendly link with a `mailto:` email link:

```
FROM:
  href="https://calendly.com"
  target="_blank"
  rel="noopener noreferrer"
  text: "Request a consultation"

TO:
  href="mailto:heidy@heidydelacruz.com"
  (remove target and rel — not needed for mailto)
  text: "Request a consultation"
```

### 3c. "Welcome! I'm Heidy" section — line 73–76

Replace the paragraph text:

```
FROM:
  "I'm a copywriter, speaker, and your dedicated podcast coach. Through my podcast
  "The American Dream In The Eyes of Immigrants," I amplify stories that deserve
  to be heard — and now I'm here to help you share yours."

TO:
  "I'm a writer, podcaster, podcast launch coach, and speaker. Hosting the rapidly
  growing podcast, "The American Dream In The Eyes of Immigrants," is not just a
  passion; it's a mission. Through heartfelt conversations, I speak with immigrants,
  highlighting their journeys and holding them with compassion."
```

### 3d. "About Me" section — lines 90–101

Replace all four `<p>` paragraphs in the left column with the full bio below.
The right side (image column) stays untouched.

**New bio content (split into paragraphs as shown):**

> Hi, I'm Heidy De La Cruz 👋
> I'm a writer, podcaster, podcast-launch coach, speaker, and storyteller, passionate about amplifying voices that deserve to be heard.
>
> For more than 20 years, writing has been part of my life. What started as a hobby slowly became a calling. I've always believed stories have power, especially the stories of people who are often overlooked or underrepresented.
>
> Today, that belief fuels everything I create.
>
> **Why I Started My Podcast**
> I'm the host of the award-winning podcast *The American Dream in the Eyes of Immigrants*, where I share the powerful journeys of immigrants who came to the United States in search of opportunity, safety, and a better future.
>
> Through these conversations, I explore what the American Dream truly means — not through headlines or politics, but through real human experiences.
>
> The podcast has grown far beyond what I imagined. It's now listened to in over 100 countries and ranked in the top 5% globally, ranking number 1 constantly for immigration on GoodPods, reaching the Top 100 monthly and Top 10 weekly charts multiple times.
>
> But the numbers are only part of the story. What matters most to me is creating a space where immigrants can share their journeys openly — the struggles, the sacrifices, the culture shock, the wins, and the dreams that brought them here.
>
> Because every immigrant story deserves to be told. And as the daughter of Dominican immigrants, I bring a unique perspective to how I handle these stories and podcasting.
>
> **My Work as a Podcast Launch Strategist**
> Alongside storytelling, I also help Latinas become podcasters with confidence and clarity, without the overwhelm.
>
> Podcasting changed my life. It gave me a platform, a global audience, and opportunities I never expected.
>
> Now I teach others how to do the same through my V.O.I.C.E. Method Podcast Launch Framework, where I walk through the entire process — from finding your "why" to choosing equipment, recording your first episode, creating systems, and marketing your show.
>
> I believe podcasting doesn't have to be overwhelming and shouldn't be. With the right strategy and systems, it is one of the most powerful tools for building your brand, growing your audience, and creating meaningful connections.
>
> **My Mission**
> My mission is simple:
> - Tell stories that matter.
> - Help Latinas share their voices.
> - Create spaces where authenticity is valued more than perfection.
>
> Whether I'm writing, interviewing immigrants, or teaching someone how to launch their podcast, everything I do centers around one idea: Stories connect us.
>
> **When I'm Not Podcasting**
> When I'm not recording episodes or writing blog posts about podcasting and storytelling, you'll usually find me:
> - Writing for my weekly personal development newsletter, *Into My Thoughts*
> - Connecting with fellow creators and entrepreneurs
> - Speaking at networking events or podcasting conferences
> - Dreaming up new ways to grow my podcast and amplify immigrant stories
>
> My long-term goal is to travel and record immigrant stories in person around the country, continuing to document the many versions of the American Dream.
>
> **Let's Connect**
> If you're an immigrant with a story to share, an entrepreneur who wants to start a podcast, or someone who simply believes in the power of storytelling, I'd love to connect.
>
> Because the stories we share today can inspire the people who come after us tomorrow.
>
> With Love, Heidy

### 3e. "Let's start your own podcast today!" CTA button — line 127–134

```
FROM:
  href="https://calendly.com"
  target="_blank"
  rel="noopener noreferrer"
  text: "Book a consultation"

TO:
  href="mailto:heidy@heidydelacruz.com"
  text: "Let's Start Your Podcast"
  (remove target and rel)
```

---

## 4. Services Page (`app/services/page.tsx`)

### 4a. Replace the entire `services` array (lines 14–55)

The current 4 services cards are completely replaced with these 4 new ones:

```ts
const services = [
  {
    title: "6 Weeks Podcast Launch Strategy",
    price: "$1,500",
    description:
      "We will meet weekly for an hour for six weeks. We will set up a day and time that works best for you. This is for you if you're looking to: Launch your podcast but want guidance and weekly feedback. 1:1 weekly support and accountability for launching your podcast. Ready to take action but need extra support.",
    buttonText: "Book Now",
    buttonHref: "mailto:heidy@heidydelacruz.com",
    isEmail: true,
    image: "/images/services-hero.jpg",
    imagePosition: "object-top",
  },
  {
    title: "One Hour Podcast Strategy Call",
    price: "$70",
    description:
      "In one hour, we will strategize your next steps in podcasting! Whether growing or starting your show!",
    buttonText: "Book a Call",
    buttonHref: "https://stan.store/heidydelacruz/p/book-a-11-call-with-me-hj62a",
    isEmail: false,
    image: "/images/hero-photo.png",
    imagePosition: "object-top",
  },
  {
    title: "The V.O.I.C.E. Method Podcast Launch Course",
    price: "$197",
    description:
      "Become a podcaster in 6-weeks or less with The V.O.I.C.E. Method!",
    buttonText: "Enroll Now",
    buttonHref: "https://stan.store/heidydelacruz/p/launch-your-podcast-with-this-amazing-course",
    isEmail: false,
    image: "/images/about-photo.jpg",
    imagePosition: "object-top",
  },
  {
    title: "Podcast Editing and Production Services",
    price: "Starting at $80/episode",
    description:
      "Looking to take podcast management, editing, or production off your plate? Send me an email to discuss your podcasting needs. I'll tailor a package just for you!",
    buttonText: "Email Heidy",
    buttonHref: "mailto:heidy@heidydelacruz.com",
    isEmail: true,
    image: "/images/services-photo.png",
    imagePosition: "object-top",
  },
];
```

### 4b. Update the service card button rendering (around line 142–149)

The button `<a>` tag needs to handle `mailto:` links differently (no `target="_blank"` or `rel`).
Update the card render block so that:
- If `service.isEmail` is true → render with no `target`/`rel`
- If `service.isEmail` is false → render with `target="_blank" rel="noopener noreferrer"`

Example conditional render:
```tsx
<a
  href={service.buttonHref}
  {...(!service.isEmail && { target: "_blank", rel: "noopener noreferrer" })}
  className="inline-block self-start bg-brand-red text-white px-8 py-3 rounded-md hover:bg-brand-dark transition-colors font-medium"
>
  {service.buttonText}
</a>
```

### 4c. Update the services array TypeScript type

Add `isEmail: boolean` to the service object shape so TypeScript doesn't complain.

---

## 5. Summary of All Email Links

| Location | Old href | New href |
|---|---|---|
| About page hero "Request a consultation" button | `https://calendly.com` | `mailto:heidy@heidydelacruz.com` |
| About page CTA "Book a consultation" button | `https://calendly.com` | `mailto:heidy@heidydelacruz.com` |
| Services — "6 Weeks Podcast Launch Strategy" button | new card | `mailto:heidy@heidydelacruz.com` |
| Services — "One Hour Podcast Strategy Call" button | new card | `https://stan.store/heidydelacruz/p/book-a-11-call-with-me-hj62a` |
| Services — "V.O.I.C.E. Method Course" button | new card | `https://stan.store/heidydelacruz/p/launch-your-podcast-with-this-amazing-course` |
| Services — "Podcast Editing" button | new card | `mailto:heidy@heidydelacruz.com` |

---

## Notes / Out of Scope

- The **main page homepage** `app/page.tsx` has its own "Book A Call with Heidy" CTA at the bottom pointing to `https://calendly.com` — client did NOT mention changing this one yet.
- All image files stay the same — no new images needed.
- No layout or styling changes, only content and link updates.
