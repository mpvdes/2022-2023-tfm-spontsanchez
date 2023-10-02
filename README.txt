# Análisis de los accidentes de tráfico en Barcelona

Este trabajo analiza la evolución de los accidentes de tráfico en Barcelona en el periodo 2015-2023.

El nuevo gobierno municipal del PSC está revirtiendo algunos de los cambios que aplicó el gobierno de Barcelona en Comú, liderado por Ada Colau, con el fin de pacificar las calles. Uno de los objetivos de la pacificación de las calles y la reducción de la velocidad era, precisamente, el de reducir los siniestros y la gravedad de las lesiones, por lo que el objetivo de este tranajo es analizar la evolución de los accidentes durante el mandato de Ada Colau: analizar si se ha reducido el volumen de accidentes y su gravedad, qué zonas son las que concentran más accidentes (y comprarlo con las zonas que se han pacificado) y comprobar si las causas de los accidentes se han mantenido o han cambiado, entre otras cosas. En definitiva, el objetivo es comprobar con datos en qué medida han sido efectivas las políticas de movilidad en relación al objetivo de reducir la siniestralidad.

## Limpieza de datos

- En el documento de [limpieza de datos de los accidentes]('datasets_accidentes/limpieza_datos_accidentes.ipynb'), he unido las bases de datos de expedientes de accidentes en la ciudad de Barcelona. He modificado los dataframes para que todos tuvieran las mismas columnas y después concatenarlos en un solo dataframe.

- En el segundo [limpieza de datos adicionales]('datasets_accidentes/limpieza_datos_adicionales.ipynb'), he obtenido información de otros datasets que son complementarios al primero y ofrecen otros datos sobre los mismos expedientes de accidentes. En este caso, he creado dataframes con solo dos columnas: el número de expediente y el dato adicional que me ofrece el dataframe.

## Web