<script setup>
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import { fetchPhotosByQuery } from "@/api/fetchPhotosByQuery";
import ImageCard from "@/components/image-card/ImageCard.vue";
import SkeletonCard from "@/components/image-card/SkeletonCard.vue";
import Modal from "@/components/modal/Modal.vue";
import ErrorDisplay from "@/components/error/ErrorDisplay.vue";

const route = useRoute();
const searchQuery = route.query.query;

const { data: photos, error, isLoading, refetch } = useQuery({
  queryKey: ["searchPhotos", searchQuery],
  queryFn: () => fetchPhotosByQuery(searchQuery),
  enabled: !!searchQuery,
});

const selectedImage = ref(null);
const heightClasses = [256, 384, 320]; // Short, Tall, Medium
</script>

<template>
  <div class="search-results">
    <div class="header">
      <h2>
        Search Results for <span>&ldquo;{{ searchQuery }}&rdquo;</span>
      </h2>
    </div>

    <div class="results-container">
      <ErrorDisplay v-if="error" :message="error.message" @retry="refetch" />

      <div class="grid">
        <SkeletonCard
          v-if="isLoading"
          v-for="(_, index) in 8"
          :key="index"
          :size="heightClasses[index % 3]"
        />
        <ImageCard
          v-for="(photo, index) in photos"
          :key="photo.id"
          :image="photo.urls.small"
          :highResImage="photo.urls.regular"
          :altDescription="photo.alt_description"
          :name="photo.user.name"
          :location="photo.user.location || 'Unknown Location'"
          :size="heightClasses[index % 3]"
          @click="selectedImage = photo"
        />
      </div>
    </div>

    <Modal
      v-if="selectedImage"
      :image="selectedImage.urls.regular"
      :name="selectedImage.user.name"
      :location="selectedImage.user.location || 'Unknown Location'"
      @close="selectedImage = null"
    />
  </div>
</template>

<style lang="scss" scoped>
.search-results {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  
}

.header {
  width: 100%;
  background: #e5e7eb;
  padding: 5rem 2rem;
  display: flex;
  justify-content: flex-start;

  h2 {
    font-size: 1.875rem;
    font-weight: 500;
    color: #374151;

    span {
      color: #6b7280;
    }
  }

  @media (max-width: 550px) {
    h2 {
    font-size: 1.5rem;
    font-weight: 400;
    }
  }
}

.results-container {
  padding: 2.5rem;
  width: 100%;
  max-width: 64rem;
  position: absolute;
  top: 7rem;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
</style>
