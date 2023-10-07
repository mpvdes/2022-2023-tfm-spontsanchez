# TFM: Análisis de los accidentes de tráfico en la ciudad de Barcelona

- Sergi Pont Sánchez
- DNI: 47896337X

## Tutores

- Yolanda García Ruíz (sesión de tutoría el 28/08/23)
- Alejandro Zappala Delgado (sesiones de tutoría el 07/09/23 y el 19/09/23)
- Julián Pérez Romero (sesión de tutoría el 05/09/23)

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

Este trabajo nace del debate político y social en la ciudad de Barcelona acerca de la reordenación de la movilidad. Una de las cuestiones que ha centrado los dos mandatos de la alcaldesa Ada Colau es la reducción del tráfico motorizado en la ciudad, así como la reducción de la velocidad. Para ello, el Ayuntamiento ha tomado una serie de medidas, entre las que destaca la limitación de la velocidad máxima a 30 km/h en 15 vías de la denominada "red principal", ampliando la limitación aplicada por la DGT.

Los objetivos de estas política han sido dos: por un lado, reducir la contaminación y, por otro lado, disminuir la accidentalidad y la gravedad de las lesiones. En este trabajo se analiza si se ha cumplido el objetivo de reducir los accidentes y si las 15 vías en las que se ha limitado la velocidad a 30 km/h también han registrado menos accidentes tras la entrada en vigor de la medida.

