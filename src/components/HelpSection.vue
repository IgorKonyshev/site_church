<template>
  <section class="help-section">
    <h2>{{ $t('helpTitle') }}</h2>
    <ul class="help-list">
      <li v-for="(item, idx) in $i18n.messages[$i18n.locale].helpList" :key="idx">{{ item }}</li>
    </ul>
    <div class="donate-block" id="donate-block">
      <div class="pay-icons">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
          alt="PayPal"
          title="PayPal"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxmMKHE4mrV45NF6-3UEbds0A5innDQs8Ww&s"
          alt="Monobank"
          title="Monobank"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Logo_WaYFoRPaY.png"
          alt="WayForPay"
          title="WayForPay"
        />
        <img
          src="data:image/png;base64,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"
          alt="LiqPay"
          title="LiqPay"
        />
        <a href="https://www.instagram.com/pidtrimka_e/"
          ><img src="pidtrimka.png" alt="Pidtrimka" title="Pidtrimka"
        /></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelpSection",
};
</script>

<style scoped>
.help-section {
  background: #fdf6ee;
  border-radius: 24px;
  box-shadow: 0 2px 16px rgba(44, 62, 80, 0.07);
  padding: 40px 32px;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 0 auto 24px auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.help-list li {
  font-size: 1.15rem;
  color: #2c3e50;
  margin-bottom: 16px;
  padding-left: 0.5em;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
}
.donate-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  width: 100%;
}
</style>
<style scoped>
@media (max-width: 700px) {
  .help-section {
    padding: 20px 4vw;
    max-width: 100vw;
    min-width: 0;
  }
  .help-list {
    max-width: 100%;
    width: 100%;
    padding: 0;
    margin: 0 0 18px 0;
  }
  .help-list li {
    font-size: 1rem;
    margin-bottom: 12px;
    padding-left: 0.2em;
    gap: 8px;
  }
  .donate-block {
    width: 100%;
    margin-top: 16px;
  }
  .pay-icons {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pay-icons img {
    width: 32px;
    height: 32px;
  }
}
</style>
<style scoped>
.donate-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
}
.donate-btn {
  background: #ffc439;
  color: #2c3e50;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;
  transition: background 0.2s;
}
.donate-btn:hover {
  background: #ffe082;
}
.pay-icons {
  display: flex;
  gap: 18px;
}
.pay-icons img {
  width: 38px;
  height: 38px;
  object-fit: contain;
  filter: grayscale(0.2) contrast(1.1);
  transition: filter 0.2s, transform 0.2s;
}
.pay-icons img:hover {
  filter: grayscale(0) contrast(1.2) drop-shadow(0 2px 8px #ffc43944);
  transform: scale(1.08);
}
</style>
