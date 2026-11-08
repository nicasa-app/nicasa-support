# Guía del permiso de grabación de pantalla (macOS)

## ¿Por qué Nicasa necesita el permiso de grabación de pantalla?

En macOS, las aplicaciones de captura de pantalla deben tener concedido el permiso de grabación de pantalla para poder leer los píxeles del monitor.

A partir de macOS 10.15 Catalina, Apple introdujo protecciones de privacidad más estrictas. Cualquier aplicación que capture el contenido de la pantalla, incluidas las capturas, debe ser aprobada explícitamente por el usuario.

Esto se aplica a todas las apps, incluidas las descargadas del Mac App Store.

**Sin este permiso, Nicasa no puede hacer capturas ni grabar el contenido de la pantalla.**

## Cómo activar el permiso de grabación de pantalla

Sigue estos pasos:

1. Abre **Ajustes del Sistema**
2. Ve a **Privacidad y seguridad**
3. Selecciona **Grabación de pantalla**
4. Busca **Nicasa** en la lista y marca la casilla

Si la app ya estaba en ejecución, reinicia Nicasa después de activar el permiso.

## Si no apareció el aviso de permiso

El diálogo de permiso suele aparecer la primera vez que la app intenta capturar la pantalla.

Si no viste el aviso, puede deberse a que:

- La solicitud de permiso se rechazó anteriormente
- El estado del permiso está en caché en macOS
- La app intentó capturar antes de que pudiera aparecer el diálogo

En este caso, puede que necesites restablecer el permiso.

## Restablecer el permiso de grabación de pantalla

Puedes restablecer el permiso con el siguiente comando en Terminal:

```bash
tccutil reset ScreenCapture com.nicasa.nue
```

Después de ejecutar el comando:

1. Reinicia Nicasa
2. Vuelve a activar la función de captura
3. macOS debería mostrar de nuevo el diálogo de permiso

## Si el restablecimiento no funciona

En raras ocasiones, macOS puede conservar un estado de permiso no válido.

Si restablecer el permiso no resuelve el problema, prueba los siguientes pasos:

1. Cierra Nicasa
2. Elimina Nicasa de tu carpeta Aplicaciones
3. Reinstala la última versión desde el Mac App Store
4. Abre la app de nuevo
5. Cuando macOS solicite el permiso de grabación de pantalla, selecciona **Permitir**

Reinstalar la app puede forzar a macOS a recrear la entrada de permiso.

## Solución manual alternativa

También puedes alternar el permiso manualmente:

1. Abre **Ajustes del Sistema**
2. Ve a **Privacidad y seguridad**
3. Abre **Grabación de pantalla**
4. Desmarca Nicasa y vuelve a marcarlo
5. Reinicia Nicasa

## Nota de seguridad

Conceder el permiso de grabación de pantalla no permite a Nicasa controlar tu sistema.

Solo permite a la aplicación leer los píxeles de la pantalla para las funciones de captura.

Puedes revocar este permiso en cualquier momento en:
**Ajustes del Sistema → Privacidad y seguridad → Grabación de pantalla**