Para realizar el trabajo, he obtenido las bases de datos en el [web de datos abiertos del Ayuntamiento de Barcelona](https://opendata-ajuntament.barcelona.cat/es). Estos datos los he tratado con la librería Pandas de Python, para limpiar la base de datos y poder analizar los datos posteriormente. La base de datos resultante la he analizado y representado geográficamente con el lenguaje de programación R. El resultado de los análisis lo he presentado a través de una página web creada con lenguaje HTML.

## Estado de la cuestión: trabajos relacionados

Trabajos y artículos anteriores relacionados con el tema de este trabajo:

- Betevé publicó un análisis sobre la evolución de la mortalidad por accidentes de tráfico en Barcelona [Accidents mortals a Barcelona: on i quan s’han produït](https://beteve.cat/mobilitat/victimes-mortals-accident-transit-barcelona/)
- Nació Digital publicó un artículo sobre la mortalidad en accidente de tráfico de los motoristas: [Deu de cada onze morts en accidents de trànsit a Barcelona anaven en moto](https://www.naciodigital.cat/noticia/236790/deu-onze-morts-accidents-barcelona-moto)
- Madrid Data Science publicó un extenso análisis sobre accidentes de tráfico en Madrid, entre los años 2010 y 2018: [Análisis de accidentes de tráfico en Madrid 2010-2018](https://madridatascience.com/)

## Tecnologías y herramientas utilizadas

#### Python - Jupyter
Para la limpieza de datos he utilizados las librerías:
- Pandas
- Numpy

#### R - R Studio
Para el análisis y la representación de datos he utilizado los paquetes:
- Dplyr
- GGplot2
- SF
- SP
- Plotly
- KableExtra
- Knitr

#### QGIS
Para crear un mapa de calor he utilizado el programa de visualización de código libre QGIS.

#### HTML, CSS y Javascript - Emacs
Para el diseño de la web he utilizado HTML, para las hojas de estilo, CSS, y para la parte de scroll, el lenguaje JavaScript.

#### Markdown
Para los documentos complementarios, como la memoria o el Readme, he utilizado el lenguaje de marcado Markdown.

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

#### Elección del tema
En primer lugar, opté por trabajar con los datos de las elecciones generales del 23J. Antes de las elecciones, llevé a cabo una simulación de limpieza de datos con el dataset de las elecciones anteriores, las de 2019. Mediante el paquete de Python Pandas, limpié los datos hasta obtener una tabla con los votos obtenidos por cada partido en cada una de las provincias, así como la población, el censo y el censo CERA.
A pesar de haber empezado con este tema, no veía claro como enfocar el análisis, por el futuro político incierto y la posibilidad de unas nuevas elecciones que podían cambiar el foco de interés en cuestión de pocas semanas. Un análisis que era válido y relevante en julio podía perder la vigencia en septiembre u octubre, así que decidí cambiar de tema.

Analicé otros datasets ofrecidos por webs de datos abiertos, como el portal de datos abiertos del Gobierno de España, el portal de datos abiertos de la Generalitat de Catalunya y el portal de datos abiertos del Ayuntamiento de Barcelona. En este último sitio web encontré diversos datasets que analizaban la evolución de los accidentes de tráfico en la ciudad de Barcelona y opté por dedicar el artículo a la evolución de los accidentes de tráfico en la ciudad de Barcelona. La pacificación de las calles y la reducción de la velocidad de los vehículos a motor ha sido una de las principales obras del gobierno municipal entre los años 2015 y 2023. Además, también ha sido una de las cuestiones que ha centrado la campaña electoral de las municipales de 2023 y, por ello, la pregunta que se pretende responder con este análisis de datos es si las medidas adoptadas por el gobierno de Ada Colau han sido efectivas para reducir los accidentes de tráfico.

#### Obtención de datos y limpieza de datos
Tras analizar los datos con la herramienta de previsualización del portal de datos abiertos del Ayuntamiento de Barcelona, descargué los archivos en formato .csv y los guardé en el directorio [datasets_accidentes](datasets_accidentes). Cabe tener en cuenta que los archivos estaban divididos por años y por el tipo de información que aportaban, por lo que fue necesario realizar una tarea de unificación de los datasets y limpieza de datos.

Mediante un [cuaderno de Python](datasets_accidentes/limpieza_datos_accidentes.ipynb), unifiqué los datasets necesarios para el análisis de datos que quería llevar a cabo. uní el dataset tomando como campo de referencia el número de expediente, que es único para cada accidente y está incluído en todos los datasets. Uní todos los datasets de accidentes en Barcelona entre los años 2015 y 2022, y llevé a cabo una limpieza de datos con Python para que todos los datasets tuvieran el mismo formato y las mismas columnas. La base de datos resultante de la limpieza de datos, la guardé en un archivo csv [datos_accidentes.csv](datasets_accidentes/datos_accidentes.csv).

Paralelamente, también descargué archivos de datos espaciales para poder representar después los mapas de la ciudad a través de R. Los guardé en el directorio [shapefiles_bcn](shapefiles_bcn), que incluye la siguiente información geográfica:
- [Calles de Barcelona](shapefiles_bcn/bcn_carrers)
- [Fronteras de los distritos de Barcelona](shapefiles_bcn/bcn_fronteres_districtes)
- [Fronteras de los distritos y los barrios de Barcelona](shapefiles_bcn/bcn_unitats_administratives)
- [Calles con límite de velocidad a 30 km/h](shapefiles_bcn/carrers_30)
- [Zonas con límite de velocidad a 30 km/h](shapefiles_bcn/zones_30)

También cree con excel un archivo csv que contiene las vías principales con límite de velocidad a 30 km/h y lo almacené en el archivo [carrers_30_xarxa_primaria.csv](shapefiles_bcn/carrers_30_xarxa_primaria.csv)

#### Análisis y representación de datos en R
Con la base de datos resultante, analicé los datos y los representé mediante gráficos, tablas y mapas en archivos de R Markdown:

- [Análisis de datos]('analisis_visualizacion_datos_r/analisis_datos_r.Rmd). El análisis de datos consistió en buscar patrones generales en los datos, centránsome en la evolución de los accidentes entre 2015 y 2022, así como en la evolución de los accidentes causados por exceso de velocidad y la gravedad de las lesiones provocadas por accidentes de tráfico. Cabe tener en cuenta que el periodo analizado comprende los años 2020 y 2021, en los que la movilidad se redujo como consecuencia de la pandemia de la Covid-19. Además los cambios en el límite de velocidad de las calles tuvieron lugar durante estos dos años. Por este motivo, algunos análisis comparan los años 2019 y 2022 en su conjunto, para evitar las distorsiones que pueden representar los años 2020 y 2021, afectados por las limitaciones en los desplazamientos mencionadas anteriormente.

- [Creación de gráficos de representación de datos]('analisis_visualizacion_datos_r/representacion_datos_r.Rmd). Para la representación de datos que muestran la evolución temporal durante todo el periodo 2015-2022, he otpado por los gráficos de barras creados con el paquete Ggplot2. En el caso de la evolución total de los accidentes, lo he representado con un gráfico de barras agruapdas por meses. La evolución de la gravedad de las lesiones entre 2015 y 2022 la he representado con un gráfico de barras apiladas, en las que se comunican el número de muertos, lesionades graves y la suma de ambas cifras. Finalmente, la evolución de los accidentes causados por exceso de velocidad la he representado con un gráfico de barras agrupadas por años.

- [Creación de tabla comparativa de los accidentes en las calles 30]('analisis_visualizacion_datos_r/tabla_variacion_accidentes.Rmd). Para comparar la eficacia de la limitación de velocidad a 30 km/h en vías principales, he comparado los años 2019 y 2022, para evitar las posibles distorsiones generadas por las medidas antiCovid-19. Creé una tabla en formato html, ordenando las calles de mayor a menor disminución porcentual de accidentes entre los años 2019 y 2022.

- [Creación de mapa de coropletas]('analisis_visualizacion_datos_r/mapa_diferencia_accidentes.Rmd). El mapa de coropletas tiene por objetivo analizar qué barrios han visto reducido el número de accidentes, también entre los años 2019 y 2022. En el mapa también se representan las calles 30, para poder ver en el mapa si los barrios por donde pasan estas 15 vías principales han reducido la cantidad de accidentes.

#### Representación de datos geográficos con QGIS
Para complementar la información aportada por el artículo, creé un mapa parar representar las zonas de la ciudad en las que en 2022 hubo más accidentes de tráfico. Para realizar esta representación geográfica me decanté por crear un mapa de calor (mapas_qgis/mapa_calor.qgz) con el software de código abierto QGIS, que permite generar un mapa de calor a partir de una capa de representación geográfica de puntos en los que se han producido los accidentes. El siguiente documento explica la [metodologia empleada para crear el mapa de calor en QGIS](mapas_qgis/metodologia_qgis.md).

#### Edición de imágenes con Inkscape
Mediante el programa Inkscape he creado una imagen compuesto por dos mapas de calor: uno con los accidentes en 2022 en toda la ciudad y otro centrado en la zona de l'Eixample, donde se concentra un mayor número de accidentes. El resultado lo exporté en un archivo png para reducir su tamaño y mejorar la experiencia de usuario en la web. También usé Inkscape para añadir elementos adicionales a los mapas, como la representación gráfica de la escala de los mapas y la representación gráfica de los puntos cardinales.

#### Creación de la página web
La página web está creada a partir de la plantilla de Scrollama [Sticky Overlay](https://github.com/russellsamora/scrollama/tree/main/docs/sticky-overlay). Esta plantilla está dividida en tres partes: una sección estática previa al scrolly, una sección central de scrolly y una sección estática de salida del scrolly.
En la primera sección introduje el artículo, con el titular, el subtítulo, los párrafos iniciales y una imagen de apoyo. En la parte de scrolly incluí los gráficos de barras que muestran la evolució temporal de los accidentes, con textos de apoyo para ayudar a entender los gráficos. En la sección de salida, incluí la tabla de comparación de accidentes en las calles 30 y la representación geográfica con el mapa de coropletas creado con R y con los mapas de calor creados con QGIS.

El principal reto de la parte scrolly fue garantizar la correcta visualización de todos los elementos, de manera que los bloques de texto dejaran suficiente espacio para visualizar los gráficos. Los gráficos ocupan el espacio máximo permitido por el tamaño de pantalla, de forma responsiva.

#### Publicación de la web
La página web está publicada a través de GitHub Pages, indicando como fuente la carpeta docs incluída en la rama main.

## Resultados: producto obtenido (HTML, CSS, JS, Rmd, Python, ipynb, sh, etc.)

1. *Memoria del trabajo*:
- [Memoria del trabajo](memoria_tfm.md)

2. *Bases de datos originales*:
- [Bases de datos descargadas del Catálogo Open Data Barcelona](datasets_accidentes)

3. *Shapefiles*:
- [Archvios de representación geográfica de Barcelona](shapefiles_bcn)

2. *Limpieza de datos*:
- [limpieza de la base de datos de los accidentes de tráfico en Barcelona entre 2015 y 2022]('datasets_accidentes/limpieza_datos_accidentes.ipynb')
- [Base de datos]('datasets_accidentes/datos_accidentes.csv')

3. *Análisis de datos*:
- [Análisis de datos]('analisis_visualizacion_datos_r/analisis_datos_r.Rmd)
- [Creación de gráficos de representación de datos]('analisis_visualizacion_datos_r/representacion_datos_r.Rmd)
- [Creación de tabla comparativa]('analisis_visualizacion_datos_r/tabla_variacion_accidentes.Rmd)
- [Creación de mapa de coropletas]('analisis_visualizacion_datos_r/mapa_diferencia_accidentes.Rmd)

4. *Mapas QGIS*:
- [Mapa de calor de los accidentes de tráfico en Barcelona en 2022](mapas_qgis/mapa_calor.qgz)
- [Metodologia QGIS](mapas_qgis/metodologia_qgis.md)

5. *Web*:
- [Index.html](docs/index.html)
- [Hoja de estilos style](docs/style.css)
- [Hoja de estilos custom](docs/custom.css)
- [Javascript script.js](docs/script.js)
- [Javascript scrollama.min.js](docs/scrollama.min.js)
- [Imágenes](img) 

## Conclusiones