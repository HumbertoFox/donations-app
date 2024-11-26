<?php

namespace App\Http\Requests;

use App\Models\Cnpj;
use App\Models\Donor;
use App\Models\Phone;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DonorRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        if ($this->route('id')) {
            $donor = Donor::findOrFail($this->route('id'));
        }

        return [
            'name' => ['required', 'string', 'max:255'],
            'phone' => [
                'required',
                'string',
                'max:15',
                $this->route('id')
                    ? Rule::unique(Phone::class)->ignore($donor->phone_id)
                    : 'unique:phones,phone',
            ],
            'contact' => ['required', 'string', 'max:30'],
            'contact_old' => ['nullable', 'string', 'max:30'],
            'cnpj' => [
                'nullable',
                'string',
                'max:255',
                $this->route('id')
                    ? Rule::unique(Cnpj::class)->ignore($donor->cnpj_id)
                    : 'unique:cnpjs,cnpj',
            ],
            'corporatename' => ['nullable', 'string', 'max:255'],
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