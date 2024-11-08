<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'zipcode_id',
        'type_residence',
        'number_residence',
        'building',
        'block',
        'livingapartmentroom',
        'reference_point',
    ];

    public function zipcode(): BelongsTo
    {
        return $this->belongsTo(Zipcode::class, 'zipcode_id');
    }

    public function donor(): BelongsTo
    {
        return $this->belongsTo(Donor::class, 'address_id');
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'address_id');
    }

    public function driver(): HasOne
    {
        return $this->hasOne(Driver::class, 'id', 'address_id');
    }

    public function helper(): BelongsTo
    {
        return $this->belongsTo(Helper::class, 'address_id');
    }
}