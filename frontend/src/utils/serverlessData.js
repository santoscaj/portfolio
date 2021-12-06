export const projectData = [
  {
      "_id": "2lpo7fl2xijxuensdtohwewc",
      "order": 1,
      "name": "Portfolio page",
      "description": "Quick portfolio page with some examples of my previous work, experience and projects.",
      "fullDescription": "This page intends to have a quick view of some recent projects and introduces new technologies. The frontend is build with React JS and the backend is currently backed by a NodeJS server. However, version 2 intends to introduce a server with a Golang engine. This page is currently hosted in a AWS EC2 instance, however, the application can be automatically deployed on any server/s as it was configured with Ansible.",
      "image": "portfolio.png",
      "link": "https://santosaj.com/",
      "githubLink": "https://github.com/santoscaj/portfolio",
      "skills": [
          {
              "name": "Database",
              "keywords": [
                  "Sequelize",
                  "Mongoose",
                  "Database",
                  "DB",
                  "ORM",
                  "DocumentDB"
              ],
              "detail": "ORM was used to communicate the backend with the Database",
              "_id": "0hd84u7t25vdv3q8264ys52g"
          },
          {
              "name": "Typescript",
              "keywords": [
                  "typescript"
              ],
              "detail": "Typescript was used to code the frontend",
              "_id": "0zslddzjssnce078933yjmhw"
          },
          {
              "name": "Docker",
              "keywords": [
                  "container",
                  "docker"
              ],
              "detail": "Docker is used to run the database in production. Also used to deploy the complete project in development mode",
              "_id": "6r7g8z0cbidxe4s60creu3nx"
          },
          {
              "name": "Frontend",
              "keywords": [
                  "frontend",
                  "framework",
                  "React"
              ],
              "detail": "React JS was used as the frontend Javascript Framework for this project",
              "_id": "nqtzni11kol1y3m34n2pvpku"
          },
          {
              "name": "Ansible",
              "keywords": [
                  "CI/CD",
                  "deployment",
                  "management",
                  "infrastructure as code"
              ],
              "detail": "Ansible was used for automated deployment of this application in any server. only CDN has to be configured in CDN provider.",
              "_id": "bnxfzjtv5400ew4swn0awi7i"
          },
          {
              "name": "Server",
              "keywords": [
                  "NodeJS",
                  "Express",
                  "server",
                  "NPM"
              ],
              "detail": "Express JS was used as the application server on the backend",
              "_id": "6i01w2rdtxsgxaleqxmb6g7a"
          },
          {
              "name": "Security",
              "keywords": [
                  "BcryptJS",
                  "JSONWebtoken",
                  "email confirmation"
              ],
              "detail": "Several packages were used to guarantee the security of the users. BcryptJS to encrypt password. JSONWebtoken for the authentication with expiration. Email and password configuration were secure",
              "_id": "t8t9kwil5vg26mkzakwid627"
          },
          {
              "name": "API",
              "keywords": [
                  "REST",
                  "API",
                  "postman"
              ],
              "detail": "Use REST API to communicate between the frontend and the backend",
              "_id": "kalm7agle7kdy3pgoriymu6i"
          }
      ]
  },
  {
      "_id": "hbyz35ua1yd36ddl0x10t2vy",
      "order": 2,
      "name": "Todo list",
      "description": "The purpose of this project was to implement a live todo list. For a quick test use either one of these users: user1, user2, guest, admin. Their password should be the same as their username. You can also registrate your own account but there are some small bugs after the registration.",
      "fullDescription": "The goal of this project was to include different Software Development technologies in one place. In the frontend I used a CSS preprocessor Sass, pug ( HTML preprocessor), Vue JS as the Framework and TypeScript to write the code. The frontend communicates with the backend via REST APIs. On the backend I used NodeJs with Express as the application framework. The Todo list and Todo items are stored in a relational database using Sequelize as the ORM. The users are stored in a DocumentDB using the Mongoose ORM. There is a register button and an user should receive an email with a temporary password. Once registered the user can start writing notes and adding friends. To have two friends modifying a list simultaneously we use Web Sockets and for the Authentication the conventional JSON Webtoken with BcryptJS as the hashing password tool. The project is set up for testing and production with Docker",
      "image": "todolist.png",
      "link": "https://todolist.santosaj.com/",
      "githubLink": "https://github.com/santoscaj/todo",
      "skills": [
          {
              "name": "Database",
              "keywords": [
                  "Sequelize",
                  "Mongoose",
                  "Database",
                  "DB",
                  "ORM",
                  "DocumentDB",
                  "Mongo",
                  "PostgreSQL",
                  "PSQL",
                  "query"
              ],
              "detail": "ORM was used to communicate the backend with the Database",
              "_id": "617df99d2c0f4d6c020e71e6"
          },
          {
              "name": "Typescript",
              "keywords": [
                  "typescript"
              ],
              "detail": "Typescript was used to code the frontend",
              "_id": "r70mtl6vrpwvd9qyrq64cnpt"
          },
          {
              "name": "Docker",
              "keywords": [
                  "container",
                  "docker"
              ],
              "detail": "Docker is used to run the database in production. Also used to deploy the complete project in development mode",
              "_id": "9l95hzpbuwf2tqlctygsjbab"
          },
          {
              "name": "Frontend",
              "keywords": [
                  "frontend",
                  "framework",
                  "Vue"
              ],
              "detail": "Vue JS was used as the frontend Javascript Framework for this project including all of the Vue tools such as Vuex (State manager), vue-class-components and the Vue Router",
              "_id": "hg2od3s72verudi7l5he69em"
          },
          {
              "name": "Preprocessors",
              "keywords": [
                  "SASS",
                  "PUG",
                  "SCSS"
              ],
              "detail": "Used SASS and PUG as the frontend preprocessors for rapid code developent and easy view at a glance",
              "_id": "gqo4xzk4sgss4kjuamdov3d1"
          },
          {
              "name": "frontend library",
              "keywords": [
                  "view-design"
              ],
              "detail": "used view-design as the frontend UI library",
              "_id": "d0za1voxyla7hipc1dq14s16"
          },
          {
              "name": "Server",
              "keywords": [
                  "NodeJS",
                  "Express",
                  "server",
                  "NPM"
              ],
              "detail": "Express JS was used as the application server on the backend",
              "_id": "li6boqyc2uwfn30iw66e40qw"
          },
          {
              "name": "Security",
              "keywords": [
                  "BcryptJS",
                  "JSONWebtoken",
                  "email confirmation"
              ],
              "detail": "Several packages were used to guarantee the security of the users. BcryptJS to encrypt password. JSONWebtoken for the authentication with expiration. Email and password configuration were secure",
              "_id": "4lwqsc0pjt8bq9z58v9fp6a3"
          },
          {
              "name": "API",
              "keywords": [
                  "REST",
                  "API"
              ],
              "detail": "Use REST API to communicate between the frontend and the backend",
              "_id": "qsysfdyfb9zqb584drma9uk7"
          },
          {
              "name": "Additional tools",
              "keywords": [
                  "babel",
                  "ESLint"
              ],
              "detail": "Additional tools used in this project",
              "_id": "p4n363x3jmpzf9o2lmw6pznl"
          }
      ]
  },
  {
      "_id": "hiy317doffri1uhmdghhh3gb",
      "order": 3,
      "name": "Menapage",
      "description": "More than a difficult project, this page was designed for my beautiful wife at a time that we were living in separate countries due to COVID. As a private cheesy Website many of the features are hidden for the public but for the basic view you can login with the username and password 'guest'",
      "fullDescription": "This Website is a carousel of images with a special message that change depending on the day of the month. It is also interactive as when you read all of the messages you get to experience surprise images and prizes with additional messages. This website can be installed in the phone thanks to Vue PWAs(Performance Web Apps) and deliver phone notifications to the user using Google Firebase. The notifications come from a chat included in the frontend for a live chat. The first version of this website used Relational Databases, but these had to be changed to a DocumentDB to make it easy to migrate from server to servrer. This project has two different frontends, one for administration purposes (adding images, changing the message, etc) and other for the end user. Image can take a bit to load on the first time; pending: image compression and initial image quality based on internet speed",
      "image": "menapage.png",
      "link": "https://gaminob.santosaj.com/",
      "githubLink": "https://github.com/santoscaj/menapage",
      "skills": [
          {
              "name": "Database",
              "keywords": [
                  "Sequelize",
                  "Mongoose",
                  "Database",
                  "DB",
                  "ORM",
                  "DocumentDB",
                  "Mongo"
              ],
              "detail": "ORM was used to communicate the backend with the Database",
              "_id": "071whctuej5n489qq512zgfr"
          },
          {
              "name": "Typescript",
              "keywords": [
                  "typescript"
              ],
              "detail": "Typescript was used to code the frontend",
              "_id": "jgr6rx6m7vwpfa7u73dfc02x"
          },
          {
              "name": "Docker",
              "keywords": [
                  "container",
                  "docker"
              ],
              "detail": "Docker is used to run the database in production. Also used to deploy the complete project in development mode",
              "_id": "gxwem23il8c5oje3smdbi1mz"
          },
          {
              "name": "Frontend",
              "keywords": [
                  "frontend",
                  "framework",
                  "Vue"
              ],
              "detail": "Vue JS was used as the frontend Javascript Framework for this project including all of the Vue tools such as Vuex (State manager), vue-class-components and the Vue Router",
              "_id": "qg2sj8td3rxtovpxhw92xpab"
          },
          {
              "name": "Preprocessors",
              "keywords": [
                  "SASS",
                  "PUG",
                  "SCSS"
              ],
              "detail": "Used SASS and PUG as the frontend preprocessors for rapid code developent and easy view at a glance",
              "_id": "s5stuaghxtk6j7vi8j73oi7x"
          },
          {
              "name": "frontend library",
              "keywords": [
                  "view-design"
              ],
              "detail": "used view-design as the frontend UI library",
              "_id": "w3jj4erszm0bd9vbqn32gebf"
          },
          {
              "name": "Server",
              "keywords": [
                  "NodeJS",
                  "Express",
                  "server",
                  "NPM"
              ],
              "detail": "Express JS was used as the application server on the backend",
              "_id": "gygqmvjb9jifxkv16uh5smx7"
          },
          {
              "name": "Security",
              "keywords": [
                  "BcryptJS",
                  "JSONWebtoken"
              ],
              "detail": "Several packages were used to guarantee the security of the users. BcryptJS to encrypt password. JSONWebtoken for the authentication with expiration.",
              "_id": "hi0b8q23l4zz12mijockm07z"
          },
          {
              "name": "API",
              "keywords": [
                  "REST",
                  "API"
              ],
              "detail": "Use REST API to communicate between the frontend and the backend",
              "_id": "mh0uebemgaigkikfbu7e7n5s"
          },
          {
              "name": "Additional tools",
              "keywords": [
                  "babel",
                  "ESLint"
              ],
              "detail": "Additional tools used in this project",
              "_id": "pw0zcc45om788r2exk8p62jj"
          }
      ]
  },
  {
      "_id": "wrbb7q689p3ooic1pghh5ckl",
      "order": 4,
      "name": "Ticket Management Tool",
      "description": "Tool to help us manage different tickets",
      "fullDescription": "In a company that I used to work my team managed different ticketing tools and with a 24/7 rotation and different team members at differnt times there was a need of a centralize tool to manage all tickets for all users. This project was a solution for this issue. The backend of the project is a Python program that performs the ticket lookup and matches them with the team members. Unfortuntaly as this belonged to a company the code for this (and the backend portion of it) are proprietary and cannot be shown. However, the link shows a playful page of this tool",
      "image": "ticket.png",
      "link": "https://ticket.santosaj.com/",
      "githubLink": "",
      "skills": [
          {
              "name": "Frontend",
              "keywords": [
                  "frontend",
                  "framework",
                  "Vue"
              ],
              "detail": "Vue JS was used as the frontend Javascript Framework for this project including all of the Vue tools such as Vuex (State manager), vue-class-components and the Vue Router",
              "_id": "ihjooilxmb0o75b7gpxc5ril"
          },
          {
              "name": "Preprocessors",
              "keywords": [
                  "SASS",
                  "PUG",
                  "SCSS"
              ],
              "detail": "Used SASS and PUG as the frontend preprocessors for rapid code developent and easy view at a glance",
              "_id": "y861plyc71v2m3nuehbp4b2l"
          },
          {
              "name": "frontend library",
              "keywords": [
                  "view-design"
              ],
              "detail": "used view-design as the frontend UI library",
              "_id": "8phxiqk5wmoaclkzf6g4kvo4"
          },
          {
              "name": "Python",
              "keywords": [
                  "python"
              ],
              "detail": "Python programming was used for this code",
              "_id": "1qhh1x9rmk7sg1lg74s4kd64"
          },
          {
              "name": "API",
              "keywords": [
                  "REST",
                  "API"
              ],
              "detail": "Use REST API to communicate between the backend and the different ticketing tools",
              "_id": "07ejol1zcjwxhgzs10xcjj7s"
          }
      ]
  },
  {
      "_id": "b85thlzk1aihs9rf0c3d0eko",
      "order": 5,
      "name": "OpusChecks",
      "description": "Website for a company created to run background checks in the Dominican Republic.",
      "fullDescription": "I was part of a small team of programmers that worked on the development of the website for the OpusChecks company. Code for this website is also prorietary and cannot be shown",
      "image": "opuschecks.png",
      "link": "https://opuschecks.com/",
      "githubLink": "",
      "skills": [
          {
              "name": "Frontend",
              "keywords": [
                  "frontend",
                  "framework",
                  "Vue"
              ],
              "detail": "Vue JS was used as the frontend Javascript Framework for this project including all of the Vue tools such as Vuex (State manager), vue-class-components and the Vue Router",
              "_id": "617df99d2c0f4d6c020e71e7"
          },
          {
              "name": "Preprocessors",
              "keywords": [
                  "SASS",
                  "PUG",
                  "SCSS"
              ],
              "detail": "Used SASS and PUG as the frontend preprocessors for rapid code developent and easy view at a glance",
              "_id": "hzwkd9kuyzqfkxepqbdly5i3"
          },
          {
              "name": "frontend library",
              "keywords": [
                  "view-design"
              ],
              "detail": "used view-design as the frontend UI library",
              "_id": "3bzofz8aa9swfsur0rhjb6p9"
          },
          {
              "name": "Python",
              "keywords": [
                  "python"
              ],
              "detail": "Python programming was used for this code",
              "_id": "6ywbmfiw7p57jqej7urmf2zx"
          },
          {
              "name": "API",
              "keywords": [
                  "REST",
                  "API"
              ],
              "detail": "Use REST API to communicate between the backend and the different ticketing tools",
              "_id": "b66lo6llij1vbb1eabks0zyb"
          }
      ]
  }
]


