//require('dotenv').config();

import { execute }  from './apiCall.js';


execute([{
    "%LOCATION1_LONGITUDE%":process.env.LOCATION1_LONGITUDE,
    "%LOCATION1_LATITUDE%": process.env.LOCATION1_LATITUDE, 
    "%LOCATION2_LONGITUDE%":process.env.LOCATION2_LONGITUDE,
    "%LOCATION2_LATITUDE%": process.env.LOCATION2_LATITUDE
}]).then(result => console.log(result));