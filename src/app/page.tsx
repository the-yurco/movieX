//! IMPORTS ------------------------------------------------------------

// Importing functions for fetching data
import { FetchData } from '@/api/fetchFunctions';

// Importing allShowUrl constant from the config module
import { allShowsUrl } from '@/api/config';

// Importing types
import type { Show } from '@/api/types';

// Importing necessary features from the nextjs library
import Link from 'next/link';

// Importing Icons
import { PiTelevisionSimpleLight } from 'react-icons/pi';

//! ----------------------------------------------------------------------

const getShowData = async () => {
	const allShowsEndpoint: string = allShowsUrl;
	const shows = await FetchData<Show[]>(allShowsEndpoint);

	return { shows };
};

const Home = async () => {
	const { shows } = await getShowData();

	return (
		<div className="mt-5">
			<div className="w-full ">
				<div className="w-5/6  mx-auto flex flex-col gap-5 ">
					<div className="flex flex-col items-center mt-20 mb-10">
						<PiTelevisionSimpleLight
							style={{ fontSize: '5em' }}
							className="text-neutral-700"
						/>
						<h1 className="text-3xl font-semibold text-center text-neutral-700">
							The best library for TV shows
						</h1>
					</div>
					<div className="flex gap-3 justify-center">
						<Link
							href={`/shows`}
							className=" bg-neutral-700/80 text-neutral-300 px-4 py-1 rounded-md text-sm  border border-neutral-600 shadow-md transition-all duration-300 hover:bg-neutral-700/90"
						>
							Discover our shows
						</Link>
						<Link
							href={`/episodes`}
							className=" text-neutral-500 px-4 py-1 rounded-md border border-neutral-400/55 text-sm shadow-inner transition-all duration-300 hover:bg-neutral-200/85"
						>
							Episodes
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
