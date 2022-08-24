<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('db2_odbc_stat')->create('website', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('month')->default(0);
            $table->integer('year')->default(2022);
            $table->integer('rejim')->default(0);  // 0- Им, 1-Эк, 3- All
            $table->text('data');
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
        if (Schema::connection('db2_odbc_stat')->hasTable('website'))
            Schema::connection('db2_odbc_stat')->drop('website');
    }
}
