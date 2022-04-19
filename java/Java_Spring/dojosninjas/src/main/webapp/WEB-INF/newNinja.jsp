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
        
        
        <a href="/" class="btn btn-info">Main Page</a>
		
		<h1>Create a Ninja for <c:out value="${dojo.name}"/> dojo!</h1>
        
        
        <form:form action="/processNinja" method="post" modelAttribute="ninja">
        <input type="hidden" value="${dojo.id}" name="dojo"/>
    <p>
        <form:label path="firstName">First Name</form:label>
        <form:errors path="firstName" class="alert-danger"/>
        <form:input path="firstName"/>
    </p>
    <p>
        <form:label path="lastName">Last Name</form:label>
        <form:errors path="lastName" class="alert-danger"/>
        <form:input path="lastName"/>
    </p>
    
    <input type="submit" value="Submit"/>
</form:form>    
        
        
        
    </div> <!-- End of Container -->
</body>
</html>