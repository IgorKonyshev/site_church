<template>
  <section class="why-section">
    <div class="why-info">
      <h2>Чому це важливо</h2>
      <p>
        Війна залишила тисячі людей без дому, безпеки та стабільності. Сотні
        сімей залишилися без даху над головою, багато мам із дітьми опинилися у
        безвихідному становищі, а діти втратили відчуття захищеності.
      </p>
      <ul>
        <li>Мами з малюками залишилися одні без підтримки та житла.</li>
        <li>Діти втратили сенс і спокій.</li>
        <li>Кожен заслуговує на новий шанс.</li>
      </ul>
    </div>
    <div class="why-photo-wrap">
      <img src="Photo_project2.jpg" class="why-photo" alt="Сім'я" />
    </div>
  </section>
</template>

<script>
export default {
  name: "WhySection",
};
</script>

<style scoped>
.why-section {
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
.why-info {
  max-width: 400px;
}
.why-info h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 18px;
}
.why-info p {
  font-size: 1.15rem;
  color: #2c3e50;
  margin-bottom: 18px;
}
.why-info ul {
  padding-left: 20px;
  color: #2c3e50;
  font-size: 1.08rem;
}
.why-info li {
  margin-bottom: 8px;
}
.why-photo-wrap {
  min-width: 260px;
  max-width: 320px;
}
.why-photo {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
}
</style>
<style scoped>
@media (max-width: 700px) {
  .why-section {
    flex-direction: column;
    gap: 20px;
    padding: 24px 0;
    align-items: center;
  }
  .why-info {
    max-width: 100%;
    width: 100%;
    text-align: center;
    padding: 0 8px;
  }
  .why-photo-wrap {
    min-width: 0;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }
  .why-photo {
    width: 90vw;
    max-width: 340px;
    border-radius: 14px;
  }
  .why-info ul {
    padding-left: 0;
    text-align: left;
    margin: 0 auto;
    max-width: 340px;
  }
}
</style>
