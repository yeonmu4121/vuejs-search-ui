var app = new Vue({
    el: '#engine',
    data: {
        posts: [],
        keyword: ''
    },
    methods: {
        exists: function(post) {
            var keyword = this.keyword.toLowerCase();
            var title = post.title.toLowerCase();
            var content = post.content.toLowerCase();
            return title.indexOf(keyword) != -1 || content.indexOf(keyword) != -1;
        },
        truncate: function(s, len) {
            var sub = s.substring(0, len);
            if(sub.length == len)
                return sub + '...';
            else
                return sub;
        }
    }
});

axios.get('posts.json') // sample post list
    .then((res) => {
        for(var i=0; i<res.data.length; i++) {
            app.posts.push(res.data[i]);
        }
    })
    .catch((err) => {
        console.log(err);
    });
