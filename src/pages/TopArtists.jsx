import React from 'react';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import { Error, Loader, ArtistCard } from '../components';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data)

  if (isFetching) return <Loader title="Loading top charts" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-10 text-3xl font-bold text-left text-white">
        Top Artists
      </h2>
      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {
          data?.map((track, i) => (
            <ArtistCard
              key={track.key}
              track={track}
              data={data}
              i={i}
            />
          ))
        }
      </div>
    </div>
  );
};

export default TopArtists;
