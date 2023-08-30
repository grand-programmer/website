<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpendatafilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('opendatafiles', function (Blueprint $table) {
            $table->id();
            $table->integer('item_id');
            $table->string('xml')->nullable();
            $table->string('csv')->nullable();
            $table->string('json')->nullable();
            $table->string('xls')->nullable();
            $table->string('rdf')->nullable();
            $table->integer('quarter')->nullable();
            $table->integer('year')->nullable();
            $table->integer('relation_id')->nullable();
            $table->string('language')->default('uz');
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
        Schema::dropIfExists('opendatafiles');
    }
}
