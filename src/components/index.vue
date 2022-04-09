<template>
  <div class="content">
    <!-- 聊天室 -->
    <div class="chart"></div>

    <!-- 成員 -->
    <div class="member"></div>

    <!-- submit -->
    <div class="chart-input">
      姓名：<input id="name" /><br />
      聊天內容：<input id="content" /><br />
      <button id="btn">送出資料</button>
    </div>

    <!-- profile -->
    <div class="profile"></div>
  </div>


</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String,
  },
};
</script>