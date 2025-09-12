<template>
  <main class="main-content">
  <ProjectSection />
  <WhySection />
  <GoalSection />
  <HelpSection />
  <GallerySection />

     
  </main>
</template>

<script>

import ProjectSection from './ProjectSection.vue';
import WhySection from './WhySection.vue';
import GoalSection from './GoalSection.vue';
import HelpSection from './HelpSection.vue';
import GallerySection from './GallerySection.vue';

export default {
  name: 'MainContent',
  components: {
    ProjectSection,
  WhySection,
  GoalSection,
  HelpSection,
  GallerySection
  }
}
</script>

<style scoped>
.main-content {
  max-width: 1000px;
  margin: 40px auto 0 auto;
  padding: 0 16px 32px 16px;
}
</style>
