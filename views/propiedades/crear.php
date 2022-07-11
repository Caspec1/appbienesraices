<main class="contenedor seccion">
        <h2>Crear</h2>
        <a href="/admin" class="boton boton-verde">Volver</a>

        <?php foreach ($errores as $error): ?>
        <div class="alerta error">
            <?php echo $error; ?>
        </div>
        <?php endforeach; ?>
        
        <form action="/propiedades/crear" class="formulario" method="POST" enctype="multipart/form-data">
            <?php include __DIR__ . '/formulario.php'; ?>

            <input type="submit" value='Crear Propiedad' class="boton boton-verde">
        </form>
</main>