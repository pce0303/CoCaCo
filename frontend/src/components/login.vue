
<template>
    <div id="Login">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div class="welcome">Welcome to<br>COCACO!</div>
        <div class="signIn">Sign In</div>
        <div class="signInBackground"></div>
        <div>
            <input class="ID" type="text" name="id" v-model="username" placeholder="ID">
            <br><br>
            <input class="PS" type="password" name="ps" v-model="password" placeholder="PassWord">
        </div>
        <button class ="signInButton" @click="sendData">SIGN IN</button>
        <router-view></router-view>
        <div class="container"></div>
        <!-- v-on:click="OnClickButton" -->
        <!-- <div v-html="svgContent" class="svg"></div> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    sendData () {
      axios.post('/login', {
        username: this.username,
        password: this.password
      })
        .then((response) => {
          console.log(response.data)
          if (response.data.success) {
            this.$router.push('/home')
          }
        })
        .catch((error) => {
          console.error('Error:', error.message)
        })
    }
  }
}
</script>
<style>
    * {
        background-color: #f9c3e6;
    }
    #Login {
        overflow: hidden;
        width:800px;
        height: 400px;
        background-color: #FFD4F0;
        border-radius: 10px;
        position: relative;
        top: 115px;
        left: 370px;
        right: 50px;
        filter: drop-shadow(10px 15px 10px rgba(0, 0, 0, 0.25));
    }

    .welcome {
        background-color: #FFD4F0;
        width: 517px;
        height: 98px;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        position: relative;
        top: 135px;
        right: 50px;
    }
    .signIn {
        width: 241px;
        height: 47px;
        flex-shrink: 0;
        color: #000;
        background-color: white;
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position:relative;
        z-index: 1;
        left: 550px;
        bottom: 20px;
    }

    .signInBackground {
        background-color: white;
        width: 500px;
        height: 400px;
        position:relative;
        bottom: 145px;
        left: 400px;

    }

    input {
        background-color: #D9D9D9;
        opacity: 0.7;
        font-family: Inter;
        font-weight: 700;
        max-width: 230px;
        height: 30px;
        position: relative;
        bottom: 390px;
        left: 480px;
        overflow: hidden;
        border-radius: 10px;
        width: 100%;
        padding: 5px;
        border-radius: 12px;
        border: 1.5px solid lightgrey;
        outline: none;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        box-shadow: 0px 0px 20px -18px;
    }

    input:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
    }

    input:active {
        transform: scale(0.95);
    }

    input:focus {
        border: 2px solid grey;
    }

    .signInButton {
        position:relative;
        bottom: 370px;
        left: 530px;
        display: inline-block;
        padding: 12px 28px;
        margin: 10px;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        background-image: linear-gradient(to bottom right, #ffc2ea, #ff56c4);
        border: none;
        border-radius: 40px;
        box-shadow: 0px 4px 0px #965779;
        transition: all 0.2s ease-in-out;
    }

    .signInButton:hover {
        transform: translateY(-2px);
        box-shadow: 0px 5px 0px #965779;
    }

    .signInButton:active {
        transform: translateY(0px);
        box-shadow: none;
        background-image: linear-gradient(to bottom right, #ff64e0, #ffc2ea);
    }

    .signInButton:before, .signInButton:after {
        content: "";
        position: absolute;
        width:0;
        height:0;
    }

    .signInButton:before {
        top: -3px;
        left: -3px;
        border-radius: 40px;
        border-top: 3px solid #fff;
        border-left: 3px solid #fff;
    }

    .signInButton:after {
        top: -3px;
        right: -3px;
        border-radius: 40px;
        border-bottom: 3px solid #fff;
        border-right: 3px solid #fff;
    }

    .container {
    /* Set display to flex and flex direction to column for vertical layout */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center children */
    align-items: center; /* Horizontally center children */
    min-height: 100vh; /* Ensure the container takes the full viewport height */
    }

</style>
