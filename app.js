/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
    };
  },
  methods: {
    callApi() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          const newEmail = response.data.response;
          console.log(newEmail);
          this.emailList.push(newEmail);
          /* console.log(this.randomEmail); */
        });
    },
  },
  mounted() {
    this.callApi();
  },
}).mount("#app");
