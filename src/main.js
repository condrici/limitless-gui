import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import {http, apiEndpoints} from './features/Http';

// let scrapeFromUrl = encodeURIComponent('https://www.emag.ro/piscina-intex-28202np-cadru-metalic-305-x-76-cm-pompa-filtrare-inclusa-6941057400310/pd/DHLY9ZBBM/?ref=profiled_categories_home_1_2&provider=rec&recid=rec_50_c550f403274cccaa68b02d34293a188675ce7353fdfaa558c3dd46122ddb59ed_1691482523&scenario_ID=50')
// let scrapeAlgorithm = 'emag_product_page'
// let scrapeApiUrl = apiEndpoints.API_GATEWAY_ENDPOINT + '/scrape/' + scrapeFromUrl + '/' + scrapeAlgorithm

// http.sendGetRequest('http://localhost:8083/api/v1.0/scrape/x/x').then(
//     function (response) {
//         console.log(response)
//     }
// )