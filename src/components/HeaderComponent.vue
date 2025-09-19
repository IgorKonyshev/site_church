<template>
  <header class="cover">
    <div class="cover-content">
      <h1>{{ $t('welcome') }} <span class="dove">🕊</span></h1>
      <p class="subtitle">{{ $t('subtitle') }}</p>
      <div class="lang-switch">
        <button @click="setLang('ua')" :class="{active: $i18n.locale === 'ua'}">UA</button>
        <button @click="setLang('en')" :class="{active: $i18n.locale === 'en'}">EN</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.cover {
  background: linear-gradient(120deg, #f5f5dc 60%, #e0e7ef 100%);
  padding: 60px 0 40px 0;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
  border-radius: 0 0 32px 32px;
}
.cover-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
h1 {
  color: #2c3e50;
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}
.dove {
  font-size: 2.2rem;
  vertical-align: middle;
}
.subtitle {
  color: #4a5a6a;
  font-size: 1.3rem;
  margin-bottom: 0;
  font-weight: 400;
}
.lang-switch {
  margin-top: 18px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.lang-switch button {
  background: #e0e7ef;
  border: none;
  border-radius: 8px;
  padding: 6px 18px;
  font-size: 1rem;
  cursor: pointer;
  color: #2c3e50;
  font-weight: 600;
  transition: background 0.2s;
}
.lang-switch button.active,
.lang-switch button:hover {
  background: #ffc439;
  color: #222;
}
</style>
