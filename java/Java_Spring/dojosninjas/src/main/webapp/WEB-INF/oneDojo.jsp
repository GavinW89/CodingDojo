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
        
        <h1></h1>
        
        
        <a href="/" class="btn btn-info">Main Page</a>
        <a href="/newDojo" class="btn btn-info">New Dojo</a>
        <a href="/newNinja/${dojo.id}" class="btn btn-info">New Ninja</a>
        
       	<br>
       	
       	<h1><c:out value="${dojo.name}"/> Dojo</h1>
       	
       	<h3>Here is <c:out value="${dojo.name }"/> Dojo's attending Ninjas</h3>
       	
       	<table class="table table-light table-striped table-hover w-100">
       		<tr>
       			<th class="align-middle text-center">First name</th>
       			<th class="align-middle text-center">Last name</th>
       			<th class="align-middle text-center">Actions</th>
       		</tr>
       		<c:forEach var="i" items="${dojo.ninjas}">
        		<tr>
        			<td class="text-center align-middle"><a href="/oneNinja/${i.id }"><c:out value="${i.firstName }"/></a></td>
        			<td class="text-center align-middle"><c:out value="${i.lastName }"/></td>
        			<td class="text-center align-middle">
		        		<a class="btn btn-success align-middle text-center" href="/updateNinja/${i.id }">Update</a>
		        		<a class="btn btn-danger align-middle  text-center"href="/deleteNinja/${i.id }">Delete</a>
		        	</td>
		        </tr>
		    </c:forEach>
       	</table>
        
        
        
    </div> <!-- End of Container -->
</body>
</html>