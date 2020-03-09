module.exports = {

/*

** Headers of the page

*/
/*router: {
    router: {
        middleware: ['detail']
      }
  },*/
    /*head: {
	    script: [
	      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
	    ]
	},*/
head: {

title: 'nuxt',

meta: [

{ charset: 'utf-8' },

{ name: 'viewport',content:
'width=device-width, initial-scale=1' },

{ hid: 'description',name:
'description',content:
'nwy blog front' }

],

link: [

{ rel: 'icon',type:
'image/x-icon',href:
'/favicon.ico' }

]

},

css:[


{src:'element-ui/lib/theme-chalk/index.css'}

],

/*

** Customize the progress bar color

*/

loading: { color:'#3B8070' },



plugins: [
    {src:'~plugins/vue-resource',ssr: false},
    {src:'~plugins/element-ui',ssr: false},
    {src:'~plugins/vee-validate',ssr: false}
    
],

/*

** Build configuration

*/

build: {

vendor: ['vue-resource','element-ui']

}

}