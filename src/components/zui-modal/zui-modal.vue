<template>
  <view v-show="visible" class="zui-mask zui-modal">
    <view class="zui-modal-wrapper">
      <view class="zui-modal-content">
        <view v-if="title" class="zui-modal-title">
          {{ title }}
        </view>
        <view class="zui-modal-body">
          <slot></slot>
        </view>
        <view class="zui-modal-footer">
          <view v-if="actions.length" class="zui-modal-footer-button-wrapper">
            <view
              v-for="(item, index) in actions"
              :key="index"
              @click="handleAction(item, index)"
              class="zui-modal-footer-button"
              :class="item.className"
              :style="{ width: `${100 / actions.length}%` }"
            >
              {{ item.text }}
            </view>
          </view>
          <view v-else class="zui-modal-footer-button-wrapper">
            <view class="zui-modal-footer-button zui-modal-footer-button__cancel" @click="handleCancel">
              {{ cancelText }}
            </view>
            <view class="zui-modal-footer-button zui-modal-footer-button__confirm" @click="handleConfirm">
              {{ confirmText }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <slot name="extra"></slot>
  </view>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    title: String,
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    actions: Array
  },
  methods: {
    handleAction(item, index) {
      this.$emit('action', { item, index });
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleConfirm() {
      this.$emit('confirm');
    }
  }
};
</script>

<style lang="scss">
.zui-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  transform: translateZ(2rpx);
  z-index: $zui-modal-z-index;
  transition: all 0.1s ease-in-out 0;

  #{&}-content {
    border-radius: $zui-modal-border-radius;
    position: relative;
    background-color: #fff;
    border: 0;
    background-clip: padding-box;
    text-align: center;
    min-height: 280rpx;
    min-width: 61.8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #{&}-title {
    margin: 0;
    font-size: $zui-modal-font-size-title;
    line-height: 1;
    color: black;
    text-align: center;
    height: 40rpx;
    width: 100%;
    margin: 24rpx 0;
    font-weight: $zui-modal-font-weight-title;
  }

  #{&}-body {
    flex: 1;
    width: 100%;
  }

  #{&}-footer {
    border-top: 1rpx solid #ccc;
    height: 80rpx;
    width: 100%;
  }

  #{&}-footer-button-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
    line-height: 100%;
    font-size: $zui-modal-font-size-footer;

    .zui-modal-footer-button {
      width: 50%;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1rpx solid #ccc;
    }
    .zui-modal-footer-button:first-of-type {
      border-bottom-left-radius: $zui-modal-border-radius;
    }
    .zui-modal-footer-button:last-of-type {
      border-bottom-right-radius: $zui-modal-border-radius;
      border-right: none;
    }
    .zui-modal-footer-button__cancel {
      color: $zui-modal-color-cancel;
    }
    .zui-modal-footer-button__confirm {
      color: $zui-modal-color-confirm;
    }
  }
}
</style>
