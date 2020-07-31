(this["webpackJsonpsurvey-builder"]=this["webpackJsonpsurvey-builder"]||[]).push([[0],{40:function(e,t,a){},47:function(e,t,a){e.exports=a(86)},52:function(e,t,a){},53:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),l=a.n(s),i=(a(52),a(53),a(9)),o=a(10),c=a(46),u=a(6),m=Object(u.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(c.a)(e,["component","auth"]);return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/login"})}}))})),p=a(25),h=a.n(p),d=a(13),f=a.n(d),b=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},v=function(e){return{type:"SET_CURRENT_USER",payload:e}},E=function(){return function(e){localStorage.removeItem("jwtToken"),b(!1),e(v({}))}},g=a(19),y=a(42),O=a(11),C=a(78),N={isAuthenticated:!1,user:{},loading:!1},j={},k={studyName:"",dbInfo:[],studyInfo:[],colData:[],colNames:[],fileName:""},w=Object(g.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!C(t.payload),user:t.payload});case"USER_LOADING":return Object(O.a)(Object(O.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},dataFlow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_STUDY_NAME":return Object(O.a)(Object(O.a)({},e),{},{studyName:t.payload});case"GET_DB_INFO":return Object(O.a)(Object(O.a)({},e),{},{dbInfo:t.payload});case"GET_STUDY_INFO":return Object(O.a)(Object(O.a)({},e),{},{studyInfo:t.payload});case"GET_COL_DATA":return Object(O.a)(Object(O.a)({},e),{},{colData:t.payload});case"GET_COL_NAMES":return Object(O.a)(Object(O.a)({},e),{},{colNames:t.payload});case"STORE_FILENAME":return Object(O.a)(Object(O.a)({},e),{},{fileName:t.payload});default:return e}}}),x=[y.a],S=Object(g.e)(w,{},Object(g.d)(g.a.apply(void 0,x))),D=a(12),R=a(2),I=a(3),F=a(1),T=a(5),M=a(4),A=(a(79),function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).selectRef=r.a.createRef(),n}return Object(I.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"unit"},r.a.createElement("span",null,"Choose what element to add next"),r.a.createElement("br",null),r.a.createElement("select",{name:"tabType",id:"tabType",ref:this.selectRef},r.a.createElement("option",{value:"slider"},"Slider"),r.a.createElement("option",{value:"normal-curve"},"Normal Curve")),r.a.createElement("button",{onClick:function(){return e.props.build(e.selectRef.current.value)}},"+"))}}]),a}(n.Component)),V=(a(80),function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).sliderRef=r.a.createRef(),n.outputRef=r.a.createRef(),n.qRef=r.a.createRef(),n.minRef=r.a.createRef(),n.maxRef=r.a.createRef(),n.state={min:1,max:100},n.state={checked:!1,minVal:Number,maxVal:Number},n.handleChange=n.handleChange.bind(Object(F.a)(n)),n.onChange=n.onChange.bind(Object(F.a)(n)),n}return Object(I.a)(a,[{key:"delete",value:function(){this.props.delete(this.props.count)}},{key:"getCount",value:function(){this.props.getCount(this.props.count)}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e,t,a){this.props.handleChange(e,t,a)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"unit"},r.a.createElement("p",null,"Question: ",r.a.createElement("input",{onInput:function(){return e.handleChange("Question",e.qRef.current.value,e.props.count)},ref:this.qRef,type:"text"})),r.a.createElement("br",null),this.state.minVal,r.a.createElement("input",{type:"range",min:"1",max:"100",defaultValue:"50",className:"slider",name:"myRange",id:"myRange",ref:this.sliderRef}),this.state.maxVal," ",r.a.createElement("br",null),r.a.createElement("p",null,"Minimum:",r.a.createElement("input",{onInput:function(){return e.handleChange("lowRange",e.minRef.current.value,e.props.count)},ref:this.minRef,type:"text",name:"minVal",value:this.state.minVal,onChange:this.onChange})),r.a.createElement("br",null),r.a.createElement("p",null,"Maximum: ",r.a.createElement("input",{onInput:function(){return e.handleChange("highRange",e.maxRef.current.value,e.props.count)},ref:this.maxRef,type:"text",name:"maxVal",value:this.state.maxVal,onChange:this.onChange})),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.delete.bind(this)},"Delete"))}}]),a}(n.Component)),_=a(22),P=a(45),L=(a(81),function(e,t){return function(a){f.a.get("https://test-api-615.herokuapp.com/api/feedback/"+e+"/info/studyName-"+t).then((function(e){a({type:"GET_STUDY_INFO",payload:e.data.experiments})}))}}),U=function(e,t){return function(a){f.a.get("https://test-api-615.herokuapp.com/api/feedback/"+e+"/"+t).then((function(e){a({type:"GET_COL_DATA",payload:e.data})}))}},B=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).svgRef=r.a.createRef(),n.qRef=r.a.createRef(),n.data1Ref=r.a.createRef(),n.data2Ref=r.a.createRef(),n.dotReturn=n.dotReturn.bind(Object(F.a)(n)),n.triMouseDown=n.triMouseDown.bind(Object(F.a)(n)),n.triDrag=n.triDrag.bind(Object(F.a)(n)),n.triUp=n.triUp.bind(Object(F.a)(n)),n.handleDrop=n.handleDrop.bind(Object(F.a)(n)),n.onChange=n.onChange.bind(Object(F.a)(n)),n.handleSelectedFile=n.handleSelectedFile.bind(Object(F.a)(n)),n.state={x:0,y:0,isDown:!1,rectX:12.5,down:!1,svgWidth:500,svgHeight:250,svgX:6,distancing:7,mousePointerRange:0,triDown:!1,dataReceived:!1,fileNames:[],setFileNames:[],fileChosen:""},n}return Object(I.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.auth.user.username;this.props.getColData(e,"itemData")}},{key:"dotReturn",value:function(e,t){var a=e;e>7&&(e=15-e);var n=this.state.distancing1+this.state.distancing*a+10,s=140-this.state.distancing*t+10;return this.state.rectX,r.a.createElement("circle",{className:"icon",stroke:"DarkCyan",fill:"DarkCyan",fillOpacity:"0.3",strokeOpacity:"0.3",cx:n,cy:s,r:"2"})}},{key:"dotReturn2",value:function(e,t){var a=e;e>7&&(e=15-e);var n=this.state.distancing2+this.state.distancing*a+10,s=140-this.state.distancing*t+10;return this.state.rectX,r.a.createElement("circle",{className:"icon",stroke:"Crimson",fill:"Crimson",fillOpacity:"0.3",strokeOpacity:"0.3",cx:n,cy:s,r:"2"})}},{key:"triMouseDown",value:function(e,t){var a=this;if("mousedown"===e.type){e.preventDefault();var n=this.svgRef.current,r=n.createSVGPoint();r.x=e.clientX;var s=r.matrixTransform(n.getScreenCTM().inverse());1===t?this.setState((function(e){return{triDown:t,mousePointerRange:e.triCent1+a.state.distancing1-s.x}})):2===t&&this.setState((function(e){return{triDown:t,mousePointerRange:e.triCent2+a.state.distancing2-s.x}}))}}},{key:"triDrag",value:function(e){var t=this.svgRef.current,a=t.createSVGPoint();a.x=e.clientX;var n=a.matrixTransform(t.getScreenCTM().inverse());if(this.setState({x:e.screenX,y:e.screenY,svgX:n.x}),2===this.state.triDown){(i=(l=this.svgRef.current).createSVGPoint()).x=e.clientX;var r=i.matrixTransform(l.getScreenCTM().inverse());e.preventDefault();var s=r.x-this.state.triCent2+this.state.mousePointerRange;(o=Math.round((s-6)/7))<0?this.setState({distancing2:0,col21:0,col22:this.state.len2-1}):o>this.state.colLim2?this.setState({distancing2:this.state.distancing*this.state.colLim2,col21:this.state.colLim2,col22:this.state.colLim2+this.state.len2-1}):this.setState({distancing2:this.state.distancing*o,col21:o,col22:o+this.state.len2-1})}else if(1===this.state.triDown){var l,i;(i=(l=this.svgRef.current).createSVGPoint()).x=e.clientX;r=i.matrixTransform(l.getScreenCTM().inverse());e.preventDefault();var o;s=r.x-this.state.triCent1+this.state.mousePointerRange;(o=Math.round((s-6)/7))<0?this.setState({distancing1:0,col11:0,col12:this.state.len1-1}):o>this.state.colLim1?this.setState({distancing1:this.state.distancing*this.state.colLim1,col11:this.state.colLim1,col2:this.state.colLim1+this.state.len1-1}):this.setState({distancing1:this.state.distancing*o,col11:o,col12:o+this.state.len1-1})}}},{key:"triUp",value:function(e){this.state.triDown&&this.setState({triDown:!1})}},{key:"saveFile",value:function(e,t,a){this.props.saveFile(e,t,a)}},{key:"handleDrop",value:function(e){var t=this;e&&console.log(e.map((function(a){e.forEach((function(e){if(t.props.dataFlowColData.filter((function(e){return"normal-curve"==e.itemType})).map((function(e){return e.fileName})).includes(e.name))alert("File name already exists. Please upload a file with a unique name."),t.setState({dataReceived:!1});else{t.handleChange("FileName",e.name,t.props.count);var a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var n=a.result,r=JSON.parse(n);(t.handleChange("FileContent",r,t.props.count),0==t.props.files.length)?t.saveFile("normal-curve",e.name,r):t.props.files.map((function(e){return e.fileName})).includes(e.name)||t.saveFile("normal-curve",e.name,r);t.setState({dataReceived:!0,len1:r.len1,colValHeiS:r.colValHeiS,len2:r.len2,colValHeiS2:r.colValHeiS2,distancing1:7*(r.len2+1),distancing2:7*(r.len1+r.len2+4),triCent1:Math.round(.5*r.len1*7)+7,triCent2:Math.round(.5*r.len2*7)+7,col11:r.len2+1,col12:r.len1+r.len2+1,col21:r.len1+r.len2+3,col22:r.len1+2*r.len2+3,colLim1:Math.round((500-7*r.len1)/7),colLim2:Math.round((500-7*r.len2)/7),overlapVals:r.overlapVals})},a.readAsText(e)}}))}))),this.setState({fileNames:e.map((function(e){return e.name}))})}},{key:"handleSelectedFile",value:function(){var e=this;this.handleChange("FileName",this.state.fileChosen,this.props.count);var t=this.props.dataFlowColData.filter((function(t){return t.fileName==e.state.fileChosen}))[0].fileContent;this.handleChange("FileContent",t,this.props.count),this.setState({dataReceived:!0,len1:t.len1,colValHeiS:t.colValHeiS,len2:t.len2,colValHeiS2:t.colValHeiS2,distancing1:7*(t.len2+1),distancing2:7*(t.len1+t.len2+4),triCent1:Math.round(.5*t.len1*7)+7,triCent2:Math.round(.5*t.len2*7)+7,col11:t.len2+1,col12:t.len1+t.len2+1,col21:t.len1+t.len2+3,col22:t.len1+2*t.len2+3,colLim1:Math.round((500-7*t.len1)/7),colLim2:Math.round((500-7*t.len2)/7),overlapVals:t.overlapVals})}},{key:"delete",value:function(){this.props.delete(this.props.count)}},{key:"getCount",value:function(){this.props.getCount(this.props.count)}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e,t,a){this.props.handleChange(e,t,a)}},{key:"render",value:function(){var e=this;if(this.state.dataReceived)return r.a.createElement("form",{onMouseMove:function(t){return e.triDrag(t)},onMouseUp:function(t){return e.triUp(t)}},r.a.createElement("svg",{width:this.state.svgWidth,height:this.state.svgHeight,ref:this.svgRef},Object(_.a)(Array(this.state.len1).keys()).map((function(t){return Object(_.a)(Array(e.state.colValHeiS[t]).keys()).map((function(a){return e.dotReturn(t,a)}))})),Object(_.a)(Array(this.state.len2).keys()).map((function(t){return Object(_.a)(Array(e.state.colValHeiS2[t]).keys()).map((function(a){return e.dotReturn2(t,a)}))})),r.a.createElement("polygon",{points:[[this.state.triCent1+this.state.distancing1-15,175],[this.state.triCent1+this.state.distancing1+15,175],[this.state.triCent1+this.state.distancing1,160]],onMouseDown:function(t,a){return e.triMouseDown(t,1)}}),r.a.createElement("polygon",{points:[[this.state.triCent2+this.state.distancing2-15,175],[this.state.triCent2+this.state.distancing2+15,175],[this.state.triCent2+this.state.distancing2,160]],onMouseDown:function(t,a){return e.triMouseDown(t,2)}}),"Sorry, please use a different browser."),r.a.createElement("br",null),r.a.createElement("p",null,"Question: ",r.a.createElement("p",null),r.a.createElement("textarea",{cols:"30",rows:"10",ref:this.qRef,onInput:function(){return e.handleChange("Question",e.qRef.current.value,e.props.count)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"boxed"},r.a.createElement("div",{className:"color-box",style:{backgroundColor:"DarkCyan"}}),r.a.createElement("input",{type:"text",id:"Data1",name:"Data1",ref:this.data1Ref,onInput:function(){return e.handleChange("Data1",e.data1Ref.current.value,e.props.count)}}),r.a.createElement("br",null),r.a.createElement("div",{className:"color-box",style:{backgroundColor:"Crimson"}}),r.a.createElement("input",{type:"text",id:"Data2",name:"Data2",ref:this.data2Ref,onInput:function(){return e.handleChange("Data2",e.data2Ref.current.value,e.props.count)}})),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.delete.bind(this)},"Delete this Question"),r.a.createElement("br",null),r.a.createElement("br",null));var t=this.props.dataFlowColData.filter((function(e){return"normal-curve"==e.itemType})).map((function(e){return e.fileName}));t.unshift("Select File");var a=t.map((function(e){return r.a.createElement("option",{value:e},e)}));return r.a.createElement("div",{className:"boxed"},"Select previously uploaded files:",r.a.createElement("br",null),r.a.createElement("select",{name:"fileChosen",value:this.state.fileChosen,onChange:this.onChange},a),r.a.createElement("button",{onClick:this.handleSelectedFile},"OK"),r.a.createElement("br",null),r.a.createElement(P.a,{onDrop:this.handleDrop,accept:"application/JSON, .json"},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",t({className:"dropzone"}),r.a.createElement("input",a()),r.a.createElement("p",null,"Drag'n'drop files, or click to select files (must be valid JSON file)"))})))}}]),a}(n.Component),H=Object(u.b)((function(e){return{auth:e.auth,dataFlowColData:e.dataFlow.colData}}),{getColData:U})(B),G=a(13),J=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).builderFunction=function(e){var t=n.state.children;switch(e){case"slider":t.push({id:n.state.count,tab:r.a.createElement(V,{getCount:n.getCount,delete:n.delete,count:n.state.count,handleChange:n.handleChange,key:n.state.count.toString()})});break;case"normal-curve":t.push({id:n.state.count,tab:r.a.createElement(H,{getCount:n.getCount,delete:n.delete,count:n.state.count,handleChange:n.handleChange,files:n.state.files,saveFile:n.saveFile,key:n.state.count.toString()})});break;default:t=r.a.createElement("div",null,"Unknown Element")}var a=n.state.output;a[n.state.count.toString()]={Type:e};var s=n.state.count+1;n.setState({children:t,count:s,output:a,complete:!1})},n.state={children:[],count:0,output:{},deleted:[],complete:!1,exptName:"",files:[]},n.myRef=r.a.createRef(),n.submitRef=r.a.createRef(),n.nameRef=r.a.createRef(),n.builderFunction=n.builderFunction.bind(Object(F.a)(n)),n.handleChange=n.handleChange.bind(Object(F.a)(n)),n.delete=n.delete.bind(Object(F.a)(n)),n.getCount=n.getCount.bind(Object(F.a)(n)),n.outputCreate=n.outputCreate.bind(Object(F.a)(n)),n.checkOutput=n.checkOutput.bind(Object(F.a)(n)),n.saveFile=n.saveFile.bind(Object(F.a)(n)),n.onChange=n.onChange.bind(Object(F.a)(n)),n}return Object(I.a)(a,[{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e,t,a){var n=this.state.output;n[a.toString()][e]=t,this.setState({output:n})}},{key:"delete",value:function(e){var t=this.state.deleted;t.push(e),this.setState({deleted:t})}},{key:"getCount",value:function(e){return e}},{key:"saveFile",value:function(e,t,a){var n={itemType:e,fileName:t,fileContent:a};this.setState({files:this.state.files.concat(n)})}},{key:"checkOutput",value:function(e){for(var t=0,a=!0;t.toString()in e;){var n=e[t.toString()];switch(n.Type){case"slider":if("lowRange"in n&&"highRange"in n&&"Question"in n){var r=!isNaN(n.lowRange),s=!isNaN(n.highRange);a=!!(parseInt(n.highRange)>parseInt(n.lowRange)&&r&&s)&&(a&&!0)}else a=!1;break;default:a=!1;case"normal-curve":a=!0}t++}return a}},{key:"outputCreate",value:function(){var e=this,t={};if(this.state.children.filter((function(t){return-1===e.state.deleted.indexOf(t.id)})).map((function(a){t[a.id.toString()]=e.state.output[a.id.toString()]})),this.nameRef.current.value.length>0){var a={userID:(new Date).toString()};a.exptName=this.nameRef.current.value;for(var n=0;n<this.state.count;)n.toString()in t&&(a["q"+n.toString()]=t[n.toString()]),n++;a.count=n;var r=this.props.auth.user.username,s=this.props.match.params.studyName;0==!this.state.files.length&&this.state.files.map((function(t){return e.props.sendFile(r,t)})),G.put("https://test-api-615.herokuapp.com/api/feedback/"+r+"/info/studyName-"+s+"/experiments",a).then((function(e){console.log(e)})).then((function(e){alert("Your experiment has been successfully created"),window.location.reload(!1)})).catch((function(e){console.log(e)}))}else alert("You have not filled out all fields, or have entered an invalid value!")}},{key:"render",value:function(){var e=this,t=this.props.match.params.username,a=this.props.match.params.studyName,n="/"+t+"/"+a;return r.a.createElement("div",{className:"list",ref:this.myRef},"Back to ",r.a.createElement("p",null," "),r.a.createElement(i.b,{to:n},a),r.a.createElement("form",{action:"/submit",method:"POST",className:"unit"},r.a.createElement("p",null,"Enter a name for this experiment "),r.a.createElement("input",{ref:this.nameRef,value:this.state.exptName,onChange:this.onChange,type:"text",id:"userid",name:"exptName"}),r.a.createElement("br",null),r.a.createElement("br",null)),this.state.children.filter((function(t){return-1===e.state.deleted.indexOf(t.id)})).map((function(e){return e.tab})),r.a.createElement(A,{build:this.builderFunction}),r.a.createElement("div",{className:"extraPad"},r.a.createElement("button",{onClick:this.outputCreate,ref:this.submitRef,type:"submit",value:"Submit",className:"btn"},"Submit")))}}]),a}(n.Component),W=Object(u.b)((function(e){return{auth:e.auth,dataFlowDBInfo:e.dataFlow.dbInfo,dataFlowFileName:e.dataFlow.fileName}}),{sendFile:function(e,t){return function(a){f.a.post("https://test-api-615.herokuapp.com/api/feedback/"+e+"/itemData",t).then((function(e){console.log("Data sent to DB")}))}}})(J),X=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"z-depth-0"},r.a.createElement("div",{className:"nav-wrapper white"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement("br",null),e?"":r.a.createElement(i.b,{to:"/register"},"Register"),r.a.createElement("br",null),e?r.a.createElement(i.b,{to:"/dashboard"}," Dashboard "):r.a.createElement(i.b,{to:"/login"},"Login"))))}}]),a}(n.Component),q=Object(u.b)((function(e){return{auth:e.auth}}))(X),Y=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return this.props.auth.isAuthenticated?r.a.createElement("div",{className:"container"},"Scientist: ",r.a.createElement("b",null,this.props.auth.user.username)):r.a.createElement("div",{className:"container"})}}]),a}(n.Component),Q=Object(u.b)((function(e){return{auth:e.auth}}),{})(Y),z=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome to Psych Researcher App!"))}}]),a}(n.Component),K=Object(u.b)((function(e){return{auth:e.auth}}),{})(z),$=a(20),Z=a.n($),ee=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(){var e;return Object(R.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(D.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={username:"",password:"",password2:"",errors:{}},e}return Object(I.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Register below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account?",r.a.createElement(i.b,{to:"/login"},"Log in")),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},"Username:",r.a.createElement("input",{onChange:this.onChange,value:this.state.username,error:e.username,id:"username",type:"text",className:Z()("",{invalid:e.userExists})}),r.a.createElement("span",{className:"red-text"},e.userExists),r.a.createElement("br",null),r.a.createElement("br",null),"Password:",r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:Z()("",{invalid:e.password})}),r.a.createElement("span",{className:"red-text"},e.password),r.a.createElement("br",null),r.a.createElement("br",null),"Confirm Password:",r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:Z()("",{invalid:e.password2})}),r.a.createElement("span",{className:"red-text"},e.password2),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn"},"Register")))}}]),a}(n.Component),te=Object(u.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){f.a.post("https://test-api-615.herokuapp.com/api/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(o.g)(ee)),ae=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(){var e;return Object(R.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(D.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};console.log(a),e.props.loginUser(a)},e.state={username:"",password:"",errors:{}},e}return Object(I.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Log in"),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},"Username:",r.a.createElement("input",{onChange:this.onChange,value:this.state.username,error:e.username,id:"username",type:"text",className:Z()("",{invalid:e.userNotFound})}),r.a.createElement("span",{className:"red-text"},e.userNotFound),r.a.createElement("br",null),r.a.createElement("br",null),"Password:",r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:Z()("",{invalid:e.pwdIncorrect})}),r.a.createElement("span",{className:"red-text"},e.pwdIncorrect),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Log in",class:"btn"})))}}]),a}(n.Component),ne=Object(u.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){f.a.post("https://test-api-615.herokuapp.com/api/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),b(a);var n=h()(a);t(v(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(ae),re=(a(82),function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).onLogoutClick=function(e){e.preventDefault(),n.props.logoutUser()},n.state={studyName:""},n.onChange=n.onChange.bind(Object(F.a)(n)),n.onAddStudy=n.onAddStudy.bind(Object(F.a)(n)),n}return Object(I.a)(a,[{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"componentWillMount",value:function(){var e=this.props.auth.user.username;this.props.getDBInfo(e)}},{key:"getStudyNames",value:function(){var e=this;return this.props.dataFlowDBInfo.map((function(t){if(Object.keys(t).includes("studyName")){var a="/"+e.props.auth.user.username+"/"+t.studyName;return r.a.createElement("div",{className:"container"},r.a.createElement("p",null,t.studyName," ",r.a.createElement("p",null," "),r.a.createElement(i.b,{to:a},"View")))}}))}},{key:"onAddStudy",value:function(){var e=this.props.auth.user.username;this.props.addStudyName(e,this.state.studyName)}},{key:"render",value:function(){this.props.auth.user.username;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.onAddStudy},r.a.createElement("b",null,"Enter a name for your study:")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"studyName",value:this.state.studyName,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Add Study"})," ",r.a.createElement("br",null),"Please do ",r.a.createElement("b",null,"not"),' use "-" in the name'),r.a.createElement("form",null,r.a.createElement("br",null),this.getStudyNames(),r.a.createElement("br",null)),r.a.createElement("button",{onClick:this.onLogoutClick,className:"btn"},"Logout"))}}]),a}(n.Component)),se=Object(u.b)((function(e){return{auth:e.auth,dataFlowDBInfo:e.dataFlow.dbInfo}}),{logoutUser:E,addStudyName:function(e,t){return function(a){var n={studyName:t,experiments:[]};f.a.post("https://test-api-615.herokuapp.com/api/feedback/"+e+"/info",n).then((function(e){a({type:"ADD_STUDY_NAME",payload:e.data.studyName}),alert("Study ["+t+"] is created."),window.location.reload(!0)}))}},getDBInfo:function(e){return function(t){f.a.get("https://test-api-615.herokuapp.com/api/feedback/"+e+"/info").then((function(e){t({type:"GET_DB_INFO",payload:e.data})}))}}})(re),le=a(44),ie=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).state={},n.deployExpts=n.deployExpts.bind(Object(F.a)(n)),n}return Object(I.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.auth.user.username,t=this.props.match.params.studyName;this.props.getStudyInfo(e,t),this.props.getColNames(e)}},{key:"processColNames",value:function(){var e=this.props.match.params.studyName;return this.props.colNames.filter((function(e){return"info"!==e})).filter((function(t){return t.split("-")[0]==e})).map((function(e){return e.split("-")[1]}))}},{key:"getExptNames",value:function(){var e=this.props.match.params.username,t=this.props.match.params.studyName,a=this.processColNames();return this.props.experiments.map((function(n){var s=n.exptName,l="/"+e+"/"+t+"/"+s+"/configs",o="/"+e+"/"+t+"/"+s+"/participantsJSONData",c="https://statistical-perceptions.github.io/participant-app/#/participant-app/expt/"+e+"/"+t+"-"+s;return a.includes(s)?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"boxed"},r.a.createElement("b",null,n.exptName)," ",r.a.createElement("br",null),r.a.createElement(i.b,{to:l},r.a.createElement("button",{type:"button"},"Experiment Configs"))," ",r.a.createElement("p",null," "),r.a.createElement(i.b,{to:o},r.a.createElement("button",{type:"button"},"View Participants Data"))," ",r.a.createElement("p",null," ")," ",r.a.createElement("br",null),r.a.createElement("br",null),"Experiment Link: ",r.a.createElement("br",null),c," ",r.a.createElement("br",null),r.a.createElement(le.CopyToClipboard,{text:c},r.a.createElement("button",{onClick:function(){return alert("Experiment link has been copied to clipboard. Paste it into your Qualtrics survey :)")}},"Copy experiment link to clipboard")))):r.a.createElement("div",{className:"container"},n.exptName," ",r.a.createElement("p",null," "),r.a.createElement(i.b,{to:l},r.a.createElement("button",{type:"button"},"Experiment Configs")))}))}},{key:"deployExpts",value:function(){var e=this,t=this.props.auth.user.username,a=this.props.match.params.studyName,n=this.processColNames();this.props.experiments.map((function(e){return e.exptName})).filter((function(e){return!n.includes(e)})).forEach((function(n){e.props.createExptCol(t,a+"-"+n,n)}))}},{key:"deploy",value:function(){var e=this.processColNames(),t=this.props.experiments.map((function(e){return e.exptName})),a=t.filter((function(t){return!e.includes(t)}));return 0==t.length?r.a.createElement("div",{className:"container"},r.a.createElement("p",{style:{color:"grey"}},"No experiments.")):0==a.length?r.a.createElement("div",{className:"container"},r.a.createElement("p",{style:{color:"grey"}},"All experiments are deployed.")):r.a.createElement("div",{className:"container"},r.a.createElement("button",{class:"btn",onClick:this.deployExpts},"Deploy: ",r.a.createElement("p",null),a.map((function(e){return r.a.createElement("b",null,e,", ")}))))}},{key:"render",value:function(){var e=this.props.match.params.username,t=this.props.match.params.studyName,a="/"+e+"/"+t+"/exptBuilder",n=this.processColNames();this.props.experiments.map((function(e){return e.exptName})).filter((function(e){return!n.includes(e)}));return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),"Study: ",r.a.createElement("b",null,this.props.match.params.studyName),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(i.b,{to:a},"Build an Experiment"),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("h3",null,"Your Experiments"),this.getExptNames(),r.a.createElement("br",null),r.a.createElement("br",null),this.deploy(),r.a.createElement("br",null)))}}]),a}(n.Component),oe=Object(u.b)((function(e){return{auth:e.auth,experiments:e.dataFlow.studyInfo,colNames:e.dataFlow.colNames}}),{getStudyInfo:L,createExptCol:function(e,t,a){return function(n){f.a.post("https://test-api-615.herokuapp.com/api/"+e+"/createCol/"+t).then((function(e){alert("Experiment ["+a+"] is deployed."),window.location.reload(!0)}))}},getColNames:function(e){return function(t){f.a.get("https://test-api-615.herokuapp.com/api/"+e+"/collections").then((function(e){t({type:"GET_COL_NAMES",payload:e.data})}))}}})(ie),ce=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(I.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username,t=this.props.match.params.studyName;this.props.getStudyInfo(e,t)}},{key:"showExptData",value:function(){var e=this.props.match.params.exptName;if(0==!this.props.experiments.length){var t=this.props.experiments.find((function(t){return t.exptName==e}));return Object.keys(t).filter((function(e){return"userID"!=e&&"count"!=e&&"type"!=e&&"exptName"!=e})).map((function(e){var a=JSON.stringify(t[e]);return r.a.createElement("div",null,a)}))}}},{key:"render",value:function(){var e=this.props.match.params.username,t=this.props.match.params.studyName,a="/"+e+"/"+t;return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),"Back to ",r.a.createElement("p",null," "),r.a.createElement(i.b,{to:a},t),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Configuration data: "),r.a.createElement("br",null),r.a.createElement("br",null),this.showExptData())}}]),a}(n.Component),ue=Object(u.b)((function(e){return{auth:e.auth,experiments:e.dataFlow.studyInfo}}),{getStudyInfo:L})(ce),me=(a(40),function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).state={},n.returnRow=n.returnRow.bind(Object(F.a)(n)),n}return Object(I.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.match.params.username,t=this.props.match.params.studyName+"-"+this.props.match.params.exptName;this.props.getColData(e,t)}},{key:"partDataHeader",value:function(){var e={};return 0==!this.props.colData.length&&(e=this.props.colData[0]),Object.keys(e).filter((function(e){return"_id"!=e})).map((function(e){return r.a.createElement("th",null,e)}))}},{key:"returnRow",value:function(e){var t={};return 0==!this.props.colData.length&&(t=this.props.colData[0]),Object.keys(t).filter((function(e){return"_id"!=e})).map((function(t){return r.a.createElement("th",null,e[t])}))}},{key:"showPartData",value:function(){var e=this;if(0==!this.props.colData.length)return this.props.colData.map((function(t){return r.a.createElement("tr",null,e.returnRow(t))}))}},{key:"render",value:function(){var e=this.props.match.params.username,t=this.props.match.params.studyName,a="/"+e+"/"+t;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),"Back to ",r.a.createElement("p",null," "),r.a.createElement(i.b,{to:a},t),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Participants data: "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("table",{align:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.partDataHeader()),this.showPartData())))}}]),a}(n.Component)),pe=Object(u.b)((function(e){return{auth:e.auth,colData:e.dataFlow.colData}}),{getColData:U})(me),he=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).state={},n.showJSONData=n.showJSONData.bind(Object(F.a)(n)),n}return Object(I.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.match.params.username,t=this.props.match.params.studyName+"-"+this.props.match.params.exptName;this.props.getColData(e,t)}},{key:"showJSONData",value:function(){if(0==!Object.keys(this.props.colData).length){var e=JSON.stringify(this.props.colData);return r.a.createElement("div",null,e)}}},{key:"render",value:function(){var e=this.props.match.params.username,t=this.props.match.params.studyName,a="/"+e+"/"+t;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),"Back to ",r.a.createElement("p",null," "),r.a.createElement(i.b,{to:a},t),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Participants data: "),r.a.createElement("br",null),r.a.createElement("br",null),this.showJSONData())}}]),a}(n.Component),de=Object(u.b)((function(e){return{auth:e.auth,colData:e.dataFlow.colData}}),{getColData:U})(he),fe=function(e){Object(T.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).state={exptName:"",numOfItems:Number,showItems:!1,itemToSelect:["slider","normal curve"]},n.onChange=n.onChange.bind(Object(F.a)(n)),n.preBuild=n.preBuild.bind(Object(F.a)(n)),n.showItem=n.showItem.bind(Object(F.a)(n)),n.toggleShowItems=n.toggleShowItems.bind(Object(F.a)(n)),n.inputNumItems=n.inputNumItems.bind(Object(F.a)(n)),n}return Object(I.a)(a,[{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"showItem",value:function(){console.log(this.state.numOfItems);for(var e=[],t=1;t<=this.state.numOfItems;t++)e.push(r.a.createElement("div",null,"Hello"));return e}},{key:"toggleShowItems",value:function(){this.setState({showItems:!0})}},{key:"inputNumItems",value:function(){return r.a.createElement("div",null,"How many items do you want to build? ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"numOfItems",value:this.state.numOfItems,onChange:this.onChange})," ",r.a.createElement("p",null),r.a.createElement("button",{class:"btn",onClick:this.toggleShowItems},"Ok"))}},{key:"preBuild",value:function(){return r.a.createElement("div",{className:"container"},"Enter experiment name: ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"exptName",value:this.state.exptName,onChange:this.onChange})," ",r.a.createElement("br",null),r.a.createElement("br",null),!this.state.showItems&&r.a.createElement(this.inputNumItems,null))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Experiment Builder")," ",r.a.createElement("br",null),this.preBuild()," ",r.a.createElement("br",null),this.state.showItems&&r.a.createElement(this.showItem,null))}}]),a}(n.Component);if(localStorage.jwtToken){var be=localStorage.jwtToken;b(be);var ve=h()(be);S.dispatch(v(ve));var Ee=Date.now()/1e3;ve.exp<Ee&&(S.dispatch(E()),window.location.href="./login")}var ge=function(){return r.a.createElement(u.a,{store:S},r.a.createElement(i.a,{basename:"/survey-builder/"},r.a.createElement("div",{className:"App"},r.a.createElement(q,null),r.a.createElement("br",null),r.a.createElement(Q,null),r.a.createElement(o.b,{exact:!0,path:"/",component:K}),r.a.createElement(o.b,{exact:!0,path:"/register",component:te}),r.a.createElement(o.b,{exact:!0,path:"/login",component:ne}),r.a.createElement(o.d,null,r.a.createElement(m,{exact:!0,path:"/dashboard",component:se}),r.a.createElement(m,{exact:!0,path:"/:expt/participantsData",component:pe}),r.a.createElement(m,{exact:!0,path:"/:username/:studyName",component:oe}),r.a.createElement(m,{exact:!0,path:"/:username/:studyName/exptBuilder",component:W}),r.a.createElement(m,{exact:!0,path:"/:username/:studyName/newExpt",component:fe}),r.a.createElement(m,{exact:!0,path:"/:username/:studyName/:exptName/configs",component:ue}),r.a.createElement(m,{exact:!0,path:"/:username/:studyName/:exptName/participantsData",component:pe}),r.a.createElement(m,{exact:!0,path:"/:username/:studyName/:exptName/participantsJSONData",component:de})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.04f22b1e.chunk.js.map