<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTranslatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_translates', function (Blueprint $table) {
            $table->id();
            $table->integer('news_id');
            $table->string('language')->default('uzk');
            $table->string('title');
            $table->longText('description')->nullable();
            $table->longText('short')->nullable();
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
        Schema::dropIfExists('news_translates');
    }
}
