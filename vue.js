baseURL = 'http://lnsigo.mipt.ru:6001';

tabs = [
    {
        id: 'Insult detection',
        examples: [
            {text1: 'Fuck you you fucking fucker'},
            {text1: 'Thanks, Obama'},
            {text1: 'Your mother is nice'},
            {text1: 'This cockroach eats shit'}
        ],
        url: baseURL + '/answer/kpi1',
        about: 'Detecting insults in social commentary',
        report: function (t1, t2, response){
            let res = '<div class="card w-100" style="margin:1em"><div class="card-body"><blockquote class="blockquote">'+ t1 +'</blockquote>'+ ((parseFloat(response) >= 0.5) ? 'Insult': 'Not Insult') + '</div></div>';
            return res;
        }
    },
    {
        id: 'Intent classification',
        examples: [
            {text1: 'Find a store near Sia\'s place where I can buy champagne'},
            {text1: 'Is my hotel in NYC for this week better than the hotel I stayed in when I was in Chicago?'},
            {text1: 'What is the cheapest restaurant between Balthazar and Lombardi\'s?'},
            {text1: 'What will the weather be like tomorrow morning?'}
        ],
        url: baseURL + '/answer/intents',
        about: 'Classify intent for a user utterance'
    },
    {
        id: 'Named Entity Recognition',
        examples: [
            {
                text1: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. \
Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. \
“The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”'
            },
            {
                text1: 'New York’s attorney general on Sunday filed a lawsuit against disgraced Hollywood movie producer Harvey Weinstein and the Weinstein Co. following an investigation into allegations of sexual misconduct. \
“As alleged in our complaint, The Weinstein Company repeatedly broke New York law by failing to protect its employees from pervasive sexual harassment, intimidation, and discrimination,” state Attorney General Eric Schneiderman said in court papers. \
Schneiderman launched a civil rights probe into the New York City-based company in October after The New York Times and The New Yorker exposed allegations of sexual assault and harassment spanning decades. \
Scores of women, including well-known actresses, have come forward with stories of forced sexual encounters. Weinstein was fired by the film company he founded with his brother Robert and expelled from Hollywood’s movie academy.'
            },
            {
                text1: 'Prince Harry and fiancee American actress Meghan Markle have released more details about their May 19 wedding, revealing that the event will include a carriage ride through Windsor so they can share the big day with the public. \
The couple will marry at noon in St. George’s Chapel, the 15th century church on the grounds of Windsor Castle that has long been the backdrop of choice for royal occasions. Harry’s grandmother, Queen Elizabeth II, gave permission for use of the venue and will attend the wedding. \
Kensington Palace said in a statement that the couple is “hugely grateful” for the many good wishes they have received and they hope the carriage ride will give the general public a chance to take part.'
            }
        ],
        url: baseURL + '/answer/kpi3en',
        about: 'Extract named entities from text',
        report: function (t1, t2, response){
            return '<div class="card w-100" style="margin:1em"><div class="card-body">' + response.map(function (x) {
                let w = x[0];
                let t = x[1];
                if (t === 'O')
                    return w;
                return '<span style="color: blue">' + w + '</span>';
            }).join(' ') + '</div></div>';
        }
    },
    {
        id: 'Text compression',
        examples: [
            {
                text1: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. \
Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. \
“The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”',
                text2: 'Who is Mike Pence?'
            },
            {
                text1: 'New York’s attorney general on Sunday filed a lawsuit against disgraced Hollywood movie producer Harvey Weinstein and the Weinstein Co. following an investigation into allegations of sexual misconduct. \
“As alleged in our complaint, The Weinstein Company repeatedly broke New York law by failing to protect its employees from pervasive sexual harassment, intimidation, and discrimination,” state Attorney General Eric Schneiderman said in court papers. \
Schneiderman launched a civil rights probe into the New York City-based company in October after The New York Times and The New Yorker exposed allegations of sexual assault and harassment spanning decades. \
Scores of women, including well-known actresses, have come forward with stories of forced sexual encounters. Weinstein was fired by the film company he founded with his brother Robert and expelled from Hollywood’s movie academy.',
                text2: 'Who is Harvey Weinstein?'
            },
            {
                text1: 'Prince Harry and fiancee American actress Meghan Markle have released more details about their May 19 wedding, revealing that the event will include a carriage ride through Windsor so they can share the big day with the public. \
The couple will marry at noon in St. George’s Chapel, the 15th century church on the grounds of Windsor Castle that has long been the backdrop of choice for royal occasions. Harry’s grandmother, Queen Elizabeth II, gave permission for use of the venue and will attend the wedding. \
Kensington Palace said in a statement that the couple is “hugely grateful” for the many good wishes they have received and they hope the carriage ride will give the general public a chance to take part.',
                text2: 'What is St. George’s Chapel?'
            }
        ],
        url: baseURL + '/answer/kpi4',
        about: 'Answer questions from text'
    }
];

for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let example = tab.examples[0];
    tab.text1 = example.text1;
    if ('text2' in example) {
        tab.text2 = example.text2;
    }
    tab.results = [];
    tab.selectedExample = 0;

    if (!tab.hasOwnProperty('report')){
        tab.report = function (t1, t2, response) {
            let query = t2 || t1;

            let res = '<div class="card w-100" style="margin:1em"><div class="card-body"><blockquote class="blockquote">'+ query +'</blockquote>'+ response + '</div></div>';

            return res;
        }
    }
}


Vue.component('tab-content', {
    props: ['tab'],
    template: `
      <div class="row show-grid" style="margin-top:2em">
        <div class="col-sm-6">
          <blockquote class="blockquote">
            <p>{{tab.about}}</p>
          </blockquote>
          <div>
            <form v-on:submit.prevent="send">
              <div class="form-group">
                <select v-model="tab.selectedExample" class="form-control">
                  <option v-for="(example, index) in tab.examples" :value="index">Example {{index + 1}}</option>
                </select>
              </div>
              <div class="form-group">
                <textarea v-model="tab.text1" class="form-control" rows="7"/>
              </div>
              <div class="form-group">
                <input v-if="tab.hasOwnProperty('text2')" v-model="tab.text2" class="form-control"/>
              </div>
              <button type="submit" class="btn btn-primary">Send</button>
            </form>
          </div>
       </div>
        <div class="col-sm-6">
          <div class="row" v-for="result in tab.results" v-html="result"></div>
        </div>
        </div>
      </div>`,
    methods: {
        send: function () {
            let tab = this.tab;
            let data = {
                text1: tab.text1,
                text2: tab.text2
            };
            this.$http.post(this.tab.url, data).then(function (response) {
                tab.results.splice(0, 0, tab.report(data.text1, data.text2, response.body));
            });
        }
    },
    watch: {
        'tab.selectedExample'(newVal) {
            let example = this.tab.examples[newVal];
            this.tab.text1 = example.text1;
            if ('text2' in example) {
                this.tab.text2 = example.text2;
            }
        }
    }
});


new Vue({
    el: '#app',
    data: {
        tabs
    }
});
