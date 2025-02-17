<script setup>
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { fetchAfricanPhotos } from "@/api/fetchAfricanPhotos";
import Searchbar from "@/components/landing-page/Searchbar.vue";
import ImageCard from "@/components/image-card/ImageCard.vue";
import SkeletonCard from "@/components/image-card/SkeletonCard.vue";
import Modal from "@/components/modal/Modal.vue";
import ErrorDisplay from "@/components/error/ErrorDisplay.vue";

const { data: photos, error, isLoading, refetch } = useQuery({
  queryKey: ["africanPhotos"],
  queryFn: fetchAfricanPhotos,
});

const selectedImage = ref(null);
const heightClasses = [256, 384, 320]; // Short, Tall, Medium
</script>

<template>
  <div class="landing-page">
    <Searchbar />

    <div class="photo-gallery">
      <ErrorDisplay v-if="error" :message="error.message" @retry="refetch" />

      <div class="photo-grid">
        <SkeletonCard
          v-if="isLoading"
          v-for="(s, index) in 8"
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
.landing-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.photo-gallery {
  padding: 2.5rem;
  width: 100%;
  max-width: 80rem;
  position: absolute;
  top: 8rem;

  @media (max-width: 480px) {
    top: 7rem;
  }
}

.photo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1.5rem;
  row-gap: 2.5rem;
}
</style>
