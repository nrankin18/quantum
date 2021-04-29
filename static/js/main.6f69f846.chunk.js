(this.webpackJsonpquantum=this.webpackJsonpquantum||[]).push([[0],{28:function(t,e,n){},95:function(t,e){},96:function(t,e,n){"use strict";n.r(e);var s=n(8),r=n(33),i=n.n(r),l=n(13),o=n(18),a=n(19),c=n(21),p=n(20),u=(n(28),n(26)),h=n(35),b=(n(75),n(48)),j=n(49),d=n(6),O=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this;switch(this.props.type){case"measure":return Object(d.jsx)("div",Object(l.a)(Object(l.a)({className:"gate measure"},this.props),{},{ref:this.props.innerRef,children:Object(d.jsx)(b.a,{icon:j.a})}));case"cnot":return Object(d.jsxs)("div",Object(l.a)(Object(l.a)({className:this.props.onDelete?"gate cnot noselect deletable":"gate cnot noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(e){t.props.onDelete&&t.props.onDelete(t.props.qubit,t.props.index,!0)},children:["CNOT",Object(d.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(d.jsx)(h.BlockMath,{math:"\\begin{bmatrix}1&0&0&0\\\\ 0&1&0&0\\\\ 0&0&0&1\\\\ 0&0&1&0\\end{bmatrix}"})})]}));case"cnotUp":return Object(d.jsxs)("div",Object(l.a)(Object(l.a)({className:this.props.onDelete?"gate cnot x noselect deletable":"gate cnot x noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(e){t.props.onDelete&&t.props.onDelete(t.props.qubit,t.props.index,!0)},children:["X",Object(d.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(d.jsx)(h.BlockMath,{math:"\\begin{bmatrix}0&1\\\\ 1&0\\end{bmatrix}"})}),Object(d.jsx)("span",{className:"cnotUp"})]}));case"cnotDown":return Object(d.jsxs)("div",Object(l.a)(Object(l.a)({className:this.props.onDelete?"gate cnot x noselect deletable":"gate cnot x noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(e){t.props.onDelete&&t.props.onDelete(t.props.qubit,t.props.index,!0)},children:["X",Object(d.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(d.jsx)(h.BlockMath,{math:"\\begin{bmatrix}0&1\\\\ 1&0\\end{bmatrix}"})}),Object(d.jsx)("span",{className:"cnotDown"})]}));case"h":return Object(d.jsxs)("div",Object(l.a)(Object(l.a)({className:this.props.onDelete?"gate h noselect deletable":"gate h noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(e){t.props.onDelete&&t.props.onDelete(t.props.qubit,t.props.index,!1)},children:["H",Object(d.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(d.jsx)(h.BlockMath,{math:"\\frac1{\\sqrt2}\\begin{bmatrix}1&1\\\\ 1&-1\\end{bmatrix}"})})]}));case"t":return Object(d.jsxs)("div",Object(l.a)(Object(l.a)({className:this.props.onDelete?"gate t noselect deletable":"gate t noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(e){t.props.onDelete&&t.props.onDelete(t.props.qubit,t.props.index,!1)},children:["T",Object(d.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(d.jsx)(h.BlockMath,{math:"\\begin{bmatrix}1&0\\\\ 0&e^{i\\pi /4}\\end{bmatrix}"})})]}));case"trigopt":return Object(d.jsx)("div",Object(l.a)(Object(l.a)({className:"gate trigopt noselect"},this.props),{},{ref:this.props.innerRef,children:Object(d.jsx)("div",{onClick:function(e){return t.props.onSelectTrigger(t.props.qubit,t.props.index)}})}));case"trig":return Object(d.jsx)("div",Object(l.a)(Object(l.a)({className:"gate trig noselect"},this.props),{},{ref:this.props.innerRef,children:Object(d.jsx)("div",{})}));case"connect":return Object(d.jsx)("div",Object(l.a)(Object(l.a)({className:"gate connect noselect"},this.props),{},{ref:this.props.innerRef,children:Object(d.jsx)("div",{})}));default:return null}}}]),n}(s.Component),x=n(99),g=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"qubit",children:[Object(d.jsx)("span",{className:"qubit-line"}),Object(d.jsx)("span",{children:Object(d.jsxs)("strong",{children:["q",Object(d.jsx)("sub",{children:this.props.number})]})}),Object(d.jsx)("span",{style:{marginLeft:"10px",marginRight:"20px"},children:"|0\u27e9"}),this.props.gates.map((function(e,n){return"h"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"h",qubit:t.props.number,index:n,options:t.props.options,onDelete:t.props.onDeleteGate})},Object(x.a)()):"cnot"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"cnot",qubit:t.props.number,index:n,options:t.props.options,onDelete:t.props.onDeleteGate})},Object(x.a)()):"cnotUp"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"cnotUp",qubit:t.props.number,index:n,options:t.props.options,onDelete:t.props.onDeleteGate})},Object(x.a)()):"cnotDown"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"cnotDown",qubit:t.props.number,index:n,options:t.props.options,onDelete:t.props.onDeleteGate})},Object(x.a)()):"t"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"t",qubit:t.props.number,index:n,options:t.props.options,onDelete:t.props.onDeleteGate})},Object(x.a)()):"measure"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"measure",qubit:t.props.number,index:n,options:t.props.options})},Object(x.a)()):"trig"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"trig",options:t.props.options,onDelete:t.props.onDeleteGate})},Object(x.a)()):"connect"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"connect",options:t.props.options,onDelete:t.props.onDeleteGate})},Object(x.a)()):"trigopt"===e?Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(O,{type:"trigopt",qubit:t.props.number,index:n,options:t.props.options,onSelectTrigger:t.props.onSelectTrigger})},Object(x.a)()):Object(d.jsx)("span",{className:"gate-wrapper",children:Object(d.jsx)(u.c,{droppableId:"q"+t.props.number+","+n,direction:"horizontal",children:function(e){return Object(s.createElement)("span",Object(l.a)(Object(l.a)({},e.droppableProps),{},{ref:e.innerRef,key:Object(x.a)(),className:t.props.options.showGateDrop?"gate-drop show":"gate-drop"}))}})},Object(x.a)())}))]})}}]),n}(s.Component),f=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"circuit-wrapper",children:Object(d.jsx)("div",{className:"circuit",children:this.props.circuit.map((function(e,n){return Object(d.jsx)(g,{number:n,options:t.props.options,gates:e,onSelectTrigger:t.props.onSelectTrigger,onDeleteGate:t.props.onDeleteGate},n)}))})}),Object(d.jsx)("button",{className:"button",onClick:function(){return t.props.onAddQubit()},children:"Add qubit"}),Object(d.jsx)("button",{className:"button",onClick:function(){return t.props.onRemoveQubit()},children:"Remove qubit"}),Object(d.jsx)("button",{className:"button",onClick:function(){return t.props.onClearCircuit()},children:"Reset circuit"})," "]})}}]),n}(s.Component),m=n(51),v=n.n(m),w=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{style:{display:"fixed",height:"50px"},children:Object(d.jsxs)("div",{className:"toolbar",children:["Spring 2021 IQC Quantum Computer Simulator",Object(d.jsx)("div",{style:{position:"absolute",right:"40px",top:"0"},children:Object(d.jsx)(v.a,{ticking:!0,format:"HH:mm:ss",timezone:"Etc/UTC"})}),Object(d.jsx)("div",{style:{position:"absolute",right:"25px",top:"0"},children:"Z"})]})})}}]),n}(s.Component),k=n(41),D=n.n(k),N=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("h1",{children:"Instructions:"}),Object(d.jsx)("hr",{}),"Drag and drop gates on qubit register lines to form a circuit.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"To connect CNOT trigger lines, click on one of the connection points that appear after adding a CNOT gate.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"To delete a gate, double click on it.",Object(d.jsx)("h1",{children:"Options:"}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"Display Gate Drop Locations:"}),Object(d.jsx)(D.a,{onChange:function(e){return t.props.onSetOption("showGateDrop",e)},checked:this.props.options.showGateDrop,offColor:"#b02e2e",className:"react-switch"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"Display Gate Matrices:"}),Object(d.jsx)(D.a,{onChange:function(e){return t.props.onSetOption("showGateMatrix",e)},checked:this.props.options.showGateMatrix,offColor:"#b02e2e",className:"react-switch"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"Display Statevector:"}),Object(d.jsx)(D.a,{onChange:function(e){return t.props.onSetOption("showStatevector",e)},checked:this.props.options.showStatevector,offColor:"#b02e2e",className:"react-switch"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"Random seed:"}),Object(d.jsx)("input",{className:"input",value:this.props.options.randomSeed,onChange:function(e){return t.props.onSetOption("setSeed",e)}}),Object(d.jsx)("h1",{children:"Source Code:"}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{}),"Source code is available on"," ",Object(d.jsx)("a",{href:"https://github.com/nrankin18/quantum",target:"_blank",children:"GitHub"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"copyright",children:"Copyright \xa9 2021 Nathan Rankin"})]})}}]),n}(s.Component),y=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsx)("div",{className:"gate-menu",children:Object(d.jsx)(u.c,{droppableId:Object(x.a)(),direction:"horizontal",children:function(e,n){return Object(d.jsxs)("div",Object(l.a)(Object(l.a)({},e.droppableProps),{},{ref:e.innerRef,children:[Object(d.jsx)("span",{className:"\r gate-wrapper",children:Object(d.jsx)(u.b,{draggableId:"cnot",index:0,children:function(e){return Object(d.jsx)(O,Object(l.a)(Object(l.a)(Object(l.a)({},e.draggableProps),e.dragHandleProps),{},{innerRef:e.innerRef,type:"cnot",options:t.props.options}))}},1)}),Object(d.jsx)("span",{className:"\r gate-wrapper",children:Object(d.jsx)(u.b,{draggableId:"h",index:0,children:function(e){return Object(d.jsx)(O,Object(l.a)(Object(l.a)(Object(l.a)({},e.draggableProps),e.dragHandleProps),{},{innerRef:e.innerRef,type:"h",options:t.props.options}))}},2)}),Object(d.jsx)("span",{className:"\r gate-wrapper",children:Object(d.jsx)(u.b,{draggableId:"t",index:0,children:function(e){return Object(d.jsx)(O,Object(l.a)(Object(l.a)(Object(l.a)({},e.draggableProps),e.dragHandleProps),{},{innerRef:e.innerRef,type:"t",options:t.props.options}))}},3)})]}))}},Object(x.a)())})}}]),n}(s.Component),S=n(98),C=n(2),M=n(36),G=n.n(M),q=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={stateVector:[]},s}return Object(a.a)(n,[{key:"redistribute",value:function(t,e){return{a:S.a("1/sqrt(2)*(("+t+")+("+e+"))"),b:S.a("1/sqrt(2)*(("+t+")-("+e+"))")}}},{key:"phaseTransition",value:function(t){return S.a("e^((i*pi)/4)*("+t+")")}},{key:"swap",value:function(t,e){return{a:e,b:t}}},{key:"evalHGate",value:function(t,e){for(var n=this.props.circuit.length,s=0;s<Math.pow(2,t);s++)for(var r=0;r<Math.pow(2,n-t-1);r++){var i=r+s*Math.pow(2,n-t),l=r+s*Math.pow(2,n-t)+Math.pow(2,n-t-1),o=this.redistribute(e[i],e[l]);e[i]=o.a,e[l]=o.b}return e}},{key:"evalTGate",value:function(t,e){for(var n=this.props.circuit.length,s=0;s<Math.pow(2,t);s++)for(var r=0;r<Math.pow(2,n-t-1);r++){var i=r+s*Math.pow(2,n-t)+Math.pow(2,n-t-1),l=this.phaseTransition(e[i]);e[i]=l}return e}},{key:"evalCNOTGate",value:function(t,e,n){for(var s=this.props.circuit.length,r=Math.min(t,e),i=Math.max(t,e),l=0;l<Math.pow(2,r);l++)for(var o=0;o<Math.pow(2,i-r-1);o++)for(var a=0;a<Math.pow(2,s-i-1);a++){var c=l*Math.pow(2,s-r)+o*Math.pow(2,s-i)+a+Math.pow(2,s-t-1),p=l*Math.pow(2,s-r)+o*Math.pow(2,s-i)+a+Math.pow(2,s-t-1)+Math.pow(2,s-e-1),u=this.swap(n[c],n[p]);n[c]=u.a,n[p]=u.b}return n}},{key:"evaluateCircuit",value:function(){console.log(this.props.circuit);var t=this.props.circuit.length,e=[];e.push(1);for(var n=1;n<Math.pow(2,t);n++)e.push(0);for(n=0;n<this.props.circuit[0].length;n++)for(var s,r=!1,i=0;i<this.props.circuit.length;i++)switch(this.props.circuit[i][n]){case"h":e=this.evalHGate(i,e);break;case"t":e=this.evalTGate(i,e);break;case"trig":if(r)break;for(r=!0,s=i+1;s<this.props.circuit.length;s++)if("cnotUp"===this.props.circuit[s][n]||"cnotDown"===this.props.circuit[s][n]){e=this.evalCNOTGate(i,s,e);break}break;case"cnotUp":if(r)break;for(r=!0,s=i+1;s<this.props.circuit.length;s++)if("trig"===this.props.circuit[s][n]){e=this.evalCNOTGate(s,i,e);break}break;case"cnotDown":if(r)break;for(r=!0,s=i+1;s<this.props.circuit.length;s++)if("trig"===this.props.circuit[s][n]){e=this.evalCNOTGate(s,i,e);break}}console.log(e),this.setState({stateVector:e})}},{key:"componentDidMount",value:function(){this.evaluateCircuit()}},{key:"componentDidUpdate",value:function(t,e){t.circuit!==this.props.circuit&&this.evaluateCircuit()}},{key:"render",value:function(){var t=[];t.push(Object(d.jsxs)("strong",{children:["\xa0q",Object(d.jsx)("sub",{children:"0"})]},0));for(var e=1;e<this.props.circuit.length;e++)t.push(Object(d.jsxs)("strong",{children:["q",Object(d.jsx)("sub",{children:e})]},e));var n=[];for(e=0;e<Math.pow(2,this.props.circuit.length);e++)n.push(Object(d.jsxs)("div",{children:["|",(e>>>0).toString(2).padStart(this.props.circuit.length,"0").split("").join(" ")+"\u27e9: "+(void 0!==this.state.stateVector[e]?C.me(this.state.stateVector[e],3):"???")]},e));var s=[],r=[];for(e=0;e<Math.pow(2,this.props.circuit.length);e++){var i;if(void 0!==this.state.stateVector[e])for(var l=Math.pow(C.de(this.state.stateVector[e]),2),o=Math.pow(C.Dc(this.state.stateVector[e]),2),a=100*(i=C.me(l+o,3)),c=0;c<a;c++)r.push((e>>>0).toString(2).padStart(this.props.circuit.length,"0"));else i="???";s.push(Object(d.jsxs)("div",{children:["|",(e>>>0).toString(2).padStart(this.props.circuit.length,"0").split("").join(" ")+"\u27e9: "+(void 0!==this.state.stateVector[e]?i:"???")]},e))}var p=G()(this.props.options.randomSeed),u=r[Math.floor(p()*r.length)],h=[];for(e=0;e<this.props.circuit.length;e++)h.push(Object(d.jsxs)("div",{className:"output",children:[Object(d.jsxs)("strong",{children:["q",Object(d.jsx)("sub",{children:e}),":"]},e),Object(d.jsx)("span",{children:(u+"").charAt(e)}),Object(d.jsx)("br",{})]}));return Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("div",{className:"outcome",children:[Object(d.jsx)("h3",{children:"Measurement:"}),h]}),Object(d.jsxs)("div",{className:this.props.options.showStatevector?"":"hidden",children:[Object(d.jsx)("h3",{children:"Statevector:"}),Object(d.jsx)("div",{children:t}),n]}),Object(d.jsxs)("div",{className:this.props.options.showStatevector?"hidden":"",children:[Object(d.jsx)("h3",{children:"Probability:"}),Object(d.jsx)("div",{children:t}),s]})]})}}]),n}(s.Component),R=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={options:{showGateDrop:!1,showGateMatrix:!1,showStatevector:!1,randomSeed:"2021"},circuit:[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"]]},s}return Object(a.a)(n,[{key:"onDragEnd",value:function(t){if(t.destination&&"q"===t.destination.droppableId.charAt(0)){var e=this.state.circuit,n=parseInt(t.destination.droppableId.charAt(1)),s=parseInt(t.destination.droppableId.substring(3));if("cnot"===t.draggableId)for(var r=0;r<e.length;r++)if(r!==n&&("cnot"===e[r][s]||"cnotUp"===e[r][s]||"cnotDown"===e[r][s]))return void alert("Error: Only one CNOT allowed per column");if(e[n][s]=t.draggableId,"cnot"===t.draggableId){for(r=n+1;r<e.length&&null===e[r][s];r++)e[r][s]="trigopt";for(r=n-1;r>=0&&null===e[r][s];r--)e[r][s]="trigopt"}this.setState({circuit:e})}}},{key:"onSetOption",value:function(t,e){switch(t){case"showGateDrop":this.setState((function(t){return{options:Object(l.a)(Object(l.a)({},t.options),{},{showGateDrop:e})}}));break;case"showGateMatrix":this.setState((function(t){return{options:Object(l.a)(Object(l.a)({},t.options),{},{showGateMatrix:e})}}));break;case"showStatevector":this.setState((function(t){return{options:Object(l.a)(Object(l.a)({},t.options),{},{showStatevector:e})}}));break;case"setSeed":console.log(e.target.value),this.setState((function(t){return{options:Object(l.a)(Object(l.a)({},t.options),{},{randomSeed:e.target.value})}}));break;default:return}}},{key:"onSelectTrigger",value:function(t,e){for(var n=this.state.circuit,s=!1,r=0;r<n.length;r++)r===t&&(s=!s),"cnot"!==n[r][e]?"trigopt"===n[r][e]&&(n[r][e]=s?"connect":null):(n[r][e]=s?"cnotUp":"cnotDown",s=!s);n[t][e]="trig",this.setState({circuit:n})}},{key:"onDeleteGate",value:function(t,e,n){var s=this.state.circuit;if(s[t][e]=null,n)for(var r=0;r<s.length;r++)"trig"!==s[r][e]&&"connect"!==s[r][e]&&"trigopt"!==s[r][e]||(s[r][e]=null);this.setState({circuit:s})}},{key:"onClearCircuit",value:function(){this.setState({circuit:[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"]]})}},{key:"onAddQubit",value:function(){var t=this.state.circuit;t.length<10&&t.push([null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"]),this.setState({circuit:t})}},{key:"onRemoveQubit",value:function(){var t=this.state.circuit;t.length>1&&t.pop(),this.setState({circuit:t})}},{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{}),Object(d.jsx)(N,{options:this.state.options,onSetOption:this.onSetOption.bind(this)}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(u.a,{onDragEnd:function(e){return t.onDragEnd(e)},children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"New Program >"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"Gates:"}),Object(d.jsx)(y,{options:this.state.options}),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"Circuit:"}),Object(d.jsx)(f,{options:this.state.options,circuit:this.state.circuit,onSelectTrigger:this.onSelectTrigger.bind(this),onDeleteGate:this.onDeleteGate.bind(this),onClearCircuit:this.onClearCircuit.bind(this),onAddQubit:this.onAddQubit.bind(this),onRemoveQubit:this.onRemoveQubit.bind(this)}),Object(d.jsx)("hr",{}),Object(d.jsx)(q,{circuit:[].concat(this.state.circuit),options:this.state.options})]})})})]})}}]),n}(s.Component);i.a.render(Object(d.jsx)(R,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.6f69f846.chunk.js.map