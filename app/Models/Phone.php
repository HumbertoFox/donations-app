<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Phone extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'phone',
        'contact',
        'contact_old',
        'email',
    ];

    public function donor(): BelongsTo
    {
        return $this->belongsTo(Donor::class, 'phone_id');
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'phone_id');
    }

    public function driver(): HasOne
    {
        return $this->hasOne(Driver::class, 'phone_id');
    }

    public function helper(): BelongsTo
    {
        return $this->belongsTo(Helper::class, 'phone_id');
    }
}