<template>
  <section class="project-section">
    <div class="project-info">
      <h2>Про проєкт</h2>
      <p class="project-desc">
        Дім Милосердя — місце, де серця знаходять дім.<br>
        Війна залишила тисячі людей без дому та надії. Разом ми можемо подарувати їм новий шанс.
      </p>
      <img src="@/assets/logo.png" class="project-photo" alt="Сім'я">
    </div>
    <div class="progress-card">
      <div class="progress-days">
        <span class="days-number">{{ daysLeft }}</span>
        <span class="days-label">днів</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar">
          <div class="progress-bar-inner" :style="{width: percentCollected + '%'}"></div>
        </div>
      </div>
      <div class="progress-amounts">
        <div class="amount">${{ collected }}</div>
        <div class="goal">зібрано з ${{ goal }}</div>
      </div>
      <button class="donate-btn">Зробити пожертву</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
  data() {
    return {
      collected: 10000,
      goal: 220000,
      deadline: new Date('2025-11-28'),
      daysLeft: 0
    }
  },
  computed: {
    percentCollected() {
      return Math.min(100, Math.round((this.collected / this.goal) * 100));
    }
  },
  mounted() {
    this.updateDaysLeft();
  },
  methods: {
    updateDaysLeft() {
      const now = new Date();
      const diff = this.deadline - now;
      this.daysLeft = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }
  }
}
</script>

<style scoped>
.project-section {
  display: flex;
  gap: 40px;
  background: #fdf6ee;
  padding: 40px 0;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(44,62,80,0.07);
  justify-content: center;
}
.project-info {
  max-width: 400px;
}
.project-desc {
  font-size: 1.15rem;
  color: #2c3e50;
  margin-bottom: 24px;
}
.project-photo {
  width: 100%;
  border-radius: 16px;
  margin-top: 24px;
  object-fit: cover;
}
.progress-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 16px rgba(44,62,80,0.07);
  padding: 32px 24px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.progress-days {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
}
.progress-bar-wrap {
  width: 100%;
  margin: 16px 0;
}
.progress-bar {
  width: 100%;
  height: 10px;
  background: #f5e6d6;
  border-radius: 5px;
  overflow: hidden;
}
.progress-bar-inner {
  height: 100%;
  background: linear-gradient(90deg, #ffc439 60%, #39c36e 100%);
  border-radius: 5px 0 0 5px;
  transition: width 0.6s;
}
.progress-amounts {
  font-size: 1.1rem;
  margin-bottom: 16px;
}
.amount {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
}
.goal {
  color: #888;
  font-size: 1rem;
}
.donate-btn {
  background: #ffc439;
  color: #222;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.donate-btn:hover {
  background: #e6b800;
}
</style>
