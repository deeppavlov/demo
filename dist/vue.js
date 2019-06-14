'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var intentsClasses = {
    'AddToPlaylist': 'badge-primary',
    'BookRestaurant': 'badge-secondary',
    'GetWeather': 'badge-success',
    'PlayMusic': 'badge-danger',
    'RateBook': 'badge-warning',
    'SearchCreativeWork': 'badge-info',
    'SearchScreeningEvent': 'badge-dark'
};

var badges = Object.assign({
    'Insult': 'badge-danger',
    'Not Insult': 'badge-success'
}, intentsClasses);

var ruNerStyles = {
    'ORG': 'badge badge-danger',
    'LOC': 'badge badge-warning',
    'PER': 'badge badge-success'
};

var ontonotesClasses = {
    "PERSON": ["badge-primary", "People, including fictional."],
    "NORP": ["badge-danger", "Nationalities or religious or political groups."],
    "ORG": ["badge-info", "Companies, agencies, institutions, etc."],
    "LOC": ["badge-success", "Non-GPE locations, mountain ranges, bodies of water."],
    "GPE": ["badge-warning", "Countries, cities, states."],
    "DATE": ["badge-dark", "Absolute or relative dates or periods."],
    "MONEY": ["badge-secondary", "Monetary values, including unit."],
    "FAC": ["badge-secondary", "Buildings, airports, highways, bridges, etc."],
    "PRODUCT": ["badge-secondary", "Objects, vehicles, foods, etc. (Not services.)"],
    "EVENT": ["badge-secondary", "Named hurricanes, battles, wars, sports events, etc."],
    "WORK_OF_ART": ["badge-secondary", "Titles of books, songs, etc."],
    "LAW": ["badge-secondary", "Named documents made into laws."],
    "LANGUAGE": ["badge-secondary", "Any named language."],
    "TIME": ["badge-secondary", "Times smaller than a day."],
    "PERCENT": ["badge-secondary", "Percentage, including &quot;%&quot;."],
    "QUANTITY": ["badge-secondary", "Measurements, as of weight or distance."],
    "ORDINAL": ["badge-secondary", "&quot;first&quot;, &quot;second&quot;, etc."],
    "CARDINAL": ["badge-secondary", "Numerals that do not fall under another type."]
};

var refusal = {
    "ru": "Не знаю",
    "en": "I don't know",
    "multiLang": "I don't know"
};

function escapeHTML(text) {
    var div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
}

function defaultReport(t1, t2, response) {
    var res = void 0;
    response = response[0];
    if (response !== "") res = '<blockquote class="blockquote" style="color: darkblue;">' + escapeHTML(response) + '</blockquote>';else res = '<blockquote class="blockquote" style="color: indianred;">' + refusal[vue.lang] + '</blockquote>';
    if (t2) {
        res += '<div style="margin-bottom: 0.5em; padding-bottom: 0.5em; border-bottom: 1px solid lightgrey;">' + t2 + '</div>';
    }
    res += '<div>' + t1 + '</div>';

    return res;
}

function squadReport(t1, t2, response) {
    var _response = _slicedToArray(response, 2),
        answer = _response[0],
        startIndex = _response[1];

    return defaultReport(t1, t2, [answer]);
}

function ontonotesReport(t1, t2, response) {
    var prev = null;

    var _response2 = _slicedToArray(response, 2),
        words = _response2[0],
        tags = _response2[1];

    var res = words.map(function (w, i) {
        var t = tags[i];
        var prefix = '';

        if (prev !== null && t !== 'I-' + prev) {
            prefix = '</span> ';
            prev = null;
        }
        if (t === 'O' || t === 'I-' + prev) return prefix + w;

        prev = t.substring(2);

        var _ontonotesClasses$pre = _slicedToArray(ontonotesClasses[prev], 2),
            class_name = _ontonotesClasses$pre[0],
            about = _ontonotesClasses$pre[1];

        return prefix + '<span class="badge ' + class_name + '" data-toggle="tooltip" title="' + about + '" style="cursor: help;">' + w;
    }).join(' ');
    if (prev !== null) {
        res += '</span>';
    }
    return res;
}

function f1(t1, t2, response) {
    var res = '<blockquote class="blockquote" style="color: darkblue;">' + response + '</blockquote>';
    if (t2) {
        res += '<div style="margin-bottom: 0.5em; padding-bottom: 0.5em; border-bottom: 1px solid lightgrey;">' + t2 + '</div>';
    }
    res += '<div>' + t1 + '</div>';

    return res;
}

function classifiersReport(t1, t2, response) {
    var _response3 = _slicedToArray(response, 2),
        tags = _response3[0],
        scores = _response3[1];

    tags = tags.map(function (tag) {
        return '<span class="badge ' + badges[tag] + '">' + tag + '</span>';
    });
    return '<blockquote class="blockquote">' + t1 + '</blockquote>' + tags;
}

