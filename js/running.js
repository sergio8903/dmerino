var f=0;
var r=0;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function wrapped_total() {
	menu_Go();
	contact_We();
	valide_Date();
	menu_Option();
	validate_Soport();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function menu_Go() {
	var logo = document.getElementById('logo');
	var menu = document.getElementById('menu');
	var id_menu = document.getElementById('id_menu');
	var salir = document.getElementById('salir');
	menu.addEventListener('click', () => {
		id_menu.style.animation = "run 0.5s";
		id_menu.style.display = "flex";
		id_menu.style.left = 0;
		document.body.style.overflow = "hidden";
	});
	salir.addEventListener('click', () => {
	 	id_menu.style.animation = "back 0.3s";
	 	id_menu.style.left = "-100%";
		id_menu.style.display = "hidden";
	 	document.body.style.overflowY = "scroll";
	});
	logo.addEventListener('click', () => {
		if(f === 0 || f === 1) {
		window.location.href="/";
		}
	});
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function contact_We() {
	var defaultForm_name = document.getElementById("defaultForm_name");
	var defaultForm_movil = document.getElementById("defaultForm_movil");
	var defaultForm_company = document.getElementById("defaultForm_company");
	var defaultForm_email = document.getElementById("defaultForm_email");
	var sales = document.getElementById("sales");
	var whatsapp = document.getElementById("whatsapp");
	var contac_a = document.getElementById("contac_a");
	var exit = document.getElementById('exit');
	var fondo = document.getElementById('fondo');
	sales.addEventListener('click', () => {
		contac_a.style.animation = "retro 0.5s";
	 	contac_a.style.display = "flex";
	 	contac_a.style.left = 0;
	 	document.body.style.overflow = "hidden";
	});
	whatsapp.addEventListener('click', () => {
		window.location.href = "https://api.whatsapp.com/send?phone=573102253621";
	});
	exit.addEventListener('click', () => {
	 	contac_a.style.animation = "retorn 0.3s";
	 	contac_a.style.left = "100%";
		contac_a.style.display = "hidden";
	 	document.body.style.overflowY = "scroll";
	 	defaultForm_name.value = "";		
		defaultForm_movil.value = "";				
		defaultForm_company.value = "";				
		defaultForm_email.value = "";
	});
	if(screen.width < 799) {
		defaultForm_name.addEventListener('focus', function() {
			fondo.style.display = "none";
		});
		defaultForm_movil.addEventListener('focus', function() {
			fondo.style.display = "none";
		});
		defaultForm_company.addEventListener('focus', function() {
			fondo.style.display = "none";
		});
		defaultForm_email.addEventListener('focus', function() {
			fondo.style.display = "none";
		});
		defaultForm_name.addEventListener('blur', function() {
			fondo.style.display = "block";
		});
		defaultForm_movil.addEventListener('blur', function() {
			fondo.style.display = "block";
		});
		defaultForm_company.addEventListener('blur', function() {
			fondo.style.display = "block";
		});
		defaultForm_email.addEventListener('blur', function() {
			fondo.style.display = "block";
		});
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function valide_Date() {
	var contac_a = document.getElementById('contac_a');
	var fondo = document.getElementById('fondo');
	var loaders = document.createElement('img');
	loaders.setAttribute('class','loaders');
	loaders.setAttribute('id','loaders');
	if(f === 0) {
		loaders.setAttribute('src','img/loader.svg');
	}
	else {
		if(f === 1) {
			loaders.setAttribute('src','../img/loader.svg');
		}
	}
	contac_a.appendChild(loaders);
	var exit = document.getElementById("exit");
	var btn_primary = document.getElementById("btn_primary");
	var defaultForm_name = document.getElementById("defaultForm_name");
	var defaultForm_movil = document.getElementById("defaultForm_movil");
	var defaultForm_company = document.getElementById("defaultForm_company");
	var defaultForm_email = document.getElementById("defaultForm_email");
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	btn_primary.addEventListener('click', () => {
		if(r === 1) {
			return false;
		}
		else {
			r=1;
			fondo.style.display = "block";
			if(defaultForm_name.value === "" || defaultForm_name.value.length < 8) {
				defaultForm_name.style.border = "2px solid red";
				setTimeout(() => {
					defaultForm_name.style.border = "1px solid #CCC";
					r=0;
				},2500);
			}
			else {
				var name_c=1;
			}
			if(defaultForm_movil.value === "" || defaultForm_movil.value.length < 10) {
				defaultForm_movil.style.border = "2px solid red";
				setTimeout(() => {
					defaultForm_movil.style.border = "1px solid #CCC";
					r=0;
				},2500);
			}
			else {
				var movil_c=1;
			}
			if(defaultForm_company.value === "" || defaultForm_company.value.length < 6) {
				defaultForm_company.style.border = "2px solid red";
				setTimeout(() => {
					defaultForm_company.style.border = "1px solid #CCC";
					r=0;
				},2500);
			}
			else {
				var company_c=1;
			}
			if(defaultForm_email.value !== "" && expr.test(defaultForm_email.value)) {
			    defaultForm_email.value.toLowerCase();
				var email_c=1;
			}
			else {
				// defaultForm_email.value = "ingrese email válido";
				defaultForm_email.style.border = "2px solid red";
				setTimeout(() => {
					defaultForm_email.style.border = "1px solid #CCC";
					r=0;
				},2500);
			}
		}
		if(name_c === 1 && movil_c === 1 && company_c === 1 && email_c === 1) {
			loaders.style.display = "block";
			var result_res = document.getElementById("result_res");
			const name = defaultForm_name.value;
			const movil = defaultForm_movil.value;
			const company = defaultForm_company.value;
			const emails = defaultForm_email.value;
			if(f === 0) {
				var system = "Index | ventas";
			}
			else {
				if(f === 1) {
					var system = sessionStorage.getItem('tester');
				}
			}	
			const fetchData = {
				method: 'POST',
				body: JSON.stringify({
					fun_00: 'funcion_01',
					fun_01: name, 
					fun_02: movil, 
					fun_03: company, 
					fun_04: emails,
					fun_05: system
				}),
				headers: {"Content-Type": "application/json"}
			};
			if(f === 0) {
				var rown = 'func/data.php';
			}
			else {
				if(f === 1) {
					var rown = '../func/data.php';
				}
			}
			fetch(rown, fetchData)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				// r = 0;
				if(result === '010203') {
					loaders.style.display = "none";	
					result_res.innerHTML = "Ingrese datos válidos en el formulario";	
					setTimeout( () => {
						defaultForm_name.value = "";		
						defaultForm_movil.value = "";				
						defaultForm_company.value = "";				
						defaultForm_email.value = "";
						result_res.innerHTML = "";	
						r=0;
					},2000);
				}
				else {
					if(result === '010202') {
						loaders.style.display = "none";	
						result_res.innerHTML = "Lo sentimos error en la conexión, intentelo de nuevo";	
						setTimeout( () => {
							result_res.innerHTML = "";	
							r=0;
						},2500);
					}
					else {
						if(result === '010201') {
							loaders.style.display = "none";	
							result_res.innerHTML = "Gracias su solicitud ha sido procesada";		
							setTimeout( () => {
								defaultForm_name.value = "";		
								defaultForm_movil.value = "";				
								defaultForm_company.value = "";				
								defaultForm_email.value = "";
								result_res.innerHTML = "";	
								exit.click();
								r=0;
							},2500);

						}
					}
				}
			})
			.catch((error) => {
				r = 0;
				console.log(error);
			});
		}
	});
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function menu_Option() {
	var down = document.getElementById('down');
	var cancel = document.getElementById('cancel');
	var sales = document.getElementById("sales");
	var fluid = document.getElementsByClassName("fluid");
	var defaultForm_names = document.getElementById("defaultForm_names");
	var defaultForm_nit = document.getElementById("defaultForm_nit");
	var defaultForm_moviles = document.getElementById("defaultForm_moviles");
	// var shop = document.getElementById('shop');
	fluid[0].addEventListener('click', () => {
		if(f === 0 || f === 1) {
			window.location.href = "/";
		}
	});
	fluid[1].addEventListener('click', () => {
		sales.click();
		setTimeout(() => {
			salir.click();
		},500);
	});
	fluid[2].addEventListener('click', () => {
		setTimeout(() => {
			salir.click();
		},500);
		contac_b.style.animation = "retro 0.5s";
	 	contac_b.style.display = "flex";
	 	contac_b.style.left = 0;
	 	document.body.style.overflow = "hidden";
	 	down.addEventListener('click', () => {
		 	contac_b.style.animation = "retorn 0.3s";
		 	contac_b.style.left = "100%";
			contac_b.style.display = "hidden";
		 	document.body.style.overflowY = "scroll";
		 	defaultForm_names.value = "";		
			defaultForm_nit.value = "";					
			defaultForm_moviles.value = "";
		});
	});
	fluid[3].addEventListener('click', () => {
		if(f === 0) {
	 		window.location.href = "planes/";
		}
		else {
			if(f === 1) {
	 			window.location.href = "../planes/";
			}
		}
	});
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validate_Soport() {
	var contac_b = document.getElementById('contac_b');
	var loaders = document.createElement('img');
	loaders.setAttribute('class','loaders');
	loaders.setAttribute('id','loaders');
	if(f === 0) {
		loaders.setAttribute('src','img/loader.svg');
	}
	else {
		if(f === 1) {
			loaders.setAttribute('src','../img/loader.svg');
		}
	}
	// loaders.setAttribute('src','img/loader.svg');
	contac_b.appendChild(loaders);
	var btn_go = document.getElementById("btn_go");
	var defaultForm_names = document.getElementById("defaultForm_names");
	var defaultForm_nit = document.getElementById("defaultForm_nit");
	var defaultForm_moviles = document.getElementById("defaultForm_moviles");
	var down = document.getElementById("down");
	var fondos = document.getElementById('fondos');
	if(screen.width < 799) {
		defaultForm_names.addEventListener('focus', function() {
			fondos.style.display = "none";
		});
		defaultForm_nit.addEventListener('focus', function() {
			fondos.style.display = "none";
		});
		defaultForm_moviles.addEventListener('focus', function() {
			fondos.style.display = "none";
		});
		defaultForm_names.addEventListener('blur', function() {
			fondos.style.display = "block";
		});
		defaultForm_nit.addEventListener('blur', function() {
			fondos.style.display = "block";
		});
		defaultForm_moviles.addEventListener('blur', function() {
			fondos.style.display = "block";
		});
	}
	btn_go.addEventListener('click', () => {
		if(r === 1) {
			return false;
		}
		else{
			r=1;
			if(defaultForm_names.value === "" || defaultForm_names.value.length < 8) {
				defaultForm_names.style.border = "2px solid red";
				setTimeout(() => {
					defaultForm_names.style.border = "1px solid #CCC";
					r=0;
				},2500);
			}
			else {
				var names_d=1;
			}
			if(defaultForm_nit.value === "" || defaultForm_nit.value.length > 11) {
				defaultForm_nit.style.border = "2px solid red";
				setTimeout(() => {
					defaultForm_nit.style.border = "1px solid #CCC";
					r=0;
				},2500);
			}
			else {
				var nit_d=1;
			}
			if(defaultForm_moviles.value === "" || defaultForm_moviles.value.length < 10) {
				defaultForm_moviles.style.border = "2px solid red";
				setTimeout(() => {
					defaultForm_moviles.style.border = "1px solid #CCC";
					r=0;
				},2500);
			}
			else {
				var moviles_d=1;
			}
		}
		if(names_d === 1 && nit_d === 1 && moviles_d === 1) {
			loaders.style.display="block";
			var result_resto = document.getElementById("result_resto");
			const names = defaultForm_names.value;
			const nit = defaultForm_nit.value;
			const moviles = defaultForm_moviles.value;
			const fetchData = {
				method: 'POST',
				body: JSON.stringify({
					fun_00: 'funcion_02',
					fun_01: names, 
					fun_02: nit, 
					fun_03: moviles 
				}),
				headers: {"Content-Type": "application/json"}
			};
			if(f === 0) {
				var rown = 'func/data.php';
			}
			else {
				if(f === 1) {
					var rown = '../func/data.php';
				}
			}
			fetch(rown, fetchData)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				r = 0;
				if(result === '010203') {
					loaders.style.display = "none";	
					result_resto.innerHTML = "Ingrese datos válidos en el formulario";	
					setTimeout( () => {
						defaultForm_names.value = "";		
						defaultForm_nit.value = "";				
						defaultForm_moviles.value = "";				
						result_resto.innerHTML = "";	
						r=0;
					},2000);
				}
				else {
					if(result === '010202') {
					loaders.style.display = "none";	
					result_resto.innerHTML = "Lo sentimos error en la conexión, intentelo de nuevo";	
					r=0;
				}
				else {
						if(result === '010201') {
							loaders.style.display = "none";		
							result_resto.innerHTML = "Soporte solicitado";		
							setTimeout( () => {
								defaultForm_names.value = "";		
								defaultForm_nit.value = "";					
								defaultForm_moviles.value = "";
								result_resto.innerHTML = "";	
								down.click();
								r=0;
							},2500);
						}
					}
				}
			})
			.catch((error) => {
				r = 0;
				console.log(error);
			});
		}
	});
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function inicioShow() {
	var cancel = document.getElementById('cancel');
	var shop = document.getElementById('shop');
	var shop1 = document.getElementById('shop1');
	var shop2 = document.getElementById('shop2');
	var shop3 = document.getElementById('shop3');
	var shop4 = document.getElementById('shop4');
	var shop5 = document.getElementById('shop5');
	var detect = document.getElementsByClassName('detect');
	var selection = document.getElementById("selection");
	shop.addEventListener('click', function() {
		var info = selection.options[selection.selectedIndex].value;
		var envio = detect[0].innerHTML+' '+ info;
		sessionStorage.setItem("tester", envio);
		animate();
	});
	shop1.addEventListener('click', function() {
		var info = selection.options[selection.selectedIndex].value;
		var envio = detect[1].innerHTML+' '+ info;
		sessionStorage.setItem("tester", envio);
		animate();
	});
	shop2.addEventListener('click', function() {
		var info = selection.options[selection.selectedIndex].value;
		var envio = detect[2].innerHTML+' '+ info;
		sessionStorage.setItem("tester", envio);
		animate();
	});
	shop3.addEventListener('click', function() {
		var info = selection.options[selection.selectedIndex].value;
		var envio = detect[3].innerHTML+' '+ info;
		sessionStorage.setItem("tester", envio);
		animate();
	});
	shop4.addEventListener('click', function() {
		var info = selection.options[selection.selectedIndex].value;
		var envio = detect[4].innerHTML+' '+ info;
		sessionStorage.setItem("tester", envio);
		animate();
	});
	shop5.addEventListener('click', function() {
		var info = selection.options[selection.selectedIndex].value;
		var envio = detect[5].innerHTML+' '+ info;
		sessionStorage.setItem("tester", envio);
		animate();
	});
	var animate = function() {
		contac_a.style.animation = "retro 0.5s";
	 	contac_a.style.display = "flex";
	 	contac_a.style.left = 0;
	 	document.body.style.overflow = "hidden";
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkSelection() {
	f=1;
	var selection = document.getElementById("selection");
	var info = selection.options[selection.selectedIndex].value;
	var items = document.getElementsByClassName("items");
	if(info === 'linux') {
		items[0].innerHTML = "$82.000 /mes";
		items[1].innerHTML = "$85.000 /mes";
		items[2].innerHTML = "$170.000 /mes";
		items[3].innerHTML = "$260.000 /mes";
		items[4].innerHTML = "$480.000 /mes";
		items[5].innerHTML = "$870.000 /mes";
	}
	else {
		if(info === 'Windows') {
			items[0].innerHTML = "$92.000 /mes";
			items[1].innerHTML = "$95.000 /mes";
			items[2].innerHTML = "$200.000 /mes";
			items[3].innerHTML = "$330.000 /mes";
			items[4].innerHTML = "$580.000 /mes";
			items[5].innerHTML = "$999.000 /mes";
		}
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function transform() {
	sessionStorage.removeItem("tester");
}
function enterOk() {
	contac_a.style.animation = "retro 0.5s";
 	contac_a.style.display = "flex";
 	contac_a.style.left = 0;
 	document.body.style.overflow = "hidden";
}












