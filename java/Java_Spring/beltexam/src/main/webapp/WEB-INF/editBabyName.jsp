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
    
    <h1>Edit a baby name</h1>
        
        <br>
        
        <a href="/dashboard" class="btn btn-primary">Dashboard</a>
        
        
        
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
<h1>New Candy Form:Form</h1>
<form:form action="/updatingBabyName/${babyname.id }" method="post" modelAttribute="babyname">
	<input type="hidden" value="${babyname.user.id}" name="user"/>
	<input type="hidden" value="put" name="_method"/>
    <p>
        <form:label path="name">Name</form:label>
        <form:errors path="name" class="alert-danger"/>
        <form:input path="name"/>
    </p>
    <p>
        <form:label path="origin">Origin</form:label>
        <form:errors path="origin" class="alert-danger"/>
        <form:input path="origin"/>
    </p>
    <p>
        <form:label path="meaning">Meaning</form:label>
        <form:errors path="meaning" class="alert-danger"/>
        <form:textarea path="meaning"/>
    </p>
    <p>
        <form:label path="gender">Gender</form:label>
        <form:errors path="gender" class="alert-danger"/>     
        <form:select path="gender">
       	<form:option value="Neutral">Neutral</form:option>
       	<form:option value="Male">Male</form:option>
       	<form:option value="Female">Female</form:option>
       	</form:select>
    </p> 
    
    
    <input type="submit" value="Submit"/>
</form:form>    
<a href="/deleteBabyName/${babyname.id}" class="btn btn-danger">Delete</a>
<a href="/dashboard" class="btn btn-info">Cancel</a>
        
        
    </div> <!-- End of Container -->
</body>
</html>