<template>
    <div class="footer">
        <h3>푸터</h3>
      <button @click="apiTest()">api test</button>
    </div>
</template>

<script>
function apiTest() {
  fetch("https://hesil.site/api/health-check", {
    method: "GET"
  }).then((response) => {if(response.ok) return response.text})
      .then(data => {
        console.log(data);
        console.log("22222");
      })
      .catch(err=>console.log(err));
}
</script>

<style scoped></style>
