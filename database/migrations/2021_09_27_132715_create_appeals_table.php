<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppealsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appeals', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('lastname')->nullable();
            $table->string('surname')->nullable();
            $table->string('address')->nullable();
            $table->string('email')->nullable();
            $table->string('phone');
            $table->integer('state')->default(0);
            $table->boolean('retry')->default(false);
            $table->boolean('yur_shaxs')->default(false);
            $table->string('work')->nullable();
            $table->date('date_birth')->nullable();
            $table->text('text');
            $table->string('number')->nullable();
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
        Schema::dropIfExists('appeals');
    }
}
