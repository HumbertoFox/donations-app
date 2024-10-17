<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cpf extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'cpf',
        'name',
        'birthdate'
    ];

    public function users(): HasOne
    {
        return $this->hasOne(User::class);
    }
}