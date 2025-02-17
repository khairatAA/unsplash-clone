<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Search } from "lucide-vue-next"; // Lucide Vue icon package

const query = ref("");
const router = useRouter();

const handleSearch = (event) => {
  event.preventDefault();
  if (!query.value.trim()) return;
  router.push(`/search?query=${query.value}`);
};
</script>

<template>
  <div class="search-bar">
    <form @submit="handleSearch" class="search-form">
      <!-- Search Icon -->
      <Search class="search-icon" size="16" />

      <input
        type="search"
        v-model="query"
        placeholder="Search for photos"
        class="search-input"
      />
    </form>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  width: 100%;
  background-color: #e5e7eb;
  padding: 80px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 64px 40px;
  }

  @media (max-width: 480px) {
    padding: 64px 20px;
  }
}

.search-form {
  position: relative;
  width: 100%;
  
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #364153;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  background-color: white;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  color: #364153;

  &::placeholder {
    color: #364153;
  }
}
</style>
