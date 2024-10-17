<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'zipcode',
        'type_residence',
        'number_residence',
        'building',
        'block',
        'livingapartmentroom',
        'reference_point'
    ];

    public function zipcodes(): HasOne
    {
        return $this->hasOne(Zipcode::class);
    }

    public function donors(): HasMany
    {
        return $this->hasMany(Donor::class);
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}