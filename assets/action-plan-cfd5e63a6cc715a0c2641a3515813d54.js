define("action-plan/app",["ember","ember/resolver","ember/load-initializers","action-plan/config/environment","exports"],function(e,n,t,s,a){"use strict";var o=e["default"],l=n["default"],r=t["default"],i=s["default"];o.MODEL_FACTORY_INJECTIONS=!0;var p=o.Application.extend({modulePrefix:i.modulePrefix,podModulePrefix:i.podModulePrefix,Resolver:l});r(p,i.modulePrefix),a["default"]=p}),define("action-plan/components/control-bar",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Component.extend({tagName:"nav",role:"navigation",classNames:["controlbar"],attributeBindings:["role"]})}),define("action-plan/controllers/problem/analyze",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Controller.extend({toolIsCauseEffect:function(){return"Cause and Effect Analysis"===this.get("model.analyze")}.property("model.analyze"),toolIsFiveWhys:function(){return"The Five Whys"===this.get("model.analyze")}.property("model.analyze"),tools:["","Cause and Effect Analysis","The Five Whys"]})}),define("action-plan/controllers/problem/generate",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Controller.extend({toolIsGroupBrainstorming:function(){return"Group Brainstorming"===this.get("model.generate")}.property("model.generate"),toolIsIndividualBrainstorming:function(){return"Individual Brainstorming"===this.get("model.generate")}.property("model.generate"),toolIsMindMaps:function(){return"Mind Maps"===this.get("model.generate")}.property("model.generate"),toolIsTheDisneyCreativeStrategy:function(){return"The Disney Creative Strategy"===this.get("model.generate")}.property("model.generate"),toolIsVisualThinking:function(){return"Visual Thinking"===this.get("model.generate")}.property("model.generate"),toolIsCreativeThinkingThroughPlay:function(){return"Creative Thinking Through Play"===this.get("model.generate")}.property("model.generate"),toolIsTRIZ:function(){return"TRIZ"===this.get("model.generate")}.property("model.generate"),tools:["","Group Brainstorming","Individual Brainstorming","Mind Maps","The Disney Creative Strategy","Visual Thinking","Creative Thinking Through Play","TRIZ"]})}),define("action-plan/controllers/problem/implement",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Controller.extend({modelDidLoad:function(){var e=this.get("model");e&&e.set("implement","Weighed Matrix Comparison Tool")}.observes("model")})}),define("action-plan/initializers/export-application-global",["ember","action-plan/config/environment","exports"],function(e,n,t){"use strict";function s(e,n){var t=a.String.classify(o.modulePrefix);o.exportApplicationGlobal&&(window[t]=n)}var a=e["default"],o=n["default"];t.initialize=s,t["default"]={name:"export-application-global",initialize:s}}),define("action-plan/models/problem",["ember","exports"],function(e,n){"use strict";var t=e["default"],s=t.Object.extend({defaults:{description:"My problem is..."},description:"",analyze:null,generate:null,implement:null});n["default"]=s}),define("action-plan/router",["ember","action-plan/config/environment","exports"],function(e,n,t){"use strict";var s=e["default"],a=n["default"],o=s.Router.extend({location:a.locationType});o.map(function(){this.resource("problem",function(){this.route("analyze"),this.route("generate"),this.route("implement"),this.route("monitor")}),this.resource("prelude",function(){this.route("one")}),this.route("resources")}),t["default"]=o}),define("action-plan/routes/index",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/prelude",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/prelude/index",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/prelude/one",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/prelude/three",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/prelude/two",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/problem",["ember","action-plan/models/problem","exports"],function(e,n,t){"use strict";var s=e["default"],a=n["default"];t["default"]=s.Route.extend({problem:null,model:function(){var e=this.get("problem");return e||(e=a.create(),this.set("problem",e)),e}})}),define("action-plan/routes/problem/analyze",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/problem/generate",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/problem/implement",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/problem/index",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend()}),define("action-plan/routes/problem/monitor",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({actions:{yay:function(){alert("You're awesome!")}}})}),define("action-plan/routes/problem/what",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/routes/resources",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Route.extend({})}),define("action-plan/templates/application",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var l,r="";return o.buffer.push('<header class="container">\n    <h3>\n        <img src="https://gravatar.com/avatar/89339983d18fb9129fe86739e3f7c5e4?s=512" id="logo" alt="Nick\'s Problem Solving Tool">\n    </h3>\n</header>\n\n<div class="container">\n    <div class="row">\n        '),l=s._triageMustache.call(n,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:o}),(l||0===l)&&o.buffer.push(l),o.buffer.push("\n    </div>\n</div>\n"),r})}),define("action-plan/templates/components/control-bar",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var l,r="";return o.buffer.push('<div class="navbar-text clearfix" style="float: none;">\n    '),l=s._triageMustache.call(n,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:o}),(l||0===l)&&o.buffer.push(l),o.buffer.push("\n</div>\n"),r})}),define("action-plan/templates/index",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){var t,a,o,l="";return n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-success"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:c.noop,fn:c.program(2,r,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"prelude",o):f.call(e,"link-to","prelude",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n"),l}function r(e,n){n.buffer.push('\n        Get Started <i class="glyphicon glyphicon-chevron-right"></i>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var i,p,u,h="",c=this,f=s.helperMissing;return o.buffer.push('<div class="col-xs-12">\n    <h1 class="text-center">So I hear you have a problem</h1>\n    <p class="lead">\n        Use this tool as a way to work towards the solution of any problem. The problem solving\n        process is just a few simple steps:\n    </p>\n</div>\n<div class="clearfix"></div>\n<div class="col-md-8 col-md-offset-2">\n    <ol>\n        <li>Determine your problem solving style</li>\n        <li>Identify the problem</li>\n        <li>Analyze the problem - <em>4 basic steps</em></li>\n        <li>Determine possible solutions</li>\n        <li>Choose and implement the best solution</li>\n        <li>Monitor and revise - <em>is the solution you have chosen working?</em></li>\n    </ol>\n</div>\n<div class="clearfix"></div>\n<div class="col-xs-12">\n    <br>\n    <p class="lead">Ready? Hit the button to continue</p>\n</div>\n'),p=s["control-bar"]||n&&n["control-bar"],u={hash:{"class":"text-center"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:c.noop,fn:c.program(1,l,o),contexts:[],types:[],data:o},i=p?p.call(n,u):f.call(n,"control-bar",u),(i||0===i)&&o.buffer.push(i),o.buffer.push("\n"),h})}),define("action-plan/templates/prelude",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){var t,a,o,l="";return n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-default pull-left"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:f.noop,fn:f.program(2,r,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"index",o):d.call(e,"link-to","index",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-warning"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:f.noop,fn:f.program(4,i,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem",o):d.call(e,"link-to","problem",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n"),l}function r(e,n){n.buffer.push('\n        <i class="glyphicon glyphicon-chevron-left"></i> Back\n    ')}function i(e,n){n.buffer.push('\n        Skip this Step <i class="glyphicon glyphicon-chevron-right"></i>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var p,u,h,c="",f=this,d=s.helperMissing;return o.buffer.push('<div class="col-xs-12">\n    <h2>\n        Before we begin...<br>\n        <small>there\'s one thing you should know</small>\n    </h2>\n    <br>\n    '),p=s._triageMustache.call(n,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:o}),(p||0===p)&&o.buffer.push(p),o.buffer.push("\n</div>\n"),u=s["control-bar"]||n&&n["control-bar"],h={hash:{"class":"text-right"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:f.noop,fn:f.program(1,l,o),contexts:[],types:[],data:o},p=u?u.call(n,h):d.call(n,"control-bar",h),(p||0===p)&&o.buffer.push(p),o.buffer.push("\n\n"),c})}),define("action-plan/templates/prelude/index",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){n.buffer.push("\n        What is it?\n    ")}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var r,i,p,u="",h=this,c=s.helperMissing;return o.buffer.push("<p>\n    "),i=s["link-to"]||n&&n["link-to"],p={hash:{"class":"btn btn-lg btn-default"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:h.noop,fn:h.program(1,l,o),contexts:[n],types:["STRING"],data:o},r=i?i.call(n,"prelude.one",p):c.call(n,"link-to","prelude.one",p),(r||0===r)&&o.buffer.push(r),o.buffer.push("\n</p>\n"),u})}),define("action-plan/templates/prelude/one",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){n.buffer.push("\n        Okay, got it!\n    ")}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var r,i,p,u="",h=this,c=s.helperMissing;return o.buffer.push("<p class=\"lead\">\n    1.<br>\n    You are a<br>\n    <big><strong>Convergent</strong></big><br>\n    problem solver<br>\n</p>\n<p><small>although you also have a bit of <em>divergent</em> in you</small></p>\n<br>\n<p>\n    That means you compare, contrast, rank, and evaluate the best solution. You're careful and\n    patient. You dislike hunches and guesswork, and you're intolerant of uncertainty.\n</p>\n<br>\n<p>\n    "),i=s["link-to"]||n&&n["link-to"],p={hash:{"class":"btn btn-lg btn-default"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:h.noop,fn:h.program(1,l,o),contexts:[n],types:["STRING"],data:o},r=i?i.call(n,"problem",p):c.call(n,"link-to","problem",p),(r||0===r)&&o.buffer.push(r),o.buffer.push("\n</p>\n"),u})}),define("action-plan/templates/prelude/three",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var l,r="";return l=s._triageMustache.call(n,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:o}),(l||0===l)&&o.buffer.push(l),o.buffer.push("\n"),r})}),define("action-plan/templates/prelude/two",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var l,r="";return l=s._triageMustache.call(n,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:o}),(l||0===l)&&o.buffer.push(l),o.buffer.push("\n"),r})}),define("action-plan/templates/problem",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){var t,a,o="";return n.buffer.push(":<br>\n            <small>"),n.buffer.push(f((t=s["link-to"]||e&&e["link-to"],a={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["ID","STRING"],data:n},t?t.call(e,"model.description","problem.index",a):c.call(e,"link-to","model.description","problem.index",a)))),n.buffer.push("</small>\n        "),o}function r(e,n){var t,a,o="";return n.buffer.push("\n        <p>Analysis tool: "),n.buffer.push(f((t=s["link-to"]||e&&e["link-to"],a={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["ID","STRING"],data:n},t?t.call(e,"model.analyze","problem.analyze",a):c.call(e,"link-to","model.analyze","problem.analyze",a)))),n.buffer.push("</p>\n    "),o}function i(e,n){var t,a,o="";return n.buffer.push("\n        <p>Solution-generation tool: "),n.buffer.push(f((t=s["link-to"]||e&&e["link-to"],a={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["ID","STRING"],data:n},t?t.call(e,"model.generate","problem.generate",a):c.call(e,"link-to","model.generate","problem.generate",a)))),n.buffer.push("</p>\n    "),o}function p(e,n){var t,a,o="";return n.buffer.push("\n        <p>Implementation selection tool: "),n.buffer.push(f((t=s["link-to"]||e&&e["link-to"],a={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["ID","STRING"],data:n},t?t.call(e,"model.implement","problem.implement",a):c.call(e,"link-to","model.implement","problem.implement",a)))),n.buffer.push("</p>\n    "),o}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var u,h="",c=s.helperMissing,f=this.escapeExpression,d=this;return o.buffer.push('<div class="col-xs-12">\n    <h1>\n        The problem'),u=s["if"].call(n,"model.description",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(1,l,o),contexts:[n],types:["ID"],data:o}),(u||0===u)&&o.buffer.push(u),o.buffer.push("\n    </h1>\n    "),u=s["if"].call(n,"model.analyze",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(3,r,o),contexts:[n],types:["ID"],data:o}),(u||0===u)&&o.buffer.push(u),o.buffer.push("\n    "),u=s["if"].call(n,"model.generate",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(5,i,o),contexts:[n],types:["ID"],data:o}),(u||0===u)&&o.buffer.push(u),o.buffer.push("\n    "),u=s["if"].call(n,"model.implement",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(7,p,o),contexts:[n],types:["ID"],data:o}),(u||0===u)&&o.buffer.push(u),o.buffer.push('\n</div>\n<div class="clearfix"></div>\n<hr>\n'),u=s._triageMustache.call(n,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:o}),(u||0===u)&&o.buffer.push(u),o.buffer.push("\n\n"),h})}),define("action-plan/templates/problem/analyze",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){n.buffer.push('\n        <p>AKA the fishbone diagram. Checkout <a href="http://www.mindtools.com/pages/article/newTMC_03.htm" target="_blank">this website</a> to learn more about it\n            <br>\n            <img src="http://i.imgur.com/sTsEk9T.png" class="img-responsive">\n        </p>\n    ')}function r(e,n){n.buffer.push('\n        <p>\n            A simple root-cause analysis tool for solving <strong>simple</strong> problems\n            <br>\n            <img src="http://i.imgur.com/RSNpbU3.png" class="img-responsive">\n        </p>\n    ')}function i(e,n){var t,a,o,l="";return n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-default pull-left"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:b.noop,fn:b.program(6,p,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem.index",o):m.call(e,"link-to","problem.index",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-success"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:b.noop,fn:b.program(8,u,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem.generate",o):m.call(e,"link-to","problem.generate",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n"),l}function p(e,n){n.buffer.push('\n        <i class="glyphicon glyphicon-chevron-left"></i> Back\n    ')}function u(e,n){n.buffer.push('\n        Next <i class="glyphicon glyphicon-chevron-right"></i>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var h,c,f,d="",b=this,m=s.helperMissing,g=this.escapeExpression;return o.buffer.push('<div class="col-md-8 col-md-offset-2">\n\n    <h2>\n        2. Analyze it!\n    </h2>\n\n\n    <h3>Select an analysis tool</h3>\n    <p class="lead">\n        Different problems will require different approaches. Select a tool to learn more about it\n    </p>\n\n    <p>\n        '),o.buffer.push(g(s.view.call(n,"Ember.Select",{hash:{content:"tools",value:"model.analyze","class":"form-control"},hashTypes:{content:"ID",value:"ID","class":"STRING"},hashContexts:{content:n,value:n,"class":n},contexts:[n],types:["STRING"],data:o}))),o.buffer.push("\n    </p>\n\n    "),h=s["if"].call(n,"toolIsCauseEffect",{hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(1,l,o),contexts:[n],types:["ID"],data:o}),(h||0===h)&&o.buffer.push(h),o.buffer.push("\n\n    "),h=s["if"].call(n,"toolIsFiveWhys",{hash:{},hashTypes:{},hashContexts:{},inverse:b.noop,fn:b.program(3,r,o),contexts:[n],types:["ID"],data:o}),(h||0===h)&&o.buffer.push(h),o.buffer.push('\n\n    <hr>\n\n    <p class="lead">\n        A structured analysis is the best way to identify a solution that not only works, but is low-risk and keeps everybody happy.\n    </p>\n\n    <ol>\n      <li>\n        Gather Data\n        <ul>\n          <li>How do we know there\'s a problem</li>\n          <li>What have you seen /heard/experienced</li>\n          <li>Determine what other info you need</li>\n        </ul>\n      </li>\n      <li>Determine Causes</li>\n      <li>What causes the problem?</li>\n      <li>What\'s gone wrong?</li>\n      <li>Identify the causes?</li>\n      <li>\n        Identify/Work with Stakeholders\n        <ul>\n          <li>Determine who else is impacted</li>\n          <li>People who have an interest in seeing problem solved/may see it from a different perspective</li>\n          <li>May provide problem-solving solutions</li>\n        </ul>\n      </li>\n      <li>\n        Identify/Manage Risks\n        <ul>\n          <li>Involved with delays for finding solution</li>\n          <li>Risks with moving ahead with incorrect solution?</li>\n          <li>How else can risk be minimized?</li>\n        </ul>\n      </li>\n    </ol>\n\n    <p class="lead">\n        Once you have analyzed your problem, hit the button to go to the next step\n    </p>\n\n</div>\n\n'),c=s["control-bar"]||n&&n["control-bar"],f={hash:{"class":"text-right"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:b.noop,fn:b.program(5,i,o),contexts:[],types:[],data:o},h=c?c.call(n,f):m.call(n,"control-bar",f),(h||0===h)&&o.buffer.push(h),o.buffer.push("\n"),d})}),define("action-plan/templates/problem/generate",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){n.buffer.push("\n        <p>Setting aside time with the stakeholders to formulate ideas</p>\n        <ol>\n            <li>Define problem clearly</li>\n            <li>Document</li>\n            <li>Select ideas and explore further</li>\n        </ol>\n    ")}function r(e,n){n.buffer.push("\n        <p>You have to be able to consider <em>any</em> ideas that come to mind (free yourself!)</p>\n        <p>Process is very similar to group brainstorming</p>\n    ")}function i(e,n){n.buffer.push("\n        <p>\n            Show relationships that exists between ideas - How problems and solutions are connected to each other\n        </p>\n    ")}function p(e,n){n.buffer.push("\n        <p>Applied a 3 step process to turn work into reality</p>\n        <ol>\n            <li><strong>Create:</strong> Generate limitless idea</li>\n            <li><strong>Apply:</strong> Decide which of your ideas can be implemented now  or later</li>\n            <li><strong>Evaluate:</strong> Consider whether it's possible to do the solution, evaluate weaknesses, etc.</li>\n        </ol>\n    ")}function u(e,n){n.buffer.push('\n        <p>"The Back of the Napkin" approach - Selling ideas with pictures</p>\n    ')}function h(e,n){n.buffer.push("\n        <p>A powerful creative problem-solving tool - solve problems by playing with toys and bricks!</p>\n    ")}function c(e,n){n.buffer.push("\n        <ul>\n            <li>Relies on patterns of problems and past solutions</li>\n            <li>More to it that data/analytics</li>\n            <li>Identifies how creative problem solving was applied in the past</li>\n        </ul>\n    ")}function f(e,n){var t,a,o,l="";return n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-default pull-left"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:x.noop,fn:x.program(16,d,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem.analyze",o):T.call(e,"link-to","problem.analyze",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-success"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:x.noop,fn:x.program(18,b,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem.implement",o):T.call(e,"link-to","problem.implement",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n"),l}function d(e,n){n.buffer.push('\n        <i class="glyphicon glyphicon-chevron-left"></i> Back\n    ')}function b(e,n){n.buffer.push('\n        Next <i class="glyphicon glyphicon-chevron-right"></i>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var m,g,y,v="",x=this,T=s.helperMissing,I=this.escapeExpression;return o.buffer.push('<div class="col-md-8 col-md-offset-2">\n    <h2>\n        3. Generate potential solutions\n    </h2>\n\n    <p class="lead">\n        Select an idea generation tool to learn more about it. Again, different problems will require a different approach.\n    </p>\n\n    <p>\n        '),o.buffer.push(I(s.view.call(n,"Ember.Select",{hash:{content:"tools",value:"model.generate","class":"form-control"},hashTypes:{content:"ID",value:"ID","class":"STRING"},hashContexts:{content:n,value:n,"class":n},contexts:[n],types:["STRING"],data:o}))),o.buffer.push("\n    </p>\n\n    "),m=s["if"].call(n,"toolIsGroupBrainstorming",{hash:{},hashTypes:{},hashContexts:{},inverse:x.noop,fn:x.program(1,l,o),contexts:[n],types:["ID"],data:o}),(m||0===m)&&o.buffer.push(m),o.buffer.push("\n\n    "),m=s["if"].call(n,"toolIsIndividualBrainstorming",{hash:{},hashTypes:{},hashContexts:{},inverse:x.noop,fn:x.program(3,r,o),contexts:[n],types:["ID"],data:o}),(m||0===m)&&o.buffer.push(m),o.buffer.push("\n\n    "),m=s["if"].call(n,"toolIsMindMaps",{hash:{},hashTypes:{},hashContexts:{},inverse:x.noop,fn:x.program(5,i,o),contexts:[n],types:["ID"],data:o}),(m||0===m)&&o.buffer.push(m),o.buffer.push("\n\n    "),m=s["if"].call(n,"toolIsTheDisneyCreativeStrategy",{hash:{},hashTypes:{},hashContexts:{},inverse:x.noop,fn:x.program(7,p,o),contexts:[n],types:["ID"],data:o}),(m||0===m)&&o.buffer.push(m),o.buffer.push("\n\n    "),m=s["if"].call(n,"toolIsVisualThinking",{hash:{},hashTypes:{},hashContexts:{},inverse:x.noop,fn:x.program(9,u,o),contexts:[n],types:["ID"],data:o}),(m||0===m)&&o.buffer.push(m),o.buffer.push("\n\n    "),m=s["if"].call(n,"toolIsCreativeThinkingThroughPlay",{hash:{},hashTypes:{},hashContexts:{},inverse:x.noop,fn:x.program(11,h,o),contexts:[n],types:["ID"],data:o}),(m||0===m)&&o.buffer.push(m),o.buffer.push("\n\n    "),m=s["if"].call(n,"toolIsTRIZ",{hash:{},hashTypes:{},hashContexts:{},inverse:x.noop,fn:x.program(13,c,o),contexts:[n],types:["ID"],data:o}),(m||0===m)&&o.buffer.push(m),o.buffer.push("\n\n    <hr>\n\n    <h3>Remember: Think outside the box</h3>\n    <ul>\n        <li>Think beyond the obvious when solving problems</li>\n        <li>Approach a problem with reason and imagination</li>\n        <li>Consider all options as probable solutions</li>\n    </ul>\n\n</div>\n"),g=s["control-bar"]||n&&n["control-bar"],y={hash:{"class":"text-right"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:x.noop,fn:x.program(15,f,o),contexts:[],types:[],data:o},m=g?g.call(n,y):T.call(n,"control-bar",y),(m||0===m)&&o.buffer.push(m),o.buffer.push("\n"),v})}),define("action-plan/templates/problem/implement",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){var t,a,o,l="";return n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-default pull-left"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:f.noop,fn:f.program(2,r,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem.generate",o):d.call(e,"link-to","problem.generate",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-success"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:f.noop,fn:f.program(4,i,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem.monitor",o):d.call(e,"link-to","problem.monitor",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n"),l}function r(e,n){n.buffer.push('\n        <i class="glyphicon glyphicon-chevron-left"></i> Back\n    ')}function i(e,n){n.buffer.push('\n        Next <i class="glyphicon glyphicon-chevron-right"></i>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var p,u,h,c="",f=this,d=s.helperMissing;return o.buffer.push('<div class="col-md-8 col-md-offset-2">\n\n    <h3>Use the <strong>Weighed Matrix Comparison</strong> tool</h3>\n\n    <p>\n        This solution will work best in your case. Add in all the possible solutions and record how important they are to each criterion. Implement the highest scoring solution.\n    </p>\n\n    <p>\n        <img src="http://i.imgur.com/H1bYflM.png" alt="Weighed-Matrix example" class="img-responsive">\n    </p>\n\n\n    <p>An alternate solution is the <strong>Benfits/Drawbacks comparison too.</strong>\n    <br>\n    <a href="http://i.imgur.com/zQQoUqn.png" target="_blank">Check out this example</a></p>\n</div>\n\n'),u=s["control-bar"]||n&&n["control-bar"],h={hash:{"class":"text-right"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:f.noop,fn:f.program(1,l,o),contexts:[],types:[],data:o},p=u?u.call(n,h):d.call(n,"control-bar",h),(p||0===p)&&o.buffer.push(p),o.buffer.push("\n"),c})}),define("action-plan/templates/problem/index",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){var t,a,o,l="";return n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-default pull-left"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:f.noop,fn:f.program(2,r,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"prelude",o):d.call(e,"link-to","prelude",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-success"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:f.noop,fn:f.program(4,i,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem.analyze",o):d.call(e,"link-to","problem.analyze",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n"),l}function r(e,n){n.buffer.push('\n        <i class="glyphicon glyphicon-chevron-left"></i> Back\n    ')}function i(e,n){n.buffer.push('\n        Next <i class="glyphicon glyphicon-chevron-right"></i>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var p,u,h,c="",f=this,d=s.helperMissing,b=this.escapeExpression;return o.buffer.push('<div class="col-md-8 col-md-offset-2">\n    <h2>\n        1. Identify your problem here:\n    </h2>\n    <br>\n    '),o.buffer.push(b((u=s.textarea||n&&n.textarea,h={hash:{"class":"form-control",value:"model.description",placeholder:"e.g., I am not productive after eating a big lunch."},hashTypes:{"class":"STRING",value:"ID",placeholder:"STRING"},hashContexts:{"class":n,value:n,placeholder:n},contexts:[],types:[],data:o},u?u.call(n,h):d.call(n,"textarea",h)))),o.buffer.push('\n\n    <h3>Having a hard time?</h3>\n    <p>\n        Determining a meaningul, exceptional problem is one of the hardest parts of the problem-solving process. Try to keep these points in mind\n    </p>\n\n    <ol style="max-width: 570px; margin: auto;">\n        <li>Discuss and Share</li>\n        <li>Use business media (e.g., UWaterloo website resources)</li>\n        <li>Compare results of steps 1 and 2</li>\n        <li>Look for high cost</li>\n        <li>Look for repeated failures</li>\n        <li>Look for customer problems</li>\n        <li>Look of inefficiencies </li>\n    </ol>\n\n    <br>\n    <p class="lead">\n        Once you have identified your problem, hit the button to go to the next step\n    </p>\n\n</div>\n'),u=s["control-bar"]||n&&n["control-bar"],h={hash:{"class":"text-right"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:f.noop,fn:f.program(1,l,o),contexts:[],types:[],data:o},p=u?u.call(n,h):d.call(n,"control-bar",h),(p||0===p)&&o.buffer.push(p),o.buffer.push("\n"),c})}),define("action-plan/templates/problem/monitor",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){var t,a="";return n.buffer.push('\n            <em>"'),t=s._triageMustache.call(e,"model.description",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:n}),(t||0===t)&&n.buffer.push(t),n.buffer.push('"</em>\n        '),a}function r(e,n){n.buffer.push("\n            your problem\n        ")}function i(e,n){var t,a,o,l="";return n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-warning pull-left"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:b.noop,fn:b.program(6,p,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"problem.index",o):m.call(e,"link-to","problem.index",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-primary"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:b.noop,fn:b.program(8,u,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"resources",o):m.call(e,"link-to","resources",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n"),l
}function p(e,n){n.buffer.push('\n        <i class="glyphicon glyphicon-chevron-left"></i> Start Over\n    ')}function u(e,n){n.buffer.push('\n        Additional Resources <i class="glyphicon glyphicon-chevron-right"></i>\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var h,c,f,d="",b=this,m=s.helperMissing,g=this.escapeExpression;return o.buffer.push('<div class="col-md-8 col-md-offset-2">\n\n    <h2>\n        You did it!\n    </h2>\n\n    <p class="lead">\n        You now have all the tools you need get started. It won\'t be long before\n        '),h=s["if"].call(n,"model.description",{hash:{},hashTypes:{},hashContexts:{},inverse:b.program(3,r,o),fn:b.program(1,l,o),contexts:[n],types:["ID"],data:o}),(h||0===h)&&o.buffer.push(h),o.buffer.push('\n         will no longer be a problem you have to worry about!\n\n    </p>\n    <p>\n        <button class="btn btn-lg btn-success" '),o.buffer.push(g(s.action.call(n,"yay",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["STRING"],data:o}))),o.buffer.push(">Yay!</button>\n    </p>\n\n    <h3>But you're not done yet...</h3>\n\n    <p>\n        Make sure that as you're implementing your solution, monitor and track progress. Are there any new insights or circumstances? Is a different solution better for the problem given this new information? If yes, it might be time to select an alternate in the "),o.buffer.push(g((c=s["link-to"]||n&&n["link-to"],f={hash:{},hashTypes:{},hashContexts:{},contexts:[n,n],types:["STRING","STRING"],data:o},c?c.call(n,"previous step","problem.implement",f):m.call(n,"link-to","previous step","problem.implement",f)))),o.buffer.push(".\n    </p>\n\n</div>\n"),c=s["control-bar"]||n&&n["control-bar"],f={hash:{"class":"text-right"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:b.noop,fn:b.program(5,i,o),contexts:[],types:[],data:o},h=c?c.call(n,f):m.call(n,"control-bar",f),(h||0===h)&&o.buffer.push(h),o.buffer.push("\n\n"),d})}),define("action-plan/templates/problem/what",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var l,r="";return l=s._triageMustache.call(n,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:o}),(l||0===l)&&o.buffer.push(l),o.buffer.push("\n"),r})}),define("action-plan/templates/resources",["ember","exports"],function(e,n){"use strict";var t=e["default"];n["default"]=t.Handlebars.template(function(e,n,s,a,o){function l(e,n){var t,a,o,l="";return n.buffer.push("\n    "),a=s["link-to"]||e&&e["link-to"],o={hash:{"class":"btn btn-lg btn-success pull-left"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:c.noop,fn:c.program(2,r,n),contexts:[e],types:["STRING"],data:n},t=a?a.call(e,"index",o):f.call(e,"link-to","index",o),(t||0===t)&&n.buffer.push(t),n.buffer.push("\n"),l}function r(e,n){n.buffer.push('\n        <i class="glyphicon glyphicon-chevron-left"></i> Start Over\n    ')}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,t.Handlebars.helpers),o=o||{};var i,p,u,h="",c=this,f=s.helperMissing;return o.buffer.push('<div class="col-md-8 col-md-offset-2">\n    <ul class="lead">\n        <li>\n            <a href="https://global.factiva.com/factivalogin/login.asp?productname=global" target="_blank">Factiva</a> - A problem research tool\n        </li>\n        <li>\n            <a href="https://uwaterloo.ca/counselling-services/" target="_blank">\n                UWaterloo Counselling Services\n            </a>\n        </li>\n    </ul>\n</div>\n'),p=s["control-bar"]||n&&n["control-bar"],u={hash:{"class":"text-right"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},inverse:c.noop,fn:c.program(1,l,o),contexts:[],types:[],data:o},i=p?p.call(n,u):f.call(n,"control-bar",u),(i||0===i)&&o.buffer.push(i),o.buffer.push("\n"),h})}),define("action-plan/config/environment",["ember"],function(e){var n="action-plan";try{var t=n+"/config/environment",s=e["default"].$('meta[name="'+t+'"]').attr("content"),a=JSON.parse(unescape(s));return{"default":a}}catch(o){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests?require("action-plan/tests/test-helper"):require("action-plan/app")["default"].create({});