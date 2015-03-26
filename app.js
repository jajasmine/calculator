$(function(){
	var currentText = '';
	var temp=0;
    var tempSign=0;  //暫存運算符號

	$('#btn1').on('click', function(){
		currentText = currentText + '1';	
		render();
	});
	$('#btn2').on('click', function(){
		currentText = currentText + '2';
		render();	
	});
	$('#btn3').on('click', function(){
		currentText = currentText + '3';
		render();	
	});
	$('#btn4').on('click', function(){
		currentText = currentText + '4';
		render();	
	});
	$('#btn5').on('click', function(){
		currentText = currentText + '5';
		render();	
	});
	$('#btn6').on('click', function(){
		currentText = currentText + '6';
		render();	
	});
	$('#btn7').on('click', function(){
		currentText = currentText + '7';
		render();	
	});
	$('#btn8').on('click', function(){
		currentText = currentText + '8';
		render();	
	});
	$('#btn9').on('click', function(){
		currentText = currentText + '9';
		render();	
	});
	$('#btn0').on('click', function(){
		currentText = currentText + '0';
		render();	
	});
	$('#btnAdd').on('click', function(){
		temp=currentText;
		tempSign='+';
		currentText='';
		render();
	});
	$('#btnMinus').on('click', function(){
		temp=currentText;
		tempSign='-';
		currentText='';
		render();
	});
	$('#btnMultiply').on('click', function(){
		temp=currentText;
		tempSign='*';
		currentText='';
		render();
	});
	$('#btnDivide').on('click', function(){
		temp=currentText;
		tempSign='/';
		currentText='';
		render();
	});
	$('#btnEqual').on('click', function(){
		equal();
	});
	$('#btnClear').on('click', function(){
		currentText = '';
		render();
	})

	function render(){
		$('#message').text(currentText);
	}

    function equal(){   

        switch (tempSign){
            case '+':
                currentText=parseFloat(temp)+parseFloat(currentText);
                render();
                break;
            case '-':
                currentText=parseFloat(temp)-parseFloat(currentText);
                render();
                break;
            case '*':
                currentText=parseFloat(temp)*parseFloat(currentText);
                render();
                break;
            case '/':
                currentText=parseFloat(temp)/parseFloat(currentText);
                render();
                break;
            default:
                break;
        }
    }
});