//premier input
new Vue({
    el: '#app',
    data: {
      nom: 'Veuillez saisir votre nom',
      mail: 'Veuillez saisir votre adresse mail'
    },
    methods : {
      validate : function(){
        this.mail = true;
         if( this.validEmail(this.email)){
            this.valid = true;
         }
  }}})

