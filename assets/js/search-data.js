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
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-raised-hands-thrilled-to-be-receive-the-viewer-s-choice-award-at-the-university-of-melbourne-s-visualise-your-thesis-competition-2021",
          title: ':raised_hands: Thrilled to be receive the Viewer’s Choice Award at the University of...',
          description: "",
          section: "News",},{id: "news-raised-hands-a-usd-24000-fund-was-granted-for-explorecsr-work",
          title: ':raised_hands: A USD 24000 fund was granted for exploreCSR work!',
          description: "",
          section: "News",},{id: "news-raised-hands-thrilled-to-be-awarded-a-gci-top-up-scholarship-in-recognition-of-my-thesis-research",
          title: ':raised_hands: Thrilled to be awarded a GCI top-up scholarship in recognition of my...',
          description: "",
          section: "News",},{id: "news-speech-balloon-visiting-university-of-jaffna-for-the-3rd-time-to-oversee-the-csr-activities-and-conducted-an-in-person-session",
          title: ':speech_balloon: Visiting University of Jaffna for the 3rd time to oversee the CSR...',
          description: "",
          section: "News",},{id: "news-sparkles-i-joined-oracle-australia-as-a-senior-applied-scientist",
          title: ':sparkles: I joined Oracle Australia as a Senior Applied Scientist',
          description: "",
          section: "News",},{id: "news-raised-hands-thrilled-to-be-awarded-a-graduate-researcher-travel-award-for-conference-travel-to-present-my-thesis-research",
          title: ':raised_hands: Thrilled to be awarded a Graduate Researcher travel award for conference travel...',
          description: "",
          section: "News",},{id: "news-speech-balloon-presenting-our-work-on-cross-domain-few-shot-learning-at-the-ieee-cvpr-2024-in-seattle-usa",
          title: ':speech_balloon: Presenting our work on cross-domain few-shot learning at the IEEE/CVPR 2024 in...',
          description: "",
          section: "News",},{id: "news-speech-balloon-participating-at-the-databricks-data-and-ai-world-tour-in-sydney-as-an-invited-speaker",
          title: ':speech_balloon: Participating at the Databricks - Data and AI World Tour in Sydney...',
          description: "",
          section: "News",},{id: "news-tada-two-us-patents-are-being-filed-for-my-work-at-oracle",
          title: ':tada: Two US Patents are being filed for my work at Oracle.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%73%68%69%6E%64%72%69%65%70%65%72%65%72%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rashindrie", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rashindrie", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=F5MAl8kAAAAJ", "_blank");
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
