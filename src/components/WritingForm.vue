<template>
  <div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading">
      Erzeugen die Unregelmässige Verben Prüfung
      불규칙 동사 문제를 풀어보세요
      <i
        class="fa fa-refresh"
        aria-hidden="true"
        @click="setData()"
      ></i>
    </div>
    <!-- adsence -->
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6388414680496509"
      data-ad-slot="1901376121"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    <!-- Table -->
    <form action="" method="post">
      <table class="table table-dark">
        <thead>
          <colgroup> 
          </colgroup>
        </thead>
        <tbody id="dataTBody">
          <tr>
            <th class="data-hide">Index</th>
            <th>Infinitiv</th>
            <th>Präteritum</th>
            <th>Perfekt</th>
            <th>-</th> 
          </tr> 
          <tr v-for="data in dataTb" :key="data.idx">
            <td>{{data.Idx}}</td>
            <td>{{data.verb1}}</td>
            <td><input type="text" v-bind:id="data.Idx +  '_veb2_1'" v-model="data.verb2_1">
            </td>
            <td><input type="text" v-bind:id="data.Idx +  '_veb3_1'" v-model="data.verb3_1"></td>  
          </tr> 
        </tbody>
      </table>
    </form>
    <div>
      <input class="btn btn-primary" type="button" value="Zensieren" @click="checkAns()"/>
    </div>
  </div>
