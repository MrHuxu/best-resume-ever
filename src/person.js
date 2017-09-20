/* eslint-disable */
export const PERSON = {
  name: {
    first: '胡',
    middle: '旭'
  },
  position: '高级开发工程师',
  birth: {
    year: '1992',
    month: '05',
    day: '07'
  },
  education: [{
    degree: ' 计算机科学学士学位',
    timeperiod: '2010/09 - 2014/06',
    description: '哈尔滨工业大学'
  }],
  experience: [{
    company: 'FreeWheel',
    position: '高级开发工程师',
    timeperiod: '2014/07 至今',
    description: {
      label: '在 UI 团队从事全栈开发的职位.',
      tasks: [
        '维护我们团队使用 RoR 和 jQuery 编写的旧 UI 系统.',
        '使用公司内部的 SparkUI 完整重构一个模块的前端代码',
        '在纽约工作 3 个月时间, 给美国同事提供技术支持'
      ]
    }
  }],
  projects: [{
    name: 'react-go-boilerplate' ,
    url: 'http://github.com/MrHuxu/react-go-boilerplate',
    teckStack: [ 'React.js', 'Redux', 'Webpack', 'blessed', 'Go', 'Docker' ],
    description: {
      label: '一个用于快速搭建前后算分离的 Web 应用的脚手架.',
      features: [
        '前后端代码都支持热更新.',
        '在开发模式下提供了一个基于 blessed 搭建的 dashboard.',
        '支持用 Docker 进行部署.'
      ]
    }
  }, {
    name: 'blogo' ,
    url: 'http://blog.xhu.me',
    teckStack: [ 'Go' ],
    description: {
      label: '一个静态博客系统.',
      features: [
        '使用 Go 搭建后端 server.',
        '文章以 Markdown 的形式进行存储.'
      ]
    }
  }, {
    name: 'bar' ,
    url: 'http://bar.xhu.me',
    teckStack: [ 'React.js', 'Redux', 'Go', 'MongoDB' ],
    description: {
      label: ' 一个小型的 twitter 系统.',
      features: [
        '任何访问者在获得权限后可以发布/扩展/回复一条 post.',
        '使用 React 和 Go 进行前后端分离开发.',
        '内容使用 MongoDB 进行存储.'
      ]
    }
  }, {
    name: 'yrel' ,
    url: 'http://yrel.xhu.me',
    teckStack: [ 'Go', 'Yacc', 'React.js', 'Redux' ],
    description: {
      label: '一个小型的脚本语言.',
      features: [
        '使用 Go 实现了词法分析器.',
        '使用 goyacc 生成语法分析起.',
        '最后获得源码的抽象语法树并直接执行.'
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
