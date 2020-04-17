(this["webpackJsonptodo-app-frontend"]=this["webpackJsonptodo-app-frontend"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(17),o=a.n(s),r=(a(23),a(1)),i=a(2),l=a(4),u=a(3),d=a(5),m=(a(24),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row d-none d-md-block"},c.a.createElement("div",{className:"col-12 header"},c.a.createElement("h2",null,"\"If it weren't for the last minute, nothing would get done.\u201d \u2015 Rita Mae Brown "),"        "))}}]),t}(c.a.Component)),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={taskDescription:"Enter your task..."},a.addTask=function(){a.props.addTaskFunc(a.state.taskDescription)},a.taskDescriptionChanged=function(e){a.setState({taskDescription:e.target.value})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container addtask"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-5 offset-4"},c.a.createElement("h1",null,"Add your task to the list here: "))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-5 offset-4"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Task to add....",onChange:this.taskDescriptionChanged}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn addButton btn-outline-primary",type:"button",onClick:this.addTask},"Add"))))))}}]),t}(c.a.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row taskCountArea"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h1",null,"Tasks Left: ",this.props.taskCount)))}}]),t}(c.a.Component),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).deleteClicked=function(){a.props.deleteTaskFunc(a.props.item.id)},a.doneClicked=function(){a.props.completedTaskFunc(a.props.item.id)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return e=this.props.item.status?c.a.createElement("div",{className:"col-12 col-md-8 taskToDo"},this.props.item.taskDescription):c.a.createElement("div",{className:"col-12 col-md-8"},this.props.item.taskDescription),c.a.createElement("div",{className:"row taskRow"},e,c.a.createElement("div",{className:"col-6 col-md-2"},c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.doneClicked},"Finished!")),c.a.createElement("div",{className:"col-6 col-md-2"},c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.deleteClicked},"Delete")))}}]),t}(c.a.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-6 offset-3"},this.props.taskCollection.map((function(t){return c.a.createElement(k,{key:t.id,item:t,deleteTaskFunc:e.props.deleteTaskFunc,completedTaskFunc:e.props.completedTaskFunc})})))}}]),t}(c.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 offset-3"},c.a.createElement("h3",{className:"completedTitle"},"Tasks Completed: "))))}}]),t}(c.a.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("h4",null,"Copyright: Laura Miller 2020"))}}]),t}(c.a.Component),E=a(7),j=a.n(E),O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={tasks:[]},a.componentDidMount=function(){j.a.get("https://7whki9pqp2.execute-api.eu-west-2.amazonaws.com/dev/tasks").then((function(e){a.setState({tasks:e.data.tasks})})).catch((function(e){console.error(e)}))},a.deleteTask=function(e){j.a.delete("https://7whki9pqp2.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e)).then((function(t){var n=a.state.tasks.filter((function(t){return t.taskId!==e}));a.setState({tasks:n})})).catch((function(e){console.error(e)}))},a.completeTask=function(e){var t=a.state.tasks;j.a.put("https://l9usbtfbs5.execute-api.eu-west-2.amazonaws.com/dev/tasks/".concat(e)).then((function(n){for(var c=0;c<t.length;c++){var s=t[c];if(s.taskId===e){s.completed=!s.status;break}}a.setState({tasks:t})})).catch((function(e){console.error(e)}))},a.addTask=function(e){var t={taskDescription:e,userId:"1"};j.a.post("https://7whki9pqp2.execute-api.eu-west-2.amazonaws.com/dev/tasks",t).then((function(e){t.id=e.data.task.taskId;var n=a.state.tasks;n.push(t),a.setState({tasks:n})})).catch((function(e){console.error(e)}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid flex-fill"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(m,null),c.a.createElement(p,{addTaskFunc:this.addTask}),c.a.createElement(h,{taskCount:this.state.tasks.length}),c.a.createElement(f,{taskCollection:this.state.tasks,deleteTaskFunc:this.deleteTask,completedTaskFunc:this.completeTask}),c.a.createElement(b,null),c.a.createElement(v,null))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0b265cb5.chunk.js.map