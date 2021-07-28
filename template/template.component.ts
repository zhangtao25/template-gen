import {ref,onMounted,watch,toRefs,computed} from "vue";

export default {
  components:{
  },
  props:{
  },
  setup(props) {
    // 解构props
    const {} = toRefs(props)

    // ref数据
    const msg = ref<string>('')

    // 不需要返回的方法
    const init = () => {
    }

    // 需要返回的方法
    const test = () =>{}

    // 计算数据
    const testComputed = computed(()=>{
      return 123
    })

    // 生命周期
    onMounted(()=>{
      init()
    })

    // 监听
    watch(msg,()=>{

    })

    // 返回
    return {
      // ref数据
      msg,
      // 计算数据
      testComputed,
      // 方法
      test
    }
  },
};
