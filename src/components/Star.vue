<template>
  <div class="star-rating">
    <label class="star-rating__star"
           :class="{'is-selected': isSelected, 'is-hover': isSelected, 'is-disabled': !isSelected}">
      <input class="star-rating star-rating__checkbox"
             type="checkbox"
             v-model="isSelected"
             @change="startChange">★
    </label>
  </div>
</template>
<script>
  export default {
    props: {
      'favorite': Boolean
    },
    data () {
      return {
        isSelected: this.favorite
      }
    },
    methods: {
      startChange () {
        this.$emit('onChange', this.isSelected)
      }
    }
  }
</script>
<style lang="scss" scoped>
  /* style star ratting component */
  .star-rating__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
  .star-rating__star {
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 1.5em;
    color: #ABABAB;
    transition: color .2s ease-out;
  }
  .star-rating__star:hover {
    cursor: pointer;
  }
  .star-rating__star.is-selected,
  .star-rating__star.is-hover {
    color: #FFD700;
  }
  .star-rating__star.is-disabled:hover {
    cursor: pointer;
  }

</style>
