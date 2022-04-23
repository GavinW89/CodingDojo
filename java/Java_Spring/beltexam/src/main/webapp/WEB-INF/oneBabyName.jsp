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
    
        <br>
        
        <a href="/dashboard" class="btn btn-primary">Dashboard</a>
        <a href="/newBabyName" class="btn btn-primary">New Baby Name</a>
        
        <br>
    <h1>${babyName.name}</h1>
    <h3>(Added By ${babyName.user.userName})</h3>
        
        <p>Gender: <c:out value="${babyName.gender}"/></p>
        <br>
        <p>Origin: <c:out value="${babyName.origin}"/></p>
        <br>
        <p>Meaning: <c:out value="${babyName.meaning}"/></p>
        <br>
        
		<c:choose>
			<c:when test="${(user.id == babyName.user.id)}">
        		<a href="/updateBabyName/${babyName.id}" class="btn btn-success">Edit</a>
      		</c:when>
      	<c:otherwise>
      		<p>You cannot edit this name </p>
      	</c:otherwise>
      	</c:choose>
        
    </div> <!-- End of Container -->
</body>
</html>