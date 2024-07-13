import {http, apiEndpoints} from '../features/Http';

class AssetsManager {

    generateTablePagesData(totalPages) {
        let tablePages = [];

        for (let i=0; i < totalPages; i++) {
            tablePages[i] = {};
            tablePages[i].number = i+1;
            tablePages[i].isSelected = i === 0 ? true : false;
        }

        return tablePages;
    }
}

export default class Zooom {
    saySomething() {
        console.log("bzzz")
    }
}

let assetsManager = new AssetsManager();

export {assetsManager, Zooom}