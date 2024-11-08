<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'item',
        'user_id',
    ];

    public function donation_items(): HasMany
    {
        return $this->hasMany(Donation_item::class, 'item_id');
    }
}