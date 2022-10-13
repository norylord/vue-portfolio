<template>

  <div class="wrapper">

    <section class="bg_section">

      <h2 class="title">проекты<span>.JS</span></h2>

    </section>


    <!--    Этот сайт-->

    <section class="projects">
      <div class="bg_section">


        <ProjectSection
            :key="projects[0].name"
            :desc="projects[0].desc"
            :done="projects[0].done"
            :framework="projects[0].framework"
            :name="projects[0].name"
            :project-key="projects[0].id"
            :short-desc="projects[0].shortDesc"
        >
          <RickAndMortyCharacterCard/>
        </ProjectSection>
      </div>

      <!--    RaiderIO-->

      <section class="bg_section">


        <ProjectSection
            :key="projects[1].name"
            :desc="projects[1].desc"
            :done="projects[1].done"
            :framework="projects[1].framework"
            :name="projects[1].name"
            :project-key="projects[1].id"
            :short-desc="projects[1].shortDesc"
        >
          <RaiderIOWindow/>
        </ProjectSection>
      </section>

      <!--    Rick And Morty-->

      <section class="bg_section">
        <ProjectSection
            :key="projects[2].name"
            :desc="projects[2].desc"
            :done="projects[2].done"
            :framework="projects[2].framework"
            :name="projects[2].name"
            :project-key="projects[2].id"
            :short-desc="projects[2].shortDesc"
        >
          <RickAndMortyCharacterCard/>
        </ProjectSection>
      </section>
      <section class="bg_section">


        <!--    Rick And Morty-->
        <ProjectSection
            :key="projects[3].name"
            :desc="projects[3].desc"
            :done="projects[3].done"
            :framework="projects[3].framework"
            :name="projects[3].name"
            :project-key="projects[3].id"
            :short-desc="projects[3].shortDesc"
        >
          <ToDoList/>
        </ProjectSection>
      </section>
      <!--    ToDo-->
      <section class="bg_section">


        <ProjectSection
            :key="projects[4].name"
            :desc="projects[4].desc"
            :done="projects[4].done"
            :framework="projects[4].framework"
            :name="projects[4].name"
            :project-key="projects[4].id"
            :short-desc="projects[4].shortDesc"
        >
          <RickAndMortyCharacterCard/>
        </ProjectSection>

      </section>
      <!--    TaskBoard-->
      <section class="bg_section">


        <ProjectSection
            :key="projects[5].name"
            :desc="projects[5].desc"
            :done="projects[5].done"
            :framework="projects[5].framework"
            :name="projects[5].name"
            :project-key="projects[5].id"
            :short-desc="projects[5].shortDesc"
        >
          <RickAndMortyCharacterCard/>
        </ProjectSection>
      </section>

      <!--    Next Form-->
      <section class="bg_section">


        <ProjectSection
            :key="projects[6].name"
            :desc="projects[6].desc"
            :done="projects[6].done"
            :framework="projects[6].framework"
            :name="projects[6].name"
            :project-key="projects[6].id"
            :short-desc="projects[6].shortDesc"
        >
          <RickAndMortyCharacterCard/>
        </ProjectSection>
      </section>

      <!--    Hakaton-->

      <section class="bg_section">


        <ProjectSection
            :key="projects[7].name"
            :desc="projects[7].desc"
            :done="projects[7].done"
            :framework="projects[7].framework"
            :name="projects[7].name"
            :project-key="projects[7].id"
            :short-desc="projects[7].shortDesc"
        >
          <RickAndMortyCharacterCard/>
        </ProjectSection>
      </section>

      <!--    React_Portfolio-->

      <section class="bg_section">


        <ProjectSection
            :key="projects[8].name"
            :desc="projects[8].desc"
            :done="projects[8].done"
            :framework="projects[8].framework"
            :name="projects[8].name"
            :project-key="projects[8].id"
            :short-desc="projects[8].shortDesc"
        >
          <RickAndMortyCharacterCard/>
        </ProjectSection>
      </section>

    </section>
  </div>

</template>

