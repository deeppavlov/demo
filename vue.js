baseURL = 'https://lnsigo.mipt.ru:6443';

badges = {
          'AddToPlaylist': 'badge-primary',
          'BookRestaurant': 'badge-secondary',
          'GetWeather': 'badge-success',
          'PlayMusic': 'badge-danger',
          'RateBook': 'badge-warning',
          'SearchCreativeWork': 'badge-info',
          'SearchScreeningEvent': 'badge-dark'
        };

ner_styles = {
    'ORG': 'badge badge-danger',
    'LOC': 'badge badge-warning',
    'PER': 'badge badge-success'
};

tabs = [
    {
        id: 'Ответы на вопросы',
        examples: [
            {
                text1: 'Одна из наиболее влиятельных групп первой половины 70-х, Kraftwerk, вышедшие из краут-рока, заложили основы всей последующей электронной музыки своими работами, начиная с диска 1974 года Autobahn . Фактически именно Kraftwerk стали переходной ступенью от рок-музыки к новому музыкальному поджанру, в дальнейшем отдалившемуся от собственно рока, однако ставшему огромной частью музыкальной индустрии. Краут-рок в целом (и, в частности, Can и Faust) оказал немалое влияние на развитие альтернативного рока и построка. Влиятельнейшим продюсером краут-рока, разработавшим в какой-то мере его звучание и форму, был Конни Планк.',
                text2: 'Кто был влиятельнейшим продюсером краут-рока?'
            },
            {
                text1: 'Глобализация экономики — сложный и противоречивый процесс. С одной стороны, она облегчает хозяйственное взаимодействие между государствами, создаёт условия для доступа стран к передовым достижениям человечества, обеспечивает экономию ресурсов, стимулирует мировой прогресс. С другой, глобализация ведёт к негативным последствиям: закреплению периферийной модели экономики, потере своих ресурсов странами, не входящими в золотой миллиард . Глобализация распространяет конкурентную борьбу на всех участников, в том числе на слабые страны, что приводит к разорению малого бизнеса, снижению уровня жизни населения и др.',
                text2: 'Что делает глобализация экономики?'
            },
            {
                text1: 'Галилей по праву считается основателем не только экспериментальной, но — в значительной мере — и теоретической физики. В своём научном методе он осознанно сочетал продуманный эксперимент с его рациональным осмыслением и обобщением, и лично дал впечатляющие примеры таких исследований. Иногда из-за недостатка научных данных Галилей ошибался (например, в вопросах о форме планетных орбит, природе комет или причинах приливов), но в подавляющем большинстве случаев его метод приводил к цели. Характерно, что Кеплер, располагавший более полными и точными данными, чем Галилей, сделал правильные выводы в тех случаях, когда Галилей ошибался.',
                text2: 'Кто сделал правильные выводы в тех случаях, когда Галилей ошибался?'
            },
            {
                text1: 'В эпоху перестройки СНГ после обвала СССР, многие испытали шок в связи с переходом экономики на рыночную. Финансовая неграмотность жителей сильно испытывалась в первом десятилетий. Многие договора заключались между собой на основе договора, либо на бумажном носителе, но без оттиска печати нотариуса, который бы утверждал, что нотариус являлся непосредственно свидетелем процесса переговоров и заключения контракта. Такой вид контракта был негативным в силу того, что если вторая сторона договора выполняла свои обязанности не вовремя, либо же отказывалась исполнять, первая сторона не могла это отсудить в суде, ибо сам контракт был заключен неграмотно, с точки зрения законодательной базы.',
                text2: 'В какой период Россия перешла на рыночную экономику?'
            },
            {
                text1: 'Услуги по водоснабжению, водоотведению и очистке сточных вод оказывает компания Vodovod-kanalizacija. Основным источником центрального водоснабжения Любляны являются подземные воды Люблянского поля на правом берегу реки Савы в черте города, а также Люблянского барья к югу от Любляны. Для обеззараживания воды иногда применяется хлор. Центральные очистные сооружения, расположенные на северо-восточной окраине города, перерабатывают 80 тыс. м³ вод в сутки. В центре города в тёплый сезон работают питьевые фонтанчики',
                text2: 'Что порой применяется для обеззараживания вод?'
            }
        ],
        url: baseURL + '/answer/kpi4ru',
        about: '',
        text1header: 'Введите текст',
        text2header: 'Введите вопрос',
        submit_text: 'Спросить',
        results_text: 'Результаты',
        examples_text: 'Примеры',
        lang: 'ru'
    },
    {
        id: 'Распознавание именованных сущностей',
        examples: [
            {
                text1: 'Российское издательство " Эксмо " с июня текущего года управляет издательским и журнальным бизнесом своего конкурента АСТ по договоренности с его акционерами . Об этом рассказал владелец и генеральный директор " Эксмо " Олег Новиков , пишет в номере от 26 июня газета " Ведомости " . Как указывает издание , " Эксмо " получило трехлетний опцион на стопроцентный контроль в трех десятках юридических лиц группы АСТ , в том числе в издательствах " Астрель " , АСТ , выпускающем журналы издательстве " Премьера " и дистрибуторской компании " Билония " . По словам Новикова , в сделку не входит сеть магазинов " Буква " , а также ее недвижимость . По расчетам гендиректора " Эксмо " , опцион может быть исполнен в течение года . Новиков отметил , что в ближайшее время " Эксмо " намерено инвестировать 10-15 миллионов долларов в издательства и дистрибуцию АСТ . Кроме того , владельцы АСТ , хотя и не участвуют больше в управлении группой , имеют право на получение дивидендов в следующем году , до реализации опциона . С учетом дивидендов после осуществления опциона за весь бизнес владельцы АСТ смогут получить около 70 миллионов долларов . В середине мая текущего года газета " Коммерсантъ " со ссылкой на неназванные источники написала , что " Эксмо " ведет переговоры о поглощении АСТ . Сумма сделки оценивалась в 400 миллионов долларов без учета налоговых претензий к АСТ ( более чем на 190 миллионов долларов ) . Как отметил 26 июня Новиков , будет ли сделка завершена , " зависит от того , удастся ли спасти бизнес АСТ , который сейчас находится в критическом состоянии " . В то же время участники рынка опасаются , что сделка приведет к фактической монополизации книжного рынка . Основным владельцем АСТ является кипрская A . A . B . P . Advanced Achievement Books Publishers Ltd . В свою очередь , в число ее акционеров входят бизнесмены Андрей Герцев , Яков Хелемский , Олег Бартенев , Игорь Феоктистов , Юрий Хацкевич и Юрий Дейкало . АСТ не раскрывает свои финансовые показатели . Совладельцами " Эксмо " , крупнейшего в России издательства , являются Олег Новиков и Андрей Гредасов . Выручка компании в 2011 году составила шесть миллиардов рублей .'
            },
            {
                text1: 'Компания « Андэк » , специализирующаяся на решениях для обеспечения безопасности бизнеса , сообщила о том , что Вячеслав Максимов , заместитель генерального директора компании , возглавил направление по оптимизации процессов управления информационной безопасностью , в рамках которого оказываются услуги по приведению информационных систем и бизнес-процессов в соответствие требованиям законодательства и стандартов в области ИБ ( 152-ФЗ , 161-ФЗ , PCI DSS , СТО БР ИББС , ISO 27001 , BS 25777 , BS 25999 и др . ) . Основной задачей Вячеслава Максимова станет повышение операционной и стратегической эффективности направления , развитие портфеля услуг , расширение экспертизы сотрудников . Основной фокус данного направления — оказание услуг по реализации требований по защите информации в национальной платежной системе и приведению информационных систем и бизнес-процессов в соответствие изменяющимся требованиям законодательства в области защиты персональных данных . Уже несколько месяцев в РФ ведутся работы по изменению подхода к определению требований по защите персональных данных , что влечет также изменение стандарта « Банка России » по обеспечению ИБ , говорится в сообщении « Андэк » . Не так давно вышел федеральный закон № 161-ФЗ « О национальной платежной системе » , было утверждено « Положение о защите информации в платежной системе » ( ПП РФ № 584 ) , а в конце мая « Банк России » предложил для рассмотрения проекты документов по защите информации в национальной платежной системе . В связи с изменением требований Вячеслав Максимов отметил : « Новые правила и требования по защите информации , определяемые законодательством и регуляторами , накладывают новую ответственность на организации в целом и подразделения ИБ в частности , и помочь справиться с этой ответственностью — задача направления по оптимизации процессов управления ИБ » . Как отметили в « Андэк » , на текущий момент бизнес готов ставить конкретные цели и задачи подразделениям ИБ . В частности , это обусловлено тем , что в соответствии с частями 12 и 15 статьи 9 ФЗ « О национальной платежной системе » , с 1 января 2013 г. банки будут обязаны возмещать клиентам денежные средства , утерянные в результате мошеннических операций . « Крайне важно определить наиболее адекватные метрики оценки эффективности системы обеспечения ИБ и их целевые показатели » , — убежден Вячеслав Максимов . Выбранные и реализованные защитные меры должны , по его мнению , снижать конкретные актуальные риски безопасности бизнеса до приемлемого уровня , поддерживая непрерывность ключевой деятельности , целостность бизнес-процессов и защищая интересы бизнеса . « В этом свете становится очевидной неэффективность защитных мер , основанных исключительно на установке “ коробочных ” решений . Средства защиты информации — лишь инструмент , используемый в процессе обеспечения безопасности , — считает Вячеслав Максимов . — Так , например , внедрение систем класса SIEM не должно ограничиваться лишь установкой и настройкой программно-аппаратного комплекса . Не менее важно определить актуальные угрозы ИБ , “ научить ” систему выявлять соответствующие инциденты , построить процессы мониторинга событий ИБ , реагирования на инциденты ИБ , обучить администраторов и операторов системы , довести правила ИБ до пользователей информационных систем » . Подробнее : http : / / www . cnews . ru / news / 2012 / 06 / 26 / vyacheslav _ maksimov _ vozglavil _ napravlenie _ po _ optimizacii _ processov _ upravleniya _ ib _ andek _ 494308'
            },
            {
                text1: 'Италия разместила на открытом рынке бонды на общую сумму 3.91 млрд евро . Спрос на бумаги был хорошим , размещение прошло по верхней границе диапазона , но доходность итальянских облигаций выросла . Рим продал бонды с нулевым купоном , которые будут погашены в 2014 г. на сумму 2.99 млрд евро . Доходность выросла до 4.712 % с 4.037 % на предыдущем аукционе . Еще 916 млн евро казне принесли обыкновенные бонды со сроком обращения 4 и 14 лет . Долговой процент по этим типам бумаг составил 5.2 % и 5.29 % соответственно . Главной причиной роста доходности стало решение Кипра направить европейским партнерам запрос о предоставлении финансовой помощи . Не готов рынок забыть и об испанских проблемах . После того как деньги из общеевропейской копилки решил позаимствовать и Мадрид , игроки все чаще говорят о том , что цепная реакция в еврозоне перекинется и на Италию . Напомним , что правительство Италии одобрило во вторник предоставление финансовой поддержки третьему по величине банку страны Banca Monte dei Paschi di Siena .'
            }
        ],
        url: baseURL + '/answer/kpi3_2',
        about: `Сущности: <span class="${ner_styles['PER']}">Человек</span> <span class="${ner_styles['ORG']}">Организация</span> <span class="${ner_styles['LOC']}">Локация</span>`,
        text1header: 'Введите текст',
        submit_text: 'Распознать',
        results_text: 'Результаты',
        examples_text: 'Примеры',
        lang: 'ru',
        report: function (t1, t2, response){
            let prev = null;
            let res = response.map(function (x) {
                let w = x[0];
                let t = x[1];

                if(prev !== null && t !== `I-${prev}`){
                    w = '</span> ' + w;
                    prev = null;
                }
                if(t === 'O' || t === `I-${prev}`)
                    return w;

                prev = t.substring(2);
                let style = ner_styles[prev];
                return `<span class="${style}">${w}`;
            }).join(' ');
            if(prev !== null){
                res += '</span>';
            }
            return res;
        }
    },
    {
        id: 'Question Answering',
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
        about: '',
        text1header: 'Enter Text',
        submit_text: 'Ask',
        lang: 'en'
    },
    {
        id: 'Named Entity Recognition',
        examples: [
            {
                text1: 'Australia’s Deputy Prime Minister Barnaby Joyce is perhaps best known for the Pistol and Boo affair -- when he threatened actor Johnny Depp with perjury over bringing his dogs into the country illegally. \
But it’s a very different type of affair which is now engulfing the Deputy PM and leader of the Nationals Party.'
            },
            {
                text1: 'The chief counsel for the US Immigration and Customs Enforcement Seattle field office was charged with stealing the \
identities of seven people who were involved in immigration proceedings, according to court documents. Raphael A. Sanchez allegedly \
devised a plan to defraud several financial institutions by using their identities to obtain money and property over a four-year period \
between October 2013 to October 2017, according to the court documents filed Monday in the US District Court for the Western District of Washington. '
            },
            {
                text1: 'The International Criminal Court is looking into allegations of excessive force and other abuses \
by Venezuela’s government in response to sometimes deadly anti-regime protests, its prosecutor said Thursday. \
The “preliminary examination“ by the Netherlands-based tribunal is the first step toward launching an investigation \
into what ICC prosecutor Fatou Bensouda called allegations of “excessive force“ by state security forces against opponents \
of President Nicolas Maduro.'
            }
        ],
        url: baseURL + '/answer/kpi3en',
        about: `Entities: <span class="${ner_styles['PER']}">Person</span> <span class="${ner_styles['ORG']}">Organization</span> <span class="${ner_styles['LOC']}">Location</span>`,
        text1header: 'Enter Text',
        submit_text: 'Search',
        lang: 'en',
        report: function (t1, t2, response){
            let prev = null;
            let res = response.map(function (x) {
                let w = x[0];
                let t = x[1];

                if(prev !== null && t !== `I-${prev}`){
                    w = '</span> ' + w;
                    prev = null;
                }
                if(t === 'O' || t === `I-${prev}`)
                    return w;

                prev = t.substring(2);
                let style = ner_styles[prev];
                return `<span class="${style}">${w}`;
            }).join(' ');
            if(prev !== null){
                res += '</span>';
            }
            return res;
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
        about: `Classes: ${Object.keys(badges).map(function(k,i){ return '<span class="badge '+badges[k]+'">'+k+'</span>' }).join(" ")}`,
        text1header: 'Enter Text',
        submit_text: 'Classify',
        lang: 'en',
        report: function(t1, t2, response){
          let res = `<blockquote class="blockquote">${t1}</blockquote><span class="badge ${badges[response]}">${response}</span>`;
          return res;
        }
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
        about: '',
        text1header: 'Enter Text',
        submit_text: 'Classify',
        lang: 'en',
        report: function (t1, t2, response){
            let res = `<blockquote class="blockquote">${t1}</blockquote>${((parseFloat(response) >= 0.5) ? '<span class="badge badge-danger">Insult</span>': '<span class="badge badge-success">Not Insult</span>')}`;
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
            let res = `<blockquote class="blockquote">${t1}</blockquote>`;
            if (t2){
                res += `<blockquote class="blockquote">${t2}</blockquote>`;
            }
            res += response;

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
                <p v-html="tab.about"></p>
            </blockquote>
        </div>
    </div>
    <div class="row show-grid">
        <div class="col-sm-6">
            <h3 v-html="tab.text1header"></h3>
            <div>
                <form v-on:submit.prevent="send">
                    <div class="form-group">
                        <textarea v-model="tab.text1" class="form-control" rows="7" @focus="tab.selectedExample = -1"/>
                    </div>
                    <h3 v-if="tab.hasOwnProperty('text2')">{{tab.text2header || 'Question'}}</h3>
                    <div class="form-group">
                        <input v-if="tab.hasOwnProperty('text2')" v-model="tab.text2" class="form-control"
                         @focus="tab.selectedExample = -1"/>
                    </div>
                    <button type="submit" class="btn btn-primary" v-html="tab.submit_text"></button>
                </form>
            </div>
        </div>
        <div class="col-sm-6">
            <h3>{{tab.examples_text || 'Examples'}}</h3>
            <div class="list-group">
                <a href="#" v-for="(example, index) in tab.examples" v-html="examplePreview(example)"
                    :class="'list-group-item list-group-item-action flex-column align-items-start' +
                     (selected===index?' active':'')"
                    @click.prevent="selected = index"></a>
            </div>
        </div>
    </div>
    <div class="row show-grid">
        <div class="col">
            <h3>{{tab.results_text || 'Results'}}</h3>
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
            }, function (response) {
                console.log('ERROR!');
                let res = '<div class="card w-100" style="margin:1em"><div class="card-body">';
                res += `<span style="color: red;">ERROR</span>`;
                res += '</div></div>';
                tab.results.push({show: false, data: res});
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
        tabs,
        lang: 'ru'
    },
    methods: {
        langChange(){
            Vue.nextTick().then(function () {
                $('#tabs li:first-child a').tab('show');
                // alert(this.lang);
            })
        }
    }
});

$('#tabs li:first-child a').tab('show');
