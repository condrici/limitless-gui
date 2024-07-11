<script setup>
    import {http, apiEndpoints} from '../../features/Http';

    defineOptions({
        inheritAttrs: false,
        data() {
            return { 
                tablePages: [
                    {number: "1", isSelected:false}, 
                    {number: "2", isSelected:false}, 
                    {number: "3", isSelected:false}, 
                ],
                isPageActive: false,
                assetsData: ""
            }
        },
        beforeMount () {
            this.loadAssets()
        },
        methods: {
            loadAssets(page=1, limit=10) {
                var getAssetsUrl = apiEndpoints.API_ASSETS_ENDPOINT + "/assets?page=" + page + "&limit=" + limit;
                var self = this;
                
                function processResponse(response) {
                    self.assetsData = response.data
                }

                http.sendGetRequest(getAssetsUrl).then(
                    function (response) {
                        processResponse(response);
                    }
                )
            },
            changePage(pageNumber, isSelected) {

                if (isSelected) {
                    return;
                }

                //change selected page
                for (let i = 0; i < this.tablePages.length; i++) {
                    if (this.tablePages[i].number !== pageNumber) {
                        this.tablePages[i].isSelected = false
                    }
                    this.toggleSelection(pageNumber)
                }

                //load assets
                this.loadAssets(pageNumber, 10);
            },
            toggleSelection(pageNumber) {
                const page = this.tablePages.find(page => page.number === pageNumber)
                if (page) {
                    page.isSelected = !page.isSelected
                }
            }

        },
    })

</script>

<style>
    .btn-active {
        background: orange !important;
    }
    .selected {
        background: orange !important;
    }
</style>

<template>
    <div v-if="assetsData" class="assets-table">

        <!-- Assets Table Data -->
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                <tbody>
                    <tr v-for="item in assetsData" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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

        <!-- Assets Table Pagination -->
        <nav aria-label="Page navigation example" class="mt-4">
            <ul class="inline-flex -space-x-px text-sm">
                <li v-for="page in tablePages" :key="page.number">
                    <a
                        :id="page.number"
                        @click="changePage(page.number, page.isSelected)" 
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