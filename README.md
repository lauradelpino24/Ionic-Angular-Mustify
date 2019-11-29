# Ionic-Angular-Mustify
Repositorio para mi app de Mustify, una app de música que usa API de Spotify

La app consiste en 3 páginas:
  - Un home donde encontraremos una selección de canciones "Top tracks".
  - Un search donde podremos buscar los artistas.
  - Una página de artista, donde podremos encontrar las canciones de dicho artista.

En primer lugar: hay que actualizar el token de Spotify, ya que tan sólo dura 1h.
Para generar el token, es necesario poner un client_id y secret_id propio, que puedes obtener registrandonte en https://developer.spotify.com/dashboard/.
Para ello uso PostMan como muestro en la siguiente imagen:

![img-postman](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/postman.png)

Bien, comencemos. El home:
![img-home](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/home.png)

Básicamente recoge los datos de la API y los integra en el componente tarjetas.
