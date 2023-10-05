# TFM: Análisis de los accidentes de tráfico en la ciudad de Barcelona

- Sergi Pont Sánchez
- DNI: 47896337X

## Tutores

- Yolanda García Ruíz
- Alejandro Zappala Delgado
- Julián Pérez Romero

## Agradecimientos

Gracias a todas las personas que me han ayudado a completar este trabajo de fin de máster y los módulos del curso.
En primer lugar a Yolanda García, Alejandro Zappala, Julián Pérez y Adolfo Antón por su inestimable ayuda en diversas fases del trabajo.
Gracias también a todos los profesores y las profesoras del máster por haber transmitido sus conocimientos y por estar siempre disponibles y accesibles.
A las personas que han importido charlas y talleres, por aportar su experiencia y un enfoque práctico al periodismo de datos.
Y por último a las compañeras y compañeros del máster, por el trayecto compartido durante el máster y por el apoyo durante el curso.

## Título del TFM

Análisis de los accidentes de tráfico en la ciudad de Barcelona

## Resumen

Este trabajo de fin de máster analiza la evolución de los accidentes de tráfico en la ciudad de Barcelona, entre 2015 y 2022, prestando especial atención a los accidentes causados por exceso de velocidad. También se analiza la efectividad de la reducción de la velocidad máxima en 15 vías principales en la reducción de los accidentes y en la gravedad de las lesiones.

## Introducción: motivación, objetivos y metodología

Este trabajo nace del debate político y social en la ciudad de Barcelona acerca de la reordenación de la movilidad. Una de las cuestiones que ha centrado los dos mandatos de la alcaldesa Ada Colau es la reducción del tráfico motorizado en la ciudad, así como la reducción de la velocidad. Para ello, el Ayuntamiento ha tomado una serie de medidas, entre las cuales destacan:
- Limitar la entrada a la ciudad de vehículos altamente contaminantes
- Ampliar las zonas peatonales en detrimento de las calles con prioridad para vehículos motorizados
- Ampliar la red de carriles bici
- Reducir a 30 km/h la velocidad máxima en calles secundarias
- Instalar nuevos radares de velocidad

Los objetivos de esta política han sido dos: por un lado, reducir la contaminación y, por otro lado, reducir la accidentalidad y la gravedad de las lesiones.

Con el reciente cambio de gobierno en la ciudad, se ha planteado revertir algunos de estos cambios para recuperar espacio para el tráfico rodado. Ante este contexto, el objetivo del trabajo es analizar cómo ha evolucionado la siniestralidad en la ciudad de Barcelona entre los años 2015 y 2022. Aunque el mandato de Ada Colau duró hasta mayo de 2023, no hay datos disponibles sobre el año 2023 porque todavía no ha terminado. Por este motivo, el alcance del trabajo se limita al periodo entre 2015 y 2022, ambos incluídos.

