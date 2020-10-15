(this["webpackJsonptest-api-app"]=this["webpackJsonptest-api-app"]||[]).push([[0],{20:function(e,a,t){e.exports=t(53)},25:function(e,a,t){},28:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(17),r=t.n(s),c=(t(25),t(26),t(27),t(28),t(7)),o=t(2),i=t(3),m=t(5),d=t(4),u=t(6),p=t(18),b=t.n(p),h=(t(46),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={question:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.question,a=e.title,t=e.body;return l.a.createElement("div",{className:"modal fade",id:"ansModal",tabIndex:"-1",role:"dialog","aria-labelledby":"ansModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-xl modal-dialog-scrollable",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header align-items-center py-2 bg-light"},this.props.question.owner&&l.a.createElement("img",{className:"img-thumbnail mr-2",style:{width:"50px"},src:this.props.question.owner.profile_image,alt:this.props.question.owner.display_name,title:this.props.question.owner.display_name}),l.a.createElement("h6",{className:"modal-title",id:"ansModalLabel",dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"answer-body modal-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2  my-auto"},l.a.createElement("button",{type:"button",class:"btn btn-primary align-middle"},"Score: ",l.a.createElement("span",{class:"badge badge-light"},this.props.question.score),l.a.createElement("span",{class:"sr-only"},"Score: "))),l.a.createElement("div",{className:"col-10"},l.a.createElement("p",{className:"border-bottom font-weight-bold pb-2 mb-0"},"Question Detail"),l.a.createElement("div",{className:"bg-light p-3 mb-2",dangerouslySetInnerHTML:{__html:t}})))),l.a.createElement("br",null),this.props.question.answers?this.props.question.answers.map((function(e,a){return l.a.createElement("div",{key:e.answer_id,className:"mb-4"},l.a.createElement("h5",{className:"text-success font-weight-bold pb-2 mb-0 border-bottom"},e.is_accepted&&l.a.createElement("i",{className:"fas fa-check-double"})," ","Answer ",a+1),l.a.createElement("div",{className:"bg-light p-3",dangerouslySetInnerHTML:{__html:e.body}}))})):l.a.createElement("h5",{className:"text-danger"},"There is no Answer")),l.a.createElement("div",{className:"modal-footer py-1 bg-light"},l.a.createElement("a",{className:"btn btn-primary",href:this.props.question.link,target:"_blank"},"View Question in StackOverflow"),l.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal"},"Close")))))}}]),a}(n.Component)),g=t(19),E=t.n(g),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this))).fetchData=function(){b.a.get("https://api.stackexchange.com/2.2/questions?page=".concat(t.state.pageNumber,"&pagesize=").concat(t.state.pageItems,"&order=desc&sort=hot&site=stackoverflow&filter=!b1MMEU)j2D*uc1")).then((function(e){t.setState({items:[].concat(Object(c.a)(t.state.items),Object(c.a)(e.data.items)),pageNumber:t.state.pageNumber+1,isLoading:!1})})).catch((function(e){console.log(e),t.setState({error:e,isLoading:!1})}))},t.getQuestion=function(e){t.setState({question_id:e});var a=t.state.items.filter((function(a){return a.question_id===e}));t.setState({question:a[0]})},t.state={items:[],isLoading:!0,error:null,question_id:null,question:[],pageNumber:1,pageItems:15},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,a=this.state,t=a.items,n=a.isLoading,s=a.error;return l.a.createElement(l.a.Fragment,null,s&&"The error is: "+s,n?l.a.createElement("h4",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},"Loading..."):l.a.createElement("div",{className:"container py-5"},l.a.createElement(E.a,{pageStart:this.state.items.length,loadMore:this.fetchData,hasMore:!0,loader:l.a.createElement("div",{className:"loader",key:0},"Loading ...")},t.map((function(a,t){return l.a.createElement("div",{key:t,className:"question card mb-3","data-toggle":"modal","data-target":"#ansModal",onClick:function(){return e.getQuestion(a.question_id)}},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("img",{onerror:"this.style.display='none'",alt:a.owner.display_name,style:{maxWidth:"58px"},src:a.owner.profile_image,className:"img-fluid"})),l.a.createElement("div",{className:"col"},l.a.createElement("h5",{className:"mb-1",dangerouslySetInnerHTML:{__html:a.title}}),l.a.createElement("div",null,a.owner.display_name),l.a.createElement("div",null,l.a.createElement("small",null,a.tags.map((function(e){return l.a.createElement("span",{key:e,className:"badge badge-pill badge-secondary",style:{margin:"2px 2px"}},e)}))))),l.a.createElement("div",{className:"col-3 offset-3"},l.a.createElement("span",null," |     Answer Count : ",a.answer_count),l.a.createElement("br",null),l.a.createElement("span",null,a.is_answered?l.a.createElement("span",null," |     Answered: ",l.a.createElement("i",{className:"fas fa-check"})):l.a.createElement("span",{className:"text-danger"}," |     No Accepted Answer Yet"))))))})))),l.a.createElement(h,{question:this.state.question}))}}]),a}(n.Component),f=function(e){function a(e){return Object(o.a)(this,a),Object(m.a)(this,Object(d.a)(a).call(this))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-warning"},l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"navbar-header offset-1"},l.a.createElement("a",{class:"navbar-brand",href:"#"},l.a.createElement("h2",null,"GroupLearn"))),l.a.createElement("ul",{class:"nav navbar-nav navbar-right mr-5"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",class:"nav-link btn btn-sm btn-primary text-white mr-2","data-toggle":"modal","data-target":"#myModal"},l.a.createElement("span",{class:"glyphicon glyphicon-user"})," Sign Up")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",class:"nav-link btn btn-sm btn-primary text-white","data-toggle":"modal","data-target":"#myModal"},l.a.createElement("span",{class:"glyphicon glyphicon-log-in"})," Login"))))),l.a.createElement("div",{class:"jumbotron jumbotron-fluid text-center"},l.a.createElement("div",{class:"container"},l.a.createElement("h3",{class:"display-5"},"Stack Overflow"),l.a.createElement("p",{class:"lead"},"Hot Questions"))))}}]),a}(n.Component);var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.8f0f80cb.chunk.js.map