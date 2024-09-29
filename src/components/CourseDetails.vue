<template>
    <div class="image-frame">
        <img src="../assets/BCom.png" style="max-height: 500px; width: 1900px" />
    </div>
    <div class="breadcrumbs">
        <!-- Add your breadcrumb content here -->
        <a href="/"> HOME / </a>
        <router-link :to="`/${pathSegments[0]}`">{{ pathSegments[0].toLocaleUpperCase() }} </router-link>
    </div>
    <DetailComponent />


</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import DetailComponent from './DetailComponent.vue'

const route = useRoute();
const routePath = route.path; // Get the current route path
const pathSegments = routePath.split('/').filter((segment) => segment !== ''); // Split the path by '/' and remove empty segments
</script>

<style scoped>
.image-frame {
    width: 100%;
    height: 500px;
    overflow: hidden;
    /* Hide the overflow to ensure the image fits within the frame */
}

.image-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Ensures the image covers the frame while maintaining aspect ratio */
}

.container {
    display: flex;
    justify-content: center;
    /* Center horizontally */
    flex-wrap: wrap;
    /* Allow flex items to wrap */
}

.section1 {
    width: calc(70% - 40px);
    /* Adjust width for responsiveness */
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

@media (max-width: 768px) {

    .section1,
    .section2 {
        width: calc(100% - 40px);
        /* Full width on small screens */
    }
}

.breadcrumbs {
    height: 50px;
    background-color: #761e67;
    text-align: left;
    padding-left: 20px;
    font-size: small;
    line-height: 50px;
}

.breadcrumbs a,
.breadcrumbs router-link {
    color: white;
    text-decoration: none;
    /* Remove underline from links */
}
</style>