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
    
        <h1>Update Travels</h1>
        <a href="/">Go Back</a>
       	<div>
       	
       		<div>
       			<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
				<form:form action="/updatingExpense/${id}" method="post" modelAttribute="expense">
				<input type="hidden" name="_method" value="put"/>
				    <p>
				        <form:label path="purchase">Expense</form:label>
				        <form:errors path="purchase" class="alert-danger"/>
				        <form:input type="text" path="purchase"/>
				    </p>
				    <p>
				        <form:label path="vendor">Vendor</form:label>
				        <form:errors path="vendor" class="alert-danger"/>
				        <form:input path="vendor"/>
				    </p>
				    <p>
				        <form:label path="amount">Amount</form:label>
				        <form:errors path="amount" class="alert-danger"/>
				        <form:input type="number" step="0.01" path="amount"/>
				    </p>
				    
				    <input type="submit" value="Submit"/>
				</form:form>    
       			
       		</div>
       	</div>
        
    </div>
</body>
</html>