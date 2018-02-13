baseURL = 'http://lnsigo.mipt.ru:6001';

tabs = [
    {
        id: 'Text compression',
        examples: [
            {
                text1: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. \
Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. \
“The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”',
                text2: 'What country is under the pressure?'
            },
            {
                text1: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. \
Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. \
“The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”',
                text2: 'Who is Mike Pence?'
            },
            {
                text1: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. \
Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. \
“The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”',
                text2: 'Where is the Winter Olympic Games in 2018?'
            },
            {
                text1: 'New York’s attorney general on Sunday filed a lawsuit against disgraced Hollywood movie producer Harvey Weinstein and the Weinstein Co. following an investigation into allegations of sexual misconduct. \
“As alleged in our complaint, The Weinstein Company repeatedly broke New York law by failing to protect its employees from pervasive sexual harassment, intimidation, and discrimination,” state Attorney General Eric Schneiderman said in court papers. \
Schneiderman launched a civil rights probe into the New York City-based company in October after The New York Times and The New Yorker exposed allegations of sexual assault and harassment spanning decades. \
Scores of women, including well-known actresses, have come forward with stories of forced sexual encounters. Weinstein was fired by the film company he founded with his brother Robert and expelled from Hollywood’s movie academy.',
                text2: 'How long sexual harassment was taking place?'
            },
            {
                text1: 'New York’s attorney general on Sunday filed a lawsuit against disgraced Hollywood movie producer Harvey Weinstein and the Weinstein Co. following an investigation into allegations of sexual misconduct. \
“As alleged in our complaint, The Weinstein Company repeatedly broke New York law by failing to protect its employees from pervasive sexual harassment, intimidation, and discrimination,” state Attorney General Eric Schneiderman said in court papers. \
Schneiderman launched a civil rights probe into the New York City-based company in October after The New York Times and The New Yorker exposed allegations of sexual assault and harassment spanning decades. \
Scores of women, including well-known actresses, have come forward with stories of forced sexual encounters. Weinstein was fired by the film company he founded with his brother Robert and expelled from Hollywood’s movie academy.',
                text2: 'Was Weinstein fired?'
            },
            {
                text1: 'New York’s attorney general on Sunday filed a lawsuit against disgraced Hollywood movie producer Harvey Weinstein and the Weinstein Co. following an investigation into allegations of sexual misconduct. \
“As alleged in our complaint, The Weinstein Company repeatedly broke New York law by failing to protect its employees from pervasive sexual harassment, intimidation, and discrimination,” state Attorney General Eric Schneiderman said in court papers. \
Schneiderman launched a civil rights probe into the New York City-based company in October after The New York Times and The New Yorker exposed allegations of sexual assault and harassment spanning decades. \
Scores of women, including well-known actresses, have come forward with stories of forced sexual encounters. Weinstein was fired by the film company he founded with his brother Robert and expelled from Hollywood’s movie academy.',
                text2: 'Why Weinstein is being sued?'
            },
            {
                text1: 'Prince Harry and fiancee American actress Meghan Markle have released more details about their May 19 wedding, revealing that the event will include a carriage ride through Windsor so they can share the big day with the public. \
The couple will marry at noon in St. George’s Chapel, the 15th century church on the grounds of Windsor Castle that has long been the backdrop of choice for royal occasions. Harry’s grandmother, Queen Elizabeth II, gave permission for use of the venue and will attend the wedding. \
Kensington Palace said in a statement that the couple is “hugely grateful” for the many good wishes they have received and they hope the carriage ride will give the general public a chance to take part.',
                text2: 'Who are going to marry?'
            },
            {
                text1: 'Prince Harry and fiancee American actress Meghan Markle have released more details about their May 19 wedding, revealing that the event will include a carriage ride through Windsor so they can share the big day with the public. \
The couple will marry at noon in St. George’s Chapel, the 15th century church on the grounds of Windsor Castle that has long been the backdrop of choice for royal occasions. Harry’s grandmother, Queen Elizabeth II, gave permission for use of the venue and will attend the wedding. \
Kensington Palace said in a statement that the couple is “hugely grateful” for the many good wishes they have received and they hope the carriage ride will give the general public a chance to take part.',
                text2: 'When will be the wedding?'
            },
            {
                text1: 'Prince Harry and fiancee American actress Meghan Markle have released more details about their May 19 wedding, revealing that the event will include a carriage ride through Windsor so they can share the big day with the public. \
The couple will marry at noon in St. George’s Chapel, the 15th century church on the grounds of Windsor Castle that has long been the backdrop of choice for royal occasions. Harry’s grandmother, Queen Elizabeth II, gave permission for use of the venue and will attend the wedding. \
Kensington Palace said in a statement that the couple is “hugely grateful” for the many good wishes they have received and they hope the carriage ride will give the general public a chance to take part.',
                text2: 'Where is St. George’s Chapel located?'
            }
        ],
        url: baseURL + '/answer/kpi4',
        about: 'Answer questions from text'
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
            return response.map(function (x) {
                let w = x[0];
                let t = x[1];
                if (t === 'O')
                    return w;
                return '<span style="color: blue">' + w + '</span>';
            }).join(' ');
        }
    },
     {
        id: 'Intent classification',
        examples: [
            {text1: 'Show me the forecast for my upcoming weekend'},
            {text1: 'Find me the I, Robot television show'},
            {text1: 'What is the cheapest restaurant between Balthazar and Lombardi\'s?'},
            {text1: 'Add Diamonds to my roadtrip playlist'},
            {text1: 'Play the last track from Beyoncé off Spotify'},
            {text1: 'Give 6 stars to Of Mice and Men'},
            {text1: 'Check the showtimes for Wonder Woman in Paris'}
        ],
        url: baseURL + '/answer/intents',
        about: 'Classify intent for a user utterance'
    },
    {
        id: 'Insult detection',
        examples: [
            {text1: 'Don\'t you have a terribly empty feeling - in your skull?'},
            {text1: 'Shit happens'},
            {text1: 'You\'re so fat, you could sell shade'},
            {text1: 'Money talks and bullshit walks'},
            {text1: 'You are stupid asshole'},
            {text1: 'I just fucked up'},
            {text1: 'Your house is so dirty you have to wipe your feet before you go outside'},
            {text1: 'Moby Dick is a fictional sperm whale'}
        ],
        url: baseURL + '/answer/kpi1',
        about: 'Detecting insults in social commentary',
        report: function (t1, t2, response){
            let res = '<blockquote class="blockquote">'+ t1 +'</blockquote>'+ ((parseFloat(response) >= 0.5) ? 'Insult': 'Not Insult');
            return res;
        }
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

            let res = '<blockquote class="blockquote">' + query + '</blockquote>' + response;

            return res;
        }
    }
}


