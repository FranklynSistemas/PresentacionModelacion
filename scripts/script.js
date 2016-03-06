$(function()
{



function Contenido(num){
	var Botones =` 		<div class="btn-group" role="group" aria-label="...">
  						<button type="button" id="Binomial" class="btn btn-primary">Binomial</button>
  						<button type="button" id="Poisson" class="btn btn-primary">Poisson</button>
  						<button type="button" id="Normal" class="btn btn-primary">Normal Estándar</button>
						</div> `
	switch(num){
		case 1: 
			var str = `	<div class='animated zoomInRight'>	
						<h1>Distribución Binomial</h1>
						<p>
						En estadística, la distribución binomial es una distribución de probabilidad discreta que cuenta el número de éxitos en una secuencia de n ensayos de Bernoulli independientes entre sí, con una probabilidad fija p de ocurrencia del éxito entre los ensayos. Un experimento de Bernoulli se caracteriza por ser dicotómico, esto es, sólo son posibles dos resultados. A uno de estos se denomina éxito y tiene una probabilidad de ocurrencia p y al otro, fracaso, con una probabilidad q = 1 - p. En la distribución binomial el anterior experimento se repite n veces, de forma independiente, y se trata de calcular la probabilidad de un determinado número de éxitos. Para n = 1, la binomial se convierte, de hecho, en una distribución de Bernoulli.
						<button type="button" id="EjBinomial" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img src="http://4.bp.blogspot.com/-IFBNMkkc-d4/UZM--sjiw4I/AAAAAAAAD_Y/e6Gg6b_mV7c/s1600/Captura+de+pantalla+de+2013-05-15+09:51:54.png">
						</div>
						`
		break;
		case 2:
			var str = `	<div class='animated lightSpeedIn'>	
						<h1>Distribución de Poisson</h1>
						<p>
						En teoría de probabilidad y estadística, la distribución de Poisson es una distribución de probabilidad discreta que expresa, a partir de una frecuencia de ocurrencia media, la probabilidad de que ocurra un determinado número de eventos durante cierto período de tiempo. Concretamente, se especializa en la probabilidad de ocurrencia de sucesos con probabilidades muy pequeñas, o sucesos "raros".
						<button type="button" id="EjPoisson" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img src="https://descalzarte5678.files.wordpress.com/2014/12/poisson-2.jpg">
						</div>
						`
		break;
		case 3:
			var str = `	<div class='animated fadeInLeftBig'>	
						<h1>Distribución Normal Estándar</h1>
						<p>
						En estadística y probabilidad se llama distribución normal, distribución de Gauss o distribución gaussiana, a una de las distribuciones de probabilidad de variable continua que con más frecuencia aparece aproximada en fenómenos reales.
						<button type="button" id="EjNormal" class="btn btn-info Micss" data-toggle="modal" data-target="#MiVentana">Ejemplo</button>
						</p>
						<img src="https://qualitasaagg.files.wordpress.com/2015/01/curva-distribucic3b3n-normal.jpg">
						</div>
						`
		break;
	}
	$('#Texto').html(Botones+str);

//Navegación
	$('#Binomial').click(function(){
		Contenido(1);
	});
	$('#Poisson').click(function(){
		Contenido(2);
	});
	$('#Normal').click(function(){
		Contenido(3);
	});

	$('#EjBinomial').click(function(){
		Ejemplos(1,'Distribución Binomial');
	});

	$('#EjPoisson').click(function(){
		Ejemplos(2,'Distribución de Poisson');
	});

	$('#EjNormal').click(function(){
		Ejemplos(3,'Distribución Normal');
	});

//Ejemplos



}Contenido(1);


function Ejemplos (num,title){
	
	var head = `<div class="modal fade" id="MiVentana" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">${title}</h4>
                  </div>
                  <div id="DatosModal" class="modal-body">
                  `

	switch(num){
		case 1:
			Titulo = 'Distribución Binomial';
			var str = "Ejemplo Binomial";
		break;
		case 2:
			Titulo = 'Distribución de Poisson';
			var str = "Ejemplo Poisson";
		break;
		case 3:
			Titulo = 'Distribución Normal';
			var str = "Ejemplo Normal";
		break;
	}
		var footer = `</div>
             <div class="modal-footer">
            </div>
           </div>
          </div>
         </div>`

$('#Ejemplos').html(head+str+footer);
}Ejemplos(1,'Distribución Binomial');


})