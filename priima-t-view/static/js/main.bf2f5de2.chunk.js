(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),o=(n(15),n(2)),i=n(3),l=n(5),u=n(4),m=n(6),h=(n(16),n(1)),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).students=["Adele","Billy","Cristina"],n.state={value:"",students:n.students,searchList:n.students},n.myFunction=n.myFunction.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"myFunction",value:function(){var e,t,n;console.log(this.search.value),e=this.search.value.toUpperCase(),t=document.getElementById("myUL").getElementsByTagName("li"),console.log(t[0].getElementsByTagName("li"));var a=[];for(n=0;n<this.state.students.length;n++){var r=this.state.students[n];console.log(r,e,r.toLocaleUpperCase().indexOf(e)),r.toLocaleUpperCase().indexOf(e)>-1&&a.push(r)}this.setState({searchList:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("input",{type:"text",id:"myInput",ref:function(t){return e.search=t},onChange:this.myFunction,placeholder:"Search for names.."}),r.a.createElement("ul",{id:"myUL"},this.state.searchList.map(function(e){return r.a.createElement("li",{id:e},e)}))),r.a.createElement("p",null))}}]),t}(a.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.bf2f5de2.chunk.js.map