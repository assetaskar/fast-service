<template>
  <div class="position">
    <div :class="{ 'wrap-search': true, focus: isFocus }">
      <div class="search">
        <input
          type="text"
          placeholder="Enter name of the city"
          class="input"
          :value="value"
          @input="$emit('input', $event.target.value)"
          @keyup.enter="enterHandler"
          @focus="isFocus = true"
          @blur="isFocus = false"
        />
        <button
          :class="{ 'btn-clear': true, 'btn-error': error.isError }"
          v-if="isClickEnter"
          @click="reset"
        >
          <img src="@/assets/delete.svg" alt="X" />
        </button>
        <button class="btn-enter" v-else @click="enterHandler">Enter</button>
      </div>
      <slot :is-click-enter="isClickEnter" />
    </div>
    <div class="error">
      <div v-if="error.isError">{{ error.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      required: true,
    },
    error: {
      type: Object,
      default: function () {
        return { isError: false, message: "" };
      },
      validator: function (obj) {
        return (
          typeof obj.isError === "boolean" && typeof obj.message === "string"
        );
      },
    },
  },
  data: () => ({
    isClickEnter: false,
    isFocus: false,
  }),
  watch: {
    value() {
      this.isClickEnter = false;
    },
  },
  methods: {
    enterHandler() {
      if (!this.value) return;
      this.$emit("enter");
      this.isClickEnter = true;
    },
    reset() {
      this.$emit("input", "");
      this.$emit("clear");
    },
  },
};
</script>

<style scoped>
.position {
  position: relative;
  padding-top: 63px;
}
.wrap-search {
  width: 100%;
  border: 1px solid #e9f0eb;
  border-radius: 30px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
}
.wrap-search.focus {
  box-shadow: 0px 0px 20px rgba(120, 161, 187, 0.3);
}
.search {
  display: flex;
  justify-content: space-between;
}
.input {
  border: none;
  font-size: 24px;
  padding: 18px 36px;
  font-weight: bold;
  width: 80%;
}
.input:focus {
  outline: none;
}
.input::placeholder {
  color: #d9e4dc;
  font-weight: normal;
}
.btn-enter,
.btn-clear {
  padding: 18px 48px;
  border: none;
  background: linear-gradient(
    279.56deg,
    #65b3e4 15.15%,
    rgba(120, 161, 187, 0) 171.55%
  );
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
.btn-clear {
  padding: 18px 24px;
}
.btn-clear.btn-error {
  background: linear-gradient(
    279.56deg,
    #ff4757 15.15%,
    rgba(255, 255, 255, 0) 171.55%
  );
}
.btn:focus {
  outline: none;
}
.error {
  font-size: 20px;
  color: #ff4757;
  min-height: 25px;
  margin-top: 15px;
}
@media (max-width: 1215px) {
  .position {
    padding-top: 50px;
  }
  .input {
    font-size: 16px;
    padding: 15px 20px;
  }
  .btn-enter {
    padding: 16px;
    font-size: 16px;
  }
  .btn-clear {
    padding: 14.5px 18px;
  }
  .error {
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>