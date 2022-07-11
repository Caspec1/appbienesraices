<?php
require __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();
require 'funciones.php';
require 'config/database.php';

// Contar a Base de Datos
$db = conectarDB();

use Model\ActiveRecord;

ActiveRecord::setDB($db);