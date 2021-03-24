import client from './client';

const elistFields = `
title,
'slug': slug.current,
'actor': actor->navn,
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type== "movie"]{${elistFields}}`,);
    return data;
};
       

export const getMovie = async (slug) => {
    const data = await client.fetch(
        `*[_type== "movie" && slug.current == $slug]{${elistFields}}`,
        { slug }
    );
    return data;
};