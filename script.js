var app = new Vue({
    el: '#engine',
    data: {
        posts: [],
        word: ''
    },
    methods: {
        truncate: (s, len) => {
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
