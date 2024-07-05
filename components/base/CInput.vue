<template>
  <div class="form-element-row">
    <label class="label fs-7">{{ label }}</label>
    <input :type="type" :value="inputValue" :class="['form-control', { 'erorr-input': errorMessage }]" :placeholder="placeholder"
           @input="handleInputChange" >
    <span v-if="errorMessage && ignoreErrorMessage == false" class="text-danger">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import {useField} from 'vee-validate';
import {watch} from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
    require: true
  },
  modelValue: {
    default: ""
  },
  label: {
    type: String,
    default: "نام"
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: "نام"
  },
  ignoreErrorMessage: {
    type: Boolean,
    default: false
  }
});
const {
  value: inputValue,
  errorMessage,
  handleChange,
  setValue
} = useField(props.name, undefined, {initialValue: props.modelValue});
const emit = defineEmits(['update:modelValue']);
const handleInputChange = (e) => {
  emit("update:modelValue", e.target.value)
  handleChange(e)
};
watch(() => props.modelValue, (val: any) => {
  setValue(val)
})

</script>

<style scoped>

</style>