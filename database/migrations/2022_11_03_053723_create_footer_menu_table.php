<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFooterMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('footer_menu', function (Blueprint $table) {
            $table->id();
            $table->integer('type')->default(0)->nullable();
            $table->string('title')->nullable();
            $table->integer('relation_id');
            $table->string('url')->nullable();
            $table->integer('parent')->nullable();
            $table->integer('sort_number')->default(0)->nullable();
            $table->integer('status')->default(0)->nullable();
            $table->integer('deleted')->default(0)->nullable();
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
        Schema::dropIfExists('footer_menu');
    }
}
