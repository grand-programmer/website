<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatserviceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statservice', function (Blueprint $table) {
            $table->id();
            $table->integer('step');
            $table->string('org_name');
            $table->string('pin');
            $table->integer('user_id');
            $table->string('tin');
            $table->string('address');
            $table->string('phone');
            $table->string('email');

            $table->string('servicetype')->nullable();
            $table->string('boshqarma')->nullable();
            $table->string('post')->nullable();
            $table->string('rejim')->nullable();
            $table->string('tftn')->nullable();
            $table->string('shartnoma')->nullable();
            $table->string('country')->nullable();
            $table->string('byud')->nullable();
            $table->date('byudsanadan')->nullable();
            $table->date('byudsanagacha')->nullable();
            $table->text('grafalar')->nullable();
            $table->string('status')->nullable();
            $table->string('statusNm')->nullable();
            $table->string('comment')->nullable();
            $table->integer('count')->nullable();
            $table->text('additional')->nullable();
            $table->double('price')->nullable();
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
        Schema::dropIfExists('statservice');
    }
}
