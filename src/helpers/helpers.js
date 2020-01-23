export function getIdFromURL(url){
    let urlSplit =  url.split('/');
    return urlSplit[urlSplit.length - 2];

}