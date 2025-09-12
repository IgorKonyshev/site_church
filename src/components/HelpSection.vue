<template>
  <section class="help-section">
    <h2>Як ви можете допомогти</h2>
    <ul class="help-list">
      <li>💛 Зробити пожертву — кожна сума важлива.</li>
      <li>🤝 Стати партнером або меценатом проєкту.</li>
      <li>📢 Поширити інформацію про проєкт серед друзів і колег.</li>
      <li>🧩 Допомогти організаційно — волонтерством чи професійними навичками.</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HelpSection'
}
</script>

<style scoped>
.help-section {
  background: #fdf6ee;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(44,62,80,0.07);
  padding: 40px 32px;
  max-width: 800px;
  margin: 40px auto 0 auto;
}
.help-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 18px;
  text-align: center;
}
.help-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 500px;
}
.help-list li {
  font-size: 1.15rem;
  color: #2c3e50;
  margin-bottom: 16px;
  padding-left: 0.5em;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
