# Contribuir

¡Damos la bienvenida a las contribuciones para mejorar la documentación de soporte de Nicasa! Ya sea corrigiendo una errata, añadiendo una nueva guía o mejorando el contenido existente, tu ayuda es bienvenida.

## Formas de contribuir

### Mejoras en la documentación
- Corregir erratas o errores gramaticales
- Aclarar instrucciones confusas
- Añadir información que falta
- Actualizar contenido desactualizado
- Mejorar el formato y la legibilidad

### Contenido nuevo
- Crear guías para problemas habituales
- Añadir tutoriales o ejemplos
- Traducir la documentación a otros idiomas
- Redactar entradas de preguntas frecuentes

### Contribuciones técnicas
- Mejorar el proceso de compilación
- Añadir nuevas funciones al sitio de documentación
- Corregir errores en el flujo de despliegue

## Primeros pasos

### Requisitos previos
- Node.js 18 o posterior
- Gestor de paquetes pnpm
- Git

### Configuración del entorno de desarrollo

1. **Haz un fork del repositorio** en GitHub
2. **Clona tu fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nicasa-support.git
   cd nicasa-support
   ```
3. **Instala las dependencias**:
   ```bash
   pnpm install
   ```
4. **Inicia el servidor de desarrollo**:
   ```bash
   pnpm docs:dev
   ```
5. **Abre** `http://localhost:5173` en tu navegador

### Hacer cambios

1. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Realiza tus cambios en los archivos de documentación de `docs/`
3. Prueba tus cambios compilando el sitio:
   ```bash
   pnpm docs:build
   ```
4. Haz commit de tus cambios:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Enviar cambios

1. **Sube tu rama** a tu fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Crea un Pull Request** en GitHub
3. **Espera la revisión** y atiende los comentarios

## Directrices

### Estilo de redacción
- Usa un lenguaje claro y conciso
- Escribe en voz activa cuando sea posible
- Sé inclusivo y acogedor
- Usa un formato coherente
- Incluye ejemplos de código cuando sea útil

### Estructura de archivos
- Las páginas de documentación van en `docs/`
- Las guías van en `docs/guide/`
- Usa nombres de archivo en minúsculas con guiones: `my-new-guide.md`
- El frontmatter no es obligatorio, pero puede usarse para metadatos

### Enlaces
- Usa enlaces relativos para la documentación interna
- Enlaza a recursos externos cuando sea útil
- Asegúrate de que todos los enlaces funcionen

### Imágenes y recursos
- Coloca las imágenes en `docs/public/` o en sus subdirectorios
- Usa nombres de archivo descriptivos
- Optimiza las imágenes para la web (preferiblemente menos de 500 KB)

## Varios idiomas

El sitio admite 7 idiomas: inglés (`docs/`), español (`es`), chino simplificado (`zh-CN`), chino tradicional (`zh-TW`), japonés (`ja`), alemán (`de`) y francés (`fr`).

- Las páginas de cada idioma van en `docs/<lang>/`, con una estructura de directorios que se corresponde uno a uno con la versión en inglés
- Los enlaces internos de las traducciones deben llevar el prefijo del idioma, por ejemplo `/es/guide/usage`
- Los textos de la página de inicio están en el frontmatter `home:` de `index.md`
- Al añadir un idioma, actualiza simultáneamente `STR`, `MD` y `locales` en `docs/.vitepress/config.ts`

## Código de conducta

Este proyecto sigue un código de conducta. Al participar, aceptas:
- Ser respetuoso e inclusivo
- Centrarte en comentarios constructivos
- Asumir la responsabilidad de tus errores

Consulta [CODE_OF_CONDUCT.md](https://github.com/nicasa-project/nicasa-support/blob/main/CODE_OF_CONDUCT.md) para más detalles.

## ¿Preguntas?

Si tienes preguntas sobre cómo contribuir:
- Consulta las [incidencias](https://github.com/nicasa-project/nicasa-support/issues) y los [debates](https://github.com/nicasa-project/nicasa-support/discussions) existentes
- Crea una nueva incidencia si es necesario
- Contacta con los mantenedores

¡Gracias por ayudar a mejorar la documentación de soporte de Nicasa! 🎉
