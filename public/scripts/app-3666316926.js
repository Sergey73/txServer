/******/!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1),o=n(2),a=n(3),i=n(4),s=n(5),l=n(6),c=n(7),u=n(8);angular.module("tx",["ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","ngMaterial","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(r.config).config(o.routerConfig).run(a.runBlock).service("githubContributor",s.GithubContributorService).service("webDevTec",l.WebDevTecService).controller("MainController",i.MainController).directive("acmeNavbar",c.NavbarDirective).directive("acmeMalarkey",u.MalarkeyDirective)},function(t,e){"use strict";function n(t,e){"ngInject";t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}n.$inject=["$logProvider","toastrConfig"],Object.defineProperty(e,"__esModule",{value:!0}),e.config=n},function(t,e){"use strict";function n(t,e){"ngInject";t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=n},function(t,e){"use strict";function n(t){"ngInject";t.debug("runBlock end")}n.$inject=["$log"],Object.defineProperty(e,"__esModule",{value:!0}),e.runBlock=n},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.MainController=function(){function t(e,r,o){"ngInject";n(this,t),this.awesomeThings=[],this.classAnimation="",this.creationDate=1460975644651,this.toastr=o,this.activate(e,r)}return t.$inject=["$timeout","webDevTec","toastr"],r(t,[{key:"activate",value:function(t,e){var n=this;this.getWebDevTec(e),t(function(){n.classAnimation="rubberBand"},4e3)}},{key:"getWebDevTec",value:function(t){this.awesomeThings=t.getTec(),angular.forEach(this.awesomeThings,function(t){t.rank=Math.random()})}},{key:"showToastr",value:function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.GithubContributorService=function(){function t(e,r){"ngInject";n(this,t),this.$log=e,this.$http=r,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return t.$inject=["$log","$http"],r(t,[{key:"getContributors",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?30:arguments[0];return this.$http.get(this.apiHost+"/contributors?per_page="+e).then(function(t){return t.data})["catch"](function(e){t.$log.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))})}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.WebDevTecService=function(){function t(){"ngInject";n(this,t),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}]}return r(t,[{key:"getTec",value:function(){return this.data}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:o,controllerAs:"vm",bindToController:!0};return t}Object.defineProperty(e,"__esModule",{value:!0}),e.NavbarDirective=r;var o=function a(t){"ngInject";n(this,a),this.relativeDate=t(this.creationDate).fromNow()};o.$inject=["moment"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){"ngInject";function e(e,n,r,o){var a=void 0,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return n}r.$inject=["malarkey"],Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.MalarkeyDirective=r;var a=function(){function t(e,r){"ngInject";n(this,t),this.$log=e,this.contributors=[],this.activate(r)}return t.$inject=["$log","githubContributor"],o(t,[{key:"activate",value:function(t){var e=this;return this.getContributors(t).then(function(){e.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(t){var e=this;return t.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}}]),t}()}]),angular.module("tx").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout=vertical layout-fill><md-content><header><acme-navbar creation-date=main.creationDate></acme-navbar></header><section class=jumbotron><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><md-button class="md-raised animated infinite" ng-class=main.classAnimation ng-click=main.showToastr()>Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></section><div class=techs layout-align=center><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class=md-title>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class=md-action-buttons><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-3666316926.js.map
