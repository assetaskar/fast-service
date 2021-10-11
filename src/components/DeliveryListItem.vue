<template>
  <div
    :class="{
      item: true,
      disabled: !available,
      available: available,
      active: type === value,
    }"
  >
    <div class="item__main" :style="styleItem">
      <div>
        <div class="name">{{ name }}</div>
        <div class="not-available" v-if="!available">
          Not availible in that city
        </div>
      </div>
      <div class="price">{{ price }}$</div>
    </div>
    <input
      type="radio"
      name="price"
      class="input"
      :id="type"
      :disabled="!available"
      :value="type"
      @change="$emit('input', $event.target.value)"
    />
    <label :for="type" class="label"></label>
    <div class="checked" v-if="type === value">
      <img src="@/assets/checked.svg" alt="checked" />
    </div>
  </div>
</template>

<script>
import pickup from "@/assets/pickup.png";
import courier from "@/assets/courier.png";
import post from "@/assets/post.png";

export default {
  name: "DeliveryListItem",
  props: {
    type: {
      type: String,
      validator: (value) => ["pickup", "courier", "post"].indexOf(value) !== -1,
      required: true,
    },
    available: Boolean,
    price: {
      type: Number,
      default: 0,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    styleItem() {
      const img = { pickup, courier, post };
      return {
        backgroundImage: `url(${img[this.type]})`,
      };
    },
    name() {
      if (this.type === "pickup") return "Pick up";
      return this.type[0].toUpperCase() + this.type.slice(1);
    },
  },
};
</script>

<style scoped>
.item {
  width: 525px;
  height: 225px;
  background-color: #fff;
  border-radius: 22px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  border: 1px solid #e9f0eb;
}
.item:not(:last-child) {
  margin-bottom: 20px;
}
.item.disabled {
  opacity: 0.5;
}
.item__main {
  height: 100%;
  box-sizing: border-box;
  padding: 35px 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: right 30px center;
}
.name {
  font-size: 36px;
  font-weight: bold;
}
.available:hover,
.active {
  box-shadow: 0px 0px 20px rgba(120, 161, 187, 0.3);
  border: none;
}
.not-available {
  font-size: 24px;
  opacity: 0.5;
}
.price {
  font-size: 50px;
  font-weight: bold;
  color: #78a1bb;
}
.input {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}
.label {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.disabled .label {
  cursor: initial;
}
.checked {
  width: 14%;
  height: 100%;
  background: linear-gradient(135deg, #bbdbf0 0%, #6cb5e2 50%, #65b3e4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>