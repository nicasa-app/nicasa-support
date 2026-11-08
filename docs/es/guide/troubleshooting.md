# Solución de problemas

## Problemas habituales

### La aplicación no se inicia

**Síntomas**: Nicasa no arranca o se cierra de inmediato

**Soluciones**:
1. Asegúrate de usar macOS 10.13 o posterior
2. Comprueba que tienes al menos 4 GB de RAM
3. Reinicia tu Mac
4. Reinstala Nicasa desde el Mac App Store
5. Comprueba si hay aplicaciones en conflicto

### Las capturas de pantalla no funcionan

**Síntomas**: la función de captura no funciona

**Soluciones**:
1. **Concede el permiso de grabación de pantalla**:
   - Ve a Ajustes del Sistema > Privacidad y seguridad > Grabación de pantalla
   - Marca la casilla junto a Nicasa
   - Reinicia Nicasa
2. Asegúrate de que no haya otras herramientas de captura en ejecución
3. Prueba a reiniciar tu Mac

### La extensión de Chrome no funciona

**Síntomas**: la extensión no aparece o no extrae imágenes

**Soluciones**:
1. Asegúrate de que la extensión está activada en Chrome
2. Comprueba que usas una versión compatible de Chrome
3. Prueba a actualizar la página web
4. Reinstala la extensión
5. Borra la caché y las cookies del navegador

### Las imágenes no se cargan

**Síntomas**: no aparecen las miniaturas o las imágenes no se abren

**Soluciones**:
1. Comprueba los permisos de los archivos de imagen
2. Asegúrate de que las imágenes no estén dañadas
3. Verifica que el formato sea compatible (JPEG, PNG, GIF, BMP, TIFF, WebP)
4. Prueba a abrir la carpeta de nuevo
5. Reinicia Nicasa

### Rendimiento lento

**Síntomas**: la aplicación va lenta o las miniaturas tardan en cargar

**Soluciones**:
1. Cierra otras aplicaciones que consuman mucha memoria
2. Asegúrate de tener RAM libre suficiente (8 GB recomendados)
3. Reduce el tamaño de la cuadrícula de miniaturas en las preferencias
4. Limpia la caché de la aplicación
5. Reinicia tu Mac

### El editor de IA no funciona

**Síntomas**: las herramientas de edición con IA no están disponibles o no funcionan

**Soluciones**:
1. Asegúrate de tener una conexión a internet estable (para algunas funciones)
2. Comprueba que tu Mac cumple los requisitos mínimos
3. Reinicia Nicasa
4. Actualiza a la última versión
5. Contacta con el soporte si el problema persiste

### Problemas de permisos

**Síntomas**: la app solicita permisos o algunas funciones no funcionan

**Soluciones**:
1. **Grabación de pantalla**: Ajustes del Sistema > Privacidad y seguridad > Grabación de pantalla
2. **Accesibilidad**: Ajustes del Sistema > Privacidad y seguridad > Accesibilidad (para el modo superposición)
3. **Archivos y carpetas**: Ajustes del Sistema > Privacidad y seguridad > Archivos y carpetas
4. Reinicia Nicasa después de conceder los permisos

### Problemas con el modo superposición

**Síntomas**: el modo superposición transparente no funciona correctamente

**Soluciones**:
1. Concede el permiso de accesibilidad en Ajustes del Sistema
2. Asegúrate de que no haya otras herramientas de superposición en ejecución
3. Prueba a desactivar y volver a activar el modo superposición
4. Reinicia Nicasa

## Mensajes de error

### «Se requiere permiso de grabación de pantalla»

**Solución**: concede el permiso de grabación de pantalla como se describe arriba, en la sección «Las capturas de pantalla no funcionan».

### «No se pudo cargar la imagen»

**Posibles causas**:
- El archivo está dañado
- Formato no compatible
- Problema de permisos del archivo
- El archivo es demasiado grande

**Soluciones**:
1. Prueba a abrir el archivo con Vista Previa para comprobar que es válido
2. Convierte el archivo a un formato compatible
3. Comprueba los permisos del archivo
4. Asegúrate de que el tamaño del archivo sea razonable

### «La extensión no responde»

**Solución**: actualiza la página web y vuelve a intentarlo. Si persiste, reinstala la extensión.

## Obtener ayuda

Si sigues teniendo problemas:

1. Consulta esta guía de solución de problemas
2. Visita nuestras [preguntas frecuentes](/es/guide/faq)
3. Envía una incidencia en [GitHub](https://github.com/nicasa-app/nicasa-support/issues)
4. Incluye tu versión de macOS, la versión de Nicasa y los pasos detallados para reproducir el problema

## Información del sistema

Al informar de problemas, incluye:

- Versión de macOS (menú Apple > Acerca de este Mac)
- Versión de Nicasa (Nicasa > Acerca de Nicasa)
- Modelo y chip del Mac (Apple Silicon o Intel)
- Pasos para reproducir el problema
- Cualquier mensaje de error

Normalmente esto significa que el archivo de imagen se ha movido o eliminado. Prueba a reabrir la carpeta o a seleccionar otro directorio.

### «Formato no compatible»

No se reconoce el formato de la imagen. Consulta nuestra lista de [formatos compatibles](/es/guide/usage) o convierte la imagen a un formato compatible.

### «Memoria insuficiente»

Tu sistema no tiene suficiente RAM. Cierra otras aplicaciones o amplía la memoria.

## Solución de problemas avanzada

### Ver registros

Para acceder a los registros de la aplicación:

1. Ve a Ayuda > Mostrar registros
2. O busca los registros en:
   - Windows: `%APPDATA%\Nicasa\logs`
   - macOS: `~/Library/Application Support/Nicasa/logs`
   - Linux: `~/.config/Nicasa/logs`

### Restablecer la aplicación

Para restablecer todos los ajustes a sus valores predeterminados:

1. Cierra Nicasa
2. Elimina la carpeta de datos de la aplicación
3. Reinicia Nicasa

### Opciones de línea de comandos

Para usuarios avanzados, Nicasa admite argumentos de línea de comandos:

```bash
nicasa --verbose          # Activa el registro detallado
nicasa --reset-settings   # Restablece todos los ajustes
nicasa /path/to/folder    # Abre una carpeta concreta
```

## Obtener más ayuda

Si estas soluciones no resuelven tu problema:

1. Consulta nuestras [preguntas frecuentes](/es/guide/faq)
2. Busca en las [incidencias](https://github.com/nicasa-project/nicasa-support/issues) existentes
3. Crea una nueva incidencia con:
   - Tu sistema operativo y versión
   - La versión de Nicasa
   - Los pasos para reproducir el problema
   - Cualquier mensaje de error o captura de pantalla
