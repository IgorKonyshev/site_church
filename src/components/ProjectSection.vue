<template>
  <section class="project-section">
    <button class="donate-btn" @click="scrollToDonate">Підтримати</button>
    <div class="project-info">
      <h2>Про проєкт</h2>
      <p class="project-desc">
        Дім Милосердя — місце, де серця знаходять дім.<br />
        Ми — Благодійний фонд «Підтримка-Є». Збираємо кошти на придбання
        території, де знайдуть прихисток 50 матерів із дітьми, які втратили дім
        через війну або інші обставини! Тут вони отримають безпеку, турботу та
        шанс почати життя заново.
      </p>
      <img src="Photo_project1.jpg" class="project-photo" alt="Сім'я" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectSection",
  data() {
    return {
      collected: 10000,
      goal: 220000,
      deadline: new Date("2025-11-28"),
      daysLeft: 0,
    };
  },
  computed: {
    percentCollected() {
      return Math.min(100, Math.round((this.collected / this.goal) * 100));
    },
  },
  mounted() {
    this.updateDaysLeft();
  },
  methods: {
    updateDaysLeft() {
      const now = new Date();
      const diff = this.deadline - now;
      this.daysLeft = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    },
    scrollToDonate() {
      const el = document.getElementById("donate-block");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
  },
};
</script>

<style scoped>
.project-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: #fdf6ee;
  padding: 40px 0;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
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
  margin-bottom: 32px;
  object-fit: cover;
}
.progress-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
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
  background: linear-gradient(90deg, #ffc439 60%, #ffe082 100%);
  color: #2c3e50;
  border: none;
  border-radius: 24px;
  padding: 10px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 18px 0 #ffc43944;
  margin: 0 auto 32px auto;
  display: block;
  transition: background 0.25s, box-shadow 0.25s, transform 0.18s;
  letter-spacing: 0.5px;
  min-width: 180px;
  max-width: 260px;
  max-height: 54px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
}
.donate-btn:hover {
  background: linear-gradient(90deg, #ffe082 60%, #ffc439 100%);
  box-shadow: 0 8px 24px 0 #ffc43966;
  transform: translateY(-2px) scale(1.04);
}
</style>
<style scoped>
@media (max-width: 700px) {
  .project-section {
    flex-direction: column;
    gap: 20px;
    padding: 24px 0;
    align-items: center;
  }
  .project-info {
    max-width: 100%;
    width: 100%;
    text-align: center;
    padding: 0 8px;
  }
  .project-photo {
    width: 90vw;
    max-width: 340px;
    border-radius: 14px;
    margin-bottom: 24px;
  }
  .donate-btn {
    min-width: 140px;
    max-width: 90vw;
    font-size: 1rem;
    padding: 10px 18px;
  }
}
</style>
