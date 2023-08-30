<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOpenDataItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('open_data_items', function (Blueprint $table) {
            $table->id();
            $table->integer('relation_id')->nullable();
            $table->string('title');
            $table->string('code')->nullable();
            $table->string('type')->default(1);
            $table->string('contact');
            $table->bigInteger('phone');
            $table->string('language')->default('uz');
            $table->string('boshqarma');
            $table->string('email')->nullable();
            $table->integer('sort')->default(100);
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
        Schema::dropIfExists('open_data_items');
    }
}
