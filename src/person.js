/* eslint-disable */
export const PERSON = {
  name: {
    first: 'Xu',
    middle: '',
    last: 'Hu',
  },
  position: 'Senior Software Engineer',
  birth: {
    year: '1992',
    month: '05',
    day: '07'
  },
  education: [{
    degree: 'Bachelor of Computer Science',
    timeperiod: '2010/09 - 2014/06',
    description: 'Harbin Institute of Technology'
  }],
  experience: [{
    company: 'FreeWheel',
    position: 'Senior Software Engineer',
    timeperiod: 'since July 2014',
    description: {
      label: 'Working as a full-stack web developer in UI team.',
      tasks: [
        'Maintain legacy UI system buding with RoR and jQuery.',
        'Use an internal frontwork SparkUI to refactor the frontend.'
      ]
    }
  }],
  projects: [{
    name: 'react-go-boilerplate' ,
    url: 'http://github.com/MrHuxu/react-go-boilerplate',
    teckStack: [ 'React.js', 'Redux', 'Webpack', 'blessed', 'Go', 'Docker' ],
    description: {
      label: 'A boilerplate for fastly building the frontend & backend separated web application.',
      features: [
        'Support hot reload for both frontend & backend.',
        'Provide a dashboard based on blessed in development mode.',
        'Support using Docker to deploy the application.'
      ]
    }
  }, {
    name: 'blogo' ,
    url: 'http://blog.xhu.me',
    teckStack: [ 'Go' ],
    description: {
      label: 'A static blog system.',
      features: [
        'Use Go to build the server and render the page with http/template.',
        'Posts are stored as Markdown docs.'
      ]
    }
  }, {
    name: 'bar' ,
    url: 'http://bar.xhu.me',
    teckStack: [ 'React.js', 'Redux', 'Go', 'MongoDB' ],
    description: {
      label: 'A small twitter system.',
      features: [
        'Any visitors who get access can publish/append/reply a post.',
        'Frontend & backend separated.',
        'Contents are stored in MongoDB.'
      ]
    }
  }, {
    name: 'yrel' ,
    url: 'http://yrel.xhu.me',
    teckStack: [ 'Go', 'Yacc', 'React.js', 'Redux' ],
    description: {
      label: 'A small script language.',
      features: [
        'Use Go to implement the Lexer.',
        'Use goyacc to generator the Parser.',
        'Get the AST of the source code and directly execute it.'
      ]
    }
  }],
  // skill level goes 0 to 100
  skills: [{
    name: 'HTML & CSS',
    level: '60'
  }, {
    name: 'React.js & Redux',
    level: '75'
  }, {
    name: 'Node.js',
    level: '70'
  }, {
    name: 'Ruby on Rails',
    level: '80'
  }, {
    name: 'Go',
    level: '65'
  }, {
    name: 'Docker',
    level: '60'
  }],
  skillDescription: 'Also proficient in Adobe Photoshop and Illustrator, grew up bilingual (English and Klingon).',
  contact: {
    email: 'hxtheone@email.com',
    phone: '18609669205',
    'wechat & qq': '990860979',
    github: 'MrHuxu',
    website: 'xhu.me'
  },
  lang: 'en' // en, de, fr, pt, cn, it
};
