<template>
  <section class="goal-section">
    <div class="goal-info">
      <h2>Наша ціль</h2>
      <div class="goal-stats">
        <div class="goal-stat">
          <div class="goal-value">$10 000</div>
          <div class="goal-label">внесено завдатку</div>
        </div>
        <div class="goal-stat">
          <div class="goal-value">$210 000</div>
          <div class="goal-label">ціль</div>
        </div>
        <div class="goal-stat">
          <div class="goal-value">3 місяця</div>
          <div class="goal-label">строк</div>
        </div>
      </div>
      <div class="goal-progress-bar">
        <div class="goal-progress-inner" :style="{width: percentCollected + '%'}"></div>
      </div>
      <div class="goal-location">м. Вкажіть місто</div>
    </div>
    <div class="goal-photo-wrap">
      <img src="@/assets/logo.png" class="goal-photo" alt="Будівля">
    </div>
  </section>
</template>

<script>
export default {
  name: 'GoalSection',
  data() {
    return {
      collected: 10000,
      goal: 220000
    }
  },
  computed: {
    percentCollected() {
      return Math.min(100, Math.round((this.collected / this.goal) * 100));
    }
  }
}
</script>

<style scoped>
.goal-section {
  display: flex;
  gap: 40px;
  background: #fdf6ee;
  padding: 40px 0;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(44,62,80,0.07);
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.goal-info {
  max-width: 400px;
}
.goal-info h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 18px;
}
.goal-stats {
  display: flex;
  gap: 32px;
  margin-bottom: 18px;
}
.goal-stat {
  text-align: center;
}
.goal-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
}
.goal-label {
  color: #888;
  font-size: 1rem;
}
.goal-progress-bar {
  width: 100%;
  height: 8px;
  background: #f5e6d6;
  border-radius: 4px;
  overflow: hidden;
  margin: 18px 0 10px 0;
}
.goal-progress-inner {
  height: 100%;
  background: linear-gradient(90deg, #ffc439 60%, #39c36e 100%);
  border-radius: 4px 0 0 4px;
  transition: width 0.6s;
}
.goal-location {
  color: #2c3e50;
  font-size: 1.08rem;
  margin-top: 8px;
}
.goal-photo-wrap {
  min-width: 260px;
  max-width: 320px;
}
.goal-photo {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
}
</style>
