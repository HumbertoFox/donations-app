<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VehicleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'renavam' => ['required', 'string', 'max:100', 'unique:vehicles,renavam'],
            'plate' => ['required', 'string', 'uppercase', 'max:10', 'unique:vehicles,plate'],
            'km' => ['required', 'string', 'min:0'],
            'model' => ['required', 'string', 'uppercase', 'max:150'],
            'automaker' => ['required', 'string', 'uppercase', 'max:100'],
        ];
    }
}