export const fetchapi = async (api)=>{
    const responsive = await fetch(api);
    const data = await responsive.json();
    return data;
}