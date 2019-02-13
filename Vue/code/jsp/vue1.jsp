<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>Vue Index</title>
		<link rel = "stylesheet" href = "<%=basePath%>css/bootstrap.min.css" media="screen"/>
		<script type = "text/javascript" src = "<%=basePath%>js/jquery-1.11.3.min.js" charset="UTF-8"></script>
		<script type = "text/javascript" src = "<%=basePath%>js/popper.min.js" charset="UTF-8"></script>
		<script type = "text/javascript" src = "<%=basePath%>js/bootstrap.min.js" charset="UTF-8"></script>
		<script type = "text/javascript" src = "<%=basePath%>js/vue.js" charset="UTF-8"></script>
	</head>
	<body>
		<div class = "container"><br>
			<div class = "row">
				<div class = "col-6">
					<div class = "card">
						<div class = "card-body" id = "test">							
							<button v-on:click = "doTest" type = "button" class = "btn btn-primary">Test</button>
						</div>
					</div>
				</div>	
				<div class = "col-6">
					<div class = "card">
						<div class = "card-body" id = "app1">	
							<span>{{foo}}</span>&nbsp;&nbsp;&nbsp;&nbsp;						
							<button v-on:click = "foo = 'abc'" type = "button" class = "btn btn-primary">Change</button>
						</div>
					</div>
				</div>				
			</div>
		</div>
		<script type = "text/javascript">
			var data = {a : 1};
			var obj = {foo:'bar'}
			var vm = new Vue({
				data:data
			});
			var test = new Vue({
				el:"#test",
				data:{
					
				},
				methods:{
					doTest:function(){
						alert("data's a value is : " + data.a + " vm's a value is : " + vm.a);
						alert("Now we change the vm's a value to 2");
						vm.a = 2;
						alert("Now the vm's a value is : " + vm.a + " and the data's a value is : " + data.a);
					}
				}
			});
			Object.freeze(obj);	//冻结数据对象,响应式失效
			new Vue({
				el:"#app1",
				data:obj
			});
		</script>
	</body>
</html>