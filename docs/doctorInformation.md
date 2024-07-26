La vista es una dashboard para cuando inicien sesión los médicos en la plataforma.

Se agregó un componente Header para poder manejar de forma general los diferentes encabezados en todas las vistas de la app web, El componente Header funciona como Padre para los otros componentes que serán renderizados dentro de él, estos toman el lugar del objeto 'children' dentro del archivo.

Con respecto al contenido, el componente LateralMenu es, al igual que Header, un componente Padre para poder renderizar el mismo estilo dentro de las diferentes vistas de los diferentes usuarios. Dentro se encuentra la lista con las diferentes opciones y herramientas que cuenta el usuario médico.

