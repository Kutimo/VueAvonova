<template>
  <div class="productCard">
    <img v-if="cardIcon" :src="cardIcon" class="cardIcon" alt="Card Icon" />
    <h4 v-if="cardHeader" class="cardHeader">{{ cardHeader }}</h4>
    <p class="body-md, infoSection" v-html="cardContent"></p>
    <div class="buttonSection">
      <ButtonPrimary buttonText="Les mer" @click="onReadMore" />
      <ButtonPrimary buttonText="Bestill" @click="onBookAppointment" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue";

const cardProps = defineProps({
  cardIcon: String,
  cardHeader: String,
  cardContent: String,
});

const onReadMore = () => {
  console.log("Read more action");
};

const onBookAppointment = () => {
  console.log("Book appointment action");
};
</script>

<style scoped>
.productCard {
  display: flex;
  flex-direction: column;
  background-color: #e0fff9 /* var(--green-600) */;
  border-radius: var(--radius-4);
  overflow: hidden;
  height: 20%;
  max-width: 35%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: var(--spacing-10);
}
.cardIcon {
  width: 30%;
  margin: 0 auto;
  padding: var(--spacing-4);
}
.cardHeader {
  text-align: center;
  padding: var(--spacing-4);
}
.iconImgSection {
  text-align: center;
  padding: var(--spacing-4);
}
.infoSection {
  padding: 20px;
  text-align: center;
}

.buttonSection {
  display: flex;
  justify-content: space-around;
  padding: var(--spacing-4);
}
</style>
