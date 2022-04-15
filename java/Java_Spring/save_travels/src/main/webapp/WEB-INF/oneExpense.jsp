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
<style>
	 td,th {
  padding: 5px;
  text-align:center;
        
}
</style>
</head>
<body>

    <div class="container"> 
    	<h1>Expense Details</h1>
    	<a href="/">Go Back</a>
    	<div>
    	
        <h3>Purchase: <c:out value="${expense.purchase}"/></h3>
        <h3>Vendor: <c:out value="${expense.vendor}"/></h3>
        <h3>Amount: <c:out value="${expense.amount}"/></h3>
        
       	
       	</div>
        
    </div>
</body>
</html>