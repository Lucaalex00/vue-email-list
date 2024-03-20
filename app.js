/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
      error: null,
    };
  },
  methods: {
    callApi() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response) */
          console.log(response);
          /* console.log(this.randomEmail); */
        });
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const newEmail = response.data.response;
            this.emailList.push(newEmail);
          })
          .catch((error) => {
            console.log(error);
            this.error = error;
          });
      }
    },
  },
  mounted() {
    this.callApi();
  },
}).mount("#app");
