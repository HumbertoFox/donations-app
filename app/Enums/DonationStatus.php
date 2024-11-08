<?php

namespace App\Enums;

enum DonationStatus: string
{
    case PENDING = "Pendente";
    case SCHEDULED = "Agendada";
    case COLLECTED = "Coletada";
    case CANCELED = "Cancelada";

    public static function getNames(): array
    {
        return [
            self::PENDING->name => self::PENDING->value,
            self::SCHEDULED->name => self::SCHEDULED->value,
            self::COLLECTED->name => self::COLLECTED->value,
            self::CANCELED->name => self::CANCELED->value,
        ];
    }

    public function label(): string
    {
        return $this->value;
    }

    public static function getAll(): array
    {
        return array_map(fn($case) => $case->value, self::cases());
    }

    public static function isValid(string $value): bool
    {
        return in_array($value, array_map(fn($case) => $case->value, self::cases()));
    }
}