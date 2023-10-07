# Trabajo de fin de máster Sergi Pont Sànchez - MPVD

Este repositorio incluye todos los documentos relacionados con el trabajo de fin de máster de Sergi Pont Sànchez.

## Descripción del trabajo: Análisis de los accidentes de tráfico en Barcelona

Este trabajo analiza con datos la evolución de los accidentes de tráfico en Barcelona en el periodo 2015-2022.
Uno de los objetivos del gobierno del Ayuntamiento de Barcelona entre los años 2015 y 2023 fue el de reducir los accidentes de tráfico y su gravedad. Este trabajo analiza la evolución de los accidentes durante el periodo 2015-2022 (el último año del que se tienen datos), prestando especial atención al efecto que ha tenido la reducción del límite de velocidad de 50 km/h a 30 km/h en 15 calles de la llamada red principal (vías con más de un carril en algún sentido de la marcha).
 
A continuación se enlazan los archivos y directorios del repositorio:
 
## Archivos

1. *Memoria del trabajo*:
- [Memoria del trabajo](memoria_tfm.md)

2. *Bases de datos originales*:
- [Bases de datos descargadas del Catálogo Open Data Barcelona](datasets_accidentes)

3. *Shapefiles*:
- [Archvios de representación geográfica de Barcelona](shapefiles_bcn)

2. *Limpieza de datos*:
- [Limpieza de la base de datos de los accidentes de tráfico en Barcelona entre 2015 y 2022](datasets_accidentes/limpieza_datos_accidentes.ipynb)
- [Base de datos](datasets_accidentes/datos_accidentes.csv)

3. *Análisis de datos*:
- [Análisis de datos](analisis_visualizacion_datos_r/analisis_datos_r.Rmd)
- [Creación de gráficos de representación de datos](analisis_visualizacion_datos_r/representacion_datos_r.Rmd)
- [Creación de tabla comparativa](analisis_visualizacion_datos_r/tabla_variacion_accidentes.Rmd)
- [Creación de mapa de coropletas](analisis_visualizacion_datos_r/mapa_diferencia_accidentes.Rmd)

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

## Web
- [Página web - Barcelona reduce un 20% los accidentes de tráfico y más de un 55% los causados por exceso de velocidad](https://mpvdes.github.io/2022-2023-tfm-spontsanchez/)