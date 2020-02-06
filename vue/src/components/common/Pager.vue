<template>
    <div class="cm_pagination">
        <ul class="pagination">
            <li class="move prev" @click="prev()" v-if="pageNums[0].num>5"> <a @click.prevent href=""></a></li>
            <li :class="{'num on':pageNum.on,'num':!pageNum.on}" v-for="(pageNum,index) of pageNums" :key="pageNum.num" @click="pageSwitch(index)"><a>{{pageNum.num}}</a></li>
            <li class="move next" @click="next()" v-if="pageNums.length==5&& pageNums[4].num<(this.pagination.length/5)">
                <a @click.prevent href=""></a> </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "pagination",
        props:['pagination'],
        data(){
            return{
                pageNums:[{num:1}],
            }
        },
        methods:{
            cutPage(i){
                let pageBlock=[]

                for(let j=(i-1)*5;j<(i-1)*5+5;j++) {
                    if(j>=this.pagination.length){
                        break
                    }
                    pageBlock.push(this.pagination[j])
                }
                return pageBlock
            },

            pageSwitch(i){
                this.pageNums[i].on=true
                for(let j=0; j<this.pageNums.length;j++){
                    if(j!=i){
                        this.pageNums[j].on=false
                    }
                }
                for(let j=0;j<this.pagination.length;j++){
                    this.pagination[j].checked=false
                }

                this.$emit("movePage",this.cutPage(this.pageNums[i].num))
            },

            prev(){
                this.$emit("movePage",this.cutPage(this.pageNums[0].num-5))
                let temp =this.pageNums[0].num
                this.pageNums=[]
                for(let i=0; i<5;i++){
                    (i==0)? this.pageNums.push({num:temp-5,on:true}) :this.pageNums.push({num:temp-5+i,on:false})
                    if(this.pageNums[i].num>=(this.pagination.length/5)){
                        this.pageNums.splice(i,)
                        break
                    }
                }
            },
            next(){
                this.$emit("movePage",this.cutPage(this.pageNums[4].num+1))
                let temp =this.pageNums[0].num
                this.pageNums=[]
                for(let i=0; i<5;i++){
                    (i==0) ? this.pageNums.push({num:temp+5,on:true}) : this.pageNums.push({num:temp+5+i,on:false})
                    if(this.pageNums[i].num>=(this.pagination.length/5)+1){
                        this.pageNums.splice(i,)
                        break
                    }
                }
            },
            first() {
                this.pageNums=[]
                let number= (this.pagination.length/5>=5)?5 : this.pagination.length/5
                Math.ceil(number)
                for(let i=0; i<number;i++){
                    (i==0) ? this.pageNums.push({num:i+1,on:true}):this.pageNums.push({num:i+1,on:false})
                }
                if (this.pagination.length>0){
                    this.$emit("movePage",this.cutPage(this.pageNums[0].num))
                }else{
                    this.pageNums=[{num:''}]
                }



            }
        },

    }
</script>

<style scoped>

</style>