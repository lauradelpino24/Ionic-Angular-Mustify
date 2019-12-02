# Ionic-Angular-Mustify
Repositorio para mi app de Mustify, una app de música que usa API de Spotify

La app consiste en 3 páginas:
  - Un home donde encontraremos una selección de canciones "Top tracks".
  - Un search donde podremos buscar los artistas.
  - Una página de artista, donde podremos encontrar las canciones de dicho artista.

En primer lugar: hay que actualizar el token de Spotify, ya que tan sólo dura 1h.
Para generar el token, es necesario hacer una peticion POST a https://accounts.spotify.com/api/token poniendo un client_id y client_secret propio, que puedes obtener registrándote en https://developer.spotify.com/dashboard/.
Para ello uso PostMan como muestro en la siguiente imagen:

![img-postman](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/postman.png)

UNA VEZ OBTENIDO EL TOKEN ES NECESARIO ACTUALIZARLO EN EL SERVICIO DE LA APLICACION, PONIENDO BEARER DELANTE DEL TOKEN.

Bien, comencemos. El home básicamente recoge los datos de la API y los integra en el componente tarjetas:

![img-home](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/home.png)
![gif-home](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/home.gif)

Ahora, pasamos al search. Simplemente tiene un buscador, poniendo el nombre de un cantante o grupo. Te mostrará los resultados, además puedes pulsar en el para que te muestre sus canciones.

![img-search](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/search.png)
![gif-](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/search.gif)

Y por último, la página del artista. Donde como ya dije antes, puedes encontrar las canciones más famosas (Top tracks) del artista.
Además, contiene un botón del volver para navegar de nuevo al buscador.

![img-artista](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/artista.png)
![gif-artista](https://github.com/lauradelpino24/Ionic-Angular-Mustify/blob/master/img-gif-for-readme/artist.gif)


VIDEO EXPLICATIVO: https://youtu.be/e962GMWvW0M
