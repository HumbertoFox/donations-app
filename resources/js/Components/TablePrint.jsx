import { formatDateToLocal } from '@/utils/dataFormat';

export default function TablePrint({
    sheetheader,
    guide,
    user,
    donor,
    donation,
    colleted_date,
    vehiclePlate,
    observation }) {
    return (
        <table className='w-full text-xs border-[1px] border-gray-700'>
            <thead>
                {sheetheader && (
                    <tr className='bg-gray-300'>
                        <th colSpan={12}>DEPARTAMENTO DE COLETA E ATENDIMENTO AO DOADOR</th>
                    </tr>
                )}
                <tr className='bg-gray-300'>
                    <th colSpan={4}>{guide}</th>
                    <th colSpan={4}>ATENDENTE DO CADASTRO : {donation?.user?.name ?? 'N/A'}</th>
                    <th colSpan={4}>PLACA DO VEÍCULO : {vehiclePlate ?? 'N/A'}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='w-[100px] bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Doador :</td>
                    <td colSpan={9} className='border-[1px] border-gray-700 px-2'>{donor?.name ?? 'N/A'}</td>
                    <td rowSpan={2} className='w-[100px] bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Ficha nº :</td>
                    <td rowSpan={2} className='w-[100px] border-[1px] border-gray-700 text-center px-2'>{'01'}</td>
                </tr>
                <tr>
                    <td className='bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Endereço :</td>
                    <td colSpan={7} className='border-[1px] border-gray-700 px-2'>{donor?.address?.zipcode?.street ?? 'N/A'}</td>
                    <td className='w-[100px] bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Nº CS/ED :</td>
                    <td className='w-[100px] border-[1px] border-gray-700 text-center px-2'>{donor?.address?.number_residence ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={1} className='bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Bairro :</td>
                    <td colSpan={2} className='border-[1px] border-gray-700 px-2'>{donor?.address?.zipcode?.district ?? 'N/A'}</td>
                    <td className='w-[100px] bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Cidade :</td>
                    <td colSpan={2} className='border-[1px] border-gray-700 px-2'>{donor?.address?.zipcode?.city ?? 'N/A'}</td>
                    <td className='w-[100px] bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Contatos :</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donor?.phone?.phone ?? 'N/A'}</td>
                    <td colSpan={2} className='border-[1px] border-gray-700 text-center px-2'>{donor?.phone?.contact ?? 'N/A'}</td>
                    <td colSpan={2} className='border-[1px] border-gray-700 text-center px-2'>{donor?.phone?.contact_old ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={1} className='bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Edifício :</td>
                    <td colSpan={7} className='border-[1px] border-gray-700 px-2'>{donor?.address?.building ?? 'N/A'}</td>
                    <td className='bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Bloco :</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donor?.address?.block ?? 'N/A'}</td>
                    <td className='bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Apt/Sala :</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donor?.address?.livingapartmentroom ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td className='bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>P. de Refer.:</td>
                    <td colSpan={11} className='border-[1px] border-gray-700 px-2'>{donor?.address?.reference_point ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td className='bg-gray-300 border-[1px] border-gray-700 font-bold text-right pr-2'>Obs.:</td>
                    <td colSpan={11} className='border-[1px] border-gray-700 px-2'>{observation ? observation : 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={6} className='bg-gray-300 border-y-[1px] border-gray-700 font-bold text-center px-2'>{`ATENDENTE DA COLETA : ${user?.name ? user.name : 'N/A'}`}</td>
                    <td colSpan={6} className='bg-gray-300 border-y-[1px] border-gray-700 font-bold text-center px-2'>{`DATA DA COLETA : ${colleted_date ? formatDateToLocal(colleted_date) : 'N/A'}`}</td>
                </tr>
                <tr>
                    <td rowSpan={10} className='w-[100px] bg-gray-300 border-[1px] border-gray-700 font-bold text-right px-2'>Doação :</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[0]?.item?.item ?? 'N/A'}</td>
                    <td className='w-[100px] border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='w-[100px] border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[0]?.quantity ?? 'N/A'}</td>
                    <td rowSpan={10} className='bg-gray-300 border-[1px] border-gray-700 font-bold text-right px-2'>Doação :</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[1]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[1]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[2]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[2]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[3]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[3]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[4]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[4]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[5]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[5]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[6]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[6]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[7]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[7]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[8]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[8]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[9]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[9]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[10]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[10]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[11]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[11]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[12]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[12]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[13]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[13]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[14]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[14]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[15]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[15]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[16]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[16]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[17]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[17]?.quantity ?? 'N/A'}</td>
                </tr>
                <tr>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[18]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[18]?.quantity ?? 'N/A'}</td>
                    <td colSpan={3} className='border-[1px] border-gray-700 px-2'>{donation?.donation_items[19]?.item?.item ?? 'N/A'}</td>
                    <td className='border-[1px] border-gray-700 font-bold text-right px-2'>Quantid.:</td>
                    <td className='border-[1px] border-gray-700 text-center px-2'>{donation?.donation_items[19]?.quantity ?? 'N/A'}</td>
                </tr>
            </tbody>
        </table>
    );
}