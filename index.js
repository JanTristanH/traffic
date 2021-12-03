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

execute([{
        "%LOCATION1_LONGITUDE%": process.env.LOCATION1_LONGITUDE,
        "%LOCATION1_LATITUDE%": process.env.LOCATION1_LATITUDE,
        "%LOCATION2_LONGITUDE%": process.env.LOCATION2_LONGITUDE,
        "%LOCATION2_LATITUDE%": process.env.LOCATION2_LATITUDE
    }])
    .then(result => persist(result[0], coordinates))
    .then(result => {console.log("DONE"); process.exit()
});