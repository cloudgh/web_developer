<template>
  <div class="header">
      <button class="btn1" @click="goTo('/')">Main</button>
      <button class="btn2" @click="goTo('/page3')">UX designer</button>
      <button class="btn3" @click="goTo('/page2')">Front-end developer</button>
  </div>
</template>
<script>
export default {
    methods: {
      goTo(route) {
        this.$router.push(route);
      } 
    }
  }
</script>

<style lang="scss" scoped>
.header {
  grid-area: head; 
  display: flex;
  justify-content: center;
  font-size: 2vh;
 
  button {
    color:aliceblue;
    text-shadow: 0 1px 4px rgba(0,0,0,0.8);
    flex-basis: auto;
    font-family: 'Gamja Flower';
    padding: 1vh 0.7vh;
    font-size: 4vh;
    border-radius: 15px;
    cursor: pointer;
    text-decoration: none;
    margin: 2vw;
    
  }
  .btn1{
    background: linear-gradient(to right,#c33e27bf,#d58c1fc5);
  }
  .btn2{
    background: linear-gradient(to right,#d58c1fc5,#469978bb);
  }
  .btn3{
    background: linear-gradient(to right,#469978bb,#8777d9d3);
  }
  button:hover {
    transform: translateY(-5px);
    transition: transform 0.1s ease-out;
  }
}
</style>