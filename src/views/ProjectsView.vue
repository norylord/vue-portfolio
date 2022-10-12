<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="title">проекты<span>.JS</span></h2>
    </div>


    <!--    Этот сайт-->

    <div class="projects">
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


      <!--    RaiderIO-->


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


      <!--    Rick And Morty-->


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

      <!--    ToDo-->

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


      <!--    TaskBoard-->


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


      <!--    Next Form-->


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


      <!--    Hakaton-->


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


      <!--    React_Portfolio-->


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


    </div>
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
      randRickAndMortyChar: {}
    }
  },

}
</script>

<style lang="sass" scoped>
.title
  font-size: 4rem
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
    background-image: url(".././assets/water.jpg")
</style>