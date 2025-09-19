<template>
  <section class="info-section">
    <div class="info-content">
      <h2>{{ $t('motherTitle') }}</h2>
      <p>
        {{ $t('motherDesc') }}
      </p>
    </div>
    <div class="info-photo-wrap">
      <!-- Фото для секции (замените src на нужное) -->
      <img src="Mother.jpg" class="info-photo" alt="Дім матері та дитини" />
    </div>
  </section>
</template>

<script>
export default {
  name: "MotherChildSection",
};
</script>

<style scoped>
.info-section {
  display: flex;
  gap: 40px;
  background: #fdf6ee;
  padding: 40px 0;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.info-photo-wrap {
  min-width: 260px;
  max-width: 320px;
}
.info-photo {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
}
.info-content {
  max-width: 400px;
}
.info-content h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 18px;
}
.info-content p {
  font-size: 1.15rem;
  color: #2c3e50;
  margin-bottom: 18px;
}
@media (max-width: 700px) {
  .info-section {
    flex-direction: column;
    gap: 20px;
    padding: 24px 0;
    align-items: center;
  }
  .info-photo-wrap {
    min-width: 0;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }
  .info-photo {
    width: 90vw;
    max-width: 340px;
    border-radius: 14px;
  }
  .info-content {
    max-width: 100%;
    width: 100%;
    text-align: center;
    padding: 0 8px;
  }
}
</style>
