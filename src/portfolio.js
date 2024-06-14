/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dr.Rita Taher",
  title: "Hi all, I'm Dr.Rita",
  subTitle: emoji(
    "Gynecology , Obstetrics and Infertility Physician , Consultant Sonologist and Diabetologist 🚀 Dr.Rita Taher, MD, is a dedicated Gynecologist, Obstetrician, Infertility Specialist, Consultant Sonologist, and Diabetologist. With expertise spanning 12 years, Dr. Rita offers compassionate care and precise diagnostics. Passionate about women's health, Dr. Rita strives to empower patients through personalized treatment plans, ensuring optimal well-being."
  ),
  resumeLink:
    "-----", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  facebook: "www.facebook.com/drritataher",
  tiktok: "https://stackoverflow.com/users/10422806/saad-pasta",
  youtube: "https://www.youtube.com/@dr_ritataher",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Below are the services I provide",
  skills: [
    emoji( "⚡ Passionate Gynecologist dedicated to women's health.  "),
    emoji( "⚡ Expert in gynecology, obstetrics, infertility, sonology, and diabetology."),
    emoji( "⚡ Tech enthusiast pioneering innovative patient solutions."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Gynecology",
    fontAwesomeClassname: "fas fa-baby-carriage"
  },
  {
    skillName: "Obstetrics",
    fontAwesomeClassname: "fas fa-baby"
  },
  {
    skillName: "Infertility",
    fontAwesomeClassname: "fas fa-infinity"
  },
  {
    skillName: "Sonology",
    fontAwesomeClassname: "fas fa-image"
  },
  {
    skillName: "Diabetology",
    fontAwesomeClassname: "fas fa-heartbeat"
  },
  {
    skillName: "Medical Imaging",
    fontAwesomeClassname: "fas fa-camera"
  },
  {
    skillName: "Patient Care",
    fontAwesomeClassname: "fas fa-user-md"
  },
  {
    skillName: "Research",
    fontAwesomeClassname: "fas fa-flask"
  },
  {
    skillName: "Communication",
    fontAwesomeClassname: "fas fa-comments"
  },
  {
    skillName: "Empathy",
    fontAwesomeClassname: "fas fa-hands-helping"
  },
  {
    skillName: "Continuous Learning",
    fontAwesomeClassname: "fas fa-book"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tairunnessa Memorial Medical College",
      logo: require("./assets/images/TTMG.png"),
      subHeader: "Bachelor of Medicine and Bachelor of Surgery",
      duration: "January 2010 - December 2013",
      desc: "....",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Shaheed Bir Uttam Lt. Anwar Girls' College ",
      logo: require("./assets/images/images.png"),
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "Passing Year 2006",
      desc: " ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Gynecology", 
      progressPercentage: "95%" 
    },
    {
      Stack: "Sonology",
      progressPercentage: "98%"
    },
    {
      Stack: "Diabetology",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Medical Officer Sonologist",
      company: "Asia General Hospital",
      companylogo: require("./assets/images/Asia.png"),
      date: "June 2020 – 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Medical Officer Sonologist",
      company: "Doctors Foundation Hospital Gazipur",
      companylogo: require("./assets/images/DFG.png"),
      date: "1 MAy 2015 – 30 September 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Medical Officer Sonologist",
      company: "Konabari Popular Hospital",
      companylogo: require("./assets/images/Konabari.jpg"),
      date: "1 October 2015 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/norp-knit-industries-limited.jpg"),
      projectName: "Medical Officer",
      projectDesc: "NORP KNIT INDUSTRIES LTD",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.dnb.com/business-directory/company-profiles.norp_knit_industries_ltd.34d6278419d24e8e921460c6ac96c072.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/KonabariLab.jpg"),
      projectName: "Medical Officer",
      projectDesc: "Konabari Kabaid Hospital",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://labaid.com.bd/en/diagnostic/labaid-diagnostic-gazipur"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certificate Course in Diabetology",
      subtitle:
        "The Certificate Course in Diabetology focuses on diabetes management, including diagnosis, treatment, prevention, and patient education.",
      image: require("./assets/images/certificate_diabetes_educators_eng-Recovered.jpg"),
      imageAlt: "Certificate Course Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Trans Vaginal Sonography",
      subtitle:
        "Transvaginal sonography (TVS) is an imaging technique for detailed examination of pelvic organs via vaginal probe.",
      image: require("./assets/images/Ser2.jpg"),
      imageAlt: " Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant"
        }
      ]
    },

    {
      title: "Diploma in Medical Ultrasonography",
      subtitle: "The Diploma in Medical Ultrasonography provides training in ultrasound technology for medical diagnostics and imaging.",
      image: require("./assets/images/utasono-2.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Certification",
          url: "https://pakist"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
  "If you like to learn about health-related content, then you should read my blog regularly.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "he",
      title: "What is Ultrasonography ?",
      description:
        "Ultrasonography is a medical imaging technique using high-frequency sound waves to visualize internal organs, tissues, and blood flow in real-time................"
    },
    {
      url: "ht",
      title: "What is Diabetes ?",
      description:
        "Diabetes is a chronic disease where the body either cannot produce enough insulin or cannot effectively use the insulin it produces, causing elevated blood sugar levels............."
    },
    {
      url: "h",
      title: "Why is Kidney disease?",
      description:
        "Kidney disease, also known as renal disease, refers to conditions that impair kidney function, leading to waste buildup, fluid imbalance, and other health issues....................."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "For an appointment, please contact our office or visit our website to schedule a convenient time for your consultation. ",
  number: "+8801674945117 , 01729623160",
  email_address: "drritataher.info@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
