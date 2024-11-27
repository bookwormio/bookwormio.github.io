import karena_headshot from "../assets/karena_headshot.jpg";
import nicole_headshot from "../assets/nicole_headshot.jpeg";
import riley_headshot from "../assets/riley_headshot.jpg";
import sam_headshot from "../assets/sam_headshot.jpg";
import { User } from "../components/TeamPage/UserInfo/UserInfoBox";

export const users: User[] = [
  {
    fullName: "Riley Crahen",
    role: "Founder",
    headShotPath: riley_headshot,
    biography:
      "Riley is a graduating computer science student at the University of Utah and the founder of Bookworm. With extensive experience in full-stack development from internships at companies like Instructure and Join, he brings expertise in building scalable React applications and a passion for elegant, high-performance software solutions. As lead engineer, Riley implemented rigorous code review processes and mentored team members in React and TypeScript, helping Bookworm achieve top ranking in their class and secure startup funding. When not coding, he can be found training for ultra-marathons or exploring the western deserts of the United States. Riley's leadership reflects his belief that with the right team and mindset, anything is possible.",
    email: "rileycrahen@gmail.com",
    linkedIn: "https://www.linkedin.com/in/riley-crahen-1a65b21a5/",
    github: "https://github.com/rilescode",
  },
  {
    fullName: "Karena Klinkenberg",
    role: "Lead Designer",
    headShotPath: karena_headshot,
    biography:
      "Using her major in Data Science, Karena is interested in using cutting-edge AI/ML tools to improve the wellbeing of the earth and those who inhabit it. Aside from her contributions to the Bookworm project, Karena has worked as an AI/ML engineer in the realm of health and human services to improve the efficacy of care provided by social workers and their partner organizations. She is passionate about the outdoors, social progress, and pickleball. When not doing work in a cafe, she can be found hiking in the foothills, biking around the city, or reading with her cat.",
    email: "karenajklink@icloud.com",
    linkedIn: "https://www.linkedin.com/in/karena-klinkenberg/",
    github: "https://github.com/karenaklinkenberg",
  },
  {
    fullName: "Sam Christensen",
    role: "Lead Architect",
    headShotPath: sam_headshot,
    biography:
      "Sam is graduating with a Bachelor's degree in Computer Science with a minor in Business. Before BookWorm, Sam gained experience as a full stack software engineer helping develop for We Care Insurance and PayIt before eventually joining the University of Utah’s School of Atmospheric Science Department to help build geospatial web applications. Sam hopes to become a full-stack software engineer where he can use his skills in full-stack development and system architecture.",
    email: "samctensen@gmail.com",
    linkedIn: "https://www.linkedin.com/in/samctensen/",
    github: "https://github.com/samctensen/",
  },
  {
    fullName: "Nicole Forrester",
    role: "Project Lead",
    headShotPath: nicole_headshot,
    biography:
      "Nicole is a double major in Computer Science and Applied Mathematics and current Logistics Software Engineer Intern. In the Department of Mathematics, she conducts research on polar bear energetics and movement under the guidance of Professors Ken Golden and Jody Reimer. She enjoys mobile app development and automation using scripting languages. Aspiring to build a career in Software Engineering and Management, she aims to combine her analytical thinking, leadership skills, and programming expertise. Outside of work, you will find Nicole on the trails, lifting, reading, or spending time with friends/family.",
    email: "nicoleforrester07@gmail.com",
    linkedIn: "https://www.linkedin.com/in/nicole-forrester-5800681a6/",
    github: "https://github.com/nforr",
  },
];
