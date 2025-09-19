<template>
  <section class="goal-section">
    <div class="goal-info">
      <h2>Наша ціль</h2>
      <div class="goal-stats">
        <div class="goal-stat">
          <div class="goal-value">$62 000</div>
          <div class="goal-label">зібрано</div>
        </div>
        <div class="goal-stat">
          <div class="goal-value">$230 000</div>
          <div class="goal-label">ціль</div>
        </div>
      </div>
      <div class="goal-progress-bar">
        <div
          class="goal-progress-inner"
          :style="{ width: percentCollected + '%' }"
        ></div>
      </div>
      <div class="goal-location">м. Дніпро</div>
      <div class="goal-countdown">
        <span>До завершення залишилось: </span>
        <b>{{ countdown.days }}</b> днів <b>{{ countdown.hours }}</b> год
        <b>{{ countdown.minutes }}</b> хв <b>{{ countdown.seconds }}</b> сек
      </div>
    </div>
    <div class="goal-photo-wrap">
      <img src="Photo_project3.jpg" class="goal-photo" alt="Будівля" />
    </div>
  </section>
</template>

<script>
export default {
  name: "GoalSection",
  data() {
    return {
      collected: 62000,
      goal: 230000,
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      countdownInterval: null,
    };
  },

  computed: {
    percentCollected() {
      return Math.min(100, Math.round((this.collected / this.goal) * 100));
    },
  },
  mounted() {
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },
  methods: {
    updateCountdown() {
      const target = new Date("2025-11-28T00:00:00");
      const now = new Date();
      let diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);
      this.countdown = { days, hours, minutes, seconds };
    },
  },
};
</script>

<style scoped>
.goal-section {
  background: #fdf6ee;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
  padding: 40px 0;
  margin-top: 40px;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 18px;
}
.goal-stat {
  text-align: center;
  min-width: 120px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
<style scoped>
@media (max-width: 700px) {
  .goal-section {
    flex-direction: column;
    gap: 20px;
    padding: 24px 0;
    align-items: center;
  }
  .goal-photo-wrap {
    min-width: 0;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }
  .goal-photo {
    width: 90vw;
    max-width: 340px;
    border-radius: 14px;
  }
  .goal-info {
    max-width: 100%;
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0 8px;
  }
  .goal-stats {
    flex-direction: column;
    gap: 10px;
  }
  .goal-stat {
    min-width: 0;
    width: 100%;
  }
  .goal-progress-bar {
    width: 100%;
    min-width: 0;
  }
}
</style>
