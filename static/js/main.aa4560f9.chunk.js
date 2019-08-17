(window.webpackJsonpcalculator=window.webpackJsonpcalculator||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),l=a(7),i=a.n(l),o=(a(13),a(1)),c=a(2),r=a(4),u=a(3),m=a(5),d=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={display:0,convertNum:!0,convert2ndNum:!0,isFirstExpr:!0},a.firstNum="",a.secondNum="",a.symbol="",a.submit=function(t){var e=/[-+*\/]/,n=t.match(e),s=t.match(e),l=t.match(e);console.log(l),null!==n&&0===a.firstNum.length&&a.handleClear(),a.state.isFirstExpr&&(null==n&&(a.firstNum=""+a.firstNum+t,a.setState({display:a.firstNum}),a.decimal("first",t),a.display()),null!==n&&a.firstNum.length>0&&(a.symbol=t,a.setState({display:a.firstNum+a.symbol,isFirstExpr:!1}),document.querySelector(".decimal").disabled=!1,a.display())),!1===a.state.isFirstExpr&&(null==s&&(a.secondNum=""+a.secondNum+t,a.setState({display:a.firstNum+a.symbol+a.secondNum,isFirstExpr:!1}),a.decimal("second",a.secondNum)),a.display())},a.flash=function(t){var e=document.querySelector(t);e.classList.add("flash"),setTimeout(function(){e.classList.remove("flash")},500)},a.decimal=function(t,e){var a=e.match(/[.]/),n=e.match(/[.]/);a&&"first"===t?document.querySelector(".decimal").disabled="true":n&&"second"===t&&(document.querySelector(".decimal").disabled="true")},a.handleClear=function(){a.firstNum="",a.secondNum="",document.querySelector(".decimal").disabled=!1,a.setState({display:0,convertNum:!0,convert2ndNum:!0,isFirstExpr:!0}),a.display()},a.handleConvert=function(){if(""!==a.firstNum){var t=parseFloat(a.firstNum),e=parseFloat(a.secondNum);if(a.state.isFirstExpr){if(a.state.convertNum){var n=-Math.abs(t);n=n.toString(),a.setState({convertNum:!1}),a.firstNum=n}else{var s=Math.abs(t);s=s.toString(),a.setState({convertNum:!0}),a.firstNum=s}a.setState({display:a.firstNum}),a.display()}else{if(a.state.convert2ndNum){var l=-Math.abs(e);l=l.toString(),a.setState({convert2ndNum:!1}),a.secondNum=l}else{var i=Math.abs(e);i=i.toString(),a.setState({convert2ndNum:!0}),a.secondNum=i}a.setState({display:a.firstNum+a.symbol+"("+a.secondNum+")"}),a.display()}}},a.handlePercent=function(){if(""!==a.firstNum){var t=parseFloat(a.firstNum)/100,e=parseFloat(a.secondNum)/100;a.state.isFirstExpr?(t=t.toString(),a.firstNum=t,a.setState({display:a.firstNum}),a.display()):(e=e.toString(),a.secondNum=e,a.setState({display:a.firstNum+a.symbol+a.secondNum}),a.display())}},a.handleEqual=function(){var t,e=0,n=Number(a.firstNum),s=Number(a.secondNum);"+"===a.symbol?e=n+s:"-"===a.symbol?e=n-s:"*"===a.symbol?e=n*s:"/"===a.symbol&&(e=n/s),t=e.toFixed(5),a.setState({display:t,convertNum:!0,convert2ndNum:!0,isFirstExpr:!0}),a.firstNum=e,a.secondNum="",a.symbol="",document.querySelector(".decimal").disabled=!1,a.display(t)},a.display=function(t){var e=document.querySelector(".display-text");a.firstNum.length+a.symbol.length+a.secondNum.length>10||t>10?(e.classList.add("display-text-small"),e.classList.remove("display-text-large")):(a.firstNum.length+a.symbol.length+a.secondNum.length<=10||t<=10)&&(e.classList.remove("display-text-small"),e.classList.add("display-text-large"))},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"calc-container"},s.a.createElement("div",{className:"display"},s.a.createElement("p",{className:"display-text display-text-large"},this.state.display)),s.a.createElement("button",{onClick:function(){t.handleClear(),t.flash(".clear")},className:"button text dark-grey clear"},"C"),s.a.createElement("button",{onClick:function(){t.handleConvert(),t.flash(".negative")},className:"button text dark-grey negative"},"+/-"),s.a.createElement("button",{onClick:function(){t.handlePercent(),t.flash(".percent")},className:"button text dark-grey percent"},"%"),s.a.createElement("button",{onClick:function(){t.submit("/"),t.flash(".divide")},className:"button text orange divide"},"/"),s.a.createElement("button",{onClick:function(){t.submit("7"),t.flash(".seven")},className:"button text light-grey seven"},"7"),s.a.createElement("button",{onClick:function(){t.submit("8"),t.flash(".eight")},className:"button text light-grey eight"},"8"),s.a.createElement("button",{onClick:function(){t.submit("9"),t.flash(".nine")},className:"button text light-grey nine"},"9"),s.a.createElement("button",{onClick:function(){t.submit("*"),t.flash(".multiply")},className:"button text orange multiply"},"X"),s.a.createElement("button",{onClick:function(){t.submit("4"),t.flash(".four")},className:"button text light-grey four"},"4"),s.a.createElement("button",{onClick:function(){t.submit("5"),t.flash(".five")},className:"button text light-grey five"},"5"),s.a.createElement("button",{onClick:function(){t.submit("6"),t.flash(".six")},className:"button text light-grey six"},"6"),s.a.createElement("button",{onClick:function(){t.submit("-"),t.flash(".subtract")},className:"button text orange subtract"},"-"),s.a.createElement("button",{onClick:function(){t.submit("1"),t.flash(".one")},className:"button text light-grey one"},"1"),s.a.createElement("button",{onClick:function(){t.submit("2"),t.flash(".two")},className:"button text light-grey two"},"2"),s.a.createElement("button",{onClick:function(){t.submit("3"),t.flash(".three")},className:"button text light-grey three"},"3"),s.a.createElement("button",{onClick:function(){t.submit("+"),t.flash(".add")},className:"button text orange add"},"+"),s.a.createElement("button",{onClick:function(){t.submit("0"),t.flash(".zero")},className:"text light-grey zero"},"0"),s.a.createElement("button",{onClick:function(){t.submit("."),t.flash(".decimal")},className:"button text light-grey decimal",disabled:!1},"."),s.a.createElement("button",{onClick:function(){t.handleEqual(),t.flash(".equals")},className:"button text orange equals"},"="))}}]),e}(n.Component),f=function(t){function e(){return Object(o.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement(d,null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.aa4560f9.chunk.js.map