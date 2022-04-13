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
<title>Form</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        <Form method="post" action="/post">
        	<div>
        		<label>Pick any number from 5 - 25</label>
        		<input type="number" name="number" min="5" max="25"/>
        	</div>
        	<div>
        		<label>Enter the name of any city.</label>
        		<input type="text" name="city"/>
        	</div>
        	<div>
        		<label>Enter the name of any real person.</label>
        		<input type="text" name="person"/>
        	</div>
        	<div>
        		<label>Enter professional endeavor or hobby.</label>
        		<input type="text" name="endeavor"/>
        	</div>
        	<div>
        		<label>Enter any type of living thing.</label>
        		<input type="text" name="livingThing"/>
        	</div>
        	<div>
        		<label>Say something nice to someone.</label>
        		<input type="text" name="somethingNice"/>
        	</div>
        	<div>
        		<input type="submit" value="Submit"/>
        	</div>
        </Form>
    </div> <!-- End of Container -->
</body>
</html>