var tabs = [{
    id: 'TextQARu',
    name: 'Ответы на вопросы по тексту',
    examples: [{
        text1: 'Одна из наиболее влиятельных групп первой половины 70-х, Kraftwerk, вышедшие из краут-рока, заложили основы всей последующей электронной музыки своими работами, начиная с диска 1974 года Autobahn . Фактически именно Kraftwerk стали переходной ступенью от рок-музыки к новому музыкальному поджанру, в дальнейшем отдалившемуся от собственно рока, однако ставшему огромной частью музыкальной индустрии. Краут-рок в целом (и, в частности, Can и Faust) оказал немалое влияние на развитие альтернативного рока и построка. Влиятельнейшим продюсером краут-рока, разработавшим в какой-то мере его звучание и форму, был Конни Планк.',
        text2: 'Кто был влиятельнейшим продюсером краут-рока?'
    }, {
        text1: 'Глобализация экономики — сложный и противоречивый процесс. С одной стороны, она облегчает хозяйственное взаимодействие между государствами, создаёт условия для доступа стран к передовым достижениям человечества, обеспечивает экономию ресурсов, стимулирует мировой прогресс. С другой, глобализация ведёт к негативным последствиям: закреплению периферийной модели экономики, потере своих ресурсов странами, не входящими в золотой миллиард . Глобализация распространяет конкурентную борьбу на всех участников, в том числе на слабые страны, что приводит к разорению малого бизнеса, снижению уровня жизни населения и др.',
        text2: 'Что делает глобализация экономики?'
    }, {
        text1: 'Галилей по праву считается основателем не только экспериментальной, но — в значительной мере — и теоретической физики. В своём научном методе он осознанно сочетал продуманный эксперимент с его рациональным осмыслением и обобщением, и лично дал впечатляющие примеры таких исследований. Иногда из-за недостатка научных данных Галилей ошибался (например, в вопросах о форме планетных орбит, природе комет или причинах приливов), но в подавляющем большинстве случаев его метод приводил к цели. Характерно, что Кеплер, располагавший более полными и точными данными, чем Галилей, сделал правильные выводы в тех случаях, когда Галилей ошибался.',
        text2: 'В чём ошибался Галилей?'
    }, {
        text1: 'В эпоху перестройки СНГ после обвала СССР, многие испытали шок в связи с переходом экономики на рыночную. Финансовая неграмотность жителей сильно испытывалась в первом десятилетий. Многие договора заключались между собой на основе договора, либо на бумажном носителе, но без оттиска печати нотариуса, который бы утверждал, что нотариус являлся непосредственно свидетелем процесса переговоров и заключения контракта. Такой вид контракта был негативным в силу того, что если вторая сторона договора выполняла свои обязанности не вовремя, либо же отказывалась исполнять, первая сторона не могла это отсудить в суде, ибо сам контракт был заключен неграмотно, с точки зрения законодательной базы.',
        text2: 'В какой период Россия перешла на рыночную экономику?'
    }, {
        text1: 'Услуги по водоснабжению, водоотведению и очистке сточных вод оказывает компания Vodovod-kanalizacija. Основным источником центрального водоснабжения Любляны являются подземные воды Люблянского поля на правом берегу реки Савы в черте города, а также Люблянского барья к югу от Любляны. Для обеззараживания воды иногда применяется хлор. Центральные очистные сооружения, расположенные на северо-восточной окраине города, перерабатывают 80 тыс. м³ вод в сутки. В центре города в тёплый сезон работают питьевые фонтанчики',
        text2: 'Что порой применяется для обеззараживания вод?'
    }],
    url: 'https://7005.lnsigo.mipt.ru/answer',
    about: 'Ответы на вопросы по тексту (Text QA) — это задача поиска ответов на вопросы в известном контексте (например, в параграфе из Википедии). С помощью этого функционала можно искать ответы на вопросы по документации. Больше информации о модели и ее применении читайте в <a href="http://docs.deeppavlov.ai/en/master/components/squad.html">документации.</a>',
    docker: 'deeppavlov/squad_ru',
    text1Header: 'Введите текст',
    text2Header: 'Введите вопрос',
    submitText: 'Спросить',
    resultsText: 'Результаты',
    examplesText: 'Примеры',
    lang: 'ru',
    report: squadReport
}, {
    id: 'Ответы на вопросы',
    examples: [{
        text1: 'Как отводятся излишки тепла у млекопитающих?'
    }, {
        text1: 'Сколько детей родилось в 2008 году у граждан Швейцарии?'
    }, {
        text1: 'Какое государство берберов считается последним?'
    }, {
        text1: 'Где расположен международный аэропорт Никола Тесла?'
    }],
    url: 'https://7012.lnsigo.mipt.ru/answer',
    about: 'Open Domain Question Answering (ODQA) — это задача поиска ответа на любой вопрос внутри коллекции документов, например, в Википедии. Решение задачи идет в два шага: сначала подбираются релевантные документы, затем в тексте каждого выбирается фраза, предположительно содержащая ответ, и наиболее подходящий отображается на экране. Представленный здесь скил ищет ответы в русскоязычной Википедии. Бизнес решения на основе ODQA — это, например, диалоговые ассистенты, отвечающие на вопросы по корпоративным базам знаний, справочной и технической документации.\
        <br><br> Основы практического использования описано в нашем туториале на <a href="https://medium.com/deeppavlov/open-domain-question-answering-with-deeppavlov-c665d2ee4d65">Medium</a> и в <a href="http://docs.deeppavlov.ai/en/master/skills/odqa.html">документации.</a>',
    docker: 'deeppavlov/odqa_ru',
    text1Header: 'Введите вопрос',
    submitText: 'Спросить',
    resultsText: 'Результаты',
    examplesText: 'Примеры',
    lang: 'ru'
}, {
    id: 'Распознавание именованных сущностей',
    examples: [{
        text1: 'Российское издательство " Эксмо " с июня текущего года управляет издательским и журнальным бизнесом своего конкурента АСТ по договоренности с его акционерами . Об этом рассказал владелец и генеральный директор " Эксмо " Олег Новиков , пишет в номере от 26 июня газета " Ведомости " . Как указывает издание , " Эксмо " получило трехлетний опцион на стопроцентный контроль в трех десятках юридических лиц группы АСТ , в том числе в издательствах " Астрель " , АСТ , выпускающем журналы издательстве " Премьера " и дистрибуторской компании " Билония " . По словам Новикова , в сделку не входит сеть магазинов " Буква " , а также ее недвижимость . По расчетам гендиректора " Эксмо " , опцион может быть исполнен в течение года . Новиков отметил , что в ближайшее время " Эксмо " намерено инвестировать 10-15 миллионов долларов в издательства и дистрибуцию АСТ . Кроме того , владельцы АСТ , хотя и не участвуют больше в управлении группой , имеют право на получение дивидендов в следующем году , до реализации опциона . С учетом дивидендов после осуществления опциона за весь бизнес владельцы АСТ смогут получить около 70 миллионов долларов . В середине мая текущего года газета " Коммерсантъ " со ссылкой на неназванные источники написала , что " Эксмо " ведет переговоры о поглощении АСТ . Сумма сделки оценивалась в 400 миллионов долларов без учета налоговых претензий к АСТ ( более чем на 190 миллионов долларов ) . Как отметил 26 июня Новиков , будет ли сделка завершена , " зависит от того , удастся ли спасти бизнес АСТ , который сейчас находится в критическом состоянии " . В то же время участники рынка опасаются , что сделка приведет к фактической монополизации книжного рынка . Основным владельцем АСТ является кипрская A . A . B . P . Advanced Achievement Books Publishers Ltd . В свою очередь , в число ее акционеров входят бизнесмены Андрей Герцев , Яков Хелемский , Олег Бартенев , Игорь Феоктистов , Юрий Хацкевич и Юрий Дейкало . АСТ не раскрывает свои финансовые показатели . Совладельцами " Эксмо " , крупнейшего в России издательства , являются Олег Новиков и Андрей Гредасов . Выручка компании в 2011 году составила шесть миллиардов рублей .'
    }, {
        text1: 'Италия разместила на открытом рынке бонды на общую сумму 3.91 млрд евро . Спрос на бумаги был хорошим , размещение прошло по верхней границе диапазона , но доходность итальянских облигаций выросла . Рим продал бонды с нулевым купоном , которые будут погашены в 2014 г. на сумму 2.99 млрд евро . Доходность выросла до 4.712 % с 4.037 % на предыдущем аукционе . Еще 916 млн евро казне принесли обыкновенные бонды со сроком обращения 4 и 14 лет . Долговой процент по этим типам бумаг составил 5.2 % и 5.29 % соответственно . Главной причиной роста доходности стало решение Кипра направить европейским партнерам запрос о предоставлении финансовой помощи . Не готов рынок забыть и об испанских проблемах . После того как деньги из общеевропейской копилки решил позаимствовать и Мадрид , игроки все чаще говорят о том , что цепная реакция в еврозоне перекинется и на Италию . Напомним , что правительство Италии одобрило во вторник предоставление финансовой поддержки третьему по величине банку страны Banca Monte dei Paschi di Siena .'
    }],
    url: 'https://7004.lnsigo.mipt.ru/answer',
    about: 'NER (Named Entity Recognition) — компонент для распознавания именованных сущностей. Задача заключается в классификации токенов текста по известным категориям - тэгам: имена людей, количество, локации, организации, время и дата, цена и валюта, и т.п.\
        <br><br>Здесь представлена модель, обученная на Collection 3 датасете для русского языка. Во вкладке Multi-lang вы найдете мультиязычную модель для 104 языков, обученную на датасете Ontonotes. Наши модели распознают до 19 сущностей. Больше о моделях и их использовании читайте в <a href="http://docs.deeppavlov.ai/en/master/components/ner.html">документации.</a>\
        <br><br>NER — существенная часть любой диалоговой системы, которая необходима для извлечения машиной информации из текста.' + ('<br><br>\u0421\u0443\u0449\u043D\u043E\u0441\u0442\u0438: <span class="' + ruNerStyles['PER'] + '">\u0427\u0435\u043B\u043E\u0432\u0435\u043A</span> <span class="' + ruNerStyles['ORG'] + '">\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F</span> <span class="' + ruNerStyles['LOC'] + '">\u041B\u043E\u043A\u0430\u0446\u0438\u044F</span>'),
    docker: 'deeppavlov/ner_ru',
    text1Header: 'Введите текст',
    submitText: 'Распознать',
    resultsText: 'Результаты',
    examplesText: 'Примеры',
    lang: 'ru',
    report: function report(t1, t2, response) {
        var prev = null;

        var _response4 = _slicedToArray(response, 2),
            words = _response4[0],
            tags = _response4[1];

        var res = words.map(function (w, i) {
            var t = tags[i];
            var prefix = '';

            if (prev !== null && t !== 'I-' + prev) {
                prefix = '</span> ';
                prev = null;
            }
            if (t === 'O' || t === 'I-' + prev) return prefix + w;

            prev = t.substring(2);
            var style = ruNerStyles[prev];
            return prefix + '<span class="' + style + '">' + w;
        }).join(' ');
        if (prev !== null) {
            res += '</span>';
        }
        return res;
    }
}, {
    id: 'Анализ тональности',
    examples: [{ text1: 'Мне нравится этот телевизор.' }, { text1: 'это плохое ТВ шоу' }],
    url: 'https://7015.lnsigo.mipt.ru/answer',
    about: 'Анализ тональности — это задача для автоматизированного выявления в текстах эмоционально окрашенной лексики и эмоциональной оценки авторов (мнений) по отношению к объектам, речь о которых идёт в тексте. Этот компонент позволит вам оценить комментарии о вашем продукте или сервисе. Подробнее смотрите в нашем туториале на <a href="https://towardsdatascience.com/the-bert-based-text-classification-models-of-deeppavlov-a85892f14d61">Medium</a> и в <a href="http://docs.deeppavlov.ai/en/master/components/classifiers.html">документации.</a>',
    text1Header: 'Введите текст',
    submitText: 'Распознать',
    lang: 'ru',
    docker: 'deeppavlov/sentiment_ru',
    report: classifiersReport
}, {
    id: 'Text QA',
    examples: [{
        text1: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. \
Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. \
“The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”',
        text2: 'What country is under the pressure?'
    }, {
        text1: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. \
Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. \
“The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”',
        text2: 'Who is Mike Pence?'
    }, {
        text1: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. \
Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. \
“The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”',
        text2: 'Where is the Winter Olympic Games in 2018?'
    }, {
        text1: 'The most basic method of checking the primality of a given integer n is called trial division.' + ' This routine consists of dividing n by each integer m that is greater than 1 and less than or' + ' equal to the square root of n. If the result of any of these divisions is an integer, then n' + ' is not a prime, otherwise it is a prime. Indeed, if  is composite (with a and b ≠ 1) then one' + ' of the factors a or b is necessarily at most . For example, for , the trial divisions are' + ' by m = 2, 3, 4, 5, and 6. None of these numbers divides 37, so 37 is prime. This routine' + ' can be implemented more efficiently if a complete list of primes up to  is known—then trial divisions' + ' need to be checked only for those m that are prime. For example, to check the primality of 37,' + ' only three divisions are necessary (m = 2, 3, and 5), given that 4 and 6 are composite.',
        text2: 'How many divisions are required to verify the primality of the number 37?'
    }, {
        text1: 'The most basic method of checking the primality of a given integer n is called trial division.' + ' This routine consists of dividing n by each integer m that is greater than 1 and less than or' + ' equal to the square root of n. If the result of any of these divisions is an integer, then n' + ' is not a prime, otherwise it is a prime. Indeed, if  is composite (with a and b ≠ 1) then one' + ' of the factors a or b is necessarily at most . For example, for , the trial divisions are' + ' by m = 2, 3, 4, 5, and 6. None of these numbers divides 37, so 37 is prime. This routine' + ' can be implemented more efficiently if a complete list of primes up to  is known—then trial divisions' + ' need to be checked only for those m that are prime. For example, to check the primality of 37,' + ' only three divisions are necessary (m = 2, 3, and 5), given that 4 and 6 are composite.',
        text2: 'Trial division involves dividing n by every integer m greater than what?'
    }, {
        text1: 'The most basic method of checking the primality of a given integer n is called trial division.' + ' This routine consists of dividing n by each integer m that is greater than 1 and less than or' + ' equal to the square root of n. If the result of any of these divisions is an integer, then n' + ' is not a prime, otherwise it is a prime. Indeed, if  is composite (with a and b ≠ 1) then one' + ' of the factors a or b is necessarily at most . For example, for , the trial divisions are' + ' by m = 2, 3, 4, 5, and 6. None of these numbers divides 37, so 37 is prime. This routine' + ' can be implemented more efficiently if a complete list of primes up to  is known—then trial divisions' + ' need to be checked only for those m that are prime. For example, to check the primality of 37,' + ' only three divisions are necessary (m = 2, 3, and 5), given that 4 and 6 are composite.',
        text2: 'What must the integer m be less than or equal to when performing trial division?'
    }, {
        text1: 'Prince Harry and fiancee American actress Meghan Markle have released more details about their May 19 wedding, revealing that the event will include a carriage ride through Windsor so they can share the big day with the public. \
The couple will marry at noon in St. George’s Chapel, the 15th century church on the grounds of Windsor Castle that has long been the backdrop of choice for royal occasions. Harry’s grandmother, Queen Elizabeth II, gave permission for use of the venue and will attend the wedding. \
Kensington Palace said in a statement that the couple is “hugely grateful” for the many good wishes they have received and they hope the carriage ride will give the general public a chance to take part.',
        text2: 'Who is going to marry?'
    }, {
        text1: 'Prince Harry and fiancee American actress Meghan Markle have released more details about their May 19 wedding, revealing that the event will include a carriage ride through Windsor so they can share the big day with the public. \
The couple will marry at noon in St. George’s Chapel, the 15th century church on the grounds of Windsor Castle that has long been the backdrop of choice for royal occasions. Harry’s grandmother, Queen Elizabeth II, gave permission for use of the venue and will attend the wedding. \
Kensington Palace said in a statement that the couple is “hugely grateful” for the many good wishes they have received and they hope the carriage ride will give the general public a chance to take part.',
        text2: 'When will be the wedding?'
    }, {
        text1: 'Prince Harry and fiancee American actress Meghan Markle have released more details about their May 19 wedding, revealing that the event will include a carriage ride through Windsor so they can share the big day with the public. \
The couple will marry at noon in St. George’s Chapel, the 15th century church on the grounds of Windsor Castle that has long been the backdrop of choice for royal occasions. Harry’s grandmother, Queen Elizabeth II, gave permission for use of the venue and will attend the wedding. \
Kensington Palace said in a statement that the couple is “hugely grateful” for the many good wishes they have received and they hope the carriage ride will give the general public a chance to take part.',
        text2: 'Where is St. George’s Chapel located?'
    }],
    url: 'https://7008.lnsigo.mipt.ru/answer',
    about: 'The Question Answering component answers a question based on a given context (e.g, a paragraph of text), where the answer to the question is a segment of the context. This component allows you to answer questions based on your documentation. To learn more on implementation check out our <a href="http://docs.deeppavlov.ai/en/master/components/squad.html">documentation.</a>',
    docker: 'deeppavlov/squad_en',
    text1Header: 'Enter Text',
    submitText: 'Ask',
    lang: 'en',
    report: squadReport
}, {
    id: 'ODQA',
    examples: [{
        text1: 'What does computational linguistics study?'
    }, {
        text1: 'When did the Lynmouth floods happen?'
    }, {
        text1: "What was Char Aznable's nickname?"
    }, {
        text1: 'When is the Bastille Day?'
    }, {
        text1: 'Where did guinea pigs originate?'
    }],
    url: 'https://7011.lnsigo.mipt.ru/answer',
    about: 'Open Domain Question Answering (ODQA) answers any question based on the document collection covering a wide range of topics. The ODQA task combines two challenges of document retrieval (finding the relevant articles) with that of machine comprehension of text (identifying the answer span from those articles). This component can be used to answer questions based on the company knowledge base. This demo uses entire Wikipedia as a knowledge-base. To learn more on implementation read our <a href="http://docs.deeppavlov.ai/en/master/skills/odqa.html">documentation</a> and check out our <a href="https://medium.com/deeppavlov/open-domain-question-answering-with-deeppavlov-c665d2ee4d65">tutorial</a> on this component.',
    docker: 'deeppavlov/odqa_en',
    text1Header: 'Question',
    submitText: 'Ask',
    lang: 'en'
}, {
    id: 'Ranking',
    examples: [{ text1: 'what is the price for home insurance?' }, { text1: 'fire occured in my home, is it covered by insurance?' }, { text1: 'what is disability insurance?' }, { text1: 'appeal of insurance denial?' }],
    url: 'https://7009.lnsigo.mipt.ru/answer',
    about: 'The ranking component solves the tasks of ranking and paraphrases identification based on siamese neural networks with integrated semantic similarity measure. The component retrieves the semantically closest response from a set of predefined responses. This demo was trained on the <a href="https://github.com/shuzi/insuranceQA">InsuranceQA V1</a> dataset.',
    docker: 'deeppavlov/ranking_en',
    text1Header: 'Enter Text',
    submitText: 'Ask',
    lang: 'en',
    report: function report(t1, t2, response) {
        var res = '<blockquote class="blockquote">' + t1 + '</blockquote>';
        var data = response[0].map(function (text) {
            return '<li>' + text + '</li>';
        });
        res += '<ul>' + data.join('') + '</ul>';
        return res;
    }
}, {
    id: 'Entity recognition',
    examples: [{
        text1: 'Computer Sciences Corp . , El Segundo , Calif . , said it is close to making final an agreement to buy Cleveland Consulting Associates from Saatchi & Saatchi'
    }, {
        text1: 'Imo Industries Inc . -- $ 150 million of senior subordinated debentures due 2001 , priced at par to yield 12 % . '
    }, {
        text1: 'Gill & Duffus Ltd. , a British cocoa - trading house , estimated that the 1989 - 90 world cocoa surplus would be 231,000 tons , down from 314,000 tons for the previous year .'
    }, {
        text1: 'Amtech , which also provides technical temporary employment services to aerospace , defense , computer and high - tech companies in the Southwest and Baltimore - Washington areas , said its final audited results are due in late November .'
    }, {
        text1: 'Following the impeachment conviction , Dr. Benjamin Hooks , executive director of the National Association for the Advancement of Colored People , issued a restrained statement , warning that the Hastings case could set a " dangerous precedent , " but adding , " We must respect the considered judgment of the Senate . "'
    }],
    url: 'https://7010.lnsigo.mipt.ru/answer',
    about: 'Named Entity Recognition (NER) classifies tokens in text into predefined categories (tags), such as person names, quantity expressions, percentage expressions, names of locations, organizations, as well as expression of time, currency and others. We can recognize up to 19 entities. NER can be used as a knowledge extractor when you are interested in a piece of certain information in your text. On Multi-lang tab you can find a multilingual model that supports 104 languages. To learn more on implementation read our <a href="http://docs.deeppavlov.ai/en/master/components/ner.html">documentation.</a>' + '<br><br>Hover over an entity to see its class description<br/>Classes: ' + Object.entries(ontonotesClasses).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            _ref2$ = _slicedToArray(_ref2[1], 2),
            class_name = _ref2$[0],
            about = _ref2$[1];

        return '<span class="badge ' + class_name + '" data-toggle="tooltip" title="' + about + '" style="cursor: help;">' + k + '</span>';
    }).join(', '),
    docker: 'deeppavlov/ner_en',
    text1Header: 'Enter Text',
    submitText: 'Search',
    lang: 'en',
    report: ontonotesReport
}, {
    id: 'Intent classification',
    examples: [{ text1: 'Show me the forecast for my upcoming weekend' }, { text1: 'Find me the I, Robot television show' }, { text1: 'Can I get some Russian cuisine at a restaurant with Shari and I?' }, { text1: 'Add Diamonds to my roadtrip playlist' }, { text1: 'Play the last track from Beyoncé off Spotify' }, { text1: 'Give 6 stars to Of Mice and Men' }, { text1: 'Tell me what movies are showing at 7am at the closest movie house' }],
    url: 'https://7007.lnsigo.mipt.ru/answer',
    about: 'Intent classification recognizes intents based on users utterance. This demo was trained on the <a href="https://github.com/snipsco/nlu-benchmark/tree/master/2017-06-custom-intent-engines">SNIPS</a> dataset that focuses on seven intents <b>SearchCreativeWork</b>, <b>GetWeather</b>, <b>BookRestaurant</b> and others. This component solves various business problems such as ticketing and booking services, renting and scheduling, accepting orders, consulting and customer support. To learn more on implementation read our <a href="http://docs.deeppavlov.ai/en/master/components/classifiers.html">documentation</a> and check out our <a href="https://towardsdatascience.com/the-bert-based-text-classification-models-of-deeppavlov-a85892f14d61">tutorial.</a>' + '<br><br>Classes: ' + Object.entries(intentsClasses).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            k = _ref4[0],
            v = _ref4[1];

        return '<span class="badge ' + v + '">' + k + '</span>';
    }).join(" "),
    docker: 'deeppavlov/intents_en',
    text1Header: 'Enter Text',
    submitText: 'Classify',
    lang: 'en',
    report: classifiersReport
}, {
    id: 'Insult detection',
    examples: [{ text1: 'Your family tree must be a cactus because everybody on it is a prick' }, { text1: 'Shit happens' }, { text1: 'You\'re just too fat, man' }, { text1: 'Money talks and bullshit walks' }, { text1: 'You are stupid asshole' }, { text1: 'I just fucked up' }, { text1: 'Your house is so dirty you have to wipe your feet before you go outside' }],
    url: 'https://7006.lnsigo.mipt.ru/answer',
    about: 'Insult detection predicts whether a comment posted during a public discussion is considered insulting to one of the participants. This component is the defense against spam and abuse in your business. To learn more on implementation read our <a href="docs.deeppavlov.ai/en/master/components/classifiers.html">documentation.</a>',
    docker: 'deeppavlov/insults_en',
    text1Header: 'Enter Text',
    submitText: 'Classify',
    lang: 'en',
    report: classifiersReport
}, {
    id: 'Text QA ml',
    name: 'Text QA',
    examples: [{
        text1: '\u0412\u043E\u043B\u043E\u0441\u044B \u0443 \u043C\u0435\u043D\u044F \u043D\u0430 \u0433\u0440\u0443\u0434\u0438 \u043E\u043A\u0440\u0430\u0441\u0438\u043B\u0438\u0441\u044C, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u044F \u043F\u0440\u043E\u043B\u0438\u043B \u043D\u0430 \u043D\u0438\u0445 \u0440\u0430\u043A\u0435\u0442\u043D\u044B\u0439 \u043E\u043A\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C. \u041B\u0435\u0442 \u043C\u043D\u0435 \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0434\u0435\u0432\u044F\u0442\u044C, \u0441\u043A\u043E\u0440\u043E \u044E\u0431\u0438\u043B\u0435\u0439. \u0410 \u0432 \u0430\u0440\u043C\u0438\u0438 \u044F \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u043C\u0435\u043D\u044F \u0436\u0435\u043D\u0430 \u0441 \u0442\u0451\u0449\u0435\u0439 \u0445\u043E\u0442\u0435\u043B\u0438 \u0432 \u0441\u0443\u043C\u0430\u0441\u0448\u0435\u0434\u0448\u0438\u0439 \u0434\u043E\u043C \u043E\u0442\u0434\u0430\u0442\u044C \u2014 \u0437\u0430 \u0443\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u044F',
        text2: 'Почему у тебя волосы на груди окрасились?'
    }, {
        text1: 'Sri Lanka was known from the beginning of British colonial rule as Ceylon (/s\u026A\u02C8l\u0252n/, US also /se\u026A\u02C8l\u0252n/).\nA nationalist political movement arose in the country in the early 20th century to obtain political independence, which was granted in 1948; the country became a republic and adopted its current name in 1972.\nSri Lanka\'s recent history has been marred by a 26-year civil war, which ended decisively when the Sri Lanka Armed Forces defeated the Liberation Tigers of Tamil Eelam (LTTE) in 2009.\nThe current constitution stipulates the political system as a republic and a unitary state governed by a semi-presidential system.\nIt has had a long history of international engagement, as a founding member of the South Asian Association for Regional Cooperation (SAARC), and a member of the United Nations, the Commonwealth of Nations, the G77, and the Non-Aligned Movement.\nAlong with the Maldives, Sri Lanka is one of only two South Asian countries rated "high" on the Human Development Index (HDI), with its HDI rating and per capita income the highest among South Asian nations.\nThe Sri Lankan constitution accords Buddhism the "foremost place", although it does not identify it as a state religion. Buddhism is given special privileges in the Sri Lankan constitution.',
        text2: 'What is SAARC?'
    }, {
        text1: 'Su \xE1rea de distribuci\xF3n comprende casi toda Sudam\xE9rica al este de los Andes en las cuencas del r\xEDo Orinoco, del Amazonas y del R\xEDo de la Plata; cubriendo desde el este de Venezuela y la Guyana hasta Uruguay y el norte y centro de Argentina.\nPueden vivir en diferentes tipos de h\xE1bitat, pero muestran preferencia por algunos en concreto. Suelen encontrarse cerca de lagos, r\xEDos, marismas o manglares.\nTambi\xE9n necesitan un suelo firme para dormir, idealmente con una vegetaci\xF3n espesa que les sirve de protecci\xF3n.\nPara alimentarse no tienen problema en adentrarse por la sabana y herbazales.\nLa mayor densidad de poblaci\xF3n de carpinchos se encuentra en las extensas zonas h\xFAmedas de Sudam\xE9rica, como el Pantanal, o la regi\xF3n de los Llanos del norte del continente, ba\xF1ada por el r\xEDo Orinoco. Viven mayoritariamente en las llanuras, pero tambi\xE9n habitan en altitudes de hasta 1300 metros por sobre el nivel del mar.\nEn comparaci\xF3n con otras especies animales de Sudam\xE9rica, las capibaras toleran bastante bien los cambios de h\xE1bitat provocados por la actividad humana, y tambi\xE9n pueden sobrevivir en zonas transformadas en plantaciones o pastos.',
        text2: '¿En qué países viven los capibaras?'
    }, {
        text1: 'Su \xE1rea de distribuci\xF3n comprende casi toda Sudam\xE9rica al este de los Andes en las cuencas del r\xEDo Orinoco, del Amazonas y del R\xEDo de la Plata; cubriendo desde el este de Venezuela y la Guyana hasta Uruguay y el norte y centro de Argentina.\nPueden vivir en diferentes tipos de h\xE1bitat, pero muestran preferencia por algunos en concreto. Suelen encontrarse cerca de lagos, r\xEDos, marismas o manglares.\nTambi\xE9n necesitan un suelo firme para dormir, idealmente con una vegetaci\xF3n espesa que les sirve de protecci\xF3n.\nPara alimentarse no tienen problema en adentrarse por la sabana y herbazales.\nLa mayor densidad de poblaci\xF3n de carpinchos se encuentra en las extensas zonas h\xFAmedas de Sudam\xE9rica, como el Pantanal, o la regi\xF3n de los Llanos del norte del continente, ba\xF1ada por el r\xEDo Orinoco. Viven mayoritariamente en las llanuras, pero tambi\xE9n habitan en altitudes de hasta 1300 metros por sobre el nivel del mar.\nEn comparaci\xF3n con otras especies animales de Sudam\xE9rica, las capibaras toleran bastante bien los cambios de h\xE1bitat provocados por la actividad humana, y tambi\xE9n pueden sobrevivir en zonas transformadas en plantaciones o pastos.',
        text2: 'What countries do capybara live in?'
    }, {
        text1: 'Rosjanie zawsze odnosili wielkie sukcesy pod wzgl\u0119dem liczby utalentowanych sportowc\xF3w i ilo\u015Bci zdobytych medali na igrzyskach olimpijskich oraz w innych zawodach mi\u0119dzynarodowych.\nW przeci\u0105gu istnienia ZSRR radzieccy olimpijczycy zdobyli najwi\u0119ksz\u0105 liczb\u0119 medali na 14 spo\u015Br\xF3d 18 olimpiad.\nBior\u0105c pod uwag\u0119 ten fakt, mo\u017Cna stwierdzi\u0107, i\u017C Zwi\u0105zek Radziecki by\u0142 w owym czasie dominuj\u0105c\u0105 pot\u0119g\u0105 sportow\u0105.\nPocz\u0105wszy od Olimpiady Letniej w 1952 r. sportowcy radzieccy zawsze byli w pierwszej tr\xF3jce pod wzgl\u0119dem liczby zdobytych z\u0142otych medali. W 1980 r. Letnie Igrzyska Olimpijskie mia\u0142y miejsce w Moskwie, a w 2014 r. Zimowe Igrzyska odby\u0142y si\u0119 w Soczi.\n2 grudnia 2010 r. Komitet Wykonawczy FIFA powierzy\u0142 Rosji organizacj\u0119 mistrzostw \u015Bwiata w pi\u0142ce no\u017Cnej w 2018 r.',
        text2: 'Gdzie odbyła się Olimpiada w 1980 roku?'
    }, {
        text1: 'Kirjasarjan ensimm\xE4inen osa Harry Potter ja viisasten kivi (engl. Harry Potter and the Philosopher\'s Stone) ilmestyi alkuper\xE4iskielell\xE4 vuonna 1997 ja sen viimeinen osa Harry Potter ja kuoleman varjelukset (engl. Harry Potter and the Deathly Hallows) vuonna 2007.\nEnsimm\xE4isen kirjan julkaisusta l\xE4htien kirjasarja on saanut suurta suosiota ymp\xE4ri maailmaa, ja se on ollut sek\xE4 arvostelu- ett\xE4 taloudellinen menestys. Kirjasarja on myynyt yli 500 miljoonaa kappaletta ja se on k\xE4\xE4nnetty yli 73 kielelle.\nSuomeksi Harry Potter -kirjasarjan kustansi Tammi ja sen k\xE4\xE4nsi Jaana Kapari-Jatta. Kirjasarja julkaistiin suomeksi vuosina 1998\u20132008.\nRowlingin tarinaan perustuva n\xE4ytelm\xE4, Harry Potter ja kirottu lapsi, sai ensi-iltansa Lontoossa 30. hein\xE4kuuta 2016, ja sen k\xE4sikirjoitus julkaistiin my\xF6hemmin kirjan muodossa.',
        text2: 'Milloin kirjasarja julkaistiin suomeksi?'
    }, {
        text1: 'Kirjasarjan ensimm\xE4inen osa Harry Potter ja viisasten kivi (engl. Harry Potter and the Philosopher\'s Stone) ilmestyi alkuper\xE4iskielell\xE4 vuonna 1997 ja sen viimeinen osa Harry Potter ja kuoleman varjelukset (engl. Harry Potter and the Deathly Hallows) vuonna 2007.\nEnsimm\xE4isen kirjan julkaisusta l\xE4htien kirjasarja on saanut suurta suosiota ymp\xE4ri maailmaa, ja se on ollut sek\xE4 arvostelu- ett\xE4 taloudellinen menestys. Kirjasarja on myynyt yli 500 miljoonaa kappaletta ja se on k\xE4\xE4nnetty yli 73 kielelle.\nSuomeksi Harry Potter -kirjasarjan kustansi Tammi ja sen k\xE4\xE4nsi Jaana Kapari-Jatta. Kirjasarja julkaistiin suomeksi vuosina 1998\u20132008.\nRowlingin tarinaan perustuva n\xE4ytelm\xE4, Harry Potter ja kirottu lapsi, sai ensi-iltansa Lontoossa 30. hein\xE4kuuta 2016, ja sen k\xE4sikirjoitus julkaistiin my\xF6hemmin kirjan muodossa.',
        text2: 'Как называется последняя книга про Гарри Поттера?'
    }],
    url: 'https://7014.lnsigo.mipt.ru/answer',
    about: 'Question Answering component answers a question based on a given context (e.g, a paragraph of text), where the answer to the question is a segment of the context. This component allows you to answer questions based on your documentation. To learn more on implementation check out our <a href="http://docs.deeppavlov.ai/en/master/components/squad.html">documentation.</a>',
    docker: 'deeppavlov/squad_ml',
    text1Header: 'Enter Text',
    submitText: 'Ask',
    lang: 'multiLang',
    report: squadReport
}, {
    id: 'Entity recognition ml',
    name: 'Entity recognition',
    examples: [{
        text1: 'Icy conditions have swept across eastern Australia, bringing snow to areas as far north as subtropical Queensland.\nAustralia\'s Bureau of Meteorology described it as a "rare" sight, noting the state had not experienced significant snowfall since 2015.\nSevere weather warnings have also been issued for a 1,000km (620 miles) stretch of coast which includes Sydney.\nMeteorologist Lachlan Stone said the snowfall in Queensland was an unusual occurrence in a state with a sub-tropical to tropical climate.'
    },
    // {
    //     text1: 'Mistrzostwa Świata w Curlingu odbędą się w Antananarivo'
    // },
    {
        text1: 'Члены Американской академии киноискусств решили присудить режиссеру Дэвиду Линчу почетную премию "Оскар" за выдающийся вклад в кинематограф, сообщается на сайте академии. ' + 'Церемония награждения пройдет 27 октября в развлекательном комплексе Hollywood and Highland Center в Лос-Анджелесе (штат Калифорния, США).'
    }, {
        text1: '\u041F\u0456\u0441\u043B\u044F \u0430\u043D\u043E\u043C\u0430\u043B\u044C\u043D\u043E\u0457 \u0432\u0435\u0441\u043D\u0438, \u0449\u043E \u0443\u0432\u0456\u0439\u0448\u043B\u0430 \u0432 \u0434\u0435\u0441\u044F\u0442\u043A\u0443 \u043D\u0430\u0439\u0442\u0435\u043F\u043B\u0456\u0448\u0438\u0445 \u0437\u0430 139 \u0440\u043E\u043A\u0456\u0432 \u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u044C, \u043B\u0456\u0442\u043E \u0442\u0435\u0436 \u043F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u0441\u044F \u0437\u0456 \u0441\u043F\u0435\u043A\u0438.\n\u041F\u0440\u043E \u0446\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043B\u0430 \u0441\u0438\u043D\u043E\u043F\u0442\u0438\u043A \u041D\u0430\u0442\u0430\u043B\u043A\u0430 \u0414\u0456\u0434\u0435\u043D\u043A\u043E \u043D\u0430 \u0441\u0432\u043E\u0457\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0432 \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456 Facebook.\n\u0422\u0430\u043A, \u0443 \u0441\u0435\u0440\u0435\u0434\u0443 5 \u0447\u0435\u0440\u0432\u043D\u044F \u0423\u043A\u0440\u0430\u0457\u043D\u0430 \u0431\u0443\u0434\u0435 \u0437\u0430\u043B\u0438\u0448\u0430\u0442\u0438\u0441\u044F \u043E\u0434\u043D\u0456\u0454\u044E \u0437 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u0441\u043F\u0435\u043A\u043E\u0442\u043D\u0438\u0445 \u043A\u0440\u0430\u0457\u043D \u0404\u0432\u0440\u043E\u043F\u0438: \u0437\u0430\u0432\u0442\u0440\u0430 \u0432\u0434\u0435\u043D\u044C \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F + 24 + 29 \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432, \u043D\u0430 \u0421\u0445\u043E\u0434\u0456 \u0442\u0430 \u041F\u0456\u0432\u0434\u043D\u0456 +28 +33 \u0433\u0440\u0430\u0434\u0443\u0441\u0438.\n\u0417\u0430 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 \u0441\u0438\u043D\u043E\u043F\u0442\u0438\u043A\u0430, \u0443 \u0424\u0440\u0430\u043D\u0446\u0456\u0457, \u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0456\u0457 \u0456 \u043C\u0456\u0441\u0446\u044F\u043C\u0438 \u043D\u0430\u0432\u0456\u0442\u044C \u0432 \u0406\u0441\u043F\u0430\u043D\u0456\u0457 \u0442\u0430 \u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0456\u0457 \u0432 \u0441\u0435\u0440\u0435\u0434\u0443 \u043F\u043E\u0445\u043E\u043B\u043E\u0434\u0430\u0454 \u0434\u043E + 10 + 15 \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432 \u0456 \u043F\u0440\u043E\u0439\u0434\u0443\u0442\u044C \u0434\u043E\u0449\u0456.'
    }, {
        text1: 'Pozna\u0144 liegt auf halbem Weg zwischen Warschau und Berlin \u2013 diese St\xE4dte waren wichtig f\xFCr den Dirigenten und Komponisten Ignatz Waghalter, einen der Mitbegr\xFCnder der Deutschen Oper in Berlin-Charlottenburg.\nDas Orchester der Philharmonie Pozna\u0144 widmet sich jetzt bereits zum zweiten Mal der Musik dieses aus Deutschland vertriebenen Komponisten. Waghalter stammte aus einer j\xFCdischen Warschauer Familie.'
    }, {
        text1: 'As\xED ha calificado en un comunicado Jay Timmons, el consejero delegado de la Asociaci\xF3n de Manufacturas de EEUU, la amenaza de Donald Trump de empezar el 10 de junio a imponer aranceles del 5% a la importaci\xF3n de bienes mexicanos e irlos subiendo hasta el mes de octubre, cuando alcanzar\xEDan el 25%. En total, el 80% de las exportaciones mexicanas van a Estados Unidos.\nSeg\xFAn Gregory Daco, economista jefe de la consultora Oxford Economics, unos aranceles del 25% reba\xF1ar\xEDan al menos siete d\xE9cimas de crecimiento de EEUU en 2020, hasta dejarlo en un min\xFAsculo 1%. Para M\xE9xico las consecuencias podr\xEDan ser devastadoras, y el pa\xEDs quedar\xEDa sepultado en una recesi\xF3n.'
    }, {
        text1: 'Ge\xE7ti\u011Fimiz sezonun devre aras\u0131nda Sassuolo\u2019ya transfer olan Merih Demiral, g\xF6sterdi\u011Fi performans sonras\u0131 \u0130talya Seria A\u2019n\u0131n son \u015Fampiyonu Juventus\u2019a transfer oldu.\n\u0130talyan gazeteci Gianluca Di Marzio,ki\u015Fisel twitter hesab\u0131nda Merih Demiral\u2019\u0131n Juventus\u2019a transferinin sonu\xE7land\u0131\u011F\u0131n\u0131 ve Merih\u2019in Juventus ile 5 y\u0131ll\u0131k s\xF6zle\u015Fme imzalayaca\u011F\u0131n\u0131 s\xF6yledi.\nJuventus, Merih\u2019in transferi i\xE7in Sassuolo\u2019ya 15 milyon euro bonservis bedeli \xF6deyece\u011Fini a\xE7\u0131klad\u0131.'
    }],
    url: 'https://7013.lnsigo.mipt.ru/answer',
    about: 'Named Entity Recognition (NER) classifies tokens in text into predefined categories (tags), such as <b>person names</b>, <b>quantity expressions</b>, <b>percentage expressions</b>, <b>names of locations</b>, <b>organizations</b>, as well as expression of <b>time</b>, <b>currency</b> and others. We can recognize up to 19 entities. DeepPavlov also features a multilingual model that is available for 104 languages. NER can be used as a knowledge extractor when you are interested in a piece of certain information in your text. To learn more on implementation read our <a href="http://docs.deeppavlov.ai/en/master/components/ner.html">documentation.</a>' + '<br><br>Hover over an entity to see its class description<br/>Classes: ' + Object.entries(ontonotesClasses).map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            k = _ref6[0],
            _ref6$ = _slicedToArray(_ref6[1], 2),
            class_name = _ref6$[0],
            about = _ref6$[1];

        return '<span class="badge ' + class_name + '" data-toggle="tooltip" title="' + about + '" style="cursor: help;">' + k + '</span>';
    }).join(', '),
    docker: 'deeppavlov/ner_ml',
    text1Header: 'Enter Text',
    submitText: 'Search',
    lang: 'multiLang',
    report: ontonotesReport
}];