Para realizar el trabajo, he obtenido las bases de datos en el [web de datos abiertos del Ayuntamiento de Barcelona](https://opendata-ajuntament.barcelona.cat/es). Estos datos los he tratado con la librería Pandas de Python, para limpiar la base de datos y poder analizar los datos posteriormente. La base de datos resultante la he analizado y representado geográficamente con el lenguaje de programación R. El resultado de los análisis los he presentado a través de una página web creada con lenguaje HTML.

## Estado de la cuestión: trabajos relacionados

Trabajos anteriores relacionados con esta cuestión:

- Betevé publicó un análisis sobre la evolución de la mortalidad por accidentes de tráfico en Barcelona [Accidents mortals a Barcelona: on i quan s’han produït](https://beteve.cat/mobilitat/victimes-mortals-accident-transit-barcelona/)
- Nació Digital publicó un artículo sobre la mortalidad en accidente de tráfico de los motoristas: [Deu de cada onze morts en accidents de trànsit a Barcelona anaven en moto](https://www.naciodigital.cat/noticia/236790/deu-onze-morts-accidents-barcelona-moto)
- Madrid Data Science publicó un extenso análisis sobre accidentes de tráfico en Madrid, entre los años 2010 y 2018: [Análisis de accidentes de tráfico en Madrid 2010-2018](https://madridatascience.com/)

## Tecnologías y herramientas utilizadas

### Python - Jupyter
1. Pandas

### R - R Studio

### HTML - Emacs

## Fuentes de datos
Los datos utilizados para este trabajo se han descargado del [portal de datos abiertos del Ayuntamiento de Barcelona](https://opendata-ajuntament.barcelona.cat/es).
Se han utilizado las siguientes bases de datos:
- [Accidentes gestionados por la Guàrdia Urbana en la ciudad de Barcelona (2015-2022)](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/accidents-gu-bcn)
- [Accidents según la causa mediata (2015-2022](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/accidents-causes-gu-bcn)
- [Accidents según la causa del conductor (2015-2022](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/accidents_causa_conductor_gu_bcn)
- [Vehículos implicados en accidentes de tráfico en Barcelona (2015-2022](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/accidents-vehicles-gu-bcn)

Se han utilizado los siguientes archivos de representación geográfica:
- [Calles de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/carrerer)
- [Unidades Administrativas de Barcelona](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/20170706-districtes-barris)
- [Zonas con límite de velocidad d 30 km/h](https://opendata-ajuntament.barcelona.cat/data/ca/dataset/zones30-carrers)
- [Calles con límite de velocidad d 30 km/h](https://opendata-ajuntament.barcelona.cat/data/es/dataset/carrers-30-bcn)

## Métodos y técnicas

Finales de julio
En primer lugar, decido qué tema voy a abordar en el trabajo de final de máster.
En primer lugar, me decanto por trabajar con los datos de las elecciones generales del 23J.
Antes de las elecciones, hago una simulación de limpieza de datos con el dataset de las elecciones anteriores, las de 2019. Mediante el paquete de Python Pandas, limpio los datos hasta obtener una tabla con los votos obtenidos por cada partido en cada una de las provincias, así como la población, el censo y el censo CERA.

aunque enseguida empiezo a experimentar problemas para obtener una tabla limpia con todos los datos que necesito para poder trabajar. Además, el hecho de que el horizonte político sea incierto, hace que no tenga claro cómo enfocar el análisis de los datos y qué conclusiones buscar.
Entonces, empiezo a analizar otros datasets, como por ejemplo los que ofrecen datos sobre seguridad en la ciudad de Barcelona.

12/08
Decido que mi artículo será sobre la evolución de los accidentes de tráfico en la ciudad de Barcelona. La pacificación de las calles y la reducción de la velocidad de los vehículos a motor ha sido uno de los principales caballos de batalla de la alcaldesa de Barcelona, Ada Colau, durante sus 8 años de mandato.
También ha sido una de las cuestiones que ha centrado la campaña electoral de las municipales de 2023 y, por ello, la pregunta que se pretende responder con este análisis de datos es si las medidas adoptadas por el gobierno de Ada Colau han sido efectivas para reducir los accidentes de tráfico.

15/08
He unido todos los datasets de accidentes en Barcelona entre los años 2015 y 2022. He realizado una limpieza de datos para que todos los datasets tuvieran el mismo formato y las mismas columnas y después los he unido en un solo dataset con todos los datos que considero relevantes.
La limpieza de datos la he hecho con la librería Pandas de Python.
El dataset que tengo ahora mismo incluye: el número de expediente de los accidentes gestionados por la Guàrdia Urbana, el momento en el que se han producido, el lugar exacto y la causa (si ha sido culpa de un peatón). También el número de víctimas y el grado de lesión (mortal, grave, leve).
El Ayuntamiento de Barcelona ofrece también datasets en los que se indica la causa de los accidentes según un error en la conducción, la causa mediata (indirecta) i según los vehículos implicados en accidentes.

También hay datos sobre las calles pacificadas en la ciudad de Barcelona, pero solo entre 2020 y 2022. (eixos verds de l’Eixample).
También hay datos sobre las zonas 30 (calles donde la velocidad máxima es de 30 km/h), con serie histórica desde el año 2017.

Limpieza de los datos:

Sesión con Yolanda García (28/08): Me ayudó en la limpieza de los datos. En concreto para tratar filas que contenían valores NaN y que no permetían homogeneizar las columnas para que todas las cifras fueran enteros y así poderlas tratar más fácilmente.


## Ejercicio de programación literaria, con el código incluido (50%)


## Resultados: producto obtenido (HTML, CSS, JS, Rmd, Python, ipynb, sh, etc.) con su descripción y enlace a repositorio git de Github con todo el contenido, incluido el código. (50%)
- El repositorio git se hará dentro de mpvdes y el nombre será `2022-2023-tfm-%nombre-usuaria%`


## Conclusiones