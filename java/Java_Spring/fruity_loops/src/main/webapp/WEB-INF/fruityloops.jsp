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
<title>FRUITY LOOPS</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        <h1>FRUITY LOOPS</h1>
        <Table class="table table-dark table-striped"
        >
        	<tr>
	        	<th>Name</th>
	        	<th>Price</th>
        	</tr>
       		<c:forEach var="i" items="${AllFruits}">
	        	<tr >
		        	<td><c:out value="${i.name}"></c:out></td>
		        	<td><c:out value="${i.price}"></c:out></td>
    	    	</tr>
	        </c:forEach>
        </Table>
    </div> <!-- End of Container -->
</body>
</html>