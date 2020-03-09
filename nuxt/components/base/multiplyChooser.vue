<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li v-for="(item,index) in selections" @click="toggleSelect(index)" :class="{active:activeChange(index)}">{{item.label}}</li>
        </ul>
      </div>
</template>

<script>
/*第三方工具库*/
import _ from 'lodash'
export default {
  props: {
    selections:{
        type:Array,
        default:[{
            label: 'test',
            value: 0
        }]
    }
  },
  data () {
    return {
      nowIndex:[0]
    }
  },
  methods: {
    toggleSelect(index){
        if(this.nowIndex.indexOf(index) === -1){
            this.nowIndex.push(index)
        }else{
            this.nowIndex=_.remove(this.nowIndex,(idx)=>{
                return idx!==index
            })
        }
        let nowArray=_.map(this.nowIndex,(idx)=>{
            return this.selections[idx]
        })
        this.$emit('on-change',nowArray)
    },
    activeChange(index){
        return this.nowIndex.indexOf(index)!==-1
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
