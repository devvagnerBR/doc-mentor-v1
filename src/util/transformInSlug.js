const transformInSlug = ( string ) => {
    return string.replace( / /g,"-" ).toLowerCase();
}


export default transformInSlug