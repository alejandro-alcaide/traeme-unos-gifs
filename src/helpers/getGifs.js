export const getAsyncGifs = async ( category ) => {
  const api_key='Rn1sPNgC7i1lqZNbK5YfyQmkWBSMLEHU';
  const gifURL = 'https://api.giphy.com/v1/gifs/search'
  let q='AppleTV Pachinko';
  const limit=7;
  
  const myQuery = `${gifURL}?api_key=${api_key}&q="${category}"&limit=${limit}`;
  //console.log('GifGrid.jsx - myQuery', myQuery);

  const resp = await fetch(myQuery);
  //console.log('resp: ', resp);
  //console.log(resp);

  const { data = [] } = await resp.json();
  //console.log(data);

  const gifs = data.map( img => (
    {
      id: img.id,
      title: img.title,
      imgurl: img.images.downsized_medium.url,
    }
  ));

  console.log(gifs);
  return gifs;

};