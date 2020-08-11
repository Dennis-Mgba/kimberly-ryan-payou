<template>
    <div class="">
        <li class="accordion__item">
          <div
            class="accordion__trigger"
            :class="{'accordion__trigger_active': visible}"
            @click="open">

            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <slot name="accordion-trigger"></slot>
          </div>

          <transition
            name="accordion"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end">

            <div class="accordion__content"
              v-show="visible">
              <ul>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <slot name="accordion-content"></slot>
              </ul>
            </div>
          </transition>
        </li>
    </div>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  // border-bottom: 1px solid #ebebeb;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion__trigger a {
    font-weight: bold;
    color: #fff;
    font-size: 17px;
    text-decoration: none;
    padding: 10px 0;
    margin-bottom: 10px;
    height: 50px;
    padding-left: 10%;
    width: 100%;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.accordion__trigger a.router-link-exact-active {
    color: #F97B00;
    background-color: #1ec832;
    border-right: 3.5px solid #F97B00;
}

@media screen and (max-width: 900px) {
    ul {
        padding-left: 10px;
    }
}
</style>
