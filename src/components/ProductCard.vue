<template>
  <div class="productCard">
    <img v-if="cardIcon" :src="cardIcon" class="cardIcon" alt="Card Icon"/>
    <h4 v-if="cardHeader" class="cardHeader">{{ cardHeader }}</h4>
    <p class="body-md, infoSection" v-html="cardContent"></p>
    <div class="buttonSection">
      <ButtonPrimary buttonText="Les mer" @click="onReadMore" />
      <ButtonPrimary buttonText="Bestill" @click="onBookAppointment" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue';

const props = defineProps({
  cardIcon: String,
  cardHeader: String,
  cardContent: String,
});

const onReadMore = () => {
  console.log('Read more action');
};

const onBookAppointment = () => {
  console.log('Book appointment action');
};
</script>

<style scoped>
.productCard {
  display: flex;
  flex-direction: column;
  background-color: #E0FFF9;
  border-radius: 8px; 
  overflow: hidden;
  height: 20%;
  max-width: 35%; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}
.cardIcon {
  width: 30%;
  margin: 0 auto;
  padding: 20px;
}
.cardHeader {
  text-align: center;
  padding: 20px;
}
.iconImgSection{
  text-align: center;
  padding: 20px;
}
.infoSection {
  padding: 20px;
  text-align: center;
}

.buttonSection {
  display: flex;
  justify-content: space-around; 
  padding: 15px;
}
</style>
