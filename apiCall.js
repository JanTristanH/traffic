import fetch from 'node-fetch';

const baseUrl = "https://verkehr.autobahn.de";
const path = "/o/route/car";
const parameters = "?detailed=false&start=%LOCATION1_LONGITUDE%,%LOCATION1_LATITUDE%&target=%LOCATION2_LONGITUDE%,%LOCATION2_LATITUDE%";

let execute = aReplacements => {
    return new Promise((resolve, reject) => {

        Promise.all(aReplacements.map(replacements => {
            return new Promise(async (resolve, reject) => {

                let newParameters = parameters.replace(/%\w+%/g, function (all) {
                    return replacements[all] || all;
                });

                const response = await fetch(baseUrl + path + newParameters);
                console.log(baseUrl + path + newParameters);
                resolve(await response.json())
            });
        })).then(e => resolve(e));

    });
};
export {
    execute
};