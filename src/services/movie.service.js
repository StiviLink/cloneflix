import {api_key, options, url} from "../fetch-common";

const params = `api_key=${api_key}&language=fr-FR`
export class moviesDataService {
    getAll = async function (){
        const result = []
        for(let i=1; i<=10; i++){
            const URL = `${url}/discover/movie`, lien = `${URL}?${params}&page=${i}`
            const response = await fetch(lien, options)
            const responseJson = await response.json()
            result.push(...result, ...responseJson.results)
        }
        return result
    }
    get = async function (id){
        const URL = `${url}/movie`, lien = `${URL}/${id}?${params}`
        const response = await fetch(lien, options)
        return response.json()
    }
}