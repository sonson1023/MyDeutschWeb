<template>
  <div class="home">
    <div class="container">
      <form method="post" action="http://localhost:8090/writelecture">
        <!-- <form v-on:submit.prevent="onSubmit"> -->
        <div>
          <table class="table">
            <tbody>
              <tr>
                <th>title :</th>
                <td>
                  <input type="text" name="lecTitle" id="title" />
                </td>
              </tr>
              <tr>
                <th>Lecture :</th>
                <td>
                  <input type="radio" name="lecture" id="A1" value="A1" />A1
                  <input type="radio" name="lecture" id="A2" value="A2" />A2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Create the editor container -->
        <div>
          <label for="about">About Lecture</label>
          <input name="about" type="hidden" />
          <div id="editor">
            <p>Hello World!</p>
            <p>
              Some initial
              <strong>bold</strong> text
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
        <div>
          <!-- <button class="btn btn-primary" type="submit" @click="save()">Save</button> -->
          <button class="btn btn-primary" type="submit">Save1</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
@import url("https://cdn.quilljs.com/1.3.6/quill.snow.css");
</style>

<script>
import Quill from "quill";

export default {
  components: {},
  data: function() {
    return {
      editor: null
    };
  },
  methods: {
    save: function() {
      var form = document.querySelector("form");
      form.editor = this.editor;
      form.onsubmit = function() {
        // Populate hidden form on submit
        var about = document.querySelector("input[name=about]");
        about.value = JSON.stringify(this.editor.getContents());

        console.log("Submitted", $(form).serialize(), $(form).serializeArray());

        // No back end to actually submit to!
        alert("Open the console to see the submit data!");
        return true;
      };
    }
  },
  mounted() {
    this.editor = new Quill("#editor", {
      theme: "snow"
    });
    // this.editor = new Editor({
    //   content: "<p>This is just a boring paragraph</p>"
    // });
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>