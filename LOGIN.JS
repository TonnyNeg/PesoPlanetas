function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "Tonny17" && Contraseña == "12345")
			{
				alert("Usuario y Contraseña validos");
				window.open("PesoGalactico.html");
			}
			else
			{
				alert("Verifica tus datos por favor!");
			}
		}