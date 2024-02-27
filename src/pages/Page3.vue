<template>
    <div class="content">
        <my-header></my-header>

        <img src="@/assets/img4.png" class="image1">
        <img src="@/assets/Group.svg" class="image2" >
        <img  src="@/assets/img2.png" class="image3">

        <h1 class="name1">Ux-designer</h1>
        <h1 class="name2">Ux-designer's tools</h1>
        <h1 class="name3">Trends in web design</h1>
        
        <p class="description1">Who is the ux-designer?<br>A web designer is a professional who crafts visual content for websites,
            blending creativity with technical expertise.</p>
        <p class="description2">Tools of Creation<br>From basic mockups to intricate prototypes, web designers use a plethora of tools
            to bring their ideas to life.</p>
        <p class="description3">Where the Wind of Change Blows<br>Stay updated with the current design trends, from responsive layouts to 
            3D visualizations.</p>

    </div>
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

.content {
    display: grid;
    font-size: 2vh;
    font-family: 'Gamja Flower';
    min-height: 100vh;
    grid-template-areas: "head head  head" 
                        "img1 text1 title1"
                        "title2 img2 text2"
                        "text3 title3 img3"
                        ;
    background:linear-gradient(90deg, #A52B12,#F2A84B,#D9A494,#389B8F,#253B6C);

    img{
        align-self: center;
        justify-self: center;
        width: 25vh;
        height: 25vh;
        object-fit: contain;
    }

    h1{
        justify-self: center;
        display: flex;
        border-radius: 100px;
        font-size: 4vh;
        align-items: center;
        align-self: center;
        justify-content: center;
        color: #f0ebeb;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        width: 27vh; 
        height: 27vh;
        background: radial-gradient(circle,rgba(9, 143, 111, 0.685) ,rgba(39, 41, 72, 0.811) 85%);
        text-align: center;
    }
    
    p {
        font-size: 1.5em;
        align-self: center;
        justify-self: center;
        text-align: center;
    }

    @media  (max-width: 600px){
       
        grid-template-areas: "head head "
                        "title1 text1 "
                        "img1   text1 "
                        "text2  title2"
                        "text2 img2"
                        "title3 text3"
                        "img3 text3";

        img{
            width: 20vh;
            height: 20vh;
            margin: 2vh 0;
        }

        h1{
            width: 23vh;
            height: 23vh;
        }
        
        p{
            max-width: 45vw;
        }
    }
    .image1{
        grid-area: img1;
    }
    .image2{
        grid-area: img2;
    }
    .image3{
        grid-area: img3;
    }
    .name1{
        grid-area: title1;
    }
    .name2{
        grid-area: title2;
    }
    .name3{
        grid-area: title3;
    }
    .description1{
        grid-area: text1;
    }
    .description2{
        grid-area: text2;
    }
    .description3{
        grid-area: text3;
    }
}

</style>