(this.webpackJsonpquantum=this.webpackJsonpquantum||[]).push([[0],{29:function(e,t,n){},95:function(e,t){},96:function(e,t,n){"use strict";n.r(t);var s=n(8),r=n(34),i=n.n(r),a=n(11),o=n(18),c=n(19),l=n(21),p=n(20),u=(n(29),n(48)),h=n.n(u),b=n(4),j=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{style:{display:"fixed",height:"50px"},children:Object(b.jsxs)("div",{className:"toolbar",children:["Spring 2021 IQC Quantum Computer Simulator",Object(b.jsx)("div",{style:{position:"absolute",right:"40px",top:"0"},children:Object(b.jsx)(h.a,{ticking:!0,format:"HH:mm:ss",timezone:"Etc/UTC"})}),Object(b.jsx)("div",{style:{position:"absolute",right:"25px",top:"0"},children:"Z"})]})})}}]),n}(s.Component),d=n(41),O=n.n(d),x=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)("h1",{children:"Instructions:"}),Object(b.jsx)("hr",{}),"Drag and drop gates on qubit register lines to form a circuit.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"To connect CNOT trigger lines, click on one of the connection points that appear after adding a CNOT gate.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"To delete a gate, double click on it.",Object(b.jsx)("h1",{children:"Options:"}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"Display Gate Drop Locations:"}),Object(b.jsx)(O.a,{onChange:function(t){return e.props.onSetOption("showGateDrop",t)},checked:this.props.options.showGateDrop,offColor:"#b02e2e",className:"react-switch"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"Display Gate Matrices:"}),Object(b.jsx)(O.a,{onChange:function(t){return e.props.onSetOption("showGateMatrix",t)},checked:this.props.options.showGateMatrix,offColor:"#b02e2e",className:"react-switch"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"Display Statevector:"}),Object(b.jsx)(O.a,{onChange:function(t){return e.props.onSetOption("showStatevector",t)},checked:this.props.options.showStatevector,offColor:"#b02e2e",className:"react-switch"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:"Random seed:"}),Object(b.jsx)("input",{className:"input",value:this.props.options.randomSeed,onChange:function(t){return e.props.onSetOption("setSeed",t)}}),Object(b.jsx)("h1",{children:"Source Code:"}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),"Source code is available on"," ",Object(b.jsx)("a",{href:"https://github.com/nrankin18/quantum",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"copyright",children:"Copyright \xa9 2021 Nathan Rankin"})]})}}]),n}(s.Component),g=n(23),f=n(99),v=n(27),m=(n(82),n(49)),w=n(50),k=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;switch(this.props.type){case"measure":return Object(b.jsx)("div",Object(a.a)(Object(a.a)({className:"gate measure"},this.props),{},{ref:this.props.innerRef,children:Object(b.jsx)(m.a,{icon:w.a})}));case"cnot":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate cnot noselect deletable":"gate cnot noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!0)},children:["CNOT",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\begin{bmatrix}1&0&0&0\\\\ 0&1&0&0\\\\ 0&0&0&1\\\\ 0&0&1&0\\end{bmatrix}"})})]}));case"cnotUp":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate cnot x noselect deletable":"gate cnot x noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!0)},children:["X",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\begin{bmatrix}0&1\\\\ 1&0\\end{bmatrix}"})}),Object(b.jsx)("span",{className:"cnotUp"})]}));case"cnotDown":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate cnot x noselect deletable":"gate cnot x noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!0)},children:["X",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\begin{bmatrix}0&1\\\\ 1&0\\end{bmatrix}"})}),Object(b.jsx)("span",{className:"cnotDown"})]}));case"h":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate h noselect deletable":"gate h noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!1)},children:["H",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\frac1{\\sqrt2}\\begin{bmatrix}1&1\\\\ 1&-1\\end{bmatrix}"})})]}));case"t":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate t noselect deletable":"gate t noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!1)},children:["T",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\begin{bmatrix}1&0\\\\ 0&e^{i\\pi /4}\\end{bmatrix}"})})]}));case"s":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate s noselect deletable":"gate s noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!1)},children:["S",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\begin{bmatrix}1&0\\\\ 0&i\\end{bmatrix}"})})]}));case"z":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate z noselect deletable":"gate z noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!1)},children:["Z",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\begin{bmatrix}1&0\\\\ 0&-1\\end{bmatrix}"})})]}));case"x":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate x noselect deletable":"gate x noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!1)},children:["X",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\begin{bmatrix}0&1\\\\ 1&0\\end{bmatrix}"})})]}));case"y":return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({className:this.props.onDelete?"gate y noselect deletable":"gate y noselect"},this.props),{},{ref:this.props.innerRef,onDoubleClick:function(t){e.props.onDelete&&e.props.onDelete(e.props.qubit,e.props.index,!1)},children:["Y",Object(b.jsx)("span",{className:this.props.options.showGateMatrix?"gate-tooltip":"hidden",children:Object(b.jsx)(v.BlockMath,{math:"\\begin{bmatrix}0&-i\\\\ i&0\\end{bmatrix}"})})]}));case"trigopt":return Object(b.jsx)("div",Object(a.a)(Object(a.a)({className:"gate trigopt noselect"},this.props),{},{ref:this.props.innerRef,children:Object(b.jsx)("div",{onClick:function(t){return e.props.onSelectTrigger(e.props.qubit,e.props.index)}})}));case"trig":return Object(b.jsx)("div",Object(a.a)(Object(a.a)({className:"gate trig noselect"},this.props),{},{ref:this.props.innerRef,children:Object(b.jsx)("div",{})}));case"connect":return Object(b.jsx)("div",Object(a.a)(Object(a.a)({className:"gate connect noselect"},this.props),{},{ref:this.props.innerRef,children:Object(b.jsx)("div",{})}));default:return null}}}]),n}(s.Component),N=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"gate-menu",children:Object(b.jsx)(g.c,{droppableId:Object(f.a)(),direction:"horizontal",children:function(t,n){return Object(b.jsxs)("div",Object(a.a)(Object(a.a)({},t.droppableProps),{},{ref:t.innerRef,children:[Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(g.b,{draggableId:"h",index:0,children:function(t){return Object(b.jsx)(k,Object(a.a)(Object(a.a)(Object(a.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"h",options:e.props.options}))}},1)}),Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(g.b,{draggableId:"x",index:0,children:function(t){return Object(b.jsx)(k,Object(a.a)(Object(a.a)(Object(a.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"x",options:e.props.options}))}},2)}),Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(g.b,{draggableId:"cnot",index:0,children:function(t){return Object(b.jsx)(k,Object(a.a)(Object(a.a)(Object(a.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"cnot",options:e.props.options}))}},3)}),Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(g.b,{draggableId:"y",index:0,children:function(t){return Object(b.jsx)(k,Object(a.a)(Object(a.a)(Object(a.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"y",options:e.props.options}))}},4)}),Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(g.b,{draggableId:"z",index:0,children:function(t){return Object(b.jsx)(k,Object(a.a)(Object(a.a)(Object(a.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"z",options:e.props.options}))}},5)}),Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(g.b,{draggableId:"t",index:0,children:function(t){return Object(b.jsx)(k,Object(a.a)(Object(a.a)(Object(a.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"t",options:e.props.options}))}},6)}),Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(g.b,{draggableId:"s",index:0,children:function(t){return Object(b.jsx)(k,Object(a.a)(Object(a.a)(Object(a.a)({},t.draggableProps),t.dragHandleProps),{},{innerRef:t.innerRef,type:"s",options:e.props.options}))}},7)})]}))}},Object(f.a)())})}}]),n}(s.Component),y=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"qubit",children:[Object(b.jsx)("span",{className:"qubit-line"}),Object(b.jsx)("span",{children:Object(b.jsxs)("strong",{children:["q",Object(b.jsx)("sub",{children:this.props.number})]})}),Object(b.jsx)("span",{style:{marginLeft:"10px",marginRight:"20px"},children:"|0\u27e9"}),this.props.gates.map((function(t,n){return"h"===t||"cnot"===t||"cnotUp"===t||"cnotDown"===t||"t"===t||"s"===t||"z"===t||"x"===t||"y"===t||"trig"===t||"connect"===t?Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(k,{type:t,qubit:e.props.number,index:n,options:e.props.options,onDelete:e.props.onDeleteGate})},Object(f.a)()):"measure"===t?Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(k,{type:"measure",qubit:e.props.number,index:n,options:e.props.options})},Object(f.a)()):"trigopt"===t?Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(k,{type:"trigopt",qubit:e.props.number,index:n,options:e.props.options,onSelectTrigger:e.props.onSelectTrigger})},Object(f.a)()):Object(b.jsx)("span",{className:"gate-wrapper",children:Object(b.jsx)(g.c,{droppableId:"q"+e.props.number+","+n,direction:"horizontal",children:function(t){return Object(s.createElement)("span",Object(a.a)(Object(a.a)({},t.droppableProps),{},{ref:t.innerRef,key:Object(f.a)(),className:e.props.options.showGateDrop?"gate-drop show":"gate-drop"}))}})},Object(f.a)())}))]})}}]),n}(s.Component),M=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"circuit-wrapper",children:Object(b.jsx)("div",{className:"circuit",children:this.props.circuit.map((function(t,n){return Object(b.jsx)(y,{number:n,options:e.props.options,gates:t,onSelectTrigger:e.props.onSelectTrigger,onDeleteGate:e.props.onDeleteGate},n)}))})}),Object(b.jsx)("button",{className:"button",onClick:function(){return e.props.onAddQubit()},children:"Add qubit"}),Object(b.jsx)("button",{className:"button",onClick:function(){return e.props.onRemoveQubit()},children:"Remove qubit"}),Object(b.jsx)("button",{className:"button",onClick:function(){return e.props.onResetCircuit()},children:"Reset circuit"})," "]})}}]),n}(s.Component),D=n(98),S=n(2),C=n(36),G=n.n(C),R=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={stateVector:[]},s}return Object(c.a)(n,[{key:"redistribute",value:function(e,t){return{a:D.a("1/sqrt(2)*(("+e+")+("+t+"))"),b:D.a("1/sqrt(2)*(("+e+")-("+t+"))")}}},{key:"phaseTransitionT",value:function(e){return D.a("e^((i*pi)/4)*("+e+")")}},{key:"phaseTransitionS",value:function(e){return D.a("i*("+e+")")}},{key:"phaseTransitionZ",value:function(e){return D.a("-1*("+e+")")}},{key:"swap",value:function(e,t){return{a:t,b:e}}},{key:"evalHGate",value:function(e,t){for(var n=this.props.circuit.length,s=0;s<Math.pow(2,e);s++)for(var r=0;r<Math.pow(2,n-e-1);r++){var i=r+s*Math.pow(2,n-e),a=r+s*Math.pow(2,n-e)+Math.pow(2,n-e-1),o=this.redistribute(t[i],t[a]);t[i]=o.a,t[a]=o.b}return t}},{key:"evalTGate",value:function(e,t){for(var n=this.props.circuit.length,s=0;s<Math.pow(2,e);s++)for(var r=0;r<Math.pow(2,n-e-1);r++){var i=r+s*Math.pow(2,n-e)+Math.pow(2,n-e-1),a=this.phaseTransitionT(t[i]);t[i]=a}return t}},{key:"evalSGate",value:function(e,t){for(var n=this.props.circuit.length,s=0;s<Math.pow(2,e);s++)for(var r=0;r<Math.pow(2,n-e-1);r++){var i=r+s*Math.pow(2,n-e)+Math.pow(2,n-e-1),a=this.phaseTransitionS(t[i]);t[i]=a}return t}},{key:"evalZGate",value:function(e,t){for(var n=this.props.circuit.length,s=0;s<Math.pow(2,e);s++)for(var r=0;r<Math.pow(2,n-e-1);r++){var i=r+s*Math.pow(2,n-e)+Math.pow(2,n-e-1),a=this.phaseTransitionZ(t[i]);t[i]=a}return t}},{key:"evalXGate",value:function(e,t){for(var n=this.props.circuit.length,s=0;s<Math.pow(2,e);s++)for(var r=0;r<Math.pow(2,n-e-1);r++){var i=r+s*Math.pow(2,n-e),a=r+s*Math.pow(2,n-e)+Math.pow(2,n-e-1),o=this.swap(t[i],t[a]);t[i]=D.a("i*("+o.a+")"),t[a]=D.a("-i*("+o.b+")")}return t}},{key:"evalYGate",value:function(e,t){for(var n=this.props.circuit.length,s=0;s<Math.pow(2,e);s++)for(var r=0;r<Math.pow(2,n-e-1);r++){var i=r+s*Math.pow(2,n-e),a=r+s*Math.pow(2,n-e)+Math.pow(2,n-e-1),o=this.swap(t[i],t[a]);t[i]=o.a,t[a]=o.b}return t}},{key:"evalCNOTGate",value:function(e,t,n){for(var s=this.props.circuit.length,r=Math.min(e,t),i=Math.max(e,t),a=0;a<Math.pow(2,r);a++)for(var o=0;o<Math.pow(2,i-r-1);o++)for(var c=0;c<Math.pow(2,s-i-1);c++){var l=a*Math.pow(2,s-r)+o*Math.pow(2,s-i)+c+Math.pow(2,s-e-1),p=a*Math.pow(2,s-r)+o*Math.pow(2,s-i)+c+Math.pow(2,s-e-1)+Math.pow(2,s-t-1),u=this.swap(n[l],n[p]);n[l]=u.a,n[p]=u.b}return n}},{key:"evaluateCircuit",value:function(){console.log("Calculating result of following circuit:",this.props.circuit);var e=this.props.circuit.length,t=[];t.push(1);for(var n=1;n<Math.pow(2,e);n++)t.push(0);for(n=0;n<this.props.circuit[0].length;n++)for(var s,r=!1,i=0;i<this.props.circuit.length;i++)switch(this.props.circuit[i][n]){case"h":t=this.evalHGate(i,t);break;case"t":t=this.evalTGate(i,t);break;case"s":t=this.evalSGate(i,t);break;case"z":t=this.evalZGate(i,t);break;case"x":t=this.evalXGate(i,t);break;case"y":t=this.evalYGate(i,t);break;case"trig":if(r)break;for(r=!0,s=i+1;s<this.props.circuit.length;s++)if("cnotUp"===this.props.circuit[s][n]||"cnotDown"===this.props.circuit[s][n]){t=this.evalCNOTGate(i,s,t);break}break;case"cnotDown":case"cnotUp":if(r)break;for(r=!0,s=i+1;s<this.props.circuit.length;s++)if("trig"===this.props.circuit[s][n]){t=this.evalCNOTGate(s,i,t);break}}console.log("Resulting calculation:",t),this.setState({stateVector:t})}},{key:"componentDidMount",value:function(){this.evaluateCircuit()}},{key:"componentDidUpdate",value:function(e,t){e.circuit!==this.props.circuit&&this.evaluateCircuit()}},{key:"render",value:function(){var e=[];e.push(Object(b.jsxs)("strong",{children:["\xa0q",Object(b.jsx)("sub",{children:"0"})]},0));for(var t=1;t<this.props.circuit.length;t++)e.push(Object(b.jsxs)("strong",{children:["q",Object(b.jsx)("sub",{children:t})]},t));var n=[];for(t=0;t<Math.pow(2,this.props.circuit.length);t++)n.push(Object(b.jsxs)("div",{children:["|",(t>>>0).toString(2).padStart(this.props.circuit.length,"0").split("").join(" ")+"\u27e9: "+(void 0!==this.state.stateVector[t]?S.me(this.state.stateVector[t],3):"???")]},t));var s=[],r=[];for(t=0;t<Math.pow(2,this.props.circuit.length);t++){var i;if(void 0!==this.state.stateVector[t])for(var a=Math.pow(S.de(this.state.stateVector[t]),2),o=Math.pow(S.Dc(this.state.stateVector[t]),2),c=100*(i=S.me(a+o,3)),l=0;l<c;l++)r.push((t>>>0).toString(2).padStart(this.props.circuit.length,"0"));else i="???";s.push(Object(b.jsxs)("div",{children:["|",(t>>>0).toString(2).padStart(this.props.circuit.length,"0").split("").join(" ")+"\u27e9: "+(void 0!==this.state.stateVector[t]?i:"???")]},t))}var p=G()(this.props.options.randomSeed),u=r[Math.floor(p()*r.length)],h=[];for(t=0;t<this.props.circuit.length;t++)h.push(Object(b.jsxs)("div",{className:"output",children:[Object(b.jsxs)("strong",{children:["q",Object(b.jsx)("sub",{children:t}),":"]},t),Object(b.jsx)("span",{children:(u+"").charAt(t)}),Object(b.jsx)("br",{})]}));return Object(b.jsxs)("div",{className:"measure",children:[Object(b.jsxs)("div",{className:"outcome",children:[Object(b.jsx)("h3",{children:"Measurement:"}),h]}),Object(b.jsxs)("div",{className:this.props.options.showStatevector?"":"hidden",children:[Object(b.jsx)("h3",{children:"Statevector:"}),Object(b.jsx)("div",{children:e}),n]}),Object(b.jsxs)("div",{className:this.props.options.showStatevector?"hidden":"",children:[Object(b.jsx)("h3",{children:"Probability:"}),Object(b.jsx)("div",{children:e}),s]})]})}}]),n}(s.Component),q=[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"]],T=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={options:{showGateDrop:!1,showGateMatrix:!1,showStatevector:!1,randomSeed:"2021"},circuit:JSON.parse(JSON.stringify(q))},s}return Object(c.a)(n,[{key:"onDragEnd",value:function(e){if(e.destination&&"q"===e.destination.droppableId.charAt(0)){var t=this.state.circuit,n=parseInt(e.destination.droppableId.charAt(1)),s=parseInt(e.destination.droppableId.substring(3));if("cnot"===e.draggableId)for(var r=0;r<t.length;r++)if(r!==n&&("cnot"===t[r][s]||"cnotUp"===t[r][s]||"cnotDown"===t[r][s]))return void alert("Error: Only one CNOT allowed per column");if(t[n][s]=e.draggableId,"cnot"===e.draggableId){for(r=n+1;r<t.length&&null===t[r][s];r++)t[r][s]="trigopt";for(r=n-1;r>=0&&null===t[r][s];r--)t[r][s]="trigopt"}this.setState({circuit:t})}}},{key:"onSetOption",value:function(e,t){switch(e){case"showGateDrop":this.setState((function(e){return{options:Object(a.a)(Object(a.a)({},e.options),{},{showGateDrop:t})}}));break;case"showGateMatrix":this.setState((function(e){return{options:Object(a.a)(Object(a.a)({},e.options),{},{showGateMatrix:t})}}));break;case"showStatevector":this.setState((function(e){return{options:Object(a.a)(Object(a.a)({},e.options),{},{showStatevector:t})}}));break;case"setSeed":console.log(t.target.value),this.setState((function(e){return{options:Object(a.a)(Object(a.a)({},e.options),{},{randomSeed:t.target.value})}}));break;default:return}}},{key:"onSelectTrigger",value:function(e,t){for(var n=this.state.circuit,s=!1,r=0;r<n.length;r++)r===e&&(s=!s),"cnot"!==n[r][t]?"trigopt"===n[r][t]&&(n[r][t]=s?"connect":null):(n[r][t]=s?"cnotUp":"cnotDown",s=!s);n[e][t]="trig",this.setState({circuit:n})}},{key:"onDeleteGate",value:function(e,t,n){var s=this.state.circuit;if(s[e][t]=null,n)for(var r=0;r<s.length;r++)"trig"!==s[r][t]&&"connect"!==s[r][t]&&"trigopt"!==s[r][t]||(s[r][t]=null);this.setState({circuit:s})}},{key:"onResetCircuit",value:function(){this.setState({circuit:JSON.parse(JSON.stringify(q))})}},{key:"onAddQubit",value:function(){var e=this.state.circuit;e.length<10&&e.push([null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"measure"]),this.setState({circuit:e})}},{key:"onRemoveQubit",value:function(){var e=this.state.circuit;e.length>1&&e.pop(),this.setState({circuit:e})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(x,{options:this.state.options,onSetOption:this.onSetOption.bind(this)}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(g.a,{onDragEnd:function(t){return e.onDragEnd(t)},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"New Program >"}),Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Gates:"}),Object(b.jsx)(N,{options:this.state.options}),Object(b.jsx)("hr",{}),Object(b.jsx)("h3",{children:"Circuit:"}),Object(b.jsx)(M,{options:this.state.options,circuit:this.state.circuit,onSelectTrigger:this.onSelectTrigger.bind(this),onDeleteGate:this.onDeleteGate.bind(this),onResetCircuit:this.onResetCircuit.bind(this),onAddQubit:this.onAddQubit.bind(this),onRemoveQubit:this.onRemoveQubit.bind(this)}),Object(b.jsx)("hr",{}),Object(b.jsx)(R,{circuit:JSON.parse(JSON.stringify(this.state.circuit)),options:this.state.options})]})})})]})}}]),n}(s.Component);i.a.render(Object(b.jsx)(T,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.7ed3b399.chunk.js.map