export const careerData = [
  {
      "_id": "aed5yxgyyd4rms4r1hptjeog",
      "company": "mGage (now named Kaleyra)",
      "location": "Santo Domingo, Dominican Republic",
      "startDate": "1523191906",
      "endDate": "1628628706",
      "position": "Senior NOC Analyst",
      "responsabilities": [
          "Troubleshooting application server issues",
          "Monitoring and maintained infrastructure of 1000+ virtual servers and Docker containers",
          "Daily construction and querying of databases (Postgresql, MySQL, Oracle)",
          "Constructed and maintained Python and bash scripts for data lookup, monitoring and automation of processes",
          "Ticket management and follow up for system issues and customer issues"
      ],
      "skills": [
          {
              "name": "Rest API",
              "keywords": [
                  "API",
                  "Postman",
                  "curl"
              ],
              "detail": "Used API building tools like Postman and Curl to test and troubleshoot our API endpoints used by customers",
              "_id": "6vdor5a8t2mkky39594gcdkz"
          },
          {
              "name": "Linux",
              "keywords": [
                  "Centos",
                  "RHEL",
                  "troubleshooting"
              ],
              "detail": "Troubleshot system issues such as Heap Memory problem in the Java applications, Disk space issues, High memory, Database issues, application issues",
              "_id": "adgx1daoo21urr7mdpf5izn9"
          },
          {
              "name": "Scripting",
              "keywords": [
                  "Bash",
                  "Python",
                  "Ansible",
                  "Automation"
              ],
              "detail": "Constructed scripts for monitoring and process automation",
              "_id": "727nv1zrw55rf0x9t2v6fqf4"
          },
          {
              "name": "Relational Databases",
              "keywords": [
                  "Oracle",
                  "MySQL",
                  "Postgres"
              ],
              "detail": "Query construction of relational databases",
              "_id": "xcp1ljaez8jbwa4c614spk8o"
          },
          {
              "name": "Monitoring",
              "keywords": [
                  "New Relic",
                  "SolarWinds",
                  "Icinga",
                  "Nagios",
                  "Pingdom"
              ],
              "detail": "Used a plethora of tools for System monitoring, dashboard construction and analysts",
              "_id": "xg7qgj2tsbpu26co8ude0hgx"
          },
          {
              "name": "Ticketing",
              "keywords": [
                  "Service-Now",
                  "Jira",
                  "Atlassian"
              ],
              "detail": "Documentation and follow up of company issues",
              "_id": "t3nd9gqmg1wfino1uv9tdrn0"
          },
          {
              "name": "Microsoft Office",
              "keywords": [
                  "Excel",
                  "Power Point",
                  "Word",
                  "Pivot Tables",
                  "Graph",
                  "Reports"
              ],
              "detail": "High level of data analytics, and visually-rich reports and graphs using most of the tools available in Microsoft Suite.",
              "_id": "6uzizminjvsz1vy9951ixe69"
          },
          {
              "name": "Message Queue",
              "keywords": [
                  "RabbitMQ",
                  "Messaging Queue"
              ],
              "detail": "Monitored Queues with RabbitMQ",
              "_id": "16foueho5frvddtsn0ftnttl"
          },
          {
              "name": "Customer Service",
              "keywords": [
                  "Customer Service",
                  "Support"
              ],
              "detail": "High level of support and service",
              "_id": "dekuyei1irz5sc3pw2sunrxq"
          },
          {
              "name": "SLA",
              "keywords": [
                  "Service Level Agreement"
              ],
              "detail": "Meeting quality standards for the customer",
              "_id": "azwjgmxbfco755u0pocyo0st"
          }
      ],
      "order": 1
  },
  {
      "_id": "dajwoocwaexytvqa3e37g25f",
      "company": "Viva",
      "location": "Santo Domingo, Dominican Republic",
      "startDate": "1215001929",
      "endDate": "1287779529",
      "position": "NOC Technician",
      "responsabilities": [
          "Identified and resolved system malfunctioning and failures to maintain mobile services",
          "Provided managers with detailed weekly reports for a complete analysis of the network failures",
          "Provided High Level of customer service and client relations",
          "Developed leadership skill organizing action plans against network failures"
      ],
      "skills": [
          {
              "name": "Solaris",
              "keywords": [
                  "Unix"
              ],
              "detail": "Checked the network and Unix systems",
              "_id": "piwkyat2xph2xt31kk37wyz1"
          },
          {
              "name": "Monitoring",
              "keywords": [
                  "Monitoring"
              ],
              "detail": "Used a proprietary tools for monitoring",
              "_id": "ira6lo8mbwnblchsmaacjwdp"
          },
          {
              "name": "Priority Scheduling and Issue Management",
              "keywords": [
                  "Issue Management",
                  "Priority"
              ],
              "detail": "Quickly prioritize and escalate issues",
              "_id": "3w2ajbowt29g317stq8yq0aa"
          },
          {
              "name": "Multitasking",
              "keywords": [
                  "Multitask"
              ],
              "detail": "Excellent multitasking skills",
              "_id": "1t4wdcb708m1inca47khe0ps"
          },
          {
              "name": "Customer Service",
              "keywords": [
                  "Customer Service",
                  "Support"
              ],
              "detail": "High level of support and service",
              "_id": "liwppfftwefcf3h5ygr29qh6"
          }
      ],
      "order": 2
  }
]

