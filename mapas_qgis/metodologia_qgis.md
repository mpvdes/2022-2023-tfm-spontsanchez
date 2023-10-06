#Representación de mapas con QGIS

Para realizar el trabajo, he creado un proyectos con la herramienta QGIS, con el fin de aprovechar las opciones de visualización que ofrece la herramienta. A continuación enumero los pasos llevados a cabo para crear el mapa

###[Mapa de calor de los accidentes de tráfico en Barcelona](mapa_calor.qgz)

1. Crear nuevo proyecto: Proyecto -> Nuevo

2. Añadir una nueva capa con el dataset 'datos_accidentes.csv': Capa -> Añadir capa -> Capa vectorial
   -> Se abre el administrador de fuentes de datos. En el apartado "Fuente", indicamos la ruta donde se encuentra la base de datos 'datos_accidentes.csv' y pulsamos 'Añadir'

3. Para representar la capa en el mapa pulsamos en el menú superior Procesos -> Caja de herramientas
   -> Se abre la caja de herramientas, donde seleccionamos Creación de vectores -> Crear capa de puntos a partir de tabla
   -> Rellenamos los siguientes campos para indicar qué dataset vamos a usar y qué campos servirán para indicar las coordenadas:
		- Capa de entrada -> datos_accidentes.csv
		- Campo X -> UTM_X
		- Campo Y -> UTM_Y

4. Los puntos ya estarán representados, pero ahora hay que generar la capa de fondo con el mapa base, en este caso de la ciudad de Barcelona.
   Si no está instalado el complemento QuickMapServices, vamos a Complementos -> Administrar e instalar complementos
   En el menú buscamos "QuickMapServices", lo seleccionamos y lo instalamos
   Cuando tenemos instalado QuickMapServices, cargamos la capa del mapa: Web -> QuickMapServices -> OSM -> OSM Standard
   Asignamos el sistema de referencia de coordenadas: Abrimos el menú de propiedades de la capa OSM Standard y en la sección Sistema de Referencia de Coordenadas (SRC) asignado, pulsamos sobre el icono "seleccionar SRC". Se nos abrirá un menú donde podremos buscar y seleccionar el SRC que corresponde a nuestra capa, que en este caso es EPSG:3857 - WGS 84
   
5. En este punto ya tenemos el mapa de puntos, con todos los accidentes del dataset, representados sobre un mapa base

6. Para crear un mapa de calor que incluya solo los accidentes de tráfico en 2022, tenemos que filtrar la capa datos_accidentes:
   Pulsamos el botón derecho sobre la capa y seleccionamos "Filtrar"
   En el menú de filtrar seleccionamos el campo de filtrado ("any") y el valor por el que queremosm filtrar (2022)
   Solo estarán representados los puntos correspondientes a accidentes del año 2022

7. Transformamos la capa de puntos en mapa de calor:
   Abrimos el menú de propiedades de la capa y en la parte izquierda del menú seleccionamos "Simbología"
   En el desplegable, seleccionamos "Mapa de calor"
   Seleccionamos el radio (el radio se refiere a la distancia desde el punto central de una ubicación que se utiliza como punto de referencia para calcular la intensidad de calor o densidad de eventos en un área circundante). En este caso he seleccionado un radio de 10 milímetros.
   En el subapartado "Representación de capas" podemos incrementar o reducir la opacidad de la capa. En este caso he seleccionado una opacidad del 42,6%.

8. Para imprimir una imagen del mapa, hay que seleccionar Proyecto -> Nueva composición de impresión
   Seleccionamos un nombre para la capa y se abrirá un editor dónde podemos ampliar o reducir la zona de mapa representada y editar la imagen con etiquetas. Después se puede exportar el mapa en diversos formatos. He seleccionado .svg.
   He repetido la impresión con dos mapas: uno de toda la ciudad y otro solo de la zona con mayor concentración de accidentes: el Eixample.

