<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cnhs', function (Blueprint $table) {
            $table->id();
            $table->string('cnh')->unique();
            $table->foreignId('cpf_id')->constrained('cpfs');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cnhs');
    }
};