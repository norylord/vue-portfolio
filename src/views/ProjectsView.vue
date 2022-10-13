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
            :bg-desc-color="'red'"
        >
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
            :bg-desc-color="'blue'"
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
            :bg-desc-color="'green'"
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
            :bg-desc-color="'yellow'"
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
            :bg-desc-color="'cyan'"
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
            :bg-desc-color="'teal'"
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
            :bg-desc-color="'linear-gradient(red, blue)'"
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
            :bg-desc-color="'violet'"
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
            :bg-desc-color="'linear-gradient(green, orange)'"
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