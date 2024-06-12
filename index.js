// JavaScript source code

const email = document.querySelector("#email")
const subject = document.querySelector("#subject ")
const message = document.querySelector("#message")
const submit = document.querySelector("#submit")



submit.addEventListener("click", (e)=>{
    console.log(email.value, subject.value, message.value)
}
)
