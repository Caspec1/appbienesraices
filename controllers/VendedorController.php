<?php

namespace Controllers;

use MVC\Router;
use Model\Vendedor;


class VendedorController {
    public static function crear(Router $router) {

        $errores = Vendedor::getErrores();
        $vendedor = new Vendedor;

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Crear nueva instancia
            $vendedor = new Vendedor($_POST['vendedor']);
        
            // Validar que no haya campos vacios
            $errores = $vendedor->validar();
        
            // Si errores está vacío
            if(empty($errores)) {
                $vendedor->guardar();
            }
        }

        $router->render('vendedores/crear', [
            'errores' => $errores,
            'vendedor' => $vendedor
        ]);
    }
    public static function actualizar(Router $router) {

        $id = validarORedireccionar('/admin');

        $vendedor = Vendedor::find($id);
        $errores = Vendedor::getErrores();

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
            // Asignar valores
            $args = $_POST['vendedor'];
        
            // Sincronizar objeto en memoria con lo que el usuario escribió
            $vendedor->sincronizar($args);
            
            // Validación
            $errores = $vendedor->validar();
        
            if(empty($errores)) {
                $vendedor->guardar();
            }
        }

        $router->render('vendedores/actualizar', [
            'errores' => $errores,
            'vendedor' => $vendedor
        ]);


    }
    public static function eliminar() {
        if($_SERVER['REQUEST_METHOD'] === 'POST') {
           

            // Validar ID
            $id = $_POST['id'];
            $id = filter_var($id, FILTER_VALIDATE_INT);

            if($id) {

                $tipo = $_POST['tipo'];
                    if(validarTipoContenido($tipo)) {
                        $vendedor = Vendedor::find($id);
                        $vendedor->eliminar();
                    }
                }
            }
        }
    }
