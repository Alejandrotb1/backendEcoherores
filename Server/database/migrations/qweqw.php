<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropForeignKeys extends Migration
{
    public function up()
    {
        // Eliminar la restricción de la clave externa en la tabla user_role
        Schema::table('user_role', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
            $table->dropForeign(['user_id']);
        });
    }

    public function down()
    {
        // Si es necesario, puedes volver a agregar las claves extranjeras aquí
        Schema::table('user_role', function (Blueprint $table) {
            $table->foreign('role_id')->references('id')->on('roles');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }
}