<script>
import ProjectSection from "@/components/ProjectSection";
import ProjectsInfo from "@/static/projectsInfo";
import RickAndMortyCharacterCard from "@/components/RickAndMortyCharacterCard";
import RaiderIOWindow from "@/components/RaiderIOWindow";
import ToDoList from "@/components/toDo/ToDoList";


export default {

  components: {ToDoList, RaiderIOWindow, RickAndMortyCharacterCard, ProjectSection},
  data() {
    return {
      projects: ProjectsInfo,
      randRickAndMortyChar: {},
      inMove: false,
      inMoveDelay: 120,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    }
  },
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    /**
     * Handle the 'mousewheel' event for other browsers
     */
    handleMouseWheel: function (e) {

      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    /**
     * Handle the 'DOMMouseScroll' event for Firefox
     */
    handleMouseWheelDOM: function (e) {

      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    /**
     * Move to the previous section or the last section if you're on the first section
     */
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    /**
     * Move to the next section or the first section if you're on the last section
     */
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    /**
     * Scrolls to the passed section id if the section exists and the delay is over
     */
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      // get section and scroll into view if it exists
      let section = document.getElementsByTagName('section')[id];
      if (section) {
        document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      }

      setTimeout(() => {
        this.inMove = false;
      }, this.inMoveDelay);

    },
    /**
     * Handles the 'touchstart' event on mobile devices
     */
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    /**
     * Handles the 'touchmove' event on mobile devices
     */
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    }
  },
  /**
   * mounted() hook executes after page load and call the section offset calculation and registers all events
   */
  mounted() {
    this.calculateSectionOffsets();

    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {passive: false}); // Other browsers

    window.addEventListener('touchstart', this.touchStart, {passive: false}); // mobile devices
    window.addEventListener('touchmove', this.touchMove, {passive: false}); // mobile devices
  },
  /**
   * destroyed() hook executes on page destroy and removes all registered event listeners
   */
  unmounted() {
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    window.removeEventListener('mousewheel', this.handleMouseWheel, {passive: false});  // Other browsers

    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  }
}
</script>

<style lang="sass" scoped>

.bg_section
  background-image: url(".././assets/blue low poly.jpg")
  background-attachment: fixed
  background-position: center
  background-size: cover
  height: 100vh
  scroll-snap-align: start
  display: flex
  justify-content: center
  align-items: center

  &:nth-child(1)
    background-image: url("https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&w=1000&q=80")

  &:nth-child(2)
    background-image: url(".././assets/maxresdefault.jpg")

  &:nth-child(3)
    background-image: url(".././assets/909641.png")

  &:nth-child(4)
    background-image: url(".././assets/299956.jpg")

  &:nth-child(5)
    background-image: url("https://r4.wallpaperflare.com/wallpaper/40/849/87/anime-girls-wallpaper-b96048cd011a1d5b862758cf70b1e63d.jpg")

  &:nth-child(6)
    background-image: url("https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fcontentful%2Fimage%2Fe5382hct74si%2F6eVOPSd4B1a94uF7b1dSLt%2F17f78399e225eec286e0d5ff1adb59fd%2FOG_Image__1_.png&w=3840&q=75")

  &:nth-child(7)
    background-image: url(".././assets/909641.png")

  &:nth-child(8)
    background-image: url(".././assets/feature-img-hackathon_2021.jpg")

  &:nth-child(9)
    background-image: url("https://www.egeniq.nl/sites/default/files/2020-06/frontend_webdeveloper.jpg")


  .title
    font-size: 10vw
    font-family: 'Roboto', sans-serif
    font-weight: bold
    background: linear-gradient(to right top, #00eaff, #f398ff, #00eaff)
    background-size: cover
    color: #fff
    -webkit-text-fill-color: transparent
    -webkit-background-clip: text
    -moz-background-clip: text

    span
      background-size: cover
      font-family: 'Roboto', sans-serif
      font-weight: 800
      color: #fff
      -webkit-text-fill-color: transparent
      -webkit-background-clip: text
      -moz-background-clip: text
      background-image: url("https://acegif.com/wp-content/uploads/gifs/water-20.gif")

</style>