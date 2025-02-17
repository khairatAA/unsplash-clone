<script setup>
import { ref, defineProps, defineEmits, onMounted } from "vue";
import { X } from "lucide-vue-next"; // Vue version of lucide-react

const props = defineProps({
  image: String,
  name: String,
  location: String,
});

const emit = defineEmits(["close"]);
const loading = ref(true);

// Function to handle closing the modal when clicking outside
const handleOutsideClick = (event) => {
  if (event.target.id === "modal-overlay") {
    emit("close");
  }
};

// Ensure the image loading state updates when mounted
onMounted(() => {
  loading.value = true;
});
</script>

<template>
  <div
    id="modal-overlay"
    class="modal-overlay"
    @click="handleOutsideClick"
  >
    <div class="modal-content" @click.stop>
      <!-- Close Button -->
      <button @click="emit('close')" class="close-button">
        <X size="24" />
      </button>

      <!-- Image Container with Loader -->
      <div class="image-container">
        <div v-if="loading" class="skeleton-loader"></div>

        <img
          :src="image"
          alt="High Resolution"
          class="modal-image"
          @load="loading = false"
          :class="{ 'image-loaded': !loading }"
        />
      </div>

      <!-- Name and Location -->
      <div class="info">
        <p class="name">{{ name }}</p>
        <p class="location">{{ location }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(137, 137, 137, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1.25rem;
}

.modal-content {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 40rem;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.close-button {
  position: absolute;
  top: -2.5rem;
  right: -2.5rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 20;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    top: 0.75rem;
    right: 0.75rem;
    color: black;
    background: white;
    padding: 0.5rem;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    &:hover {
      color: black;
  }
  }
}

.image-container {
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e7eb;
  border-radius: 0.75rem 0.75rem 0 0;
  overflow: hidden;
}

.skeleton-loader {
  width: 100%;
  height: 100%;
  background: #d1d5db;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem 0.75rem 0 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.image-loaded {
    opacity: 1;
  }
}

.info {
  text-align: left;
  padding: 1.25rem;
}

.name {
  font-size: 1.125rem;
  font-weight: 600;
  padding-bottom: 5px;
}

.location {
  font-size: 0.875rem;
  color: #6b7280;
}
</style>
