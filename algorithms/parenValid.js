function areBracketsBalanced(str){	
	let stack = [];
	for(var i = 0; i < str.length; i++)
	{
		var x = str[i];
		if (x == '(' || x == '[' || x == '{')
		{
			stack.push(x)
			continue;
		}
		if (stack.length == 0)
			return false;
			
		var check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	return (stack.length == 0);
}

var str = "([{}])";

if (areBracketsBalanced(str))
	console.log("Balanced");
else
	console.log("Not Balanced");
