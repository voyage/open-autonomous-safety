<template>
  <div class="home">
    <div class="hero">

      <img src="/open-autonomous-safety-collab-title.png" alt="Open Autonomous Safety" style="max-width:600px;width:90%;margin:0px auto">

      <div class="covers">
        <a href="/scenarios/" class="cover">
          <img src="/oas-st-poster.jpg" alt="Scenarios Testing" style="box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);">
        </a>

        <a href="/functional-safety/" class="cover">
          <img src="/oas-fs-poster.jpg" alt="Functional Safety Testing" style="box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);">
        </a>

        <a href="/autonomy-assessment/" class="cover">
          <img src="/oas-mp-poster.jpg" alt="Autonomy Assessment" style="box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);">
        </a>

        <a href="/testing-toolkit/" class="cover">
          <img src="/oas-tt-poster.jpg" alt="Testing Toolkit" style="box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);">
        </a>
      </div>

      <p class="description">
        Safety procedures and materials for the next generation of autonomous vehicles
      </p>
      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>
    <div class="features">
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <Content custom/>
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.home
  padding $navbarHeight 2rem 0
  max-width 1200px
  margin 0px auto
  .hero
    padding-top 6rem
    text-align center
    .covers
      display flex
      padding 3rem 0 3rem 0
      flex-wrap wrap
      flex-direction row
      justify-content center
      cursor pointer
    .cover
      width 21%
      display block
      margin 0.5rem 1.5rem;
      cursor pointer
      :hover
        opacity 0.7
    img
      max-width 100%
      display block
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      font-weight 800
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    max-width 1100px
    margin 3rem auto 0 auto
    border-top 1px solid $borderColor
    padding 1.2rem 0
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content strech
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 50%
    max-width 50%
    text-align center
    h2
      font-size 1.4rem
      font-weight 800
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
    font-size 12px

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .cover
      width: 50%
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      padding-top 3rem
      .cover
        width 40%
        display block
        margin 1rem
      .covers
        padding 3rem 0 1rem 0
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
        font-weight 800
    .feature
      h2
        font-size 1.25rem
</style>
