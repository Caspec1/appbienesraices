<div class="contenedor-anuncios" data-cy="listado-propiedades">
    <?php foreach($propiedades as $propiedad) : ?>
        <div class="anuncio" data-cy="anuncio">
            <img loading="lazy" decoding="async" src="/imagenes/<?php echo $propiedad->imagen;?>" alt="imagen">
            <div class="contenido-anuncio">
                <h3><?php echo $propiedad->titulo;?></h3>
                <p><?php echo $propiedad->descripcion;?></p>
                <p class="precio"><?php echo $propiedad->precio;?></p>
                <ul class="iconos-caracteristicas">
                    <li>
                        <img class="icono" src="build/img/icono_wc.svg" alt="icono wc" loading="lazy">
                        <p><?php echo $propiedad->wc;?></p>
                    </li>
                    <li>
                        <img class="icono" src="build/img/icono_estacionamiento.svg" alt="icono estacionamiento" loading="lazy">
                        <p><?php echo $propiedad->estacionamiento;?></p>
                    </li>
                    <li>
                        <img class="icono" src="build/img/icono_dormitorio.svg" alt="icono habitaciones" loading="lazy">
                        <p><?php echo $propiedad->habitaciones;?></p>
                    </li>
                </ul>
                <a data-cy="enlace-propiedad" href="/propiedad?id=<?php echo $propiedad->id; ?>" class="boton-amarillo-block">Ver más sobre la propiedad</a>
            </div><!--.contenido-anuncio-->
        </div> <!--.anuncio-->
    <?php endforeach; ?>
</div><!--.contenedor-anuncio-->