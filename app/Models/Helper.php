<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Helper extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'cpf_id',
        'phone_id',
        'address_id',
        'user_id',
    ];

    public function cpf(): HasOne
    {
        return $this->hasOne(Cpf::class, 'id', 'cpf_id');
    }

    public function phone(): HasOne
    {
        return $this->hasOne(Phone::class, 'id', 'phone_id');
    }

    public function address(): HasOne
    {
        return $this->hasOne(Address::class, 'id', 'address_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}