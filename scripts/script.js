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
						</p>

						</div>
						`
		break;
		case 2:
			var str = `	<div class='animated lightSpeedIn'>	
						<h1>Distribución de Poisson</h1>
						<p>
						En teoría de probabilidad y estadística, la distribución de Poisson es una distribución de probabilidad discreta que expresa, a partir de una frecuencia de ocurrencia media, la probabilidad de que ocurra un determinado número de eventos durante cierto período de tiempo. Concretamente, se especializa en la probabilidad de ocurrencia de sucesos con probabilidades muy pequeñas, o sucesos "raros".
						</p>
						</div>
						`
		break;
		case 3:
			var str = `	<div class='animated fadeInLeftBig'>	
						<h1>Distribución Normal Estándar</h1>
						<p>
						En estadística y probabilidad se llama distribución normal, distribución de Gauss o distribución gaussiana, a una de las distribuciones de probabilidad de variable continua que con más frecuencia aparece aproximada en fenómenos reales.
						</p>

						</div>
						`
		break;
	}
	$('#Texto').html(Botones+str);

	$('#Binomial').click(function(){
		Contenido(1);
	});
	$('#Poisson').click(function(){
		Contenido(2);
	});
	$('#Normal').click(function(){
		Contenido(3);
	});

}Contenido(1);




});