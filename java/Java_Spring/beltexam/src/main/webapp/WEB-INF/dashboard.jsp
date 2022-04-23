<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
   <!-- c:out ; c:forEach ; c:if -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
   <!-- Formatting (like dates) -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
   <!-- form:form -->
 <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
   <!-- for rendering errors on PUT routes -->
 <%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title Here</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        <h1>Hello, ${user.userName}. Here are some name suggestions.</h1>
        <h1>Baby Names</h1>
        
        <div class="text-center">
        <a href="/newBabyName" class="btn btn-primary">New Baby Name</a>
        <a href="/logout" class="btn btn-danger">Logout</a>
        </div>
        
        
        
        <br>
        <div class="table table-dark talbe-striped table-hover w-100">
        
	        <Table class="w-100">
	        
	        	<tr>
					 <th class="align-middle">Name</th>
					 <th class="align-middle">Gender</th>
					 <th class="align-middle">Origin</th>
	        	</tr>  
	        	
	        	<c:forEach var="i" items="${allBabyNames }">
		        	<tr>
		        		<td><a href="/oneBabyName/${i.id }"><c:out value="${i.name }"></c:out></a></td>
		        		<td><c:out value="${i.gender }"></c:out></td>
		        		<td><c:out value="${i.origin }"></c:out></td>
		        		
		        		<!-- 
		        		 <td>
		        		<a class="btn btn-success" href="/updateCandy/${i.id }">Update</a>
		        		<a class="btn btn-danger"href="/delete/${i.id }">Delete</a>
		        		</td>
		        		 -->
		        	</tr>  
		        	
	        	</c:forEach>
	        	   
	        </Table>
        </div>
        
    </div> <!-- End of Container -->
</body>
</html>