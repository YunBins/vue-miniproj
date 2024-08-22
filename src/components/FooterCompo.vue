<template>
    <div class="footer">
        <h3>푸터</h3>
      <button onclick="apiTest()">api test</button>
    </div>
</template>

<script>
import axios from "axios";
import {response} from "express";

export default {};

function apiTest() {
  fetch("https://hesil.site/api/health-check", {
    method: "GET"
  }).then((response) => {if(response.ok) return response.json})
      .then(data => {
        console.log("성공");
      })
      .catch(err=>console.log(err));
}
</script>

<style scoped></style>
