class AssetsManager {

    generateTablePagesData(totalRecords: number, recordsPerPage: number) {
        let tablePages: any[] = [];
        let totalPages = totalRecords / recordsPerPage;
        
        for (let i=0; i < totalPages; i++) {
            tablePages[i] = {};
            tablePages[i].number = i+1;
            tablePages[i].isSelected = false;
        }

        return tablePages;
    }
}

export {AssetsManager}