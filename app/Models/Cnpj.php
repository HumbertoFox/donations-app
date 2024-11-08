<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnpj extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'cnpj',
        'corporatename',
    ];

    public function donor(): BelongsTo
    {
        return $this->belongsTo(Donor::class, 'cnpj_id')->withDefault();
    }
}