export const certificationData = [
  {
      "_id": "qtboq11afv05rcaom0evt2ki",
      "order": 5,
      "institution": "Amazon",
      "degree": "AWS Certified Cloud Practitioner",
      "link": "https://www.credly.com/badges/4fa87b49-b225-4170-b4b4-ddc5efd54421?source=linked_in_profile",
      "endDate": 1634302536,
      "expDate": 1728996936
  },
  {
      "_id": "bpkng3k8ul7gugr98cpypwu6",
      "order": 5,
      "institution": "Linux Foundation",
      "degree": "Linux Foundation Certified Systems Administrator",
      "link": "https://www.credly.com/badges/f6844a50-29e7-48da-bc00-5378cf02148d?source=linked_in_profile",
      "endDate": 1605963336,
      "expDate": 1700657736
  }
]

export const educationData = [
  {
      "_id": "06b5q1ib0xdkxxysf6467lix",
      "order": 1,
      "institution": "Rochester Institute of Technology",
      "degree": "Master of Science",
      "field": "Computer Engineering",
      "focus": "Real Time and Embedded System",
      "startDate": "1470947529",
      "endDate": "1514033736",
      "gpa": "3.57",
      "gpaBase": "4.0",
      "link": "https://www.rit.edu/"
  },
  {
      "_id": "5ogu4kxt2k8i9zyky24n08bx",
      "order": 2,
      "institution": "Western Michigan University",
      "degree": "Bachelor of Science",
      "field": "Electrical Engineering",
      "focus": "Power Electronics",
      "startDate": "1314363336",
      "endDate": "1450529736",
      "gpa": "3.13",
      "gpaBase": "4.0",
      "link": "https://wmich.edu/"
  },
  {
      "_id": "a4ed67x9ut79xgld7ktnr3fb",
      "order": 2,
      "institution": "Instituto Tecnico Salesiano",
      "degree": "Technical Degree",
      "field": "Industrial Electronics and Micro-Engineering",
      "focus": "",
      "startDate": "1092947529",
      "endDate": "1450529736",
      "gpa": "3.28",
      "gpaBase": "4.0",
      "link": "https://www.itesa.edu.do/"
  }
]