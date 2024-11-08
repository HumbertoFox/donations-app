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
        'phone_id',
        'cnpj_id',
        'address_id',
        'user_id',
    ];

    public function phone(): HasOne
    {
        return $this->hasOne(Phone::class, 'id', 'phone_id');
    }

    public function address(): HasOne
    {
        return $this->hasOne(Address::class, 'id', 'address_id');
    }

    public function cnpj(): HasOne
    {
        return $this->hasOne(Cnpj::class, 'id', 'cnpj_id')->withDefault();
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}