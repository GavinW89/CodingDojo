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
    
        <h1>Save Travels</h1>
        
       	<div>
       		<table class="table table-dark talbe-striped table-hover w-100">
       			<tr>
					  <th class="center-text">Purchase</th>     			
					  <th class="center-text">Vendor</th>     			
					  <th class="center-text">Amount</th>     			
					  <th class="center-text">Actions</th>     			
       			</tr>
       			
       				<c:forEach var="i" items="${allExpenses}">
       					<tr>
       					<td class="center-text"><c:out value="${i.purchase }"/></td>
       					<td class="center-text"><c:out value="${i.vendor }"/></td>
       					<td class="center-text">$<c:out value="${i.amount }"/></td>
       					<td class="center-text"><a href="#" class="btn btn-primary">Update</a>
       					<a href="#" class="btn btn-danger">Delete</a></td>
       					</tr>
       				</c:forEach>
       			
       		</table>
       		<div>
       			<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>    
				<h1>Add New Expense</h1>
				<form:form action="/processExpense" method="post" modelAttribute="expense">
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