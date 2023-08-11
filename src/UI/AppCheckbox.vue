<script>
export default {
	name: 'app-checkbox',
	props: {
		id: String,
		checked: Boolean,
		disabled: Boolean,
		modelValue: {default: false},
		value: { type: String },
    trueValue: { default: true },
    falseValue: { default: false }
	},
	emits: {
		'update:modelValue': null
	},
	computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },
	methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('update:modelValue', newValue)
      } else {
        this.$emit('update:modelValue', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<template>
	<input type="checkbox" :checked="isChecked" :disabled="disabled" :value="value" @change="updateInput" :id="id" class="checkbox">
	<label :for="id"><slot></slot></label>
</template>

<style>
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.checkbox+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.checkbox:checked+label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* стили при наведении курсора на checkbox */
.checkbox:not(:disabled):not(:checked)+label:hover::before {
  border-color: #b3d7ff;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.checkbox:not(:disabled):active+label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
/* стили для чекбокса, находящегося в фокусе */
.checkbox:focus+label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.checkbox:focus:not(:checked)+label::before {
  border-color: #80bdff;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.checkbox:disabled:checked+label::before {
  background-color: #80bdff;
}
.checkbox:disabled+label::before {
  background-color: #b3d7ff;
	}
</style>