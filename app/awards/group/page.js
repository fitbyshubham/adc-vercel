'use client';
import Filters from '@/app/components/Filters';
import Text from '@/app/components/Text';
import { useSearchParams } from 'next/navigation';
import { awardsFilters } from '../../utils/filters';
import { notFound } from 'next/navigation';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import { chunkArray } from '@/app/utils/arrayChunks';

const Category = () => {
	const searchParams = useSearchParams();
	const type = searchParams.get('type');
	const pageExist = awardsFilters.map((page) => page.id).includes(type);

	if (!pageExist) {
		return notFound();
	}

	return (
		<div className='pt-10 flex flex-col gap-y-[100px]'>
			<div className='flex justify-start pl-8'>
				<Filters filters={awardsFilters} activeFilter={type} />
			</div>
			{type === 'ranking' && <Ranking />}
		</div>
	);
};

const Ranking = () => {
	return (
		<div className='flex flex-col gap-y-[200px]'>
			<Text twClassName='text-[120px] max-md:text-[55px] max-sm:text-[30px] leading-[120px] ml-[102px]'>
				winners
			</Text>
			<div className='w-[1011px] mx-auto p-8 flex flex-col gap-y-20'>
				<div className='flex flex-col gap-y-4'>
					<h3 className='text-xl'>Gewichtetes Ranking</h3>
					<table className='table'>
						<thead className=''>
							<tr>
								<td className='px-4 py-2'>Einsender</td>
								<td className='px-4 py-2'>Grand Prix</td>
								<td className='px-4 py-2'>Evergreen</td>
								<td className='px-4 py-2'>Gold</td>
								<td className='px-4 py-2'>Silber</td>
								<td className='px-4 py-2'>Bronze</td>
								<td className='px-4 py-2'>Shortlist</td>
							</tr>
						</thead>
						<tbody>
							{Array(10)
								.fill(0)
								.map((el, idx) => (
									<tr key={idx}>
										{['Ruf lanz Ag', 0, 1, 1, 3, 8, 10].map(
											(score, idx) => (
												<td
													className='font-extralight px-4 py-2'
													key={idx}>
													{score}
												</td>
											)
										)}
									</tr>
								))}
						</tbody>
					</table>
					<p className='self-center font-bold text-blue-400 mt-2'>
						Mehr
					</p>
				</div>
				<div className='flex flex-col gap-y-4 mb-[200px]'>
					<h3 className='text-xl'>Gewichtetes Ranking</h3>
					<table className='table'>
						<thead className=''>
							<tr>
								<td className='px-4 py-2'>Einsender</td>
								<td className='px-4 py-2'>Grand Prix</td>
								<td className='px-4 py-2'>Evergreen</td>
								<td className='px-4 py-2'>Gold</td>
								<td className='px-4 py-2'>Silber</td>
								<td className='px-4 py-2'>Bronze</td>
								<td className='px-4 py-2'>Shortlist</td>
							</tr>
						</thead>
						<tbody>
							{Array(10)
								.fill(0)
								.map((el, idx) => (
									<tr key={idx}>
										{['Ruf lanz Ag', 0, 1, 1, 3, 8, 10].map(
											(score, idx) => (
												<td
													className='font-extralight px-4 py-2'
													key={idx}>
													{score}
												</td>
											)
										)}
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Category;
