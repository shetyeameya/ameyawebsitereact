export const TextData: any = [
  {
    About: {
      text: "Seasoned Engineer with 8 years of experience in React, React Native, MongoDB, and PostgreSQL, excelling in scalable web and mobile applications development, server-side rendering, and state management. Proven expertise in the Software Development Life Cycle, thriving in Agile and SCRUM environments, and renowned for strong problem-solving and communication skills.",
      data: `Albert Einstein's famous words, "Life is like riding a bicycle. To keep your balance, you must keep moving," resonate with me deeply, especially during challenging times. I’ve learned the importance of addressing issues head-on and setting achievable short-term goals to stay motivated and focused.\n\nExcellence, for me, is not just about motivation but also about inspiration and perseverance. I believe in the power of a collective effort and the importance of staying determined, regardless of hurdles and failures. This belief has guided me through my educational journey, starting from St. Mary's High School, progressing to Ruia Junior Engineering College, and culminating in an undergraduate degree in Electronics from KC College of Engineering.\n\nPursuing my passion for electronics and computers led me to Southern Methodist University for my master’s degree, marking the beginning of a lifelong learning journey. After graduation, I joined Webspun LLC, where I developed an iOS application for stock investors from scratch. This role provided me with invaluable experience and set the stage for my next role at RumbleOn.\n\nAt RumbleOn, I started as a Junior iOS Developer, navigating the challenges of working with Objective-C, and quickly adapted to the new environment. This experience was crucial for my growth and understanding of mobile development. The transition to React and being promoted to Project Manager were significant milestones in my career, providing me with a comprehensive view of software development and project management.\n\nNow, I have come full circle, returning to my roots as a ReactJS and React Native developer, fully embracing coding, my true passion. I’ve learned that hard work, resilience, and a passion for learning are the keys to success in this ever-evolving industry.`,
    },
    Experience: {
      text: "My professional journey kicked off in grand style after my graduation when I joined Webspun LLC. There, I single-handedly developed an iOS application, serving investors with vital information on publicly listed stocks. This pivotal experience laid the groundwork for my skills in mobile development.",
      data: " My professional journey kicked off in grand style after my graduation when I joined Webspun LLC. There, I single-handedly developed an iOS application, serving investors with vital information on publicly listed stocks. This pivotal experience laid the groundwork for my skills in mobile development.\nA year later, I transitioned to RumbleOn, stepping into the role of a Junior iOS Developer. Initially, the transition was challenging; I was well-versed in Swift but had only a basic understanding of Objective-C, the primary language used in the company's codebase. However, this challenge only fueled my growth, as I rapidly expanded my skills and knowledge in Objective-C.\nThe journey at RumbleOn took an exciting turn when we shifted our focus to React. This was a new arena for me, but I embraced the challenge, dedicating myself to learn and excel in React development. Over the years, my efforts and dedication didn't go unnoticed. I was promoted to Project Manager, a role that brought its own set of challenges and learning opportunities.\nManaging a team of 24 offshore developers, I navigated through different time zones, managing stress, and ensuring seamless project execution. My responsibilities included handling JIRA, managing assets, addressing issues and changes on the fly, and ensuring the development process was smooth—all while contributing to the codebase.\nToday, I’ve circled back to my first love - coding, serving as a ReactJS and React Native developer. This journey, filled with learning and growth, has shaped me into a versatile developer and leader, ready to tackle any challenge that comes my way. ",
    },
    Extra: {
      text: "Today, as I look back, I feel I have come a long way from being an inquisitive little child.What is more, today, apart from academic excellence the requirement for an all round personality of a professional is a must and of course an added advantage. ",
      data: "Today, as I look back, I feel I have come a long way from being an inquisitive little child.What is more, today, apart from academic excellence the requirement for an all round personality of a professional is a must and of course an added advantage. Sure footed and focused as a student I have been captain of senior school, winning the All Round Student award multiple times. Passionate about sports I have been an avid player of football and cricket winning several awards and certificates. I have also had the fine privilege of being the General Coordinator of the technical and cultural festival of my college. As the Cultural General Coordinator, I worked diligently to prove my mettle and earn accolades for myself. All these activities have indicated my diverse choices for work. I look upon all these experiences as opportunities where I could gauge my own plusses and areas where I needed to enhance my output. Thisapart, participation in many co-curricular activities has added a positive note to my character.",
    },
  },
];
export type Skill = {
  title: string;
  description: string;
};

