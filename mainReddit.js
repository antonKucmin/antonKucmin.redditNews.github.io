
var ap = new Vue ({
    el: '#reddit',
    data: { 
        info: '',
        pageNumber: 0,
        size: 4,
        page: '',
        button: 'false',
        button2: 'false'
    },

    mounted(){
        axios
            .get('https://www.reddit.com/r/ru.json')
            .then(response => (this.info = response.data.data.children));
    },
    methods: {
        nextPage(){
            this.pageNumber++;
            this.page = 'forwards';
            this.button = 'false';
            this.button2 = 'true';
        },
        prevPage(){
            this.pageNumber--;
            this.page = 'backwards';
            this.button = 'true';
            this.button2 = 'false';
        },
    },
    computed: {
        pageinatedData(){
            var start = this.pageNumber * this.size,
                  end = start + this.size;
            return this.info.slice(start, end);
        },
        pageCount(){
            let l = this.info.length,
                s = this.size;
            return Math.floor(l/s);
        }
    }
    
    
})
