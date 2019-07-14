<template>
<div id="app">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </head>
  <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">Lass und Deutsch lernen!</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <!-- <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>-->
          <!-- <li class="nav-item">
            <a class="nav-link" href="services.html">Services</a>
          </li>-->
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>

          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownPortfolio"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Portfolio</a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownPortfolio"
            >
              <a class="dropdown-item" href="portfolio-1-col.html">1 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
            </div>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownPortfolio"
            >
              <a class="dropdown-item" href="portfolio-1-col.html">1 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
              <a class="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
            </div>
          </li>-->

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownBlog"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Lernen</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <router-link class="dropdown-item" to="lecture">A1</router-link>
              <!-- <a class="dropdown-item" href="blog-home-2.html">A2</a> -->
              <router-link class="dropdown-item" to="lecture">A2</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownBlog"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Prüfung(Test)</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <router-link class="dropdown-item" to="/test">Die Prüfung für A1</router-link>
              <router-link class="dropdown-item" to="/test">Die Prüfung für A2</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownBlog"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Other Pages</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <router-link to="writelecture">Schreib Contents</router-link>
              <!-- 
              <a class="dropdown-item" href="full-width.html">Full Width Page</a>
              <a class="dropdown-item" href="sidebar.html">Sidebar Page</a>
              <a class="dropdown-item" href="faq.html">FAQ</a>
              <a class="dropdown-item" href="404.html">404</a>
              <a class="dropdown-item" href="pricing.html">Pricing Table</a>
              -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</div>
</template>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
@import url("/css/modern-business.css");
@import url("/css/font-awesome-4.7.0/css/font-awesome.min.css");

/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} 
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

*/
</style>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<script>
import jQuery from "jquery";

export default {
  data: function() {
    return {
      title: "Lernen Deutsch!"
    };
  },
  // Usage with context the component
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function() {
      return {
        inner: this.title
      };
    },
    meta: [
      { name: "description", content: "My description", id: "desc" },
      { charset: "utf-8" }
      // { name: "viewport", content: "width=device-width" }
    ],
    link: [],
    script: [
      {
        type: "text/javascript",
        src: "/jquery/jquery.min.js",
        async: true,
        body: false
      }, // Insert in body
      {
        type: "text/javascript",
        src: "/bootstrap/js/bootstrap.bundle.min.js",
        async: true,
        body: false
      } // Insert in body
    ],
    style: []
  },
  mounted() {
    window.jQuery = jQuery;
    window.$ = jQuery;
  }
};
</script>

