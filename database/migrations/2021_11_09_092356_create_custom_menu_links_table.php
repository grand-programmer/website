<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomMenuLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_menu_links', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('url');
            $table->integer('status')->nullable()->default(0);
            $table->integer('deleted')->nullable()->default(0);
            $table->integer('sort_number')->default(0);
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
        Schema::dropIfExists('custom_menu_links');
    }
}
