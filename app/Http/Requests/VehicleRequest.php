<?php

namespace App\Http\Requests;

use App\Models\Vehicle;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VehicleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        if ($this->route('id')) {
            $vehicle = Vehicle::findOrFail($this->route('id'));
        }

        return [
            'renavam' => [
                'required',
                'string',
                'max:100',
                $this->route('id')
                    ? Rule::unique(Vehicle::class)->ignore($vehicle->id)
                    : 'unique:vehicles,renavam',
            ],
            'plate' => [
                'required',
                'string',
                'uppercase',
                'max:10',
                $this->route('id')
                    ? Rule::unique(Vehicle::class)->ignore($vehicle->id)
                    : 'unique:vehicles,plate',
            ],
            'km' => ['required', 'string', 'min:0'],
            'model' => ['required', 'string', 'uppercase', 'max:150'],
            'automaker' => ['required', 'string', 'uppercase', 'max:100'],
        ];
    }
}