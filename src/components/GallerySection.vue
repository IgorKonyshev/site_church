<template>
  <section class="gallery-section">
    <h2>Галерея</h2>
    <div class="gallery-grid">
      <img src="@/assets/logo.png" alt="Фото 1" class="gallery-img">
      <img src="@/assets/logo.png" alt="Фото 2" class="gallery-img">
      <img src="@/assets/logo.png" alt="Фото 3" class="gallery-img">
      <img src="@/assets/logo.png" alt="Фото 4" class="gallery-img">
    </div>
  </section>
</template>

<script>
export default {
  name: 'GallerySection'
}
</script>

<style scoped>
.gallery-section {
  background: #fdf6ee;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(44,62,80,0.07);
  padding: 40px 32px;
  max-width: 1000px;
  margin: 40px auto 0 auto;
}
.gallery-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 24px;
  text-align: center;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}
.gallery-img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 1px 8px rgba(44,62,80,0.08);
  background: #fff;
}
</style>
