<template>
    <div class="content">

        <div class="logo">
            <img src="@/assets/logo.png"> 
            <h1>Site design</h1>
            <h2>UX designer, front-end developer</h2>
        </div>

        <h3>HI, I want to tell you about web-design</h3>

        <div class="btn">
            <button class="btn1" @click="goTo('/page3')">UX designer</button>
            <button class="btn2" @click="goTo('/page2')">Front-end developer</button>
        </div>

    </div>
    <div class="background-container"></div>
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

.background-container {
    background-image: url("@/assets/background1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.9;
    z-index: 0;
}
.content{
    position: relative;
    z-index: 1;
    font-size: 2vh;
    color: rgb(231, 214, 182);
    font-family: 'Gamja Flower';
    padding: 2vh 6vw;

    h3 {
    margin-top: 0.2em;
    font-size: 10vw;
    text-align: center;
    text-shadow: (5px 3px 5px rgb(59, 51, 47), 
                 25px 15px 8px rgba(247, 172, 31, 0.656));
    transition: 0.1s ease-in-out;
    }

    $h-margin: 20px;
    h3:hover {
        margin-top: $h-margin;
        margin-right: $h-margin / 2;
        margin-bottom: $h-margin / 2;
        margin-left: $h-margin * 1.5;
        box-shadow: $h-margin / 2
                    $h-margin / 2 
                    20px 
                    rgba(0, 0, 0, 0.499);
        transition: 0.3s ease-out;
    }
    

}

.logo {
    display: flex;
    align-items: flex-end;
    
    img {
        width: 4em;
        align-self:center;
    }

    h1 {
        
        font-family: 'Gamja Flower';
        font-size: 4em;
        flex-basis: calc(100vw - 9em);
        border-bottom: solid 0.06em #c09766ae;
        
    }

    h2 {
        text-align: end;
        font-size: 1.5em;
        font-family: 'Gamja Flower';
        padding-bottom: 10px;
        border-bottom: solid 0.15em #c09766ae;

    }

   
}

.btn{
    display: flex;
    justify-content:center;
    margin-top: 1.2em;
    button{
        width: 25vh;
        height: 25vh;
        font-size: 4vh;
        border-radius: 100px;
        margin: 0 2vw;
        color:antiquewhite;
    }
    .btn1{
        background: radial-gradient(circle,rgba(9, 143, 111, 0.685) ,rgba(39, 41, 72, 0.811) );
    }
    .btn2{
        background: radial-gradient(circle, rgba(255, 0, 0, 0.504), rgba(169, 169, 10, 0.836));
    }

    button:hover{
        width: 28vh;
        height: 28vh;
        margin-top: -5vh;
        transition: 0.2s ease-in;
    }
}

</style>