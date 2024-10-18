<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Driver extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'cnh_id',
        'phone_id',
        'address_id',
        'user_id'
    ];

    public function cnh(): HasOne
    {
        return $this->hasO(Cnh::class);
    }

    public function phone(): HasOne
    {
        return $this->hasOne(Phone::class);
    }

    public function address(): HasOne
    {
        return $this->hasOne(Address::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}