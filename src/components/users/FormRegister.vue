<template>
    <div class="form">
      <div class="title">Bienvenido</div>
      <div class="subtitle">Puedes crear una cuenta!</div>
  
      <div class="input-container ic1">
        <input placeholder="Ingresa un usuario" type="text" class="input" id="firstname" />
        <div class="cut"></div>
        <label class="iLabel" for="firstname">Username</label>
      </div>
  
      <div class="input-container ic2">
        <input placeholder="Ingresa una contraseña" type="password" class="input" id="password" />
        <div class="cut"></div>
        <label class="iLabel" for="password">Password</label>
      </div>
      <div class="input-container ic2">
        <input placeholder="Ingresa un em@il" type="text" class="input" id="email" />
        <div class="cut cut-short"></div>
        <label class="iLabel" for="email">Email</label>
      </div>
      <button class="submit" type="text">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
      name: "FormRegister",
      data() {
          return {};
      },
      methods: {}
  };
  </script>
  
  <style lang="css" scoped>
  .form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 600px;
    padding: 20px;
    width: 340px;
  }
  
  .title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }
  
  .subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
  
  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }
  
  .ic1 {
    margin-top: 40px;
    margin-bottom: 50px;
  }
  
  .ic2 {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  
  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }
  
  
  .iLabel {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 10px;
  }
  
  .input:focus ~ .cut {
    transform: translateY(8px);
  }
  
  .input:focus ~ .iLabel {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }
  
  .input:not(:focus) ~ .iLabel {
    color: #808097;
  }
  
  .input:focus ~ .iLabel {
      color:#0af;
  }
  .input:not(:focus):valid ~ .iLabel {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }
  
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    text-align: center;
    width: 100%;
  }
  .submit:hover {
    background-color: #0af; /* Cambia esto al color que desees cuando el mouse esté sobre el botón */
  }
  .input:focus {
    background-color: #303245;
    border-radius: 12px;
    border: 2px solid #0af; /* Añade un borde cuando el input está en foco */
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }
  
  </style>
  