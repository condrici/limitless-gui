class AssetsManager {

    generateTablePagesData(totalPages: number) {
        let tablePages: any[] = [];
        
        for (let i=0; i < totalPages; i++) {
            tablePages[i] = {};
            tablePages[i].number = i+1;
            tablePages[i].isSelected = false;
        }

        return tablePages;
    }
}

export {AssetsManager}