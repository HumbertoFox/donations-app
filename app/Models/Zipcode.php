<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Zipcode extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'zipcode',
        'city',
        'district',
        'street',
    ];

    public function addresses(): HasMany
    {
        return $this->hasMany(Address::class, 'id', 'zipcode_id');
    }
}