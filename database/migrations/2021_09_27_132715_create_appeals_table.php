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
            $table->string('fio');
            $table->smallInteger('appeal_type')->default(0);
            $table->string('address')->nullable();
            $table->string('email')->nullable();
            $table->string('phone');
            $table->integer('authority')->nullable();
            $table->integer('sphere')->nullable();
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
