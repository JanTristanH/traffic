import {
    execute
} from './apiCall.js';
import {
    persist
} from './sql/mariaPersistance.js'

let coordinates = {
    "geoLonFrom": process.env.LOCATION1_LONGITUDE,
    "geoLatFrom": process.env.LOCATION1_LATITUDE,
    "geoLonTo": process.env.LOCATION2_LONGITUDE,
    "geoLatTo": process.env.LOCATION2_LATITUDE
}

Promise.all([

    //direction from HH TO harz
    execute([{
        "%LOCATION1_LONGITUDE%": process.env.LOCATION1_LONGITUDE,
        "%LOCATION1_LATITUDE%": process.env.LOCATION1_LATITUDE,
        "%LOCATION2_LONGITUDE%": process.env.LOCATION2_LONGITUDE,
        "%LOCATION2_LATITUDE%": process.env.LOCATION2_LATITUDE
    }])
    .then(result => persist(result[0], {fromId:1,toId: 2})),

    execute([{
        "%LOCATION1_LONGITUDE%": process.env.LOCATION2_LONGITUDE,
        "%LOCATION1_LATITUDE%": process.env.LOCATION2_LATITUDE,
        "%LOCATION2_LONGITUDE%": process.env.LOCATION1_LONGITUDE,
        "%LOCATION2_LATITUDE%": process.env.LOCATION1_LATITUDE
    }])
    .then(result => persist(result[0], {fromId:2,toId: 1}))
]).then( _ => {
        process.exit()
    });