export const skillsList: Skill[] = [
  {
    title: "Libraries",
    description:
      "React, React Native, Ajax, jQuery, Tesseract- OCR, Material UI, ANT Design",
  },
  {
    title: "Databases & Storage",
    description:
      "MongoDB, PostgreSQL, SQLite, Parse, Heroku, CoreData, Firebase",
  },
  {
    title: "Languages",
    description:
      "C, C++, Java, Objective C, Swift, Python, JavaScript, TypeScript, HTML, node.js",
  },
  {
    title: "Development Tools",
    description:
      "Visual Studio, XCode, Android Studio, Postman, GraphQL, Swagger, Sketch 3",
  },
  {
    title: "Design Patterns",
    description: "MVC, MVVM, Protocol Oriented Programming, OOP, Singleton",
  },
  {
    title: "Domains",
    description:
      "Finance, Social Networking, E-commerce, Mobile App Development",
  },
  {
    title: "Management Tools",
    description: "Git, SourceTree, Bitbucket, figma, Jira",
  },
];

export type timelineType = {
  title: string;
  description: string;
};

export type mainTimeline = {
  title: string;
  desc: timelineType[] | string;
};

export const timelineData: mainTimeline[] = [
  {
    title:
      "Bachelor of Science in Electronics Engineering | University of Mumbai | June 2013",
    desc: "Project on Student proxy built a biometric attendance collector, where the teacher can spend more time teaching and solving doubts of students than to spend time in checking that the students are not marking present for other students. The machine would use the student fingerprint as a check method to see if the student is present in class. If the student was absent a message would be sent to the parent's number in the system about it. The duration of the message sent could be altered.",
  },
  {
    title:
      "Axis Electrical PVT LTD | Electrical Design Engineer | May 2013-July 2014",
    desc: [
      {
        title: "Innovative Circuit Design",
        description:
          "Developed and tested advanced circuit designs to improve efficiency and reliability for client projects.",
      },
      {
        title: "Project Management",
        description:
          "Managed multiple projects, ensuring they were completed on time and within budget while maintaining high-quality standards.",
      },
      {
        title: "Client Collaboration",
        description:
          "Worked closely with clients to understand their requirements and provided tailored solutions that met their specific needs.",
      },
      {
        title: "Compliance and Safety",
        description:
          "Ensured all designs followed regulatory compliance and safety standards, reducing risk and enhancing performance.",
      },
      {
        title: "Cross-functional Teamwork",
        description:
          "Collaborated with cross-functional teams to integrate electrical designs with mechanical and software components.",
      },
      {
        title: "Continuous Improvement",
        description:
          "Implemented continuous improvement practices to enhance design processes and workflows, increasing overall productivity.",
      },
      {
        title: "Technical Documentation",
        description:
          "Created comprehensive technical documentation for each project, facilitating smooth handovers and future maintenance work.",
      },
      {
        title: "Problem-solving",
        description:
          "Diagnosed and solved complex electrical issues during project execution, ensuring minimal disruption and delays.",
      },
      {
        title: "Mentorship",
        description:
          "Mentored junior engineers, sharing best practices and knowledge to uplift the overall skill set of the team.",
      },
      {
        title: "Innovative Automation Solutions",
        description:
          "Designed automation systems that increased productivity and reduced manual errors for clients in various industries.",
      },
      {
        title: "Energy Efficiency Optimization",
        description:
          "Optimized energy consumption in electrical designs, contributing to cost savings and environmental sustainability for clients.",
      },
    ],
  },
  {
    title:
      "Master of Science in Electrical Engineering | Southern Methodist University, Dallas | May 2016",
    desc: [
      {
        title: "PROJECT-CALO-METER",
        description:
          "Employed Version Control Systems (VCS) utilizing Git for systematic configuration management. Developed an innovative mobile application that empowers users to capture images of their dining receipts from established franchises such as PIZZA HUT, STARBUCKS, and CHICK FIL A. The app utilizes Optical Character Recognition (OCR) powered by Tesseract to parse text data, interfacing with an SQLite database to calculate and display the caloric content of the items listed on the receipt. The application architecture was constructed with CoreData for persistent data management and AVFoundation for multimedia handling, with Objective-C as the primary programming language.",
      },
      {
        title: "CHAT APP",
        description:
          "Engineered a peer-to-peer chat application that allows users to establish a connection and communicate via Bluetooth. The application was designed to provide a straightforward user experience while facilitating real-time messaging amongst individuals using the same app. This project was entirely developed in Objective-C, showcasing proficiency in creating interactive, user-friendly interfaces.",
      },
      {
        title: "FOLLOWER",
        description:
          "Engineered a peer-to-peer chat application that allows users to establish a connection and communicate via Bluetooth. The application was designed to provide a straightforward user experience while facilitating real-time messaging amongst individuals using the same app. This project was entirely developed in Objective-C, showcasing proficiency in creating interactive, user-friendly interfaces.",
      },
      {
        title: "FOLLOWER",
        description:
          "Conceived and implemented a social tracking application reminiscent of Instagram's follow feature, enabling users to monitor their social connections. The app integrates a backend database utilizing Parse and Heroku to manage user relationships and interactions. Features include the ability for users to follow or unfollow others within the platform. The application was developed using Swift, providing a modern and responsive user experience.",
      },
      {
        title: "WEATHER APP",
        description:
          "Crafted a dynamic weather reporting application with continuous background updating capabilities to fetch real-time meteorological data. Incorporated TableView alongside data source and delegate patterns for presenting information. Leveraged Alamofire for efficient network request handling and data retrieval from an open weather API, ensuring users have access to the latest weather conditions.",
      },
      {
        title: "DICE GAME",
        description:
          "Crafted a dynamic weather reporting application with continuous background updating capabilities to fetch real-time meteorological data. Incorporated TableView alongside data source and delegate patterns for presenting information. Leveraged Alamofire for efficient network request handling and data retrieval from an open weather API, ensuring users have access to the latest weather conditions.",
      },
    ],
  },
  {
    title: "Research Assistant at SMU | iOS Developer | July 2016-Jan 2017",
    desc: [
      {
        title: "Pioneered a Wireless Network Discovery & Audit Tool",
        description:
          "Created a unique application that maps out all available wireless networks and their properties, presenting the compiled data in a user-friendly interface.",
      },
      {
        title: "Crafted a Multimedia Information Aggregator",
        description:
          "Developed an app that amalgamates news, sports updates, and entertainment from multiple RSS feeds, streamlining user access to diverse content streams.",
      },
      {
        title: "Revolutionized the Research Data Collection Process",
        description:
          "Formulated an application dedicated to streamlining the data collection process for clinical research, thereby enhancing data accuracy and processing efficiency.",
      },
      {
        title: "Database Design & Interface Adaptation",
        description:
          "Spearheaded database schema design for research data aggregation, while fine-tuning the user interface to facilitate seamless operation across various devices.",
      },
      {
        title: "Elevated UX through Advanced Data Visualization",
        description:
          "Incorporated compelling graphical data presentations, such as charts and graphs, to convey complex data sets in a digestible format.",
      },
      {
        title: "Optimized System Performance",
        description:
          "Deployed a SQLite database to bolster the app's responsiveness and efficiency, ensuring swift data manipulation and retrieval.",
      },
      {
        title: "Comprehensive Application Testing & Debugging",
        description:
          "Conducted exhaustive application testing, identifying and rectifying critical issues to optimize functionality and user satisfaction.",
      },
    ],
  },
  {
    title: "Webspun LLC | iOS Developer | Jan 2017-Nov 2017",
    desc: [
      {
        title: "Developed a Dynamic Stock Exchange Application",
        description:
          "Designed to empower users by tracking stock expenditures, account maintenance, and delivering real-time market data via DNS server-driven push notifications.",
      },
      {
        title: "Innovative Bridging & Swift 3 Expertise",
        description:
          "Leveraged advanced Swift 3 features and autolayouts for establishing a bridge header between Objective-C and Swift for optimal performance, ensuring code cleanliness and efficiency.",
      },
      {
        title: "Data Management",
        description:
          "Yahoo Finance API integration. Effectively consumed web services to validate backend data, storing it using the robust Parse open-source DB.",
      },
      {
        title: "Google Firebase Authentication Prototype",
        description:
          "Crafted an authentication interface featuring Navigation Control, advanced session management, and efficient threading.",
      },
      {
        title: "Proactive Debugging & Enhancement",
        description:
          "Resolved critical bugs, like stock number discrepancies. Enhanced user experience by matching stocks based on user preferences and market trends.",
      },
      {
        title: "End-to-End Build Management",
        description:
          "Produced adhoc builds for internal tests while diligently managing developer distribution certificates and provisioning files.",
      },
      {
        title: "Advanced Machine Learning Implementation",
        description:
          "Innovated a system that assesses user stocks, recommending analogous stocks with a similar profile.",
      },
    ],
  },

  {
    title:
      "RumbleOn | Sr.React Developer(web and native)/iOS Developer | Jan 2018- Oct 2023",
    desc: [
      {
        title: "Key Project Leadership",
        description:
          "Spearheaded the development of notable platforms like RumbleOn consumer app, TeamRumbleon appraisal tool, RumbleonClassifieds, and the comprehensive Dealer Portal.",
      },
      {
        title: "Comprehensive Logistics Application",
        description:
          "Architected a full-scale logistics app, managing vehicle units from procurement to sale. Adopted MongoDB for robust data operations, crafted the frontend with React TypeScript, and introduced a mobile interface using React Native.",
      },
      {
        title: "Codebase Evolution",
        description:
          "Orchestrated the pivotal transition from Objective C to Swift, expertly designing UI views both via coding and Xib. Prioritized versatile UI views leveraging autolayout to ensure adaptability across diverse screen dimensions.",
      },
      {
        title: "Advanced Payment & Data Integration",
        description:
          "Seamlessly integrated Stripe for diverse payment solutions, utilized Nada RESTful services for accurate vehicle identification, and harnessed OCR technology for VIN decoding through photo inputs.",
      },
      {
        title: "Cutting-edge Classifieds System",
        description:
          "Sculpted the Rumbleon Classifieds architecture with React, employing JavaScript & TypeScript. Leveraged GraphQL for efficient data queries and adopted Elastic Search for optimized inventory exploration.",
      },
      {
        title: "State-of-the-art Middleware & Management",
        description:
          "Incorporated Redux Thunks for Rumbleon Code action creation. In contrast, the Classifieds benefitted from the Context for state oversight and the adept use of addEventListener for event processing.",
      },
      {
        title: "Responsive Web Components",
        description:
          "Devised universally adaptable web components using React.js and TypeScript, ensuring a seamless user experience across desktops, mobiles, and tablets.",
      },
      {
        title: "Engaging User Interaction",
        description:
          "Introduced an intuitive chat feature in Classifieds via the Progress/Kendo library, facilitating users to extract vehicle specifics from peers.",
      },
      {
        title: "Exemplary Project Management",
        description:
          "Stepped into a decisive role as Project Manager for Classifieds, managing tasks like Jira oversight, ticket generation, translating business mandates to tech specifications, and leading a robust team spanning India and Sri Lanka.",
      },
      {
        title: "AI-driven Recommendations",
        description:
          "Employed machine learning to curate vehicle suggestions tailored to users' historical preferences, optimizing choice in terms of vehicle specifications and budget considerations.",
      },
      {
        title: "Dedication to Documentation",
        description:
          "Hold a consistent track record in updating technical documentation, mirroring real-time modifications in the operational backdrop.",
      },
    ],
  },
];
