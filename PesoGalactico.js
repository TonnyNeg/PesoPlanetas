function CalcularPeso() {
				//declarar variables
				var M, G, P;
				//recuperar los valores
				M=parseInt(document.getElementById("Masa").value);
				G=parseInt(document.getElementById("Gra").value);
				//realizar la Operacion 
				P=M*G/9.8
				//Mostrar el resultado
				document.getElementById("Res").value=P;
			}
			function Borrar(){
				document.getElementById("Masa").value="";
				document.getElementById("Plafav").value="";
				document.getElementById("Gra").value="";
                document.getElementById("Res").value="";
			}