for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    var example = tab.examples[0];
    tab.text1 = example.text1;
    if ('text2' in example) {
        tab.text2 = example.text2;
    }
    tab.results = [];
    tab.selectedExample = 0;

    if (!tab.hasOwnProperty('report')) {
        tab.report = defaultReport;
    }

    if (!tab.hasOwnProperty('send')) {
        tab.send = function () {
            var self = this;

            var payload = {
                text1: [self.text1],
                text2: [self.text2]
            };

            return Vue.http.post(self.url, payload).then(function (response) {
                return self.report(payload.text1[0], payload.text2[0], response.body[0]);
            });
        };
    }
}

Vue.component('tab-content', {
    props: ['tab'],
    template: '\n<div>\n    <div class="row show-grid" style="margin-top:2em">\n        <div class="col">\n            <blockquote class="blockquote">\n                <p v-html="tab.about" class="about"></p>\n                <p v-if="tab.docker"><a :href="`https://hub.docker.com/r/${tab.docker}`">\n                    <img src="img/docker-logo.svg" height="20px"/> <span class="code">docker pull {{tab.docker}}</span>\n                </a></p>\n            </blockquote>\n        </div>\n    </div>\n    <div class="row show-grid" id="ExEnQu">\n        <div class="col-sm-8">\n            <h3 v-html="tab.text1Header"></h3>\n            <div>\n                <form @submit.prevent="send">\n                    <div class="form-group">\n                        <textarea v-model="tab.text1" class="form-control" rows="7" @focus="tab.selectedExample = -1"\n                         @keydown="handleCtrlEnter($event)" required="true"/>\n                    </div>\n                    <h3 v-if="tab.hasOwnProperty(\'text2\')">{{tab.text2Header || \'Question\'}}</h3>\n                    <div class="form-group">\n                        <input v-if="tab.hasOwnProperty(\'text2\')" v-model="tab.text2" class="form-control"\n                         @focus="tab.selectedExample = -1" @keydown="handleCtrlEnter($event)" required="true"/>\n                    </div>\n                    <button type="submit" class="btn btn-primary" v-html="tab.submitText"></button>\n                </form>\n            </div>\n        </div>\n        <div class="col-sm-4">\n            <h3>{{tab.examplesText || \'Examples\'}}</h3>\n            <div class="list-group">\n                <a href="#" v-for="(example, index) in tab.examples" v-html="examplePreview(example)"\n                    :class="\'list-group-item list-group-item-action flex-column align-items-start\' +\n                     (selected===index?\' active\':\'\')"\n                    @click.prevent="selected = index"></a>\n            </div>\n        </div>\n    </div>\n    <div class="row show-grid results" v-if="tab.results.length > 0">\n        <div class="col">\n            <h3>{{tab.resultsText || \'Results\'}}</h3>\n        </div>\n    </div>\n    <div class="row show-grid answers">\n        <div :id="\'reversed-\' + tab.id" class="reversed col">\n            <transition name="fade" v-for="result in tab.results">\n                <div class="row" v-show="result.show" v-html="result.data"></div>\n            </transition>\n        </div>\n    </div>\n</div>',
    methods: {
        send: function send() {
            var tab = this.tab;
            $('#pleaseWaitDialog').modal({ backdrop: 'static', keyboard: false, show: true });
            var minWait = new Promise(function (resolve) {
                return setTimeout(resolve, 200);
            });

            tab.send().then(function (report) {
                var res = '<div class="card w-100"><div class="card-body">';
                res += report;
                res += '</div></div>';
                tab.results.push({ show: false, data: res });
                return Vue.nextTick();
            }).then(function () {
                return minWait;
            }, function (response) {
                console.dir(response);
                console.log('ERROR!');
                var res = '<div class="card w-100"><div class="card-body">';
                res += '<span style="color: red;">ERROR</span>';
                res += '</div></div>';
                tab.results.push({ show: false, data: res });
                return Vue.nextTick();
            }).then(function () {
                $('#pleaseWaitDialog').modal('hide');
                tab.results[tab.results.length - 1].show = true;
                return Vue.nextTick();
            }).then(function () {
                var el = $('div[id=\'reversed-' + tab.id + '\'] > div').last();
                if (el.offset().top < $(document).scrollTop() || el.offset().top + el.height() > $(document).scrollTop() + $(window).height()) {
                    var scrollTop = el.height() > $(window).height() ? el.offset().top : el.offset().top - $(window).height() + el.height();
                    $('html, body').animate({
                        scrollTop: scrollTop
                    }, 700);
                }
            });
        },
        examplePreview: function examplePreview(example) {
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            var maxLength = width <= 450 ? 40 : 100;
            var shorten = function shorten(x) {
                return x.length > maxLength ? x.substring(0, maxLength) + '...' : x;
            };

            if (example.text2) {
                return shorten(example.text2);
            }
            return shorten(example.text1);
        },
        handleCtrlEnter: function handleCtrlEnter(e) {
            if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
                this.send();
            }
        }
    },
    computed: {
        selected: {
            get: function get() {
                return this.tab.selectedExample;
            },
            set: function set(newVal) {
                this.tab.selectedExample = newVal;
                var example = this.tab.examples[newVal];
                this.tab.text1 = example.text1;
                if ('text2' in example) {
                    this.tab.text2 = example.text2;
                }
            }
        }
    }
});

var langs = new Set(tabs.map(function (t) {
    return t.lang;
}));
var hash = window.location.hash.replace('#', '');
var browserLang = (navigator.language || navigator.userLanguage).substr(0, 2);
var lang = langs.has(hash) ? hash : langs.has(browserLang) ? browserLang : 'en';

var vue = new Vue({
    el: '#app',
    data: {
        tabs: tabs,
        lang: lang
    },
    methods: {
        langChange: function langChange() {
            var lang = this.lang;
            Vue.nextTick().then(function () {
                $('#tabs li:first-child a').tab('show');
                window.location.hash = lang;
            });
        }
    }
});

$('#tabs li:first-child a').tab('show');

$(window).on('hashchange', function () {
    var hash = window.location.hash.replace('#', '');
    if (langs.has(hash)) {
        vue.lang = hash;
        vue.langChange();
    }
});

$('#app').css('visibility', 'visible');