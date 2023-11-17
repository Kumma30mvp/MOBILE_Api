# MOBILE_Api
Entrega trabajo DBP - Pasar mi pág web a movil con React Native
-----------------------------------------------------------------------------
## Paso 01
Instala las dependencias del proyecto utilizando npm o Yarn:

```shell
npm install
# o
yarn install
```
## Paso 02
Inicia el servidor de desarrollo:

```shell
expo start
```

## Paso 03
Abre la aplicación Expo Go en tu dispositivo móvil (disponible en la App Store o Google Play) y escanea el código QR que aparece en la terminal o en la página web que se abrirá.

## Conclusiones y Anotaciones

#### API: URLSCAN.IO/v1**
- `Descripción del sistema:` Aplicación diseñada para analizar URL mediante la web, con la finalidad de obtener una descripción certera sobre el contenido que habrá en la página, de esta manera se evita caer en links maliciosos, siendo los más comunes phishing, troyanos y algunos malware.
- `Casos de uso del sistema:` 
  - **Input:** Un usuario necesita saber si el enlace que le ha llegado de su amigo por whatsapp no contiene virus o no se encuentra comprometido. por lo que por un método POST ingresa la URL mencionada en el recuadro. Cabe resaltar que creamos un servidor porxy que se esté ejecutando en el peurto 4000 para que por medio de este podamos realizar la solicitud, lo cual nos devuelve un output.
  - **Output:** Acontinuación se le muestra al usuario si su petición ha sido aceptada y se tiene registro en la base de datos de URLSCAN.IO, de lo contrario se le mostrará un mensaje que no se tiene información al respecto o no está registrado en su base de datos.
  - **Visibilidad y Link** : Existe un pequeño disclaimer y es que al tener accesso a la parte gratuita del API ciertos enlaces apareceran con la visibilidad privada, lo cual, nos indica que tenemos que subir de "nivel"  para acceder a la información de su página. Adicionalmente, se le mostrará al usuario un link, mediante el cual puede acceder a ver los resultados del análisis que se le hizo a su enlace URL, sin exponerse a riesgos de por medio.
  - **Disclaimer**: Los archivos si bien no están dentro de carpetas específicas, se sobre-entiende su uso (además mi directorio es de por sí bastante extenso)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
