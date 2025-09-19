import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const messages = {
	ua: {
			welcome: "Територія милосердя",
			subtitle: "Місце, де серця знаходять дім.",
			support: "Підтримати",
			projectTitle: "Про проєкт",
			projectDesc: "Територія Милосердя — місце, де серця знаходять дім. Ми — Благодійний фонд «Підтримка-Є». Збираємо кошти на придбання території, де знайдуть прихисток 50 матерів із дітьми, які втратили дім через війну або інші обставини! Тут вони отримають безпеку, турботу та шанс почати життя заново.",
			helpTitle: "Як ви можете допомогти",
			helpList: [
				"💛 Зробити пожертву — кожна сума важлива.",
				"🤝 Стати партнером або меценатом проєкту.",
				"📢 Поширити інформацію про проєкт серед друзів і колег.",
				"🧩 Допомогти організаційно — волонтерством чи професійними навичками."
			],
			whyTitle: "Чому це важливо",
			whyDesc: "Війна залишила тисячі людей без дому, безпеки та стабільності. Сотні сімей залишилися без даху над головою, багато мам із дітьми опинилися у безвихідному становищі, а діти втратили відчуття захищеності.",
			whyList: [
				"Мами з малюками залишилися одні без підтримки та житла.",
				"Діти втратили сенс і спокій.",
				"Кожен заслуговує на новий шанс."
			],
			goalTitle: "Наша ціль",
			collectedLabel: "зібрано",
			goalLabel: "ціль",
			location: "м. Дніпро",
			countdown: "До завершення залишилось:",
			days: "днів",
			hours: "год",
			minutes: "хв",
					seconds: "сек",
					motherTitle: "Дім матері та дитини",
					motherDesc: "Тут зможуть знайти захист жінки з дітьми, які постраждали від насильства чи втратили житло через війну. Вони більше не залишаться наодинці зі своїм болем і страхами – тут їх чекатиме турбота, безпека та нова надія.",
					childrenTitle: "Центр розвитку для дітей",
					childrenDesc: "Діти – це майбутнє, яке потребує любові та турботи вже сьогодні. У центрі з ними працюватимуть професійні психологи та педагоги.",
							childrenList: [
								"Ігрові зони допоможуть їм відчути радість дитинства.",
								"Творчі майстерні розкриють їхні таланти.",
								"Заняття з розвитку та відпочинкові зони подарують стабільність і відчуття, що світ може бути добрим."
							],
							shelterTitle: "Притулок для людей у складних життєвих обставинах",
							shelterDesc: "Ми відкриваємо двері для тих, хто опинився без даху над головою чи підтримки. Тут кожен зможе відновитися, відчути цінність свого життя та отримати шанс почати все спочатку.",
							shelterBtn: "Підтримати"
		},
	en: {
			welcome: "Mercy Territory",
			subtitle: "A place where hearts find home.",
			support: "Support",
			projectTitle: "About the Project",
			projectDesc: "Mercy Territory is a place where hearts find home. We are the 'Pidtrymka-E' Charity Foundation. We are raising funds to purchase a territory where 50 mothers with children who lost their homes due to war or other circumstances will find shelter! Here they will receive safety, care, and a chance to start life anew.",
			helpTitle: "How You Can Help",
			helpList: [
				"💛 Make a donation — every amount matters.",
				"🤝 Become a partner or patron of the project.",
				"📢 Spread information about the project among friends and colleagues.",
				"🧩 Help organizationally — with volunteering or professional skills."
			],
			whyTitle: "Why is it important",
			whyDesc: "The war has left thousands of people without homes, safety, and stability. Hundreds of families have lost their roofs over their heads, many mothers with children are in a desperate situation, and children have lost their sense of security.",
			whyList: [
				"Mothers with babies are left alone without support and housing.",
				"Children have lost meaning and peace.",
				"Everyone deserves a new chance."
			],
			goalTitle: "Our Goal",
			collectedLabel: "collected",
			goalLabel: "goal",
			location: "Dnipro",
			countdown: "Time left:",
			days: "days",
			hours: "hr",
			minutes: "min",
					seconds: "sec",
					motherTitle: "Mother and Child Home",
					motherDesc: "Here, women with children who have suffered from violence or lost their homes due to war can find protection. They will no longer be left alone with their pain and fears – here they will find care, safety, and new hope.",
					childrenTitle: "Children's Development Center",
					childrenDesc: "Children are the future, and they need love and care today. Professional psychologists and educators will work with them in the center.",
							childrenList: [
								"Play zones will help them feel the joy of childhood.",
								"Creative workshops will reveal their talents.",
								"Development activities and recreation zones will bring stability and a sense that the world can be kind."
							],
							shelterTitle: "Shelter for People in Difficult Circumstances",
							shelterDesc: "We open our doors to those who have lost their homes or support. Here, everyone can recover, feel the value of their life, and get a chance to start over.",
							shelterBtn: "Support"
		},
};

const i18n = createI18n({
	locale: "ua",
	fallbackLocale: "en",
	messages,
});

createApp(App).use(i18n).mount("#app");
