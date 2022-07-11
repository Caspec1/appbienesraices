<fieldset>
                <legend>Información General</legend>
                
                <label for="titulo">Título:</label>
                <input type="text" id="titulo" name="propiedad[titulo]" placeholder="Título Propiedad" value="<?php echo s($propiedad->titulo); ?>">

                <label for="precio">Precio:</label>
                <input type="number" id="precio" name ="propiedad[precio]" placeholder="Precio Propiedad" min="1" value="<?php echo s($propiedad->precio); ?>">

                <label for="imagen">Imagen:</label>
                <input type="file" id="imagen" accept="image/jpeg, image/png" name="propiedad[imagen]">

                <?php if($propiedad->imagen) : ?>
                    <img src="/imagenes/<?php echo $propiedad->imagen ?>" class="imagen-small" alt="imagen propiedad">
                <?php endif; ?>

                <label for="descripcion">Descripción:</label>
                <textarea id="descripcion" name="propiedad[descripcion]" placeholder="Descripción de la propiedad"><?php echo s($propiedad->descripcion); ?></textarea>
            </fieldset>

            <fieldset>
                <legend>Información de la propiedad</legend>

                <label for="habitaciones">Habitaciones:</label>
                <input type="number" id="habitaciones" name="propiedad[habitaciones]" placeholder="Ej: 3" min="1" max="9" value="<?php echo s($propiedad->habitaciones); ?>">

                <label for="wc">Baños:</label>
                <input type="number" id="wc" name="propiedad[wc]" placeholder="Ej: 3" min="1" max="9" value="<?php echo s($propiedad->wc); ?>">
                
                <label for="estacionamiento">Estacionamiento:</label>
                <input type="number" id="estacionamiendo" name="propiedad[estacionamiento]" placeholder="Ej: 3" min="1" max="9" value="<?php echo s($propiedad->estacionamiento); ?>">
            </fieldset>

            <fieldset> 
                <legend>Vendedor</legend>
                    <label for="vendedor">Vendedor</label>
                    <select name="propiedad[vendedorId]" id="vendedor">
                        <option value="" selected>-- Seleccione --</option>
                        <?php foreach($vendedores as $vendedor): ?>
                            <option 
                            <?php echo $propiedad->vendedorId === $vendedor->id ? 'selected' : '' ?>
                                value="<?php echo s($vendedor->id); ?>">
                                <?php echo s($vendedor->nombre) . " " . s($vendedor->apellido); ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
            </fieldset>