Vue.component('tab-content', {
    props: ['tab'],
    template: `
<div>
    <div class="row show-grid" style="margin-top:2em">
        <div class="col">
            <blockquote class="blockquote">
                <p>{{tab.about}}</p>
            </blockquote>
        </div>
    </div>
    <div class="row show-grid">
        <div class="col-sm-6">
            <div>
                <form v-on:submit.prevent="send">
                    <div class="form-group">
                        <textarea v-model="tab.text1" class="form-control" rows="7" @focus="tab.selectedExample = -1"/>
                    </div>
                    <div class="form-group">
                        <input v-if="tab.hasOwnProperty('text2')" v-model="tab.text2" class="form-control"
                         @focus="tab.selectedExample = -1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="list-group">
                <a href="#" v-for="(example, index) in tab.examples" v-html="examplePreview(example)"
                    :class="'list-group-item list-group-item-action flex-column align-items-start' +
                     (selected===index?' active':'')"
                    @click.prevent="selected = index"></a>
            </div>
        </div>
    </div>
    <div class="row show-grid">
        <div id="reversed" class="col">
            <transition name="fade" v-for="result in tab.results">
                <div class="row" v-show="result.show" v-html="result.data"></div>
            </transition>
        </div>
    </div>
</div>`,
    methods: {
        send() {
            let tab = this.tab;
            let data = {
                text1: tab.text1,
                text2: tab.text2
            };
            this.$http.post(this.tab.url, data).then(function (response) {
                let res = '<div class="card w-100" style="margin:1em"><div class="card-body">';
                res += tab.report(data.text1, data.text2, response.body);
                res += '</div></div>';
                tab.results.push({show: false, data: res});
                // return new Promise(resolve => setTimeout(resolve, 100));
                return Vue.nextTick();
            }).then(function () {
                tab.results[tab.results.length - 1].show = true;
            });
        },
        examplePreview(example){
            const maxLength = 100;
            let shorten = (x) => (x.length > maxLength)?x.substring(0, maxLength) + '...':x;

            if (example.text2){
                return shorten(example.text2);
            }
            return shorten(example.text1);
        }
    },
    computed: {
        selected: {
            get() {
                return this.tab.selectedExample;
            },
            set(newVal) {
                this.tab.selectedExample = newVal;
                let example = this.tab.examples[newVal];
                this.tab.text1 = example.text1;
                if ('text2' in example) {
                    this.tab.text2 = example.text2;
                }
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
