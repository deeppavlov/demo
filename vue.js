baseURL = 'http://dev.ipavlov.mipt.ru:6001'

tabs = [
  {
    id: 'insults',
    examples:[
      {text1: 'Fuck you you fucking fucker'},
      {text1: 'Thanks, Obama'},
      {text1: 'Your mother is nice'},
      {text1: 'This cockroach eats shit'}
    ],
    url: baseURL + '/answer/kpi1',
    about: 'This is Insults detection'
  },
  {
    id: 'classification',
    examples:[
      {text1: 'Fuck you you fucking fucker'},
      {text1: 'Thanks, Obama'},
      {text1: 'Your mother is nice'},
      {text1: 'This cockroach eats shit'}
    ],
    url: baseURL + '/answer/classifier',
    about: 'This is Sentence classification'
  },
  {
    id: 'ner',
    examples:[
      {text1: 'Fuck you you fucking fucker'},
      {text1: 'Thanks, Obama'},
      {text1: 'Your mother is nice'},
      {text1: 'This cockroach eats shit'}
    ],
    url: baseURL + '/answer/kpi3en',
    about: 'This is the NER'
  },
  {
    id: 'squad',
    examples:[
      {
        text1: 'Fuck you you fucking fucker',
        text2: 'Who are you?'
      },
      {
        text1: 'Thanks, Obama',
        text2: 'Who shoud we thank?'
      },
      {
        text1: 'Your mother is nice',
        text2: 'Is your mother nice?'
      },
      {
        text1: 'This cockroach eats shit',
        text2: 'what does this cockroach eat?'
      }
    ],
    url: baseURL + '/answer/kpi4',
    about: 'This is SQUAD'
  }
]

for (let i = 0; i < tabs.length; i++){
  let tab = tabs[i];
  let example = tab.examples[0];
  tab.text1 = example.text1;
  if ('text2' in example){
    tab.text2 = example.text2;
  };
  tab.results = []
}


Vue.component('tab-content', {
  props: ['tab'],
  template: `<div>
    <p>{{tab.about}}</p>
    <div style="display: flex;">
      <div style="width: 50%;">
        <form v-on:submit.prevent="send">
          <div>
          </div>

          <input v-model="tab.text1"/>
          <input v-if="tab.hasOwnProperty('text2')" v-model="tab.text2"/>
          <button type="submit">send</button>
        </form>
      </div>
      <div>
        <div v-for="result in tab.results">{{result}}</div>
      </div>
    </div>
  </div>`,
  methods:{
    send: function(){
      data = {
        text1: this.tab.text1,
        text2: this.tab.text2
      }
      // console.dir(this.tab)
      this.$http.post(this.tab.url, data).then(function(response){
        console.dir(response);
        this.tab.results.splice(0, 0, response.body);
      });
      // alert(JSON.stringify(data));
    }
  }
})


new Vue({
  el: '#app',
  data: {
    tabs
  }
})
