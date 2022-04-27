<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAdditionalFieldsToUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('type')->default(1);
            $table->string('first_name')->nullable();
            $table->string('sur_name')->nullable();
            $table->string('mid_name')->nullable();
            $table->string('birth_date')->nullable();
            $table->string('ctzn')->nullable();
            $table->string('per_adr')->nullable();
            $table->integer('tin')->nullable();
            $table->string('gd')->nullable();
            $table->string('natn')->nullable();
            $table->string('_pport_issue_date')->nullable();
            $table->string('_pport_expr_date')->nullable();
            $table->string('pport_no')->nullable();
            $table->integer('pin')->nullable();
            $table->string('birth_place')->nullable();
            $table->string('valid')->nullable();
            $table->string('user_type')->nullable();
            $table->string('ret_cd')->nullable();
            $table->text('legal_info')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('type');
            $table->dropColumn('first_name');
            $table->dropColumn('sur_name');
            $table->dropColumn('mid_name');
            $table->dropColumn('birth_date');
            $table->dropColumn('ctzn');
            $table->dropColumn('per_adr');
            $table->dropColumn('tin');
            $table->dropColumn('gd');
            $table->dropColumn('natn');
            $table->dropColumn('_pport_issue_date');
            $table->dropColumn('_pport_expr_date');
            $table->dropColumn('pport_no');
            $table->dropColumn('pin');
            $table->dropColumn('birth_place');
            $table->dropColumn('valid');
            $table->dropColumn('user_type');
            $table->dropColumn('ret_cd');
            $table->dropColumn('legal_info');
        });
    }
}
