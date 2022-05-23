<template>
 <div class="signupFrm">
    <form action="" class="form">
      <h1 class="title">Registrate</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="Ingrese su e-mail">
        <label for="" class="label">E-mail</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="Ingrese su contraseña">
        <label for="" class="label">Contraseña</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder="Ingrese su contraseña">
        <label for="" class="label">Ingrese nuevamente la contraseña</label>
      </div>

      <input type="submit" class="submitBtn" value="Registrarse">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submitBtn {
  display: block;
  margin-left: auto;
  padding: 15px 30px;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;
}
.input:focus + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: purple;
}

.submitBtn:hover {
  background-color: #9867C5;
  transform: translateY(-2px);
}

.input {
  position: absolute;
  top: 20px;
  left: 0px;

}
.inputContainer {
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
  text-align: left;
}

.signupFrm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  background-color:whitesmoke;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
}

.title {
  font-size: 40px;
  margin-bottom: 50px;
}

.label
{
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: lightyellow;
  font-family: "lato", sans-serif;
}
</style>
