<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="addCategory">Add category</button>
    <button v-on:click="logout">Log out</button>
    <br><br>
    <input type="file" multiple accept="image/*" @change="detectFiles($event.target.files)">
    <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div>
  </div>
</template>

<script>
import firebase from '@/firebase/'

let db = firebase.database()
let storage = firebase.storage()

let categoriesRef = db.ref('categories')

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      newCategory: {
        categoryName: 'Test',
        categoryKey: 't'
      },
      progressUpload: 0,
      file: File,
      uploadTask: '',
      downloadURL: ''
    }
  },
  firebase: {
    categories: categoriesRef
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addCategory () {
      categoriesRef.push(this.newCategory)
      this.newCategory.categoryName = ''
      this.newCategory.categoryKey = ''
    },
    detectFiles (fileList) {
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
    upload (file) {
      console.log(file)
      this.uploadTask = storage.ref('files/' + file.name).put(file)
      this.uploadTask.then(snapshot => {
        this.downloadURL = this.uploadTask.snapshot.downloadURL
        // this.$emit('url', this.downloadURL)
        console.log(this.downloadURL)
      })
    }
  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
