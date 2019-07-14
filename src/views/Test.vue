<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <WritingForm msg="Welcome to Your Vue.js App" /> -->
    <!-- Content Row -->

    <!-- Page Content -->
    <div class="container">
      <!-- Page Heading/Breadcrumbs -->
      <h1 class="mt-4 mb-3">
        wachlen die Sektion aus
        <small>Subheading</small>
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li class="breadcrumb-item active">About</li>
      </ol>

      <!-- Content Row -->
      <div class="row">
        <!-- Sidebar Column -->
        <div class="col-lg-3 mb-4">
          <div class="list-group">
            <a class="list-group-item" @click="selectMenu('1')">Unregelmässige Verben</a>
            <!-- <a href="index.html" class="list-group-item">Home</a>
            <a href="about.html" class="list-group-item">About</a>
            <a href="services.html" class="list-group-item">Services</a>
            <a href="contact.html" class="list-group-item">Contact</a>
            <a href="portfolio-1-col.html" class="list-group-item">1 Column Portfolio</a>
            <a href="portfolio-2-col.html" class="list-group-item">2 Column Portfolio</a>
            <a href="portfolio-3-col.html" class="list-group-item">3 Column Portfolio</a>
            <a href="portfolio-4-col.html" class="list-group-item">4 Column Portfolio</a>
            <a href="portfolio-item.html" class="list-group-item">Single Portfolio Item</a>
            <a href="blog-home-1.html" class="list-group-item">Blog Home 1</a>
            <a href="blog-home-2.html" class="list-group-item">Blog Home 2</a>
            <a href="blog-post.html" class="list-group-item">Blog Post</a>
            <a href="full-width.html" class="list-group-item">Full Width Page</a>
            <a href="sidebar.html" class="list-group-item active">Sidebar Page</a>
            <a href="faq.html" class="list-group-item">FAQ</a>
            <a href="404.html" class="list-group-item">404</a>
            <a href="pricing.html" class="list-group-item">Pricing Table</a>-->
          </div>
        </div>
        <!-- Content Column -->
        <div class="col-lg-9 mb-4">
          <h2>Lösen Sie das Problem.</h2>
          <p>-</p>
          <WritingForm v-if="(section == 0)"></WritingForm>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
// @ is an alias to /src
import WritingForm from "@/components/WritingForm.vue";

export default {
  name: "home",
  components: {
    WritingForm
  },
  data() {
    return {
      section: -1
    };
  },
  methods: {
    selectMenu: function(msg) {
      console.log(msg);
      this.section = 0;
    }
  }
};
</script>
