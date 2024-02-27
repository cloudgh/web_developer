<template>
    
    <div class="content">
        <my-header></my-header>
        <div  class="text">
            <p>A Front-end developer is a critical role in web development, responsible for creating the user interface and ensuring a 
                seamless user experience. They work with the visual elements of a website, such as layouts, fonts, colors, and interactive
                features. Front-end developers are proficient in HTML, CSS, and JavaScript, which are the building blocks of web design. 
                They collaborate closely with UI/UX designers to bring their designs to life, translating mockups and wireframes into 
                functional web pages. Responsive web design is a core aspect of their work, ensuring that websites look and function 
                well on various devices and screen sizes. Front-end developers are also responsible for optimizing web performance, making 
                sure sites load quickly and efficiently. They must stay updated on the latest web technologies and trends to create modern 
                and user-friendly websites. In addition, they play a vital role in cross-browser compatibility, ensuring that websites work 
                consistently across different web browsers.</p>
            <div class="round">
                <div class="circles">
                    <span class="y_circle">Web and mobile <br> design</span>
                    <span class="g_circle">User Experience <br> design</span>
                    <span class="r_circle">Code</span>
                    <span class="o_circle">Creativity</span>
                </div>
                    <h2 class="circle"></h2>
            </div>
        </div>
    </div>
    <div class="background-container"></div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
export default {
    components:{
        MyHeader
    },
}
</script>

<style lang="scss" scoped>

.background-container {
    background-image: url("@/assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    min-width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.9;
    z-index: 0;
}

.content {
    display: flex;
    position: relative;
    z-index: 1;
    flex-direction: column;
    min-height: 100vh;
    color:#f0ebeb;
    font-family: 'Gamja Flower';
    font-size: 1.5em;
    .text{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        min-width:80vw;

        p {
            margin: 4.5vh 0;
            background: linear-gradient(90deg, #9b3220bf,#bf9198d3,#168085c6);
            text-shadow: 0 2px 4px rgba(0,0,0,0.8);
            font-size: 4vh;
            width: 65vw;
            border: 4px solid transparent;
            border-image: linear-gradient(90deg, #551b11,#533f42,#0c4649);
            border-image-slice: 1;
        }
    }
}
.round{
    width: 48vh;
    height: 45vh;
    .circles{
        display: grid;
        opacity: 1;
        margin-top: 0px;
        margin-left: 0px;
        grid-template-columns: 21vh 27vh;
        grid-template-rows: 18vh 27vh;

        span{
            display: flex;
            border-radius: 100px;
            font-size: 3vh;
            align-items: center;
            justify-content: center;
            color: #f0ebeb;
            text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }
        .y_circle{
            width: 23vh; 
            height: 23vh;
            background-color: #d58c1fc5;
        }
        .g_circle{
            width: 27vh; 
            height: 27vh;
            background-color: #469978bb;
            text-align: right;;
        }
        .r_circle{
            width: 27vh; 
            height: 27vh;
            background-color: #8777d9d3;
        }
        .o_circle{
            width: 20vh; 
            height: 20vh;
            background-color: #c33e27bf;
        }
    }
    .circle {
        position: relative;
        width: 12.5vh;
        height: 12.5vh;
        top:-30vh;
        left:14vh;
        background:
            radial-gradient(circle at 75% 75%,
                        #41d27be5 15%,
                        transparent 50%
            ),
        
            radial-gradient(circle at 75% 25%,
                        #8777d9e9 15%,
                        transparent 50%
                        
            ),
            radial-gradient(circle at 25% 25%,
                        rgba(230, 4, 4, 0.727) 15%,
                        transparent 50%
                            
            ), 
            radial-gradient(circle at 25% 75%,
                        rgba(224, 116, 0, 0.841) 15%,
                        transparent 50%
            );

        border-radius: 50%;
        background-origin: border-box;
    }
}

</style>