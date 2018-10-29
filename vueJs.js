
var config = {
  el: '#app',
  data: {
    input: "",
    tweets: [

    ]
  },

  methods:{
    post:function(){
      var dt = new Date();
      var id = 0;
      var tweet ={
      	user:this.us,
        dt : dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear(),
        txt:this.input,
      };
     this.tweets.push(tweet);
  	},
  }
};

new Vue(config);


$("input").on("click", function(){
  if ( $(this).attr("type") === "radio" ) {
    $(this).parent().siblings().removeClass("isSelected");
  }
  $(this).parent().toggleClass("isSelected");
});
