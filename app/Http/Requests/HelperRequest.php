<?php

namespace App\Http\Requests;

use App\Models\Cpf;
use App\Models\Helper;
use App\Models\Phone;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class HelperRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        if ($this->route('id')) {
            $helper = Helper::findOrFail($this->route('id'));
        }

        return [
            'name' => ['required', 'string', 'max:255'],
            'cpf' => [
                'required',
                'string',
                'max:11',
                $this->route('id')
                    ? Rule::unique(Cpf::class)->ignore($helper->cpf_id)
                    : 'unique:cpfs,cpf',
            ],
            'birthdate' => ['required', 'date'],
            'phone' => [
                'required',
                'string',
                'max:15',
                $this->route('id')
                    ? Rule::unique(Phone::class)->ignore($helper->phone_id)
                    : 'unique:phones,phone',
            ],
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