function run(){
    new Vue(
        {
        el:'#login-component',
        data:{
            user:'',
            pass:'',
            message:'',
        },
            created: function(){
                console.log('It s working');
            },
                methods:{
                    login: function(){
                        //facem partea de utilizator
                        if(this.user === 'root' && this.pass === 'pass'){
                        this.message = 'allow';
                        location.href="/client/MainPage/main.html";
                    //aici o sa vreau sa ma duca in alta pagina
                        }else{
                        this.message = 'deny';
                        }
                    }
                },
        });}




document.addEventListener('DOMContentLoaded', () => {
    run();
});

