<script setup>
    import {http, apiEndpoints} from '../../features/Http';

    defineOptions({
        inheritAttrs: false,
        data() {
            return { assetsData: "" }
        },
        beforeMount () {
            this.loadAssets()
        },
        methods: {
            loadAssets() {
                var getAssetsUrl = apiEndpoints.API_ASSETS_ENDPOINT + "/assets";
                var self = this;
                
                function processResponse(response) {
                    self.assetsData = response.data
                }

                http.sendGetRequest(getAssetsUrl).then(
                    function (response) {
                        processResponse(response);
                    }
                )
            }
        },
    })

</script>

<template>
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
                <tr v-for="item in assetsData" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
</template>