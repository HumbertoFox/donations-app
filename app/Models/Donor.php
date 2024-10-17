<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Donor extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'phone',
        'cnpj',
        'address_id',
        'user_id'
    ];

    public function phones(): HasOne
    {
        return $this->hasOne(Phone::class);
    }

    public function addresses(): HasOne
    {
        return $this->hasOne(Address::class);
    }

    public function cnpjs(): HasOne
    {
        return $this->hasOne(Cnpj::class);
    }
}