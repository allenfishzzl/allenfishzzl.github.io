(function () {
    var app = {};

    var skills = [{
        name: 'HTML(5)',
        img: 'img/icon-html.jpg',
        intro: '语义性，熟练手写符合w3c标准的HTML页面。'
    }, {
        name: 'CSS(3)',
        img: 'img/icon-css.jpg',
        intro: '熟练使用CSS对网页进行（自适应）布局，了解不同浏览器的兼容性。<br /> 这里有一个彩虹样式。'
    }, {
        name: 'Javascript',
        img: 'img/icon-js.jpg',
        intro: '你知道这个东西不简单，现在追求能够用优雅的代码实现功能。'
    }, {
        name: 'jQuery',
        img: 'img/icon-jquery.jpg',
        intro: 'JS的一个类库，基本上可以熟练使用。'
    }, {
        name: 'AngularJS',
        img: 'img/icon-angular.jpg',
        intro: '前端框架，用起来还是比较愉快的，极大减轻了对数据方面的处理，库重水深。'
    }, {
        name:'VueJS',
        img:'img/icon-vue.png',
        intro:'入门简单，类似angular数据处理，但是库轻比NG坑少'
    }, {
        name: 'NodeJS',
        img: 'img/icon-nodejs.jpg',
        intro: '用来自动化。'
    }, {
        name: 'BootStrap',
        img: 'img/icon-bootstrap.jpg',
        intro: '很强大的一个前端框架，自适应布局，各种组件等。'
    }, {
        name: 'Webpack',
        img: 'img/icon-webpack.png',
        intro: '前端领域的构建工具（任务管理工具），力压Grunt和Gulp的意思。这项技术对于重复性的劳动可谓是雪中送炭，熟练使用创建基本任务。'
    }, {
        name: 'Less',
        img: 'img/icon-less.jpg',
        intro: '把CSS赋予动态语言特性，可以写更少的代码达到效果。但是实际编译出来的代码量远远超过手写，所以我建议能不用就别用。'
    }, {
        name: 'Phtoshop',
        img: 'img/icon-ps.jpg',
        intro: '了解使用Photoshop'
    }, {
        name: 'Git',
        img: 'img/icon-git.jpg',
        intro: '版本管理工具，不用说太多。'
    }, {
        name: 'SVN',
        img: 'img/icon-svn.jpeg',
        intro: '版本管理工具，不用说太多。'
    }];

    app.skill = new Vue({
        el: '#jSkill',
        data: {
            mName: '职业技能',
            skills: skills
        }
    });

    var exps = [{
        company: '湖北思高科技发展有限公司',
        from: '2016-5',
        to: '',
        projects: [{
            name: '湖北省地质环境综合业务平台',
            intro: '数据监测。<a href="http://119.97.193.69:99/webFrame/LoginNewV4.htm" target="_blank" class="link">展示</a>',
            tags: ['jQuery', 'EasyUI', 'webpack']
        }, {
            name: '其它各种项目略过',
            intro: '......',
            tags: ['jQuery']
        }]
    }, {
        company: '湖北思高科技发展有限公司',
        from: '2016',
        to: '',
        projects: [{
            name: '思高科技官网重构',
            intro: '对网站的用户体验进行优化',
            tags: ['jQuery']
        }]
    }, {
        company: '湖北省广播电视信息网络武汉有限公司',
        from: '2017',
        to: '',
        projects: [{
            name: '湖北广电网络微厅',
            intro: '与设计和后台沟通完成产品设计需求，按照设计图完成微信端页面开发并完成前端动效及部分数据交互问题',
            tags: ['jQuery', 'JSSDK']
        }]
    }];
    app.exp = new Vue({
        el: '#jExp',
        data: {
            mName: '项目经验',
            exps: exps
        }
    });
})();
