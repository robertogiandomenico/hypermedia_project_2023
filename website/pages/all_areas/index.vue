<template>
    <Head>
        <Title>Areas - Wizarding Ventures</Title>
    </Head>

    <main>
        <MyTitle :title="'AREAS'" />

        <span class="all-areas-text">Browse the areas of investment to know more about what we care and love:</span>

        <div class="full-area-container">
          <!-- preview of each area (name, logo, short description and link to its page)-->
          <div v-for="area of areas" :class="area.id%2 ? 'area-section-dx' : 'area-section-sx'">
            <img class="preview-area-img" :src="`https://ctqezitrfesnhivpuulw.supabase.co/storage/v1/object/public/Images/Areas/${area.id}.png`" :alt="`${area.name} logo`"/>
            <div class="preview-area-info">
              <div class="preview-area-title">{{ area.name }}</div>
              <div v-html="truncatedAreaDescription(area.desc_col1)" class="preview-area-description"></div>
              <NuxtLink :to="`/all_areas/${area.id}`" aria-label="Area button" :title="`${area.name} area`">
                <button class="dark-btn">
                  See the full description
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <hr class="separator" />

        <div class="bottom-links">
            <NuxtLink id="to_all_projects" to="/projects"><button class="transparent-btn">Check all the projects</button></NuxtLink>
            <NuxtLink id="to_most_relevant_projects" to="/most_relevant_projects"><button class="transparent-btn">See the most relevant projects</button></NuxtLink>
            <NuxtLink id="to_projects_by_area" to="/projects_by_area"><button class="transparent-btn">Check the projects by area</button></NuxtLink>
        </div>
    </main>
</template>
  
<script setup>
  const { data: areas } = await useFetch('/api/all_areas'); //get all areas

  //truncate the area description to obtain a preview
  const truncatedAreaDescription = (areaDescription) => {
    const truncatedWords = areaDescription.split(' ').slice(0, 55);
    let description = truncatedWords.join(' ') + "...";
      return description;
  };

  //Search Engine Optimization
  const description = ref('In this page you will find all the areas of investment of our projects.');
  const keywords = ref('Areas, Investments, Projects, All Areas');

  useHead({
      meta: [
          { name: 'description', content: description },
          { name: 'keywords', content: keywords }
      ]
  });
</script>
  
  
<style>
  .all-areas-text {
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    margin: 30px 10px 10px;
  }

  .full-area-container {
    margin: 5vh 10vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
  }

  .area-section-dx, .area-section-sx {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 1vh;
    padding: 20px 40px;
    border-radius: 10px;
    color: black;
    background-color: #fff6f6e3;
    -webkit-box-shadow: 20px 20px 60px 0 rgba(172, 172, 172, 0.5);
    box-shadow: 20px 20px 60px 0 rgba(172, 172, 172, 0.5);
  }

  .area-section-dx {
    flex-direction: row;
    margin-right: 5vw;
  }

  .area-section-sx {
    flex-direction: row-reverse;
    margin-left: 5vw;
  }

  .preview-area-img {
    width: 40vh;
    height: auto;
    min-width: 100px;
    filter: invert(1);
    margin: 20px;
  }

  .preview-area-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 600px;
  }

  .preview-area-title {
    font-size: xx-large;
    font-weight: bold;
  }

  .preview-area-description {
    font-size: inherit;
    margin: 20px 0;
  }

  @media screen and (max-width: 700px) {
    .full-area-container {
      margin: 3vh 4vw;
    }

    .area-section-dx, .area-section-sx {
      flex-direction: column;
      margin: 0;
    }

    .preview-area-img {
      width: 60%;
      height: auto;
    }
  }
</style>