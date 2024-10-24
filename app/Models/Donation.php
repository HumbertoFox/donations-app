<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Donation extends Model
{
    use HasFactory;

    protected $fillable = [
        'donor_id',
        'user_id'
    ];

    public function donor(): HasOne
    {
        return $this->hasOne(Donor::class, 'id', 'donor_id');
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function donation_items(): HasMany
    {
        return $this->hasMany(Donation_item::class, 'donation_id');
    }
}