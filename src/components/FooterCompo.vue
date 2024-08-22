<template>
    <div class="footer">
        <h3>푸터</h3>
      <button onclick="apiTest()">api test</button>
    </div>
</template>

<script>
import axios from "axios";

export default {};

axios.get("https://hesil.site/api/health-check")
    .then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
  // 오류발생시 실행
  console.log("error");
}).then(function() {
  // 항상 실행
});



</script>

<style scoped></style>