</template>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
<script>
export default {
  data: function() {
    return {
      symbols: [],
      data1: [
        { Idx: 1, verb1: "backen", verb2: "backte", verb3: "hat gebacken", verb2_1:'', verb3_1:''},
        { Idx: 2, verb1: "befehlen", verb2: "befahl", verb3: "hat befohlen" ,verb2_1:'', verb3_1:''},
        { Idx: 3, verb1: "beginnen", verb2: "begann", verb3: "hat begonnen" ,verb2_1:'', verb3_1:''},
        { Idx: 4, verb1: "beißen", verb2: "biss", verb3: "hat gebissen" ,verb2_1:'', verb3_1:''},
        { Idx: 5, verb1: "biegen", verb2: "bog", verb3: "hat gebogen" ,verb2_1:'', verb3_1:''},
        { Idx: 6, verb1: "bieten", verb2: "bot", verb3: "hat geboten" ,verb2_1:'', verb3_1:''},
        { Idx: 7, verb1: "binden", verb2: "band", verb3: "hat gebunden" ,verb2_1:'', verb3_1:''},
        { Idx: 8, verb1: "bitten", verb2: "bat", verb3: "hat gebeten" ,verb2_1:'', verb3_1:''},
        { Idx: 9, verb1: "blasen", verb2: "blies", verb3: "hat geblasen" ,verb2_1:'', verb3_1:''},
        { Idx: 10, verb1: "bleiben", verb2: "blieb", verb3: "ist geblieben" ,verb2_1:'', verb3_1:''},
        { Idx: 11, verb1: "braten", verb2: "brach", verb3: "hat gebraten" ,verb2_1:'', verb3_1:''},
        { Idx: 12, verb1: "brechen", verb2: "brach", verb3: "hat gebrochen" ,verb2_1:'', verb3_1:''},
        { Idx: 13, verb1: "brennen", verb2: "brannte", verb3: "hat gebrannt" ,verb2_1:'', verb3_1:''},
        { Idx: 14, verb1: "bringen", verb2: "brachte", verb3: "hat gebracht" ,verb2_1:'', verb3_1:''},
        { Idx: 15, verb1: "denken", verb2: "dachte", verb3: "hat gedacht" ,verb2_1:'', verb3_1:''},
        { Idx: 16, verb1: "dürfen", verb2: "durfte", verb3: "hat gedurft" ,verb2_1:'', verb3_1:''},
        {
          Idx: 17,
          verb1: "empfehlen",
          verb2: "empfahl",
          verb3: "hat empfohlen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 18,
          verb1: "erschrecken",
          verb2: "erschrak",
          verb3: "ist erschrocken"
        ,verb2_1:'', verb3_1:''},
        { Idx: 19, verb1: "essen", verb2: "aß", verb3: "hat gegessen" ,verb2_1:'', verb3_1:''},
        { Idx: 20, verb1: "fahren", verb2: "fuhr", verb3: "ist gefahren" ,verb2_1:'', verb3_1:''},
        { Idx: 21, verb1: "fallen", verb2: "fiel", verb3: "ist gefallen" ,verb2_1:'', verb3_1:''},
        { Idx: 22, verb1: "fangen", verb2: "fing", verb3: "hat gefangen" ,verb2_1:'', verb3_1:''},
        { Idx: 23, verb1: "finden", verb2: "fand", verb3: "hat gefunden" ,verb2_1:'', verb3_1:''},
        { Idx: 24, verb1: "fliegen", verb2: "flog", verb3: "ist geflogen" ,verb2_1:'', verb3_1:''},
        { Idx: 25, verb1: "fliehen", verb2: "floh", verb3: "ist geflohen" ,verb2_1:'', verb3_1:''},
        { Idx: 26, verb1: "fließen", verb2: "floss", verb3: "ist geflossen" ,verb2_1:'', verb3_1:''},
        { Idx: 27, verb1: "fressen", verb2: "fraß", verb3: "hat gefressen" ,verb2_1:'', verb3_1:''},
        { Idx: 28, verb1: "frieren", verb2: "fror", verb3: "hat gefroren" ,verb2_1:'', verb3_1:''},
        { Idx: 29, verb1: "geben", verb2: "gab", verb3: "het gegeben" ,verb2_1:'', verb3_1:''},
        { Idx: 30, verb1: "gehen", verb2: "ging", verb3: "ist gegangen" ,verb2_1:'', verb3_1:''},
        { Idx: 31, verb1: "gelingen", verb2: "gelang", verb3: "ist gelungen" ,verb2_1:'', verb3_1:''},
        { Idx: 32, verb1: "genießen", verb2: "genoss", verb3: "hat genossen" ,verb2_1:'', verb3_1:''},
        {
          Idx: 33,
          verb1: "geschehen",
          verb2: "geschah",
          verb3: "ist geschehen"
        ,verb2_1:'', verb3_1:''},
        { Idx: 34, verb1: "gewinnen", verb2: "gewann", verb3: "hat gewonnen" ,verb2_1:'', verb3_1:''},
        { Idx: 35, verb1: "gießen", verb2: "goss", verb3: "hat gegossen" ,verb2_1:'', verb3_1:''},
        { Idx: 36, verb1: "graben", verb2: "grub", verb3: "hat gegraben" ,verb2_1:'', verb3_1:''},
        { Idx: 37, verb1: "greifen", verb2: "griff", verb3: "hat gefgriffen" ,verb2_1:'', verb3_1:''},
        { Idx: 38, verb1: "haben", verb2: "hatte", verb3: "hat hehoben" ,verb2_1:'', verb3_1:''},
        { Idx: 39, verb1: "halten", verb2: "hielt", verb3: "hat gehalten" ,verb2_1:'', verb3_1:''},
        { Idx: 40, verb1: "heben", verb2: "hob", verb3: "hatgehoben" ,verb2_1:'', verb3_1:''},
        { Idx: 41, verb1: "heißen", verb2: "hieß", verb3: "hat geheißen" ,verb2_1:'', verb3_1:''},
        { Idx: 42, verb1: "helfen", verb2: "half", verb3: "hat geholfen" ,verb2_1:'', verb3_1:''},
        { Idx: 43, verb1: "kennen", verb2: "kannte", verb3: "hat gekannt" ,verb2_1:'', verb3_1:''},
        { Idx: 44, verb1: "klingen", verb2: "klang", verb3: "hat geklungen" ,verb2_1:'', verb3_1:''},
        { Idx: 45, verb1: "kommen", verb2: "kam", verb3: "ist gekommen" ,verb2_1:'', verb3_1:''},
        { Idx: 46, verb1: "können", verb2: "konnte", verb3: "hat gekonnt" ,verb2_1:'', verb3_1:''},
        { Idx: 47, verb1: "kriechen", verb2: "kroch", verb3: "ist gekrochen" ,verb2_1:'', verb3_1:''},
        { Idx: 48, verb1: "laden", verb2: "lud", verb3: "hat geladen" ,verb2_1:'', verb3_1:''},
        { Idx: 49, verb1: "lassen", verb2: "ließ", verb3: "hat gelassen" ,verb2_1:'', verb3_1:''},
        { Idx: 50, verb1: "laufen", verb2: "lief", verb3: "ist gelaufen" ,verb2_1:'', verb3_1:''},
        { Idx: 51, verb1: "leiden", verb2: "litt", verb3: "hat gelitten" ,verb2_1:'', verb3_1:''},
        { Idx: 52, verb1: "leihen", verb2: "lieh", verb3: "hat geliehen" ,verb2_1:'', verb3_1:''},
        { Idx: 53, verb1: "lesen", verb2: "las", verb3: "hat gelesen" ,verb2_1:'', verb3_1:''},
        { Idx: 54, verb1: "liegen", verb2: "lag", verb3: "hat/ist gelegen" ,verb2_1:'', verb3_1:''},
        { Idx: 55, verb1: "lügen", verb2: "log", verb3: "hat gelogen" ,verb2_1:'', verb3_1:''},
        { Idx: 56, verb1: "meiden", verb2: "mied", verb3: "hat gemieden" ,verb2_1:'', verb3_1:''},
        { Idx: 57, verb1: "melken", verb2: "molk", verb3: "hat gemolken" ,verb2_1:'', verb3_1:''},
        { Idx: 58, verb1: "messen", verb2: "maß", verb3: "hat gemessen" ,verb2_1:'', verb3_1:''},
        { Idx: 59, verb1: "mögen", verb2: "mochte", verb3: "hat gemocht" ,verb2_1:'', verb3_1:''},
        { Idx: 60, verb1: "müssen", verb2: "musste", verb3: "hat gemusst" ,verb2_1:'', verb3_1:''},
        { Idx: 61, verb1: "nehmen", verb2: "nahm", verb3: "hat genommen" ,verb2_1:'', verb3_1:''},
        { Idx: 62, verb1: "nennen", verb2: "nannte", verb3: "hat genannt" ,verb2_1:'', verb3_1:''},
        { Idx: 63, verb1: "pfeifen", verb2: "pfiff", verb3: "hat gepfiffen" ,verb2_1:'', verb3_1:''},
        { Idx: 64, verb1: "raten", verb2: "riet", verb3: "hat geraten" ,verb2_1:'', verb3_1:''},
        { Idx: 65, verb1: "reiben", verb2: "rieb", verb3: "hat gerieben" ,verb2_1:'', verb3_1:''},
        { Idx: 66, verb1: "reißen", verb2: "riss", verb3: "hat gerissen" ,verb2_1:'', verb3_1:''},
        { Idx: 67, verb1: "reiten", verb2: "ritt", verb3: "ist geritten" ,verb2_1:'', verb3_1:''},
        { Idx: 68, verb1: "rennen", verb2: "rannte", verb3: "ist gerannt" ,verb2_1:'', verb3_1:''},
        { Idx: 69, verb1: "riechen", verb2: "roch", verb3: "hat gerochen" ,verb2_1:'', verb3_1:''},
        { Idx: 70, verb1: "rinnen", verb2: "rannte", verb3: "ist geronnen" ,verb2_1:'', verb3_1:''},
        { Idx: 71, verb1: "rufen", verb2: "rief", verb3: "hat grefuen" ,verb2_1:'', verb3_1:''},
        { Idx: 72, verb1: "saufen", verb2: "soff", verb3: "hat gesoffen" ,verb2_1:'', verb3_1:''},
        {
          Idx: 73,
          verb1: "scheinen",
          verb2: "schien",
          verb3: "hat geschienen"
        ,verb2_1:'', verb3_1:''},
        { Idx: 74, verb1: "schieben", verb2: "schob", verb3: "hat geschhoben" ,verb2_1:'', verb3_1:''},
        {
          Idx: 75,
          verb1: "schießen",
          verb2: "schoss",
          verb3: "hat geschossen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 76,
          verb1: "schlafen",
          verb2: "schlief",
          verb3: "hat geschlafen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 77,
          verb1: "schlagen",
          verb2: "schlug",
          verb3: "hat geschlagen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 78,
          verb1: "schleichen",
          verb2: "schlich",
          verb3: "ist geschlichen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 79,
          verb1: "schleifen",
          verb2: "schliff",
          verb3: "hat geschliffen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 80,
          verb1: "schließen",
          verb2: "schloss",
          verb3: "hat geschlossen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 81,
          verb1: "schlingen",
          verb2: "schlang",
          verb3: "hat geschlungen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 82,
          verb1: "schmeißen",
          verb2: "schmiss",
          verb3: "hat geschmissen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 83,
          verb1: "schmelzen",
          verb2: "schmolz",
          verb3: "hat/ist geschmolzen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 84,
          verb1: "schneiden",
          verb2: "schnitt",
          verb3: "hat geschnitten"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 85,
          verb1: "schreiben",
          verb2: "schrieb",
          verb3: "hat geschrieben"
        ,verb2_1:'', verb3_1:''},
        { Idx: 86, verb1: "schreien", verb2: "schrie", verb3: "hat geschrien" ,verb2_1:'', verb3_1:''},
        {
          Idx: 87,
          verb1: "shcweigen",
          verb2: "schwieg",
          verb3: "hat geschwiegen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 88,
          verb1: "schwimmen",
          verb2: "schwamm",
          verb3: "ist geschwommen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 89,
          verb1: "schwören",
          verb2: "schwor",
          verb3: "hat getschworen"
        ,verb2_1:'', verb3_1:''},
        { Idx: 90, verb1: "sehen", verb2: "sah", verb3: "hat gesehen" ,verb2_1:'', verb3_1:''},
        { Idx: 91, verb1: "sein", verb2: "war", verb3: "ist gewesen" ,verb2_1:'', verb3_1:''},
        { Idx: 92, verb1: "singen", verb2: "sang", verb3: "hatgesungen" ,verb2_1:'', verb3_1:''},
        { Idx: 93, verb1: "sinken", verb2: "sank", verb3: "ist gesunken" ,verb2_1:'', verb3_1:''},
        { Idx: 94, verb1: "sitzen", verb2: "saß", verb3: "hat/ist gesessen" ,verb2_1:'', verb3_1:''},
        { Idx: 95, verb1: "sollen", verb2: "sollte", verb3: "hat gesollt" ,verb2_1:'', verb3_1:''},
        { Idx: 96, verb1: "spinnen", verb2: "spann", verb3: "hat gesponnen" ,verb2_1:'', verb3_1:''},
        {
          Idx: 97,
          verb1: "sprechen",
          verb2: "sprach",
          verb3: "hat gesprochen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 98,
          verb1: "springen",
          verb2: "sprang",
          verb3: "ist gesprungen"
        ,verb2_1:'', verb3_1:''},
        { Idx: 99, verb1: "stechen", verb2: "stach", verb3: "hat gestochen" ,verb2_1:'', verb3_1:''},
        {
          Idx: 100,
          verb1: "stehen",
          verb2: "stand",
          verb3: "hat/ist gestanden"
        ,verb2_1:'', verb3_1:''},
        { Idx: 101, verb1: "stehlen", verb2: "stahl", verb3: "hat gestohlen" ,verb2_1:'', verb3_1:''},
        { Idx: 102, verb1: "steigen", verb2: "stieg", verb3: "ist gestiegen" ,verb2_1:'', verb3_1:''},
        { Idx: 103, verb1: "sterben", verb2: "starb", verb3: "ist gestorben" ,verb2_1:'', verb3_1:''},
        { Idx: 104, verb1: "stinken", verb2: "stank", verb3: "hat gestunken" ,verb2_1:'', verb3_1:''},
        { Idx: 105, verb1: "stoßen", verb2: "stieß", verb3: "hat gestoßen" ,verb2_1:'', verb3_1:''},
        {
          Idx: 106,
          verb1: "streichen",
          verb2: "strich",
          verb3: "hat gestrichen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 107,
          verb1: "streiten",
          verb2: "stritt",
          verb3: "hat gestritten"
        ,verb2_1:'', verb3_1:''},
        { Idx: 108, verb1: "tragen", verb2: "trug", verb3: "hat getragen" ,verb2_1:'', verb3_1:''},
        { Idx: 109, verb1: "treffen", verb2: "traf", verb3: "hat getroffen" ,verb2_1:'', verb3_1:''},
        { Idx: 110, verb1: "treiben", verb2: "trieb", verb3: "hat getrieben" ,verb2_1:'', verb3_1:''},
        { Idx: 111, verb1: "treten", verb2: "trat", verb3: "hat/ist getreten" ,verb2_1:'', verb3_1:''},
        { Idx: 112, verb1: "trinken", verb2: "trank", verb3: "hat getrunken" ,verb2_1:'', verb3_1:''},
        { Idx: 113, verb1: "tun", verb2: "tat", verb3: "hat getan" ,verb2_1:'', verb3_1:''},
        {
          Idx: 114,
          verb1: "verderben",
          verb2: "verdarb",
          verb3: "ist verdorben"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 115,
          verb1: "vergessen",
          verb2: "vergaß",
          verb3: "hat vergessen"
        ,verb2_1:'', verb3_1:''},
        {
          Idx: 116,
          verb1: "verlieren",
          verb2: "verlor",
          verb3: "hat verloren"
        ,verb2_1:'', verb3_1:''},
        { Idx: 117, verb1: "wachsen", verb2: "wuchs", verb3: "ist gewachsen" ,verb2_1:'', verb3_1:''},
        { Idx: 118, verb1: "waschen", verb2: "wusch", verb3: "hat gewaschen" ,verb2_1:'', verb3_1:''},
        { Idx: 119, verb1: "werden", verb2: "wurde", verb3: "ist geworden" ,verb2_1:'', verb3_1:''},
        { Idx: 120, verb1: "werfen", verb2: "warf", verb3: "hat geworfen" ,verb2_1:'', verb3_1:''},
        { Idx: 121, verb1: "wiegen", verb2: "wog", verb3: "hat gewogen" ,verb2_1:'', verb3_1:''},
        { Idx: 122, verb1: "wissen", verb2: "wusste", verb3: "hat gewusst" ,verb2_1:'', verb3_1:''},
        { Idx: 123, verb1: "wollen", verb2: "wollte", verb3: "hat gewollt" ,verb2_1:'', verb3_1:''},
        { Idx: 124, verb1: "ziehen", verb2: "zog", verb3: "hat gezogen" ,verb2_1:'', verb3_1:''},
        { Idx: 125, verb1: "zwingen", verb2: "zwang", verb3: "hat gezwungen" ,verb2_1:'', verb3_1:''}
      ],
      dataTb: [],
      dataLen: 15
    };
  },
  methods: {
    setData: function() {
      var tmp = [];
      this.dataTb = [];
      for (var i = 0; i < this.dataLen; i++) {
        tmp = Math.floor(Math.random() * this.data1.length);
        this.dataTb.push(this.data1[tmp]);
      } 

    },
    checkAns : function(){
      for(var i=0; i < this.dataTb.length; i++){
        console.log(this.dataTb[i].verb1 + ", "+ this.dataTb[i].verb2 + ", " + this.dataTb[i].verb3 
          +", "+ this.dataTb[i].verb2_1+", "+ this.dataTb[i].verb3_1)
      } 
    }
  },
  mounted() {
    this.setData();
  }
};
// export default {
//   name: "A2 Writing",
//   data: []
// };
</script>
<style>
.fa-refresh {
  cursor: pointer;
}
.data-hide{
  display: none;
}
</style>
