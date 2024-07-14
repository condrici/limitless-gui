<script setup lang="ts">
    import {http, apiEndpoints} from '../../features/Http';
    import {AssetsManager} from '../../features/AssetsManager';
    import {onBeforeMount, ref} from 'vue';

    //------------------------------------------------------------------------------------>
    // 
    // Settings
    // 
    //------------------------------------------------------------------------------------>

    const defaultTablePageNumber = 1;
    const defaultTableRecordsPerPage = 10;
    const assetsManager = new AssetsManager();
    const pagesData = ref(assetsManager.generateTablePagesData(3));
    const recordsData = ref("");

    //------------------------------------------------------------------------------------>
    // 
    // Vue Hooks
    // 
    //------------------------------------------------------------------------------------>

    onBeforeMount(function() {
        updateTableRecords(defaultTablePageNumber, defaultTableRecordsPerPage);
    });

    //------------------------------------------------------------------------------------>
    // 
    // Functions
    // 
    //------------------------------------------------------------------------------------>

    function updateTableRecords(pageNumber: Number, limit: Number) {
        var getAssetsUrl = apiEndpoints.API_ASSETS_ENDPOINT + "/assets?page=" + pageNumber + "&limit=" + limit;
        
        http.sendGetRequest(getAssetsUrl).then((response) => {
                recordsData.value = response.data;
                updateTablePagination(pageNumber, response);
            }
        )
    }

    function updateTablePagination(pageNumber: Number, httpResponse) {
        deselectOtherPagesInTablePagination(pageNumber);
        selectNewPageInTablePagination(pageNumber);
    }

    function togglePageSelection(newPageNumber: Number, isSelected: Boolean) {
        if (isSelected) {
            return;
        }
        
        this.updateTableRecords(newPageNumber, this.defaultTableRecordsPerPage)
    }

    function  deselectOtherPagesInTablePagination(newPageNumber: Number) {
        for (let i = 0; i < pagesData.value.length; i++) {
            if (pagesData.value[i].number !== newPageNumber) {
                pagesData.value[i].isSelected = false;
            }
        }   
    }

    function selectNewPageInTablePagination(newPageNumber: Number) {
        const page = pagesData.value.find(page => page.number === newPageNumber)
        if (page) {
            page.isSelected = !page.isSelected
        }
    }

</script>

<style>
    .selected {
        background: orange !important;
    }
</style>

<template>
    <div v-if="recordsData" class="assets-table">
        <!-- Assets Table -->
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <!-- Table Head -->
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Asset Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                Last Tracked Date
                                <a href="#">
                                    <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"></svg></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>

                <!-- Table Body -->
                <tbody>
                    <tr v-for="item in recordsData" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ item.name }}
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Table Pagination -->
        <nav aria-label="Page navigation example" class="mt-4">
            <ul class="inline-flex -space-x-px text-sm">
                <li v-for="page in pagesData" :key="page.number">
                    <a
                        :id="page.number"
                        @click="togglePageSelection(page.number, page.isSelected)" 
                        :class="{selected: page.isSelected}" 
                        href="#" 
                        aria-current="page.number" 
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        {{ page.number }}
                    </a>
                </li>
            </ul>
        </nav>
        
    </div>
</template>