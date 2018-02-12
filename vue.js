baseURL = 'http://dev.ipavlov.mipt.ru:6001';

tabs = [
  {
    id: 'Insult detection',
    examples:[
      {text1: 'Fuck you you fucking fucker'},
      {text1: 'Thanks, Obama'},
      {text1: 'Your mother is nice'},
      {text1: 'This cockroach eats shit'}
    ],
    url: baseURL + '/answer/kpi1',
    about: 'Detecting insults in social commentary'
  },
  {
    id: 'Intent classification',
    examples:[
      {text1: 'Fuck you you fucking fucker'},
      {text1: 'Thanks, Obama'},
      {text1: 'Your mother is nice'},
      {text1: 'This cockroach eats shit'}
    ],
    url: baseURL + '/answer/intents',
    about: 'Classify intent for a user utterance'
  },
  {
    id: 'Named Entity Recognition',
    examples:[
      {text1: 'Fuck you you fucking fucker'},
      {text1: 'Thanks, Obama'},
      {text1: 'Your mother is nice'},
      {text1: 'This cockroach eats shit'}
    ],
    url: baseURL + '/answer/kpi3en',
    about: 'Extract named entities from text'
  },
  {
    id: 'Text compression',
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
    about: 'Answer questions from text'
  }
];

for (let i = 0; i < tabs.length; i++){
  let tab = tabs[i];
  let example = tab.examples[0];
  tab.text1 = example.text1;
  if ('text2' in example){
    tab.text2 = example.text2;
  }
  tab.results = [];
  tab.selectedExample = 0;
}


Vue.component('tab-content', {
  props: ['tab'],
  template: `<div style="margin-top:1em; margin-bottom:3em">
    <blockquote class="blockquote">
      <p>{{tab.about}}</p>
    </blockquote>
    <div style="display: flex;">
      <div style="width: 50%;">
        <form v-on:submit.prevent="send">
          <div>
          </div>
          <div class="form-group">
            <select v-model="tab.selectedExample" class="form-control">
              <option v-for="(example, index) in tab.examples" :value="index">Example {{index + 1}}</option>
            </select>
          </div>
          <div class="form-group">
            <textarea v-model="tab.text1" class="form-control"/>
          </div>
          <div class="form-group">
            <input v-if="tab.hasOwnProperty('text2')" v-model="tab.text2" class="form-control"/>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
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
  },
  watch: {
    'tab.selectedExample'(newVal){
      let example = this.tab.examples[newVal]
      this.tab.text1 = example.text1;
      if ('text2' in example){
        this.tab.text2 = example.text2;
      };
    }
  }
})


new Vue({
  el: '#app',
  data: {
    tabs
  }
})
