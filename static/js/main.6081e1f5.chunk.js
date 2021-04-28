(this.webpackJsonpquantum=this.webpackJsonpquantum||[]).push([[0],{27:function(e,t,n){},89:function(e,t){},90:function(e,t,n){"use strict";n.r(t);var r=n(7),s=n(32),o=n.n(s),i=n(14),a=n(17),c=n(18),p=n(20),l=n(19),u=(n(27),n(25)),b=n(34),j=(n(71),n(8)),h=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;switch(this.props.type){case"cnot":return Object(j.jsxs)("div",Object(i.a)(Object(i.a)({className:this.props.onDelete?"gate cnot noselect deletable":"gate cnot noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!0)},children:["CNOT",Object(j.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(j.jsx)(b.BlockMath,{math:"\\begin{bmatrix}1&0&0&0\\\\ 0&1&0&0\\\\ 0&0&0&1\\\\ 0&0&1&0\\end{bmatrix}"})})]}));case"cnotUp":return Object(j.jsxs)("div",Object(i.a)(Object(i.a)({className:this.props.onDelete?"gate cnot x noselect deletable":"gate cnot x noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!0)},children:["X",Object(j.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(j.jsx)(b.BlockMath,{math:"\\begin{bmatrix}0&1\\\\ 1&0\\end{bmatrix}"})}),Object(j.jsx)("span",{className:"cnotUp"})]}));case"cnotDown":return Object(j.jsxs)("div",Object(i.a)(Object(i.a)({className:this.props.onDelete?"gate cnot x noselect deletable":"gate cnot x noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!0)},children:["X",Object(j.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(j.jsx)(b.BlockMath,{math:"\\begin{bmatrix}0&1\\\\ 1&0\\end{bmatrix}"})}),Object(j.jsx)("span",{className:"cnotDown"})]}));case"h":return Object(j.jsxs)("div",Object(i.a)(Object(i.a)({className:this.props.onDelete?"gate h noselect deletable":"gate h noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!1)},children:["H",Object(j.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(j.jsx)(b.BlockMath,{math:"\\frac1{\\sqrt2}\\begin{bmatrix}1&1\\\\ 1&-1\\end{bmatrix}"})})]}));case"t":return Object(j.jsxs)("div",Object(i.a)(Object(i.a)({className:this.props.onDelete?"gate t noselect deletable":"gate t noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!1)},children:["T",Object(j.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(j.jsx)(b.BlockMath,{math:"\\begin{bmatrix}1&0\\\\ 0&e^{i\\pi /4}\\end{bmatrix}"})})]}));case"trigopt":return Object(j.jsx)("div",Object(i.a)(Object(i.a)({className:"gate trigopt noselect"},this.props),{},{ref:this.props.innerRef,children:Object(j.jsx)("div",{onClick:function(t){return e.props.onSelectTrigger(e.props.qubit,e.props.index)}})}));case"trig":return Object(j.jsx)("div",Object(i.a)(Object(i.a)({className:"gate trig noselect"},this.props),{},{ref:this.props.innerRef,children:Object(j.jsx)("div",{})}));case"connect":return Object(j.jsx)("div",Object(i.a)(Object(i.a)({className:"gate connect noselect"},this.props),{},{ref:this.props.innerRef,children:Object(j.jsx)("div",{})}));default:return null}}}]),n}(r.Component),d=n(93),O=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"qubit",children:[Object(j.jsx)("span",{className:"qubit-line"}),Object(j.jsx)("span",{children:Object(j.jsxs)("strong",{children:["q",Object(j.jsx)("sub",{children:this.props.number})]})}),Object(j.jsx)("span",{style:{marginLeft:"10px",marginRight:"20px"},children:"|0\u27e9"}),this.props.gates.map((function(t,n){return"h"===t?Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(h,{type:"h",qubit:e.props.number,index:n,options:e.props.options,onDelete:e.props.onDeleteGate})},Object(d.a)()):"cnot"===t?Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(h,{type:"cnot",qubit:e.props.number,index:n,options:e.props.options,onDelete:e.props.onDeleteGate})},Object(d.a)()):"cnotUp"===t?Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(h,{type:"cnotUp",qubit:e.props.number,index:n,options:e.props.options,onDelete:e.props.onDeleteGate})},Object(d.a)()):"cnotDown"===t?Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(h,{type:"cnotDown",qubit:e.props.number,index:n,options:e.props.options,onDelete:e.props.onDeleteGate})},Object(d.a)()):"t"===t?Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(h,{type:"t",qubit:e.props.number,index:n,options:e.props.options,onDelete:e.props.onDeleteGate})},Object(d.a)()):"trig"===t?Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(h,{type:"trig",options:e.props.options,onDelete:e.props.onDeleteGate})},Object(d.a)()):"connect"===t?Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(h,{type:"connect",options:e.props.options,onDelete:e.props.onDeleteGate})},Object(d.a)()):"trigopt"===t?Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(h,{type:"trigopt",qubit:e.props.number,index:n,options:e.props.options,onSelectTrigger:e.props.onSelectTrigger})},Object(d.a)()):Object(j.jsx)("span",{className:"gate-wrapper",children:Object(j.jsx)(u.c,{droppableId:"q"+e.props.number+","+n,direction:"horizontal",children:function(t){return Object(r.createElement)("span",Object(i.a)(Object(i.a)({},t.droppableProps),{},{ref:t.innerRef,key:Object(d.a)(),className:e.props.options.showGateDrop?"gate-drop show":"gate-drop"}))}})},Object(d.a)())}))]})}}]),n}(r.Component),x=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"circuit-wrapper",children:Object(j.jsx)("div",{className:"circuit",children:this.props.circuit.map((function(t,n){return Object(j.jsx)(O,{number:n,options:e.props.options,gates:t,onSelectTrigger:e.props.onSelectTrigger,onDeleteGate:e.props.onDeleteGate},n)}))})})}}]),n}(r.Component),g=n(47),f=n.n(g),m=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{style:{display:"fixed",height:"50px"},children:Object(j.jsxs)("div",{className:"toolbar",children:["Spring 2021 IQC Quantum Computer Simulator",Object(j.jsx)("div",{style:{position:"absolute",right:"40px",top:"0"},children:Object(j.jsx)(f.a,{ticking:!0,format:"HH:mm:ss",timezone:"Etc/UTC"})}),Object(j.jsx)("div",{style:{position:"absolute",right:"25px",top:"0"},children:"Z"})]})})}}]),n}(r.Component),v=n(43),w=n.n(v),D=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("h1",{children:"Instructions:"}),Object(j.jsx)("hr",{}),"Drag and drop gates on qubit register lines to form a circuit.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"To connect CNOT trigger lines, click on one of the connection points that appear after adding a CNOT gate.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"To delete a gate, double click on it.",Object(j.jsx)("h1",{children:"Debug:"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Display Gate Drop Locations:"}),Object(j.jsx)(w.a,{onChange:function(t){return e.props.onSetOption("showGateDrop",t)},checked:this.props.options.showGateDrop,offColor:"#b02e2e",className:"react-switch"}),Object(j.jsx)("span",{children:"Display Gate Matrices:"}),Object(j.jsx)(w.a,{onChange:function(t){return e.props.onSetOption("showGateMatrix",t)},checked:this.props.options.showGateMatrix,offColor:"#b02e2e",className:"react-switch"})]})]})}}]),n}(r.Component),k=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"gate-menu",children:Object(j.jsx)(u.c,{droppableId:Object(d.a)(),direction:"horizontal",children:function(t,n){return Object(j.jsxs)("div",Object(i.a)(Object(i.a)({},t.droppableProps),{},{ref:t.innerRef,children:[Object(j.jsx)("span",{className:"\r gate-wrapper",children:Object(j.jsx)(u.b,{draggableId:"cnot",index:0,children:function(t){return Object(j.jsx)(h,Object(i.a)(Object(i.a)(Object(i.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"cnot",options:e.props.options}))}},1)}),Object(j.jsx)("span",{className:"\r gate-wrapper",children:Object(j.jsx)(u.b,{draggableId:"h",index:0,children:function(t){return Object(j.jsx)(h,Object(i.a)(Object(i.a)(Object(i.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"h",options:e.props.options}))}},2)}),Object(j.jsx)("span",{className:"\r gate-wrapper",children:Object(j.jsx)(u.b,{draggableId:"t",index:0,children:function(t){return Object(j.jsx)(h,Object(i.a)(Object(i.a)(Object(i.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"t",options:e.props.options}))}},3)})]}))}},Object(d.a)())})}}]),n}(r.Component),y=n(92),N=n(2),M=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={stateVector:[]},r}return Object(c.a)(n,[{key:"redistribute",value:function(e,t){return{a:y.a("1/sqrt(2)*("+e+"+"+t+")"),b:y.a("1/sqrt(2)*("+e+"-"+t+")")}}},{key:"phaseTransition",value:function(e){return y.a("e^(i*pi/4)*"+e)}},{key:"swap",value:function(e,t){return{a:t,b:e}}},{key:"evalHGate",value:function(e,t){for(var n=this.props.circuit.length,r=0;r<Math.pow(2,e);r++)for(var s=0;s<Math.pow(2,n-e-1);s++){var o=s+r*Math.pow(2,n-e),i=s+r*Math.pow(2,n-e)+Math.pow(2,n-e-1),a=this.redistribute(t[o],t[i]);return t[o]=a.a,t[i]=a.b,t}}},{key:"evalTGate",value:function(e,t){for(var n=this.props.circuit.length,r=0;r<Math.pow(2,e);r++)for(var s=0;s<Math.pow(2,n-e-1);s++){var o=s+r*Math.pow(2,n-e)+Math.pow(2,n-e-1),i=this.phaseTransition(t[o]);return t[o]=i,t}}},{key:"evalCNOTGate",value:function(e,t,n){for(var r=this.props.circuit.length,s=Math.min(e,t),o=Math.max(e,t),i=0;i<Math.pow(2,s);i++)for(var a=0;a<Math.pow(2,o-s-1);a++)for(var c=0;c<Math.pow(2,r-o-1);c++){var p=i*Math.pow(2,r-s)+a*Math.pow(2,r-o)+c+Math.pow(2,r-e-1),l=i*Math.pow(2,r-s)+a*Math.pow(2,r-o)+c+Math.pow(2,r-e-1)+Math.pow(2,r-t-1),u=this.swap(n[p],n[l]);n[p]=u.a,n[l]=u.b}return n}},{key:"evaluateCircuit",value:function(){console.log(this.props.circuit);var e=this.props.circuit.length,t=[];t.push(1);for(var n=1;n<Math.pow(2,e);n++)t.push(0);for(n=0;n<this.props.circuit[0].length;n++)for(var r,s=!1,o=0;o<this.props.circuit.length;o++)switch(this.props.circuit[o][n]){case"h":t=this.evalHGate(o,t);break;case"t":t=this.evalTGate(o,t);break;case"trig":if(s)break;for(s=!0,r=o+1;r<this.props.circuit.length;r++)if("cnotUp"===this.props.circuit[r][n]||"cnotDown"===this.props.circuit[r][n]){t=this.evalCNOTGate(o,r,t);break}break;case"cnotUp":if(s)break;for(s=!0,r=o+1;r<this.props.circuit.length;r++)if("trig"===this.props.circuit[r][n]){t=this.evalCNOTGate(r,o,t);break}break;case"cnotDown":if(s)break;for(s=!0,r=o+1;r<this.props.circuit.length;r++)if("trig"===this.props.circuit[r][n]){t=this.evalCNOTGate(r,o,t);break}}console.log(t),this.setState({stateVector:t})}},{key:"componentDidMount",value:function(){this.evaluateCircuit()}},{key:"componentDidUpdate",value:function(e,t){e.circuit!==this.props.circuit&&this.evaluateCircuit()}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.circuit.length;t++)e.push(Object(j.jsxs)("strong",{children:["q",Object(j.jsx)("sub",{children:t})]},t));var n=[];for(t=0;t<Math.pow(2,this.props.circuit.length);t++)n.push(Object(j.jsx)("div",{children:(t>>>0).toString(2).padStart(3,"0").split("").join(" ")+": "+(void 0!==this.state.stateVector[t]?N.me(this.state.stateVector[t],3):"???")},t));return Object(j.jsxs)("div",{className:"measure",children:[Object(j.jsx)("h4",{children:"Statevector:"}),Object(j.jsx)("div",{children:e}),n]})}}]),n}(r.Component),G=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={options:{showGateDrop:!1,showGateMatrix:!1},circuit:[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]},r}return Object(c.a)(n,[{key:"onDragEnd",value:function(e){if(e.destination&&"q"===e.destination.droppableId.charAt(0)){var t=this.state.circuit,n=parseInt(e.destination.droppableId.charAt(1)),r=parseInt(e.destination.droppableId.substring(3));if("cnot"===e.draggableId)for(var s=0;s<t.length;s++)if(s!==n&&("cnot"===t[s][r]||"cnotUp"===t[s][r]||"cnotDown"===t[s][r]))return void alert("Error: Only one CNOT allowed per column");if(t[n][r]=e.draggableId,"cnot"===e.draggableId){for(s=n+1;s<t.length&&null===t[s][r];s++)t[s][r]="trigopt";for(s=n-1;s>=0&&null===t[s][r];s--)t[s][r]="trigopt"}this.setState({circuit:t})}}},{key:"onSetOption",value:function(e,t){switch(e){case"showGateDrop":this.setState((function(e){return{options:Object(i.a)(Object(i.a)({},e.options),{},{showGateDrop:t})}}));break;case"showGateMatrix":this.setState((function(e){return{options:Object(i.a)(Object(i.a)({},e.options),{},{showGateMatrix:t})}}));break;default:return}}},{key:"onSelectTrigger",value:function(e,t){for(var n=this.state.circuit,r=!1,s=0;s<n.length;s++)s===e&&(r=!r),"cnot"!==n[s][t]?"trigopt"===n[s][t]&&(n[s][t]=r?"connect":null):(n[s][t]=r?"cnotUp":"cnotDown",r=!r);n[e][t]="trig",this.setState({circuit:n})}},{key:"onDeleteGate",value:function(e,t,n){var r=this.state.circuit;if(r[e][t]=null,n)for(var s=0;s<r.length;s++)"trig"!==r[s][t]&&"connect"!==r[s][t]&&"trigopt"!==r[s][t]||(r[s][t]=null);this.setState({circuit:r})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(D,{options:this.state.options,onSetOption:this.onSetOption.bind(this)}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(u.a,{onDragEnd:function(t){return e.onDragEnd(t)},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"New Program >"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h3",{children:"Gates:"}),Object(j.jsx)(k,{options:this.state.options}),Object(j.jsx)("hr",{}),Object(j.jsx)("h3",{children:"Circuit:"}),Object(j.jsx)(x,{options:this.state.options,circuit:this.state.circuit,onSelectTrigger:this.onSelectTrigger.bind(this),onDeleteGate:this.onDeleteGate.bind(this)}),Object(j.jsx)("hr",{}),Object(j.jsx)("h3",{children:"Measurement:"}),Object(j.jsx)(M,{circuit:[].concat(this.state.circuit)})]})})})]})}}]),n}(r.Component);o.a.render(Object(j.jsx)(G,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.6081e1f5.chunk.js.map