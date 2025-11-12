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
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "You can download the CV from pdf icon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-synthetic-media-and-deepfakes-explained-for-all",
        
          title: "Synthetic Media and Deepfakes - Explained for All",
        
        description: "The blog offers a clear, accessible overview of how synthetic media, especially deepfakes are created, detected, and used. It explains the underlying AI techniques like GANs, diffusion models, explores their ethical and social implications, and discusses both the creative and harmful potential of these technologies. The piece aims to help readers understand deepfakes beyond the hype, balancing technical insight with real-world context.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/syntheticmedia-and-deepfakes/";
          
        },
      },{id: "post-multilingual-and-multicultural-evaluation-in-the-indian-context",
        
          title: "Multilingual and Multicultural Evaluation in the Indian Context",
        
        description: "This blog explores the evaluation of LLMs in India’s multilingual and multicultural context, highlighting both technical and cultural challenges. It discusses how most benchmarks remain English- or Western-centric, leading to cultural erasure when translated into Indic languages. The piece reviews emerging Indian benchmarks like IndicGenBench, BharatBench, and DOSA, which aim to capture linguistic diversity and cultural specificity. It also critiques gaps such as hybridism, translation bias, and the neglect of pragmatic cues like sarcasm or politeness. Finally, it proposes participatory, human-in-the-loop, and open-source evaluation frameworks to ensure that LLMs fairly and responsibly represent India’s many languages and worldviews.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/multilingual-and-multicultural-llms/";
          
        },
      },{id: "post-launch-of-report-and-roundtable-discussions-on-healthcare-and-agriculture",
        
          title: "Launch of Report and Roundtable Discussions on Healthcare and Agriculture",
        
        description: "On 18th March 2025 Boston Consulting Group launched their report titled &#39;Unlocking AI’s Potential in India:&#39; Transforming Agriculture and Healthcare&#39; during a closed-door event. The report aims to guide organizations to adopt and integrate AI in critical areas of healthcare and agriculture. The launch event organized by CeRAI and Google brought together key stakeholders from government, industry, academia, and civil society.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/BCG-report-launch/";
          
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
          section: "News",},{id: "news-attended-conclave-on-ai-governance-organised-by-cerai-iit-madras-on-oct-07-2025-presented-a-poster-of-ongoing-work-on-explainable-audio-deepfake-detection",
          title: 'Attended Conclave on AI Governance organised by CeRAI, IIT Madras on Oct, 07...',
          description: "",
          section: "News",},{id: "news-contributed-a-public-outreach-article-to-cerai-on-the-topic-of-synthetic-media-and-deepfakes-link-to-the-blog",
          title: 'Contributed a public outreach article to CeRAI on the topic of synthetic media...',
          description: "",
          section: "News",},{id: "news-attend-the-highly-enriching-event-tiacon-2025-an-event-on-information-amp-amp-trust-in-the-ai-age-hosted-by-trusted-information-alliance-at-the-india-habitat-centre-new-delhi-on-nov-6-2025",
          title: 'Attend the highly enriching event TIACON 2025, an event on Information &amp;amp;amp; Trust...',
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
