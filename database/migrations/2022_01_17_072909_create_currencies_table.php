<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurrenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('CODE');
            $table->string('LNGA_TPCD');
            $table->string('CD_ID');
            $table->string('CD_NM');
            $table->string('CD_DESC');
            $table->string('CD_ORDR');
            $table->string('USE_YN');
            $table->string('CD_ID_L');
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
        Schema::dropIfExists('currencies');
    }
}
