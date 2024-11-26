import { Link, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function ConfirmDelete({ id, routeName, children }) {
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        Swal.fire({
            title: "Tem Certeza?",
            text: "Você não poderá reverter esta ação!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3b82f6",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Sim, Excluir!",
            cancelButtonText: "Cancelar",
            focusCancel: true,
        }).then(result => {
            if (result.isConfirmed) {
                destroy(route(routeName, id));
            };
        });
    }
    return (
        <Link onClick={handleDelete}>
            {children}
        </Link>
    );
}