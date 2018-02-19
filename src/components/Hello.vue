<template>
  <div class="hello">
    <b-container fluid>
      <b-row>
        <b-col sm="3" style="padding-left: 0px;">
          <CategoryList :categories="categories"></CategoryList>
        </b-col>
        <b-col sm="9">
          <button v-on:click="addCategory">Add category</button>
          <button v-on:click="logout">Log out</button>
          <button v-on:click="playCategory('Test')">Play test</button>
          <br><br>
          <input type="file" multiple accept="image/*" @change="detectFiles($event.target.files)">
          <select v-model="uploadCategory">
            <option v-for="category in categories" v-bind:value="category.categoryName" :key="category.key">{{ category.categoryName }}</option>
          </select>
          <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div>
          <AudioPlayer :html5=true :sources="audioSources" :loop="true"></AudioPlayer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from '@/firebase/'
import AudioPlayer from '@/components/audio-player.vue'
import CategoryList from '@/components/categoryList.vue'

let db = firebase.database()
let storage = firebase.storage()
let categoriesRef = db.ref('categories')
let songsRef = db.ref('songs')

export default {
  name: 'hello',
  components: {
    AudioPlayer,
    CategoryList
  },
  data () {
    return {
      newCategory: {
        categoryName: 'Test',
        categoryKey: 't'
      },
      uploadCategory: '',
      progressUpload: 0,
      file: File,
      uploadTask: '',
      downloadURL: '',
      audioSources: [
        'https://firebasestorage.googleapis.com/v0/b/arenadj-fb00c.appspot.com/o/files%2F01%20Enter%20Sandman%20(mp3cut.net).mp3?alt=media&token=042595f5-e8ff-4f33-b6ec-b851242931b8'
      ],
      playCategories: {},
      categories: [],
      songs: []
    }
  },
  firebase: {
    categories: categoriesRef,
    songs: songsRef
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    playCategory (category) {
      this.audioSources = this.shuffleArray(this.songs.filter(song => song.category === category).map(song => song.url))
    },
    shuffleArray (array) {
      let currentIndex = array.length
      let temporaryValue = ''
      let randomIndex = 0
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
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
      this.uploadTask = storage.ref('files/' + file.name).put(file)
      this.uploadTask.then(snapshot => {
        this.downloadURL = this.uploadTask.snapshot.downloadURL
        // this.$emit('url', this.downloadURL)
        let song = {
          category: this.uploadCategory,
          url: this.downloadURL,
          name: file.name
        }

        songsRef.push(song)
      })
    }
  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      })
    },
    'categories' (to, from) {
      if (to.length > 0) {
        this.uploadCategory = to[0].categoryName
      }
      for (var i = 0; i < to.length; i++) {
        this.playCategories[to[i].categoryName] = []
      }
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
.hello {
  height: 100%;
}
.container-fluid {
  height: 100%;
}
</style>
