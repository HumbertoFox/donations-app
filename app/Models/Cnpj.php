<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnpj extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'cnpj',
        'corporatename'
    ];

    public function donors(): HasMany
    {
        return $this->hasMany(Donor::class);
    }
}