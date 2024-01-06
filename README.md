### app-modyo
```
Aplicacion full stack en produccion link : http://login-modyo-vue.s3-website-us-west-1.amazonaws.com/#/
Despliegue en amazon aws S3

Documentación del frontend :
Aplicación creada con vue cli y vuejs3 y en el backend con SpringBoot 3.X.X:
Permite crear usuarios a través de un formulario de registro que se encuentra validado a través del backend con springboot, para validar contraseñas y usuarios no existentes en la base de datos (Postgresql).
-El email es la restricción de creación de usuarios y es única.
-A través de un login podemos ingresar a una plataforma y revisar las tareas o proyectos en los cuales estamos asignados como usuarios previamente validados por el administrador, por ende, si crea un usuario nuevo y se logea aparecerán algunos mensajes informando que no existen datos para mostrar aún,como el perfil,tareas y/o proyectos.
-A través de una api publica se cargan previamente las tareas y/o proyectos en los cuales están asignados los usuarios, podremos visualizar esta información en 2 usuarios de prueba y test creados para este propósito.
Usuario : dev1@correoempresa.com y/o dev_front@correoempresa.com (cualquiera de las 2)
Password :12345,(ambos)
-El usuario puede crear entradas a través de un botón de tipo fixed a la derecha de la pantalla en el menu “bitácoras”,donde se abrirá un modal que permite el ingreso de fechas y descripciones, el propósito es que el usuario pueda agregar sus avances o recordatorios de tareas que debe cumplir para luego poder completarlas o dejarlas pendientes,eliminarlas,actualizarlas según sea.
-Es posible acceder a su perfil que también se encuentra cargado de una api una vez que se valide su información.
-El usuario se puede desloguear y las rutas se encuentran protegidas por ende no es posible volver a acceder una vez deslogueado de la aplicación.
-Las bitácoras o avances agregados se almacenan en una api de  firebase realtime database.


```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
Se recomienda cambiar el puerto ej : --port 8081 ya que el backend por defecto esta en 8080.
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
