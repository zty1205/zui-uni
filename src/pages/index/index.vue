<template>
  <view class="content" style="background: #ccc;">
    <button @click="showOrModal">打开原生模态窗</button>
    <button @click="showModal">打开模态窗</button>
    <modal
      title="title"
      :visible.sync="visible"
      :actions="actions"
      @cancel="cancel"
      @confirm="confirm"
      @action="action"
    >
      <view style="width: 70vw">
        内容
      </view>
    </modal>
  </view>
</template>

<script>
import modal from '../../components/zui-modal/zui-modal';
export default {
  components: { modal },
  data() {
    return {
      title: 'Hello',
      actions: [
        {
          text: 'btn1'
        },
        {
          text: 'btn2',
          className: '22'
        },
        {
          text: 'btn3',
          className: '33'
        }
      ],
      visible: false
    };
  },
  onLoad() {},
  methods: {
    showOrModal() {
      uni
        .showModal({
          title: 'title',
          content: 'content'
        })
        .then((res) => {
          console.log('success');
        })
        .catch((err) => {
          console.log('err');
        });
    },
    showModal() {
      this.visible = true;
    },
    cancel() {
      this.visible = false;
    },
    confirm() {
      this.visible = false;
    },
    action(data) {
      console.log('data = ', data);
    }
  }
};
</script>

<style></style>
