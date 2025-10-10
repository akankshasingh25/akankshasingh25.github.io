// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "You can download the CV from pdf button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-centre-for-responsible-ai-cerai-as-a-post-baccalaurete-fellow-under-the-supervision-of-prof-b-ravindran-on-august-1-2024-excited-for-new-beginnings",
          title: 'Joined Centre for Responsible AI (CeRAI) as a Post-Baccalaurete Fellow under the supervision...',
          description: "",
          section: "News",},{id: "news-graduated-from-iiser-bhopal-with-a-bs-ms-degree-on-august-13-2024",
          title: 'Graduated from IISER Bhopal with a BS-MS degree on August 13, 2024!',
          description: "",
          section: "News",},{id: "news-attended-trust-mamla-an-event-that-witnessed-an-enlightening-set-of-conversations-around-digital-trust-organised-by-aapti-institute-on-nov-12-13-2024",
          title: 'Attended Trust Mamla, an event that witnessed an enlightening set of conversations around...',
          description: "",
          section: "News",},{id: "news-attended-cods-comad-2025-a-data-centric-conference-in-india-held-in-iit-jodhpur-from-december-18-21-2025",
          title: 'Attended CODS-COMAD 2025, a data centric conference in India, held in IIT Jodhpur...',
          description: "",
          section: "News",},{id: "news-presented-a-primer-of-deepfake-detection-and-work-done-in-previous-lab-related-to-it-in-the-lab-group-weekly-meeting-on-jan-23-2025-the-slides-can-be-found-here",
          title: 'Presented a primer of deepfake detection and work done in previous lab related...',
          description: "",
          section: "News",},{id: "news-attended-bcg-s-report-launch-event-on-unlocking-ai-s-potential-in-india-transforming-agriculture-and-healthcare-on-march-18-2025-in-a-closed-door-event-more-details-in-the-blog",
          title: 'Attended BCG’s report launch event on “Unlocking AI’s Potential in India: Transforming Agriculture...',
          description: "",
          section: "News",},{id: "news-attended-misinfocon-india-a-two-day-cross-disciplinary-conference-bringing-together-technology-policy-media-design-professionals-and-learners-to-explore-and-address-the-growing-challenges-of-misinformation-in-india-at-thoughtworks-bengaluru-organised-by-tattle-and-hacks-hackers-on-march-22-23-2025",
          title: 'Attended MisinfoCon India, a two-day cross-disciplinary conference bringing together technology, policy, media, design...',
          description: "",
          section: "News",},{id: "news-attended-the-iclr-2025-in-singapore-from-apr-23-29-2025-and-presented-my-first-poster-slides-for-the-paper-can-be-found-here",
          title: 'Attended the ICLR 2025 in Singapore from Apr 23-29, 2025 and presented my...',
          description: "",
          section: "News",},{id: "news-attended-microsoft-research-msr-india-academic-summit-2025-held-in-bengaluru-on-june-23-25-2025-an-event-aimed-at-strengthening-ties-between-the-indian-academic-community-and-researchers-at-msr-india",
          title: 'Attended Microsoft Research (MSR) India Academic Summit 2025 held in Bengaluru on June...',
          description: "",
          section: "News",},{id: "news-presented-my-ongoing-work-in-wsai-bi-weekly-meeting-on-aug-21-2025-appreciate-the-discussion-questions-and-suggestions-the-slides-can-be-found-here",
          title: 'Presented my ongoing work in WSAI Bi-weekly Meeting on Aug, 21 2025. Appreciate...',
          description: "",
          section: "News",},{id: "news-looking-for-phd-opportiunities-in-ai-ml-starting-fall-2026",
          title: 'Looking for PhD opportiunities in AI/ML starting Fall 2026.',
          description: "",
          section: "News",},{id: "news-attended-conclave-on-ai-governance-organised-by-cerai-iit-madras-on-oct-07-2025-presented-a-poster-of-ongoing-work-on-explainable-audio-deepfake-detection",
          title: 'Attended Conclave on AI Governance organised by CeRAI, IIT Madras on Oct, 07...',
          description: "",
          section: "News",},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jninL9oAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/-singh-akanksha", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/akankshasingh25", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/notakanshasingh", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
