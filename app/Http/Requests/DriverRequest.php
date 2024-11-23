<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DriverRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'cpf' => ['required', 'string', 'max:11'],
            'birthdate' => ['required|date'],
            'cnh' => ['required', 'string', 'max:11', 'unique:cnhs,cnh'],
            'phone' => ['required', 'string', 'max:15'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255'],
            'zipcode' => ['required', 'string', 'max:9'],
            'city' => ['required', 'string', 'max:255'],
            'district' => ['required', 'string', 'max:255'],
            'street' => ['required', 'string', 'max:255'],
            'number_residence' => ['required', 'string', 'max:50'],
            'type_residence' => ['required', 'string', 'max:10'],
            'building' => ['nullable', 'string', 'max:255'],
            'block' => ['nullable', 'string', 'max:50'],
            'livingapartmentroom' => ['nullable', 'string', 'max:50'],
            'reference_point' => ['nullable', 'string', 'max:255'],
        ];
    }
}