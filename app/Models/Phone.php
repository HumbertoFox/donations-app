<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Phone extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'phone',
        'contact',
        'contact_old',
        'email'
    ];

    public function donors(): HasOne
    {
        return $this->hasOne(Donor::class);
    }

    public function users(): HasOne
    {
        return $this->hasOne(User::class);
    }
}