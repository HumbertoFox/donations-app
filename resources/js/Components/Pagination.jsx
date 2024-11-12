import { Link } from '@inertiajs/react';
import Icon from './Icon';

export default function Pagination({ links, currentPage }) {
    return (
        <div className='flex justify-center mt-6 space-x-2'>
            {links.filter((link, index) => {
                const isPrevious = link.label === "&laquo; Anterior";
                const isNext = link.label === "Próximo &raquo;";
                const isCurrent = link.active;

                const isPageBeforeORAfter = index === currentPage || index === currentPage - 1 || index === currentPage + 1;

                return isPrevious || isNext || isCurrent || isPageBeforeORAfter;
            }).map((link, index) => (
                <Link
                    key={index}
                    href={link.url ? link.url : '#'}
                    as='button'
                    className={`w-9 h-9 flex justify-center items-center rounded-full transition-colors duration-500 ${link.active
                        ? 'bg-blue-600 text-white border-blue-600 cursor-default'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:text-blue-600'}
                        ${!link.url ? 'cursor-no-drop opacity-50' : ''}`}
                    onClick={e => !link.url && e.preventDefault()}
                    aria-label={link.label === '&laquo; Anterior' ?
                        'Previous Page'
                        : link.label === 'Próximo &raquo;'
                            ? 'Next Page' :
                            link.label}
                >
                    {link.label === '&laquo; Anterior'
                        ? <Icon icon='fa-regular fa-circle-left' className='w-8 h-8' />
                        : link.label === 'Próximo &raquo;'
                            ? <Icon icon='fa-regular fa-circle-right' className='w-8 h-8' />
                            : link.label}
                </Link>
            ))}
        </div>
    );
}