<template>
    <div>
        {{now}}
        <button @click = "start = !start">{{start ? 'Stop' : 'Start'}}</button>
    </div>
</template>

<script>
import moment from 'moment'
import { clearInterval, setInterval } from 'timers';
export default {
    data(){
        return {
            now:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
            start:false
        }
    },
    watch:{
        start(){
            console.log('start has been changed to :' + this.start)
            this.startClock()
        }
    },
    beforeCreate(){
        console.log('The Clock component is going to be created.')
    },
    created(){
        console.log('The Clock component has been created now.')
    },
    beforeMount(){
        console.log('The Clock component is going to be mounted.')
    },
    mounted(){
        console.log('The Clock component has been mounted.')
        this.startClock()
        console.log('The Clock has been started.')
    },
    beforeUpdate(){
        console.log('The Clock component is going to be updated.')
    },
    updated(){
        console.log('The Clock component has been updated.')
    },
    beforeDestroy(){
        concole.log('The Clock component is going to be destroied.')
    },
    destroyed(){
        console.log('The Clock component has been destroied.')
    },
    methods:{
        startClock(){
            clearInterval(this.clockInterval)
            if(this.start){
                this.clockInterval = setInterval(() => {
                    this.now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')        
                }, 1000)
            }
        }
    }
}
</script>

<style>

</style>
