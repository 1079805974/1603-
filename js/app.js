
var app = new Vue({
    el: '#app',
    data: {
        title: '1603校级及以上获奖情况统计',
        Repeatable:true,
        MainIcon:['fa fa-user','fa fa-male','fa fa-female'],
        RepeatableIcon:['fa fa-trophy','fa fa-cube','fa','fa fa-apple','fa fa-user-circle-o'],
        note:['填写校级及以上比赛，举例：美国数学建模大赛','举例：二等奖','国际级，国家级，省市级，校级','举例:美国数学及其应用联合会'],
        MainInformations:{姓名:'', 性别:'', 年级:[]},
        RepeatableInformations:[{比赛名称:'',获奖等级:'',比赛级别:'',颁奖单位:'',指导教师:''}],
        MainType:['input',{radio:['男','女','zhong','asdasfa'],note:true},{checkBox:['A','B','C'],note:true}],
        RepeatType:['input','input','input','input','input'],
        i:0,
    },
    computed:{
    },
    methods:{
        repeat:function () {
            var attr2,json={}
            for(var attr in this.RepeatableInformations[0]){
                attr2=attr+this.i
                json[attr2]=''
            }
            this.RepeatableInformations.push(json);
            this.i++;
        },
        del:function(){
            this.RepeatableInformations.pop();
            this.i--;
        },
        submit:function(){
            var Form={}
            Form:{this.MainInformations,this.RepeatableInformations}
            alert(JSON.stringify(Form))
            axios.get('1603.php',JSON.stringify(Form))
                .then(function(res){
                    alert(res.data)
                })
                .catch(function(err){
                    alert(err.message)
                });
        },
    },
    computed:{
        md:function () {
            return true
        }
    }
})
var bus = new Vue()
