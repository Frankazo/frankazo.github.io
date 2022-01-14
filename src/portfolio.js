const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://frankluisravelo.com',
  title: 'FL~R',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Frank',
  role: 'Web Developer',
  description:
    "I'm a Creative Problem Solver who likes challenges!",
  resume: './frankluisravelo.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/franklr',
    github: 'https://github.com/frankazo',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'UI Styles system',
    company: 'Center Centre UIE',
    description:
      'Developed a responsive landing page to promote and funnel UX profesionals to events, following design patterns and directions from the UX designers.',
    stack: ['CSS', 'HTML', 'Responsive'],
    sourceCode: 'https://github.com/uie-com/css-cc',
    livePreview: 'https://www.centercentre.com/ui/',
  },
  {
    name: 'Landing Page',
    company: 'Center Centre UIE',
    description:
      'Developed a responsive landing page to promote and funnel UX profesionals to events, following design patterns and directions from the UX designers.',
    stack: ['HTML', 'CSS', 'Responsive'],
    sourceCode: 'https://github.com/uie-admin/intensiveAATUR',
    livePreview: 'https://aatur.uie.com/',
  },
  {
    name: 'Web App',
    company: 'Just One Penny',
    description:
      'Shaped and supported Just One Penny’s app by delivering and documenting reusable components, coded using TypeScript, React, and Node, ensuring cross-browser functionality and responsiveness.',
    stack: ['React', 'Node', 'Express', 'MongoDB'],
    livePreview: 'https://justonepenny.org/',
  },
  {
    name: 'Come Criollo',
    company: 'General Assembly',
    description:
      'App to help connect people with small businesses in third world countries, You as a User can see restaurants around your area, Like, leave reviews, and connect with them.',
    stack: ['React', 'Node', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/Frankazo/come-criollo-client',
    livePreview: 'https://frankluisravelo.com/come-criollo-client/#/',
  },
  {
    name: 'InvApp',
    company: 'General Assembly',
    description:
      'A visual workspace that allows you to create, and edit visual tables.',
    stack: ['JS', 'HTML/CSS', 'Ruby on Rails', 'PostgreSQL'],
    sourceCode: 'https://github.com/Frankazo/inventory-app',
    livePreview: 'https://frankazo.github.io/inventory-app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'Express',
  'Git',
  'PHP',
  'MongoDB',
  'MAMP',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'frankluisravlo@mail.com',
}

export { header, about, projects, skills, contact }
