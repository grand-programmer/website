<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApparatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apparat', function (Blueprint $table) {
            $table->id();
            $table->string('fio');
            $table->string('lavozimi');
            $table->string('qabul')->nullable();
            $table->string('phone');
            $table->string('add_phone')->nullable();
            $table->string('email')->nullable();
            $table->integer('rahbariyat')->default(0);
            $table->string('org_name')->nullable();
            $table->string('image')->nullable();
            $table->integer('sort')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apparat');
    }
}
