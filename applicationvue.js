//premier input
new Vue({
    el: '#app',
    data: {
      nom: 'Veuillez saisir votre nom',
      h2: 'Veuillez saisir votre adresse mail',
      contenu:'',
      checked: false //Notre valeur 'checked' contenue dans l'objet 'data'.
      
    },
    methods : {
      validate:function(){
        this.h2=this.contenu // 'this.h2' fait référence au 'h2' présent dans l'objet 'data'. 'this.contenu fait référence au 'contenu' present dans l'objet 'data'
      },
      close: function() {
        this.success = false
      },
    }})
