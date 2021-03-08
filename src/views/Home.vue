<template>
  <div>
    <a-table :pagination="false" :columns="columns" :data-source="data">
    <span slot="action" slot-scope="text, record">
      <a>Delete</a>
      <a-divider type="vertical" />
      <a>Delete</a>
    </span>
  </a-table>
  <div class="center p-10">
       <a-pagination v-model="current" :total="50" show-less-items />
  </div>

    <!-- <a-button type="primary"> Primary </a-button>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon09shouhoufuwu"></use>
    </svg>
    <i class="iconfont iconarrowdowncirclexiayuanjiantou"></i> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { checkMobileExists } from "@/api/api.js";
 const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: '姓名',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',

  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default {
  name: "home",
  data() {
    return {
      collapsed: false,
      data,
      columns,
      current: 1,
    };
  },
  created() {
    this.addSourceData();
  },
  methods: {
    addSourceData() {
      checkMobileExists({
        where: "大讲堂",
      }).then((res) => {
        console.log(res);
      });
    },
  },
  components: {
    HelloWorld,
  },
}
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
